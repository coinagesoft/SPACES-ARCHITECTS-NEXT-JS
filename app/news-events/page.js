import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assetImage } from "@/assets";
import styles from "../blog/page.module.css";

export const metadata = { title: "News + Events — Spaces Architects@ka" };

// ============================================================
//  NEWS + EVENTS — built from the "Web Portals" sheet
//  (yellow / blue / green rows only)
//
//  One image constant per title. Every card of the same project
//  shares that project's image. To swap an image, change the path
//  on that one line.
// ============================================================

// ---- Project images ----
const haveliDharampura = assetImage("projects/haveli/haveli_4.jpg");
const goldenHaveli = assetImage("projects/GOLDEN-HAVELL/3_4/new/1.webp");
const heritagePark = assetImage("projects/HERITAGE-PARK/photographs/edited 1.webp");
const chartilalGoelHeritagePark = assetImage("projects/HERITAGE-PARK/cover/Hero Image.webp");;
const slenderHouse = assetImage("projects/Slender-House/photographs/1. Building elevation.webp");
const ashrayaResidence = assetImage("projects/ASHRAYA-RESIDENCE/3_4/1.webp");
const krishasResidence = assetImage("projects/KRISHAS-RESIDENCE/3_4/1.webp");
const adharshilaVatikaKindergarten = assetImage("projects/ADHARSHILA VATIKA KINDERGARTEN.png");
const gandhiDarshan = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/1.webp");
const lahoriGateMuseum = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/1.webp");
const swatantraResidence = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (2).jpg");
const timelessHouses = assetImage("Featured News/featured-by-timeless-houses-magazine .png");
const unesco = assetImage("Home Page logos/UNISCO.webp");
import forbesIndiaDesign2019 from "@/assets/News-Event/forbesIndiaDesign2019.jpg";
import wadeAsiaJury from "@/assets/News-Event/wadeAsia.webp";
import journeyWithCj from "@/assets/News-Event/youtube.webp";
// ---- Podcast / events / jury: no project folder exists yet ----
// Upload a 1.webp into each of these folders on the media server
// (same pattern as the project images) and they will show up.
// const journeyWithCj = assetImage("projects/JOURNEY-WITH-CJ/3_4/1.webp");
// const forbesIndiaDesign2019 = assetImage("projects/FORBES-INDIA-DESIGN-2019/3_4/1.webp");
// const wadeAsiaJury = assetImage("projects/WADE-ASIA-JURY/3_4/1.webp");
const matecia = assetImage("projects/MATECIA/3_4/1.webp");

