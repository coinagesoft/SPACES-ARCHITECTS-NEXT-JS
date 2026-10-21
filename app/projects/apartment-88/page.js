import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";

const hero = assets.apartment88.hero;
const photos = assets.apartment88.gallery.filter(Boolean);

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Apartment 88 — Spaces Architects@ka" };

export default function Apartment88Page() {
  return (
    <ProjectDetailPage
      title="Apartment 88"
      location="New Delhi"
      hero={hero}
      photos={photos}
      details={{
        Project: "Apartment 88",
        Location: "New Delhi",
        "Built-up Area": "4,500 sq. ft.",
        Client: "Mr. Ajay Wadhwa",
        Status: "Completed",
      }}
      description={[
        <>
          Created for residents who are <Orange>art enthusiasts and singers</Orange>, Apartment 88 moves
          beyond conventional minimalism to create a residence that is <Orange>personal, artistic and
          immersive.</Orange> Working within the existing structure, each space was reimagined as part of a continuous journey,
          with everything from lighting to artwork <Orange>individually customised</Orange> to reflect the
          residents&apos; personalities.
        </>,
        <>
          A subtle <Orange>grey palette</Orange> establishes a calm foundation, punctuated by vivid accents
          in furniture, artwork and artefacts. Natural light fills the living room, complemented by a <Orange>warm
          wooden ceiling</Orange>, while a rich blue wall with yellow-grey furniture brings energy to the sitting area. Artwork
          becomes an integral part of the composition, transforming walls into curated visual moments.
        </>,
        <>
          The corridor extends this artistic language through <Orange>concrete brick tiles arranged in
          patterns</Orange>, creating continuity along the passage. A wall clock adds a <Orange>playful sense of
          timelessness</Orange>, while a black-and-white sketch depicting urban life forms a striking backdrop to the dining area.
          Decorative pendant lights further enrich the spaces.
        </>,
        <>
          The ceilings are treated with equal attention, with each bedroom receiving a distinct design. A particularly expressive
          circular ceiling artwork becomes an unusual focal point, while a passionate red bedroom wall introduces a <Orange>playful,
          quirky character.</Orange> Apartment 88 ultimately brings together <Orange>art, individuality and
          tranquillity</Orange>, transforming a familiar apartment typology into a home that feels deeply personal to its residents.
        </>,
      ]}
    />
  );
}