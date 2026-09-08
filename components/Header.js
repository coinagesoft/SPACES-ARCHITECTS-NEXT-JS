"use client";

import Link from "next/link";
import { site } from "@/config/site";

/**
 * Top bar: logo on the left, hamburger trigger on the right.
 * `dark` = light text for use over a photographic hero (home/about heroes).
 * `onMenuOpen` toggles the full-screen MenuOverlay rendered by the page.
 */
export default function Header({
  dark = false,
  home = false,
  onMenuOpen,
  projectCategories,
  activeProjectCategory,
  onProjectCategoryChange,
}) {
  const textColor = dark ? "text-white" : "text-ink";
  const projectHeader = Boolean(projectCategories);

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 ${textColor}`}>
      <div className="site-container flex items-center justify-between gap-6 py-6 md:py-8">
        <Link
          href="/"
          className="shrink-0 text-base md:text-[1.33rem] tracking-widest2 uppercase font-medium"
        >
          {site.name} <span className="text-accent">{site.handle}</span>
        </Link>

        {projectHeader && (
          <nav
            className="hidden lg:flex items-center justify-center gap-8 xl:gap-10"
            aria-label="Project categories"
          >
            {projectCategories.map((category) => {
              const isActive = category.value === activeProjectCategory;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => onProjectCategoryChange(category.value)}
                  className={`whitespace-nowrap bg-transparent p-0 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </nav>
        )}

        <button
          type="button"
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="flex shrink-0 flex-col items-end gap-[5px] p-2"
        >
          <span className={`block h-[5px] w-8 rounded-sm ${home ? "bg-white" : "bg-accent"}`} />
          <span className={`block h-[5px] w-8 rounded-sm ${home ? "bg-white" : "bg-accent"}`} />
          <span className={`block h-[5px] w-8 rounded-sm ${home ? "bg-white" : "bg-accent"}`} />
        </button>
      </div>
    </header>
  );
}
