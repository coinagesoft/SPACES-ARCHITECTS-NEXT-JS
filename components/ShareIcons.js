import { site } from "@/config/site";
import { SocialIcon } from "./SocialIcon";

// Share-row icons for project pages. Uses the exact same links (config/site.js -> site.social)
// and icons as the footer, so the two always stay in sync.
export default function ShareIcons({ size = "h-4 w-4" }) {
  return (
    <>
      {site.social.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target={s.label === "Email" ? undefined : "_blank"}
          rel={s.label === "Email" ? undefined : "noopener noreferrer"}
        >
          <SocialIcon label={s.label} size={size} />
        </a>
      ))}
    </>
  );
}
