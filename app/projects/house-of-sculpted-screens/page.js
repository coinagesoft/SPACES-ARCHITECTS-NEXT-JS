import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

// No separate cover folder for this project yet, so photographs/1.webp is the hero
const hero = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/1.webp");

const photo1 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/1.webp");
const photo2 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/2.webp");
const chatgptImage = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/ChatGPT Image Aug 27, 2026, 01_54_15 PM.webp");
const poeticHouse = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/poetic house _page-0001.webp");
const whatsapp1 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/WhatsApp Image 2026-08-27 at 12.58.08.webp");
const whatsapp2 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/WhatsApp Image 2026-08-27 at 13.01.12.webp");

export const metadata = { title: "House of Sculpted Screens — Spaces Architects@ka" };

export default function HouseOfSculptedScreensPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-sculpted-screens"
      title="House of Sculpted Screens"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        photo1, whatsapp2,
        poeticHouse, chatgptImage,
        photo2, whatsapp1,
      ]}
      details={{
        Project: "House of Sculpted Screens",
        Location: "Janakpuri, New Delhi",
        Client: "Mr. Namit Ajmani",
        Status: "Completed",
      }}
      description={[
        <>
          <strong>House of Sculpted Screens</strong> is a contemporary Delhi residence shaped by fluid forms, sculpted arches and custom-crafted timber screens. The façade replaces rigid geometry with organic curves, creating deep openings, planted balconies and shaded pockets that bring landscape into the architecture.
        </>,
        <>
          A defining feature is the <strong>undulating timber screen</strong>, designed as a series of curved vertical fins that provide privacy and solar control while becoming a sculptural element of the façade. The contrast between pale textured surfaces, warm timber and lush greenery creates a tactile, contemporary character.
        </>,
        <>
          And perhaps the most personal expression of the project came from the client himself. After the completion of the house, he asked the architect for a signature and chose to have it inscribed on the façade. More than an architectural detail, it became a deeply meaningful gesture of trust, an acknowledgement that the home represents not only a physical space, but also a shared creative journey.
        </>,
        <>
          <strong>The house explores how form, craft, light and landscape can come together to create an architecture that feels both expressive and deeply personal.</strong>
        </>,
      ]}
    />
  );
}