"use client";

import { useState } from "react";
import Header from "./Header";
import MenuOverlay from "./MenuOverlay";

/**
 * Wraps a page's <Header> + <MenuOverlay> so every page shares the same
 * hamburger-menu behaviour without duplicating open/close state logic.
 */
export default function SiteChrome({ dark = false }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header dark={dark && !open} onMenuOpen={() => setOpen(true)} />
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
