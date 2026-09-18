import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/J-HOUSE/cover/COVER(1).webp");
const photo1 = assetImage("projects/J-HOUSE/photographs/01 Elevation.webp");
const photo2 = assetImage("projects/J-HOUSE/photographs/02 Elevation Detail.webp");
const photo3 = assetImage("projects/J-HOUSE/photographs/03 View of elevation from street.webp");
const photo4 = assetImage("projects/J-HOUSE/photographs/04 Elevation Detail.webp");
const photo5 = assetImage("projects/J-HOUSE/photographs/05 Elevation Detail.webp");
const photo6 = assetImage("projects/J-HOUSE/photographs/05 Natural light penetrating in interior space.webp");
const photo7 = assetImage("projects/J-HOUSE/photographs/06 Double heighted semi open terrace.webp");
const photo8 = assetImage("projects/J-HOUSE/photographs/07 Double heighted semi open terrace.webp");
const photo9 = assetImage("projects/J-HOUSE/photographs/08 Light and shadow in the space enhancing the experience.webp");
const photo10 = assetImage("projects/J-HOUSE/photographs/09 Wooden louvres in semi open terrace area.webp");
const photo11 = assetImage("projects/J-HOUSE/photographs/10 Family lounge space with abstract artwork.webp");
const photo12 = assetImage("projects/J-HOUSE/photographs/11 Triple height space reciving daylight from above.webp");
const photo13 = assetImage("projects/J-HOUSE/photographs/12 Dining area.webp");
const photo14 = assetImage("projects/J-HOUSE/photographs/13 Second floor lobby connected with terrace and triple height space.webp");
const photo15 = assetImage("projects/J-HOUSE/photographs/14 Play of light and shadows in the interiors.webp");
const photo16 = assetImage("projects/J-HOUSE/photographs/15 Second floor terrace area.webp");
const photo17 = assetImage("projects/J-HOUSE/photographs/16 Wooden louvers as shading device.webp");
const photo18 = assetImage("projects/J-HOUSE/photographs/17 Natural Light penetrating from the top and flowing into spaces through triple height space.webp");
const photo19 = assetImage("projects/J-HOUSE/photographs/18 play of light and shadow on rough texture of triple height space.webp");
const photo20 = assetImage("projects/J-HOUSE/photographs/19 Triple height space connected with bedroom.webp");
const photo21 = assetImage("projects/J-HOUSE/photographs/21 Light flowing in interior spaces.webp");
const photo22 = assetImage("projects/J-HOUSE/photographs/22 Bedroom.webp");
const photo23 = assetImage("projects/J-HOUSE/photographs/23 Family lounge space.webp");
const photo24 = assetImage("projects/J-HOUSE/photographs/24 Family lounge.webp");
const photo25 = assetImage("projects/J-HOUSE/photographs/25 Evening view of the house.webp");
const photo26 = assetImage("projects/J-HOUSE/photographs/Final render.webp");
const photo27 = assetImage("projects/J-HOUSE/photographs/J House Elevation.webp");
export const metadata = { title: "J House — Spaces Architects@ka" };

export default function JHousePage() {
  return <ProjectDetailPage title="J House" location="New Delhi" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25, photo26, photo27]} details={{ Project: "J House", Location: "New Delhi", Client: "Mr. Vikas Jain", Status: "Completed" }} description={["J House is a contemporary weekend home in Delhi, conceived as a simple yet distinctive family retreat. Set on an 1,800 sq. ft. plot and spanning approximately 5,000 sq. ft. across three levels, the residence explores an Indian modern architectural language through openness, connectivity and a restrained material palette.", "Open spaces and visual connections allow natural light and air to move through the house, while carefully positioned louvers and screens maintain privacy. The predominantly monochromatic interiors are punctuated by vibrant artwork and furniture.", "Carved-out volumes create terraces and intimate semi-private outdoor spaces. Custom timber and metal screens filter views, light and shadow, while the staircase, large glazed surfaces, wooden louvers and cantilevered roof define a home where privacy and openness coexist."]} />;
}
