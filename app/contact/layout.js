import { pageMetadata } from "@/config/seo";

// contact/page.js is a client component ("use client"), and client components
// cannot export metadata. This layout carries the contact page's SEO tags instead.
export const metadata = pageMetadata("contact");

export default function ContactLayout({ children }) {
  return children;
}
