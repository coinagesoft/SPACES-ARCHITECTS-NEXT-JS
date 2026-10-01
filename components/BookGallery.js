"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./BookGallery.module.css";

// Books grid on /publications (modelled on MagazineGallery).
//
// Each book: { title, cover, content }
//   cover   – image shown in the grid
//   content – one image (string) OR several images (array of strings)
//             shown when the cover is clicked; several are stacked
//             top-to-bottom in the scrollable viewer.
//             Leave it out for a plain, non-clickable cover.
const toList = (content) =>
  Array.isArray(content) ? content.filter(Boolean) : content ? [content] : [];

export default function BookGallery({ books = [] }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  const activeImages = active ? toList(active.content) : [];

  return (
    <>
      <div className={styles.grid}>
        {books.map((book, index) => {
          const clickable = toList(book.content).length > 0;
          const inner = (
            <>
              <div className={styles.imageWrap}>
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw"
                  className={styles.image}
                />
              </div>
              <h2 className={styles.title}>{book.title}</h2>
            </>
          );

          return clickable ? (
            <button
              key={`${book.title}-${index}`}
              type="button"
              className={styles.card}
              onClick={() => setActive(book)}
              aria-label={`Open ${book.title}`}
            >
              {inner}
            </button>
          ) : (
            <div
              key={`${book.title}-${index}`}
              className={`${styles.card} ${styles.cardStatic}`}
            >
              {inner}
            </div>
          );
        })}
      </div>

      {active && activeImages.length > 0 && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className={styles.viewer} onClick={(e) => e.stopPropagation()}>
            {activeImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={activeImages.length > 1 ? `${active.title} — page ${i + 1}` : active.title}
                className={styles.contentImage}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}