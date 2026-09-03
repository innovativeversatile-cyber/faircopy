import { canvasToBlob, renderPage } from "./render.js";

const A4 = { w: 595.28, h: 841.89 };

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing && window.PDFLib) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("The PDF library failed to load."));
    document.head.appendChild(s);
  });
}

let libPromise = null;

export function preloadPdfLib() {
  if (!libPromise) {
    libPromise = loadScript("vendor/pdf-lib.min.js");
  }
  return libPromise;
}

/**
 * @param {{ bitmap: ImageBitmap, rotation: number, crop: object|null, look: string }[]} pages
 * @param {(info: { current: number, total: number }) => void} onProgress
 */
export async function makePdf(pages, onProgress) {
  await preloadPdfLib();
  const { PDFDocument } = window.PDFLib;
  const pdf = await PDFDocument.create();
  pdf.setTitle("Fair Copy");
  pdf.setCreator("Fair Copy");
  pdf.setProducer("Fair Copy (on this device)");

  for (let i = 0; i < pages.length; i++) {
    onProgress?.({ current: i + 1, total: pages.length });
    const canvas = renderPage(pages[i].bitmap, pages[i], 1800);
    const quality = pages[i].look === "ink" ? 0.9 : 0.82;
    const blob = await canvasToBlob(canvas, "image/jpeg", quality);
    const bytes = new Uint8Array(await blob.arrayBuffer());
    const jpg = await pdf.embedJpg(bytes);
    const landscape = jpg.width > jpg.height;
    const page = pdf.addPage(landscape ? [A4.h, A4.w] : [A4.w, A4.h]);
    const margin = 18;
    const maxW = page.getWidth() - margin * 2;
    const maxH = page.getHeight() - margin * 2;
    const scale = Math.min(maxW / jpg.width, maxH / jpg.height);
    const w = jpg.width * scale;
    const h = jpg.height * scale;
    page.drawImage(jpg, {
      x: (page.getWidth() - w) / 2,
      y: (page.getHeight() - h) / 2,
      width: w,
      height: h
    });
  }

  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
}

export function pdfFileName(date = new Date()) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = String(date.getDate()).padStart(2, "0");
  return `Fair-Copy-${day}-${months[date.getMonth()]}-${date.getFullYear()}.pdf`;
}
