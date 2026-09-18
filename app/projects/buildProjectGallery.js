// Preserve the alternating portrait-pair / landscape-row rhythm while both
// orientations are available. Once one orientation is exhausted, a masonry
// block prevents the remaining same-orientation images becoming a long stack
// of single full-width rows.
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

  const remaining = [
    ...portraits.slice(portraitIndex),
    ...landscapes.slice(landscapeIndex),
  ];

  if (remaining.length) gallery.push({ type: "masonry", images: remaining });
  return gallery;
}
