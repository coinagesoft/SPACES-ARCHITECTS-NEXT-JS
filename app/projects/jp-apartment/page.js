import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from JP-APARTMENT/cover
const heroImage = assetImage("projects/JP-APARTMENT/cover/COVER.webp");
// Project photographs from JP-APARTMENT/3_4
const img1 = assetImage("projects/JP-APARTMENT/3_4/1.webp");
const img2 = assetImage("projects/JP-APARTMENT/3_4/2.webp");
const img3 = assetImage("projects/JP-APARTMENT/3_4/3.webp");
const img4 = assetImage("projects/JP-APARTMENT/3_4/4.webp");
const img5 = assetImage("projects/JP-APARTMENT/3_4/5.webp");
const img6 = assetImage("projects/JP-APARTMENT/3_4/6.webp");
const img7 = assetImage("projects/JP-APARTMENT/3_4/7.webp");
const img8 = assetImage("projects/JP-APARTMENT/3_4/8.webp");
const img9 = assetImage("projects/JP-APARTMENT/3_4/9.webp");
const img10 = assetImage("projects/JP-APARTMENT/3_4/10.webp");
const img11 = assetImage("projects/JP-APARTMENT/3_4/11.webp");
const img12 = assetImage("projects/JP-APARTMENT/3_4/12.webp");
export const metadata = {
  title: "JP Apartment — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "JP Apartment",
  Location: "Noida, Uttar Pradesh",
  Client: "Pawar Residence",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img2, stack: [img1, img3] },
  { type: "pair", images: [img5, img9] },
  { type: "full", image: img4 },
  { type: "pair", images: [img6, img7] },
  { type: "pair", images: [img10, img11] },
  { type: "pair", images: [img8, img12] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "jp-apartment").slice(0, 3);

export default function JpApartmentPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="JP Apartment"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>JP Apartment</h1>
              <p>Noida, Uttar Pradesh</p>
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
              This modern apartment interprets{" "}
              <span className={styles.highlight}>minimalism as warmth</span>{" "}
              rather than restraint. Each space is composed through a{" "}
              <span className={styles.highlight}>carefully balanced palette of materials, colours and textures</span>
              , allowing simplicity to bring focus to the essential elements of the interior.
            </p>

            <p>
              A restrained base is punctuated with{" "}
              <span className={styles.highlight}>playful accents</span>
              , introduced through artworks, tiles, fabrics and carefully selected details. Timber elements bring warmth and tactility, while natural light and integrated greenery add brightness and life to the spaces.
            </p>

            <p>
              Designed around the client&rsquo;s minimalist vision, the home brings together{" "}
              <span className={styles.highlight}>simplicity, warmth and moments of playfulness</span>
              , creating an environment that feels calm, personal and effortlessly harmonious.
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
                    alt="JP Apartment"
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
                      alt="JP Apartment"
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
                          alt="JP Apartment"
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
                      alt="JP Apartment"
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