import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";

export const metadata = {
  title: "The Step Maze House — Spaces Architects@ka",
};

const details = {
  Project: "The Step Maze House",
  Location: "Model Town, New Delhi",
  Client: "Mr. Malhotra",
  Status: "Completed",
};

const photos = assets.stepMazeHouse.gallery;

// 18 photos. The "full" slot stretches to 100% page width, so it's reserved
// for the shots that are reliably landscape by nature of what they are —
// elevations and the facade view (photos[0], photos[3], photos[14],
// photos[16], photos[17]). Everything else (staircase shots, diagrams,
// interiors) goes into pair/split blocks, where each image is bounded to
// its own column and keeps its natural aspect ratio instead of being
// stretched full-width. Types alternate throughout so no two blocks of the
// same kind sit next to each other.
const gallery = [
  { type: "full", image: photos[0] },
  { type: "pair", images: [photos[1], photos[2]] },
  { type: "full", image: photos[3] },
  { type: "pair", images: [photos[4], photos[12]] },
  { type: "split", large: photos[7], stack: [photos[5], photos[6]] },
  { type: "pair", images: [photos[8], photos[9]] },
  { type: "full", image: photos[14] },
  { type: "pair", images: [photos[10], photos[11]] },
  { type: "full", image: photos[16] },
  { type: "pair", images: [photos[13], photos[15]] },
  { type: "full", image: photos[17] },
];

const moreProjects = assets.projects
  .filter((project) => project.id !== "step-maze")
  .slice(0, 3);

const ratio = (image) => image.width / image.height;

export default function StepMazeHousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <section className={styles.hero}>
          <Image
            src={assets.stepMazeHouse.hero}
            alt="The Step Maze House"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>The Step Maze House</h1>
              <p>Model Town, New Delhi</p>
            </div>
          </div>
        </section>

        <section className={`site-container ${styles.infoSection}`}>
          <aside className={styles.infoSidebar}>
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
          </aside>

          <div className={styles.infoBody}>
            <p>
              Set on a{" "}
              <span className={styles.highlight}>
                trapezium-shaped corner plot in Delhi
              </span>
              , Step Maze is a residence for a family of five and their dog,
              shaped by its dual street frontage. The planning uses the two
              open sides to draw in natural light, breeze and views, while
              louvers and brick jaalis provide privacy and shade without
              closing the house off from its surroundings.
            </p>

            <p>
              The home&rsquo;s defining feature is its{" "}
              <span className={styles.highlight}>
                staggered vertical staircase core
              </span>
              , where circulation becomes an architectural experience. From
              the <span className={styles.highlight}>skylit central stair</span>{" "}
              and informal stair-sitting to the garden transition and hidden
              staircase behind the glass pergola, the journey through the
              house continuously changes in scale, direction and
              perspective.
            </p>

            <p>
              Across its levels, formal and informal living spaces,
              bedrooms, prayer areas and gardens are arranged around this{" "}
              <span className={styles.highlight}>dynamic vertical journey.</span>{" "}
              Open terraces, balconies and planted spaces extend the
              interiors outdoors, while varied volumes allow hot air to
              escape and improve natural ventilation.
            </p>

            <p>
              The result is a{" "}
              <span className={styles.highlight}>
                home that balances privacy with openness and functionality
                with playfulness
              </span>
              —where movement, light, landscape and changing perspectives
              give everyday living a sense of discovery.
            </p>
          </div>
        </section>

        <section
          className={`site-container ${styles.gallery}`}
          aria-label="The Step Maze House gallery"
        >
          {gallery.map((block, index) => {
            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="The Step Maze House"
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
                1 /
                stackRatios.reduce(
                  (sum, currentRatio) => sum + 1 / currentRatio,
                  0
                );

              return (
                <div key={index} className={styles.gallerySplit}>
                  <div
                    className={styles.gallerySplitLarge}
                    style={{ "--ratio": largeRatio }}
                  >
                    <Image
                      src={block.large}
                      alt="The Step Maze House"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>

                  <div
                    className={styles.gallerySplitStack}
                    style={{ "--ratio": stackCombinedRatio }}
                  >
                    {block.stack.map((image, stackIndex) => (
                      <div
                        key={image.src}
                        className={styles.gallerySplitStackItem}
                        style={{
                          "--ratio": stackRatios[stackIndex],
                          "--height-weight":
                            1 / stackRatios[stackIndex],
                        }}
                      >
                        <Image
                          src={image}
                          alt="The Step Maze House"
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

            return (
              <div key={index} className={styles.galleryPair}>
                {block.images.map((image) => (
                  <div
                    key={image.src}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(image) }}
                  >
                    <Image
                      src={image}
                      alt="The Step Maze House"
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
                  sizes="(min-width: 768px) 29vw, 90vw"
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