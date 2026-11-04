import ProjectDetailPage from "../ProjectDetailPage";
import { mobileCover } from "@/config/mobileCovers";
import { assetImage } from "@/config/assets";
import { projectMetadata } from "@/config/seo";

export const metadata = projectMetadata("house-of-blue-courtyard");

const hero = assetImage("projects/THE-BLUE-COURTYARD/cover/hero (1).webp");
const skyHero = assetImage("projects/THE-BLUE-COURTYARD/cover/hero (1).webp");

const facadeFront = assetImage("projects/THE-BLUE-COURTYARD/3_4/Front view of facade.webp");
const facadeEvening = assetImage("projects/THE-BLUE-COURTYARD/3_4/facade evening view.webp");
const heroImage = assetImage("projects/THE-BLUE-COURTYARD/3_4/Hero Image.webp");
const courtyard2 = assetImage("projects/THE-BLUE-COURTYARD/3_4/Courtyard view 2.webp");
const poolView = assetImage("projects/THE-BLUE-COURTYARD/3_4/pool view from staircase.webp");
const livingRoom = assetImage("projects/THE-BLUE-COURTYARD/3_4/living room.webp");
const casualLounge = assetImage("projects/THE-BLUE-COURTYARD/3_4/casual lounge.webp");
const corridorGround = assetImage("projects/THE-BLUE-COURTYARD/3_4/corridor view-ground floor.webp");
const staircase = assetImage("projects/THE-BLUE-COURTYARD/3_4/staircase view.webp");
const staircaseDining = assetImage("projects/THE-BLUE-COURTYARD/3_4/staircase view from dining.webp");
const corridorFirst = assetImage("projects/THE-BLUE-COURTYARD/3_4/Corridor view-first floor.webp");
const sonBedroom = assetImage("projects/THE-BLUE-COURTYARD/3_4/Son_s bedroom first floor.webp");
const guestBedroom = assetImage("projects/THE-BLUE-COURTYARD/3_4/Guest Bedroom-First floor.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export default function HouseOfBlueCourtyardPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-blue-courtyard"
      title="House of Blue Courtyard"
      location="Vasant Kunj, New Delhi"
      hero={hero}
      mobileHero={mobileCover("house-of-blue-courtyard")}
      // Order: exterior -> courtyard -> living spaces -> circulation -> bedrooms
      photos={[
        facadeFront,
        facadeEvening,
        heroImage,
        courtyard2,
        poolView,
        livingRoom,
        casualLounge,
        corridorGround,
        staircase,
        staircaseDining,
        corridorFirst,
        sonBedroom,
        guestBedroom,
      ]}
      details={{
        Project: "House of Blue Courtyard",
        Location: "Vasant Kunj, New Delhi",
        "Plot Area": "10,000 sq. ft.",
        "Built-up Area": "18,000 sq. ft.",
        Client: "Mr. Amit Talwar",
        Status: "Completed",
      }}
      description={[
        <>
          Located in Vasant Kunj, Blue Courtyard House is conceived around the idea of a private courtyard as the home&apos;s central spatial and visual anchor. <Orange>The architecture turns inward, creating a sequence of open and enclosed spaces where sky, landscape and daylight become part of the interior experience</Orange>. Large, glazed openings blur the edges between the courtyard and the living spaces, while planted ledges and open-to-sky volumes introduce a sense of permeability throughout the house.
        </>,
        <>
          The interiors follow a <Orange>quiet contemporary palette of warm neutrals, timber and stone, punctuated by sculptural furniture, bespoke lighting and carefully composed artwork</Orange>. A striking mosaic feature in the bathroom and layered geometric wall treatments add moments of expression against the restrained material backdrop. Across the residence, the design balances openness with intimacy, using the courtyard not simply as an outdoor space, but as a recurring architectural element that connects the home to light, air and nature.
        </>,
      ]}
    />
  );
}