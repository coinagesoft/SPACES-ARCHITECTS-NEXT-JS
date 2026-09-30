/**
 * Floating "Chat on WhatsApp" button — shown on every page.
 * Uses WhatsApp Click to Chat: https://wa.me/<number>?text=<message>
 *
 * >>> EDIT ONLY THE TWO VALUES BELOW <<<
 */

// International format, digits only: country code + number.
// No "+", no spaces, no dashes, no leading zeros.  Example (India): 919876543210
const WHATSAPP_NUMBER = "919311013122";

// Text that appears pre-filled in the visitor's chat box (they can edit it).
const WHATSAPP_MESSAGE =
  "Hello Spaces Architects@ka, I found your website and would like to discuss a project.";

export default function WhatsAppButton() {
  // Safety: don't show a broken button until a real number is entered.
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) return null;

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      // z-40: above page content and header (z-30), below the full-screen menu (z-50).
      className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:right-6 md:h-16 md:w-16"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.17 29 16S23.17 3 16.003 3zm0 23.6c-1.95 0-3.86-.53-5.53-1.52l-.4-.23-3.96 1.02 1.06-3.86-.26-.4A10.56 10.56 0 0 1 5.4 16c0-5.86 4.75-10.6 10.6-10.6S26.6 10.14 26.6 16 21.86 26.6 16.003 26.6zm5.82-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}