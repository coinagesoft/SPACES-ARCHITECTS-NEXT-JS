import { cloneElement } from "react";

// Minimal line/glyph icons, sized to match the footer's compact type scale.
// currentColor lets each icon inherit text-faint / hover:text-accent from its wrapper.
export const SOCIAL_ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.5 4.3c-2.1 0-3.53 1.28-3.53 3.63v2.51H8.4v2.96h2.57V21h2.53Z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.66 10.7 20.4 3h-1.6l-5.86 6.7L8.25 3H3l7.07 10.02L3 21h1.6l6.2-7.08L15.87 21h5.25l-7.46-10.3Zm-2.2 2.5-.72-1L5.03 4.2h2.46l4.6 6.44.72 1 5.98 8.37h-2.46l-4.87-6.8Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4ZM20 13.6c0-3.13-1.67-4.59-3.9-4.59-1.8 0-2.6 1-3.05 1.7V8.5H10.2c.04.85 0 12 0 12h2.85v-6.7c0-.36.03-.71.13-.97.28-.71.93-1.44 2.02-1.44 1.43 0 2 1.08 2 2.68V20H20v-6.4Z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 6.5 7.5 6.2 7.5-6.2" />
    </svg>
  ),
};

export function SocialIcon({ label, size = "h-4 w-4" }) {
  const icon = SOCIAL_ICONS[label];
  if (!icon) return <span>{label[0]}</span>;
  // Apply sizing straight onto the <svg> — a wrapping <span> is inline by
  // default and Tailwind's h-*/w-* utilities don't affect inline elements.
  return cloneElement(icon, {
    className: `${size} block`,
  });
}
