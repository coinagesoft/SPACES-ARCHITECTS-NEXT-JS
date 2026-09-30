import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/STONEX-INDIA-BUILDING/cover/Cover Image.webp");

const entrance = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Entrance.webp");
const bha2732 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2732.webp");
const bha2774 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2774.webp");
const bha2806 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2806.webp");
const bha2812 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2812-Recovered.webp");
const stonex = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Stonex.webp");
const sketch = assetImage("projects/STONEX-INDIA-BUILDING/photographs/sketch.webp");
const skinSection = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Skin Section.webp");
const panorama1 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Panorama-1.webp");
const panorama2 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Panorama-2.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Stonex India Building — Spaces Architects@ka" };

export default function StonexIndiaBuildingPage() {
  return (
    <ProjectDetailPage
      currentId="stonex-india-building"
      title="Stonex India Building"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        bha2732, bha2774,
        entrance,
        bha2806, sketch,
        skinSection, bha2812, stonex,
        panorama2, panorama1,
      ]}
      details={{
        Project: "Stonex India Building",
        Location: "New Delhi",
        Client: "Mr. R. C. Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Located along the busy stone market road, the Stonex India Building was conceived as a <Orange>brand landmark</Orange>—an identity expressed through architecture rather than signage. The façade deliberately avoids directly displaying the product, instead transforming stone and slim tiles into an <Orange>architectural artwork</Orange> that stands apart from its surroundings.
        </>,
        <>
          Three tile types are composed in <Orange>abstract patterns</Orange> and layered across multiple levels, creating a textured canvas that subtly incorporates the <Orange>client&apos;s vintage Ferrari brand icon.</Orange> The result is a dialogue between material, geometry and brand identity, with stone and slim tile working as a unified architectural language.
        </>,
        <>
          The façade continually transforms with changing light. Morning and midday shadows animate its tiled surface, while the evening sun reveals a softer character. After dusk, integrated <Orange>lighting exposes the concealed levels and creates a floating effect</Orange>, allowing the building to take on an entirely <Orange>new identity at night.</Orange>
        </>,
      ]}
    />
  );
}