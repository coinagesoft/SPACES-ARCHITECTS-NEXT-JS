import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import MoreProjects from "@/components/MoreProjects";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from ARCHITECTS-OFFICE/cover
const heroImage = assetImage("projects/ARCHITECTS-OFFICE/cover/COVER IMAGE.webp");
// Project photographs from ARCHITECTS-OFFICE/3_4
const img1 = assetImage("projects/ARCHITECTS-OFFICE/3_4/1.webp");
const img2 = assetImage("projects/ARCHITECTS-OFFICE/3_4/2.webp");
const img3 = assetImage("projects/ARCHITECTS-OFFICE/3_4/3.webp");
const img4 = assetImage("projects/ARCHITECTS-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/ARCHITECTS-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/ARCHITECTS-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/ARCHITECTS-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/ARCHITECTS-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/ARCHITECTS-OFFICE/3_4/9.webp");
const img10 = assetImage("projects/ARCHITECTS-OFFICE/3_4/10.webp");
const img11 = assetImage("projects/ARCHITECTS-OFFICE/3_4/11.webp");
const img12 = assetImage("projects/ARCHITECTS-OFFICE/3_4/12.webp");
const img13 = assetImage("projects/ARCHITECTS-OFFICE/3_4/13.webp");
const img14 = assetImage("projects/ARCHITECTS-OFFICE/3_4/14.webp");
const img15 = assetImage("projects/ARCHITECTS-OFFICE/3_4/15.webp");
export const metadata = {
  title: "Architect's Office — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Architect's Office",
  Location: "South Extension, New Delhi",
  Status: "Completed",
};

const awards = [
  "World Inside Festival 2014 – Shortlisted in Office Category",
  "World Interior News Awards 2014 – Shortlisted",
  "IIA Awards 2015 – Shortlisted in Interior projects category",
  "World Architecture Community Awards 2020 35th cycle – Winner for Spaces Architects@KA Studio Publications",
  "Custom Made Office –II",
];

const gallery = [
  { type: "pair", images: [img1, img5] },
  
  { type: "pair", images: [img4, img2] },
  { type: "pair", images: [img3, img6] },
  
  { type: "pair", images: [img14, img9] },
  { type: "full", image: img7 },
  { type: "pair", images: [img10, img11] },
  { type: "pair", images: [img12, img13] },
  { type: "pair", images: [img8, img15] },
];

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function ArchitectsOfficePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Architect's Office"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Architect&apos;s Office</h1>
              <p>South Extension, New Delhi</p>
            </div>
          </div>
        </ParallaxHeroImage>

        {/* Details + description */}
        <section className={`site-container ${styles.infoSection}`}>
          <div className={styles.infoSidebar}>
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
            <div>
              <h3>Awards:</h3>
              <ul>
                {awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoBody}>
            <p>
              The studio was designed to create a culture and an environment where people can{" "}
              <span className={styles.highlight}>work, play and interact</span>. It was envisioned
              as a space that brings happiness to everyday working and makes people feel connected to
              their surroundings. We believe that the environment plays an important role in{" "}
              <span className={styles.highlight}>motivating and inspiring people</span>. This holds
              true for every creative individual, whether a writer, painter or dancer, as the
              surroundings, natural or man-made, often become an important part of their creative
              process.
            </p>

            <p>
              The project reflects Ar. Kapil Aggarwal&apos;s journey and creative evolution over the
              years. As he explains, the design of the studio was shaped by{" "}
              <span className={styles.highlight}>three key considerations</span>. The first was{" "}
              <span className={styles.highlight}>personal</span>, with the office becoming a
              reflection of his experiences and practices over time. The second was the{" "}
              <span className={styles.highlight}>experience</span> of those visiting the studio,
              allowing them to discover the space without any preconceived notions and experience
              the firm&apos;s design philosophy firsthand. Most importantly, the studio was designed
              around the people who work there, with a strong emphasis on creating a place where
              they could feel{" "}
              <span className={styles.highlight}>comfortable, inspired and at ease</span>.
            </p>

            <p>
              Surrounded by{" "}
              <span className={styles.highlight}>
                grey textured walls, yellow tag boards, white oak finishes, changing ceiling forms
                and fluid furniture
              </span>
              , the young architects find a setting that allows them to enjoy the process while
              pursuing their passion for reinventing architecture.
            </p>
          </div>
        </section>
        {/* Gallery */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) => {
            if (block.type === "full") {
              return (
                <div key={i} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Architect's Office"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "wide") {
              return (
                <div key={i} className={styles.galleryWide}>
                  <Image
                    src={block.image}
                    alt="Architect's Office"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);
              // Treat the 2-item stack as one combined "virtual image" so
              // it can be measured against `large` on equal footing — its
              // combined ratio is what a single image spanning the same
              // width and total (natural) stacked height would have.
              const stackCombinedRatio =
                1 / stackRatios.reduce((sum, r) => sum + 1 / r, 0);

              return (
                <div key={i} className={styles.gallerySplit}>
                  <div className={styles.gallerySplitLarge} style={{ "--ratio": largeRatio }}>
                    <Image
                      src={block.large}
                      alt="Architect's Office"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                  <div
                    className={styles.gallerySplitStack}
                    style={{ "--ratio": stackCombinedRatio }}
                  >
                    {block.stack.map((src, j) => (
                      <div
                        key={j}
                        className={styles.gallerySplitStackItem}
                        style={{
                          "--ratio": stackRatios[j],
                          "--height-weight": 1 / stackRatios[j],
                        }}
                      >
                        <Image
                          src={src}
                          alt="Architect's Office"
                          fill
                          sizes="(min-width: 768px) 48vw, 92vw"
                          className={styles.galleryImgFit}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // "pair" — two images side by side. Each image's width is
            // proportional to its own aspect ratio, so both land at the
            // exact same height, full row width, no crop, no stretch.
            return (
              <div key={i} className={styles.galleryPair}>
                {(block.images || block.image || []).map((src, j) => (
                  <div
                    key={j}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(src) }}
                  >
                    <Image
                      src={src}
                      alt="Architect's Office"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </section>

        {/* Share */}
        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <MoreProjects currentId="architects-office" />
      </main>

      <Footer />
    </>
  );
}