// ---- Cards (same order as the sheet) ----
// title  = Project column
// source = Web Portal column
// href   = Link column (opens in a new tab)
const newsCards = [
  { title: "Haveli Dharampura", source: "NDTV – Art Matters", image: haveliDharampura, href: "https://www.youtube.com/watch?v=qvuA2n8pkIU" },

  { title: "Golden Haveli", source: "ThePrint", image: goldenHaveli, href: "https://theprint.in/feature/sharif-manzil-to-dharampura-how-crumbling-old-delhi-havelis-were-restored-revamped-repurposed/2183827/" },
  { title: "Golden Haveli", source: "Hindustan Times", image: goldenHaveli, href: "https://www.hindustantimes.com/cities/delhi-news/centuryold-delhi-haveli-gets-a-golden-lease-of-life-101677438200372.html" },
  { title: "Golden Haveli", source: "Times of India", image: goldenHaveli, href: "https://timesofindia.indiatimes.com/city/delhi/golden-haveli-gets-glitter-back-after-4-years-of-restoration-work/articleshow/98529000.cms" },
  { title: "Golden Haveli", source: "The Indian Express", image: goldenHaveli, href: "https://indianexpress.com/article/cities/delhi/chandni-chowk-gets-a-new-attraction-as-old-haveli-is-brought-back-to-life-8474361/" },

  { title: "Heritage Park", source: "NDTV", image: heritagePark, href: "https://www.ndtv.com/delhi-news/with-mughal-style-pavilion-new-heritage-park-set-to-open-in-old-delhi-2832512" },
  { title: "Heritage Park", source: "ETV Bharat", image: heritagePark, href: "https://www.etvbharat.com/english/bharat/president-inaugurates-new-heritage-park-in-old-delhi/na20220320204432680" },
  { title: "Heritage Park", source: "ThePrint", image: heritagePark, href: "https://theprint.in/india/prez-inaugurates-new-heritage-park-in-old-delhi/881101/" },
  { title: "Heritage Park", source: "Hindustan Times", image: heritagePark, href: "https://www.hindustantimes.com/cities/delhi-news/heritage-park-opens-in-walled-city-101647815631624.html" },
  { title: "Heritage Park", source: "Times of India", image: heritagePark, href: "https://timesofindia.indiatimes.com/city/delhi/heritage-park-phase-ii-near-red-fort-new-developments-and-future-plans/articleshow/113947690.cms" },
  { title: "Heritage Park", source: "The New Indian Express", image: heritagePark, href: "https://www.newindianexpress.com/cities/delhi/2022/Mar/16/president-to-unveil-heritage-park-on-sunday-2430661.html" },
  { title: "Heritage Park", source: "ANI News", image: heritagePark, href: "https://www.aninews.in/news/national/general-news/president-kovind-inaugurates-charti-lal-goel-heritage-park-in-old-delhi20220320233252/" },

  { title: "Slender House", source: "YouTube", image: slenderHouse, href: "https://youtu.be/yb8OlsuUVsU?si=KnFEI4_WWTJrQX-6" },
  { title: "Ashraya Residence", source: "YouTube", image: ashrayaResidence, href: "https://youtu.be/iK3yXr1mR1c?si=G98V_GZq9rvGG8HC" },

  { title: "Krisha's Residence", source: "India Today", image: krishasResidence, href: "https://www.indiatoday.in/magazine/supplement/story/20190325-a-hue-haven-1479077-2019-03-15" },
  { title: "Timeless Houses", source: "Newzviewz", image: timelessHouses, href: "https://www.newzviewz.com/news-detail/timeless-houses-a-story-of-dream-for-most-people" },
  { title: "Adharshila Vatika Kindergarten", source: "BBC", image: adharshilaVatikaKindergarten, href: "https://www.bbc.com/news/business-14975270#google_vignette" },
  { title: "Adharshila Vatika Kindergarten", source: "School Construction News", image: adharshilaVatikaKindergarten, href: "https://schoolconstructionnews.com/2008/10/28/design-share-awards-2008/" },
  { title: "Haveli Dharampura", source: "The Asian Age", image: haveliDharampura, href: "https://www.asianage.com/metros/delhi/181117/haveli-dharampura-in-chandni-chowk-bags-unesco-award.html" },
  { title: "Golden Haveli", source: "Architect and Interiors India", image: goldenHaveli, href: "https://www.architectandinteriorsindia.com/news/take-in-chandni-chowk-views-from-the-golden-haveli-with-eam-s-jaishankar" },
  { title: "Haveli Dharampura", source: "The Telegraph", image: haveliDharampura, href: "https://www.telegraph.co.uk/travel/destinations/asia/india/delhi/new-delhi/hotels/haveli-dharampura-hotel/" },

  // Sheet's Project column says PODCAST / EVENT / JURY here, so the
  // portal name is used as the title and the category as the subtitle.
  { title: "Journey with CJ", source: "Podcast", image: journeyWithCj, href: "https://youtu.be/pljfj9JgmV0?si=3RQSHZQ5pXDNDsSi" },
  { title: "Forbes India Design 2019", source: "Event", image: forbesIndiaDesign2019, href: "https://www.businesswireindia.com/forbes-india-design-awards-2019-presented-by-stonex-india-63126.html" },

  { title: "Slender House", source: "The Guardian", image: slenderHouse, href: "https://www.theguardian.com/artanddesign/gallery/2024/jul/10/world-architecture-festival-2024-shortlist-in-pictures?CMP=share_btn_url" },
  // Project cell is empty in the sheet; the article is about the narrow-plot
  // "skinny house", so it is filed under Slender House.
  { title: "Slender House", source: "The Hindu", image: slenderHouse, href: "https://www.thehindu.com/life-and-style/homes-and-gardens/narrow-plot-skinny-house-construction-property-home-buildings/article68732008.ece/amp/" },
  { title: "WADE Asia", source: "Jury", image: wadeAsiaJury, href: "https://www.wadeasia.com/jury-2026/" },
  { title: "Slender House", source: "CNN", image: slenderHouse, href: "https://edition.cnn.com/2024/07/10/style/waf-awards-2024-best-new-architecture" },
  { title: "Gandhi Darshan", source: "Hindustan Times", image: gandhiDarshan, href: "https://www.hindustantimes.com/photos/news/president-murmu-unveils-12-feet-high-statue-of-mahatma-gandhi-at-gandhi-vatika-101693818208295.html" },
  { title: "Haveli Dharampura", source: "NDTV", image: haveliDharampura, href: "https://www.ndtv.com/india-news/old-delhis-haveli-dharampura-mumbais-wellington-fountain-get-unesco-recognition-1776934" },
  { title: "Lahori Gate Museum", source: "The Times of India", image: lahoriGateMuseum, href: "https://timesofindia.indiatimes.com/city/delhi/lahori-gate-museum-to-showcase-chandni-chowk-heritage/amp_articleshow/120388787.cms" },
  { title: "UNESCO", source: "The Times of India", image: unesco, href: "https://timesofindia.indiatimes.com/travel/india/travel-guide/unesco-recognises-7-indian-conservation-efforts/amp_guideshow/61485258.cms" },
  // No link in the sheet yet — shown as a plain (non-clickable) card.
  // { title: "MATECIA", source: "Event", image: matecia, href: null },

  { title: "Chartilal Goel Heritage Park", source: "Hindustan Times", image: chartilalGoelHeritagePark, href: "https://www.hindustantimes.com/cities/delhi-news/heritage-park-opens-in-walled-city-101647815631624-amp.html" },
  { title: "Swatantra Residence", source: "Financial Times", image: swatantraResidence, href: "https://www.ft.com/content/3bc01f86-ad16-4901-8782-42a91f9a72ea" },
  { title: "Chartilal Goel Heritage Park", source: "ETV Bharat News", image: chartilalGoelHeritagePark, href: "https://www.etvbharat.com/amp/english/bharat/president-inaugurates-new-heritage-park-in-old-delhi/na20220320204432680" },
  { title: "Chartilal Goel Heritage Park", source: "India Today", image: chartilalGoelHeritagePark, href: "https://www.indiatoday.in/amp/cities/delhi/story/heritage-themed-park-in-delhi-story-of-urban-landscape-transformation-1927045-2022-03-19" },
];

export default function NewsEventsPage() {
  return (
    <main>
      <SiteChrome />

      <section className={styles.blogListing} aria-label="News and events">
        <div className={styles.blogGrid}>
          {newsCards.map((card, index) => {
            const content = (
              <>
                <div className={styles.imageWrap}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <h2 className={styles.title}>{card.title}</h2>
                <p className={styles.excerpt}>{card.source}</p>
                {card.href && <span className={styles.readMore}>Read more</span>}
              </>
            );

            return (
              <article key={`${card.title}-${index}`} className={styles.blogCard}>
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`${card.title} — ${card.source}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.cardLink}>{content}</div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}