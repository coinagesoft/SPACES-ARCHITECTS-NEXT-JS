import ProjectDetailPage from "../ProjectDetailPage";
import { mobileCover } from "@/config/mobileCovers";
import { assetImage } from "@/config/assets";
import { projectMetadata } from "@/config/seo";

export const metadata = projectMetadata("jaipur-residence");

const hero = assetImage("projects/JAIPUR-RESIDENCE/cover/COVER.webp");

// Gallery images, in display order. Reorder the numbers to change the order.
// (6, 9 and 11 don't exist on the server, so they're skipped.)
const photoNumbers = [1, 2, 3, 4, 5, 7, 8, 10, 12, 13, 14, 15, 16, 17];

const photos = photoNumbers.map((n) =>
  assetImage(`projects/JAIPUR-RESIDENCE/photographs/${n}.webp`)
);

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export default function JaipurResidencePage() {
  return (
    <ProjectDetailPage
      currentId="jaipur-residence"
      title="Jaipur Residence"
      location="Jaipur, Rajasthan"
      hero={hero}
      mobileHero={mobileCover("jaipur-residence")}
      photos={photos}
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