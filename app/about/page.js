import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assetImage } from "@/assets";
import { aboutCopy } from "@/config/site";
import styles from "./page.module.css";

export const metadata = { title: "Studio — Spaces Architects@ka" };

// ---- Page images (served from the media server via assetImage) ----
const heroImage = assetImage("About_hero.jpg");
const founderPhoto = assetImage("Kapil.jpg");

// ---- Team photos — keep the About page to four featured members only ----
const poojaAggarwal = assetImage("Team/0. POOJA AGGARWAL - SENIOR INTERIOR DESIGNER.webp");
const pawanSharma = assetImage("Team/1_Pawan Sharma_Senior Associate Architect.webp");
const arujSaxena = assetImage("Team/2_Aruj Saxena_Associate Architect.webp");
const vikrantSingh = assetImage("Team/3_Vikrant Singh_Associate Architect.webp");

const featuredTeam = [
  { src: poojaAggarwal, name: "Pooja Aggarwal", role: "Senior Interior Designer" },
  { src: pawanSharma, name: "Pawan Sharma", role: "Senior Associate Architect" },
  { src: arujSaxena, name: "Aruj Saxena", role: "Associate Architect" },
  { src: vikrantSingh, name: "Vikrant Singh", role: "Associate Architect" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteChrome dark />
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={heroImage}
            alt="Studio interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className={styles.heroShade} />

        <div className={`site-container ${styles.heroCaption}`}>
          <h1>{aboutCopy.heroTitle}</h1>
        </div>
      </section>
      <section className={`site-container ${styles.intro}`}>
        <p className={styles.kicker}>{aboutCopy.kicker}</p>
        {aboutCopy.intro.map((paragraph) => <p key={paragraph} className={styles.bodyCopy}>{paragraph}</p>)}
        <p className={styles.quote}>{aboutCopy.quote}</p>
      </section>
      <section className={`site-container ${styles.founder}`}>
        <div className={styles.founderImage}>
          <Image src={founderPhoto} alt={aboutCopy.founder.name} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
        </div>
        <div className={styles.founderContent}>
          <h2>Founder: <span>{aboutCopy.founder.name}</span></h2>
          <div className={styles.founderBio}>
            {aboutCopy.founder.bio.map((paragraph, pIndex) => (
              <p key={pIndex}>
                {paragraph.map((segment, sIndex) => (
                  segment.highlight ? (
                    <span key={sIndex} className={styles.highlight}>{segment.text}</span>
                  ) : (
                    <span key={sIndex}>{segment.text}</span>
                  )
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className={`site-container ${styles.team}`}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {featuredTeam.map((member, index) => (
            <div key={`${member.name}-${index}`} className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className={styles.moreWrap}>
          <Link href="/teams" className={styles.moreLink}>Meet the full team →</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}