"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import styles from "./PublicationsHeader.module.css";

// Header for the Publications page — same look as the Projects page header
// (ProjectsMegaMenu): logo on the left, section menu in the middle,
// burger on the right.
//  - Desktop: ALL · WEB · MAGAZINE · BOOKS sit in the header bar.
//  - Mobile: the menu is hidden, so a grid-icon button opens a slide-in
//    drawer with the same items (the burger still opens the site menu).
//  - Clicking an item scrolls to the element with that id ("all" = top);
//    the section currently on screen is highlighted.
//
//   items = [{ value: "all", label: "All" }, { value: "web", label: "Web" }, ...]
export default function PublicationsHeader({ items = [] }) {
  const [active, setActive] = useState(items[0]?.value ?? "all");
  const [mobileOpen, setMobileOpen] = useState(false); // sections drawer
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false); // main site menu
  const headerRef = useRef(null);

  const goTo = (value, { updateUrl = true } = {}) => {
    setMobileOpen(false);
    if (value === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(value)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (updateUrl) {
      window.history.replaceState(null, "", value === "all" ? window.location.pathname : `#${value}`);
    }
  };

  // Highlight the section that is currently under the header
  useEffect(() => {
    const sections = items.filter((item) => item.value !== "all");

    const update = () => {
      const offset = (headerRef.current?.offsetHeight ?? 96) + 40;
      let current = "all";
      for (const { value } of sections) {
        const el = document.getElementById(value);
        if (el && el.getBoundingClientRect().top <= offset) current = value;
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

  // Opened with a link like /publications#books -> jump there once loaded
  useEffect(() => {
    const value = window.location.hash.replace("#", "");
    if (!value || !items.some((item) => item.value === value)) return;
    const t = setTimeout(() => goTo(value, { updateUrl: false }), 150);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Escape closes the drawer / site menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMenuOverlayOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Jumping to desktop width always closes the drawer
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll while a mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || menuOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, menuOverlayOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`site-container ${styles.bar}`}>
        <Link href="/" className={styles.logo}>
          SPACES ARCHITECTS <span>@ka</span>
        </Link>

        {/* ---------- desktop nav ---------- */}
        <nav className={styles.nav} aria-label="Publications sections">
          <ul className={styles.list}>
            {items.map(({ value, label }) => (
              <li key={value} className={styles.item}>
                <button
                  type="button"
                  className={`${styles.label} ${active === value ? styles.on : ""}`}
                  aria-current={active === value ? "true" : undefined}
                  onClick={() => goTo(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- mobile controls ---------- */}
        <div className={styles.mobileControls}>
          <button
            type="button"
            className={styles.categoriesToggle}
            aria-label={mobileOpen ? "Close sections" : "Open sections"}
            aria-expanded={mobileOpen}
            aria-controls="publications-sections-drawer"
            onClick={() => {
              setMenuOverlayOpen(false);
              setMobileOpen((v) => !v);
            }}
          >
            <svg
              className={styles.categoriesIcon}
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
              <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
              <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
              <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.burger}
            aria-label={menuOverlayOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOverlayOpen}
            onClick={() => {
              setMobileOpen(false);
              setMenuOverlayOpen((v) => !v);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MenuOverlay open={menuOverlayOpen} onClose={() => setMenuOverlayOpen(false)} />

      {/* ---------- mobile sections drawer ---------- */}
      <div
        className={mobileOpen ? styles.backdropOpen : styles.backdrop}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="publications-sections-drawer"
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-label="Publications sections"
        aria-hidden={!mobileOpen}
      >
        {items.map(({ value, label }) => (
          <div className={styles.group} key={value}>
            <button
              type="button"
              tabIndex={mobileOpen ? 0 : -1}
              className={`${styles.groupLabel} ${active === value ? styles.subOn : ""}`}
              aria-current={active === value ? "true" : undefined}
              onClick={() => goTo(value)}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </header>
  );
}