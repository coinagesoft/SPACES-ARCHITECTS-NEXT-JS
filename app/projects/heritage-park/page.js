import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from HERITAGE-PARK/cover
const heroImage = assetImage("projects/HERITAGE-PARK/cover/Cover Image.webp");
// Project photographs from HERITAGE-PARK/photographs
const img1 = assetImage("projects/HERITAGE-PARK/photographs/edited 1.webp");
const img2 = assetImage("projects/HERITAGE-PARK/photographs/edited 2.webp");
const img3 = assetImage("projects/HERITAGE-PARK/photographs/edited 3.webp");
const img4 = assetImage("projects/HERITAGE-PARK/photographs/edited 4.webp");
const img5 = assetImage("projects/HERITAGE-PARK/photographs/edited 5.webp");
const img6 = assetImage("projects/HERITAGE-PARK/photographs/edited 6.webp");
const img7 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 7.webp");
const img8 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 8.webp");
const img9 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 9.webp");
const img10 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 10.webp");
const img11 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 11.webp");
const img12 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 12.webp");
const img14 = assetImage("projects/HERITAGE-PARK/photographs/edited 14.webp");
const axonometricView = assetImage("projects/HERITAGE-PARK/photographs/AXONOMETRIC VIEW.webp");
const formDevelopmentDiagram = assetImage("projects/HERITAGE-PARK/photographs/FORM DEVELOPMENT DIAGRAM (3).webp");
const panorama = assetImage("projects/HERITAGE-PARK/photographs/Panorama-1 .webp");
export const metadata = {
    title: "Heritage Park — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
    Project: "Heritage Park",
    Location: "Chandni Chowk, Old Delhi",
    Client: "MCD",
    Status: "Completed",
};

// Same alternating rhythm as the other project galleries: full-bleed shots,
// side-by-side pairs, a large-image-beside-a-stack split, and one wide
// panoramic band for the Panorama-1 shot. Re-order / re-type any block
// below to change the layout — it's plain data.
const gallery = [

    { type: "pair", images: [img2, img3] },
    { type: "full", image: img1 },

    { type: "pair", images: [axonometricView, formDevelopmentDiagram] },
    { type: "full", image: img6 },
    { type: "pair", images: [img4, img7] },
    { type: "split", large: img8, stack: [img9, img10] },
    { type: "full", image: img11 },
    { type: "pair", images: [img12, img14] },
    { type: "full", image: img5 },
    { type: "wide", image: panorama },
];

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function HeritageParkPage() {
    return (
        <>
            <main>
                <SiteChrome dark />

                {/* Hero */}
                <section className={styles.hero}>
                    <Image
                        src={heroImage}
                        alt="Heritage Park"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={`site-container ${styles.heroTextWrap}`}>
                        <div className={styles.heroText}>
                            <h1>Heritage Park</h1>
                            <p>Old Delhi</p>
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
                            Set opposite the Red Fort in the heart of Old Delhi, Heritage
                            Park is a landscape redevelopment conceived as a{" "}
                            <span className={styles.highlight}>
                                contemporary escape rooted in the city&apos;s history
                            </span>
                            . Framed by panoramic views of the Red Fort and Jama Masjid,
                            the park brings together{" "}
                            <span className={styles.highlight}>
                                Mughal and Hindu architectural influences
                            </span>{" "}
                            through a distinctly vernacular material language.
                        </p>

                        <p>
                            The park unfolds across two zones—a{" "}
                            <span className={styles.highlight}>
                                hardscape entry and landscaped garden
                            </span>
                            . The journey begins at a boundary wall of red sandstone arches
                            and Delhi stone, leading to a shaded public precinct with
                            traditional shops, eateries and views towards the Red Fort.
                            Beyond it, a central walkway connects three destinations: the{" "}
                            <span className={styles.highlight}>
                                Baradari, sunken seating and open-air amphitheatre
                            </span>
                            , creating a continuous sequence of gathering spaces.
                        </p>

                        <p>
                            A{" "}
                            <span className={styles.highlight}>
                                Mughal-inspired garden
                            </span>
                            , white-stone Baradari and integrated seating are composed
                            within abundant greenery, preserving the site&apos;s lush
                            character and evoking the familiarity of long, leisurely
                            picnics. A stage anchors the amphitheatre while maintaining a
                            visual connection across the park.
                        </p>

                        <p>
                            The material palette remains deliberately{" "}
                            <span className={styles.highlight}>
                                vernacular—Delhi stone, red sandstone and White Statuario
                                marble
                            </span>
                            —echoing the architectural vocabulary of the Red Fort and
                            Chandni Chowk. Traditional materials are reinterpreted through
                            contemporary detailing and construction, allowing the park to
                            preserve the cultural memory of its setting while giving it a{" "}
                            <span className={styles.highlight}>renewed public life</span>.
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
                                        alt="Heritage Park"
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
                                        alt="Heritage Park"
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
                                            alt="Heritage Park"
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
                                                    alt="Heritage Park"
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
                                            alt="Heritage Park"
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

                <MoreProjects currentId="heritage-park" />
            </main>

            <Footer />
        </>
    );
}