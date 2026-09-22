import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from projects/NOCC-OFFICE/cover
const heroImage = assetImage("projects/NOCC-OFFICE/cover/COVER IMAGE.webp");
// Project photographs from projects/NOCC-OFFICE/3_4
const img1 = assetImage("projects/NOCC-OFFICE/3_4/1.webp");
const img1b = assetImage("projects/NOCC-OFFICE/3_4/1(1).webp");
const img2 = assetImage("projects/NOCC-OFFICE/3_4/2.webp");
const img2b = assetImage("projects/NOCC-OFFICE/3_4/2(1).webp");
const img3 = assetImage("projects/NOCC-OFFICE/3_4/3.webp");
const img3b = assetImage("projects/NOCC-OFFICE/3_4/3(1).webp");
const img4 = assetImage("projects/NOCC-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/NOCC-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/NOCC-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/NOCC-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/NOCC-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/NOCC-OFFICE/3_4/9.webp");
const img10 = assetImage("projects/NOCC-OFFICE/3_4/10.webp");
const img11 = assetImage("projects/NOCC-OFFICE/3_4/11.webp");
const img12 = assetImage("projects/NOCC-OFFICE/3_4/12.webp");
const img14 = assetImage("projects/NOCC-OFFICE/3_4/14.webp");
const img15 = assetImage("projects/NOCC-OFFICE/3_4/15.webp");
const img16 = assetImage("projects/NOCC-OFFICE/3_4/16.webp");

export const metadata = {
  title: "NOCC Office — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "NOCC Office",
  Location: "New Delhi",
  Client: "NIIT Technologies",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "full", image: img1 },
  { type: "pair", images: [img4, img5] },
  { type: "split", large: img2b, stack: [img6, img7] },
  { type: "full", image: img8 },
  { type: "pair", images: [img9, img10] },
  { type: "split-reverse", large: img3, stack: [img11, img12] },
  { type: "full", image: img14 },
  { type: "pair", images: [img15, img16] },
  { type: "pair", images: [img1b, img3b] },
  { type: "full", image: img2 },
];

export default function NoccOfficePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="NOCC Office"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>NOCC Office</h1>
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
              The brief called for a <span className={styles.highlight}>creative, open office</span> with large glass panels and a <span className={styles.highlight}>youthful, vibrant ambience</span>. The concept evolved through abstract shapes, geometric forms, panels and pastel shades, creating a spatial experience revealed progressively along the corridor.
            </p>

            <p>
              Multiple views were created beyond partitions to visually connect the spaces and reinforce the open-office character. A <span className={styles.highlight}>green pastel egg-shaped meeting room</span> intersects a rectangular meeting room positioned at <span className={styles.highlight}>45 degrees</span>, creating a dynamic geometric composition. The former contrasts with the latter’s <span className={styles.highlight}>dark teak cladding</span>, while its front is finished in mirror-effect laminate with transparent circular glass elements, creating an <span className={styles.highlight}>optical illusion</span> along the approach from the entrance.
            </p>

            <p>
              The design was developed through <span className={styles.highlight}>multiple stages of refinement</span>, with geometry, colour and material working together to define a youthful and interconnected workplace.
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
                    alt="NOCC Office"
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
                      alt="NOCC Office"
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
                          alt="NOCC Office"
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
                      alt="NOCC Office"
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

        <MoreProjects currentId="nocc-office" />
      </main>

      <Footer />
    </>
  );
}