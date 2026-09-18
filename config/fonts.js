/**
 * ============================================================
 *  SITE FONT — SINGLE SOURCE OF TRUTH
 * ============================================================
 * The whole site's typeface is controlled from this one file.
 *
 * To change the font used across every page/component:
 *   1. Swap the import + font call below for any other
 *      `next/font/google` font (or use `next/font/local`).
 *   2. Keep the exported name `primaryFont` and the
 *      `variable: "--font-primary"` option unchanged —
 *      every component reads the font through that CSS variable
 *      (see app/globals.css → body { font-family: var(--font-primary) })
 *      and tailwind.config.js → theme.fontFamily.sans.
 *
 * Nothing else in the codebase needs to change.
 * ------------------------------------------------------------
 * The reference design uses a light-weight, wide-tracked
 * geometric sans (Century Gothic / Futura style). "Jost" is the
 * closest freely-licensed Google Font match, so it's the default.
 * ============================================================
 */

import { Jost } from "next/font/google";

export const primaryFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

/**
 * Example swaps (uncomment one and comment out the block above):
 *
 * import { Poppins } from "next/font/google";
 * export const primaryFont = Poppins({
 *   subsets: ["latin"],
 *   weight: ["300", "400", "500", "600", "700"],
 *   variable: "--font-primary",
 *   display: "swap",
 * });
 *
 * import { Questrial } from "next/font/google";
 * export const primaryFont = Questrial({
 *   subsets: ["latin"],
 *   weight: ["400"],
 *   variable: "--font-primary",
 *   display: "swap",
 * });
 */
