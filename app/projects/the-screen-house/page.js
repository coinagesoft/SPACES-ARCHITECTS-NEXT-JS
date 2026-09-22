import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from SCREEN-HOUSE/cover
const heroImage = assetImage("projects/SCREEN-HOUSE/cover/COVER.webp");
// Project photographs from SCREEN-HOUSE/3_4
const img1 = assetImage("projects/SCREEN-HOUSE/3_4/1.webp");
const img2 = assetImage("projects/SCREEN-HOUSE/3_4/2.webp");
const img3 = assetImage("projects/SCREEN-HOUSE/3_4/3.webp");
const img4 = assetImage("projects/SCREEN-HOUSE/3_4/4.webp");
const img5 = assetImage("projects/SCREEN-HOUSE/3_4/5.webp");
const img6 = assetImage("projects/SCREEN-HOUSE/3_4/6.webp");
const img7 = assetImage("projects/SCREEN-HOUSE/3_4/7.webp");
const img8 = assetImage("projects/SCREEN-HOUSE/3_4/8.webp");
const img9 = assetImage("projects/SCREEN-HOUSE/3_4/9.webp");
const img10 = assetImage("projects/SCREEN-HOUSE/3_4/10.webp");
const img11 = assetImage("projects/SCREEN-HOUSE/3_4/11.webp");
const img12 = assetImage("projects/SCREEN-HOUSE/3_4/12.webp");
export const metadata = {
  title: "The Screen House — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "The Screen House",
  Location: "New Delhi",
  Client: "Mr. Shashi Dawar",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img4, img5] },
  { type: "pair", images: [img2, img3] },
  { type: "full", image: img8 },
  { type: "split-reverse", large: img7, stack: [img6, img11] },
  { type: "pair", images: [img9, img10] },
  { type: "full", image: img12 },
];

export default function TheScreenHousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="The Screen House"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>The Screen House</h1>
              <p>New Delhi</p>
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
          </div>

          <div className={styles.infoBody}>
            <p>
              Designed for a{" "}
              <span className={styles.highlight}>family of six</span>,
              including two children, this contemporary residence balances a
              simple architectural expression with an{" "}
              <span className={styles.highlight}>
                open, interconnected way of living
              </span>
              . Distributed across four levels, the middle floors accommodate
              the family’s private spaces, while the stilt and upper levels are
              dedicated to recreation.
            </p>

            <p>
              Surrounded by buildings on three sides, the house adopts an
              outward-looking yet private planning strategy, using louvers,
              screens and carefully positioned openings to draw in daylight
              and air while maintaining{" "}
              <span className={styles.highlight}>visual connections</span>.
              Double-height spaces act as{" "}
              <span className={styles.highlight}>vertical connectors</span>,
              allowing light to travel deep into the home and linking the
              family’s living spaces across floors.
            </p>

            <p>
              The interiors follow a{" "}
              <span className={styles.highlight}>
                restrained monochrome palette
              </span>
              , enlivened by colourful artwork and furniture, while greenery is
              woven through both interior and exterior spaces. Bedrooms,
              kitchens and family lounges are arranged around these connected
              volumes, while the upper levels open into a bar, terrace garden
              and swimming pool, extending everyday living into the outdoors.
            </p>

            <p>
              The result is a minimal yet vibrant family home, where{" "}
              <span className={styles.highlight}>
                openness, privacy, recreation
              </span>{" "}
              and nature are carefully brought together.
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
                    alt="The Screen House"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split" || block.type === "split-reverse") {
              const isReverse = block.type === "split-reverse";
              return (
                <div
                  key={i}
                  className={`${styles.gallerySplit} ${isReverse ? styles.gallerySplitReverse : ""}`}
                >
                  <div
                    className={styles.gallerySplitLarge}
                    style={{ "--ratio": ratio(block.large) }}
                  >
                    <Image
                      src={block.large}
                      alt="The Screen House"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                  <div className={styles.gallerySplitStack}>
                    {block.stack.map((src, j) => (
                      <div
                        key={j}
                        className={styles.gallerySplitStackItem}
                        style={{ "--ratio": ratio(src) }}
                      >
                        <Image
                          src={src}
                          alt="The Screen House"
                          fill
                          sizes="(min-width: 768px) 48vw, 100vw"
                          className={styles.galleryImgFit}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={i} className={styles.galleryPair}>
                {block.images.map((src, j) => (
                  <div
                    key={j}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(src) }}
                  >
                    <Image
                      src={src}
                      alt="The Screen House"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
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

        <MoreProjects currentId="the-screen-house" />
      </main>

      <Footer />
    </>
  );
}