import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import buildProjectGallery from "../buildProjectGallery";
import styles from "../slender-house/page.module.css";

export const metadata = {
  title: "Swatantra Residence — Spaces Architects@ka",
};

const details = {
  Project: "Swatantra Residence",
  Location: "Agra, Uttar Pradesh",
  Client: "Mr. Vishal Mittal",
  Status: "Completed",
};

const photos = assets.swatantraResidence.gallery.filter(Boolean);
const gallery = buildProjectGallery(photos);
const moreProjects = assets.projects.filter((project) => project.id !== "swatantra-residence").slice(0, 3);
const ratio = (image) => (image && image.width && image.height ? image.width / image.height : 1);

export default function SwatantraResidencePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={assets.swatantraResidence.hero}
          alt="Swatantra Residence"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Swatantra Residence</h1>
              <p>Agra, Uttar Pradesh</p>
            </div>
          </div>
        </ParallaxHeroImage>

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
              Designed for <span className={styles.highlight}>three generations</span>, this inward-looking residence explores the
              <span className={styles.highlight}> relationship between concrete, art and family life.</span> Conceived around a
              triple-height courtyard, the home maintains visual connections across its levels while balancing shared spaces with
              increasing privacy.
            </p>
            <p>
              The ground floor accommodates the principal public areas, organised around shifting cut-outs that introduce greenery
              and connect spaces vertically. Existing trees become both privacy screens and living extensions of the interiors,
              while balconies frame the surrounding landscape rather than merely opening towards it. Upper levels accommodate
              family lounges and bedrooms, with a double-height screened balcony adding another layer of spatial depth. The terrace
              becomes a <span className={styles.highlight}>recreational retreat</span> with a jacuzzi, halls and open seating.
            </p>
            <p>
              <span className={styles.highlight}>Concrete forms the house&apos;s defining language</span> used as both material and canvas,
              enriched through pigments, textures and carefully crafted surfaces. Custom furniture, lighting and artwork further
              extend this <span className={styles.highlight}>artistic expression.</span>
            </p>
            <p>
              Sustainability is integrated into everyday living through <span className={styles.highlight}>solar panels and rainwater
              harvesting,</span> while the interactive facade reveals glimpses of the interior through jaalis and circular cut-outs.
              By reinterpretating minimalism, brutalism and modernism, the residence creates a bold architectural identity without
              losing its character as a private family home.
            </p>
          </div>
        </section>

        <section className={`site-container ${styles.gallery}`} aria-label="Swatantra Residence gallery">
          {gallery.map((block, index) => {
            if (block.type === "masonry") {
              return (
                <div key={index} className={styles.galleryMasonry}>
                  {block.images.map((image) => (
                    <div key={image.src} className={styles.galleryMasonryItem}>
                      <Image src={image} alt="Swatantra Residence" sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImg} />
                    </div>
                  ))}
                </div>
              );
            }

            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image src={block.image} alt="Swatantra Residence" sizes="100vw" className={styles.galleryImg} />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);
              const stackCombinedRatio = 1 / stackRatios.reduce((sum, currentRatio) => sum + 1 / currentRatio, 0);

              return (
                <div key={index} className={styles.gallerySplit}>
                  <div className={styles.gallerySplitLarge} style={{ "--ratio": largeRatio }}>
                    <Image src={block.large} alt="Swatantra Residence" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                  </div>
                  <div className={styles.gallerySplitStack} style={{ "--ratio": stackCombinedRatio }}>
                    {block.stack.map((image, stackIndex) => (
                      <div key={image.src} className={styles.gallerySplitStackItem} style={{ "--ratio": stackRatios[stackIndex], "--height-weight": 1 / stackRatios[stackIndex] }}>
                        <Image src={image} alt="Swatantra Residence" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className={styles.galleryPair}>
                {block.images.map((image) => (
                  <div key={image.src} className={styles.galleryPairItem} style={{ "--ratio": ratio(image) }}>
                    <Image src={image} alt="Swatantra Residence" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
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
