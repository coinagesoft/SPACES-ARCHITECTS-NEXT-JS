import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import MoreProjects from "@/components/MoreProjects";
import ShareIcons from "@/components/ShareIcons";
import styles from "../slender-house/page.module.css";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HERITAGE-PARK/cover/Cover Image.webp");

const img1 = assetImage("projects/HERITAGE-PARK/3_4/1. potrait.webp");
const img2 = assetImage("projects/HERITAGE-PARK/3_4/2. potrait.webp");
const img3 = assetImage("projects/HERITAGE-PARK/3_4/3.webp");
const img4 = assetImage("projects/HERITAGE-PARK/3_4/4.webp");
const img5 = assetImage("projects/HERITAGE-PARK/3_4/5.webp");
const img6 = assetImage("projects/HERITAGE-PARK/3_4/6.webp");
const img7 = assetImage("projects/HERITAGE-PARK/3_4/7 full bleed.webp");
const img8 = assetImage("projects/HERITAGE-PARK/3_4/8.webp");
const img9 = assetImage("projects/HERITAGE-PARK/3_4/9.webp");
const img10 = assetImage("projects/HERITAGE-PARK/3_4/10.webp");
const img11 = assetImage("projects/HERITAGE-PARK/3_4/11.webp");
const img12 = assetImage("projects/HERITAGE-PARK/3_4/12 full bleed.webp");
const img13 = assetImage("projects/HERITAGE-PARK/3_4/13.webp");
const img14 = assetImage("projects/HERITAGE-PARK/3_4/14.webp");
const img15 = assetImage("projects/HERITAGE-PARK/3_4/15.webp");
const img16 = assetImage("projects/HERITAGE-PARK/3_4/16.webp");
const img17 = assetImage("projects/HERITAGE-PARK/3_4/17 full bleed.webp");

const ratio = (image) => (image?.width && image?.height ? image.width / image.height : 1);

// Local copy of the shared project page, used only by Heritage Park so its gallery
// can follow the file names (pairs + "full bleed" rows) without touching the shared
// ProjectDetailPage. Markup and classes are identical to the shared page.
function HeritageDetail({
  currentId,
  title,
  location,
  hero,
  galleryRows = [],
  details = {},
  awards = [],
  publications = [],
  recognition,
  description = [],
}) {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={hero}
          alt={title}
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>{title}</h1>
              {location && <p>{location}</p>}
            </div>
          </div>
        </ParallaxHeroImage>

        <section className={`site-container ${styles.infoSection}`}>
          <aside className={styles.infoSidebar}>
            <div>
              <h3>Project Details</h3>
              <dl>
                {Object.entries(details).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}:</dt> <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {awards.length > 0 && (
              <div>
                <h3>Awards:</h3>
                <ul>
                  {awards.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
            {publications.length > 0 && (
              <div>
                <h3>Publications:</h3>
                <ul>
                  {publications.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {recognition && (
              <div>
                <h3>Recognition:</h3>
                <ul>
                  <li>{recognition}</li>
                </ul>
              </div>
            )}
          </aside>
          <div className={styles.infoBody}>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={`site-container ${styles.gallery}`} aria-label={`${title} gallery`}>
          {galleryRows.map((row, index) =>
            row.type === "full" ? (
              <div key={row.image.src} className={styles.galleryFull}>
                <Image src={row.image} alt={title} sizes="100vw" className={styles.galleryImg} />
              </div>
            ) : (
              <div key={index} className={styles.galleryPair}>
                {row.images.map((image) => (
                  <div
                    key={image.src}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(image) }}
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </section>

        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <ShareIcons />
          </div>
        </section>

        <MoreProjects currentId={currentId} />
      </main>
      <Footer />
    </>
  );
}

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Heritage Park — Spaces Architects@ka" };

export default function HeritageParkPage() {
  return (
    <HeritageDetail
      currentId="heritage-park"
      title="Heritage Park"
      location="Old Delhi"
      hero={hero}
      // Layout follows the file names: the two portraits first as a pair,
      // "full bleed" images full width, everything else in pairs.
      galleryRows={[
        { type: "pair", images: [img1, img2] },
        { type: "pair", images: [img3, img4] },
        { type: "pair", images: [img5, img6] },
        { type: "full", image: img7 },
        { type: "pair", images: [img8, img9] },
        { type: "pair", images: [img10, img11] },
        { type: "full", image: img12 },
        { type: "pair", images: [img13, img14] },
        { type: "pair", images: [img15, img16] },
        { type: "full", image: img17 },
      ]}
      details={{
        Project: "Heritage Park",
        Location: "Chandni Chowk, Old Delhi",
        "Site Area": "1.83 acres",
        Client: "MCD",
        Status: "Completed",
      }}
      awards={[
        "IIA Award for Heritage – Winner, 2022",
      ]}
      publications={[
        "Hindustan Times",
        "The Indian Express",
        "Times of India",
        "India Today",
        "The New Indian Express",
        "The Print / ANI",
        "ABP Live",
        "NDTV",
        "Curly Tales",
        "Rashtrapati Bhawan",
      ]}
      recognition={"The Heritage Park is the Mughal Garden of Chandni Chowk – Ex Hon’ble President Shri Ram Nath Kovind"}
      description={[
        // Tagline shown as a pull-quote (inline styles keep the shared page styles untouched)
        <span
          style={{
            display: "block",
            borderLeft: "2px solid #FEA50B",
            padding: "6px 0 6px 28px",
            margin: "0 0 20px",
            textAlign: "left",
          }}
        >
          <span
            style={{
              display: "block",
              color: "#FEA50B",
              fontSize: "clamp(16px, 2.2vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: "0.1em",
            }}
          >
            &ldquo;Heritage Park is the Mughal Garden of Old Delhi&rdquo;
          </span>
          <span
            style={{
              display: "block",
              marginTop: "16px",
              color: "#7d7d7d",
              fontSize: "13px",
              letterSpacing: "0.18em",
            }}
          >
            ~ President Ram Nath Kovind
          </span>
        </span>,
        <>
          Set opposite the Red Fort in the heart of Old Delhi, Heritage Park is a landscape redevelopment conceived as a <Orange>contemporary escape rooted in the city&apos;s history</Orange>. Framed by panoramic views of the Red Fort and Jama Masjid, the park brings together <Orange>Mughal and Hindu architectural influences</Orange> through a distinctly vernacular material language.
        </>,
        <>
          The park unfolds across two zones—a <Orange>hardscape entry and landscaped garden</Orange>. The journey begins at a boundary wall of red sandstone arches and Delhi stone, leading to a shaded public precinct with traditional shops, eateries and views towards the Red Fort. Beyond it, a central walkway connects three destinations: the <Orange>Baradari, sunken seating and open-air amphitheatre</Orange>, creating a continuous sequence of gathering spaces.
        </>,
        <>
          A <Orange>Mughal-inspired garden</Orange>, white-stone Baradari and integrated seating are composed within abundant greenery, preserving the site&apos;s lush character and evoking the familiarity of long, leisurely picnics. A stage anchors the amphitheatre while maintaining a visual connection across the park.
        </>,
        <>
          The material palette remains deliberately <Orange>vernacular—Delhi stone, red sandstone and White Statuario marble</Orange>—echoing the architectural vocabulary of the Red Fort and Chandni Chowk. Traditional materials are reinterpreted through contemporary detailing and construction, allowing the park to preserve the cultural memory of its setting while giving it a <Orange>renewed public life</Orange>.
        </>,
      ]}
    />
  );
}