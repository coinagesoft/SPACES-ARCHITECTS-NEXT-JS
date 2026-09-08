"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./JustifiedGallery.module.css";

const DEFAULT_ASPECT_RATIO = 4 / 3;

// Fixed row layout requested for the projects gallery:
// row sizes, in order, covering items 1-21 exactly:
// 2, 3, 2, 2, 2, 2, 3, 2, 3
const ROW_GROUPS = [2, 3, 2, 2, 2, 2, 3, 2, 3];

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

// Fixed-row packer. Instead of greedily deciding row breaks from aspect
// ratios, items are split into the exact row groups given by ROW_GROUPS
// (falling back to a single trailing row of leftovers if items.length
// doesn't match the configured groups). Each row is then scaled — same as
// a justified gallery — so it spans the full container width edge to
// edge, with every image keeping its own aspect ratio (no cropping, no
// distortion, just a uniform per-row scale factor). That's what removes
// any empty gaps in the grid.
function groupItems(items, rowGroups) {
  const groups = [];
  let i = 0;
  let g = 0;
  while (i < items.length) {
    const size = rowGroups[g] ?? rowGroups[rowGroups.length - 1] ?? 1;
    groups.push(items.slice(i, i + size));
    i += size;
    g += 1;
  }
  return groups;
}

function computeRows(items, containerWidth, targetRowHeight, gap, rowGroups) {
  const rows = [];
  const groups = groupItems(items, rowGroups);

  groups.forEach((group, groupIndex) => {
    const isLastRow = groupIndex === groups.length - 1;
    const withAspect = group.map((item) => ({ ...item, aspectRatio: getAspectRatio(item) }));
    const aspectSum = withAspect.reduce((sum, it) => sum + it.aspectRatio, 0);
    const totalGap = gap * (withAspect.length - 1);
    const availableWidth = containerWidth - totalGap;
    let rowHeight = availableWidth / aspectSum;
    // Don't blow up a short trailing row (e.g. a single leftover image)
    // past the target height.
    if (isLastRow && withAspect.length < (rowGroups[0] ?? 3)) {
      rowHeight = Math.min(rowHeight, targetRowHeight);
    }
    rows.push({
      height: rowHeight,
      items: withAspect.map((it) => ({
        ...it,
        renderWidth: it.aspectRatio * rowHeight,
      })),
    });
  });

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

  const rows = containerWidth > 0 ? computeRows(items, containerWidth, rowHeight, gap, ROW_GROUPS) : [];

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