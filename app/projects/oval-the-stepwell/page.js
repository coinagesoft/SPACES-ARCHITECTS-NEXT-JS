import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from projects/THE-STEPWELL/cover
const heroImage = assetImage("projects/THE-STEPWELL/cover/COVER.webp");
// Project photographs from projects/THE-STEPWELL/3_4
const img1 = assetImage("projects/THE-STEPWELL/3_4/1.webp");
const img2 = assetImage("projects/THE-STEPWELL/3_4/2.webp");
const img3 = assetImage("projects/THE-STEPWELL/3_4/3.webp");
const img4 = assetImage("projects/THE-STEPWELL/3_4/4.webp");
const img5 = assetImage("projects/THE-STEPWELL/3_4/5.webp");
const img6 = assetImage("projects/THE-STEPWELL/3_4/6.webp");
const img7 = assetImage("projects/THE-STEPWELL/3_4/7.webp");
const img8 = assetImage("projects/THE-STEPWELL/3_4/8.webp");
const img9 = assetImage("projects/THE-STEPWELL/3_4/9.webp");
const img10 = assetImage("projects/THE-STEPWELL/3_4/10.webp");
const img11 = assetImage("projects/THE-STEPWELL/3_4/11.webp");
const img12 = assetImage("projects/THE-STEPWELL/3_4/12.webp");
const img13 = assetImage("projects/THE-STEPWELL/3_4/13.webp");
const img14 = assetImage("projects/THE-STEPWELL/3_4/14.webp");
const img15 = assetImage("projects/THE-STEPWELL/3_4/15.webp");
const img16 = assetImage("projects/THE-STEPWELL/3_4/16.webp");

export const metadata = {
  title: "The Stepwell — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Oval – The Stepwell",
  Location: "Rajasthan",
  Client: "Ministry of Culture",
  Status: "Conceptual",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "full", image: img1 },
  { type: "pair", images: [img2, img3] },
  { type: "full", image: img4 },
  { type: "pair", images: [img5, img6] },
  { type: "split", large: img16, stack: [img7, img8] },
  { type: "full", image: img9 },
  { type: "pair", images: [img10, img11] },
  { type: "pair", images: [img12, img13] },
  { type: "pair", images: [img14, img15] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "the-stepwell").slice(0, 3);

export default function TheStepwellPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="The Stepwell"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>The Stepwell</h1>
              <p>Rajasthan</p>
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
              India’s architectural identity is deeply rooted in its heritage, yet the deterioration and inaccessibility of historic structures threaten this cultural continuity. The Oval draws inspiration from <span className={styles.highlight}>Rajasthan and Gujarat’s stepwells</span>, recognising their historic role in community building, cultural exchange, and supporting flora and fauna, while reinterpreting their essence through a contemporary, sustainable lens.
            </p>

            <p>
              Inspired by the stepped geometry of traditional stepwells, the design creates a <span className={styles.highlight}>fluid play of levels</span> that naturally divides the expansive space into multiple functions without creating a sense of enclosure. The resulting sequence of levels and spaces offers varied public experiences while creating opportunities for <span className={styles.highlight}>tourism, cultural engagement and economic growth</span> through museums, galleries and public functions.
            </p>

            <p>
              The form generates distinctive <span className={styles.highlight}>frustum-like curves</span>, conceived as a canvas for light and sound shows. Designed as a public destination, the Oval incorporates an open-air theatre, courtyard, museums, galleries, sky-viewing deck, inner stepwell seating and cafeteria. A <span className={styles.highlight}>central glass lift</span> becomes a viewing element, offering a <span className={styles.highlight}>360-degree dynamic view</span> of the vertical vista.
            </p>

            <p>
              A restrained material palette combines the traditional character of <span className={styles.highlight}>sandstone and water</span> with the contemporary language of concrete and green architecture. Water and vegetation further enhance the atmosphere and experience.
            </p>

            <p>
              The Oval is envisioned as a <span className={styles.highlight}>contemporary revival of the stepwell</span>, transforming its architectural and cultural legacy into an accessible public destination while widening the horizons for tourism and reconnecting contemporary India with its heritage.
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
                    alt="The Stepwell"
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
                      alt="The Stepwell"
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
                          alt="The Stepwell"
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
                      alt="The Stepwell"
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
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.moreCard}
                aria-label={project.name}
              >
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
