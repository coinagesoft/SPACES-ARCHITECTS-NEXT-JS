import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/JAINS-RESIDENCE/cover/COVER.webp");
const photo1 = assetImage("projects/JAINS-RESIDENCE/3_4/1.webp");
const photo2 = assetImage("projects/JAINS-RESIDENCE/3_4/2.webp");
const photo3 = assetImage("projects/JAINS-RESIDENCE/3_4/3.webp");
const photo4 = assetImage("projects/JAINS-RESIDENCE/3_4/4.webp");
const photo5 = assetImage("projects/JAINS-RESIDENCE/3_4/5.webp");
const photo6 = assetImage("projects/JAINS-RESIDENCE/3_4/6.webp");
const photo7 = assetImage("projects/JAINS-RESIDENCE/3_4/7.webp");
const photo8 = assetImage("projects/JAINS-RESIDENCE/3_4/8.webp");
const photo9 = assetImage("projects/JAINS-RESIDENCE/3_4/9.webp");
const photo10 = assetImage("projects/JAINS-RESIDENCE/3_4/10.webp");
const photo11 = assetImage("projects/JAINS-RESIDENCE/3_4/11.webp");
const photo13 = assetImage("projects/JAINS-RESIDENCE/3_4/13.webp");
const photo14 = assetImage("projects/JAINS-RESIDENCE/3_4/14.webp");
const photo15 = assetImage("projects/JAINS-RESIDENCE/3_4/15.webp");
const photo16 = assetImage("projects/JAINS-RESIDENCE/3_4/16.webp");
const heroPhoto = assetImage("projects/JAINS-RESIDENCE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Jain's Residence — Spaces Architects@ka" };
export default function JainsResidencePage() {
  return (
    <ProjectDetailPage
      title="Jain's Residence"
      location="Rajinder Nagar, New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11, photo13, photo14, photo15, photo16,
        heroPhoto,
      ]}
      details={{
        Project: "Jain's Residence",
        Location: "Rajinder Nagar, New Delhi",
        Client: "Mr. Kamal Jain",
        Status: "Ongoing",
      }}
      description={[
        <>
          Set within Rajinder Nagar, one of Central Delhi's well-established residential neighbourhoods, <Orange>the Jain's Residence is conceived as an expression of scale, presence and quiet refinement.</Orange> The design responds to the stature of its setting and client through generous volumes, monumental proportions and a carefully composed material palette, creating interiors that feel expansive without becoming overwhelming.
        </>,
        <>
          Yet grandeur is balanced by moments of retreat. <Orange>Intimate pauses are woven throughout the home through landscaped pockets, framed views, quiet corners and carefully controlled transitions offering moments of stillness within the energy of the city.</Orange> A dramatic double-height living space establishes the home's sense of scale, while sculptural lighting, richly veined stone and warm timber add depth and tactility.
        </>,
        <>
          The residence ultimately explores grandeur as an experience rather than excess, a sequence of expansive spaces punctuated by quieter moments, creating a home that feels both commanding and composed.
        </>,
      ]}
    />
  );
}