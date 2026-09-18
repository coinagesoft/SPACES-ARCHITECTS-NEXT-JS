import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/HOUSE-OF-CURVES/3_4/1.webp");
const photo2 = assetImage("projects/HOUSE-OF-CURVES/3_4/2.webp");
const photo3 = assetImage("projects/HOUSE-OF-CURVES/3_4/3.webp");
const photo4 = assetImage("projects/HOUSE-OF-CURVES/3_4/4.webp");
const photo5 = assetImage("projects/HOUSE-OF-CURVES/3_4/5.webp");
const photo6 = assetImage("projects/HOUSE-OF-CURVES/3_4/6.webp");
const photo7 = assetImage("projects/HOUSE-OF-CURVES/3_4/7.webp");
const photo8 = assetImage("projects/HOUSE-OF-CURVES/3_4/8.webp");
const photo9 = assetImage("projects/HOUSE-OF-CURVES/3_4/9.webp");
const photo10 = assetImage("projects/HOUSE-OF-CURVES/3_4/10.webp");
const photo11 = assetImage("projects/HOUSE-OF-CURVES/3_4/11.webp");
const photo12 = assetImage("projects/HOUSE-OF-CURVES/3_4/12.webp");
const photo13 = assetImage("projects/HOUSE-OF-CURVES/3_4/13.webp");
const photo14 = assetImage("projects/HOUSE-OF-CURVES/3_4/14.webp");
const photo15 = assetImage("projects/HOUSE-OF-CURVES/3_4/15.webp");
const photo16 = assetImage("projects/HOUSE-OF-CURVES/3_4/16.webp");
const photo17 = assetImage("projects/HOUSE-OF-CURVES/3_4/17.webp");
const photo18 = assetImage("projects/HOUSE-OF-CURVES/3_4/18.webp");
const photo19 = assetImage("projects/HOUSE-OF-CURVES/3_4/19.webp");
const photo20 = assetImage("projects/HOUSE-OF-CURVES/3_4/20.webp");
const coverPhoto1 = assetImage("projects/HOUSE-OF-CURVES/cover/COVER.webp");
const coverPhoto2 = assetImage("projects/HOUSE-OF-CURVES/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "House of Curves — Spaces Architects@ka" };
export default function HouseOfCurvesPage() {
  return (
    <ProjectDetailPage
      title="House of Curves"
      location="Agra, Uttar Pradesh"
      hero={hero}
      photos={[
        photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
        photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
        coverPhoto1, coverPhoto2,
      ]}
      details={{
        Project: "House of Curves",
        Location: "Agra, Uttar Pradesh",
        Client: "Mr. Amit Agrawal",
        Status: "Completed",
      }}
      description={[
        <>
          Agarwal&rsquo;s Residence, a <Orange>600-square-yard home in Agra</Orange>, explores contemporary living through a <Orange>dialogue between architectural geometry and the softness of nature</Orange>. Conceived around the refined sensibilities of its residents, the multi-level residence combines clean lines with organic forms and integrated greenery.
        </>,
        <>
          The façade composes <Orange>white walls and concrete volumes</Orange> with curved elements, <Orange>three arched openings</Orange> screened with slatted panels and a <Orange>large cantilevered upper structure</Orange>. Circular cut-outs, <Orange>cascading planting</Orange> and horizontal slatted elements add rhythm and depth, while a small garden softens the street edge.
        </>,
        <>
          The interiors extend this contrast, bringing together the <Orange>rigour of modern architecture</Orange> with fluid, organic forms. Rounded furniture and a raw, neutral palette create a calm retreat from the geometry of the exterior, allowing art, nature and materiality to coexist. The residence ultimately becomes a contemporary haven of <Orange>calm and contemplation</Orange>, designed to nurture both comfort and well-being.
        </>,
      ]}
    />
  );
}