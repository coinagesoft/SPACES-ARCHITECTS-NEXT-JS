"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import styles from "./FeaturedCarousel.module.css";

const ITEMS_PER_PAGE = 4;

export default function FeaturedCarousel({ items, type }) {
  const [activePage, setActivePage] = useState(0);
  const Card = type === "project" ? ProjectCard : NewsCard;
  const pages = Array.from(
    { length: Math.ceil(items.length / ITEMS_PER_PAGE) },
    (_, index) => items.slice(index * ITEMS_PER_PAGE, (index + 1) * ITEMS_PER_PAGE)
  );
  const hasMultiplePages = pages.length > 1;

  const showPrevious = () => {
    setActivePage((page) => (page - 1 + pages.length) % pages.length);
  };

  const showNext = () => {
    setActivePage((page) => (page + 1) % pages.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className={styles.page}
              aria-hidden={pageIndex !== activePage || undefined}
            >
              {page.map((item) => (
                <div key={item.name} className={styles.item}>
                  <Card {...item} landscape />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {hasMultiplePages && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={showPrevious}
            aria-label="Show previous four items"
          >
            <span aria-hidden="true">←</span>
          </button>
          <span className={styles.pageCount} aria-live="polite">
            {activePage + 1} / {pages.length}
          </span>
          <button
            type="button"
            className={styles.control}
            onClick={showNext}
            aria-label="Show next four items"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
