"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import chrome from "./PublicationsChrome.module.css";
import styles from "./ExpressionsGallery.module.css";

// Expressions page: header menu (ALL · LIGHTS · ARTWORK · FURNITURE · SCULPTURE)
// + image grid + click-to-open details viewer.
//
//  - Header looks like the Publications header (same CSS), but the menu is
//    only on this page and it FILTERS the grid instead of scrolling.
//  - ALL shows the mixed list (order comes from page.js);
//    a category shows only its own pieces, in order 1, 2, 3...
//  - Clicking a tile opens its matching details image (cover n -> details n).
//
//   items     = [{ id, category, n, alt, cover, details }]
//   menuItems = [{ value: "all", label: "All" }, { value: "lights", label: "Lights" }, ...]

export default function ExpressionsGallery({ items = [], menuItems = [] }) {
  const [active, setActive] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false); // categories drawer
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false); // main site menu
  const [viewer, setViewer] = useState(null); // index inside `visible`
  const headerRef = useRef(null);

  const visible =
    active === "all"
      ? items
      : items.filter((item) => item.category === active).sort((a, b) => a.n - b.n);

  const choose = (value, { updateUrl = true } = {}) => {
    setMobileOpen(false);
    setViewer(null);
    setActive(value);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (updateUrl) {
      window.history.replaceState(null, "", value === "all" ? window.location.pathname : `#${value}`);
    }
  };

  // Opened with a link like /expressions#lights
  useEffect(() => {
    const value = window.location.hash.replace("#", "");
    if (value && menuItems.some((m) => m.value === value)) setActive(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Viewer navigation
  const step = useCallback(
    (dir) => {
      setViewer((i) => (i === null || !visible.length ? i : (i + dir + visible.length) % visible.length));
    },
    [visible.length]
  );

  // Keyboard: Escape closes everything, arrows move inside the viewer
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMenuOverlayOpen(false);
        setViewer(null);
      } else if (viewer !== null && e.key === "ArrowRight") step(1);
      else if (viewer !== null && e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewer, step]);

  // Jumping to desktop width always closes the drawer
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll while an overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || menuOverlayOpen || viewer !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, menuOverlayOpen, viewer]);

  const current = viewer !== null ? visible[viewer] : null;

  return (
    <>
      {/* ================= header ================= */}
      <header ref={headerRef} className={chrome.header}>
        <div className={`site-container ${chrome.bar}`}>
          <Link href="/" className={chrome.logo}>
            SPACES ARCHITECTS <span>@ka</span>
          </Link>

          {/* desktop menu */}
          <nav className={chrome.nav} aria-label="Expressions categories">
            <ul className={chrome.list}>
              {menuItems.map(({ value, label }) => (
                <li key={value} className={chrome.item}>
                  <button
                    type="button"
                    className={`${chrome.label} ${active === value ? chrome.on : ""}`}
                    aria-current={active === value ? "true" : undefined}
                    onClick={() => choose(value)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* mobile controls */}
          <div className={chrome.mobileControls}>
            <button
              type="button"
              className={chrome.categoriesToggle}
              aria-label={mobileOpen ? "Close categories" : "Open categories"}
              aria-expanded={mobileOpen}
              aria-controls="expressions-categories-drawer"
              onClick={() => {
                setMenuOverlayOpen(false);
                setMobileOpen((v) => !v);
              }}
            >
              <svg
                className={chrome.categoriesIcon}
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
              className={chrome.burger}
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

        {/* mobile categories drawer */}
        <div
          className={mobileOpen ? chrome.backdropOpen : chrome.backdrop}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
        <div
          id="expressions-categories-drawer"
          className={`${chrome.drawer} ${mobileOpen ? chrome.drawerOpen : ""}`}
          role="dialog"
          aria-label="Expressions categories"
          aria-hidden={!mobileOpen}
        >
          {menuItems.map(({ value, label }) => (
            <div className={chrome.group} key={value}>
              <button
                type="button"
                tabIndex={mobileOpen ? 0 : -1}
                className={`${chrome.groupLabel} ${active === value ? chrome.subOn : ""}`}
                aria-current={active === value ? "true" : undefined}
                onClick={() => choose(value)}
              >
                {label}
              </button>
            </div>
          ))}
        </div>
      </header>

      {/* ================= grid ================= */}
      <section className={styles.listing} aria-label="Expressions">
        <div className={styles.grid} key={active}>
          {visible.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={styles.card}
              onClick={() => setViewer(index)}
              aria-label={`Open ${item.alt}`}
            >
              <span className={styles.imageWrap}>
                <Image
                  src={item.cover}
                  alt={item.alt}
                  fill
                  priority={index < 8}
                  sizes="(min-width: 1024px) 274px, (min-width: 768px) 30vw, 46vw"
                  className={styles.image}
                />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= details viewer ================= */}
      {current && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setViewer(null)}
        >
          <button type="button" className={styles.close} onClick={() => setViewer(null)} aria-label="Close">
            ×
          </button>

          {visible.length > 1 && (
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
            <img key={current.id} src={current.details} alt={current.alt} className={styles.detailImage} />
          </div>
        </div>
      )}
    </>
  );
}
