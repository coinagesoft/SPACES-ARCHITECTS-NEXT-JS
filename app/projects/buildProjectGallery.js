// Preserve the alternating portrait-pair / landscape-row rhythm while both
// orientations are available.
//
// Once the portrait pairs run out, the remaining landscape images keep the same
// rhythm instead of becoming one long block of pairs: one image full width,
// then a pair, then one full width, then a pair, and so on.
// So a project with only landscape photos reads: single, pair, single, pair...
export default function buildProjectGallery(items) {
  const portraits = items.filter((image) => image.width < image.height);
  const landscapes = items.filter((image) => image.width >= image.height);
  const gallery = [];
  let portraitIndex = 0;
  let landscapeIndex = 0;

  while (portraitIndex + 1 < portraits.length && landscapeIndex < landscapes.length) {
    gallery.push({ type: "pair", images: portraits.slice(portraitIndex, portraitIndex + 2) });
    gallery.push({ type: "full", image: landscapes[landscapeIndex++] });
    portraitIndex += 2;
  }

  // Portraits left over (a single odd one, or several if landscapes ran out).
  const leftoverPortraits = portraits.slice(portraitIndex);
  if (leftoverPortraits.length) {
    // A lone portrait is paired with the next landscape so it is not shown full width.
    const rowImages =
      leftoverPortraits.length === 1 && landscapeIndex < landscapes.length
        ? [leftoverPortraits[0], landscapes[landscapeIndex++]]
        : leftoverPortraits;
    gallery.push({ type: "masonry", images: rowImages });
  }

  // Remaining landscapes: single, pair, single, pair...
  // Start with a pair if the row before was already a single image, so two singles never sit together.
  let asSingle = gallery.length === 0 || gallery[gallery.length - 1].type !== "full";
  while (landscapeIndex < landscapes.length) {
    if (asSingle || landscapeIndex + 1 >= landscapes.length) {
      gallery.push({ type: "full", image: landscapes[landscapeIndex++] });
    } else {
      gallery.push({ type: "masonry", images: landscapes.slice(landscapeIndex, landscapeIndex + 2) });
      landscapeIndex += 2;
    }
    asSingle = !asSingle;
  }

  return gallery;
}