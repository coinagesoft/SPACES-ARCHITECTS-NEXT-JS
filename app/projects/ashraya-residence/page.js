import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/ASHRAYA-RESIDENCE/cover/COVER.webp");

const img1 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/1.webp");
const img2 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/2.webp");
const img3 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/3.webp");
const img4 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/4.webp");
const img5 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/5.webp");
const img6 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/6.webp");
const img7 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/7.webp");
const img8 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/8.webp");
const img9 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/9.webp");
const img10 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/10.webp");
const img11 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/11.webp");
const img12 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/12.webp");
const img13 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/13.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Ashraya Residence — Spaces Architects@ka" };

export default function AshrayaResidencePage() {
  return (
    <ProjectDetailPage
      currentId="ashraya-residence"
      title="Ashraya Residence"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img2, img1, img5,
        img3, img7,
        img4,
        img8, img6, img9,
        img10, img12,
        img11, img13,
      ]}
      details={{
        Project: "Ashraya Residence",
        Location: "New Delhi",
        "Plot Area": "5,400 sq. ft.",
        "Built-up Area": "12,000 sq. ft.",
        Client: "Mr. Kalra",
        Status: "Completed",
      }}
      description={[
        <>
          Set on a <Orange>600-square-yard</Orange> plot, this single-family residence is shaped by the client&apos;s deep affinity for Indian art, reflected in its planning, architecture and <Orange>material palette.</Orange> Rather than maximising the footprint, the design responds to the sun path, placing the built mass strategically within the site.
        </>,
        <>
          A <Orange>10-foot-wide rear setback</Orange> is retained as a breathing edge, drawing natural light and air into the house. The planning unfolds along <Orange>two intersecting axes:</Orange> the horizontal axis establishes <Orange>cross-ventilation and movement</Orange>, while the vertical axis connects the different levels and spaces into a <Orange>cohesive whole.</Orange>
        </>,
        <>
          With <Orange>four bedrooms and a guest room</Orange> accommodated within the brief, the residence balances functional requirements with <Orange>climate-responsive planning</Orange>, allowing light, air and Indian spatial sensibilities to shape the home.
        </>,
      ]}
    />
  );
}