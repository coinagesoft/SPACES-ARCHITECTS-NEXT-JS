// ============================================================
//  BLOG POSTS — one place for the blog listing + detail pages
//
//  - The first 8 posts come from `assets.blog` (config/assets.js).
//    Their text is NOT changed here; only the cover image and the
//    date are set (see COVERS and DATES below).
//  - The 5 newest posts (from the PDFs) are written out in full below.
//
//  Cover images are the project COVER images on the asset host
//  (assets/projects/<PROJECT>/cover/...).
//
//  Article text is a list of blocks:
//    { type: "p",     text }            paragraph
//    { type: "sub",   text }            small line under the title
//    { type: "h",     text }            heading inside the article
//    { type: "ul",    items: [...] }    bullet list
//    { type: "quote", text }            pull quote
//    { type: "tags",  text }            hashtag line
// ============================================================

import { assets, assetImage } from "@/assets";

// ---- Cover images (blog id -> image) ----
const COVERS = {
    // 1  Haveli Dharampura
    "a-legacy-restored": assetImage("projects/haveli/haveli_hero.jpg"),
    // 2  Heritage Park
    "a-pause-in-the-walled-city": assetImage("projects/HERITAGE-PARK/cover/Cover Image.webp"),
    // 3  House of Stepped Gardens
    "house-becomes-a-landscape": assetImage("projects/HOUSE-OF-STEPPED-GARDEN/cover/hero image.webp"),
    // 4  Golden Haveli
    "time-held-in-detail": assetImage("projects/GOLDEN-HAVELL/cover/Cover Image.webp"),
    // 5  Art House
    "architecture-as-art": assetImage("projects/ART_HOUSE/cover/COVER.webp"),
    // 6  House of Dancing Screens
    "architecture-in-motion": assetImage("projects/HOUSE-OF-DANCING-SCREENS/cover/COVER.webp"),
    // 7  Slender House
    "6x18": assetImage("projects/SLENDER HOUSE.jpg"),
    // 8  House of Blue Courtyard
    "the-courtyard": assetImage("blogs/Courtyard.webp"),
};

// ---- Images for the 5 new posts ----
const NEW_COVERS = {
    // 9  What Clients Rarely See  (no project named -> House of Curves cover; CHANGE IF NEEDED)
    "what-clients-rarely-see": assetImage("projects/THE GARDEN HOUSE/COVER/COVER.webp"),
    // 10 Future of Exposed Concrete -> Swatantra Residence
    "future-of-exposed-concrete": assetImage("projects/SWATANTRA-RESIDENCE/COVER IMAGE/hero.jpg"),
    // 11 Heritage Conservation in India -> Heritage Park
    "heritage-conservation-in-india": assetImage("blogs/11.webp"),
    // 12 What I Have Learned  (no project named -> Kapil's portrait; CHANGE IF NEEDED)
     "what-i-have-learned": assetImage("projects/project font.png"),
    // 13 Timeless Rather Than Trendy -> House of Stepped Gardens
    "timeless-rather-than-trendy": assetImage("projects/HOUSE-OF-STEPPED-GARDEN/cover/hero image.webp"),
};

// ---- Dates (DD-MM-YYYY, shown exactly like this on the listing) ----
const DATES = {
    "a-legacy-restored": "03-02-2023",
    "a-pause-in-the-walled-city": "10-04-2023",
    "house-becomes-a-landscape": "21-03-2026",
    "time-held-in-detail": "05-06-2024",
    "architecture-as-art": "18-10-2023",
    "architecture-in-motion": "21-09-2024",
    "6x18": "08-03-2024",
    "the-courtyard": "06-08-2026",
    "what-clients-rarely-see": "03-02-2026",
    "future-of-exposed-concrete": "26-09-2026",
    "heritage-conservation-in-india": "02-11-2025",
    "what-i-have-learned": "15-07-2024",
    "timeless-rather-than-trendy": "28-09-2025",
};

