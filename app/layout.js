import "./globals.css";
import { primaryFont } from "@/config/fonts";
import { site } from "@/config/site";

export const metadata = {
  title: `${site.name} ${site.handle}`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.variable}>
      <body className="bg-paper text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
