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