"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import { MENU } from "./projectCategories";
import styles from "./ProjectsMegaMenu.module.css";

// Header for the Projects page.
//  - Desktop: hover (or keyboard focus) a menu item → its list drops down.
//  - Mobile: the desktop nav is hidden, so a separate "Categories" button
//    opens a slide-in drawer with the same menu (tap a parent to
//    expand/collapse, tap a category to filter the gallery). Pass
//    mobileMenuSide="left" to open the drawer from the left edge instead
//    of the default right edge. This is independent from the burger,
//    which still opens the site's main MenuOverlay.
//  - Category items call onChange(key) → the page re-sorts the gallery.
//  - "Adaptive Reuse" project names are real links to each project page.
export default function ProjectsMegaMenu({ active = "all", onChange, mobileMenuSide = "right" }) {
  const [openKey, setOpenKey] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile categories drawer
  const [mobileExpandedKey, setMobileExpandedKey] = useState(null); // mobile accordion
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false); // main site menu

  const openItem = MENU.find((item) => item.key === openKey);
  const openRows = openItem ? (openItem.children || openItem.links || []).length : 0;

  const isActive = (item) =>
    Boolean(item.key) &&
    (active === item.key || (item.key !== "all" && active.startsWith(`${item.key}/`)));

  const closeAll = () => {
    setOpenKey(null);
    setMobileOpen(false);
    setMobileExpandedKey(null);
    setMenuOverlayOpen(false);
  };

  const select = (key) => {
    onChange?.(key);
    closeAll();
  };

  const toggleMobileGroup = (key) => {
    setMobileExpandedKey((current) => (current === key ? null : key));
  };

  // Escape closes everything.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Jumping to desktop width always closes the mobile drawer.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChangeMq = (e) => {
      if (e.matches) {
        setMobileOpen(false);
        setMobileExpandedKey(null);
      }
    };
    mq.addEventListener("change", onChangeMq);
    return () => mq.removeEventListener("change", onChangeMq);
  }, []);

  // Lock page scroll while either mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen || menuOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, menuOverlayOpen]);

  return (
    <header
      className={styles.header}
      onMouseLeave={() => setOpenKey(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpenKey(null);
      }}
    >
      <div className={`site-container ${styles.bar}`}>
        <Link href="/" className={styles.logo} onMouseEnter={() => setOpenKey(null)}>
          SPACES ARCHITECTS <span>@KA</span>
        </Link>

        {/* ---------- desktop nav ---------- */}
        <nav className={styles.nav} aria-label="Project categories">
          <ul className={styles.list}>
            {MENU.map((item) => {
              const sub = item.children || item.links;
              const open = openKey === item.key;
              const labelClass = `${styles.label} ${isActive(item) || open ? styles.on : ""}`;

              return (
                <li
                  key={item.label}
                  className={styles.item}
                  onMouseEnter={() => setOpenKey(sub ? item.key : null)}
                  onFocus={() => setOpenKey(sub ? item.key : null)}
                >
                  {item.href ? (
                    <Link href={item.href} className={labelClass}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={labelClass}
                      aria-haspopup={sub ? "true" : undefined}
                      aria-expanded={sub ? open : undefined}
                      aria-current={active === item.key ? "true" : undefined}
                      onClick={() => select(item.key)}
                    >
                      {item.label}
                    </button>
                  )}

                  {sub && (
                    <ul className={`${styles.drop} ${open ? styles.dropOpen : ""}`}>
                      {(item.children || []).map((child) => (
                        <li key={child.key}>
                          <button
                            type="button"
                            tabIndex={open ? 0 : -1}
                            className={`${styles.sub} ${active === child.key ? styles.subOn : ""}`}
                            aria-current={active === child.key ? "true" : undefined}
                            onClick={() => select(child.key)}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                      {(item.links || []).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            tabIndex={open ? 0 : -1}
                            className={styles.sub}
                            onClick={closeAll}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ---------- mobile controls ---------- */}
        <div className={styles.mobileControls}>
          {/* Opens the category drawer below — independent of the site's main menu */}
          <button
            type="button"
            className={styles.categoriesToggle}
            aria-label={mobileOpen ? "Close project categories" : "Open project categories"}
            aria-expanded={mobileOpen}
            aria-controls="projects-categories-drawer"
            onClick={() => {
              setMenuOverlayOpen(false);
              setMobileOpen((v) => !v);
            }}
          >
            {/* 2x2 grid icon — visually distinct from the 3-line burger */}
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
            aria-controls="projects-menu-overlay"
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

      {/* white backdrop behind the open desktop dropdown so it never sits on top of photos */}
      <div
        className={`${styles.band} ${openRows ? styles.bandOpen : ""}`}
        style={{ "--rows": openRows }}
        aria-hidden="true"
      />

      {/* ---------- mobile categories drawer ---------- */}
      <div
        className={mobileOpen ? styles.backdropOpen : styles.backdrop}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="projects-categories-drawer"
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""} ${
          mobileMenuSide === "left" ? styles.drawerLeft : ""
        }`}
        role="dialog"
        aria-label="Project categories"
        aria-hidden={!mobileOpen}
      >
        {MENU.map((item) => {
          const sub = item.children || item.links;
          const expanded = mobileExpandedKey === item.key;

          return (
            <div className={styles.group} key={item.label}>
              {item.href ? (
                <Link href={item.href} className={styles.groupLabel} onClick={closeAll}>
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className={`${styles.groupLabel} ${isActive(item) ? styles.subOn : ""}`}
                  aria-haspopup={sub ? "true" : undefined}
                  aria-expanded={sub ? expanded : undefined}
                  aria-current={active === item.key ? "true" : undefined}
                  onClick={() => (sub ? toggleMobileGroup(item.key) : select(item.key))}
                >
                  {item.label}
                  {sub && (
                    <span className={styles.chevron} aria-hidden="true">
                      {expanded ? "\u2013" : "+"}
                    </span>
                  )}
                </button>
              )}

              {sub && (
                <ul className={`${styles.groupList} ${expanded ? styles.groupListOpen : ""}`}>
                  {(item.children || []).map((child) => (
                    <li key={child.key}>
                      <button
                        type="button"
                        className={`${styles.sub} ${active === child.key ? styles.subOn : ""}`}
                        aria-current={active === child.key ? "true" : undefined}
                        onClick={() => select(child.key)}
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                  {(item.links || []).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.sub} onClick={closeAll}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
}