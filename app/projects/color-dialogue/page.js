import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/COLOR-DIALOGUE/cover/COVER.webp");

const img1 = assetImage("projects/COLOR-DIALOGUE/3_4/1.webp");
const img2 = assetImage("projects/COLOR-DIALOGUE/3_4/2.webp");
const img3 = assetImage("projects/COLOR-DIALOGUE/3_4/3.webp");
const img4 = assetImage("projects/COLOR-DIALOGUE/3_4/4.webp");
const img5 = assetImage("projects/COLOR-DIALOGUE/3_4/5.webp");
const img6 = assetImage("projects/COLOR-DIALOGUE/3_4/6.webp");
const img7 = assetImage("projects/COLOR-DIALOGUE/3_4/7.webp");
const img8 = assetImage("projects/COLOR-DIALOGUE/3_4/8.webp");
const img9 = assetImage("projects/COLOR-DIALOGUE/3_4/9.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Colour Dialogue — Spaces Architects@ka" };

export default function ColorDialoguePage() {
  return (
    <ProjectDetailPage
      currentId="color-dialogue"
      title="Colour Dialogue"
      location="Noida, Uttar Pradesh"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img5,
        img2, img3, img4,
        img8,
        img6, img7,
        img9,
      ]}
      details={{
        Project: "Colour Dialogue",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Vinay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          This 3BHK apartment <Orange>brings together modernism, elegance, and minimalism</Orange> in a warm contemporary setting. A refined palette of natural wood, stone, soft fabrics, and brass accents creates a cohesive and timeless character throughout the home.
        </>,
        <>
          <Orange>Bold artwork, patterned wallpapers, sculptural furniture, and expressive colours introduce moments of visual interest against the restrained material palette.</Orange> The living and dining areas flow seamlessly into one another, creating an open and connected sense of space.
        </>,
        <>
          Generous bedroom windows bring in abundant natural light and connect the interiors to the surrounding views. Through a balance of materiality, colour, texture, and carefully curated details, the home <Orange>creates an inviting atmosphere that feels sophisticated, comfortable, and distinctly personal.</Orange>
        </>,
      ]}
    />
  );
}