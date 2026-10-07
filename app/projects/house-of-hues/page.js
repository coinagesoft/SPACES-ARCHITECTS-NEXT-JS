import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HOUSE-OF-HUES/cover/COVER.webp");

const img1 = assetImage("projects/HOUSE-OF-HUES/3_4/1.webp");
const img2 = assetImage("projects/HOUSE-OF-HUES/3_4/2.webp");
const img3 = assetImage("projects/HOUSE-OF-HUES/3_4/3.webp");
const img4 = assetImage("projects/HOUSE-OF-HUES/3_4/4.webp");
const img5 = assetImage("projects/HOUSE-OF-HUES/3_4/5.webp");
const img6 = assetImage("projects/HOUSE-OF-HUES/3_4/6.webp");
const img7 = assetImage("projects/HOUSE-OF-HUES/3_4/7.webp");
const img8 = assetImage("projects/HOUSE-OF-HUES/3_4/8.webp");
const img9 = assetImage("projects/HOUSE-OF-HUES/3_4/9.webp");
const img10 = assetImage("projects/HOUSE-OF-HUES/3_4/10.webp");
const img11 = assetImage("projects/HOUSE-OF-HUES/3_4/11.webp");
const img12 = assetImage("projects/HOUSE-OF-HUES/3_4/12.webp");
const img13 = assetImage("projects/HOUSE-OF-HUES/3_4/13.webp");
const img14 = assetImage("projects/HOUSE-OF-HUES/3_4/14.webp");
const img15 = assetImage("projects/HOUSE-OF-HUES/3_4/15.webp");
const img16 = assetImage("projects/HOUSE-OF-HUES/3_4/16.webp");
const img17 = assetImage("projects/HOUSE-OF-HUES/3_4/17.webp");
const img18 = assetImage("projects/HOUSE-OF-HUES/3_4/18.webp");
const img19 = assetImage("projects/HOUSE-OF-HUES/3_4/19.webp");
const img20 = assetImage("projects/HOUSE-OF-HUES/3_4/20.webp");
const img21 = assetImage("projects/HOUSE-OF-HUES/3_4/21.webp");
const img22 = assetImage("projects/HOUSE-OF-HUES/3_4/22.webp");
const img23 = assetImage("projects/HOUSE-OF-HUES/3_4/23.webp");
const img24 = assetImage("projects/HOUSE-OF-HUES/3_4/24.webp");
const img25 = assetImage("projects/HOUSE-OF-HUES/3_4/25.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "House of Hues — Spaces Architects@ka" };

export default function HouseOfHuesPage() {
  return (
    <ProjectDetailPage
      currentId="house-of-hues"
      title="House of Hues"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img4, img5,
        img2, img3,
        img6, img7, img12,
        img8, img9,
        img10, img13, img15,
        img11, img14,
        img16, img18, img19,
        img17, img21,
        img22, img20, img24,
        img23, img25,
      ]}
      details={{
        Project: "House of Hues",
        Location: "New Delhi",
        "Plot Area": "2,700 sq. ft.",
        "Built-up Area": "8,000 sq. ft.",
        Client: "Mr. Pramod",
        Status: "Completed",
      }}
      description={[
        <>
          <Orange>House of Hues</Orange> is a contemporary residence conceived as a study in colour, texture and natural light. Rather than treating colour as an applied layer, the design integrates it into the architecture through a restrained palette of terracotta, warm wood, concrete, ivory and deep, muted tones.
        </>,
        <>
          The house balances a strong architectural expression with a calm, tactile interior. <Orange>Exposed concrete surfaces and earthy terracotta planes establish a grounded material language, while timber elements soften the composition</Orange>. Arched openings and carefully framed apertures introduce a recurring geometric motif, creating moments where sunlight, shadow and colour become part of the architecture.
        </>,
        <>
          Inside, the palette shifts subtly from room to room. Neutral bedrooms are layered with textured fabrics and warm finishes, while deeper blue and earthy accents bring character to the living spaces. Bespoke furniture, patterned textiles and curated artwork add richness without overpowering the architectural framework.
        </>,
        <>
          Landscape and daylight are integral to the experience. Green pockets, planted courtyards and large openings bring nature deep into the house, while filtered sunlight creates constantly changing patterns across the walls and floors. The result is a home that feels expressive yet composed where <Orange>colour, material and light work together to create a distinctly contemporary Indian residence</Orange>.
        </>,
        <>
          It is ultimately an exploration of how a restrained architectural palette can still produce a <Orange>home rich in warmth, personality and visual rhythm</Orange>.
        </>,
      ]}
    />
  );
}