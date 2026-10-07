import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/VEYA-APARTMENT/cover/COVER.webp");

const img1 = assetImage("projects/VEYA-APARTMENT/photographs/1.webp");
const img2 = assetImage("projects/VEYA-APARTMENT/photographs/2.webp");
const img3 = assetImage("projects/VEYA-APARTMENT/photographs/3.webp");
const img4 = assetImage("projects/VEYA-APARTMENT/photographs/4.webp");
const img5 = assetImage("projects/VEYA-APARTMENT/photographs/5.webp");
const img6 = assetImage("projects/VEYA-APARTMENT/photographs/6.webp");
const img7 = assetImage("projects/VEYA-APARTMENT/photographs/7.webp");
const img8 = assetImage("projects/VEYA-APARTMENT/photographs/8.webp");
const img9 = assetImage("projects/VEYA-APARTMENT/photographs/9.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Veya Apartment — Spaces Architects@ka" };

export default function VeyaApartmentPage() {
  return (
    <ProjectDetailPage
      currentId="veya-apartment"
      title="Veya Apartment"
      location="Noida, Uttar Pradesh"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img2, img3,
        img1,
        img4, img6,
        img7,
        img5, img8,
        img9,
      ]}
      details={{
        Project: "Veya Apartment",
        Location: "Noida, Uttar Pradesh",
        "Built-up Area": "1,500 sq. ft.",
        Client: "Mr. Vinay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Infused with understated luxury and a refined modern aesthetic, this apartment interior reimagines urban living through the warm elegance of wood and a meticulously detailed design language. Rich timber finishes ranging from <Orange>fluted wall panels</Orange> to <Orange>custom-crafted cabinetry</Orange> form the soul of the space, lending it a sense of timeless sophistication. Paired with <Orange>plush materials, sleek surfaces, and ambient lighting</Orange>, the home exudes a quiet opulence without excess.
        </>,
        <>
          Every space within the apartment has been tailored to evoke <Orange>comfort, style, and exclusivity</Orange>. The living and dining areas are open yet intimate, enhanced by layered textures and curated art pieces that elevate the visual narrative. Bedrooms feature <Orange>bespoke furniture, warm flooring, and expansive wardrobes</Orange>, while the bathrooms are treated as private retreats, finished with <Orange>marble, metal accents, and designer fittings</Orange>. Luxury here is defined by the details: precision in craftsmanship, a harmonious palette, and the seamless integration of technology and convenience. Framed by large windows that draw in natural light, the apartment feels expansive and indulgent an elegant sanctuary that reflects a modern lifestyle infused with character and grace.
        </>,
      ]}
    />
  );
}