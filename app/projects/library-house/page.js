import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from LIBRARY-HOUSE/cover
const heroImage = assetImage("projects/LIBRARY-HOUSE/cover/COVER.webp");
// Project photographs from LIBRARY-HOUSE/photographs
const photo1 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2853.webp");
const photo2 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2862.webp");
const photo3 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2907.webp");
const photo4 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2918.webp");
const photo5 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2936.webp");
const photo6 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2943.webp");
const photo7 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2960.webp");
const photo8 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2966.webp");
const photo9 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2988.webp");
const photo10 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3021.webp");
const photo11 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3042.webp");
const photo12 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3059.webp");
const photo13 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3087.webp");
const photo14 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3096.webp");
const photo15 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3138.webp");
const photo16 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3179.webp");
const photo17 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3260.webp");
export const metadata = {
    title: "Library House — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
    Project: "Library House",
    Location: "New Delhi",
    Client: "Mrs. Rashmi",
    Status: "Completed",
};

// Same alternating rhythm as the other project galleries: full-bleed
// shots, side-by-side pairs, and a large-image-beside-a-stack split
// worked in twice to break up the run of pairs.
const gallery = [
    { type: "pair", images: [photo2, photo1] },
    { type: "full", image: photo3 },

    { type: "split", large: photo6, stack: [photo7, photo8] },
    { type: "full", image: photo9 },
    { type: "pair", images: [photo5, photo4] },

    { type: "pair", images: [photo10, photo11] },
    { type: "pair", images: [photo12, photo14] },
    { type: "split", large: photo17, stack: [photo15, photo16] },
    { type: "full", image: photo13 },
];

const moreProjects = assets.projects
    .filter((project) => project.id !== "library-house")
    .slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function LibraryHousePage() {
    return (
        <>
            <main>
                <SiteChrome dark />

                {/* Hero */}
                <section className={styles.hero}>
                    <Image
                        src={heroImage}
                        alt="Library House"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={`site-container ${styles.heroTextWrap}`}>
                        <div className={styles.heroText}>
                            <h1>Library House</h1>
                            <p>New Delhi</p>
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
                            Set within a dense residential neighbourhood of Gurugram, The
                            Library House is a{" "}
                            <span className={styles.highlight}>
                                home for three generations
                            </span>
                            , conceived around light, greenery and quiet moments of
                            togetherness. The south-facing residence draws in daylight,
                            while a grove of six mature trees along the western edge
                            shades balconies and terraces and keeps the home closely
                            connected to nature.
                        </p>

                        <p>
                            At its heart, a{" "}
                            <span className={styles.highlight}>
                                triple-height courtyard
                            </span>{" "}
                            forms the luminous core of the house, visually connecting the
                            family across all three levels. Overlooking it is the
                            defining{" "}
                            <span className={styles.highlight}>cantilevered library</span>
                            —a sculptural volume conceived as a symbol of knowledge,
                            contemplation and connection.
                        </p>

                        <p>
                            The ground floor brings together communal living and dining
                            spaces, an open prayer hall and the grandmother&apos;s room.
                            The upper levels accommodate the family&apos;s private spaces,
                            with balconies extending towards the shaded green edge. A{" "}
                            <span className={styles.highlight}>
                                restrained palette of stone, wood and white plaster,
                                complemented by skylights, large openings and planted
                                terraces
                            </span>
                            , reinforces the home&apos;s quiet character.
                        </p>

                        <p>
                            The Library House becomes a serene framework for family,
                            knowledge and nature, where light and landscape weave through
                            everyday life.
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
                                        alt="Library House"
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
                                        alt="Library House"
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
                                            alt="Library House"
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
                                                    alt="Library House"
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
                                            alt="Library House"
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