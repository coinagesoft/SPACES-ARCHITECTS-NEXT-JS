"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { assets } from "@/config/assets";
import Footer from "./Footer";
import styles from "./MenuOverlay.module.css";

export default function MenuOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-paper">
      <div className={styles.topBar}>
        <span className="text-sm md:text-lg tracking-widest2 uppercase font-medium">
          {site.name} <span className="text-accent">{site.handle}</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-3xl leading-none p-2"
        >
          &times;
        </button>
      </div>

      <div className={styles.menuLayout}>
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
              {column.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
