import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HERITAGE-PARK/cover/Cover Image.webp");

const img1 = assetImage("projects/HERITAGE-PARK/photographs/edited 1.webp");
const img2 = assetImage("projects/HERITAGE-PARK/photographs/edited 2.webp");
const img3 = assetImage("projects/HERITAGE-PARK/photographs/edited 3.webp");
const img4 = assetImage("projects/HERITAGE-PARK/photographs/edited 4.webp");
const img5 = assetImage("projects/HERITAGE-PARK/photographs/edited 5.webp");
const img6 = assetImage("projects/HERITAGE-PARK/photographs/edited 6.webp");
const img7 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 7.webp");
const img8 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 8.webp");
const img9 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 9.webp");
const img10 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 10.webp");
const img11 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 11.webp");
const img12 = assetImage("projects/HERITAGE-PARK/photographs/EDITED 12.webp");
const img14 = assetImage("projects/HERITAGE-PARK/photographs/edited 14.webp");
const axonometricView = assetImage("projects/HERITAGE-PARK/photographs/AXONOMETRIC VIEW.webp");
const formDevelopmentDiagram = assetImage("projects/HERITAGE-PARK/photographs/FORM DEVELOPMENT DIAGRAM (3).webp");
const panorama = assetImage("projects/HERITAGE-PARK/photographs/Panorama-1 .webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Heritage Park — Spaces Architects@ka" };

export default function HeritageParkPage() {
  return (
    <ProjectDetailPage
      currentId="heritage-park"
      title="Heritage Park"
      location="Old Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img2, img3,
        img1,
        axonometricView, formDevelopmentDiagram,
        img6,
        img4, img7,
        img8, img9, img10,
        img11,
        img12, img14,
        img5,
        panorama,
      ]}
      details={{
        Project: "Heritage Park",
        Location: "Chandni Chowk, Old Delhi",
        "Site Area": "1.83 acres",
        Client: "MCD",
        Status: "Completed",
      }}
      awards={[
        "IIA Award for Heritage – Winner, 2022",
      ]}
      publications={[
        "Hindustan Times",
        "The Indian Express",
        "Times of India",
        "India Today",
        "The New Indian Express",
        "The Print / ANI",
        "ABP Live",
        "NDTV",
        "Curly Tales",
        "Rashtrapati Bhawan",
      ]}
      recognition={"The Heritage Park is the Mughal Garden of Chandni Chowk – Ex Hon’ble President Shri Ram Nath Kovind"}
      description={[
        <>
          Set opposite the Red Fort in the heart of Old Delhi, Heritage Park is a landscape redevelopment conceived as a <Orange>contemporary escape rooted in the city&apos;s history</Orange>. Framed by panoramic views of the Red Fort and Jama Masjid, the park brings together <Orange>Mughal and Hindu architectural influences</Orange> through a distinctly vernacular material language.
        </>,
        <>
          The park unfolds across two zones—a <Orange>hardscape entry and landscaped garden</Orange>. The journey begins at a boundary wall of red sandstone arches and Delhi stone, leading to a shaded public precinct with traditional shops, eateries and views towards the Red Fort. Beyond it, a central walkway connects three destinations: the <Orange>Baradari, sunken seating and open-air amphitheatre</Orange>, creating a continuous sequence of gathering spaces.
        </>,
        <>
          A <Orange>Mughal-inspired garden</Orange>, white-stone Baradari and integrated seating are composed within abundant greenery, preserving the site&apos;s lush character and evoking the familiarity of long, leisurely picnics. A stage anchors the amphitheatre while maintaining a visual connection across the park.
        </>,
        <>
          The material palette remains deliberately <Orange>vernacular—Delhi stone, red sandstone and White Statuario marble</Orange>—echoing the architectural vocabulary of the Red Fort and Chandni Chowk. Traditional materials are reinterpreted through contemporary detailing and construction, allowing the park to preserve the cultural memory of its setting while giving it a <Orange>renewed public life</Orange>.
        </>,
      ]}
    />
  );
}