import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HOUSE-OF-DANCING-SCREENS/cover/COVER.webp");

const photo1 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1643.webp");
const photo2 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1648.webp");
const photo3 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1659 .webp");
const photo4 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1668.webp");
const photo5 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1692.webp");
const photo6 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1707.webp");
const photo7 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1734.webp");
const photo8 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1738.webp");
const photo9 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1741.webp");
const photo10 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1748.webp");
const photo11 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1771.webp");
const photo12 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1782.webp");
const photo13 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1798.webp");
const photo14 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1807.webp");
const photo15 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1824.webp");
const photo16 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1829.webp");
const photo17 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1831.webp");
const photo18 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1840.webp");
const photo19 = assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1843.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "House of Dancing Screens — Spaces Architects@ka" };

export default function HouseOfDancingScreensPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-dancing-screens"
      title="House of Dancing Screens"
      location="Ambala"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        photo2, photo3,
        photo1,
        photo5, photo4,
        photo13, photo12,
        photo19, photo18,
        photo7,
        photo6, photo9, photo8,
        photo17, photo15, photo16,
        photo14,
        photo10, photo11,
      ]}
      details={{
        Project: "House of Dancing Screens",
        Location: "Ambala, Haryana",
        "Gross Built Area (m2/ft2)": "11,500 Sq. Ft",
        "Completion Year": "2024",
        Status: "Completed",
      }}
      description={[
        <>
          True to its name, the House of Dancing Screens is defined by pivoting screens that transform with movement, privacy and light. More than partitions, these fluid elements choreograph the house—rotating effortlessly with the wind to create an ever-changing interplay of <Orange>function, form and movement</Orange>.
        </>,
        <>
          Conceived as an <Orange>open-plan home</Orange>, each level responds to the lifestyles of its occupants, with a family lounge acting as its social heart and private bedrooms extending towards individual balconies. On the ground floor, the formal lounge, drawing and dining spaces converge around a <Orange>triple-height cut-out</Orange>, illuminated throughout the day. A gracefully curved staircase rises through this void, becoming the <Orange>architectural thread connecting all three levels</Orange> and their lounges. The master and parents&apos; bedrooms open towards private landscaped areas, while the kitchen connects to a sunlit front lawn.
        </>,
        <>
          The first floor belongs to the younger generation, with a shared lounge, bedrooms and guest room. Their interiors reflect contrasting personalities—a <Orange>pink-and-white palette for the daughter and earthy tones for the son</Orange>—while vibrant colours continue to define the home&apos;s individual spaces.
        </>,
        <>
          The upper level brings the family together through a gym, terrace gardens, rooftop pool and entertainment lounge, with dancing screens extending into the terrace landscape. Here, <Orange>architecture becomes dynamic—constantly shifting with light, breeze and the rhythms of family life.</Orange>
        </>,
      ]}
    />
  );
}