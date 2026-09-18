import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/COLOR-COURT/cover/Cover Image.webp");
const photo1 = assetImage("projects/COLOR-COURT/3_4/1.webp");
const photo2 = assetImage("projects/COLOR-COURT/3_4/2.webp");
const photo3 = assetImage("projects/COLOR-COURT/3_4/3.webp");
const photo4 = assetImage("projects/COLOR-COURT/3_4/4.webp");
const photo5 = assetImage("projects/COLOR-COURT/3_4/5.webp");
const photo6 = assetImage("projects/COLOR-COURT/3_4/6.webp");
const photo7 = assetImage("projects/COLOR-COURT/3_4/7.webp");
const photo8 = assetImage("projects/COLOR-COURT/3_4/8.webp");
const photo9 = assetImage("projects/COLOR-COURT/3_4/9.webp");
const photo10 = assetImage("projects/COLOR-COURT/3_4/10.webp");
const photo11 = assetImage("projects/COLOR-COURT/3_4/11.webp");
const photo12 = assetImage("projects/COLOR-COURT/3_4/12.webp");
const photo13 = assetImage("projects/COLOR-COURT/3_4/13.webp");
const photo14 = assetImage("projects/COLOR-COURT/3_4/14.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "The Colour Court — Spaces Architects@ka" };
export default function ColourCourtPage() {
  return (
    <ProjectDetailPage
      title="The Colour Court"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14]}
      details={{
        Project: "The Colour Court",
        Location: "Noida, Uttar Pradesh",
        Status: "Completed (2019)",
      }}
      description={[
        <>
          Aptly named Colour Court, this <Orange>5,000 sq. ft. indoor sports complex</Orange> in Noida brings sport, recreation and vibrant design together under one roof. The bold interiors create an energetic environment through <Orange>bright colours, playful graphics and contrasting materials</Orange>. The complex includes a gym, badminton court, table tennis room, billiards room, board games area, pantry, lounge and informal seating. Each space has its own identity while maintaining a cohesive design language through <Orange>colour, pattern and material</Orange>.
        </>,
        <>
          <Orange>Sports flooring, decorative black and white tiles, colourful decals and contrasting furniture create a lively visual character</Orange>. A distinctive yellow spiral on the ceiling adds a strong sporty element, while the purple zebra theme in the billiards room creates a dramatic and playful focal point. Natural and artificial lighting are layered to maintain openness while giving each zone its own atmosphere. The lounge provides a softer space to relax and recharge. Overall, Colour Court is designed as an <Orange>energetic social environment that encourages movement, interaction and well-being</Orange>, creating a refreshing experience for the young sports enthusiast.
        </>,
      ]}
    />
  );
}