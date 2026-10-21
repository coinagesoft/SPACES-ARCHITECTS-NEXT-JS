import "./globals.css";
import { Suspense } from "react";
import { primaryFont } from "@/config/fonts";
import { site } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavigationProgress from "@/components/NavigationProgress";

export const metadata = {
  title: `${site.name} ${site.handle}`,
  description: site.tagline,
};

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