import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import NewsEventsGallery from "@/components/NewsEventsGallery";
import { assetUrl } from "@/assets";

export const metadata = { title: "News + Events — Spaces Architects@ka" };

// ============================================================
//  NEWS + EVENTS — newspaper cutouts
//
//  Images live on the asset host in:  assets/News and Event page/
//  Each line below = one cutout, in the same order as the file numbers.
//
//   cut(file, title, { source, href })  -> YELLOW row in the sheet:
//        shows title + source and opens the news link in a new tab.
//   cut(file, title)                    -> everything else:
//        image only, opens in the preview (like Testimonials).
//
//  `file` = the file name WITHOUT the extension (EXT below).
// ============================================================

const FOLDER = "News and Event page";
const EXT = "webp";

const cut = (file, title, extra = {}) => ({
  src: assetUrl(`${FOLDER}/${file}.${EXT}`),
  alt: `${title} — press cutout`,
  title,
  ...extra,
});

const items = [
  // 01 (NDTV – Art Matters, YouTube) has no cutout yet. When you upload it:
  // cut("01.<file name>", "Haveli Dharampura", { source: "NDTV – Art Matters", href: "https://www.youtube.com/watch?v=qvuA2n8pkIU" }),

  // ---------- yellow rows: cutout + link ----------
  cut("02.Golden Haveli_theprint", "Golden Haveli", { source: "ThePrint", href: "https://theprint.in/feature/sharif-manzil-to-dharampura-how-crumbling-old-delhi-havelis-were-restored-revamped-repurposed/2183827/" }),
  cut("03.goldenhaveli_hindustantimes", "Golden Haveli", { source: "Hindustan Times", href: "https://www.hindustantimes.com/cities/delhi-news/centuryold-delhi-haveli-gets-a-golden-lease-of-life-101677438200372.html" }),
  cut("04.goldenhaveli_timeofindia", "Golden Haveli", { source: "Times of India", href: "https://timesofindia.indiatimes.com/city/delhi/golden-haveli-gets-glitter-back-after-4-years-of-restoration-work/articleshow/98529000.cms" }),
  // cut("05.goldenhaveli_theindianexpress", "Golden Haveli", { source: "The Indian Express", href: "https://indianexpress.com/article/cities/delhi/chandni-chowk-gets-a-new-attraction-as-old-haveli-is-brought-back-to-life-8474361/" }),

  cut("06.heritagepark_ndtv", "Heritage Park", { source: "NDTV", href: "https://www.ndtv.com/delhi-news/with-mughal-style-pavilion-new-heritage-park-set-to-open-in-old-delhi-2832512" }),
  cut("07.heritagepark_etvbharat", "Heritage Park", { source: "ETV Bharat", href: "https://www.etvbharat.com/english/bharat/president-inaugurates-new-heritage-park-in-old-delhi/na20220320204432680" }),
  cut("08. heritagepark_theprint", "Heritage Park", { source: "ThePrint", href: "https://theprint.in/india/prez-inaugurates-new-heritage-park-in-old-delhi/881101/" }),
  cut("09.heritagepark_hindustantimes", "Heritage Park", { source: "Hindustan Times", href: "https://www.hindustantimes.com/cities/delhi-news/heritage-park-opens-in-walled-city-101647815631624.html" }),
  cut("10.heritagepark_timesofindia", "Heritage Park", { source: "Times of India", href: "https://timesofindia.indiatimes.com/city/delhi/heritage-park-phase-ii-near-red-fort-new-developments-and-future-plans/articleshow/113947690.cms" }),
  cut("11.heritagepark_thenewindianexpress", "Heritage Park", { source: "The New Indian Express", href: "https://www.newindianexpress.com/cities/delhi/2022/Mar/16/president-to-unveil-heritage-park-on-sunday-2430661.html" }),
  cut("12.hertitagepark_aninews", "Heritage Park", { source: "ANI News", href: "https://www.aninews.in/news/national/general-news/president-kovind-inaugurates-charti-lal-goel-heritage-park-in-old-delhi20220320233252/" }),

  cut("15.Krisha_s Residence_indiatoday", "Krisha's Residence", { source: "India Today", href: "https://www.indiatoday.in/magazine/supplement/story/20190325-a-hue-haven-1479077-2019-03-15" }),
  cut("16.Timeless Houses_Newzviewz", "Timeless Houses", { source: "Newzviewz", href: "https://www.newzviewz.com/news-detail/timeless-houses-a-story-of-dream-for-most-people" }),
  cut("17.Adharshila Vatika Kindergarten_bbc", "Adharshila Vatika Kindergarten", { source: "BBC", href: "https://www.bbc.com/news/business-14975270#google_vignette" }),
  // ⚠ the real file name is cut off in the screenshot — check it and fix this one line
  cut("18.Adharshila Vatika Kindergarten_ School Construction News", "Adharshila Vatika Kindergarten", { source: "School Construction News", href: "https://schoolconstructionnews.com/2008/10/28/design-share-awards-2008/" }),
  cut("19.Haveli Dharampura_theasianage", "Haveli Dharampura", { source: "The Asian Age", href: "https://www.asianage.com/metros/delhi/181117/haveli-dharampura-in-chandni-chowk-bags-unesco-award.html" }),
  cut("20.Golden Haveli_Architect and Interiors India", "Golden Haveli", { source: "Architect and Interiors India", href: "https://www.architectandinteriorsindia.com/news/take-in-chandni-chowk-views-from-the-golden-haveli-with-eam-s-jaishankar" }),
  cut("21.Haveli Dharampura_thetelegraph", "Haveli Dharampura", { source: "The Telegraph", href: "https://www.telegraph.co.uk/travel/destinations/asia/india/delhi/new-delhi/hotels/haveli-dharampura-hotel/" }),

  // ---------- blue rows: image only ----------
  cut("22.Forbes India Design 2019", "Forbes India Design 2019"),

  cut("23.slenderhouse_The Guardian", "Slender House", { source: "The Guardian", href: "https://www.theguardian.com/artanddesign/gallery/2024/jul/10/world-architecture-festival-2024-shortlist-in-pictures?CMP=share_btn_url" }),
  cut("24.Slender House_thehindu", "Slender House", { source: "The Hindu", href: "https://www.thehindu.com/life-and-style/homes-and-gardens/narrow-plot-skinny-house-construction-property-home-buildings/article68732008.ece/amp/" }),

  cut("25.wadeasiajury", "WADE Asia Jury"),

  cut("26.slenderhouse_cnn", "Slender House", { source: "CNN", href: "https://edition.cnn.com/2024/07/10/style/waf-awards-2024-best-new-architecture" }),
  cut("27.Gandhi Darshan_hindustantimes", "Gandhi Darshan", { source: "Hindustan Times", href: "https://www.hindustantimes.com/photos/news/president-murmu-unveils-12-feet-high-statue-of-mahatma-gandhi-at-gandhi-vatika-101693818208295.html" }),
  cut("28.Haveli Dharampura_ndtv", "Haveli Dharampura", { source: "NDTV", href: "https://www.ndtv.com/india-news/old-delhis-haveli-dharampura-mumbais-wellington-fountain-get-unesco-recognition-1776934" }),
  cut("29.havelidharampura_unesco", "UNESCO", { source: "The Times of India", href: "https://timesofindia.indiatimes.com/travel/india/travel-guide/unesco-recognises-7-indian-conservation-efforts/amp_guideshow/61485258.cms" }),

  cut("30. Chartilal Goel Heritage Park_hindustantimes", "Chartilal Goel Heritage Park", { source: "Hindustan Times", href: "https://www.hindustantimes.com/cities/delhi-news/heritage-park-opens-in-walled-city-101647815631624-amp.html" }),
  cut("31.Swatantra Residence_financialtimes", "Swatantra Residence", { source: "Financial Times", href: "https://www.ft.com/content/3bc01f86-ad16-4901-8782-42a91f9a72ea" }),
  cut("32.Chartilal Goel Heritage Park_etvbharat", "Chartilal Goel Heritage Park", { source: "ETV Bharat News", href: "https://www.etvbharat.com/amp/english/bharat/president-inaugurates-new-heritage-park-in-old-delhi/na20220320204432680" }),
  cut("33.Chartilal Goel Heritage Park_indiatv", "Chartilal Goel Heritage Park", { source: "India Today", href: "https://www.indiatoday.in/amp/cities/delhi/story/heritage-themed-park-in-delhi-story-of-urban-landscape-transformation-1927045-2022-03-19" }),

  // ---------- no link: cutout only, opens in the preview ----------
  cut("34.goldenhaveli_hotelierindia", "Golden Haveli"),
  cut("35.The Stepwell_ The Urban Nest_thehindu", "The Urban Nest"),
  cut("36.heritagepark_theeconomictimes", "Heritage Park"),
  cut("37.intersekt_Architectural Digest India", "Intersekt"),
  cut("38. heritagepark_ETTravelWorld", "Heritage Park"),
  cut("39.goldenhaveli.businessstandard", "Golden Haveli"),
  cut("40.goldenhaveli", "Golden Haveli"),
  cut("41.theurbannest", "The Urban Nest"),
  cut("42.lahorigatehaveli", "Lahori Gate Museum", { source: "The Times of India", href: "https://timesofindia.indiatimes.com/city/delhi/lahori-gate-museum-to-showcase-chandni-chowk-heritage/amp_articleshow/120388787.cms" }),
  cut("43.heritagepark", "Heritage Park"),
  cut("44.heritagepark", "Heritage Park"),
  cut("48.haeritagepark", "Heritage Park"),
  cut("50.lahorigatehaveli", "Lahori Gate Museum"),
  cut("51.heritagepark", "Heritage Park"),
  cut("52.havelidharampura", "Haveli Dharampura"),
  cut("53.havelidharampura", "Haveli Dharampura"),
  cut("54.havelidharampura", "Haveli Dharampura"),
  cut("55.havelidharampura", "Haveli Dharampura"),
  cut("56.havelidharampura", "Haveli Dharampura"),
  cut("57.havelidharampura", "Haveli Dharampura"),
  cut("58.haveli", "Haveli Dharampura"),
  cut("59.haveli", "Haveli Dharampura"),
  cut("60.haveli8", "Haveli Dharampura"),
  cut("61.haveli dharampura", "Haveli Dharampura"),
  cut("62.havelidharampura", "Haveli Dharampura"),
  cut("63.havelidharampura", "Haveli Dharampura"),
  cut("64.havelidharampura", "Haveli Dharampura"),
  cut("65.havelidharampura", "Haveli Dharampura"),
  cut("66.goldenhaveli", "Golden Haveli"),
  cut("67.goldenhaveli", "Golden Haveli"),
];

// linked news cards first, then the cutouts without a link (same order inside each group)
const orderedItems = [...items.filter((item) => item.href), ...items.filter((item) => !item.href)];

export default function NewsEventsPage() {
  return (
    <main>
      <SiteChrome />
      <NewsEventsGallery items={orderedItems} />
      <Footer />
    </main>
  );
}