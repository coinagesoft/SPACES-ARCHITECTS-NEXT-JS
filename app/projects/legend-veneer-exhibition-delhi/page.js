import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";
const hero = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/cover/HERO.webp");
const photo1 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1919.webp");
const photo2 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1922.webp");
const photo3 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1925.webp");
const photo4 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1931.webp");
const photo5 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1937.webp");
const photo6 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1943.webp");
const photo7 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1969.webp");
const photo8 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_1994.webp");
const photo9 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_2009.webp");
const photo10 = assetImage("projects/LEGEND-VENEER-EXHIBITION-DELHI/photographs/BHA_2012.webp");
const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Legend Veneer Exhibition Stall — Spaces Architects@ka" };

export default function LegendVeneerExhibitionDelhiPage() {
  return (
    <ProjectDetailPage
      currentId="legend-veneer-exhibition-delhi"
      title="Legend Veneer Exhibition Stall"
      location="New Delhi"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10]}
      details={{
        Project: "Legends Veneer Exhibition Stall",
        Location: "New Delhi",
        Client: "Legend Veneers",
        Status: "Completed",
      }}
      description={[
        <>
          The design of the Legend Veneers stall in New Delhi was conceived as an exploration of wood as both a material and an experience. Rather than functioning as a conventional product display, the stall uses the material itself to shape the architecture, circulation and identity of the space.
        </>,
        <>
          The design begins with a restrained <Orange>charcoal-grey envelope</Orange>, creating a neutral backdrop against which the <Orange>extensive range of veneers, plywood and flush doors</Orange> can take centre stage. Product displays are treated as curated compositions, with varied grains, textures, patterns and finishes arranged across the walls to allow visitors to compare and understand the material closely.
        </>,
        <>
          At the heart of the stall, <Orange>timber panels</Orange> rise vertically and unfold through the space, creating layers of display, movement and visual depth. Above, a <Orange>sculptural installation of suspended wooden fins</Orange> follows fluid curves, introducing a sense of movement while integrating linear lighting within the material. The intervention transforms the ceiling into an extension of the product experience.
        </>,
        <>
          The journey moves between focused product galleries, open display areas and a more intimate lounge, allowing the stall to transition naturally from <Orange>discovery to conversation</Orange>. Graphic storytelling, material samples and framed narratives further communicate the applications and character of veneer.
        </>,
        <>
          The result is a material-driven exhibition environment where wood is not simply displayed—it becomes the architecture itself, creating a <Orange>tactile, warm and immersive experience</Orange> within the otherwise dark and restrained setting of the exhibition hall.
        </>,
      ]}
    />
  );
}