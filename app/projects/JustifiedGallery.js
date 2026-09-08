"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./JustifiedGallery.module.css";

const DEFAULT_ASPECT_RATIO = 4 / 3;

function getAspectRatio(item) {
  const img = item.image;
  if (img && typeof img === "object" && img.width && img.height) {
    return img.width / img.height;
  }
  return item.orientation === "portrait" ? 3 / 4 : DEFAULT_ASPECT_RATIO;
}

function getSrc(item) {
  return typeof item.image === "string" ? item.image : item.image.src;
}

// Classic "justified gallery" packer — same idea Flickr/Google Photos use.
// Walks the items IN ORDER, fills each row left-to-right, then scales every
// image in that row to a shared height so the row lands exactly on the
// container's right edge (no leftover gap, no cropping — aspect ratio is
// preserved, only overall size changes slightly).
function computeRows(items, containerWidth, targetRowHeight, gap) {
  const rows = [];
  let row = [];
  let aspectSum = 0;

  const flushRow = (finalRow, isLastRow) => {
    if (finalRow.length === 0) return;
    const totalGap = gap * (finalRow.length - 1);
    const availableWidth = containerWidth - totalGap;
    let rowHeight = availableWidth / aspectSum;
    // Don't blow up a short trailing row (e.g. a single leftover image)
    // past the target height.
    if (isLastRow) rowHeight = Math.min(rowHeight, targetRowHeight);
    rows.push({
      height: rowHeight,
      items: finalRow.map((it) => ({
        ...it,
        renderWidth: it.aspectRatio * rowHeight,
      })),
    });
  };

  items.forEach((item) => {
    const aspectRatio = getAspectRatio(item);

    if (item.span === "full") {
      flushRow(row, false);
      row = [];
      aspectSum = 0;
      const rowHeight = Math.min(containerWidth / aspectRatio, targetRowHeight * 1.6);
      rows.push({
        height: rowHeight,
        items: [{ ...item, aspectRatio, renderWidth: containerWidth }],
        full: true,
      });
      return;
    }

    row.push({ ...item, aspectRatio });
    aspectSum += aspectRatio;
    const widthAtTarget = aspectSum * targetRowHeight + gap * (row.length - 1);

    if (widthAtTarget >= containerWidth) {
      flushRow(row, false);
      row = [];
      aspectSum = 0;
    }
  });

  flushRow(row, true);
  return rows;
}

export default function JustifiedGallery({ items, targetRowHeight = 320, gap = 24 }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const measure = () => setContainerWidth(el.clientWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Recompute responsive target row height on small screens.
  const [rowHeight, setRowHeight] = useState(targetRowHeight);
  useEffect(() => {
    const updateRowHeight = () => {
      if (window.innerWidth <= 480) setRowHeight(Math.round(targetRowHeight * 0.55));
      else if (window.innerWidth <= 767) setRowHeight(Math.round(targetRowHeight * 0.7));
      else setRowHeight(targetRowHeight);
    };
    updateRowHeight();
    window.addEventListener("resize", updateRowHeight);
    return () => window.removeEventListener("resize", updateRowHeight);
  }, [targetRowHeight]);

  const rows = containerWidth > 0 ? computeRows(items, containerWidth, rowHeight, gap) : [];

  return (
    <div ref={containerRef} className={styles.gallery}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row} style={{ height: row.height, gap }}>
          {row.items.map((item) => (
            <div
              key={item.file}
              className={styles.tile}
              style={{ width: item.renderWidth, height: row.height }}
            >
              <img src={getSrc(item)} alt={item.file} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.overlayName}>{item.file}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}