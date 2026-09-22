import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from HOUSE-OF-DANCING-SCREENS/cover
const heroImage = assetImage("projects/HOUSE-OF-DANCING-SCREENS/cover/COVER.webp");
// Project photographs from HOUSE-OF-DANCING-SCREENS/photographs
const photo1 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1643.webp");
const photo2 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1648.webp");
const photo3 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1659 .webp");
const photo4 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1668.webp");
const photo5 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1692.webp");
const photo6 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1707.webp");
const photo7 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1734.webp");
const photo8 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1738.webp");
const photo9 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1741.webp");
const photo10 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1748.webp");
const photo11 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1771.webp");
const photo12 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1782.webp");
const photo13 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1798.webp");
const photo14 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1807.webp");
const photo15 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1824.webp");
const photo16 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1829.webp");
const photo17 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1831.webp");
const photo18 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1840.webp");
const photo19 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1843.webp");
export const metadata = {
    title: "House of Dancing Screens — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
    Project: "House of Dancing Screens",
    Location: "Ambala, Haryana",
    "Gross Built Area (m2/ft2)": "11,500 Sq. Ft",
    "Completion Year": "2024",
    Status: "Completed",
};

// Same alternating rhythm as the other project galleries: full-bleed
// shots, side-by-side pairs, and a large-image-beside-a-stack split
// worked in twice to break up the run of pairs.
const gallery = [
    { type: "pair", images: [photo2, photo3] },

    { type: "full", image: photo1 },
    { type: "pair", images: [photo5, photo4] },

    { type: "pair", images: [photo13, photo12] },
    { type: "pair", images: [photo19, photo18] },
    { type: "full", image: photo7 },

    { type: "split", large: photo6, stack: [photo9, photo8] },
    { type: "split", large: photo17, stack: [photo15, photo16] },

    { type: "full", image: photo14 },
    { type: "pair", images: [photo10, photo11] },


];

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function HouseOfDancingScreensPage() {
    return (
        <>
            <main>
                <SiteChrome dark />

                {/* Hero */}
                <section className={styles.hero}>
                    <Image
                        src={heroImage}
                        alt="House of Dancing Screens"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={`site-container ${styles.heroTextWrap}`}>
                        <div className={styles.heroText}>
                            <h1>House of Dancing Screens</h1>
                            <p>Ambala</p>
                        </div>
                    </div>
                </section>

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
                            True to its name, the House of Dancing Screens is defined by
                            pivoting screens that transform with movement, privacy and
                            light. More than partitions, these fluid elements choreograph
                            the house—rotating effortlessly with the wind to create an
                            ever-changing interplay of{" "}
                            <span className={styles.highlight}>
                                function, form and movement
                            </span>
                            .
                        </p>

                        <p>
                            Conceived as an{" "}
                            <span className={styles.highlight}>open-plan home</span>, each
                            level responds to the lifestyles of its occupants, with a
                            family lounge acting as its social heart and private bedrooms
                            extending towards individual balconies. On the ground floor,
                            the formal lounge, drawing and dining spaces converge around a{" "}
                            <span className={styles.highlight}>triple-height cut-out</span>
                            , illuminated throughout the day. A gracefully curved
                            staircase rises through this void, becoming the{" "}
                            <span className={styles.highlight}>
                                architectural thread connecting all three levels
                            </span>{" "}
                            and their lounges. The master and parents&apos; bedrooms open
                            towards private landscaped areas, while the kitchen connects
                            to a sunlit front lawn.
                        </p>

                        <p>
                            The first floor belongs to the younger generation, with a
                            shared lounge, bedrooms and guest room. Their interiors
                            reflect contrasting personalities—a{" "}
                            <span className={styles.highlight}>
                                pink-and-white palette for the daughter and earthy tones for
                                the son
                            </span>
                            —while vibrant colours continue to define the home&apos;s
                            individual spaces.
                        </p>

                        <p>
                            The upper level brings the family together through a gym,
                            terrace gardens, rooftop pool and entertainment lounge, with
                            dancing screens extending into the terrace landscape. Here,{" "}
                            <span className={styles.highlight}>
                                architecture becomes dynamic—constantly shifting with light,
                                breeze and the rhythms of family life.
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
                                        alt="House of Dancing Screens"
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
                                        alt="House of Dancing Screens"
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
                                            alt="House of Dancing Screens"
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
                                                    alt="House of Dancing Screens"
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
                                {block.images.map((src, j) => (
                                    <div
                                        key={j}
                                        className={styles.galleryPairItem}
                                        style={{ "--ratio": ratio(src) }}
                                    >
                                        <Image
                                            src={src}
                                            alt="House of Dancing Screens"
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
                        <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
                        <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
                        <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                        <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
                    </div>
                </section>

                <MoreProjects currentId="house-of-dancing-screens" />
            </main>

            <Footer />
        </>
    );
}