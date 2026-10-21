import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/cover/COVER (2).webp");
const photo1 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/1.webp");
const photo2 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/2.webp");
const photo3 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/3.webp");
const photo4 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/4.webp");
const photo5 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/5.webp");
// const photo6 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/6.webp");
const photo7 = assetImage("projects/MARBLE-CITY-EXHIBITION-STALL/3_4/7.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "Marble City Exhibition Stall — Spaces Architects@ka" };

export default function MarbleCityExhibitionStallPage() {
  return (
    <ProjectDetailPage
      currentId="marble-city-exhibition-stall"
      title="Marble City Exhibition Stall"
      location="New Delhi"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo7]}
      details={{
        Project: "Marble City ID Stall",
        Location: "New Delhi",
        "Built-up Area": "1,500 sq. ft.",
        Client: "Marble City",
        Status: "Completed",
      }}
      description={[
        <>
          The job was to create a <Orange>100 sq.m. exhibition stall</Orange> for one of the largest stone suppliers in India. The client had a certain set of premium stones that he wanted to showcase and put up their presence in the minds of the high end users. Also, the client wanted to launch the introduction of the <Orange>large format slim tiles and ceramic tiles</Orange> in the stall. We started by giving separate spaces for tiles and stones but having a certain visual connectivity in it.
        </>,
        <>
          The space was then divided into 3 major zones, the entry and the reception, the tile display and then the stone display. The outer form was visualized as a <Orange>white block</Orange> which protects the black interiors and the products displayed inside. The front face is pushed 10 feet away from the boundary and kept open with no ceiling. The first thing that intrigues the visitor is the <Orange>titanium travertine stone railing</Orange> which is waterjet cut and displayed as an art piece. This area hosts the entry and the movement space where three panels of enhanced limestone display attracts most of the visitors to move in and the text written on the right wall informs the visitor about the company further.
        </>,
        <>
          The rear side of the stall has a slit open from where the visitors can peek inside the space from outside and that creates an interest again in the minds to move in and see the products in detail. The tiles section has 6 vertical full height panels which display large format slim tiles and have multiple boxes on the side which display other tiles that can be used in combination with them. Also, the other tiles are categorized and displayed on the right wall with SS Clamps. The physical partition which divides the stone display from the tile display are <Orange>5 blocks of stones hovered by sleek MS sections</Orange> from the floor and the ceiling.
        </>,
        <>
          The stone section, on the left, has a wall which frames all exclusive collection of the company inside a niche. The front wall has 3 stones from the famous white Statuario collection and the right wall has a slant display under the slit window showcasing different finishes. The most interesting element of the whole design is the <Orange>pyramidal structure in the ceiling with backlit onyx stone</Orange> cladded on it. The different usage of the stone catches the eye of the visitors to stand and take a look at the product in a new way. The focus had to certainly be on the products and so we kept the palette <Orange>very dark in the interiors</Orange> with only focus on the colors of the tiles and stones.
        </>,
      ]}
    />
  );
}