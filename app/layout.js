import "./globals.css";
import { Suspense } from "react";
import { headers } from "next/headers";
import { primaryFont } from "@/config/fonts";
import { metadataForPath } from "@/config/seo";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavigationProgress from "@/components/NavigationProgress";

// Title, description, keywords, canonical and Open Graph for every page come
// from config/seo.js. middleware.js passes the URL in these two headers.
export function generateMetadata() {
  const h = headers();
  return metadataForPath(h.get("x-pathname"), h.get("x-search") || "");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.variable}>
      <head>
        <link rel="preconnect" href="https://assets.spacesarchitects-ka.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.spacesarchitects-ka.com" />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        {children}
      </body>
    </html>
  );
}