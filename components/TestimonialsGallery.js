"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./TestimonialsGallery.module.css";

// Testimonials: only the images are shown. Clicking one opens a full-size
// preview (arrows / swipe-free buttons to move, Esc or click outside to close).
//   items = [{ src, alt }]
export default function TestimonialsGallery({ items = [] }) {
  const [open, setOpen] = useState(null); // index of the image being previewed

  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, step]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      <section className={styles.listing} aria-label="Testimonials">
        <div className={styles.grid}>
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={styles.card}
              onClick={() => setOpen(index)}
              aria-label={`Open ${item.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading={index < 4 ? "eager" : "lazy"} className={styles.image} />
            </button>
          ))}
        </div>
      </section>

      {current && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setOpen(null)}
        >
          <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close">
            ×
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.next}`}
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                ›
              </button>
            </>
          )}

          <div className={styles.viewer} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={current.src} src={current.src} alt={current.alt} className={styles.preview} />
          </div>
        </div>
      )}
    </>
  );
}