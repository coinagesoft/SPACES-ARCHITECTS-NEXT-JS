import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/THE-URBAN-NEST/cover/COVER.webp");
const photo0 = assetImage("projects/THE-URBAN-NEST/3_4/0.webp");
const photo1 = assetImage("projects/THE-URBAN-NEST/3_4/1.webp");
const photo2 = assetImage("projects/THE-URBAN-NEST/3_4/2.webp");
const photo3 = assetImage("projects/THE-URBAN-NEST/3_4/3.webp");
const photo4 = assetImage("projects/THE-URBAN-NEST/3_4/4.webp");
// const photo5 = assetImage("projects/THE-URBAN-NEST/3_4/5.webp");
const photo6 = assetImage("projects/THE-URBAN-NEST/3_4/6.webp");
const photo7 = assetImage("projects/THE-URBAN-NEST/3_4/7.webp");
const photo8 = assetImage("projects/THE-URBAN-NEST/3_4/8.webp");
const photo9 = assetImage("projects/THE-URBAN-NEST/3_4/9.webp");
const photo10 = assetImage("projects/THE-URBAN-NEST/3_4/10.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "The Urban Nest — Spaces Architects@ka" };

export default function TheUrbanNestPage() {
  return (
    <ProjectDetailPage
      currentId="the-urban-nest"
      title="The Urban Nest"
      location="New Delhi"
      hero={hero}
      photos={[
        photo0, photo1, photo2, photo3, photo4, 
        photo6, photo7, photo8, photo9, photo10,
      ]}
      details={{
        Project: "The Urban Nest",
        Location: "New Delhi",
        "Plot Area": "35,000 sq. ft.",
        "Built-up Area": "1.25 lakh sq. ft.",
        Client: "Express Builders",
        Status: "Future",
      }}
      awards={[
        "WAF 2022 – Highly Commended, Future Project: Residential",
        "Loop Design Awards – Winner, 2023",
      ]}
      description={[
        <>
          Conceived as a <Orange>response to the mental and emotional pressures of student life,</Orange> The Urban Nest reimagines the conventional hostel as a <Orange>place of refuge, interaction and growth.</Orange> Located within an educational hub, the project challenges the monotony of dormitory architecture by ensuring no two floor levels are identical, creating a constantly changing spatial experience for its residents.
        </>,
        <>
          With only <Orange>37% ground coverage,</Orange> the challenge was to translate this idea vertically. Staggered recreational spaces, terrace gardens and integrated greenery break the building's mass while bringing nature into everyday life. Communal spaces encourage interaction, while varied spatial experiences allow students moments of both connection and retreat.
        </>,
        <>
          Designed around the tangible and intangible needs of students during their formative years, The Urban Nest promotes <Orange>mental well-being, communal living and sustainable habits.</Orange> More than accommodation, it is envisioned as a nurturing environment that expands perspectives and creates a positive experience through even the most challenging times.
        </>,
      ]}
    />
  );
}