"use client";

import Link from "next/link";
import styles from "./JustifiedGallery.module.css";

// ---------------------------------------------------------------------
// Two continuous, independent columns (1 : 2 width split) run the whole
// way down — col1 and col2 never reset or realign to each other, so
// there's never a forced gap under whichever column happens to be
// shorter at any point. Most tiles just keep their own natural aspect
// ratio (no crop).
//
// Two pairs need to land at matched heights though: Palette Apartment/
// Art House, and Step Maze/Heritage Park. Since col2 is always exactly
// 2× col1's width (flex-basis: 0, flex: 1 vs flex: 2), the display
// ratio col2's photo needs — to come out exactly as tall as its col1
// partner — is simply 2 × the col1 photo's own aspect ratio. That's a
// fixed number, so it's applied as a plain CSS aspect-ratio (with
// object-fit: cover) — no JS measurement, no ResizeObserver, no
// layout-timing flakiness.
// ---------------------------------------------------------------------

// Real aspect ratios (width / height), measured from the source files.
const RATIOS = {
  "Swatantra Residence": 0.574,
  "Apartment 88": 0.598,
  "Palette Apartment": 0.729,
  "Step Maze": 0.805,
  "House of Stepped Garden": 1.5,
  "Stonex India Building": 0.704,
  "House of Dancing Screens": 0.73,
  "Library House": 1.474,
  "House of Sculpted Screens": 0.701,
  "Express Office": 0.612,
  "Gandhi Darshan Park": 0.674,
  "Color Box Office": 0.691,
  "Ashraya Residence": 1.421,
  "Veya Apartment": 0.74,
  "Jaipur Residence": 0.687,
  "Architect's Office": 0.704,
  "Color Dialogue": 0.686,
  "J House": 1.46,
  "Golden Haveli": 1.482,
  "Cubix Office": 0.723,
  "AMG Office": 0.784,
  "Signature Office": 1.63,
  "Adharshila Vatika Kindergarten": 1.478,
  "Sonipat Havelli": 0.737,
  "Grey Apartments": 0.752,
  "Poetic House": 1.452,
  "Fuidic Office": 0.889,
  "Gupta's Residence": 0.788,
  "Saatvik Marble Showroom": 0.497,
  "The Canvas": 1.369,
  "Sethi's Residence": 0.704,
  "Sobhti Residence": 1.279,
  "Concrete House": 0.872,
  "House on Hill": 1.74,
  "House in Harmony": 0.727,
  "Marmo Home Office": 0.661,
  "Solance Apartment": 0.714,
  "Dispensary Sonipat": 0.492,
  "Rasa Farmhouse": 1.392,
  "Shri Vrinda Hotel": 0.728,
  "Marble City Exhibition Stall": 0.666,
};

// col2 photos that need to match a col1 partner's height: display
// aspect-ratio = 2 × the col1 partner's real ratio.
//
// Heritage Park is the one exception: on the live page its column
// (Haveli Dharampura + the Swatantra/Apartment 88 row) ends higher up
// than col1's (Slender House + Floating Courtyard House), so Art House
// and Heritage Park both start a bit higher than Palette Apartment and
// Step Maze do. The 2× formula still gives Heritage Park the *same
// height* as Step Maze — but starting from a higher point, that lands
// its bottom edge short of Step Maze's. Measured directly off the live
// page, Step Maze's bottom sits ~85px below Heritage Park's own bottom
// at that same starting point, so Heritage Park needs a taller display
// ratio than the plain 2× formula gives it to close that gap — this is
// a manually-tuned value, not derived from the formula. Art House is
// untouched.
const MATCHED_ASPECT = {
  "Art House": 2 * RATIOS["Palette Apartment"], // 1.458
  "Heritage Park": 1.263, // manually increased so its bottom reaches Step Maze's bottom
};

// MatchedTile projects that should link out to their own detail page.
const MATCHED_ROUTES = {
  "Art House": "/projects/art-house",
  "Heritage Park": "/projects/heritage-park",
};

