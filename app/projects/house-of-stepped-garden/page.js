import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";

const heroVideo = assetUrl("projects/HOUSE-OF-STEPPED-GARDEN/cover/COVER.mp4");

const photo1 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/1.webp");
const photo2 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/1(2).webp");
const photo3 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (2).webp");
const photo4 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (3).webp");
const photo5 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (4).webp");
const photo6 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (5).webp");
const photo7 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (6).webp");
const photo8 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (7).webp");
const photo9 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (9).webp");
const photo10 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (10).webp");
const photo11 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (12).webp");
const photo12 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (13).webp");
const photo13 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (2).webp");
const photo14 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (3).webp");
const photo15 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (4).webp");
const photo16 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (1).webp");
const photo17 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (3).webp");
const photo18 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (4).webp");
const photo19 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (2).webp");
const photo20 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (3).webp");
const photo21 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (4).webp");
const photo22 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (5).webp");
const photo23 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (6).webp");
const photo24 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(8).webp");
const photo25 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(9).webp");
const photo26 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(11).webp");
const photo27 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (4).webp");
const photo28 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (5).webp");
const photo29 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (7).webp");
const photo30 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (8).webp");
// Diagrams + aerial shot
const dataGraphic = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/data graphic.webp");
const finalSectionCopy = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/final section copy.webp");
const dji0083 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/DJI_0083 .webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The House of Stepped Gardens — Spaces Architects@ka" };

export default function HouseOfSteppedGardenPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-stepped-garden"
      title="The House of Stepped Gardens"
      location="Kochi"
      heroVideo={heroVideo}
      // Same order as the old gallery array
      photos={[
        photo1,
        photo2, photo3,
        dji0083,
        photo4, photo5,
        photo6, photo9, photo8,
        photo7,
        photo10, photo11,
        photo12, photo13,
        dataGraphic,
        photo14, photo15, photo16,
        photo21,
        photo18, photo17,
        photo22, photo23,
        photo29, photo30,
        finalSectionCopy,
        photo19, photo20,
        photo27, photo28,
        photo24, photo25, photo26,
      ]}
      details={{
        Project: "The House of Stepped Gardens",
        Location: "Kochi, Kerala",
        "Plot Area": "21,000 sq. ft.",
        "Built-up Area": "36,500 sq. ft.",
        Client: "Mr. Lynus Kalister",
        Status: "Completed",
      }}
      publications={[
        "Habitus Living",
        "ArchDaily",
        "Architectural Digest",
      ]}
      description={[
        <>
          In The House of Stepped Gardens, section becomes the primary generator of architecture. Set on a heavily contoured site in Kochi, the <Orange>3,200 sq. m. residence</Orange> follows the natural terrain rather than flattening it, unfolding through cascading split levels that replace rigid partitions with gradual transitions.
        </>,
        <>
          Its monumental scale is broken into human-scaled volumes, organised around a dynamic vertical spine that responds to the site&apos;s contours and connects the house internally. Changes in level establish privacy and visual continuity: open social spaces occupy the lower levels, while terraces, courts and double-height spaces form intermediate thresholds before giving way to more intimate upper levels.
        </>,
        <>
          Designed for Kochi&apos;s hot-humid climate, the architecture dissolves the boundary between house and landscape. Open-to-sky voids, stepped gardens and shaded courtyards draw daylight and cross-ventilation deep into the residence while introducing seasonal change and greenery throughout.
        </>,
        <>
          Sustainability is integral to the architecture, with a <Orange>60 KVA solar array enabling net-zero energy</Orange>, alongside rainwater harvesting for irrigation and reuse. Layered greenery provides <Orange>thermal comfort and creates a self-shading microclimate</Orange>.
        </>,
        <>
          The house ultimately becomes a living topography, where contour, climate and movement converge, allowing architecture to yield gracefully to the landscape.
        </>,
      ]}
    />
  );
}