import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/cover/COVER IMAGE.webp");
const photo00 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/00.webp");
const photo01 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/01.webp");
const photo02 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/02.webp");
const photo03 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/03.webp");
const photo4 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/4.webp");
const photo04 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/04.webp");
const photo05 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/05.webp");
const photo06 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/06.webp");
const photo07 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/07.webp");
const photo08 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/08.webp");
const photo09 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/09.webp");
const photo10 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/10.webp");
const photo11 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/11.webp");
const photo12 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/12.webp");
const akhilBakhshi33 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI33.webp");
const akhilBakhshi40 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI40.webp");
const akhilBakhshi87 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI87.webp");
const akhilBakhshi103 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI103.webp");
const akhilBakhshi117 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI117.webp");
const akhilBakhshi131 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL BAKHSHI131.webp");
const akhilBakhshi132 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL_BAKHSHI132.webp");
const akhilBakhshi144 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL_BAKHSHI144.webp");
const akhilBakhshi161 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/AKHIL_BAKHSHI161.webp");
const child1 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/child_1.webp");
const child2 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/3_4/child_2.webp");
const coverPhoto2 = assetImage("projects/ADHARSHILA-VATIKA-KINDERGARTEN/cover/HERO IMAGE.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Adharshila Vatika Kindergarten — Spaces Architects@ka" };
export default function AdharshilaVatikaKindergartenPage() {
  return (
    <ProjectDetailPage
      title="Adharshila Vatika Kindergarten"
      location="New Delhi"
      hero={hero}
      photos={[
        photo00, photo01, photo02, photo03, photo4, photo04, photo05, photo06,
        photo07, photo08, photo09, photo10, photo11, photo12,
        akhilBakhshi33, akhilBakhshi40, akhilBakhshi87, akhilBakhshi103,
        akhilBakhshi117, akhilBakhshi131, akhilBakhshi132, akhilBakhshi144, akhilBakhshi161,
        child1, child2,
        coverPhoto2,
      ]}
      details={{
        Project: "Adharshila Vatika Kindergarten",
        Location: "New Delhi",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      awards={[
        "Designshare Awards 2008 — Winner",
        "World Architecture Community Awards 2009 — Winner",
        "WAN Colours in Architecture Awards 2011 — Longlist",
        "CELE Compedium of Exemplary Education Facilities — Selected",
        "Archidesign Awards 2007 — Best Interior Design (Northern Region)",
      ]}
      description={[
        <>
          The redesign of kindergarten sought to retain the functional requirements and existing character of the facility while preserving its original elevation. The two-storey building, positioned at the centre of the site, was planned around natural ventilation, with a simple corridor connecting all spaces and overlooking a <Orange>central courtyard</Orange>.
        </>,
        <>
          Derived from a <Orange>hexagonal plan</Orange>, the building encloses a secure outdoor space for children to play. The design transforms the facility into an <Orange>environment children can identify with and remember</Orange>, allowing them to intuitively navigate and form a connection with its spaces.
        </>,
        <>
          The architecture draws from <Orange>primary forms—circles, triangles and squares</Orange>—creating a raw, graphic language that moves away from conventional castle-like or fairy-tale imagery. This <Orange>play of colour and geometry</Orange> continues from the exterior into the interiors, creating a cohesive environment where form becomes a part of a child&rsquo;s experience.
        </>,
        <>
          The selection of materials and colours was guided by the need to preserve the building&rsquo;s distinct character, while the landscape extended this language through <Orange>material and colour transitions</Orange> between different spaces. Adharshila Vatika conceived as more than a kindergarten: an identifiable world of forms, colours and spaces designed to remain in a child&rsquo;s memory.
        </>,
      ]}
    />
  );
}