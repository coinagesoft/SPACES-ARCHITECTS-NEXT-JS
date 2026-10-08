import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HOUSE-OF-CURVES/cover/HERO.webp");
const p1 = assetImage("projects/HOUSE-OF-CURVES/3_4/1.webp");
const p2 = assetImage("projects/HOUSE-OF-CURVES/3_4/2.webp");
const p3 = assetImage("projects/HOUSE-OF-CURVES/3_4/3.webp");
const p4 = assetImage("projects/HOUSE-OF-CURVES/3_4/4.webp");
const p5 = assetImage("projects/HOUSE-OF-CURVES/3_4/5.webp");
const p6 = assetImage("projects/HOUSE-OF-CURVES/3_4/6.webp");
const p7 = assetImage("projects/HOUSE-OF-CURVES/3_4/7.webp");
const p9 = assetImage("projects/HOUSE-OF-CURVES/3_4/9.webp");
const extra1 = assetImage("projects/HOUSE-OF-CURVES/3_4/9f684963-7642-47cb-9d3e-7b8018ffeadc.webp");
const p10 = assetImage("projects/HOUSE-OF-CURVES/3_4/10.webp");
const p12 = assetImage("projects/HOUSE-OF-CURVES/3_4/12.webp");
const p13 = assetImage("projects/HOUSE-OF-CURVES/3_4/13.webp");
const p15 = assetImage("projects/HOUSE-OF-CURVES/3_4/15.webp");
const p16 = assetImage("projects/HOUSE-OF-CURVES/3_4/16.webp");
const p17 = assetImage("projects/HOUSE-OF-CURVES/3_4/17.webp");
const p20 = assetImage("projects/HOUSE-OF-CURVES/3_4/20.webp");
const balcony = assetImage("projects/HOUSE-OF-CURVES/3_4/balcony.webp");
const courtyard = assetImage("projects/HOUSE-OF-CURVES/3_4/Courtyard.webp");
const elevation = assetImage("projects/HOUSE-OF-CURVES/3_4/elevation.webp");
const facade3 = assetImage("projects/HOUSE-OF-CURVES/3_4/facade 3.webp");
const facade5 = assetImage("projects/HOUSE-OF-CURVES/3_4/facade 5.webp");
const outdoorSeating = assetImage("projects/HOUSE-OF-CURVES/3_4/Outdoor Seating.webp");
const pottedPlant = assetImage("projects/HOUSE-OF-CURVES/3_4/potted plant.webp");
const sketch1 = assetImage("projects/HOUSE-OF-CURVES/3_4/sketches house of curves_page-0001.webp");
const sketch2 = assetImage("projects/HOUSE-OF-CURVES/3_4/sketches house of curves_page-0002.webp");
const terrace2 = assetImage("projects/HOUSE-OF-CURVES/3_4/terrace 2.webp");
const terrace4Night = assetImage("projects/HOUSE-OF-CURVES/3_4/terrace 4 night.webp");
const terrace5 = assetImage("projects/HOUSE-OF-CURVES/3_4/terrace 5.webp");
const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "House of Curves — Spaces Architects@ka" };
export default function HouseOfCurvesPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-curves"
      title="House of Curves"
      location="Agra, Uttar Pradesh"
      hero={hero}
      photos={[
        p1, p2, p3, p4, p5, p6, p7,
        p9, extra1, p10, p12, p13,
        p15, p16, p17, p20,
        balcony, courtyard, elevation, facade3, facade5,
        outdoorSeating, pottedPlant,
        sketch1, sketch2,
        terrace2, terrace4Night, terrace5,
      ]}
      details={{
        Project: "House of Curves",
        Location: "Agra, Uttar Pradesh",
        "Plot Area": "6,300 sq. ft.",
        "Built-up Area": "18,000 sq. ft.",
        Client: "Mr. Amit Agrawal",
        Status: "Completed",
      }}
      description={[
        <>
          Agarwal&rsquo;s Residence, a <Orange>600-square-yard home in Agra</Orange>, explores contemporary living through a <Orange>dialogue between architectural geometry and the softness of nature</Orange>. Conceived around the refined sensibilities of its residents, the multi-level residence combines clean lines with organic forms and integrated greenery.
        </>,
        <>
          The façade composes <Orange>white walls and concrete volumes</Orange> with curved elements, <Orange>three arched openings</Orange> screened with slatted panels and a <Orange>large cantilevered upper structure</Orange>. Circular cut-outs, <Orange>cascading planting</Orange> and horizontal slatted elements add rhythm and depth, while a small garden softens the street edge.
        </>,
        <>
          The interiors extend this contrast, bringing together the <Orange>rigour of modern architecture</Orange> with fluid, organic forms. Rounded furniture and a raw, neutral palette create a calm retreat from the geometry of the exterior, allowing art, nature and materiality to coexist. The residence ultimately becomes a contemporary haven of <Orange>calm and contemplation</Orange>, designed to nurture both comfort and well-being.
        </>,
      ]}
    />
  );
}