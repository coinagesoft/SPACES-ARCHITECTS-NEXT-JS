import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from THE-BLUE-COURTYARD/cover
const heroImage = assetImage("projects/THE-BLUE-COURTYARD/cover/cover.webp");
const skyHero = assetImage("projects/THE-BLUE-COURTYARD/cover/hero (1).webp");
// Project photographs from THE-BLUE-COURTYARD/3_4
const img1 = assetImage("projects/THE-BLUE-COURTYARD/3_4/1.webp");
const img2 = assetImage("projects/THE-BLUE-COURTYARD/3_4/2.webp");
const img3 = assetImage("projects/THE-BLUE-COURTYARD/3_4/3.webp");
const img4 = assetImage("projects/THE-BLUE-COURTYARD/3_4/4.webp");
const img5 = assetImage("projects/THE-BLUE-COURTYARD/3_4/5.webp");
const img6 = assetImage("projects/THE-BLUE-COURTYARD/3_4/6.webp");
const img7 = assetImage("projects/THE-BLUE-COURTYARD/3_4/7.webp");
const img8 = assetImage("projects/THE-BLUE-COURTYARD/3_4/8.webp");
const img9 = assetImage("projects/THE-BLUE-COURTYARD/3_4/9.webp");
const img10 = assetImage("projects/THE-BLUE-COURTYARD/3_4/10.webp");
const img11 = assetImage("projects/THE-BLUE-COURTYARD/3_4/11.webp");
const img12 = assetImage("projects/THE-BLUE-COURTYARD/3_4/12.webp");
export const metadata = {
  title: "House of Blue Courtyard — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "House of Blue Courtyard",
  Location: "Vasant Kunj, New Delhi",
  Client: "Mr. Amit Talwar",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "pair", images: [img1, img2] },
  { type: "split", large: img3, stack: [img8, img9] },
  { type: "full", image: img7 },
  { type: "split-reverse", large: img10, stack: [img4, img5] },
  { type: "pair", images: [img11, img12] },
  { type: "pair", images: [img6, skyHero] },
];

export default function HouseOfBlueCourtyardPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="House of Blue Courtyard"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>House of Blue Courtyard</h1>
              <p>Vasant Kunj, New Delhi</p>
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
              Conceived around an expansive central void, the residence
              establishes an{" "}
              <span className={styles.highlight}>
                interplay between architecture, landscape, and open skies
              </span>
              . A bold contemporary geometry defines the exterior, where deep
              overhangs, cantilevered planes, and lush vertical greens create a{" "}
              <span className={styles.highlight}>
                sheltered sanctuary in the urban fabric of Vasant Kunj
              </span>
              .
            </p>

            <p>
              The signature open courtyard serves as a{" "}
              <span className={styles.highlight}>
                vertical frame to the sky
              </span>
              , drawing daylight deep into the interior and fostering a seamless
              connection between indoor living areas and the outdoor greens.
              Expansive glazing, warm wooden soffits, and restrained neutral
              volumes come together to produce an atmosphere of{" "}
              <span className={styles.highlight}>
                serenity, spaciousness, and modern refinement
              </span>
              .
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
                    alt="House of Blue Courtyard"
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
                      alt="House of Blue Courtyard"
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
                          alt="House of Blue Courtyard"
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
                      alt="House of Blue Courtyard"
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

        <MoreProjects currentId="house-of-blue-courtyard" />
      </main>

      <Footer />
    </>
  );
}