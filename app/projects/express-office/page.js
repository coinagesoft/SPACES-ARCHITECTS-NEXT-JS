import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

const heroImage = assetImage("projects/EXPRESS-OFFICE/cover/Cover Image.webp");
const photo1 = assetImage("projects/EXPRESS-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/EXPRESS-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/EXPRESS-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/EXPRESS-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/EXPRESS-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/EXPRESS-OFFICE/3_4/6.webp");
const photo7 = assetImage("projects/EXPRESS-OFFICE/3_4/7.webp");
const photo8 = assetImage("projects/EXPRESS-OFFICE/3_4/8.webp");
const photo9 = assetImage("projects/EXPRESS-OFFICE/3_4/9.webp");
const photo10 = assetImage("projects/EXPRESS-OFFICE/3_4/10.webp");
const photo11 = assetImage("projects/EXPRESS-OFFICE/3_4/11.webp");
const photo12 = assetImage("projects/EXPRESS-OFFICE/3_4/12.webp");
const photo13 = assetImage("projects/EXPRESS-OFFICE/3_4/13.webp");
export const metadata = {
  title: "Express Office — Spaces Architects@ka",
};

const details = {
  Project: "Express Office",
  Location: "Noida, Uttar Pradesh",
  Client: "Express Builders",
  Status: "Completed",
};

const gallery = [
 
  { type: "full", image: photo3 },
{ type: "pair", images: [photo2, photo9] },
  { type: "pair", images: [photo5, photo4] },

  { type: "pair", images: [photo10, photo11] },
  { type: "split", large: photo6, stack: [photo7, photo8] },

  { type: "full", image: photo1 },
 

  { type: "pair", images: [photo12, photo13] },
];

const moreProjects = assets.projects
  .filter((project) => project.id !== "express-office")
  .slice(0, 3);

const ratio = (img) => img.width / img.height;

export default function ExpressOfficePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <section className={styles.hero}>
          <Image
            src={heroImage}
            alt="Express Office"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Express Office</h1>
              <p>Noida, Uttar Pradesh</p>
            </div>
          </div>
        </section>

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
              The office is conceived as a{" "}
              <span className={styles.highlight}>
                quiet expression of bespoke luxury
              </span>
              , where richness comes not from excess but from precision of
              form, material and detailing.
            </p>

            <p>
              A restrained architectural envelope establishes a composed
              backdrop of warm timber, stone and textured wall surfaces,
              while layered ceilings and finely proportioned built-ins
              introduce depth without visual clutter.
            </p>

            <p>
              The material palette moves deliberately between
              <span className={styles.highlight}>
                {" "}tactile warmth and mineral calm
              </span>.
              Veined stone, walnut-toned timber, fluted woodwork and brushed
              brass accents create a dialogue of grain, reflection and
              texture, giving each surface a sense of crafted individuality.
            </p>

            <p>
              Form is largely geometric and architectural, softened by
              rounded furniture, sculptural lighting and organic detailing.
              Bespoke joinery becomes a recurring design language, framing
              artwork, concealing storage and shaping workspaces.
            </p>

            <p>
              The result is an office that feels less like a conventional
              workplace and more like a private contemporary interior:
              <span className={styles.highlight}>
                {" "}cultivated, tactile and quietly luxurious
              </span>.
            </p>
          </div>
        </section>

        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) => {
            if (block.type === "full") {
              return (
                <div key={i} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Express Office"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);

              const stackCombinedRatio =
                1 / stackRatios.reduce((sum, r) => sum + 1 / r, 0);

              return (
                <div key={i} className={styles.gallerySplit}>
                  <div
                    className={styles.gallerySplitLarge}
                    style={{ "--ratio": largeRatio }}
                  >
                    <Image
                      src={block.large}
                      alt="Express Office"
                      fill
                      sizes="(min-width:768px) 48vw, 92vw"
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
                          alt="Express Office"
                          fill
                          sizes="(min-width:768px) 48vw, 92vw"
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
                      alt="Express Office"
                      fill
                      sizes="(min-width:768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </section>

        <section className={styles.share}>
          <p>Share</p>

          <div className={styles.shareIcons}>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a
              href="mailto:admin@spacesarchitects-ka.com"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </section>

        <section className={`site-container ${styles.moreSection}`}>
          <p className={styles.moreHeading}>More</p>

          <div className={styles.moreGrid}>
            {moreProjects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className={styles.moreCard}
                aria-label={project.name}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width:768px) 29vw, 90vw"
                  className={styles.moreImage}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}