import Link from "next/link";
import { site } from "@/config/site";
import { SocialIcon } from "./SocialIcon";

const container = "site-container";
const topSection = "site-container py-9 md:py-10";
const bottomBar =
  "site-container flex flex-wrap items-center justify-between gap-4 py-3 text-[10px] tracking-wide uppercase";

const mainHeading =
  "mb-[21px] whitespace-nowrap text-[14px] leading-4 tracking-[0.12em] uppercase text-muted md:tracking-widest2";
const subLink =
  "block text-[12px] leading-4 tracking-wide uppercase text-faint transition-colors hover:text-accent";
const mainLink =
  "block whitespace-nowrap text-[14px] leading-4 tracking-[0.12em] uppercase text-muted transition-colors hover:text-accent md:tracking-widest2";
const ctaLink =
  "inline-block border-b border-line pb-1 text-[14px] leading-4 tracking-widest2 uppercase text-accent transition-colors hover:border-accent";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-16">
      <div className={topSection}>
        <p className="mb-6 text-[14px] leading-4 tracking-widest2 uppercase text-accent">
          Quick Link
        </p>

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:w-[50rem] md:grid-cols-4 md:gap-x-14 md:gap-y-0">
            {site.footerColumns.map((col, i) => (
              <div key={col.title || i}>
                {col.title ? (
                  <>
                    <p className={mainHeading}>{col.title}</p>
                    <ul className="space-y-[7px]">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className={subLink}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <ul className="space-y-[21px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={mainLink}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="md:ml-auto md:mr-10 md:w-[12rem]">
            <div className="flex gap-6">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-faint transition-colors hover:text-accent"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              <li>
                <Link href="/contact" className={ctaLink}>
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/contact" className={ctaLink}>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={container}>
        <div className="grid gap-5 border-t border-line py-6 text-[10px] text-faint md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div>
            <div className="text-base md:text-[1.33rem] font-medium tracking-widest2 text-[#6b6b6b]">
              {site.name} <span className="text-accent">{site.handle}</span>
            </div>
            <p className="mt-2">
              © {new Date().getFullYear()} by {site.name}
              {site.handle}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-center">
            <div className="flex gap-5">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-faint transition-colors hover:text-accent"
                >
                  <SocialIcon label={s.label} size="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <p className="text-center">
              {site.contact.phones.join(" / ")}{" "}
              <a href={"mailto:" + site.contact.email} className="underline">
                {site.contact.email}
              </a>
            </p>
            <p className="text-center">{site.contact.address}</p>
          </div>

          <a
            href="https://www.coinagesoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:justify-self-end text-faint transition-colors hover:text-accent"
          >
            Designed by — Coinagesoft
          </a>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className={bottomBar}>
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