import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/6.webp");
const photo1 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/1.webp");
const photo2 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/2.webp");
const photo3 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/3.webp");
const photo4 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/4.webp");
const photo8 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/8.webp");
const photo9 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/9.webp");
const photo10 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/10.webp");
const photo11 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/11.webp");
const photo12 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/12.webp");
const photo13 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/13.webp");
const photo14 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/14.webp");
const photo15 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/15.webp");
const photo16 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/16.webp");
const photo17 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/17.webp");
const photo18 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/18.webp");
const photo19 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/19.webp");
const photo20 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/20.webp");
const photo21 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/21.webp");
const photo22 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/22.webp");
const photo23 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/23.webp");
const photo24 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/24.webp");
const photo25 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/25.webp");
const photo26 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/26.webp");
const photo27 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/27.webp");
const photo28 = assetImage("projects/HOUSE-AROUND-A-TREE/3_4/28.webp");
const coverPhoto1 = assetImage("projects/HOUSE-AROUND-A-TREE/cover/COVER.webp");
const coverPhoto2 = assetImage("projects/HOUSE-AROUND-A-TREE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "The House around a Tree — Spaces Architects@ka" };
export default function TheHouseAroundATreePage() {
  return (
    <ProjectDetailPage
      title="The House around a Tree"
      location="Vasant Vihar, New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo8, photo9, photo10,
        photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18,
        photo19, photo20, photo21, photo22, photo23, photo24, photo25,
        photo26, photo27, photo28,
        coverPhoto1, coverPhoto2,
      ]}
      details={{
        Project: "The House around a Tree",
        Location: "Vasant Vihar, New Delhi",
        Client: "Mr. Pushp Jain",
        Status: "Completed",
      }}
      description={[
        <>
          A contemporary residence thoughtfully designed <Orange>around an existing tree at the heart of its courtyard.</Orange> The architecture embraces the tree as a central spatial element, creating a strong connection between the interiors and the landscaped outdoors.
        </>,
        <>
          The design combines <Orange>natural stone, warm wood, black metal and expansive glazing,</Orange> creating a refined yet warm material palette. Large openings, internal courtyards and landscaped pockets bring in abundant natural light and greenery, while the tree becomes a constant visual anchor throughout the house.
        </>,
        <>
          The interiors continue this language with marble surfaces, timber ceilings, clean contemporary detailing and carefully curated artwork, <Orange>balancing luxury with a calm, nature-integrated living experience.</Orange>
        </>,
      ]}
    />
  );
}