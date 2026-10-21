import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/GLULAM-SHOWROOM/cover/Cover Image.webp");

const img1 = assetImage("projects/GLULAM-SHOWROOM/3_4/1.webp");
const img2 = assetImage("projects/GLULAM-SHOWROOM/3_4/2.webp");
const img3 = assetImage("projects/GLULAM-SHOWROOM/3_4/3.webp");
const img4 = assetImage("projects/GLULAM-SHOWROOM/3_4/4.webp");
const img5 = assetImage("projects/GLULAM-SHOWROOM/3_4/5.webp");
const img6 = assetImage("projects/GLULAM-SHOWROOM/3_4/6.webp");
const img7 = assetImage("projects/GLULAM-SHOWROOM/3_4/7.webp");
const img8 = assetImage("projects/GLULAM-SHOWROOM/3_4/8.webp");
const img9 = assetImage("projects/GLULAM-SHOWROOM/3_4/9.webp");
const img10 = assetImage("projects/GLULAM-SHOWROOM/3_4/10.webp");
const img11 = assetImage("projects/GLULAM-SHOWROOM/3_4/11.webp");
const img12 = assetImage("projects/GLULAM-SHOWROOM/3_4/12.webp");
const img13 = assetImage("projects/GLULAM-SHOWROOM/3_4/13.webp");
const img14 = assetImage("projects/GLULAM-SHOWROOM/3_4/14.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Glulam Showroom — Spaces Architects@ka" };

export default function GlulamShowroomPage() {
  return (
    <ProjectDetailPage
      currentId="glulam-showroom"
      title="Glulam Showroom"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img3, img1, img2,
        img5, img8,
        img4,
        img6, img7,
        img9, img11,
        img10,
        img13, img14,
        img12,
      ]}
      details={{
        Project: "Glulam Showroom",
        Location: "New Delhi",
        "Built-up Area": "2,500 sq. ft.",
        Client: "Mr. Hardeep Gill",
        Status: "Completed",
      }}
      description={[
        <>
          A <Orange>2,500 sq. ft. showroom</Orange> and experience centre was designed to introduce the Indian market to the quality of imported, primarily <Orange>Canadian timber</Orange> and the technology behind its production. Central to the experience is <Orange>Glulam Technology</Orange>, which bonds individual high-strength, kiln-dried timber sections into precise, durable components. The space was conceived not simply to display the products, but to <Orange>educate visitors</Orange> about their material quality, performance and possibilities.
        </>,
        <>
          To place the wood itself at the centre of attention, the interiors adopt a deliberately <Orange>restrained palette of wood and concrete</Orange>. Doors and windows line the building&rsquo;s perimeter, creating a continuous material display, while a central meeting room anchors the plan. A waiting area, conference room and display bedroom complete the programme, with the bedroom featuring custom wooden flooring, a <Orange>slimline sliding door</Orange>, ceiling artwork and a world map tracing the countries from which the products are sourced.
        </>,
        <>
          A small outdoor green area extends the experience, demonstrating the material&rsquo;s performance in external conditions. The result is a tactile showroom where technology, craftsmanship and material become the architecture itself.
        </>,
      ]}
    />
  );
}