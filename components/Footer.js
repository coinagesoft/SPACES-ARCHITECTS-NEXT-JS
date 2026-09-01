import Link from "next/link";
import { site } from "@/config/site";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-16">
      <div className="site-container py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {site.footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs tracking-widest2 uppercase text-faint mb-4">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-xs tracking-wide uppercase text-faint hover:text-accent cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs tracking-widest2 uppercase text-accent mb-4">
              Connect With Us
            </p>
            <NewsletterForm />
            <div className="flex gap-4 mt-6">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-faint hover:text-accent transition-colors text-sm"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-medium tracking-widest2 uppercase">
              {site.name} <span className="text-accent">{site.handle}</span>
            </span>
          </div>
          <div className="text-xs text-faint">
            © {new Date().getFullYear()} by {site.name}
            {site.handle}
          </div>
        </div>
        <div className="site-container pb-6 flex flex-wrap gap-x-6 gap-y-1 text-xs text-faint">
          <p>
            {site.contact.phones.join(" / ")}{" "}
            <a href={`mailto:${site.contact.email}`} className="underline">
              {site.contact.email}
            </a>
          </p>
          <p className="w-full md:w-auto">{site.contact.address}</p>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className="site-container flex flex-wrap items-center justify-between gap-4 py-4 text-xs tracking-wide uppercase">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Terms &amp; Support
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
          <span className="text-white/60">{site.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
