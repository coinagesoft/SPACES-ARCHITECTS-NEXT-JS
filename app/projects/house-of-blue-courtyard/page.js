import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/THE-BLUE-COURTYARD/cover/cover.webp");
const skyHero = assetImage("projects/THE-BLUE-COURTYARD/cover/hero (1).webp");

const img1 = assetImage("projects/THE-BLUE-COURTYARD/3_4/1.webp");
const img2 = assetImage("projects/THE-BLUE-COURTYARD/3_4/2.webp");
const img3 = assetImage("projects/THE-BLUE-COURTYARD/3_4/3.webp");
const img4 = assetImage("projects/THE-BLUE-COURTYARD/3_4/4.webp");
const img5 = assetImage("projects/THE-BLUE-COURTYARD/3_4/5.webp");
const img6 = assetImage("projects/THE-BLUE-COURTYARD/3_4/6.webp");
const img7 = assetImage("projects/THE-BLUE-COURTYARD/3_4/7.webp");
const img8 = assetImage("projects/THE-BLUE-COURTYARD/3_4/8.webp");
const img9 = assetImage("projects/THE-BLUE-COURTYARD/3_4/9.webp");
const img10 = assetImage("projects/THE-BLUE-COURTYARD/3_4/10.webp");
const img11 = assetImage("projects/THE-BLUE-COURTYARD/3_4/11.webp");
const img12 = assetImage("projects/THE-BLUE-COURTYARD/3_4/12.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "House of Blue Courtyard — Spaces Architects@ka" };

export default function HouseOfBlueCourtyardPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-blue-courtyard"
      title="House of Blue Courtyard"
      location="Vasant Kunj, New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img2,
        img3, img8, img9,
        img7,
        img10, img4, img5,
        img11, img12,
        img6, skyHero,
      ]}
      details={{
        Project: "House of Blue Courtyard",
        Location: "Vasant Kunj, New Delhi",
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