const PROJECT_ROUTES = {
  "Slender House": "/projects/slender-house",
  "Swatantra Residence": "/projects/swatantra-residence",
  "Apartment 88": "/projects/apartment-88",
  "Floating Courtyard House": "/projects/floating-courtyard",
  "Haveli Dharampura": "/projects/haveli-dharampura",
  "Palette Apartment": "/projects/palette-apartment",
  "Step Maze": "/projects/step-maze",
  "Gandhi Darshan Park": "/projects/gandhi-darshan-park",
  "Color Box Office": "/projects/the-color-box-office",
  "The Colour Box Office": "/projects/the-color-box-office",
  "Ashraya Residence": "/projects/ashraya-residence",
  "Veya Apartment": "/projects/veya-apartment",
  "Jaipur Residence": "/projects/jaipur-residence",
  "Architect's Office": "/projects/architects-office",
  "Architect’s Office": "/projects/architects-office",
  "Color Dialogue": "/projects/color-dialogue",
  "Colour Dialogue": "/projects/color-dialogue",
  "J House": "/projects/j-house",
  "Intersekt Showroom": "/projects/intersext-showroom",
  "Intersext Showroom": "/projects/intersext-showroom",
  "Legend Veneer Exhibition - Delhi": "/projects/legend-veneer-exhibition-delhi",
  "Astra Heights": "/projects/astra-heights",
  "Golden Haveli": "/projects/golden-haveli",
  "Cubix Office": "/projects/cubix-office",
  "Imelda.Inc": "/projects/imelda-inc",
  "Lahori Gate Museum": "/projects/lahori-gate-museum",
  "Screen House": "/projects/the-screen-house",
  "The Screen House": "/projects/the-screen-house",
  "The Blue Courtyard": "/projects/house-of-blue-courtyard",
  "House of Blue Courtyard": "/projects/house-of-blue-courtyard",
  "Tiles and Kitchen Showroom": "/projects/tiles-and-kitchen-showroom",
  "Tiles & Kitchen Showroom": "/projects/tiles-and-kitchen-showroom",
  "Studio Element": "/projects/studio-element",
  "Alaya Residence": "/projects/alaya-residence",
  "Legend Venner Exhibition - Mumbai": "/projects/legend-venner-exhibition-mumbai",
  "Krisha's Residence": "/projects/krishas-residence",
  "Color Court": "/projects/color-court",
  "House of Curves": "/projects/house-of-curves",
 "Sachdeva Farmhouse": "/projects/sachdeva-residence",
  "Glulam Showroom": "/projects/glulam-showroom",
  "Kavyam": "/projects/kavyam",
  "JP Apartment": "/projects/jp-apartment",
  "Pattern Play": "/projects/pattern-play",
  "NOCC Office": "/projects/nocc-office",
  "The Stepwell": "/projects/oval-the-stepwell",
  "Aravali Farmhouse": "/projects/aravali-farmhouse",
  "House of Hues": "/projects/house-of-hues",
  "AMG Office": "/projects/amg-office",
  "Signature Office": "/projects/signature-office",
  "Adharshila Vatika Kindergarten": "/projects/adharshila-vatika-kindergarten",
  "Sonipat Havelli": "/projects/sonipat-havelli",
  "Grey Apartments": "/projects/grey-apartments",
  "Poetic House": "/projects/poetic-house",
  "Bhimtal Resort": "/projects/bhimtal-resort",
  "Brick House": "/projects/brick-house",
  "Bandikui Railway Station": "/projects/bandikui-railway-station",
  "Extension of Heritage Park": "/projects/heritage-park-extension",
  "Heritage Park Extension": "/projects/heritage-park-extension",
  "Fuidic Office": "/projects/fuidic-office",
  "Gupta's Residence": "/projects/guptas-residence",
  "House Around a Tree": "/projects/house-around-a-tree",
  "Saatvik Marble Showroom": "/projects/saativk-marble-showroom",
  "Jain's Residence": "/projects/jains-residence",
  "The Canvas": "/projects/thecanvas",
  "Sethi's Residence": "/projects/sethis-residence",
  "Sobhti Residence": "/projects/sobhti-residence",
  "Hansgrohe Showroom": "/projects/hansgrohe-showroom",
  "Toy Bank Museum": "/projects/toy-bank-museum",
  "Concrete House": "/projects/concrete-house",
  "House on Hill": "/projects/house-on-hill",
  "House in Harmony": "/projects/house-in-harmony",
  "Marmo Home Office": "/projects/marmo-home-office",
  "Solance Apartment": "/projects/solance-apartment",
  "Sanctum House": "/projects/sanctum-house",
  "Shri Vrinda Hotel": "/projects/shri-vrinda-hotel",
  "Dispensary Sonipat": "/projects/dispensary-sonipat",
  "Rasa Farmhouse": "/projects/rasa-farmhouse",
  "Marble City Exhibition Stall": "/projects/marble-city-exhibition-stall",
  "The Urban Nest": "/projects/the-urban-nest",
};

