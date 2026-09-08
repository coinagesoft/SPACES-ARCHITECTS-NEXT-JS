import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import { aboutCopy } from "@/config/site";
import styles from "./page.module.css";

export const metadata = { title: "Studio — Spaces Architects@ka" };

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteChrome dark />
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={assets.about.heroImage} alt="Studio interior" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className={styles.heroShade} />
        <div className={styles.heroCaption}><h1>{aboutCopy.heroTitle}</h1></div>
      </section>
      <section className={styles.intro}>
        <p className={styles.kicker}>{aboutCopy.kicker}</p>
        {aboutCopy.intro.map((paragraph) => <p key={paragraph} className={styles.bodyCopy}>{paragraph}</p>)}
        <p className={styles.quote}>{aboutCopy.quote}</p>
      </section>
      <section className={styles.founder}>
        <div className={styles.founderImage}>
          <Image src={assets.about.founderPhoto} alt={aboutCopy.founder.name} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
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
      <section id="contact" className={styles.team}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {aboutCopy.team.map((member, index) => (
            <div key={`${member.role}-${index}`} className={styles.teamMember}>
              <div className={styles.teamImage} />
              <p>{member.name}</p><p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}