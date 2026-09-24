import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HOUSE-IN-HARMONY/cover/COVER.webp");
// const photo1 = assetImage("projects/HOUSE-IN-HARMONY/3_4/1.webp");
const photo2 = assetImage("projects/HOUSE-IN-HARMONY/3_4/2.webp");
const photo3 = assetImage("projects/HOUSE-IN-HARMONY/3_4/3.webp");
const photo4 = assetImage("projects/HOUSE-IN-HARMONY/3_4/4.webp");
const photo5 = assetImage("projects/HOUSE-IN-HARMONY/3_4/5.webp");
const photo6 = assetImage("projects/HOUSE-IN-HARMONY/3_4/6.webp");
const photo7 = assetImage("projects/HOUSE-IN-HARMONY/3_4/7.webp");
const heroPhoto = assetImage("projects/HOUSE-IN-HARMONY/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "The House in Harmony — Spaces Architects@ka" };

export default function HouseInHarmonyPage() {
  return (
    <ProjectDetailPage
      currentId="house-in-harmony"
      title="The House in Harmony"
      location="New Delhi"
      hero={hero}
      photos={[
        photo2, photo3, photo4, photo5, photo6, photo7,
        
      ]}
      details={{
        Project: "The House in Harmony",
        Location: "New Delhi",
        Client: "Mr. Charanjit Arora",
        Status: "On-Going",
      }}
      description={[
        <>
          A thoughtfully designed 4 BHK residence spread across the third floor and terrace, envisioned as a sanctuary rooted <Orange>in harmony, spirituality, and a deep connection with nature.</Orange> The interiors balance warm natural materials, refined textures, and contemporary detailing to create spaces that feel calm, intimate, and timeless.
        </>,
        <>
          At the heart of the home is a dedicated <Orange>Zen space,</Orange> designed as a quiet retreat for meditation, reflection, and spiritual connection. The terrace extends this philosophy outdoors, creating a seamless relationship between <Orange>architecture, landscape, light, and sky.</Orange> Every space is conceived to encourage a slower, more mindful way of living where materiality, natural light, greenery, and proportion come together to create a sense of peace and balance.
        </>,
      ]}
    />
  );
}