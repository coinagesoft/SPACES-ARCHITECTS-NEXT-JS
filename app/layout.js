import "./globals.css";
import { Suspense } from "react";
import { primaryFont } from "@/config/fonts";
import { siteMetadata } from "@/config/seo";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavigationProgress from "@/components/NavigationProgress";

// Site-wide defaults. Every page overrides these with its own title, description,
// canonical and Open Graph tags from config/seo.js (see each page.js), so the
// tags are baked into the static HTML that Google crawls.
export const metadata = siteMetadata;

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