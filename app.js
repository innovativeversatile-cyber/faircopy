import { bitmapFromBlob, renderPage } from "./render.js";
import { makePdf, pdfFileName, preloadPdfLib } from "./pdf.js";
import {
  t,
  formatMoney,
  passAmount,
  paymentUrl,
  hasAnyPayment,
  onLocaleChange
} from "./locale.js";

const cfg = window.FAIRCOPY_CONFIG || {};
const FREE_PAGES = cfg.freePages || 3;
const PAID_PAGES = cfg.paidPages || 40;
const PASS_KEY = "faircopy.pass";
const PENDING_KEY = "faircopy.pendingPass";
const USED_FREE_KEY = "faircopy.usedFree";

const state = {
  pages: [],
  selected: 0,
  busy: false
};

const els = {};

function $(id) {
  return document.getElementById(id);
}

function pageLimit() {
  return hasPass() ? PAID_PAGES : FREE_PAGES;
}

function hasPass() {
  try {
    const raw = localStorage.getItem(PASS_KEY);
    if (!raw) return false;
    const pass = JSON.parse(raw);
    if (!pass || !pass.until || Date.now() > pass.until) {
      localStorage.removeItem(PASS_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function passLabel() {
  try {
    const pass = JSON.parse(localStorage.getItem(PASS_KEY) || "null");
    if (!pass || Date.now() > pass.until) return "";
    const left = pass.until - Date.now();
    const hours = Math.max(1, Math.round(left / 36e5));
    if (hours < 48) return t("pass.day", { hours });
    const days = Math.round(hours / 24);
    return t("pass.long", { days });
  } catch {
    return "";
  }
}

function hasUsedFree() {
  try {
    return localStorage.getItem(USED_FREE_KEY) === "1";
  } catch {
    return false;
  }
}

function needsPass() {
  return !hasPass() && hasUsedFree();
}

function markFreeUsed() {
  if (hasPass()) return;
  try {
    localStorage.setItem(USED_FREE_KEY, "1");
  } catch {
    /* private mode */
  }
}

function honorReturningPayment() {
  const params = new URLSearchParams(location.search);
  const plan = params.get("pass");
  const hoursTable = cfg.passHours || {};
  if (!plan || hoursTable[plan] == null) return;
  let pending = null;
  try {
    pending = JSON.parse(sessionStorage.getItem(PENDING_KEY) || "null");
  } catch {
    pending = null;
  }
  if (!pending || pending.plan !== plan) return;
  const hours = hoursTable[plan] || 24;
  localStorage.setItem(
    PASS_KEY,
    JSON.stringify({ plan, until: Date.now() + hours * 36e5 })
  );
  sessionStorage.removeItem(PENDING_KEY);
  history.replaceState({}, "", location.pathname + location.hash);
}

function bind() {
  els.desk = $("desk");
  els.hero = $("hero");
  els.workspace = $("workspace");
  els.preview = $("preview");
  els.previewImg = $("preview-img");
  els.film = $("film");
  els.status = $("status");
  els.make = $("make-pdf");
  els.addCamera = $("add-camera");
  els.addFiles = $("add-files");
  els.inputCamera = $("input-camera");
  els.inputFiles = $("input-files");
  els.looks = $("looks");
  els.cropLayer = $("crop-layer");
  els.cropBox = $("crop-box");
  els.limitSheet = $("limit-sheet");
  els.doneSheet = $("done-sheet");
  els.passNote = $("pass-note");
}

function requestAdd(source) {
  if (needsPass()) {
    openLimit("used");
    return;
  }
  if (state.pages.length >= pageLimit()) {
    openLimit("pages");
    return;
  }
  if (source === "camera") els.inputCamera.click();
  else els.inputFiles.click();
}

function setupEvents() {
  els.addCamera.addEventListener("click", () => requestAdd("camera"));
  els.addFiles.addEventListener("click", () => requestAdd("files"));
  $("ws-camera")?.addEventListener("click", () => requestAdd("camera"));
  $("ws-files")?.addEventListener("click", () => requestAdd("files"));

  els.inputCamera.addEventListener("change", () => ingestFiles(els.inputCamera.files));
  els.inputFiles.addEventListener("change", () => ingestFiles(els.inputFiles.files));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button.price-buy[data-price]");
    if (!btn || btn.disabled) return;
    const plan = btn.getAttribute("data-price");
    if (!["day", "month", "year"].includes(plan)) return;
    e.preventDefault();
    beginPurchase(plan);
  });

  ["dragenter", "dragover"].forEach((name) => {
    document.addEventListener(name, (e) => {
      e.preventDefault();
      els.desk.classList.add("is-drop");
    });
  });
  ["dragleave", "drop"].forEach((name) => {
    document.addEventListener(name, (e) => {
      if (name === "dragleave" && e.target !== document.documentElement) return;
      e.preventDefault();
      els.desk.classList.remove("is-drop");
    });
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    els.desk.classList.remove("is-drop");
    if (e.dataTransfer?.files?.length) ingestFiles(e.dataTransfer.files);
  });

  els.make.addEventListener("click", writePdf);
  $("rotate")?.addEventListener("click", rotateSelected);
  $("crop")?.addEventListener("click", startCrop);
  $("crop-apply")?.addEventListener("click", applyCrop);
  $("crop-cancel")?.addEventListener("click", cancelCrop);
  $("remove-page")?.addEventListener("click", removeSelected);
  $("page-up")?.addEventListener("click", () => moveSelected(-1));
  $("page-down")?.addEventListener("click", () => moveSelected(1));
  $("close-limit")?.addEventListener("click", () => setSheet(els.limitSheet, false));
  $("close-done")?.addEventListener("click", () => setSheet(els.doneSheet, false));
  $("share-tool")?.addEventListener("click", shareTool);
  $("copy-link")?.addEventListener("click", copyLink);
  $("another")?.addEventListener("click", startOver);

  els.looks?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-look]");
    if (!btn) return;
    const page = currentPage();
    if (!page) return;
    page.look = btn.getAttribute("data-look");
    renderPreview();
    renderLooks();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cancelCrop();
      setSheet(els.limitSheet, false);
      setSheet(els.doneSheet, false);
    }
  });
}

