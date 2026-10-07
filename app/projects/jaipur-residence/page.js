import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/JAIPUR-RESIDENCE/cover/COVER.webp");

const img1 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0001.webp");
const img2 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0003.webp");
const img3 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0004.webp");
const img4 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0005.webp");
const img5 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0006.webp");
const img6 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0007.webp");
const img7 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0013.webp");
const img8 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0014.webp");
const img9 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0019.webp");
const img10 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0020.webp");
const img11 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0024.webp");
const img12 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0025.webp");
const img13 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0026.webp");
const img14 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0027.webp");
const img15 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0038.webp");
const img16 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0042.webp");
const img17 = assetImage("projects/JAIPUR-RESIDENCE/photographs/BHA_0046.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Jaipur Residence — Spaces Architects@ka" };

export default function JaipurResidencePage() {
  return (
    <ProjectDetailPage
      currentId="jaipur-residence"
      title="Jaipur Residence"
      location="Jaipur, Rajasthan"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img3, img1, img2,
        img4, img7,
        img6,
        img13, img11, img5,
        img12, img16,
        img15,
        img8, img9, img14,
        img10, img17,
      ]}
      details={{
        Project: "Jaipur Residence",
        Location: "Jaipur, Rajasthan",
        "Plot Area": "3,200 sq. ft.",
        "Built-up Area": "11,500 sq. ft.",
        Client: "Mrs. Malu",
        Status: "Completed",
      }}
      description={[
        <>
          Set in Jaipur, this residence brings together <Orange>Rajasthani heritage and contemporary expression</Orange>, weaving carved <Orange>jaalis, arches and ethnic motifs</Orange> into a modern spatial language. The lower levels retain a sense of warmth and tradition, while the upper floor takes a deliberate departure for the young son, adopting a <Orange>bold black-and-white palette</Orange> that gives the home a more youthful and individual character.
        </>,
        <>
          The interiors continue this dialogue through contrasting moods. A warm, neutral formal living room combines plush furnishings, filtered daylight and a cascading chandelier, while the kitchen introduces a sleek monochrome language with high-gloss finishes and a seamless connection to the dining space. Above, the son&apos;s lounge embraces geometric lighting, circular mirrors and contemporary furniture, creating an energetic counterpoint to the heritage-inspired spaces below.
        </>,
        <>
          A landscaped terrace garden crowns the residence, bringing nature into the composition and completing its <Orange>balance of tradition, individuality and contemporary living.</Orange>
        </>,
      ]}
    />
  );
}