"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import { MENU } from "./projectCategories";
import styles from "./ProjectsMegaMenu.module.css";

// Header for the Projects page.
//  - Hover (or keyboard focus) a menu item → its list drops down.
//  - Category items call onChange(key) → the page re-sorts the gallery.
//  - "Adaptive Reuse" project names are real links to each project page.
export default function ProjectsMegaMenu({ active = "all", onChange }) {
  const [openKey, setOpenKey] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);

  const openItem = MENU.find((item) => item.key === openKey);
  const openRows = openItem ? (openItem.children || openItem.links || []).length : 0;

  const isActive = (item) =>
    Boolean(item.key) &&
    (active === item.key || (item.key !== "all" && active.startsWith(`${item.key}/`)));

  const closeAll = () => {
    setOpenKey(null);
    setMobileOpen(false);
    setMenuOverlayOpen(false);
  };

  const select = (key) => {
    onChange?.(key);
    closeAll();
  };

  // Escape closes; lock page scroll while the mobile drawer is open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChangeMq = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", onChangeMq);
    return () => mq.removeEventListener("change", onChangeMq);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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

        {/* ---------- mobile toggle ---------- */}
        <button
          type="button"
          className={styles.burger}
          aria-label={menuOverlayOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOverlayOpen}
          aria-controls="projects-menu-overlay"
          onClick={() => setMenuOverlayOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MenuOverlay open={menuOverlayOpen} onClose={() => setMenuOverlayOpen(false)} />

      {/* white backdrop behind the open dropdown so it never sits on top of photos */}
      <div
        className={`${styles.band} ${openRows ? styles.bandOpen : ""}`}
        style={{ "--rows": openRows }}
        aria-hidden="true"
      />

    </header>
  );
}