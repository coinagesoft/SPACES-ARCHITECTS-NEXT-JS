import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/BANDIKUI-RAILWAY-STATION/cover/COVER.webp");
const photo1 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/1.webp");
const photo2 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/2.webp");
const photo3 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/3.webp");
const photo4 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/4.webp");
const photo5 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/5.webp");
const photo6 = assetImage("projects/BANDIKUI-RAILWAY-STATION/3_4/6.webp");
const coverPhoto2 = assetImage("projects/BANDIKUI-RAILWAY-STATION/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Bandikui Railway Station — Spaces Architects@ka" };
export default function BandikuiRailwayStationPage() {
  return (
    <ProjectDetailPage
      title="Bandikui Railway Station"
      location="Bandikui, Rajasthan"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        coverPhoto2,
      ]}
      details={{
        Project: "Bandikui Railway Station",
        Location: "Bandikui, Rajasthan",
        Client: "Government of Rajasthan",
        Status: "Completed",
      }}
      description={[
        <>
          The Railway Station is in the small and quiet yet heritage-laden town of Bandikui in Rajasthan. The main concept of the station building evolved from its site, location, and its material. The idea was to create an experience for the passengers to give them a glimpse of the city and its <Orange>rich history and culture under a roof.</Orange>
        </>,
        <>
          For this, certain elements were identified from the city and around- the Abhaneri Chand Baoli (the deepest stepwell), Mehandipur Balaji Temple, and Stonework from Sikandra (renowned for its beautiful stone carvings). The concept was scripted to bring out the best of the city&rsquo;s culture and history. The main façade of the building represents the inclined stepwell of Abhaneri, made with grey and red sandstones.
        </>,
        <>
          An intriguing aspect of the concept comes from the times of colonization. During the British era, <Orange>Bandikui was a major junction for British trade</Orange> which is visible in the city&rsquo;s architecture. To represent these times, wrought iron, as a material, is introduced in the concept. Adding another dimension to the experience is <Orange>a museum at the railway station.</Orange> This museum not only adds to the overall experience but enlightens the visitors as well about the history of the place.
        </>,
      ]}
    />
  );
}