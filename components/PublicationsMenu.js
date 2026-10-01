"use client";

import { useEffect, useState } from "react";
import styles from "./PublicationsMenu.module.css";

// Sub-menu for /publications: ALL · WEB · MAGAZINE · BOOKS
// Each item is a plain anchor (#id), so the browser smooth-scrolls to the
// matching section (globals.css already sets `scroll-behavior: smooth`).
// The item whose section is currently at the top of the screen is highlighted.
//
//   items = [{ id: "all", label: "All" }, { id: "web", label: "Web" }, ...]
//   "all" scrolls back to the top of the listing.
const ACTIVE_OFFSET = 140; // px from the top of the viewport

export default function PublicationsMenu({ items = [] }) {
  const [active, setActive] = useState(items[0]?.id ?? "all");

  useEffect(() => {
    const sections = items.filter((item) => item.id !== "all");

    const update = () => {
      let current = "all";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav className={styles.bar} aria-label="Publications sections">
      <ul className={styles.list}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${active === id ? styles.active : ""}`}
              aria-current={active === id ? "true" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}