function currentPage() {
  return state.pages[state.selected] || null;
}

let ingestChain = Promise.resolve();

function ingestFiles(fileList) {
  const files = [...(fileList || [])];
  resetInputs();
  ingestChain = ingestChain.then(() => ingestFilesNow(files)).catch(() => {});
  return ingestChain;
}

function trimToLimit() {
  const cap = pageLimit();
  let trimmed = false;
  while (state.pages.length > cap) {
    const extra = state.pages.pop();
    extra?.bitmap?.close?.();
    trimmed = true;
  }
  if (state.selected >= state.pages.length) {
    state.selected = Math.max(0, state.pages.length - 1);
  }
  return trimmed;
}

async function ingestFilesNow(fileList) {
  const files = fileList.filter((f) => f.type.startsWith("image/") || /\.heic$/i.test(f.name));
  if (!files.length) {
    setStatus(t("err.notImage"));
    return;
  }
  if (needsPass()) {
    openLimit("used");
    return;
  }
  let blocked = state.pages.length >= pageLimit();
  if (blocked) {
    openLimit("pages");
    return;
  }
  for (const file of files) {
    if (state.pages.length >= pageLimit()) {
      blocked = true;
      break;
    }
    try {
      const bitmap = await bitmapFromBlob(file);
      if (state.pages.length >= pageLimit()) {
        bitmap.close?.();
        blocked = true;
        break;
      }
      state.pages.push({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: file.name || "page",
        bitmap,
        rotation: 0,
        crop: null,
        look: "paper"
      });
    } catch {
      setStatus(t("err.heic"));
    }
  }
  if (trimToLimit()) blocked = true;
  if (state.pages.length) state.selected = state.pages.length - 1;
  renderAll();
  if (blocked) openLimit("pages");
  $("workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetInputs() {
  els.inputCamera.value = "";
  els.inputFiles.value = "";
}

function rotateSelected() {
  const page = currentPage();
  if (!page) return;
  page.rotation = (page.rotation + 1) % 4;
  page.crop = null;
  renderPreview();
  renderFilm();
}

function moveSelected(dir) {
  const i = state.selected;
  const j = i + dir;
  if (j < 0 || j >= state.pages.length) return;
  const tmp = state.pages[i];
  state.pages[i] = state.pages[j];
  state.pages[j] = tmp;
  state.selected = j;
  renderFilm();
}

function removeSelected() {
  if (!currentPage()) return;
  const { bitmap } = state.pages[state.selected];
  bitmap.close?.();
  state.pages.splice(state.selected, 1);
  state.selected = Math.max(0, state.selected - 1);
  renderAll();
}

function startCrop() {
  const page = currentPage();
  if (!page) return;
  els.preview.classList.add("is-cropping");
  $("crop-toolbar").hidden = false;
  $("page-toolbar").hidden = true;
  const crop = page.crop || { x: 0.04, y: 0.04, w: 0.92, h: 0.92 };
  page._draftCrop = { ...crop };
  layoutCrop();
  attachCropDrag();
}

function cancelCrop() {
  const page = currentPage();
  if (page) delete page._draftCrop;
  els.preview.classList.remove("is-cropping");
  if ($("crop-toolbar")) $("crop-toolbar").hidden = true;
  if ($("page-toolbar")) $("page-toolbar").hidden = false;
}

function applyCrop() {
  const page = currentPage();
  if (page?._draftCrop) {
    page.crop = { ...page._draftCrop };
    delete page._draftCrop;
  }
  cancelCrop();
  renderPreview();
  renderFilm();
}

function layoutCrop() {
  const page = currentPage();
  if (!page?._draftCrop) return;
  const img = els.previewImg;
  const frame = els.cropLayer;
  if (!img.naturalWidth) {
    img.addEventListener("load", layoutCrop, { once: true });
    return;
  }
  const fr = frame.getBoundingClientRect();
  const scale = Math.min(fr.width / img.naturalWidth, fr.height / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const left = (fr.width - w) / 2;
  const top = (fr.height - h) / 2;
  const c = page._draftCrop;
  els.cropBox.style.left = `${left + c.x * w}px`;
  els.cropBox.style.top = `${top + c.y * h}px`;
  els.cropBox.style.width = `${c.w * w}px`;
  els.cropBox.style.height = `${c.h * h}px`;
  frame.dataset.map = JSON.stringify({ left, top, w, h });
}

function attachCropDrag() {
  const box = els.cropBox;
  box.onpointerdown = (e) => {
    const handle = e.target.closest("[data-handle]");
    const map = JSON.parse(els.cropLayer.dataset.map || "null");
    const page = currentPage();
    if (!map || !page?._draftCrop) return;
    e.preventDefault();
    box.setPointerCapture(e.pointerId);
    const start = { x: e.clientX, y: e.clientY, crop: { ...page._draftCrop }, handle: handle?.dataset.handle || "move" };
    const onMove = (ev) => {
      const dx = (ev.clientX - start.x) / map.w;
      const dy = (ev.clientY - start.y) / map.h;
      page._draftCrop = resizeCrop(start.crop, start.handle, dx, dy);
      layoutCrop();
    };
    const onUp = () => {
      box.onpointermove = null;
      box.onpointerup = null;
    };
    box.onpointermove = onMove;
    box.onpointerup = onUp;
  };
}

function resizeCrop(crop, handle, dx, dy) {
  let { x, y, w, h } = crop;
  const min = 0.12;
  if (handle === "move") {
    x += dx;
    y += dy;
    x = Math.min(Math.max(0, x), 1 - w);
    y = Math.min(Math.max(0, y), 1 - h);
    return { x, y, w, h };
  }
  if (handle.includes("w")) {
    const nx = Math.min(Math.max(0, x + dx), x + w - min);
    w += x - nx;
    x = nx;
  }
  if (handle.includes("e")) {
    w = Math.min(1 - x, Math.max(min, w + dx));
  }
  if (handle.includes("n")) {
    const ny = Math.min(Math.max(0, y + dy), y + h - min);
    h += y - ny;
    y = ny;
  }
  if (handle.includes("s")) {
    h = Math.min(1 - y, Math.max(min, h + dy));
  }
  return { x, y, w, h };
}

function renderAll() {
  const has = state.pages.length > 0;
  els.hero.hidden = has;
  els.workspace.hidden = !has;
  document.body.classList.toggle("has-pages", has);
  renderLooks();
  renderFilm();
  renderPreview();
  renderChrome();
}

function renderChrome() {
  const n = state.pages.length;
  const limit = pageLimit();
  els.make.disabled = n === 0 || state.busy;
  els.make.textContent = state.busy
    ? els.make.dataset.busyText || t("btn.make")
    : t("btn.make");
  if (els.passNote) {
    if (needsPass()) {
      els.passNote.textContent = t("pass.used");
      els.passNote.hidden = false;
    } else {
      const text = passLabel();
      els.passNote.textContent = text;
      els.passNote.hidden = !text;
    }
  }
  const another = $("another");
  if (another) another.textContent = t(needsPass() ? "done.anotherPaid" : "done.another");
  const count = $("page-count");
  if (count) {
    const key = n === 1 ? "count.one" : "count";
    count.textContent = n ? t(key, { n, limit }) : "";
  }
  const multi = n > 1;
  $("page-up")?.toggleAttribute("hidden", !multi);
  $("page-down")?.toggleAttribute("hidden", !multi);
  syncPaySurfaces();
}

function renderLooks() {
  const page = currentPage();
  if (!els.looks) return;
  els.looks.querySelectorAll("[data-look]").forEach((btn) => {
    btn.setAttribute("aria-pressed", page && page.look === btn.dataset.look ? "true" : "false");
  });
}

function renderFilm() {
  if (!els.film) return;
  els.film.innerHTML = "";
  state.pages.forEach((page, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "thumb" + (i === state.selected ? " is-current" : "");
    btn.setAttribute("aria-label", t("page", { n: i + 1 }));
    const canvas = renderPage(page.bitmap, page, 220);
    const img = document.createElement("img");
    img.alt = "";
    img.src = canvas.toDataURL("image/jpeg", 0.7);
    btn.appendChild(img);
    const cap = document.createElement("span");
    cap.textContent = String(i + 1);
    btn.appendChild(cap);
    btn.addEventListener("click", () => {
      state.selected = i;
      cancelCrop();
      renderAll();
    });
    els.film.appendChild(btn);
  });
}

let previewToken = 0;

function renderPreview() {
  const page = currentPage();
  if (!page) {
    els.previewImg.removeAttribute("src");
    return;
  }
  const token = ++previewToken;
  const canvas = renderPage(page.bitmap, page, 1100);
  if (token !== previewToken) return;
  els.previewImg.src = canvas.toDataURL("image/jpeg", 0.86);
  els.previewImg.alt = t("page", { n: state.selected + 1 });
}

function setStatus(text) {
  if (!els.status) return;
  els.status.textContent = text || "";
}

function setSheet(el, open) {
  if (!el) return;
  el.hidden = !open;
  el.setAttribute("aria-hidden", open ? "false" : "true");
}

let limitReason = "pages";

function refreshLimitCopy() {
  const title = $("limit-title");
  const body = $("limit-copy");
  if (title) title.textContent = t(limitReason === "used" ? "limit.used.title" : "limit.title");
  if (body) body.textContent = t(limitReason === "used" ? "limit.used.p" : "limit.p");
}

function openLimit(reason) {
  limitReason = reason || (needsPass() ? "used" : "pages");
  refreshLimitCopy();
  fillPrices();
  setSheet(els.limitSheet, true);
}

function beginPurchase(plan) {
  const url = paymentUrl(plan);
  if (!url) return;
  sessionStorage.setItem(PENDING_KEY, JSON.stringify({ plan, t: Date.now() }));
  location.href = url;
}

async function writePdf() {
  if (!state.pages.length || state.busy) return;
  if (needsPass()) {
    openLimit("used");
    return;
  }
  if (trimToLimit()) renderAll();
  if (state.pages.length > pageLimit()) {
    openLimit("pages");
    return;
  }
  state.busy = true;
  els.make.dataset.busyText = t("busy.writing", { current: 1, total: state.pages.length });
  renderChrome();
  setStatus("");
  try {
    const blob = await makePdf(state.pages, ({ current, total }) => {
      els.make.dataset.busyText = t("busy.writing", { current, total });
      els.make.textContent = els.make.dataset.busyText;
    });
    const name = pdfFileName();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    refreshDoneSaved(name);
    markFreeUsed();
    setSheet(els.doneSheet, true);
  } catch (err) {
    setStatus(err?.message || t("err.pdf"));
  } finally {
    state.busy = false;
    renderChrome();
  }
}

async function shareTool() {
  const url = location.href.split("?")[0];
  const text = t("share.text");
  try {
    if (navigator.share) {
      await navigator.share({ title: "Fair Copy", text, url });
      return;
    }
  } catch {
    /* user cancelled */
    return;
  }
  await copyLink();
}

async function copyLink() {
  const url = location.href.split("?")[0];
  try {
    await navigator.clipboard.writeText(url);
    $("copy-link").textContent = t("done.copied");
    setTimeout(() => {
      $("copy-link").textContent = t("done.copy");
    }, 1600);
  } catch {
    setStatus(url);
  }
}

function startOver() {
  state.pages.forEach((p) => p.bitmap.close?.());
  state.pages = [];
  state.selected = 0;
  setSheet(els.doneSheet, false);
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (needsPass()) openLimit("used");
}

function syncPaySurfaces() {
  const paid = hasPass();
  const canPay = hasAnyPayment();
  const passBuy = $("pass-buy");
  if (passBuy) passBuy.hidden = paid || !canPay;
  const donePay = $("done-pay");
  if (donePay) donePay.hidden = paid || !canPay;
  document.querySelectorAll("button.price-buy[data-price]").forEach((btn) => {
    const plan = btn.getAttribute("data-price");
    btn.disabled = !paymentUrl(plan);
  });
  const split = $("limit-split");
  if (split) split.hidden = canPay;
}

function fillPrices() {
  document.querySelectorAll("[data-price]").forEach((el) => {
    const plan = el.getAttribute("data-price");
    const amount = passAmount(plan);
    if (amount == null) return;
    const formatted = formatMoney(amount);
    const amt = el.querySelector("[data-amt]");
    if (amt) amt.textContent = formatted;
    else el.textContent = formatted;
    if (el.matches("button")) {
      el.setAttribute("aria-label", `${t("plan." + plan)} · ${formatted} · ${t("prices.pay")}`);
    }
  });
  syncPaySurfaces();
}

function refreshDoneSaved(name) {
  const p = $("done-saved");
  const file = name || $("done-filename")?.textContent || "Fair-Copy.pdf";
  if (!p) return;
  p.textContent = "";
  const parts = t("done.saved", { name: "\u0000" }).split("\u0000");
  p.append(parts[0] || "");
  const strong = document.createElement("strong");
  strong.id = "done-filename";
  strong.textContent = file;
  p.append(strong);
  if (parts[1]) p.append(parts[1]);
}

onLocaleChange(() => {
  fillPrices();
  renderChrome();
  refreshLimitCopy();
  els.film?.querySelectorAll(".thumb").forEach((btn, i) => {
    btn.setAttribute("aria-label", t("page", { n: i + 1 }));
  });
  if (currentPage() && els.previewImg) {
    els.previewImg.alt = t("page", { n: state.selected + 1 });
  }
  const doneName = $("done-filename")?.textContent;
  if (doneName) refreshDoneSaved(doneName);
});

honorReturningPayment();
bind();
setupEvents();
fillPrices();
renderAll();
setStatus("");

if ("requestIdleCallback" in window) {
  requestIdleCallback(() => preloadPdfLib());
} else {
  setTimeout(() => preloadPdfLib(), 400);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
