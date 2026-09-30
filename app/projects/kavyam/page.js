import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/KAVYAM/cover/cover.webp");

const img1 = assetImage("projects/KAVYAM/3_4/1.webp");
const img2 = assetImage("projects/KAVYAM/3_4/2.webp");
const img3 = assetImage("projects/KAVYAM/3_4/3.webp");
const img4 = assetImage("projects/KAVYAM/3_4/4.webp");
const img5 = assetImage("projects/KAVYAM/3_4/5.webp");
const img6 = assetImage("projects/KAVYAM/3_4/6.webp");
const img7 = assetImage("projects/KAVYAM/3_4/7.webp");
const img8 = assetImage("projects/KAVYAM/3_4/8.webp");
const img9 = assetImage("projects/KAVYAM/3_4/9.webp");
const img10 = assetImage("projects/KAVYAM/3_4/10.webp");
const img11 = assetImage("projects/KAVYAM/3_4/11.webp");
const img12 = assetImage("projects/KAVYAM/3_4/12.webp");
const img13 = assetImage("projects/KAVYAM/3_4/13.webp");
const img14 = assetImage("projects/KAVYAM/3_4/14.webp");
const img15 = assetImage("projects/KAVYAM/3_4/15.webp");
const img16 = assetImage("projects/KAVYAM/3_4/16.webp");
const img17 = assetImage("projects/KAVYAM/3_4/17.webp");
const img18 = assetImage("projects/KAVYAM/3_4/18.webp");
const img19 = assetImage("projects/KAVYAM/3_4/19.webp");
const img20 = assetImage("projects/KAVYAM/3_4/20.webp");
const img21 = assetImage("projects/KAVYAM/3_4/21.webp");
const img22 = assetImage("projects/KAVYAM/3_4/22.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Kavyam — Spaces Architects@ka" };

export default function KavyamPage() {
  return (
    <ProjectDetailPage
      currentId="kavyam"
      title="Kavyam"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img6, img7,
        img2, img3,
        img8,
        img4, img13, img14,
        img5, img9,
        img15,
        img10, img16, img17,
        img11, img12,
        img18, img20, img22,
        img19, img21,
      ]}
      details={{
        Project: "Kavyam",
        Location: "New Delhi",
        Client: "Mr. D.K. Sharma",
        Status: "Completed",
        Awards: "IIID Design Excellence Awards 2017 – Runner up in Residential Single Dwelling Category",
      }}
      description={[
        <>
          Conceived as a fusion of Indian and modern architecture, this single-family residence brings traditional elements into <Orange>dialogue with contemporary materials and detailing</Orange>. The façade combines a <Orange>brick jaali with MS louvers, Epay wood and tensile roofing</Orange>, creating a layered expression of heritage and modernity.
        </>,
        <>
          Inside, custom-designed wallpapers, furniture and artefacts extend the concept into a cohesive interior language. Large double- and triple-height atriums form the spatial core, establishing <Orange>visual connections across floors</Orange>, while carefully positioned openings draw abundant natural light and ventilation throughout the home.
        </>,
        <>
          The result is a residence where <Orange>Indian architectural character meets contemporary openness</Orange>, creating a distinctive yet cohesive family home.
        </>,
      ]}
    />
  );
}