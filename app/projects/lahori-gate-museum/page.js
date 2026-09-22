import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from LAHORI-GATE-MUSEUM/cover
const heroImage = assetImage("projects/LAHORI-GATE-MUSEUM/cover/Cover Image.webp");
// Project photographs from LAHORI-GATE-MUSEUM/3_4
const img1 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/1.webp");
const img2 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/2.webp");
const img3 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/3.webp");
const img4 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/4.webp");
const img5 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/5.webp");
const img6 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/6.webp");
const img7 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/7.webp");
const img8 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/8.webp");
const img9 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/9.webp");
const img10 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/10.webp");
const img11 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/11.webp");
const img12 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/12.webp");
export const metadata = {
  title: "Lahori Gate Museum — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Lahori Gate Museum",
  Location: "Old Delhi",
  Client: "Mr. Vijay Goel",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img3, img4] },
  { type: "pair", images: [img7, img8] },
  { type: "full", image: img6 },
  { type: "split-reverse", large: img2, stack: [img5, img9] },
  { type: "pair", images: [img10, img11] },
  { type: "full", image: img12 },
];

export default function LahoriGateMuseumPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Lahori Gate Museum"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Lahori Gate Museum</h1>
              <p>Old Delhi</p>
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
              Located in the historic fabric of Chandni Chowk, the Museum
              restores and reimagines a century-old structure as an immersive
              journey through the cultural memory of Old Delhi. The project
              preserves the architectural character of the building while
              transforming it into a space for experiencing the many layers of{" "}
              <span className={styles.highlight}>
                Chandni Chowk’s history, traditions and everyday life
              </span>
              .
            </p>

            <p>
              The museum unfolds through a series of themed sections exploring
              Old Delhi’s architecture, transport, Khari Baoli’s spices, the
              Red Fort, religious diversity, kite flying and the Ghantaghar.
              Recreated haveli interiors offer glimpses into the architectural
              character of the{" "}
              <span className={styles.highlight}>Walled City</span>, while
              dedicated spaces celebrate its poetry, literature and
              traditional handicrafts. A cafeteria serving local delicacies
              further extends the experience beyond exhibition.
            </p>

            <p>
              More than a collection of artefacts, the museum is conceived as
              a{" "}
              <span className={styles.highlight}>
                living archive of Chandni Chowk
              </span>
              , translating its sights, colours, flavours and cultural diversity
              into a contemporary visitor experience while helping preserve and
              share the heritage of Old Delhi.
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
                    alt="Lahori Gate Museum"
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
                      alt="Lahori Gate Museum"
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
                          alt="Lahori Gate Museum"
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
                      alt="Lahori Gate Museum"
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

        <MoreProjects currentId="lahori-gate-museum" />
      </main>

      <Footer />
    </>
  );
}