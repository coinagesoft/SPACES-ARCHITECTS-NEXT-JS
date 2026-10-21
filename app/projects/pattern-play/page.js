import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

// The file in the folder is named "COVER (1)", so the path keeps the "(1)"
const hero = assetImage("projects/PATTERN-PLAY/cover/COVER (1).webp");

const img1 = assetImage("projects/PATTERN-PLAY/3_4/1.webp");
const img2 = assetImage("projects/PATTERN-PLAY/3_4/2.webp");
const img3 = assetImage("projects/PATTERN-PLAY/3_4/3.webp");
const img4 = assetImage("projects/PATTERN-PLAY/3_4/4.webp");
const img5 = assetImage("projects/PATTERN-PLAY/3_4/5.webp");
const img6 = assetImage("projects/PATTERN-PLAY/3_4/6.webp");
const img7 = assetImage("projects/PATTERN-PLAY/3_4/7.webp");
const img8 = assetImage("projects/PATTERN-PLAY/3_4/8.webp");
const img9 = assetImage("projects/PATTERN-PLAY/3_4/9.webp");
const img10 = assetImage("projects/PATTERN-PLAY/3_4/10.webp");
const img11 = assetImage("projects/PATTERN-PLAY/3_4/11.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Pattern Play — Spaces Architects@ka" };

export default function PatternPlayPage() {
  return (
    <ProjectDetailPage
      currentId="pattern-play"
      title="Pattern Play"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img3, img6,
        img2, img4,
        img7,
        img5, img8, img11,
        img9, img10,
      ]}
      details={{
        Project: "Pattern Play",
        Location: "New Delhi",
        "Built-up Area": "2,100 sq. ft.",
        Client: "Mr. Vipul Jain",
        Status: "Completed",
      }}
      description={[
        <>
          Pattern Play is a <Orange>3 BHK apartment</Orange> that explores pattern, colour, texture and material as a cohesive design language. <Orange>Bold geometric upholstery, graphic rugs, patterned cabinetry and expressive artwork</Orange> bring rhythm and personality to the interiors, while recurring colours create continuity across spaces.
        </>,
        <>
          A warm palette of <Orange>natural wood, marble, textured walls, brass, metal and layered fabrics</Orange> balances the stronger patterns. Fluted timber and linear wall details introduce subtle repetition, while curved furniture and architectural elements soften the geometry.
        </>,
        <>
          Each room carries its own character from the vibrant turquoise and mustard accents in the living areas to the deeper blue of the bedroom yet remains connected through a consistent material and colour palette.
        </>,
        <>
          The result is a playful, layered home where <Orange>pattern is not merely decorative, but becomes an integral part of the interior architecture</Orange>.
        </>,
      ]}
    />
  );
}