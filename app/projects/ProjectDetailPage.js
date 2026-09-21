import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./slender-house/page.module.css";
import buildProjectGallery from "./buildProjectGallery";

const ratio = (image) => (image?.width && image?.height ? image.width / image.height : 1);

export default function ProjectDetailPage({ title, location, hero, photos = [], details, description = [] }) {
  const gallery = buildProjectGallery(photos.filter(Boolean));

  return (
    <>
      <main>
        <SiteChrome dark />
        <ParallaxHeroImage className={styles.hero} imageClassName={styles.heroImage} src={hero} alt={title}>
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>{title}</h1>
              {location && <p>{location}</p>}
            </div>
          </div>
        </ParallaxHeroImage>

        <section className={`site-container ${styles.infoSection}`}>
          <aside className={styles.infoSidebar}>
            <div>
              <h3>Project Details</h3>
              <dl>
                {Object.entries(details).map(([label, value]) => (
                  <div key={label}><dt>{label}:</dt> <dd>{value}</dd></div>
                ))}
              </dl>
            </div>
          </aside>
          <div className={styles.infoBody}>
            {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </section>

        {gallery.length > 0 && (
          <section className={`site-container ${styles.gallery}`} aria-label={`${title} gallery`}>
            {gallery.map((row, index) => row.type === "masonry" ? (
              <div key={index} className={styles.galleryMasonry}>
                {row.images.map((image) => (
                  <div key={image.src} className={styles.galleryMasonryItem}>
                    <Image src={image} alt={title} sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImg} />
                  </div>
                ))}
              </div>
            ) : row.type === "full" ? (
              <div key={row.image.src || index} className={styles.galleryFull}>
                <Image src={row.image} alt={title} sizes="100vw" className={styles.galleryImg} />
              </div>
            ) : (
              <div key={index} className={styles.galleryPair}>
                {row.images.map((image) => (
                  <div key={image.src} className={styles.galleryPairItem} style={{ "--ratio": ratio(image) }}>
                    <Image src={image} alt={title} fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                  </div>
                ))}
              </div>
            ))}
          </section>
        )}

        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">x</a>
            <a href="#" aria-label="LinkedIn">in</a><a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}