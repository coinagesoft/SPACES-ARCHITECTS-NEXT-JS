import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from SACHDEVA-FARMHOUSE/cover
const heroImage = assetImage("projects/SACHDEVA-FARMHOUSE/cover/COVER.webp");
// Project photographs from SACHDEVA-FARMHOUSE/3_4
const img1 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/1.webp");
const img2 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/2.webp");
const img3 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/3.webp");
const img4 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/4.webp");
const img5 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/5.webp");
const img6 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/6.webp");
const img7 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/7.webp");
const img8 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/8.webp");
const img9 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/9.webp");
const img10 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/10.webp");
export const metadata = {
  title: "Sachdeva Farmhouse — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Sachdeva Residence",
  Location: "New Delhi",
  Client: "Mr. Himanshu Sachdeva",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img5, stack: [img1, img2] },
  { type: "pair", images: [img6, img7] },
  { type: "full", image: img3 },
  { type: "pair", images: [img4, img8] },
  { type: "pair", images: [img9, img10] },
];

export default function SachdevaFarmhousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Sachdeva Farmhouse"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Sachdeva Farmhouse</h1>
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
              Set within a{" "}
              <span className={styles.highlight}>3-acre</span>{" "}
              landscape, the farmhouse draws from tropical architecture to create a{" "}
              <span className={styles.highlight}>sequence of interconnected spaces</span>{" "}
              gathered around a central courtyard and pool. The layout places bedrooms and living spaces around this green heart, while the gym, spa and home theatre complete the enclosure, creating varied architectural compositions from every side.
            </p>

            <p>
              The journey into the house is deliberately choreographed. A{" "}
              <span className={styles.highlight}>cantilevered zinc-clad entrance</span>{" "}
              block establishes a distinctive arrival, opening into a double-height lobby framed by natural light, garden views and a sculptural staircase.{" "}
              <span className={styles.highlight}>Rough Indian stone, backlit glass and timber</span>{" "}
              introduce texture and drama, while carefully designed transitions create a sense of anticipation as one moves through the house.
            </p>

            <p>
              The pool court becomes the{" "}
              <span className={styles.highlight}>experiential centre</span>
              , transforming with the changing daylight. Lowered wellness spaces lead upward to a terrace garden and party space, extending the journey between levels and landscape.
            </p>

            <p>
              Developed through{" "}
              <span className={styles.highlight}>extensive scale-model studies, material exploration and detailed junctions</span>
              , the farmhouse is an exercise in form, movement and atmosphere—where architecture is experienced as a gradual unfolding rather than a single composition.
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
                    alt="Sachdeva Farmhouse"
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
                      alt="Sachdeva Farmhouse"
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
                          alt="Sachdeva Farmhouse"
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
                      alt="Sachdeva Farmhouse"
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

        <MoreProjects currentId="sachdeva-farmhouse" />
      </main>

      <Footer />
    </>
  );
}