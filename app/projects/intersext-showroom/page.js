import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/INTERSEXT-SHOWROOM/cover/HERO IMAGE.webp");
const photo1 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/1 Juxtaposed tile blocks protruding out depecting the concept of natural weathering of stones.webp");
const photo2 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/1 Transition from daylight to dark interiors.webp");
const photo3 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/10 Various Bar and Washroom Mockups with bright colours.webp");
const photo4 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/11 Open planning with visual connectivity between mockups.webp");
const photo5 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/12 Architect_s Display Area, where a person can create a concept for his space with ease in temperature changing lights.webp");
const photo6 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/13 Mockup of a lounge with large format slim tiles and wallpaper on ceiling.webp");
const photo7 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/15 Washroom Mockup concept created with large format slim tiles and wallpapers.webp");
const photo8 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/17 Classic open washroom concept in shades of grey and maple wood.webp");
const photo9 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/18 Customised panels to display highlighter tiles.webp");
const photo10 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/2 Cantilevered Glass box extends to the landscape to create a connectivity between the interiors and the exterios.webp");
const photo11 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/3 Double height reception with a backlit concept sketch to create a sense of volume.webp");
const photo12 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/3a Volume of Double height space.webp");
const photo13 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/3b Double Height & Glass box connecting the interiors to the exteriors.webp");
const photo14 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/4 Facade with its context 2.webp");
const photo15 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/4 Various kinds of display cassettes to accomodate different sizes of tiles.webp");
const photo16 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/5 Niches on walls and hanging MS frames to display decor tiles.webp");
const photo17 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/6 Open central aisle with display areas on either sides.webp");
const photo18 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/7 Customised abstract MS discussion tables.webp");
const photo19 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/8 Dark interiors with spots of light over tiles to create a feeling of being in a museum.webp");
const photo20 = assetImage("projects/INTERSEXT-SHOWROOM/photographs/8 Landscape design created using water jet cut tiles.webp");
export const metadata = { title: "Intersekt Tiles Showroom — Spaces Architects@ka" };
export default function IntersextShowroomPage() {
  return <ProjectDetailPage title="Intersekt Tiles Showroom" location="Okhla, New Delhi" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20]} details={{ Project: "Intersekt Tiles Showroom", Location: "Okhla, New Delhi", "Site Area": "1000 sq. mtr", Client: "Mr. Raman Arora", Status: "Completed" }} description={["This project transforms a warehouse, used for over 15 years, into a tile showroom, office and experience centre. Structural strengthening prepared the heavily loaded building for its new life.", "Conceived as a museum of tiles rather than a conventional retail space, the design tests the material across floors, walls, ceilings, installations, furniture and lighting. The facade expresses the natural weathering of stone through layered, juxtaposed volumes clad in large-format slim tiles.", "A double-height arrival space connects the showroom levels. Inside, display cassettes, dark tiled partitions, focused lighting and material mock-ups turn the building into an immersive environment for discovering tile beyond the conventional surface."]} />;
}
