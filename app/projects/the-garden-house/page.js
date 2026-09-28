import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SOLANCE-APARTMENT/cover/COVER.webp");
const photo1 = assetImage("projects/SOLANCE-APARTMENT/3_4/1.webp");
const photo2 = assetImage("projects/SOLANCE-APARTMENT/3_4/2.webp");
const photo3 = assetImage("projects/SOLANCE-APARTMENT/3_4/3.webp");
const photo4 = assetImage("projects/SOLANCE-APARTMENT/3_4/4.webp");
const photo5 = assetImage("projects/SOLANCE-APARTMENT/3_4/5.webp");
const photo6 = assetImage("projects/SOLANCE-APARTMENT/3_4/6.webp");
const photo7 = assetImage("projects/SOLANCE-APARTMENT/3_4/7.webp");
const photo8 = assetImage("projects/SOLANCE-APARTMENT/3_4/8.webp");
const heroPhoto = assetImage("projects/SOLANCE-APARTMENT/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Solance Apartment — Spaces Architects@ka" };

export default function SolanceApartmentPage() {
  return (
    <ProjectDetailPage
      currentId="solance-apartment"
      title="Solance Apartment"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        heroPhoto,
      ]}
      details={{
        Project: "Solance Apartment",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Vinay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Creating a luxurious interior on a budget can be a challenging task, but it is definitely not impossible. With careful planning and creative thinking, it is possible to achieve the look and feel of a <Orange>high-end space without breaking the bank.</Orange>
        </>,
        <>
          In this particular flat, we were tasked with creating a <Orange>luxurious interior within a limited budget.</Orange> We knew that this would require us to be resourceful and to make the most of the materials and resources at our disposal.
        </>,
        <>
          To start, we focused on incorporating high-end materials and finishes that would add a touch of sophistication and glamour to the space. We chose textured glass, brass, and rich wood accents to bring a sense of luxury to the flat. These materials are classic and timeless, and they have the ability to elevate the look and feel of any space.
        </>,
        <>
          In addition to using these high-end materials, we also made sure to keep the vibe of the flat <Orange>warm and welcoming.</Orange> We wanted the space to feel like home, so we incorporated plenty of comfortable seating, cozy blankets, and soft lighting to create a cozy atmosphere.
        </>,
        <>
          Overall, we are thrilled with the end result of this flat. By combining <Orange>luxurious materials with a homey vibe,</Orange> we were able to create a space that feels both sophisticated and welcoming.
        </>,
      ]}
    />
  );
}