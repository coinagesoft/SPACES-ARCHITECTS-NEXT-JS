import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from JAIPUR-RESIDENCE/cover
const heroImage = assetImage("projects/JAIPUR-RESIDENCE/cover/COVER.webp");
// Project photographs from JAIPUR-RESIDENCE/photographs
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

const gallery = [
  { type: "pair", images: [img1, img2] },
  { type: "full", image: img5 },
  { type: "triple", images: [img3, img4, img7] },
  { type: "pair", images: [img6, img9] },
  { type: "triple", images: [img8, img10, img12] },
  { type: "full", image: img11 },
  { type: "pair", images: [img14, img15] },
  { type: "triple", images: [img13, img16, img17] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "jaipur-residence").slice(0, 3);

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

            if (block.type === "triple") {
              return (
                <div key={i} className={styles.galleryTriple}>
                  {block.images.map((src, j) => (
                    <div key={j} className={styles.galleryTripleItem}>
                      <Image
                        src={src}
                        alt="Jaipur Residence"
                        fill
                        sizes="(min-width: 768px) 32vw, 100vw"
                        className={styles.galleryImgFit}
                      />
                    </div>
                  ))}
                </div>
              );
            }

            return (
              <div key={i} className={styles.galleryPair}>
                {block.images.map((src, j) => (
                  <div key={j} className={styles.galleryPairItem}>
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
