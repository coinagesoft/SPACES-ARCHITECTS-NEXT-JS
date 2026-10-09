import "./globals.css";
import { primaryFont } from "@/config/fonts";
import { site } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: `${site.name} ${site.handle}`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.variable}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}