// ---- The 8 existing posts (text untouched) ----
// ---- The 8 existing posts ----
// Posts with `sections` (heading + paragraphs) get headings; the rest
// keep their plain `paragraphs` list exactly as before.
// ---- The 8 existing posts ----
// `lead` = optional blocks before the first heading (sub / quote / p).
// `sections` = headings + paragraphs. `signoff` = closing name lines.
// Posts without `sections` keep their plain `paragraphs` list.
// ---- The 8 existing posts ----
// `lead` = optional blocks before the first heading (sub / quote / p).
// `sections` = headings + paragraphs. `closing` = optional blocks after
// the last section (e.g. a pull quote). `signoff` = closing name lines.
// Posts without `sections` keep their plain `paragraphs` list.
const existingPosts = assets.blog.map((post) => ({
    id: post.id,
    title: post.title,
    image: COVERS[post.id] ?? post.image,
    date: DATES[post.id] ?? "",
    blocks: post.sections
        ? [
              ...(post.lead ??
                  (post.intro ? [{ type: "sub", text: post.intro }] : [])),
              ...post.sections.flatMap((section) => [
                  { type: "h", text: section.heading },
                  ...section.paragraphs.map((text) => ({ type: "p", text })),
              ]),
              ...(post.closing ?? []),
              ...(post.signoff
                  ? [
                        { type: "sub", text: post.signoff.name },
                        ...(post.signoff.tagline
                            ? [{ type: "sub", text: post.signoff.tagline }]
                            : []),
                    ]
                  : []),
          ]
        : post.paragraphs.map((text) => ({ type: "p", text })),
}));
// ---- The 5 new posts ----
const newPosts = [
    {
        id: "what-clients-rarely-see",
        title: "What Clients Rarely See Behind an Architectural Project",
        listing: {
            title: "What Clients Rarely See",
            excerpt:
                "When people admire a completed home, they often notice the façade, the materials, or the beautifully lit spaces. What they rarely see is everything that happened before the first brick was laid.",
        },
        blocks: [
            { type: "p", text: "When people admire a completed home, they often notice the façade, the materials, or the beautifully lit spaces." },
            { type: "p", text: "What they rarely see is everything that happened before the first brick was laid." },
            { type: "p", text: "Every architectural project begins with far more questions than answers." },
            { type: "p", text: "We spend weeks—sometimes months—not drawing buildings, but understanding people. How does a family live? Where does the morning light enter? Which spaces bring everyone together, and which provide solitude? What memories should a home create twenty years from now?" },
            { type: "p", text: "Then comes the invisible work." },
            {
                type: "ul",
                items: [
                    "Countless sketches that never leave the studio.",
                    "Design ideas that are discarded because there is a better solution.",
                    "Hours spent refining proportions that most people will never consciously notice—but will instinctively feel.",
                    "Meetings with structural, landscape, lighting, MEP, and interior consultants to ensure every discipline works in harmony.",
                    "Site visits where a few millimetres can determine whether a detail feels effortless or compromised.",
                    "Conversations with artisans and craftsmen whose skill transforms drawings into architecture.",
                    "Daily problem-solving as budgets, regulations, weather, materials, and construction realities reshape the journey.",
                ],
            },
            { type: "p", text: "Architecture is rarely a straight line from concept to completion. It is an ongoing process of listening, refining, adapting, and making hundreds of decisions—many of which remain invisible when the project is finally complete." },
            { type: "p", text: "Perhaps that's the true beauty of architecture. When it is done well, the effort disappears. The spaces simply feel calm, natural, and inevitable—as though they could never have been designed any other way." },
            { type: "p", text: "The best compliment an architect can receive isn't, “What an impressive building.”" },
            { type: "p", text: "It's when someone says, “This place just feels right.”" },
            { type: "p", text: "Because behind every effortless space are thousands of thoughtful decisions that no one ever sees." },
            { type: "p", text: "What do you think is the most overlooked part of the architectural process?" },
            { type: "tags", text: "#Architecture #ArchitectLife #DesignProcess #ResidentialArchitecture #LuxuryHomes #ArchitectureStudio #Construction #DesignThinking #IndianArchitecture #SpacesArchitectsKA" },
        ],
    },
        {
        id: "future-of-exposed-concrete",
        title: "The Future of Exposed Concrete in Luxury Homes",
        listing: {
            title: "Future of Exposed Concrete",
            excerpt:
                "For decades, luxury in residential architecture has been defined by the richness of materials. Perhaps the future of luxury is not about adding more, but about knowing what to leave untouched.",
        },
        blocks: [
            { type: "sub", text: "Redefining Luxury Through Material Honesty, Simplicity and Timeless Architecture" },
            { type: "sub", text: "By Kapil Aggarwal | Principal Architect, SpacesArchitects@ka" },
            { type: "p", text: "For decades, luxury in residential architecture has been defined by the richness of materials — polished marble, rare timber, intricate detailing and elaborate finishes. But as architectural sensibilities evolve, so does our understanding of what luxury truly means." },
            { type: "quote", text: "Perhaps the future of luxury is not about adding more, but about knowing what to leave untouched." },

            { type: "h", text: "The Beauty of Imperfection" },
            { type: "p", text: "There is something profoundly beautiful about concrete when it is allowed to express its natural character. Its subtle tonal variations, textures, imperfections and traces of construction create a visual language that manufactured finishes often struggle to replicate." },
            { type: "p", text: "Unlike materials that rely on applied decoration, exposed concrete derives its character from the process of making. Every surface tells a story of formwork, craftsmanship, light and time." },
            { type: "p", text: "When detailed with precision, concrete possesses a quiet confidence. It does not demand attention; instead, it creates an architectural presence that reveals itself gradually." },
            { type: "p", text: "Its ability to age gracefully, develop character and interact with changing daylight makes it particularly relevant to the idea of timeless luxury." },

            { type: "h", text: "From Industrial Material to Luxury Expression" },
            { type: "p", text: "The transformation of exposed concrete in contemporary residential architecture reflects a larger shift in design thinking." },
            { type: "p", text: "Luxury is increasingly being associated with spatial experience, material authenticity and architectural clarity rather than excessive embellishment." },
            { type: "p", text: "Concrete offers an opportunity to create powerful architectural compositions through mass, proportion, texture and light. Large structural planes, sculptural volumes, cantilevers and carefully framed openings can become defining elements of a residence." },
            { type: "p", text: "However, the success of exposed concrete depends greatly on restraint and detailing. Its relationship with other materials is equally important." },
            { type: "p", text: "Warm timber softens its visual strength. Natural stone introduces depth and richness. Glass creates transparency, while landscape brings movement and organic contrast. The result is an architectural language that feels both powerful and welcoming." },

            { type: "h", text: "Swatantra Residence: Concrete as an Architectural Language" },
            { type: "p", text: "At Swatantra Residence, we explored exposed concrete not merely as a structural necessity, but as an essential part of the architectural expression." },
            { type: "p", text: "The intention was to allow the material to define the character of the home while creating a sensitive balance between solidity and warmth." },
            { type: "p", text: "Carefully composed concrete planes are complemented by warm timber, natural stone and landscape. These contrasting materials establish a dialogue between the built environment and nature." },
            { type: "p", text: "Rather than concealing the inherent character of concrete beneath layers of applied finishes, we allowed its texture and mass to become part of the architectural experience." },
            { type: "p", text: "Light plays an equally important role. As daylight moves across the surfaces, shadows reveal subtle variations in texture and depth, allowing the architecture to transform throughout the day." },
            { type: "p", text: "The house becomes more than a composition of materials; it becomes an evolving experience shaped by light, nature and everyday life." },

            { type: "h", text: "Why Exposed Concrete Belongs in the Future of Luxury Homes" },
            { type: "p", text: "As homeowners and architects become increasingly conscious of authenticity, sustainability and longevity, exposed concrete offers several compelling possibilities." },
            {
                type: "ul",
                items: [
                    "Timeless aesthetics that are not governed by passing design trends.",
                    "Material honesty celebrating construction rather than concealing it behind decorative layers.",
                    "Architectural freedom to explore sculptural forms, cantilevers, dramatic volumes and seamless transitions between interior and exterior spaces.",
                    "A dialogue with nature using concrete as a visual counterpoint to greenery, water, timber and natural stone.",
                    "A considered approach to finishes that can reduce dependence on applied finishes and certain maintenance interventions when appropriately detailed and protected.",
                ],
            },
            { type: "p", text: "Its environmental performance, however, depends on structural design, mix selection, local climate and construction quality." },

            { type: "h", text: "The Importance of Getting Concrete Right" },
            { type: "p", text: "Exposed concrete is unforgiving. Unlike conventional finishes, it does not easily conceal construction imperfections." },
            { type: "p", text: "Its success depends on meticulous planning — from formwork design and mix consistency to reinforcement detailing, pouring techniques and curing." },
            { type: "p", text: "Every junction, opening, edge and surface transition must be considered from the beginning of the design process." },
            { type: "p", text: "The challenge is not simply to expose concrete, but to make it beautiful." },
            { type: "p", text: "Equally important is creating a comfortable living environment. Concrete's thermal mass, insulation requirements, orientation and shading must be carefully addressed, particularly in warmer climates." },
            { type: "p", text: "True luxury is achieved when material expression and environmental performance work together." },

            { type: "h", text: "A New Definition of Luxury" },
            { type: "p", text: "The future of residential architecture may belong to homes that are less concerned with displaying wealth and more interested in expressing character." },
            { type: "p", text: "Homes where materials are allowed to age, where natural light becomes an architectural element, where landscape is integrated into everyday living, and where spaces derive their richness from proportion, texture and atmosphere." },
            { type: "p", text: "Exposed concrete represents this shift — from decoration to expression, from excess to restraint, and from surface richness to architectural depth." },
            { type: "p", text: "At SpacesArchitects@ka, we believe that the most enduring architecture is not necessarily the most elaborate. It is architecture that understands its materials, respects its surroundings and creates spaces that become more meaningful with time." },
            { type: "quote", text: "Perhaps the ultimate expression of luxury is not what we add to a home, but what we have the confidence to leave exposed." },

            { type: "sub", text: "SpacesArchitects@ka" },
            { type: "tags", text: "#Architecture #LuxuryHomes #ExposedConcrete #ContemporaryArchitecture #ResidentialDesign #Materiality #ArchitecturalDesign #IndianArchitecture #ConcreteArchitecture #SpacesArchitectsKA" },
        ],
    },
    {
        id: "heritage-conservation-in-india",
        title: "Heritage Conservation in India: Why It Matters",
        listing: {
            title: "Heritage Conservation in India",
            excerpt:
                "Across India, we often celebrate the construction of new buildings while overlooking the immense value of the places that already define our cities.",
        },
        blocks: [
            { type: "p", text: "What if conserving heritage isn't about preserving the past—but designing a better future?" },
            { type: "p", text: "Across India, we often celebrate the construction of new buildings while overlooking the immense value of the places that already define our cities." },
            { type: "p", text: "Heritage conservation is not about freezing history in time. It is about giving historic places a renewed purpose, ensuring they continue to enrich everyday life for future generations." },
            { type: "p", text: "One of the most rewarding examples for our practice has been Chartilal Goel Heritage Park in the heart of Old Delhi." },
            { type: "p", text: "Before the intervention, the site had gradually lost its identity. Fragmented spaces, neglected edges, and limited public engagement had reduced what should have been a vibrant urban landmark into an underutilized open space." },
            { type: "p", text: "After the transformation, the vision was not to recreate history, but to reveal it." },
            { type: "p", text: "The design strengthened connections between people, landscape, and the surrounding historic fabric. Public spaces became more accessible, movement became intuitive, and the park evolved into a place where heritage could once again be experienced—not as an artifact, but as part of everyday urban life." },
            { type: "p", text: "Projects like these remind us that conservation is not only about restoring old structures." },
            { type: "p", text: "It is about restoring memory, belonging, and civic pride." },
            { type: "p", text: "In rapidly growing cities, every historic intervention carries an important question:" },
            { type: "p", text: "Should we keep replacing our history, or should we learn to build our future around it?" },
            { type: "p", text: "For me, the answer is clear." },
            { type: "p", text: "The most sustainable building is often the one that already exists. The most meaningful public space is one that connects people not only with each other, but also with the stories of the place they inhabit." },
            { type: "p", text: "Conservation is not the opposite of progress. It is one of its most enduring expressions." },
            { type: "p", text: "I'd love to hear your thoughts—how can architects and urban designers make heritage more relevant to younger generations while respecting its authenticity?" },
            { type: "tags", text: "#HeritageConservation #UrbanDesign #PublicSpaces #OldDelhi #LandscapeArchitecture #AdaptiveReuse #Architecture #CulturalHeritage #IndianArchitecture #SpacesArchitectsKA" },
        ],
    },
    {
        id: "what-i-have-learned",
        title: "What I Have Learned After Designing 200+ Homes",
        listing: {
            title: "What I Have Learned",
            excerpt:
                "When I designed my first home, I believed architecture was about creating beautiful buildings. More than 200 homes later, I've realized it's really about designing better lives.",
        },
        blocks: [
            { type: "p", text: "When I designed my first home, I believed architecture was about creating beautiful buildings. More than 200 homes later, I've realized it's really about designing better lives." },
            { type: "p", text: "Every project has taught me something new, but a few lessons have remained constant." },
            { type: "h", text: "1. Listen before you draw." },
            { type: "p", text: "The best homes begin with conversations, not sketches. Understanding how a family lives is more important than deciding how a building should look." },
            { type: "h", text: "2. Natural light is the greatest luxury." },
            { type: "p", text: "Marble, bespoke furniture, and premium finishes can elevate a home, but nothing transforms a space like thoughtfully designed daylight." },
            { type: "h", text: "3. Simplicity is the hardest thing to achieve." },
            { type: "p", text: "Removing unnecessary elements takes far more discipline than adding them. The strongest architecture often feels effortless." },
            { type: "h", text: "4. Materials should age with dignity." },
            { type: "p", text: "Whether it's exposed concrete, natural stone, timber, or brass, materials should tell a richer story with time." },
            { type: "h", text: "5. Details define the experience." },
            { type: "p", text: "Small decisions—from a staircase width to a shadow gap—shape how a home is experienced every day." },
            { type: "h", text: "6. Nature is not an accessory." },
            { type: "p", text: "Landscape, courtyards, water, and natural ventilation should be integral to the architecture." },
            { type: "h", text: "7. Clients remember how a home makes them feel." },
            { type: "p", text: "Years later, people remember the light, the gathering spaces, and the emotions—not just dimensions." },
            { type: "h", text: "8. Architecture is a collaborative craft." },
            { type: "p", text: "Successful projects are made possible by clients, consultants, engineers, artisans, and site teams working together." },
            { type: "p", text: "After more than 200 homes, one thing has become clear:" },
            { type: "p", text: "Architecture isn't about designing buildings. It's about creating places where memories are made, relationships grow, and life unfolds." },
            { type: "p", text: "If you've designed, built, or lived in a home that changed the way you experience everyday life, what made the biggest difference?" },
            { type: "tags", text: "#Architecture #LuxuryHomes #ResidentialArchitecture #DesignThinking #ArchitectLife #ContemporaryArchitecture #IndianArchitecture #SpacesArchitectsKA #DesignProcess #HomeDesign" },
        ],
    },
    {
        id: "timeless-rather-than-trendy",
        title: "Should a Home Be Timeless Rather Than Trendy?",
        listing: {
            title: "Timeless Rather Than Trendy?",
            excerpt:
                "Every few years, the architectural world embraces a new trend. Yet the homes that continue to inspire us decades later are rarely those that chased fashion.",
        },
        blocks: [
            { type: "sub", text: "A design philosophy by SpacesArchitects@ka" },
            { type: "p", text: "Every few years, the architectural world embraces a new trend. Yet the homes that continue to inspire us decades later are rarely those that chased fashion—they are those that were designed with enduring principles." },
            { type: "h", text: "Designing for the Next Generation" },
            { type: "p", text: "A home should evolve gracefully with its owners. Timeless architecture prioritizes natural light, proportion, craftsmanship, context, and material honesty over short-lived visual trends." },
            { type: "h", text: "Case Study: Swatantra Residence" },
            { type: "p", text: "At Swatantra Residence, exposed concrete, natural stone, warm timber, and landscape were selected because they age beautifully. The architecture is defined by light, shadow, and texture rather than decorative excess." },
            { type: "h", text: "Case Study: House of Stepped Gardens" },
            { type: "p", text: "Rather than imposing a form on the site, the house follows the contours of the land. Courtyards, terraces, and gardens become an integral part of everyday living, creating a timeless dialogue between architecture and nature." },
            { type: "h", text: "Five Principles of Timeless Homes" },
            {
                type: "ul",
                items: [
                    "Design around people, not trends.",
                    "Choose materials that improve with age.",
                    "Let natural light shape the experience.",
                    "Strengthen the connection between indoors and landscape.",
                    "Invest in proportion and detailing that endure.",
                ],
            },
            { type: "quote", text: "We don't design homes for today's photographs—we design them for tomorrow's memories." },
        ],
    },
].map((post) => ({ ...post, image: NEW_COVERS[post.id], date: DATES[post.id] }));

// Order = order on the blog page (existing 8, then the 5 newest)
export const blogPosts = [...existingPosts, ...newPosts];

export const getBlogPost = (id) => blogPosts.find((post) => post.id === id);