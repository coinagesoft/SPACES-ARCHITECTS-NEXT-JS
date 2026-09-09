import Link from "next/link";
import { site } from "@/config/site";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const footerContainer = "site-container";

  return (
    <footer className="border-t border-line mt-16">
      <div className={`${footerContainer} py-9 md:py-10`}>
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:w-[50rem] md:grid-cols-4 md:gap-x-14 md:gap-y-0">
            {site.footerColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-[14px] tracking-widest2 uppercase text-faint">
                  {col.title}
                </p>
                <ul className="space-y-1">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="cursor-pointer text-[12px] leading-4 tracking-wide uppercase text-faint transition-colors hover:text-accent">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:ml-auto md:mr-10 md:w-[12rem]">
            <p className="mb-3 text-[14px] tracking-widest2 uppercase text-accent">
              Connect With Us
            </p>
            <NewsletterForm />
            <div className="mt-4 flex gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[10px] tracking-wide text-faint transition-colors hover:text-accent"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={footerContainer}>
        <div className="grid gap-5 border-t border-line py-6 text-[10px] text-faint md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div>
            <div className="text-xl font-medium tracking-widest2 uppercase text-ink">
              {site.name} <span className="text-accent">{site.handle}</span>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} by {site.name}{site.handle}</p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-center">
            <div className="flex gap-5 text-[10px] tracking-wide">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-colors hover:text-accent"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
            <p className="text-center">
              {site.contact.phones.join(" / ")}{" "}
              <a href={`mailto:${site.contact.email}`} className="underline">
                {site.contact.email}
              </a>
            </p>
            <p className="text-center">{site.contact.address}</p>
          </div>

          <p className="md:justify-self-end">Designed by —</p>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className={`${footerContainer} flex flex-wrap items-center justify-between gap-4 py-3 text-[10px] tracking-wide uppercase`}>
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
