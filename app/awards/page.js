import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import styles from "./page.module.css";

export const metadata = { title: "Awards — Spaces Architects@ka" };

const awards = [
  [
    ["2024", "ArchiDaily Building of the Year Awards 2024 Finalist", "ArchDaily"],
    ["2024", "Inside World Festival of Interior - Finalist", "Inside World Festival"],
    ["2024", "World Architecture Festival (Singapore) Completed Building - Finalist", "World Architecture Festival", true],
    ["2024", "World Architecture Community - 51th Cycle Winner", "World Architecture Community"],
    ["2023", "World Inside Festival (Singapore) Finalist", "World Inside Festival (Residential / Interior)"],
    ["2023", "World Architecture Community - 50th Cycle Winner", "World Architecture Community (Interior)"],
    ["2023", "Loop Design Awards - Urban Concept Winner", "Loop Design Awards", true],
    ["2023", "Loop Design Awards - Concrete & Design Winner", "Loop Design Awards"],
    ["2023", "Loop Design Awards - Landscape Winner", "Loop Design Awards"],
    ["2023", "ArchiDaily Building of the Year Awards 2023 Finalist", "ArchDaily"],
    ["2023", "Trends Excellence Award - Landscape Design (Winner)", "Trends Excellence Award", true],
    ["2022", "World Architecture Festival (Portugal) - Finalist", "World Architecture Festival"],
    ["2022", "ArchiDaily Building of the Year Awards 2022 Finalist", "ArchDaily"],
    ["2022", "World Architecture Festival - Future Residential Highly Commended (Portugal)", "World Architecture Festival", true],
    ["2022", "IIA Awards - Landscape (Highly commended)", "Indian Institute of Architects", true],
    ["2021", "ArchiDaily Building of the Year Awards 2021 Finalist", "ArchDaily"],
    ["2020", "World Architecture Community Awards - 35th Cycle Realised Interior Design Winner", "World Architecture Community"],
    ["2020", "IIID - Institution Interior Design - North & East Region (Residential) Winner", "Indian Institute of Interior Designers", true],
    ["2019", "Forbes Design Awards - Best Conservation & Restoration Architecture (Winner)", "Forbes Design Awards", true],
    ["2017", "UNESCO Asia-Pacific Heritage Awards (Highly Commended)", "UNESCO Asia-Pacific Heritage Awards", true],
    ["2017", "Melt India Award - Runner up", "Melt List Awards", true],
  ],
  [
    ["2015", "AD50 - 50 Most Influential Names in Architecture & Design", "Architectural Digest", true],
    ["2015", "IIA Awards - Conservation Project for Hospitality - Finalist", "Indian Institute of Architects"],
    ["2015", "IIA Awards - (Interior Project Category) - Finalist", "Indian Institute of Architects"],
    ["2015", "IIID Anchor Awards - (Hospitality-North & East Region) - Commended", "Indian Institute of Indian Designers"],
    ["2015", "NDTV GROHE Design & Architecture Awards - Winner", "Heritage Architecture (Jury Commendation)", true],
    ["2014", "World Architecture Community Awards - 18th Cycle Realised Built - Winner", "World Architecture Community"],
    ["2014", "World Interior News Awards Finalist", "World Interior News Awards"],
    ["2014", "World Inside Festival - Office Finalist (Singapore)", "World Inside Festival"],
    ["2013", "IIID Anchor Awards - Commercial - North & East region (Jury Commendation)", "Indian Institute of Indian Designers"],
    ["2011", "IIID Anchor Awards - Single Dwelling - North, East & Central region (Jury Commendation)", "Indian Institute of Indian Designers"],
    ["2010", "IDK Artist in Concrete - Residential Architecture , Small", "IDK Artist in Concrete"],
    ["2010", "Archidesign Awards - Retail Category - National Level", "Archidesign Awards"],
    ["2010", "Architects & Interiors India Awards - Office Category - National Level (Runner up)", "Architects & Interiors India Awards", true],
    ["2009", "Archidesign Awards - Best Residential Interiors - North & East Region (Winner)", "Archidesign Awards"],
    ["2009", "IIID MK Awards - Retail Interior Design - North & East Region", "IIID MK Awards", true],
    ["2009", "WAN Colours in Architecture Awards Longlisted", "World Architecture News (WAN)"],
    ["2008", "IIID MK Awards - Institution Interior Design - North & East Region", "IIID MK Awards"],
    ["2008", "IIID MK Awards - Residential Interior - National Level Winner", "IIID Awards"],
    ["2007", "Archidesign Awards - Best Private Residence - North & East Region", "Archidesign"],
    ["2007", "IIID MK Awards - Residential Interior Designer - North & East Region", "IIID MK Awards", true],
  ],
];

function AwardColumn({ entries }) {
  return (
    <div className={styles.awardColumn}>
      {entries.map(([year, title, organisation, featured]) => (
        <article key={`${year}-${title}`} className={styles.awardItem}>
          <p className={featured ? styles.awardFeatured : styles.awardTitle}>
            {year} {title}
          </p>
          <p className={styles.awardOrganisation}>{organisation}</p>
        </article>
      ))}
    </div>
  );
}

export default function AwardsPage() {
  const heroImage = assets.projects.find((project) => project.id === "haveli-dharampura").image;

  return (
    <main className={styles.awardsPage}>
      <SiteChrome dark />

      <section className={styles.hero}>
        <Image src={heroImage} alt="Haveli Dharampura courtyard" fill priority sizes="100vw" className={styles.coverImage} />
        <div className={styles.heroShade} />
      </section>

      <section className={styles.awardsContent}>
        <div className={styles.marks}>
          {assets.awardMarks.map((mark) => (
            <div key={mark.name} className={styles.mark}>
              <Image
                src={mark.image}
                alt={mark.name}
                fill
                sizes="(min-width: 768px) 10vw, 18vw"
                className={styles.markImage}
              />
            </div>
          ))}
        </div>

        <h1 className={styles.heading}>Awards</h1>
        <div className={styles.awardsGrid}>
          {awards.map((column, index) => <AwardColumn key={index} entries={column} />)}
        </div>
      </section>

      <section className={styles.gallery}>
        {assets.awardsFeatures.map((image, index) => (
          <div key={image.src} className={styles.galleryImage}>
            <Image src={image} alt={index === 0 ? "Awards feature one" : "Awards feature two"} fill sizes="(min-width: 768px) 42vw, 86vw" className={styles.coverImage} />
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
