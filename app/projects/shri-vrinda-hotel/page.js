import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SHRI-VRINDA-HOTEL/cover/COVER.webp");
const photo1 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/1.webp");
const photo2 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/2.webp");
const photo3 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/3.webp");
const photo4 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/4.webp");
const photo5 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/5.webp");
const photo6 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/6.webp");
const photo7 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/7.webp");
const photo8 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/8.webp");
const photo9 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/9.webp");
const photo10 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/10.webp");
const photo11 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/11.webp");
const photo12 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/12.webp");
const photo13 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/13.webp");
const photo14 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/14.webp");
const photo15 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/15.webp");
const photo16 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/16.webp");
const photo17 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/17.webp");
const photo18 = assetImage("projects/SHRI-VRINDA-HOTEL/3_4/18.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "Shri Vrinda Hotel — Spaces Architects@ka" };

export default function ShriVrindaHotelPage() {
  return (
    <ProjectDetailPage
      currentId="shri-vrinda-hotel"
      title="Shri Vrinda Hotel"
      location="Vrindavan, Uttar Pradesh"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        photo7, photo8, photo9, photo10, photo11, photo12,
        photo13, photo14, photo15, photo16, photo17, photo18,
      ]}
      details={{
        Project: "Shri Vrinda Hotel",
        Location: "Vrindavan, Uttar Pradesh",
        Client: "Mr. R.C. Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Located in the humble city of Vrindavan, Bhumi Van is a <Orange>hospitality project</Orange> that is embellished with all classical elements, breaking the norm of architecture of the city. A <Orange>neo-classical building,</Orange> the project embodies the essence of a 'Van' that translates to a Forest. With <Orange>green elements and water bodies</Orange> spread across the site, the building seems to sit right in the heart of nature. From the various arches that create photogenic spaces and GRC screens that adorn the private areas to the minute details of mouldings in the interior spaces, it all adds up to a <Orange>luxurious and comfortable spatial experience.</Orange>
        </>,
      ]}
    />
  );
}