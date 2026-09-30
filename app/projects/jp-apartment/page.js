import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/JP-APARTMENT/cover/COVER.webp");

const img1 = assetImage("projects/JP-APARTMENT/3_4/1.webp");
const img2 = assetImage("projects/JP-APARTMENT/3_4/2.webp");
const img3 = assetImage("projects/JP-APARTMENT/3_4/3.webp");
const img4 = assetImage("projects/JP-APARTMENT/3_4/4.webp");
const img5 = assetImage("projects/JP-APARTMENT/3_4/5.webp");
const img6 = assetImage("projects/JP-APARTMENT/3_4/6.webp");
const img7 = assetImage("projects/JP-APARTMENT/3_4/7.webp");
const img8 = assetImage("projects/JP-APARTMENT/3_4/8.webp");
const img9 = assetImage("projects/JP-APARTMENT/3_4/9.webp");
const img10 = assetImage("projects/JP-APARTMENT/3_4/10.webp");
const img11 = assetImage("projects/JP-APARTMENT/3_4/11.webp");
const img12 = assetImage("projects/JP-APARTMENT/3_4/12.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "JP Apartment — Spaces Architects@ka" };

export default function JpApartmentPage() {
  return (
    <ProjectDetailPage
      currentId="jp-apartment"
      title="JP Apartment"
      location="Noida, Uttar Pradesh"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img2, img1, img3,
        img5, img9,
        img4,
        img6, img7,
        img10, img11,
        img8, img12,
      ]}
      details={{
        Project: "JP Apartment",
        Location: "Noida, Uttar Pradesh",
        Client: "Pawar Residence",
        Status: "Completed",
      }}
      description={[
        <>
          This modern apartment interprets <Orange>minimalism as warmth</Orange> rather than restraint. Each space is composed through a <Orange>carefully balanced palette of materials, colours and textures</Orange>, allowing simplicity to bring focus to the essential elements of the interior.
        </>,
        <>
          A restrained base is punctuated with <Orange>playful accents</Orange>, introduced through artworks, tiles, fabrics and carefully selected details. Timber elements bring warmth and tactility, while natural light and integrated greenery add brightness and life to the spaces.
        </>,
        <>
          Designed around the client&rsquo;s minimalist vision, the home brings together <Orange>simplicity, warmth and moments of playfulness</Orange>, creating an environment that feels calm, personal and effortlessly harmonious.
        </>,
      ]}
    />
  );
}