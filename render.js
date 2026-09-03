/** Draw a page (photo → crop → rotate → look) onto a canvas. */

export const LOOKS = {
  original: "As shot",
  paper: "Paper",
  ink: "Ink"
};

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export async function bitmapFromBlob(blob) {
  try {
    return await createImageBitmap(blob, { imageOrientation: "from-image" });
  } catch {
    return await createImageBitmap(blob);
  }
}

function rotatedSize(w, h, quarterTurns) {
  return quarterTurns % 2 === 0 ? { w, h } : { w: h, h: w };
}

/**
 * @param {ImageBitmap} bitmap
 * @param {{ rotation: number, crop: {x:number,y:number,w:number,h:number}|null, look: string }} page
 * @param {number} maxEdge
 */
export function renderPage(bitmap, page, maxEdge) {
  const turns = ((page.rotation % 4) + 4) % 4;
  const rot = rotatedSize(bitmap.width, bitmap.height, turns);
  const crop = page.crop || { x: 0, y: 0, w: 1, h: 1 };
  const srcW = Math.max(1, rot.w * crop.w);
  const srcH = Math.max(1, rot.h * crop.h);
  const scale = Math.min(1, maxEdge / Math.max(srcW, srcH));
  const outW = Math.max(1, Math.round(srcW * scale));
  const outH = Math.max(1, Math.round(srcH * scale));

  const scratch = document.createElement("canvas");
  scratch.width = rot.w;
  scratch.height = rot.h;
  const sctx = scratch.getContext("2d", { alpha: false });
  sctx.imageSmoothingEnabled = true;
  sctx.imageSmoothingQuality = "high";
  sctx.translate(rot.w / 2, rot.h / 2);
  sctx.rotate((turns * Math.PI) / 2);
  sctx.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2);

  const canvas = document.createElement("canvas");
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext("2d", { alpha: false, willReadFrequently: page.look !== "original" });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    scratch,
    rot.w * crop.x,
    rot.h * crop.y,
    srcW,
    srcH,
    0,
    0,
    outW,
    outH
  );

  if (page.look && page.look !== "original") {
    const imageData = ctx.getImageData(0, 0, outW, outH);
    applyLook(imageData, page.look);
    ctx.putImageData(imageData, 0, 0);
  }
  return canvas;
}

function applyLook(imageData, look) {
  const d = imageData.data;
  const pixels = d.length / 4;
  const hist = new Uint32Array(256);
  for (let i = 0; i < d.length; i += 4) {
    const y = (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) | 0;
    hist[clamp(y, 0, 255)]++;
  }
  const lowCut = pixels * 0.012;
  const highCut = pixels * 0.012;
  let acc = 0;
  let low = 0;
  let high = 255;
  for (let i = 0; i < 256; i++) {
    acc += hist[i];
    if (acc >= lowCut) {
      low = i;
      break;
    }
  }
  acc = 0;
  for (let i = 255; i >= 0; i--) {
    acc += hist[i];
    if (acc >= highCut) {
      high = i;
      break;
    }
  }
  if (high <= low + 8) {
    high = Math.min(255, low + 32);
  }
  const scale = 255 / (high - low);

  if (look === "paper") {
    for (let i = 0; i < d.length; i += 4) {
      let r = (d[i] - low) * scale;
      let g = (d[i + 1] - low) * scale;
      let b = (d[i + 2] - low) * scale;
      r = r * 0.99 + 6;
      g = g * 0.975 + 8;
      b = b * 0.94 + 4;
      const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (y > 208) {
        const t = clamp((y - 208) / 47, 0, 1);
        r += (246 - r) * t;
        g += (241 - g) * t;
        b += (228 - b) * t;
      }
      if (y < 80) {
        r *= 0.92;
        g *= 0.92;
        b *= 0.9;
      }
      d[i] = clamp(r, 0, 255);
      d[i + 1] = clamp(g, 0, 255);
      d[i + 2] = clamp(b, 0, 255);
    }
    return;
  }

  if (look === "ink") {
    for (let i = 0; i < d.length; i += 4) {
      let y = (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2] - low) * scale;
      y = (y - 128) * 1.7 + 140;
      if (y > 188) y = 255 - (255 - y) * 0.12;
      if (y < 72) y *= 0.7;
      const v = clamp(y, 0, 255);
      d[i] = v;
      d[i + 1] = v;
      d[i + 2] = v;
    }
  }
}

export function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Could not write the image."));
      },
      type,
      quality
    );
  });
}
