import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from ART_HOUSE/cover
const heroImage = assetImage("projects/ART_HOUSE/cover/HERO.webp");
// Project photographs from ART_HOUSE/3_4
const img1 = assetImage("projects/ART_HOUSE/3_4/1.webp");
const img2 = assetImage("projects/ART_HOUSE/3_4/2.webp");
const img3 = assetImage("projects/ART_HOUSE/3_4/3.webp");
const img4 = assetImage("projects/ART_HOUSE/3_4/4.webp");
const img5 = assetImage("projects/ART_HOUSE/3_4/5.webp");
const img6 = assetImage("projects/ART_HOUSE/3_4/6.webp");
const img7 = assetImage("projects/ART_HOUSE/3_4/7.webp");
const img8 = assetImage("projects/ART_HOUSE/3_4/8.webp");
const img9 = assetImage("projects/ART_HOUSE/3_4/9.webp");
const img10 = assetImage("projects/ART_HOUSE/3_4/10.webp");
const img11 = assetImage("projects/ART_HOUSE/3_4/11.webp");
const img12 = assetImage("projects/ART_HOUSE/3_4/12.webp");
const img13 = assetImage("projects/ART_HOUSE/3_4/13.webp");
const img14 = assetImage("projects/ART_HOUSE/3_4/14.webp");
const img15 = assetImage("projects/ART_HOUSE/3_4/15.webp");
const img16 = assetImage("projects/ART_HOUSE/3_4/16.webp");
const img17 = assetImage("projects/ART_HOUSE/3_4/17.webp");
const img18 = assetImage("projects/ART_HOUSE/3_4/18.webp");
const img19 = assetImage("projects/ART_HOUSE/3_4/19.webp");
const img20 = assetImage("projects/ART_HOUSE/3_4/20.webp");
const img21 = assetImage("projects/ART_HOUSE/3_4/21.webp");
const img22 = assetImage("projects/ART_HOUSE/3_4/22.webp");
const img23 = assetImage("projects/ART_HOUSE/3_4/23.webp");
const img24 = assetImage("projects/ART_HOUSE/3_4/24.webp");
const img25 = assetImage("projects/ART_HOUSE/3_4/25.webp");
const img26 = assetImage("projects/ART_HOUSE/3_4/26.webp");
const img27 = assetImage("projects/ART_HOUSE/3_4/27.webp");
const img28 = assetImage("projects/ART_HOUSE/3_4/28.webp");
const img29 = assetImage("projects/ART_HOUSE/3_4/29.webp");
const img30 = assetImage("projects/ART_HOUSE/3_4/30.webp");
const img31 = assetImage("projects/ART_HOUSE/3_4/31.webp");
const img32 = assetImage("projects/ART_HOUSE/3_4/32.webp");
export const metadata = {
  title: "Art House — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Art House",
  Location: "Old Delhi",
  Client: "Mr. Dinesh Ahuja",
  Status: "Completed",
  Team: "Ar. Kapil Aggarwal, Pawan Sharma",
};

const gallery = [
  { type: "pair", images: [img16, img18] },
  { type: "pair", images: [img19, img20] },
   { type: "full", image: img8 },
    { type: "pair", images: [img21, img23] },
    { type: "full", image: img28 },
     { type: "pair", images: [img9, img10] },
     { type: "full", image: img22 },
     { type: "pair", images: [img26, img27] },
 { type: "full", image: img15 },
 { type: "pair", images: [img29, img30] },
{ type: "full", image: img32 },
 { type: "pair", images: [img1, img17] },
  { type: "pair", images: [img14, img2] },
   { type: "full", image: img13 },
  { type: "pair", images: [img11, img12] },
  { type: "pair", images: [img7, img6] },
  { type: "full", image: img31 },
    { type: "pair", images: [img25 ,img24] },
  { type: "full", image: img4 },
  

  { type: "pair", images: [img5 ,img3] },
  
];

