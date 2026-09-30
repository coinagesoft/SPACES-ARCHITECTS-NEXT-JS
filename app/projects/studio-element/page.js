import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/STUDIO-ELEMENT/cover/Cover Image.webp");
const coverHero = assetImage("projects/STUDIO-ELEMENT/cover/Hero Image.webp");

const img1 = assetImage("projects/STUDIO-ELEMENT/3_4/1.webp");
const img2 = assetImage("projects/STUDIO-ELEMENT/3_4/2.webp");
const img3 = assetImage("projects/STUDIO-ELEMENT/3_4/3.webp");
const img4 = assetImage("projects/STUDIO-ELEMENT/3_4/4.webp");
const img5 = assetImage("projects/STUDIO-ELEMENT/3_4/5.webp");
const img6 = assetImage("projects/STUDIO-ELEMENT/3_4/6.webp");
const img7 = assetImage("projects/STUDIO-ELEMENT/3_4/7.webp");
const img8 = assetImage("projects/STUDIO-ELEMENT/3_4/8.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Studio Element — Spaces Architects@ka" };

export default function StudioElementPage() {
  return (
    <ProjectDetailPage
      currentId="studio-element"
      title="Studio Element"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img2, img3,
        img4, img6,
        img8, img5, img7,
        coverHero,
      ]}
      details={{
        Project: "Studio Element",
        Location: "New Delhi",
        Client: "Pramod Builders",
        Status: "Completed",
      }}
      description={[
        <>
          The office interior was conceived as a <Orange>lively and interactive workplace</Orange>, with collaborative spaces distributed throughout to encourage engagement and interaction. Its language is defined by exposed raw materials—<Orange>AAC blocks, birch ply and steel bars</Orange>—reflecting the company’s emphasis on <Orange>clean and safe construction</Orange>.
        </>,
        <>
          An overall sense of <Orange>openness and transparency</Orange> creates a welcoming and energising environment for both employees and visitors. Despite its conventional office typology, the combination of raw materials and interactive spaces gives the workplace a distinctive and dynamic character.
        </>,
      ]}
    />
  );
}