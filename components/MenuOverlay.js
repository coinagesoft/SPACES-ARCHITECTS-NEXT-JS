"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { assets } from "@/config/assets";
import Footer from "./Footer";

export default function MenuOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-paper">
      {/* Top bar: logo + close */}
      <div className="site-container flex items-center justify-between py-6 md:py-8">
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

      {/* Image + two-column nav */}
      <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-16 pt-4">
        <div className="relative w-full aspect-square max-w-xl overflow-hidden">
          <Image
            src={assets.home.menuThumb}
            alt="Studio courtyard"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8 content-start">
          {site.menu.map((column, i) => (
            <nav key={i} className="flex flex-col gap-8">
              {column.map((item) => (
                <Link key={item.label} href={item.href} onClick={onClose} className="nav-link">
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
