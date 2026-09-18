import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/cover/Cover Image.webp");
const photo1 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/1.webp");
const photo2 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/2.webp");
const photo3 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/3.webp");
const photo4 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/4.webp");
const photo5 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/5.webp");
const photo6 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/6.webp");
const photo7 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/7.webp");
const photo8 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/8.webp");
const photo9 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/9.webp");
const photo10 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/10.webp");
const photo11 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/11.webp");
const photo12 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/12.webp");
const photo13 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/13.webp");
const photo14 = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/14.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Legend Veneer Exhibition Stall — Spaces Architects@ka" };
export default function LegendVeneerExhibitionMumbaiPage() {
  return (
    <ProjectDetailPage
      title="Legend Veneer Exhibition Stall"
      location="Mumbai, Maharashtra"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14]}
      details={{
        Project: "Legends Veneer Exhibition Stall",
        Location: "Mumbai, Maharashtra",
        Client: "Legend Veneers",
        Status: "Completed",
      }}
      description={[
        <>
          The design of the Legend Veneers stall was guided by three key criteria: <Orange>understanding, usage and experience</Orange>. The process began with an in-depth study of veneers—their types, sizes and finishes—supported by visits to the production unit and warehouse to understand the company&rsquo;s ideology and the material itself.
        </>,
        <>
          The second aspect, usage, explored veneer beyond its conventional role as a surface finish. <Orange>A 1 mm paper veneer</Orange>, for instance, was demonstrated not only as a product but through its application on a <Orange>fluid reception table</Orange>, showcasing its versatility.
        </>,
        <>
          The third aspect, experience, shaped the visitor&rsquo;s journey through the stall, divided into two zones. Zone One began with a narrow entry framed by <Orange>three abstract veneer panels</Orange>, while suspended wooden elements formed an <Orange>inverted iceberg</Orange> overhead. At the centre, continuous veneer panels flowed from the floor onto the walls and ceiling, creating a sculptural installation that revealed a new perspective with every step. <Orange>A Veneer Man</Orange> was introduced as a mascot and an unconventional interpretation of the material.
        </>,
        <>
          Zone Two served as the discussion and display area, showcasing <Orange>large-format veneers alongside flush boards, doors and samples</Orange>. The stall was conceived as more than a product display—it became a journey of understanding, experiencing and discovering the possibilities of veneer.
        </>,
      ]}
    />
  );
}