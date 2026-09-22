import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from PATTERN-PLAY/cover
// (the file in the folder is named "COVER (1)" — rename it to COVER.webp
//  and update this path if you'd rather not keep the "(1)")
const heroImage = assetImage("projects/PATTERN-PLAY/cover/COVER (1).webp");
// Project photographs from PATTERN-PLAY/3_4
const img1 = assetImage("projects/PATTERN-PLAY/3_4/1.webp");
const img2 = assetImage("projects/PATTERN-PLAY/3_4/2.webp");
const img3 = assetImage("projects/PATTERN-PLAY/3_4/3.webp");
const img4 = assetImage("projects/PATTERN-PLAY/3_4/4.webp");
const img5 = assetImage("projects/PATTERN-PLAY/3_4/5.webp");
const img6 = assetImage("projects/PATTERN-PLAY/3_4/6.webp");
const img7 = assetImage("projects/PATTERN-PLAY/3_4/7.webp");
const img8 = assetImage("projects/PATTERN-PLAY/3_4/8.webp");
const img9 = assetImage("projects/PATTERN-PLAY/3_4/9.webp");
const img10 = assetImage("projects/PATTERN-PLAY/3_4/10.webp");
const img11 = assetImage("projects/PATTERN-PLAY/3_4/11.webp");

export const metadata = {
  title: "Pattern Play — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
// TODO: fill in the real project details and text.
const details = {
  Project: "Pattern Play",
  Location: "TBC",
  Client: "TBC",
  Status: "TBC",
};

const ratio = (img) => img.width / img.height;

// Sizes (from the asset manifest):
//   portrait  3600x4800: img1, img2, img4, img5, img9, img10
//   landscape 4800x3600: img3, img6, img7, img8, img11
//
// Layout rules (same as the Screen House reference):
// - "pair" only uses images with identical width/height.
// - "split" = one portrait (large) + two landscape images stacked beside it.
// - "full" is landscape only (no full-width portraits).
const gallery = [
  { type: "split", large: img1, stack: [img3, img6] },
  { type: "pair", images: [img2, img4] },
  { type: "full", image: img7 },
  { type: "split-reverse", large: img5, stack: [img8, img11] },
  { type: "pair", images: [img9, img10] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "pattern-play").slice(0, 3);

export default function PatternPlayPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Pattern Play"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Pattern Play</h1>
              <p>{details.Location}</p>
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
              Project description goes here. Wrap the phrases that should be orange like{" "}
              <span className={styles.highlight}>this</span>.
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
                    alt="Pattern Play"
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
                      alt="Pattern Play"
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
                          alt="Pattern Play"
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
                      alt="Pattern Play"
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