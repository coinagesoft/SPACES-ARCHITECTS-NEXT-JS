import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/ARAVALI-FARMHOUSE/cover/COVER.webp");

const img1 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/1.webp");
const img2 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/2.webp");
const img3 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/3.webp");
const img4 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/4.webp");
const img5 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/5.webp");
const img6 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/6.webp");
const img7 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/7.webp");
const img8 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/8.webp");
const img9 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/9.webp");
const img10 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/10.webp");
const img11 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/11.webp");
const img12 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/12.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Aravali Farmhouse — Spaces Architects@ka" };

export default function AravaliFarmhousePage() {
  return (
    <ProjectDetailPage
      currentId="aravali-farmhouse"
      title="Aravali Farmhouse"
      location="Gurgaon"
      hero={hero}
      photos={[img1, img2, img3, img4,img6, img7, img8, img9, img10, img11, img12]}
      details={{
        Project: "Aravali Farmhouse",
        Location: "Gurgaon",
        "Plot Area": "2 acres",
        "Built-up Area": "6,000 sq. ft.",
        Client: "Mr. Jan",
        Status: "Completed",
      }}
      description={[
        <>
          Set within a 2.1-acre corner site in the Aravalli Hills of Gurgaon, the farmhouse was conceived as a <Orange>private retreat</Orange> for a Belgian diplomatic couple, with distinct accommodation for guests. Responding closely to the natural contours of the site, the building is organized across two levels, with the primary living spaces and master suite above and three guest bedrooms below.
        </>,
        <>
          The architecture is defined by <Orange>simple geometric forms</Orange>, each corresponding to a specific function and creating a seamless transition between private and semi-private spaces. The swimming pool forms the heart of the composition, visually and physically connected to the master bedroom, living, dining and kitchen. <Orange>Curved and rectilinear volumes</Orange> frame the pool and landscape, while carefully choreographed arrival sequences reveal the building gradually along the contours of the site.
        </>,
        <>
          The farmhouse is an outward-looking composition where <Orange>architecture, landscape and geometry</Orange> come together to create an intimate yet expansive living experience.
        </>,
      ]}
    />
  );
}