"use client";

import Link from "next/link";
import { site } from "@/config/site";

/**
 * Top bar: logo on the left, hamburger trigger on the right.
 * `dark` = light text for use over a photographic hero (home/about heroes).
 * `onMenuOpen` toggles the full-screen MenuOverlay rendered by the page.
 */
export default function Header({ dark = false, onMenuOpen }) {
  const textColor = dark ? "text-white" : "text-ink";

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 ${textColor}`}>
      <div className="site-container flex items-center justify-between py-6 md:py-8">
        <Link
          href="/"
          className="text-sm md:text-lg tracking-widest2 uppercase font-medium"
        >
          {site.name} <span className="text-accent">{site.handle}</span>
        </Link>

        <button
          type="button"
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="flex flex-col gap-[5px] items-end p-2"
        >
          <span className={`block h-[2px] w-7 ${dark ? "bg-white" : "bg-ink"}`} />
          <span className={`block h-[2px] w-7 ${dark ? "bg-white" : "bg-ink"}`} />
          <span className={`block h-[2px] w-4 ${dark ? "bg-white" : "bg-ink"}`} />
        </button>
      </div>
    </header>
  );
}
