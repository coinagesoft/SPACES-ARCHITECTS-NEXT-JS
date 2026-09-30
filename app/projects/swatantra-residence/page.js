import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";

const hero = assets.swatantraResidence.hero;
const photos = assets.swatantraResidence.gallery.filter(Boolean);

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Swatantra Residence — Spaces Architects@ka" };

export default function SwatantraResidencePage() {
  return (
    <ProjectDetailPage
      currentId="swatantra-residence"
      title="Swatantra Residence"
      location="Agra, Uttar Pradesh"
      hero={hero}
      photos={photos}
      details={{
        Project: "Swatantra Residence",
        Location: "Agra, Uttar Pradesh",
        Client: "Mr. Vishal Mittal",
        Status: "Completed",
      }}
      description={[
        <>
          Designed for <Orange>three generations</Orange>, this inward-looking residence explores the <Orange>relationship between concrete, art and family life.</Orange> Conceived around a triple-height courtyard, the home maintains visual connections across its levels while balancing shared spaces with increasing privacy.
        </>,
        <>
          The ground floor accommodates the principal public areas, organised around shifting cut-outs that introduce greenery and connect spaces vertically. Existing trees become both privacy screens and living extensions of the interiors, while balconies frame the surrounding landscape rather than merely opening towards it. Upper levels accommodate family lounges and bedrooms, with a double-height screened balcony adding another layer of spatial depth. The terrace becomes a <Orange>recreational retreat</Orange> with a jacuzzi, halls and open seating.
        </>,
        <>
          <Orange>Concrete forms the house&apos;s defining language</Orange> used as both material and canvas, enriched through pigments, textures and carefully crafted surfaces. Custom furniture, lighting and artwork further extend this <Orange>artistic expression.</Orange>
        </>,
        <>
          Sustainability is integrated into everyday living through <Orange>solar panels and rainwater harvesting,</Orange> while the interactive facade reveals glimpses of the interior through jaalis and circular cut-outs. By reinterpretating minimalism, brutalism and modernism, the residence creates a bold architectural identity without losing its character as a private family home.
        </>,
      ]}
    />
  );
}