import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from STUDIO-ELEMENT/cover
const heroImage = assetImage("projects/STUDIO-ELEMENT/cover/Cover Image.webp");
const coverHero = assetImage("projects/STUDIO-ELEMENT/cover/Hero Image.webp");
// Project photographs from STUDIO-ELEMENT/3_4
const img1 = assetImage("projects/STUDIO-ELEMENT/3_4/1.webp");
const img2 = assetImage("projects/STUDIO-ELEMENT/3_4/2.webp");
const img3 = assetImage("projects/STUDIO-ELEMENT/3_4/3.webp");
const img4 = assetImage("projects/STUDIO-ELEMENT/3_4/4.webp");
const img5 = assetImage("projects/STUDIO-ELEMENT/3_4/5.webp");
const img6 = assetImage("projects/STUDIO-ELEMENT/3_4/6.webp");
const img7 = assetImage("projects/STUDIO-ELEMENT/3_4/7.webp");
const img8 = assetImage("projects/STUDIO-ELEMENT/3_4/8.webp");
export const metadata = {
  title: "Studio Element — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Studio Element",
  Location: "New Delhi",
  Client: "Pramod Builders",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img2, img3] },
  { type: "pair", images: [img4, img6] },
  { type: "split-reverse", large: img8, stack: [img5, img7] },
  { type: "full", image: coverHero },
];

const moreProjects = assets.projects.filter((project) => project.id !== "studio-element").slice(0, 3);

export default function StudioElementPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Studio Element"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Studio Element</h1>
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
              The office interior was conceived as a{" "}
              <span className={styles.highlight}>
                lively and interactive workplace
              </span>
              , with collaborative spaces distributed throughout to encourage
              engagement and interaction. Its language is defined by exposed raw
              materials—
              <span className={styles.highlight}>
                AAC blocks, birch ply and steel bars
              </span>
              —reflecting the company’s emphasis on{" "}
              <span className={styles.highlight}>
                clean and safe construction
              </span>
              .
            </p>

            <p>
              An overall sense of{" "}
              <span className={styles.highlight}>
                openness and transparency
              </span>{" "}
              creates a welcoming and energising environment for both employees
              and visitors. Despite its conventional office typology, the
              combination of raw materials and interactive spaces gives the
              workplace a distinctive and dynamic character.
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
                    alt="Studio Element"
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
                      alt="Studio Element"
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
                          alt="Studio Element"
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
                      alt="Studio Element"
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
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <section className={`site-container ${styles.moreSection}`}>
          <p className={styles.moreHeading}>More</p>
          <div className={styles.moreGrid}>
            {moreProjects.map((project) => (
              <Link key={project.id} href="/projects" className={styles.moreCard} aria-label={project.name}>
                <Image src={project.image} alt={project.name} fill sizes="(min-width: 768px) 29vw, 90vw" className={styles.moreImage} />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
