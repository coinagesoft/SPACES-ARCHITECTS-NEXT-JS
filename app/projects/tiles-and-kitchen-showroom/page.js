import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from TILES-AND-KITCHEN-SHOWROOM/cover
const heroImage = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/cover/COVER IMAGE.webp");
const coverHero = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/cover/HERO IMAGE.webp");
// Project photographs from TILES-AND-KITCHEN-SHOWROOM/3_4
const img1 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/1.webp");
const img2 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/2.webp");
const img3 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/3.webp");
const img4 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/4.webp");
const img5 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/5.webp");
const img6 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/6.webp");
const img7 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/7.webp");
const img8 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/8.webp");
const img9 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/9.webp");
const img10 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/10.webp");
const img11 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/11.webp");
const img12 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/12.webp");
const img13 = assetImage("projects/TILES-AND-KITCHEN-SHOWROOM/3_4/13.webp");
export const metadata = {
  title: "Tiles & Kitchen Showroom — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Tiles & Kitchen Showroom",
  Location: "New Delhi",
  Client: "Mr. Ajay Manaktala",
  Status: "Completed",
};

const awards = [
  "IIID MK Awards 2009 - Retail Interior Design (North & East Region)",
  "Archidesign Awards 2010 - National Level - Retail Category",
];

const publications = [
  "Inside Outside - Feb 2010",
  "Insite - Apr 2010",
  "Architecture + Design - Sep 2011",
  "Archi Design - Oct 2011",
];

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img3, img5] },
  { type: "pair", images: [img2, img4] },
  { type: "full", image: img10 },
  { type: "split-reverse", large: img6, stack: [img13, img12] },
  { type: "pair", images: [img7, img8] },
  { type: "pair", images: [img9, img11] },
  // { type: "full", image: coverHero },
];

export default function TilesAndKitchenShowroomPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Tiles & Kitchen Showroom"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Tiles &amp; Kitchen Showroom</h1>
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

            <div>
              <h3>Awards:</h3>
              <ul>
                {awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Publications:</h3>
              <ul>
                {publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoBody}>
            <p>
              The client’s primary brief was to create a showroom with a strong{" "}
              <span className={styles.highlight}>“WOW” factor</span>, an
              experience that would immediately capture attention and leave a
              lasting impression. At the entrance foyer, the ceiling takes
              centre stage, with a series of{" "}
              <span className={styles.highlight}>
                tapered geometric boxes inspired by the Alpine mountain ranges
              </span>
              . Their varying forms create changing angles of light and shadow,
              giving the ceiling a dynamic character while naturally defining
              the transition into the showroom.
            </p>

            <p>
              Lighting was used as an important tool to distinguish the
              different zones within the space. The entrance begins with a
              crisp white light, gradually shifting to a warmer white as one
              move towards the kitchen displays, and finally becoming a richer
              yellow in the tile display area. This{" "}
              <span className={styles.highlight}>
                gradual change in colour temperature creates a subtle sense of
                movement and helps build a different atmosphere within each zone
              </span>
              .
            </p>

            <p>
              A restrained blue accent was introduced to break the warmth and
              monotony of the space. Used selectively, it adds contrast and
              drama, giving the showroom a more{" "}
              <span className={styles.highlight}>
                contemporary and memorable identity
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
                    alt="Tiles & Kitchen Showroom"
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
                      alt="Tiles & Kitchen Showroom"
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
                          alt="Tiles & Kitchen Showroom"
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
                      alt="Tiles & Kitchen Showroom"
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

        <MoreProjects currentId="tiles-and-kitchen-showroom" />
      </main>

      <Footer />
    </>
  );
}