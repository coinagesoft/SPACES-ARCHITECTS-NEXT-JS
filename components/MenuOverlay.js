"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { assetUrl } from "@/config/assetUrl";
import Footer from "./Footer";
import styles from "./MenuOverlay.module.css";

// Menu items listed here are shown as plain text (not clickable) for now.
// Remove a label from this list to make it a normal link again.
const DISABLED_ITEMS = [];

export default function MenuOverlay({ open, onClose }) {
  // The overlay is mounted on every page but hidden, so keep it cheap:
  //  - the menu photo is only requested once the page has finished loading
  //    (or when the menu is opened), so it never competes with the hero/LCP image
  //  - the overlay's own Footer (a duplicate of the page footer) is only
  //    rendered after the menu has been opened at least once
  //  - nav links are only prefetched while the menu is open
  const [imageReady, setImageReady] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (open) setHasOpened(true);
  }, [open]);

  useEffect(() => {
    let idleId;
    let timeoutId;
    const arm = () => setImageReady(true);
    const schedule = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(arm, { timeout: 3000 });
      else timeoutId = window.setTimeout(arm, 2000);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  const showImage = imageReady || open;
  const showFooter = hasOpened || open;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-paper transition-all duration-300 ${
        open
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      aria-hidden={!open}
    >
      <div className={`${styles.topBar} ${styles.equalGapTop}`}>
       <span className="text-base md:text-[1.33rem] tracking-widest2 font-medium text-[#6b6b6b]">
  {site.name} <span className="text-accent">{site.handle}</span>
</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="relative box-content h-4 w-4 p-2 md:h-5 md:w-5"
        >
          <span className="absolute left-1/2 top-1/2 block h-[3px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm bg-ink md:w-5" />
          <span className="absolute left-1/2 top-1/2 block h-[3px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-sm bg-ink md:w-5" />
        </button>
      </div>

      <div className={`${styles.menuLayout} ${styles.equalGapBottom}`}>
        <div className={styles.menuImage}>
          {showImage && (
            <Image
              src={assetUrl("menu/menu.jpg")}
              alt="Studio courtyard"
              fill
              sizes="(min-width: 1500px) 760px, (min-width: 768px) 52vw, 90vw"
              className="object-cover"
            />
          )}
        </div>

        <div className={styles.menuNavigation}>
          {site.menu.map((column, index) => (
            <nav key={index} className={styles.menuColumn}>
              {column.map((item) =>
                DISABLED_ITEMS.includes(item.label) ? (
                  <span
                    key={item.label}
                    aria-disabled="true"
                    className="nav-link pointer-events-none cursor-default"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={open}
                    onClick={onClose}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          ))}
        </div>
      </div>

      {showFooter && <Footer />}
    </div>
  );
}