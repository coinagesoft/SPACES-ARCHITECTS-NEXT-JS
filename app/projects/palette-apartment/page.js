import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";

const hero = assets.paletteApartment.hero;
const photos = assets.paletteApartment.gallery;

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Palette Apartment — Spaces Architects@ka" };

export default function PaletteApartmentPage() {
  return (
    <ProjectDetailPage
      currentId="palette-apartment"
      title="Palette Apartment"
      location="Noida, Uttar Pradesh"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        photos[0], photos[1],
        photos[7],
        photos[3], photos[4], photos[5],
        photos[6], photos[2],
      ]}
      details={{
        Project: "Palette Apartment",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Vinay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Designing the interior of a <Orange>semi-luxurious 3 BHK</Orange> for a family of four within a small budget was a challenging task. However, we were determined to give this space a big makeover to make the most of the small space, we designed all of the furniture with <Orange>ergonomics</Orange> in mind, ensuring that it would be comfortable for the family to use. We used a variety of materials in the project, including <Orange>Teak wood, laminate, stone, wallpaper, and fabric</Orange>.
        </>,
        <>
          We took care to choose materials that would be durable and easy to maintain, as well as visually appealing. The result is a <Orange>functional and stylish home</Orange> that the family can enjoy for years to come.
        </>,
      ]}
    />
  );
}