const moreProjects = assets.projects.filter((project) => project.id !== "art-house").slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function ArtHousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Art House"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Art House</h1>
              <p>Delhi</p>
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
              SET IN THE URBAN CONTEXT OF DELHI, THE FACADE DESIGN REFLECTS A MODERN
              AND CLIMATE-RESPONSIVE APPROACH TAILORED TO THE CITY&apos;S INTENSE
              SEASONAL VARIATIONS. IT FEATURES A THOUGHTFUL INTERPLAY OF{" "}
              <span className={styles.highlight}>
                VERTICAL FINS, DEEP OVERHANGS &amp; PERFORATED METAL SCREENS
              </span>{" "}
              THAT NOT ONLY ENHANCE THE VISUAL LANGUAGE BUT ALSO MITIGATE HEAT
              GAIN—CRITICAL IN DELHI&apos;S HOT CLIMATE. MATERIALS SUCH AS EXPOSED
              CONCRETE, WEATHER-RESISTANT METAL CLADDING &amp; HIGH-PERFORMANCE
              GLAZING ARE USED STRATEGICALLY TO BALANCE DURABILITY WITH AESTHETICS.
            </p>

            <p>
              THE FACADE&apos;S LARGE RECESSED OPENINGS MAXIMIZE NATURAL LIGHT WHILE
              MINIMIZING GLARE AND THERMAL LOAD, CREATING A COMFORTABLE INDOOR
              ENVIRONMENT. VERTICAL ELEMENTS ADD RHYTHM AND ARTICULATION, BREAKING
              DOWN THE SCALE OF THE STRUCTURE AND LENDING IT A REFINED, CONTEMPORARY
              IDENTITY.{" "}
              <span className={styles.highlight}>
                AT NIGHT, INTEGRATED LIGHTING SOFTLY OUTLINES THE ARCHITECTURAL
                FEATURES, MAKING THE BUILDING STAND OUT IN THE DENSE URBAN FABRIC.
              </span>{" "}
              THIS FAÇADE EXEMPLIFIES A BLEND OF MODERN DESIGN SENSIBILITIES AND
              ENVIRONMENTAL RESPONSIVENESS, WELL-SUITED FOR DELHI&apos;S EVOLVING
              ARCHITECTURAL LANDSCAPE.
            </p>

            <p>
              THE INTERIOR DESIGN SHOWCASES A REFINED BLEND OF{" "}
              <span className={styles.highlight}>
                CONTEMPORARY ELEGANCE &amp; FUNCTIONAL MINIMALISM
              </span>
              , CHARACTERIZED BY CLEAN LINES, LAYERED LIGHTING AND A HARMONIOUS
              MATERIAL PALETTE. KEY FEATURES INCLUDE OPEN-PLAN LAYOUTS, MODULAR
              FURNITURE AND INTEGRATED STORAGE THAT ENHANCES SPATIAL FLUIDITY.
              VERTICAL SLATTED PANELS, FLUTED WALL TREATMENTS AND BUILT-IN JOINERY
              INTRODUCE RHYTHM AND TEXTURE, WHILE RECESSED AND COVE LIGHTING DEFINE
              ZONES AND ADD DEPTH. GLASS PARTITIONS MAINTAIN TRANSPARENCY AND
              OPENNESS, OFTEN PAIRED WITH SOFT FURNISHINGS TO BALANCE ACOUSTICS AND
              COMFORT. PREDOMINANT MATERIALS INCLUDE WOOD VENEERS, LAMINATES,
              POLISHED STONE, FROSTED OR CLEAR GLASS AND MATTE FINISHES,
              COMPLEMENTED BY BRASS OR BLACK METAL ACCENTS.{" "}
              <span className={styles.highlight}>
                BIOPHILIC ELEMENTS LIKE INDOOR PLANTS CONTRIBUTE TO A CALMING
                AMBIANCE.
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
                    alt="Art House"
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
                    alt="Art House"
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
                      alt="Art House"
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
                          alt="Art House"
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
                      alt="Art House"
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
