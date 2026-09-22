import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/GREY-APARTMENTS/cover/HERO IMAGE.webp");
const photo2 = assetImage("projects/GREY-APARTMENTS/3_4/2.webp");
const photo3 = assetImage("projects/GREY-APARTMENTS/3_4/3.webp");
const photo4 = assetImage("projects/GREY-APARTMENTS/3_4/4.webp");
const photo5 = assetImage("projects/GREY-APARTMENTS/3_4/5.webp");
const photo6 = assetImage("projects/GREY-APARTMENTS/3_4/6.webp");
const photo7 = assetImage("projects/GREY-APARTMENTS/3_4/7.webp");
const photo8 = assetImage("projects/GREY-APARTMENTS/3_4/8.webp");
const photo9 = assetImage("projects/GREY-APARTMENTS/3_4/9.webp");
const photo10 = assetImage("projects/GREY-APARTMENTS/3_4/10.webp");
const photo11 = assetImage("projects/GREY-APARTMENTS/3_4/11.webp");
const photo12 = assetImage("projects/GREY-APARTMENTS/3_4/12.webp");
const photo13 = assetImage("projects/GREY-APARTMENTS/3_4/13.webp");
const photo14 = assetImage("projects/GREY-APARTMENTS/3_4/14.webp");
const photo15 = assetImage("projects/GREY-APARTMENTS/3_4/15.webp");
const photo16 = assetImage("projects/GREY-APARTMENTS/3_4/16.webp");
const photo17 = assetImage("projects/GREY-APARTMENTS/3_4/17.webp");
const photo18 = assetImage("projects/GREY-APARTMENTS/3_4/18.webp");
const photo19 = assetImage("projects/GREY-APARTMENTS/3_4/19.webp");
const photo20 = assetImage("projects/GREY-APARTMENTS/3_4/20.webp");
const photo21 = assetImage("projects/GREY-APARTMENTS/3_4/21.webp");
const photo22 = assetImage("projects/GREY-APARTMENTS/3_4/22.webp");
const coverPhoto1 = assetImage("projects/GREY-APARTMENTS/cover/COVER.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Grey Apartment — Spaces Architects@ka" };
export default function GreyApartmentPage() {
  return (
    <ProjectDetailPage
      title="Grey Apartment"
      location="Gurugram, Haryana"
      hero={hero}
      photos={[
        photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
        photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18,
        photo19, photo20, photo21, photo22,
        coverPhoto1,
      ]}
      details={{
        Project: "Grey Apartment",
        Location: "Gurugram, Haryana",
        "Square Footage": "1500 sq.ft.",
        Client: "Rocky Malik",
      }}
      description={[
        <>
          A young Gurgaon couple were contemplating a makeover of this apartment for themselves and their infant child and wanted a <Orange>contemporary home with an open floor plan</Orange> and space to entertain family and friends. Our first thought was an inward-looking design and a neutrally hued but stylish interior that&rsquo;s perfect for a modern living.
        </>,
        <>
          The 1500 square feet apartment originally had a challenging design. Each room was isolated with walls at random angles and there was no connectivity between the spaces. We started by breaking down a couple of walls inside and opened up the formal areas in the house.
        </>,
        <>
          Keeping in mind the taste of the client, we took a simple approach to furnishing the home. For a raw and rustic feel, we picked <Orange>cool shades of grey</Orange> for the overall interiors and merged them with splashes of sophisticated blue and bright yellow.
        </>,
        <>
          The entrance opens into an irregular shaped foyer with geometrical wall paneling painted in 3 different textures of grey. This leads into the living room and an open dining area adjacent to it. The kitchen, also forming a part of this open plan layout, gives a sense of space. The floor plan also includes a study, a guest bedroom and a master bedroom towards the rear of the apartment.
        </>,
        <>
          In the living room and dining area while the wooden plank tile flooring and texture paint, all in grey, enhance the contemporary feel, the wooden cladding on the ceilings add interest above and create a certain warmth.
        </>,
        <>
          As shades of grey and white could have made the living room and adjacent dining area look a bit low-key for the homeowners&rsquo; personality who loves to party often, it was offset with strong patterns and colours. While the yellow sofas in the living room are likely to be a conversation starter, other elements such as the wall panels in blue and a circular painting with Indian motifs in yellow and blue in the dining area, add a glam vibe to the area.
        </>,
        <>
          Splashes of yellow in the cabinetry of the otherwise gray and black kitchen enliven the cooking zone. A narrow white tile cladded corridor connects us to the rear areas. The study room, a semi-private area, is treated with grey wallpaper and an abstract blue texture painted ceiling. Further, three spindles with primary colour threads are added as an art form in space.
        </>,
      ]}
    />
  );
}