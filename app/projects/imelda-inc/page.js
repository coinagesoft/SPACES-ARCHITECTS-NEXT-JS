import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";
const hero = assetImage("projects/IMELDA-INC/cover/Hero Image.webp");
const photo1 = assetImage("projects/IMELDA-INC/3_4/1.webp");
const photo2 = assetImage("projects/IMELDA-INC/3_4/2.webp");
const photo3 = assetImage("projects/IMELDA-INC/3_4/3.webp");
const photo4 = assetImage("projects/IMELDA-INC/3_4/4.webp");
const photo5 = assetImage("projects/IMELDA-INC/3_4/5.webp");
const photo6 = assetImage("projects/IMELDA-INC/3_4/6.webp");
const photo7 = assetImage("projects/IMELDA-INC/3_4/7.webp");
const photo8 = assetImage("projects/IMELDA-INC/3_4/8.webp");
const photo9 = assetImage("projects/IMELDA-INC/3_4/9.webp");
const photo10 = assetImage("projects/IMELDA-INC/3_4/10.webp");
const photo11 = assetImage("projects/IMELDA-INC/3_4/11.webp");
const photo12 = assetImage("projects/IMELDA-INC/3_4/12.webp");
const photo13 = assetImage("projects/IMELDA-INC/3_4/13.webp");
const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Imelda Inc. — Spaces Architects@ka" };

export default function ImeldaIncPage() {
  return (
    <ProjectDetailPage
      currentId="imelda-inc"
      title="Imelda Inc."
      location="New Delhi"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13]}
      details={{
        Project: "Imelda Inc.",
        Location: "New Delhi",
        Client: "Mr. Priyank & Mr. Piyush",
        Status: "Completed",
      }}
      description={[
        <>
          Conceived as a physical expression of the brand, the office translates the client’s denim business into a <Orange>theme-driven workplace</Orange> and experience centre, bringing manufacturing and showroom functions together under one roof.
        </>,
        <>
          The concept draws from the <Orange>journey of denim</Orange>—from raw material to finished product—abstracting familiar elements such as threads, scissors and denim fabric into architectural and interior interventions. Each detail was <Orange>custom designed</Orange> to strengthen the connection between these elements, turning the workplace into a <Orange>continuous visual narrative</Orange>.
        </>,
        <>
          Beyond function, the space was designed as an immersive experience for visitors and employees alike, allowing them to engage with the <Orange>craft, creativity and identity</Orange> behind the business. The result is a workplace where the process of making denim becomes the inspiration for its own architecture—a setting conceived as a treat for design seekers.
        </>,
      ]}
    />
  );
}