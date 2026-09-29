import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/THE GARDEN HOUSE/COVER/COVER.webp");
const photo1 = assetImage("projects/THE GARDEN HOUSE/3_4/1.webp");
const photo2 = assetImage("projects/THE GARDEN HOUSE/3_4/2.webp");
const photo3 = assetImage("projects/THE GARDEN HOUSE/3_4/3.webp");
const photo4 = assetImage("projects/THE GARDEN HOUSE/3_4/4.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "The Garden House — Spaces Architects@ka" };

export default function TheGardenHousePage() {
  return (
    <ProjectDetailPage
      currentId="the-garden-house"
      title="The Garden House"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4]}
      details={{
        Project: "The Garden House",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Gurdeep Singh",
        Status: "On-Going",
      }}
      description={[
        <>
          Set within one of Noida's most coveted neighbourhoods, The Garden House is a residence for a family of four shaped by its naturally green surroundings. The abundance of landscape on site became the starting point for a home that seeks to <Orange>dissolve the boundary between architecture and garden.</Orange>
        </>,
        <>
          The facade is composed in earthy tones and natural stone, softened by fluid curves, rounded edges, deep overhangs and integrated planting. Landscape moves vertically across terraces and balconies, allowing greenery to become an intrinsic part of the architecture rather than a layer added to it. <Orange>The result is a residence that feels organic, grounded and quietly sculptural: a house conceived as an extension of the garden it inhabits.</Orange>
        </>,
      ]}
    />
  );
}