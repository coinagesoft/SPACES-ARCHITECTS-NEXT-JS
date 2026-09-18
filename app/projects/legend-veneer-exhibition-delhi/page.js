import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
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
export const metadata = { title: "Legend Veneer Exhibition Stall — Spaces Architects@ka" };
export default function LegendVeneerExhibitionDelhiPage() {
  return <ProjectDetailPage title="Legend Veneer Exhibition Stall" location="New Delhi" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10]} details={{ Project: "Legend Veneer Exhibition Stall", Location: "New Delhi", Client: "Legend Veneers", Status: "Completed" }} description={["The Legend Veneers stall in New Delhi explores wood as both a material and an experience. A restrained charcoal-grey envelope creates a neutral backdrop for curated displays of veneers, plywood and flush doors.", "Timber panels rise vertically through the stall to form layers of display, movement and visual depth. A sculptural installation of suspended wooden fins follows fluid curves above, integrating linear lighting into the material.", "The journey moves between product galleries, open display areas and an intimate lounge, creating a tactile, warm and immersive exhibition environment where wood becomes the architecture itself."]} />;
}
