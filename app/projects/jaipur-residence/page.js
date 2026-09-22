import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from JAIPUR-RESIDENCE/cover
const heroImage = assetImage("projects/JAIPUR-RESIDENCE/cover/COVER.webp");
// Project photographs from JAIPUR-RESIDENCE/photographs
// Sizes (from the asset manifest):
//   landscape 1280x850: img1, img2, img5, img6, img9, img14, img15
//   landscape 1280x771: img11
//   portrait  637x960 : img4, img7, img12, img16, img17
//   portrait  other   : img3 (717x960), img8 (683x960), img10 (626x960), img13 (769x960)
const img1 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0001.webp");
const img2 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0003.webp");
const img3 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0004.webp");
const img4 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0005.webp");
const img5 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0006.webp");
const img6 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0007.webp");
const img7 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0013.webp");
const img8 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0014.webp");
const img9 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0019.webp");
const img10 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0020.webp");
const img11 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0024.webp");
const img12 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0025.webp");
const img13 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0026.webp");
const img14 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0027.webp");
const img15 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0038.webp");
const img16 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0042.webp");
const img17 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0046.webp");

export const metadata = {
  title: "Jaipur Residence — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Jaipur Residence",
  Location: "Jaipur, Rajasthan",
  Client: "Mrs. Malu",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

// Layout rules (same as the Screen House reference):
// - "pair" only uses portraits with identical width/height.
// - "split" = one portrait (large) + two landscape images stacked beside it.
// - "full" is landscape only (no full-width portraits).
// - Pair 8 mixes 626x960 and 637x960 (under 2% apart), so both boxes share
//   one ratio via `ratio` to keep the row perfectly aligned.
const gallery = [
  { type: "split", large: img3, stack: [img1, img2] },
  { type: "pair", images: [img4, img7] },
  { type: "full", image: img6 },
  { type: "split-reverse", large: img13, stack: [img11, img5] },
  { type: "pair", images: [img12, img16] },
  { type: "full", image: img15 },
  { type: "split", large: img8, stack: [img9, img14] },
  { type: "pair", images: [img10, img17], ratio: 0.658 },
];

export default function JaipurResidencePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Jaipur Residence"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Jaipur Residence</h1>
              <p>Jaipur, Rajasthan</p>
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
              Set in Jaipur, this residence brings together{" "}
              <span className={styles.highlight}>
                Rajasthani heritage and contemporary expression
              </span>
              , weaving carved{" "}
              <span className={styles.highlight}>
                jaalis, arches and ethnic motifs
              </span>{" "}
              into a modern spatial language. The lower levels retain a sense of
              warmth and tradition, while the upper floor takes a deliberate
              departure for the young son, adopting a{" "}
              <span className={styles.highlight}>
                bold black-and-white palette
              </span>{" "}
              that gives the home a more youthful and individual character.
            </p>

            <p>
              The interiors continue this dialogue through contrasting moods. A
              warm, neutral formal living room combines plush furnishings,
              filtered daylight and a cascading chandelier, while the kitchen
              introduces a sleek monochrome language with high-gloss finishes
              and a seamless connection to the dining space. Above, the
              son&apos;s lounge embraces geometric lighting, circular mirrors
              and contemporary furniture, creating an energetic counterpoint to
              the heritage-inspired spaces below.
            </p>

            <p>
              A landscaped terrace garden crowns the residence, bringing nature
              into the composition and completing its{" "}
              <span className={styles.highlight}>
                balance of tradition, individuality and contemporary living.
              </span>
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
                    alt="Jaipur Residence"
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
                      alt="Jaipur Residence"
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
                          alt="Jaipur Residence"
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
                    style={{ "--ratio": block.ratio ?? ratio(src) }}
                  >
                    <Image
                      src={src}
                      alt="Jaipur Residence"
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

        <MoreProjects currentId="jaipur-residence" />
      </main>

      <Footer />
    </>
  );
}