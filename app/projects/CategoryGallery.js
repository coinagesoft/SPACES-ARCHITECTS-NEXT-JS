"use client";

import Link from "next/link";
import styles from "./CategoryGallery.module.css";
import { projectMatchesCategory } from "./projectCategories";
import { RATIOS, PROJECT_ROUTES, ROW_ROUTES, MATCHED_ROUTES } from "./JustifiedGallery";

// ---------------------------------------------------------------------
// Layout used when a category is picked from the header menu.
// (The "All Projects" tab keeps the original hand-built grid in
// JustifiedGallery.js — this file is completely separate from it.)
//
// The matching projects are packed into justified rows: every row holds
// 2–3 photos that share one height, exactly like the rows in the
// original grid, with no cropping.
// ---------------------------------------------------------------------

const ROW_MIN = 2.0; // close a row once its aspect ratios add up to this…
const ROW_MAX = 3.6; // …or before they would go past this
const ROW_MAX_ITEMS = 3;

function getSrc(item) {
  return typeof item.image === "string" ? item.image : item.image?.src || "";
}

// Aspect ratio (width / height): measured value if known, otherwise the
// image's own dimensions, otherwise square.
function getRatio(item) {
  if (RATIOS[item?.name]) return RATIOS[item.name];
  const img = item?.image;
  if (img && typeof img === "object" && img.width && img.height) return img.width / img.height;
  return 1;
}

function getRoute(item) {
  return PROJECT_ROUTES[item.name] || ROW_ROUTES[item.name] || MATCHED_ROUTES[item.name];
}

function packRows(items) {
  const rows = [];
  let current = [];
  let sum = 0;

  items.forEach((item) => {
    const r = getRatio(item);

    if (current.length && (sum + r > ROW_MAX || current.length >= ROW_MAX_ITEMS)) {
      rows.push({ items: current, ghost: 0 });
      current = [];
      sum = 0;
    }

    current.push(item);
    sum += r;

    if (sum >= ROW_MIN) {
      rows.push({ items: current, ghost: 0 });
      current = [];
      sum = 0;
    }
  });

  // Leftover photos: pad a very narrow last row so it keeps a sensible height.
  if (current.length) rows.push({ items: current, ghost: sum < 1.5 ? ROW_MIN - sum : 0 });

  return rows;
}

function Row({ items, ghost }) {
  return (
    <div className={styles.row}>
      {items.map((item) => {
        const route = getRoute(item);
        const content = (
          <>
            <img src={getSrc(item)} alt={item.name || item.file} loading="lazy" />
            <span className={styles.label}>{item.name}</span>
          </>
        );
        const style = { flexGrow: getRatio(item) };

        return route ? (
          <Link
            href={route}
            className={styles.rowTile}
            style={style}
            aria-label={`View ${item.name} project`}
            key={item.name}
          >
            {content}
          </Link>
        ) : (
          <div className={styles.rowTile} style={style} key={item.name}>
            {content}
          </div>
        );
      })}
      {/* invisible spacer so a short last row doesn't stretch one photo full-width */}
      {ghost > 0 && <div className={styles.rowGhost} style={{ flexGrow: ghost }} aria-hidden="true" />}
    </div>
  );
}

export default function CategoryGallery({ items = [], category }) {
  const filtered = items.filter((item) => item?.name && projectMatchesCategory(item.name, category));

  if (!filtered.length) {
    return <p className={styles.empty}>No projects in this category yet.</p>;
  }

  // key → replay the fade-in each time the category changes
  return (
    <div className={styles.gallery} key={category}>
      {packRows(filtered).map((row, i) => (
        <Row items={row.items} ghost={row.ghost} key={i} />
      ))}
    </div>
  );
}