/**
 * TAILWIND CONFIG
 * ----------------
 * Colour tokens live here. To re-theme the site, change the hex codes below —
 * every component uses these token names (bg-ink, text-accent, etc.) instead
 * of raw hex values, so a single edit here re-colours the whole site.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./config/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1c1c",       // primary text
        muted: "#6f6f6f",     // secondary / body copy
        faint: "#a9a9a9",     // footer nav / disabled
        accent: "#d97a1f",    // brand orange (@ka, links, CTAs)
        paper: "#ffffff",     // page background
        line: "#e7e5e2",      // hairline dividers
      },
      fontFamily: {
        // Populated at runtime via CSS variable from config/fonts.js —
        // do not hardcode a font name here, change config/fonts.js instead.
        sans: ["var(--font-primary)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
      maxWidth: {
        site: "1600px",
      },
    },
  },
  plugins: [],
};
