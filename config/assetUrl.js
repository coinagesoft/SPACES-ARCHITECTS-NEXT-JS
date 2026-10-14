/**
 * Tiny helper that builds asset URLs. It has NO dependency on the big
 * asset-manifest.json, so client components (menu, etc.) can import it
 * without pulling the whole manifest into the browser bundle.
 *
 * Keep NEXT_PUBLIC_ASSET_VERSION set in .env — bump it when you replace
 * images on the asset server so browsers fetch the new files.
 */
const ASSET_BASE_URL = (
  process.env.NEXT_PUBLIC_ASSET_BASE_URL || "https://assets.spacesarchitects-ka.com"
).replace(/\/$/, "");
const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION || "1";

export function assetUrl(relPath) {
  const encoded = relPath.split("/").map(encodeURIComponent).join("/");
  return `${ASSET_BASE_URL}/assets/${encoded}?v=${encodeURIComponent(ASSET_VERSION)}`;
}

// ---------------------------------------------------------------------------
// optimizedImage(): for the few places that must stay a plain <img> (so their
// CSS keeps working) but should NOT download the full-size original.
// It points the <img> at Next's image optimizer (/_next/image) with a srcSet,
// so the browser gets a resized WebP that fits the tile — exactly what
// next/image does, without needing width/height.
//
// OPTIMIZED_WIDTHS must only contain values that exist in images.deviceSizes /
// images.imageSizes in next.config.mjs, otherwise /_next/image answers 400.
// ---------------------------------------------------------------------------
const OPTIMIZED_WIDTHS = [384, 640, 828, 1080, 1200, 1920];

export function optimizedImage(src, { sizes = "100vw", quality = 75 } = {}) {
  const url = encodeURIComponent(src);
  const at = (w) => `/_next/image?url=${url}&w=${w}&q=${quality}`;
  return {
    src: at(828),
    srcSet: OPTIMIZED_WIDTHS.map((w) => `${at(w)} ${w}w`).join(", "),
    sizes,
  };
}