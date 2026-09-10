import { assets } from "@/config/assets";
import styles from "./FeaturedIn.module.css";

function LogoSet({ logos, hidden = false }) {
  return logos.map((logo) => (
    <div key={`${hidden ? "copy-" : ""}${logo.name}`} className={styles.logo} aria-hidden={hidden}>
      <img
        src={typeof logo.image === "string" ? logo.image : logo.image.src}
        alt={hidden ? "" : logo.name}
        className={styles.logoImage}
      />
    </div>
  ));
}

function MarqueeRow({ logos, direction }) {
  return (
    <div className={styles.marquee}>
      <div className={`${styles.track} ${direction === "right" ? styles.trackRight : styles.trackLeft}`}>
        <LogoSet logos={logos} />
        {/* An identical second set lets the animation loop without a jump. */}
        <LogoSet logos={logos} hidden />
      </div>
    </div>
  );
}

export default function FeaturedIn() {
  const splitAt = Math.ceil(assets.featuredIn.length / 2);
  const firstRow = assets.featuredIn.slice(0, splitAt);
  const secondRow = assets.featuredIn.slice(splitAt);

  return (
    <section className={`${styles.featuredIn} site-container`}>
      <h2 className={styles.heading}>
        Featured In
      </h2>
      <div className={styles.rows}>
        <MarqueeRow logos={firstRow} direction="left" />
        <MarqueeRow logos={secondRow} direction="right" />
      </div>
    </section>
  );
}
