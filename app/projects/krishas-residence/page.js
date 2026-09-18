import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/KRISHAS-RESIDENCE/cover/COVER.webp");
const photo1 = assetImage("projects/KRISHAS-RESIDENCE/3_4/1.webp");
const photo2 = assetImage("projects/KRISHAS-RESIDENCE/3_4/2.webp");
const photo3 = assetImage("projects/KRISHAS-RESIDENCE/3_4/3.webp");
const photo4 = assetImage("projects/KRISHAS-RESIDENCE/3_4/4.webp");
const photo5 = assetImage("projects/KRISHAS-RESIDENCE/3_4/5.webp");
const photo6 = assetImage("projects/KRISHAS-RESIDENCE/3_4/6.webp");
const photo7 = assetImage("projects/KRISHAS-RESIDENCE/3_4/7.webp");
const photo8 = assetImage("projects/KRISHAS-RESIDENCE/3_4/8.webp");
const photo9 = assetImage("projects/KRISHAS-RESIDENCE/3_4/9.webp");
const photo10 = assetImage("projects/KRISHAS-RESIDENCE/3_4/10.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Krisha's Residence — Spaces Architects@ka" };
export default function KrishasResidencePage() {
  return (
    <ProjectDetailPage
      title="Krisha's Residence"
      location="South Extension, New Delhi"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10]}
      details={{
        Project: "Krisha's Residence",
        Location: "South Extension, New Delhi",
        Client: "Spaces Architects@Ka",
        Status: "Completed",
      }}
      description={[
        <>
          Set within a <Orange>45-year-old home</Orange> for a large family, this interior transformation was conceived, dismantled, redesigned and executed in an extraordinary <Orange>35 days</Orange>. The project balances the old and the new, light and shadow, allowing contrasting ideas to coexist without diminishing either.
        </>,
        <>
          <Orange>Colour became the central design instrument</Orange>, carefully used to shape the psychological mood and character of each space. The interiors unfold as a sequence of discoveries, where <Orange>every step offers a new perspective</Orange>. In the family lounge, two contrasting coloured walls create a <Orange>bold yet harmonious composition</Orange>, while an integrated green area filters natural light and air into the space.
        </>,
        <>
          <Orange>The residence also acts as a canvas for art</Orange>. A curated collection of paintings moves through translucent blues and greens, deep pinks and other expressive tones, with each artwork handpicked and composed in dialogue with its surroundings. Completed within an exceptionally short timeframe, the home becomes an <Orange>artistic dialogue between colour, light, memory and contemporary living</Orange>.
        </>,
      ]}
    />
  );
}