import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/LAHORI-GATE-MUSEUM/cover/Cover Image.webp");

const img1 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/1.webp");
const img2 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/2.webp");
const img3 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/3.webp");
const img4 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/4.webp");
const img5 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/5.webp");
const img6 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/6.webp");
const img7 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/7.webp");
const img8 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/8.webp");
const img9 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/9.webp");
const img10 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/10.webp");
const img11 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/11.webp");
const img12 = assetImage("projects/LAHORI-GATE-MUSEUM/3_4/12.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Lahori Gate Museum — Spaces Architects@ka" };

export default function LahoriGateMuseumPage() {
  return (
    <ProjectDetailPage
      currentId="lahori-gate-museum"
      title="Lahori Gate Museum"
      location="Old Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img3, img4,
        img7, img8,
        img6,
        img2, img5, img9,
        img10, img11,
        img12,
      ]}
      details={{
        Project: "Lahori Gate Museum",
        Location: "Old Delhi",
        Client: "MCD",
        Status: "Completed",
      }}
      publications={[
        "Times of India",
        "Hindustan Times",
        "The Architecture & Planning News",
        "Tehelka",
        "Dainik Jagran",
        "Young Intach",
      ]}
      description={[
        <>
          Located in the historic fabric of Chandni Chowk, the Museum restores and reimagines a century-old structure as an immersive journey through the cultural memory of Old Delhi. The project preserves the architectural character of the building while transforming it into a space for experiencing the many layers of <Orange>Chandni Chowk’s history, traditions and everyday life</Orange>.
        </>,
        <>
          The museum unfolds through a series of themed sections exploring Old Delhi’s architecture, transport, Khari Baoli’s spices, the Red Fort, religious diversity, kite flying and the Ghantaghar. Recreated haveli interiors offer glimpses into the architectural character of the <Orange>Walled City</Orange>, while dedicated spaces celebrate its poetry, literature and traditional handicrafts. A cafeteria serving local delicacies further extends the experience beyond exhibition.
        </>,
        <>
          More than a collection of artefacts, the museum is conceived as a <Orange>living archive of Chandni Chowk</Orange>, translating its sights, colours, flavours and cultural diversity into a contemporary visitor experience while helping preserve and share the heritage of Old Delhi.
        </>,
      ]}
    />
  );
}