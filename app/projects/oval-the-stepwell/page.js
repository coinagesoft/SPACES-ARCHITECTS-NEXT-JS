import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/THE-STEPWELL/cover/COVER.webp");

const img1 = assetImage("projects/THE-STEPWELL/3_4/1.webp");
const img2 = assetImage("projects/THE-STEPWELL/3_4/2.webp");
const img3 = assetImage("projects/THE-STEPWELL/3_4/3.webp");
const img4 = assetImage("projects/THE-STEPWELL/3_4/4.webp");
const img5 = assetImage("projects/THE-STEPWELL/3_4/5.webp");
const img6 = assetImage("projects/THE-STEPWELL/3_4/6.webp");
const img7 = assetImage("projects/THE-STEPWELL/3_4/7.webp");
const img8 = assetImage("projects/THE-STEPWELL/3_4/8.webp");
const img9 = assetImage("projects/THE-STEPWELL/3_4/9.webp");
const img10 = assetImage("projects/THE-STEPWELL/3_4/10.webp");
const img11 = assetImage("projects/THE-STEPWELL/3_4/11.webp");
const img12 = assetImage("projects/THE-STEPWELL/3_4/12.webp");
const img13 = assetImage("projects/THE-STEPWELL/3_4/13.webp");
const img14 = assetImage("projects/THE-STEPWELL/3_4/14.webp");
const img15 = assetImage("projects/THE-STEPWELL/3_4/15.webp");
const img16 = assetImage("projects/THE-STEPWELL/3_4/16.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The Stepwell — Spaces Architects@ka" };

export default function TheStepwellPage() {
  return (
    <ProjectDetailPage
      currentId="the-stepwell"
      title="The Stepwell"
      location="Rajasthan"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1,
        img2, img3,
        img4,
        img5, img6,
        img16, img7, img8,
        img9,
        img10, img11,
        img12, img13,
        img14, img15,
      ]}
      details={{
        Project: "Oval – The Stepwell",
        Location: "Rajasthan",
        Client: "Ministry of Culture",
        Status: "Conceptual",
      }}
      awards={[
        "World Architecture Awards – Winner, 36th Cycle, 2020",
        "Rethinking the Future Awards – Second Award, Cultural (Concept), 2020",
        "WAF 2022 – Finalist/Shortlisted, Future Project: Culture, 2022",
      ]}
      publications={[
        "The Hindu",
        "World Architecture Community",
        "Rethinking the Future",
        "World Architecture Festival",
      ]}
      description={[
        <>
          India’s architectural identity is deeply rooted in its heritage, yet the deterioration and inaccessibility of historic structures threaten this cultural continuity. The Oval draws inspiration from <Orange>Rajasthan and Gujarat’s stepwells</Orange>, recognising their historic role in community building, cultural exchange, and supporting flora and fauna, while reinterpreting their essence through a contemporary, sustainable lens.
        </>,
        <>
          Inspired by the stepped geometry of traditional stepwells, the design creates a <Orange>fluid play of levels</Orange> that naturally divides the expansive space into multiple functions without creating a sense of enclosure. The resulting sequence of levels and spaces offers varied public experiences while creating opportunities for <Orange>tourism, cultural engagement and economic growth</Orange> through museums, galleries and public functions.
        </>,
        <>
          The form generates distinctive <Orange>frustum-like curves</Orange>, conceived as a canvas for light and sound shows. Designed as a public destination, the Oval incorporates an open-air theatre, courtyard, museums, galleries, sky-viewing deck, inner stepwell seating and cafeteria. A <Orange>central glass lift</Orange> becomes a viewing element, offering a <Orange>360-degree dynamic view</Orange> of the vertical vista.
        </>,
        <>
          A restrained material palette combines the traditional character of <Orange>sandstone and water</Orange> with the contemporary language of concrete and green architecture. Water and vegetation further enhance the atmosphere and experience.
        </>,
        <>
          The Oval is envisioned as a <Orange>contemporary revival of the stepwell</Orange>, transforming its architectural and cultural legacy into an accessible public destination while widening the horizons for tourism and reconnecting contemporary India with its heritage.
        </>,
      ]}
    />
  );
}