function findItem(items, name) {
  return items.find((it) => it.name === name);
}

function getSrc(item) {
  if (!item) return "";
  return typeof item.image === "string" ? item.image : item.image.src;
}

function Label({ item }) {
  return item?.name ? <span className={styles.label}>{item.name}</span> : null;
}

// Natural-ratio tile — no crop, height follows its own real aspect ratio.
function Tile({ item }) {
  if (!item) return null;
  const content = (
    <>
      <img src={getSrc(item)} alt={item.name || item.file} loading="lazy" />
      <Label item={item} />
    </>
  );

  const route = item?.name ? PROJECT_ROUTES[item.name] : undefined;

  if (route) {
    return (
      <Link
        href={route}
        className={styles.tile}
        aria-label={`View ${item.name} project`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.tile}>
      {content}
    </div>
  );
}

// A col2 tile whose height is locked (via CSS aspect-ratio) to match
// its col1 partner exactly.
function MatchedTile({ item }) {
  if (!item) return null;
  const aspectRatio = MATCHED_ASPECT[item.name];
  const content = (
    <>
      <img
        src={getSrc(item)}
        alt={item.name || item.file}
        loading="lazy"
        className={aspectRatio ? styles.crop : undefined}
      />
      <Label item={item} />
    </>
  );

  const route = item?.name ? MATCHED_ROUTES[item.name] || PROJECT_ROUTES[item.name] : undefined;

  if (route) {
    return (
      <Link
        href={route}
        className={styles.tile}
        style={aspectRatio ? { aspectRatio } : undefined}
        aria-label={`View ${item.name} project`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.tile} style={aspectRatio ? { aspectRatio } : undefined}>
      {content}
    </div>
  );
}

// A tile that fills whatever height its flex row gives it (via the
// row's default align-items: stretch) instead of following its own
// natural aspect ratio — used when a single tile sits beside a
// stacked pair and needs to end exactly flush with the stack's bottom
// edge at any viewport width, not just approximately (unlike a fixed
// CSS aspect-ratio, which can only target one specific width).
function FillTile({ item }) {
  if (!item) return null;

  const route = item?.name ? PROJECT_ROUTES[item.name] : undefined;
  const content = (
    <>
      <img
        src={getSrc(item)}
        alt={item.name || item.file}
        loading="lazy"
        className={styles.crop}
      />
      <Label item={item} />
    </>
  );

  if (route) {
    return (
      <Link href={route} className={`${styles.tile} ${styles.fill}`} aria-label={`View ${item.name} project`}>
        {content}
      </Link>
    );
  }

  return <div className={`${styles.tile} ${styles.fill}`}>{content}</div>;
}

// JustifiedRow projects that should link out to their own detail page.
const ROW_ROUTES = {
  "Swatantra Residence": "/projects/swatantra-residence",
  "Apartment 88": "/projects/apartment-88",
  "House of Stepped Garden": "/projects/house-of-stepped-garden",
  "Stonex India Building": "/projects/stonex-india-building",
  "House of Dancing Screens": "/projects/house-of-dancing-screens",
  "Library House": "/projects/library-house",
  "House of Sculpted Screens": "/projects/house-of-sculpted-screens",
  "Express Office": "/projects/express-office",
};

// Manual width overrides for JustifiedRow items whose natural,
// ratio-based width would misalign with a same-column tile sitting in
// a different, independently justified row (nothing links two rows'
// widths automatically). House of Dancing Screens is left as the
// reference (its own natural ratio, 184px wide / right edge at 848px
// on the reference screenshot); every other left-column item below is
// tuned to land at that same 184px / 848px right edge, solved from
// pixel measurements taken directly off the live page (not just the
// RATIOS table, which only got within ~4px):
//   content width available in a 3-item row: 544px
//   content width available in a 2-item row: 557px
//   House of Sculpted Screens: x / (x + 0.612 + 0.674) = 184/544 -> 0.657
//   Color Box Office:          already 184px at its natural ratio (0.704 still applies from the RATIOS-based estimate, keeps its match)
//   Veya Apartment:             x / (x + 0.687 + 0.704) = 184/544 -> 0.711
//   Color Dialogue:             already 184px at 0.723
// Both flex-grow (width share) and display aspect-ratio (crop target)
// are set to this same value, so — by the same "flex-grow == own
// aspect ratio keeps every row item the same height" trick the rest of
// JustifiedRow relies on — each still lands at exactly its own row's
// height, just narrower than its real photo ratio would give it, with
// the small resulting crop handled by object-fit: cover. Express
// Office, Gandhi Darshan Park, Ashraya Residence, Jaipur Residence,
// Architect's Office and J House are untouched.
const ROW_WIDTH_OVERRIDE = {
  "House of Sculpted Screens": 0.657,
  "Color Box Office": 0.704,
  "Veya Apartment": 0.711,
  "Color Dialogue": 0.723,
};

// A row of 2+ tiles that all share one height, purely via CSS
// (flex-grow set to each photo's real aspect ratio, or a manual
// ROW_WIDTH_OVERRIDE value for the rare item that needs to match a
// column width instead). No JS measurement.
function JustifiedRow({ items }) {
  return (
    <div className={styles.row}>
      {items.map((item) => {
        if (!item) return null;

        const override = item.name ? ROW_WIDTH_OVERRIDE[item.name] : undefined;

        const content = (
          <>
            <img
              src={getSrc(item)}
              alt={item.name || item.file}
              loading="lazy"
              className={override ? styles.crop : undefined}
            />
            <Label item={item} />
          </>
        );
        const style = {
          flexGrow: override ?? RATIOS[item.name] ?? 1,
          ...(override ? { aspectRatio: override } : {}),
        };

        const route = item?.name ? ROW_ROUTES[item.name] || PROJECT_ROUTES[item.name] : undefined;

        if (route) {
          return (
            <Link
              href={route}
              className={styles.rowTile}
              style={style}
              aria-label={`View ${item.name} project`}
              key={item.name}
            >
              {content}
            </Link>
          );
        }

        return (
          <div className={styles.rowTile} style={style} key={item.name}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

const JUSTIFIED_ROWS = [
  ["House of Stepped Garden", "Stonex India Building"],
  ["House of Dancing Screens", "Library House"],
  ["House of Sculpted Screens", "Express Office", "Gandhi Darshan Park"],
  ["Color Box Office", "Ashraya Residence"],
  ["Veya Apartment", "Jaipur Residence", "Architect's Office"],
  ["Color Dialogue", "J House"],
];

export default function JustifiedGallery({ items }) {
  const swatantra = findItem(items, "Swatantra Residence");
  const apartment88 = findItem(items, "Apartment 88");

  return (
    <div className={styles.gallery}>
      <div className={styles.masonry}>
        <div className={styles.col1}>
          <Tile item={findItem(items, "Slender House")} />
          <Tile item={findItem(items, "Floating Courtyard House")} />
          <Tile item={findItem(items, "Palette Apartment")} />
          <Tile item={findItem(items, "Step Maze")} />
        </div>
        <div className={styles.col2}>
          <Tile item={findItem(items, "Haveli Dharampura")} />
          <JustifiedRow items={[swatantra, apartment88]} />
          <MatchedTile item={findItem(items, "Art House")} />
          <MatchedTile item={findItem(items, "Heritage Park")} />
        </div>
      </div>

      {/* Justified rows — House of Stepped Garden onward */}
      {JUSTIFIED_ROWS.map((names, i) => (
        <JustifiedRow items={names.map((n) => findItem(items, n))} key={i} />
      ))}

      {/* Second block — Intersext Showroom through Studio Element, laid
          out as the same four paired-rows as the Canva reference: a big
          tile beside a stacked pair, a Golden Haveli/Cubix Office row,
          then the mirrored big-tile/stacked-pair pattern twice more. */}
      <div className={styles.row}>
        <div style={{ flex: "2.1 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Intersekt Showroom") || findItem(items, "Intersext Showroom")} />
        </div>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Legend Veneer Exhibition - Delhi")} />
          <Tile item={findItem(items, "Astra Heights")} />
        </div>
      </div>

      <JustifiedRow
        items={[findItem(items, "Golden Haveli"), findItem(items, "Cubix Office")]}
      />

      <div className={styles.row}>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Imelda.Inc")} />
          <Tile item={findItem(items, "Lahori Gate Museum")} />
        </div>
        <div style={{ flex: "2 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Screen House")} />
        </div>
      </div>

      <div className={styles.row}>
        <div style={{ flex: "2.1 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "The Blue Courtyard")} />
        </div>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Tiles and Kitchen Showroom")} />
          <Tile item={findItem(items, "Studio Element")} />
        </div>
      </div>

      {/* Third block — Alaya Residence through House of Hues, again
          following the Canva reference row-by-row. */}
      <div className={styles.row} style={{ alignItems: "flex-start" }}>
        <div style={{ flex: "2.1 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "Alaya Residence")} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "Legend Venner Exhibition - Mumbai")} />
        </div>
      </div>

      <div className={styles.row}>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Krisha's Residence")} />
          <Tile item={findItem(items, "Color Court")} />
        </div>
        <div style={{ flex: "2 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "House of Curves")} />
        </div>
      </div>

      <Tile item={findItem(items, "Sachdeva Farmhouse")} />

      <div className={styles.row}>
        <div style={{ flex: "2.1 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Glulam Showroom")} />
        </div>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Kavyam")} />
          <Tile item={findItem(items, "JP Apartment")} />
        </div>
      </div>

      <div className={styles.row} style={{ alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "Pattern Play")} />
        </div>
        <div style={{ flex: "2 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "NOCC Office")} />
        </div>
      </div>

      <Tile item={findItem(items, "The Stepwell")} />

      <div className={styles.row} style={{ alignItems: "flex-start" }}>
        <div style={{ flex: "2.1 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "Aravali Farmhouse")} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <Tile item={findItem(items, "House of Hues")} />
        </div>
      </div>

      {/* Fourth block — AMG Office through Sobhti Residence, following
          the Canva reference row-by-row. */}
      <JustifiedRow
        items={[findItem(items, "AMG Office"), findItem(items, "Signature Office")]}
      />

      <JustifiedRow
        items={[
          findItem(items, "Adharshila Vatika Kindergarten"),
          findItem(items, "Sonipat Havelli"),
        ]}
      />

      <JustifiedRow
        items={[findItem(items, "Grey Apartments"), findItem(items, "Poetic House")]}
      />

      <Tile item={findItem(items, "Bhimtal Resort")} />

      <div className={styles.row}>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Brick House")} />
        </div>
        <div
          style={{
            flex: "1.3 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Bandikui Railway Station")} />
          <Tile item={findItem(items, "Extension of Heritage Park") || findItem(items, "Heritage Park Extension")} />
        </div>
      </div>

      <JustifiedRow
        items={[findItem(items, "Fuidic Office"), findItem(items, "Gupta's Residence")]}
      />

      <Tile item={findItem(items, "House Around a Tree")} />

      {/* Saatvik Marble Showroom (site-plan graphic) beside a stacked
          pair — Jain's Residence over The Canvas — matching the Canva
          reference exactly. No alignItems override here (defaults to
          stretch), so Saatvik's FillTile fills exactly the stack's
          height and always ends flush with it. */}
      <div className={styles.row}>
        <div style={{ flex: "1.4 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Saatvik Marble Showroom")} />
        </div>
        <div
          style={{
            flex: "2 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Jain's Residence")} />
          <Tile item={findItem(items, "The Canvas")} />
        </div>
      </div>

      {/* Sethi's Residence beside a stacked pair — Sobhti Residence over
          Hansgrohe Showroom, matching the Canva reference. No
          alignItems override here either, for the same reason. */}
      <div className={styles.row}>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <FillTile item={findItem(items, "Sethi's Residence")} />
        </div>
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <Tile item={findItem(items, "Sobhti Residence")} />
          <Tile item={findItem(items, "Hansgrohe Showroom")} />
        </div>
      </div>

      {/* Fifth block — Toy Bank Museum through The Urban Nest, following
          the Canva reference row-by-row. */}
      <Tile item={findItem(items, "Toy Bank Museum")} />

      <JustifiedRow
        items={[findItem(items, "Concrete House"), findItem(items, "House on Hill")]}
      />

      <JustifiedRow
        items={[
          findItem(items, "House in Harmony"),
          findItem(items, "Marmo Home Office"),
          findItem(items, "Solance Apartment"),
        ]}
      />

      <Tile item={findItem(items, "Sanctum House")} />

      <JustifiedRow
        items={[findItem(items, "Shri Vrinda Hotel"), findItem(items, "Dispensary Sonipat")]}
      />

      <Tile item={findItem(items, "The Garden House") || findItem(items, "Gurdeep ji Ka Ghar")} />

      <JustifiedRow
        items={[
          findItem(items, "Rasa Farmhouse"),
          findItem(items, "Marble City Exhibition Stall"),
        ]}
      />

      <JustifiedRow
        items={[
          findItem(items, "The Urban Nest"),
          findItem(items, "Marble City Exhibition Stall"),
        ]}
      />

      <Tile item={findItem(items, "")} />
    </div>
  );
}
// Shared with CategoryGallery.js (category views reuse the same ratios + routes).
export { RATIOS, PROJECT_ROUTES, ROW_ROUTES, MATCHED_ROUTES };