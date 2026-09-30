"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MagazineGallery.module.css";

export default function MagazineGallery({ magazines }) {
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

  return (
    <>
      <div className={styles.grid}>
        {magazines.map((mag, index) => (
          <button
            key={`${mag.title}-${index}`}
            type="button"
            className={styles.card}
            onClick={() => setActive(mag)}
            aria-label={`Open ${mag.title}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src={mag.cover}
                alt={mag.title}
                fill
                sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw"
                className={styles.image}
              />
            </div>
            <h2 className={styles.title}>{mag.title}</h2>
          </button>
        ))}
      </div>

      {active && (
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.content} alt={active.title} className={styles.contentImage} />
          </div>
        </div>
      )}
    </>
  );
}