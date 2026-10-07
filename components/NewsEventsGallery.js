"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./NewsEventsGallery.module.css";

// items = [{ src, alt, title, source?, href? }]
//  - with href    -> card with title + source, opens the link in a new tab
//  - without href -> image only, opens in the full-size preview
export default function NewsEventsGallery({ items = [] }) {
  // the preview only steps through the cutouts that have no link
  const previews = useMemo(() => items.filter((item) => !item.href), [items]);
  const [open, setOpen] = useState(null); // index inside `previews`

  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + previews.length) % previews.length)),
    [previews.length]
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

  const current = open !== null ? previews[open] : null;

  return (
    <>
      <section className={styles.listing} aria-label="News and events">
        <div className={styles.grid}>
          {items.map((item, index) => {
            const loading = index < 8 ? "eager" : "lazy";

            if (item.href) {
              return (
                <article key={item.src} className={styles.card}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`${item.title} — ${item.source}`}
                  >
                    <div className={styles.imageWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.src} alt={item.alt} loading={loading} className={styles.image} />
                    </div>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.source}>{item.source}</p>
                    <span className={styles.readMore}>Read more</span>
                  </a>
                </article>
              );
            }

            return (
              <article key={item.src} className={styles.card}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.previewButton}`}
                  onClick={() => setOpen(previews.indexOf(item))}
                  aria-label={`Open ${item.alt}`}
                >
                  <div className={styles.imageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt} loading={loading} className={styles.image} />
                  </div>
                </button>
              </article>
            );
          })}
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

          {previews.length > 1 && (
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
