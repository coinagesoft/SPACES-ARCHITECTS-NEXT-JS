"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [navigating, setNavigating] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // When pathname or searchParams change, navigation finished
    setNavigating(false);
    const timer = setTimeout(() => setVisible(false), 250);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank" ||
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Check if internal navigation to a different URL
      const currentUrl = window.location.pathname + window.location.search;
      if (href !== currentUrl && !href.startsWith("http")) {
        setVisible(true);
        setNavigating(true);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-accent shadow-[0_0_8px_rgba(254,165,11,0.6)] transition-all duration-300 ease-out ${
          navigating ? "w-4/5 opacity-100" : "w-full opacity-0"
        }`}
      />
    </div>
  );
}
