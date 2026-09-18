import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from COLOR-BOX-OFFICE/
const heroImage = assetImage("projects/COLOR-BOX-OFFICE/cover/COVER.webp");
// Project photographs from COLOR-BOX-OFFICE/3_4
const img1 = assetImage("projects/COLOR-BOX-OFFICE/3_4/1.webp");
const img2 = assetImage("projects/COLOR-BOX-OFFICE/3_4/2.webp");
const img3 = assetImage("projects/COLOR-BOX-OFFICE/3_4/3.webp");
const img4 = assetImage("projects/COLOR-BOX-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/COLOR-BOX-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/COLOR-BOX-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/COLOR-BOX-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/COLOR-BOX-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/COLOR-BOX-OFFICE/3_4/9.webp");
export const metadata = {
  title: "The Colour Box Office — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "The Colour Box Office",
  Location: "Gurgaon",
  Client: "Mr. Vishal",
  Status: "Completed (2020)",
  Area: "2000 Sq.ft",
};

const gallery = [
  { type: "pair", images: [img1, img2] },
  { type: "full", image: img3 },
  { type: "pair", images: [img4, img5] },
  { type: "full", image: img6 },
  { type: "pair", images: [img7, img8] },
  { type: "full", image: img9 },
];

const moreProjects = assets.projects.filter((project) => project.id !== "the-color-box-office").slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function TheColorBoxOfficePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="The Colour Box Office"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>The Colour Box Office</h1>
              <p>Gurgaon</p>
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
              Conceived as a contemporary workplace that balances productivity,
              creativity and informality, this office transforms a compact
              commercial interior into a bright, collaborative environment. The
              design uses colour and material as spatial tools, creating a
              workplace that feels energetic without becoming visually
              overwhelming.
            </p>

            <p>
              A restrained base of{" "}
              <span className={styles.highlight}>
                white surfaces, exposed textures and neutral flooring
              </span>{" "}
              is layered with{" "}
              <span className={styles.highlight}>
                warm OSB panels, teal-green frames, and carefully placed accents
                of mustard yellow, coral, red and green.
              </span>{" "}
              The raw, tactile quality of the OSB forms a recurring material
              language across walls, workstations and partitions, bringing
              warmth and a sense of craft to an otherwise functional office
              setting.
            </p>

            <p>
              The planning revolves around open workstations, transparent
              meeting rooms and flexible collaborative zones, allowing{" "}
              <span className={styles.highlight}>visual continuity</span> and
              natural light to move through the space. Glass partitions framed
              in teal provide separation while maintaining openness, while
              integrated planters introduce greenery and soften the workspace.
            </p>

            <p>
              The ceiling becomes an expressive fifth elevation, combining{" "}
              <span className={styles.highlight}>
                exposed services with suspended geometric acoustic elements in
                layered colours.
              </span>{" "}
              This creates a playful visual identity while addressing the
              practical requirements of acoustics, lighting and services.
            </p>

            <p>
              Overall, the interior adopts a{" "}
              <span className={styles.highlight}>
                young, graphic and experimental character,
              </span>{" "}
              where industrial elements are softened by greenery, natural
              textures and a vibrant colour palette. The result is a workplace
              designed not simply as an office, but as an environment that
              encourages{" "}
              <span className={styles.highlight}>
                interaction, movement and creative exchange.
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
                    alt="The Colour Box Office"
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
                    alt="The Colour Box Office"
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
                      alt="The Colour Box Office"
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
                          alt="The Colour Box Office"
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
                      alt="The Colour Box Office"
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
