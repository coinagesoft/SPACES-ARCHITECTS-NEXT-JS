"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { assets } from "@/assets";
import Footer from "./Footer";
import styles from "./MenuOverlay.module.css";

// Menu items listed here are shown as plain text (not clickable) for now.
// Remove a label from this list to make it a normal link again.
const DISABLED_ITEMS = ["Expressions"];

export default function MenuOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-paper">
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
          <Image
            src={assets.home.menuThumb}
            alt="Studio courtyard"
            fill
            sizes="(min-width: 1500px) 760px, (min-width: 768px) 52vw, 90vw"
            className="object-cover"
          />
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

      <Footer />
    </div>
  );
}