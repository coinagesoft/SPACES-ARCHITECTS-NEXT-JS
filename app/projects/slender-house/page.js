import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";

const hero = assets.slenderHouse.hero;
const photos = assets.slenderHouse.gallery.filter(Boolean);

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "6 X 18 Slender House — Spaces Architects@ka" };

export default function SlenderHousePage() {
  return (
    <ProjectDetailPage
      currentId="slender-house"
      title="6 X 18 Slender House"
      location="New Delhi"
      hero={hero}
      photos={photos}
      details={{
        Project: "6 X 18 Slender House",
        "Completion Year": "2024",
        Area: "6550 sq. ft.",
        Location: "New Delhi",
        Client: "Mr. Malhotra",
        Status: "Completed",
      }}
      description={[
        <>
          Conceived around the philosophy of <Orange>“less is more,”</Orange> Slender House transforms a modest footprint into a vertically connected family home. Staggered cut-outs and strategically placed skylights punctuate the volume, bringing daylight, cross-ventilation and visual connections across its compact profile, even at the cost of usable floor area.
        </>,
        <>
          These <Orange>voids become more than environmental devices;</Orange> they create moments of interaction between generations, allowing shared views and changing patterns of light to connect the family across floors.
        </>,
        <>
          <Orange>Each level responds to a different family member:</Orange> formal living, dining and bar spaces occupy the ground floor; the first serves the father with a bedroom, kitchen and puja space; the individual bedrooms and quarters are shaped around their personalities; and the third becomes the couple’s private retreat with a bedroom, study and mandir. The terrace completes the home as a space for nature and togetherness.
        </>,
        <>
          Through passive ventilation, natural daylight and carefully tailored spaces, Slender House demonstrates that a compact home can be both environmentally responsive and emotionally expansive <Orange>where quality takes precedence over quantity.</Orange>
        </>,
      ]}
    />
  );
}