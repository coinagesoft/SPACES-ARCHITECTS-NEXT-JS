/**
 * SITE CONTENT & NAVIGATION
 * -------------------------
 * Copy, nav links, footer columns and contact details, kept in one
 * place so text edits don't require touching component code.
 */

export const site = {
    name: "SPACES ARCHITECTS",
    handle: "@ka",
    tagline: "Architecture with a sense of place, purpose and soul",

    contact: {
        phones: ["+91 11 4310 8540", "+91 11 3568 3993"],
        email: "admin@spacesarchitects-ka.com",
        address: "A-21/A, Basement, South Extension II, New Delhi, Delhi 110049",
    },

    social: [
        { label: "Facebook", href: "#" },
        { label: "X", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "mailto:admin@spacesarchitects-ka.com" },
    ],

    // Two-column primary navigation shown in the full-screen menu overlay
    menu: [
        [
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "News+Events", href: "/news-events" },
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
        ],
        [
            { label: "Process", href: "/process" },
            { label: "Expressions", href: "/expressions" },
            { label: "Publication", href: "/publications" },
            { label: "Awards", href: "/awards" },
            { label: "Contact", href: "/contact" },
        ],
    ],

    // Four-column footer navigation
    footerColumns: [{
            title: "Architecture",
            links: ["All", "Hospitality", "Institutional", "Corporate", "Culture", "Mixed-use", "Homes"],
        },
        {
            title: "Interiors",
            links: ["All", "Leisure", "Homes", "Hotels", "F&B", "Brand Experiences", "Retail"],
        },
        {
            title: "News and Views",
            links: ["All", "Featured In", "Awards", "Events", "Blog"],
        },
        {
            title: "About",
            links: ["Spaces Architects@ka", "Team", "Clients", "Values", "Careers", "Contact"],
        },
    ],

    footerNote: "Built with Next.js",
};

export const homeCopy = {
    intro: [
        "SPACES ARCHITECTS@KA IS AN ARCHITECTURE AND DESIGN PRACTICE DRIVEN BY A BELIEF THAT THE MOST MEMORABLE SPACES ARE NOT SIMPLY BUILT THEY ARE EXPERIENCED, FELT AND REMEMBERED. THE STUDIO APPROACHES EVERY PROJECT AS AN EMOTIONAL JOURNEY, BEGINNING WITH THE CHARACTER OF A PLACE AND THE ASPIRATIONS OF THE PEOPLE WHO WILL INHABIT IT, AND EVOLVING THROUGH LIGHT, LANDSCAPE, MATERIAL, CRAFT AND MOVEMENT INTO SPACES WITH A DISTINCT IDENTITY.",
        "FROM CONTEMPORARY RESIDENCES AND WORKPLACES TO HOSPITALITY, INSTITUTIONS AND SENSITIVE HERITAGE PROJECTS, THE PRACTICE EXPLORES THE DIALOGUE BETWEEN TRADITION AND MODERNITY, FUNCTIONALITY AND EMOTION, PERMANENCE AND CHANGE. ITS WORK SEEKS TO CREATE MOMENTS OF DISCOVERY: THE FIRST GLIMPSE OF A COURTYARD, THE WARMTH OF NATURAL LIGHT ACROSS STONE, THE QUIETNESS OF A PRIVATE CORNER, OR THE MEMORY CREATED AROUND A SHARED SPACE.",
        "THIS PHILOSOPHY HAS TRANSLATED INTO A DIVERSE PORTFOLIO RECOGNISED BY LEADING ARCHITECTURE AND DESIGN PLATFORMS, WITH PROJECTS FEATURED BY ARCHDAILY, ARCHITECTURAL DIGEST, UNESCO, WORLD ARCHITECTURE COMMUNITY AND OTHERS.",
        "AT SPACES ARCHITECTS@KA, ARCHITECTURE IS ULTIMATELY ABOUT PEOPLE THEIR MEMORIES, RITUALS, ASPIRATIONS AND EVERYDAY EXPERIENCES. EACH PROJECT IS CONCEIVED AS A STORY, CAREFULLY SHAPED FROM ITS CONTEXT AND CRAFTED TO BECOME MORE MEANINGFUL WITH TIME. THE RESULT IS ARCHITECTURE THAT IS NOT MERELY SEEN, BUT DEEPLY FELT.",
    ],
};

export const aboutCopy = {
    heroTitle: "STUDIO",
    kicker: "WE DESIGN SPACES, WE CREATE STORIES. WE BUILT EXPERIENCE.",
    intro: [
        "The studio founded by Kapil Aggarwal in 2000 believes architecture is not about building but creating a soul and experience that remain with you.",
        "At Spaces Architects, every project begins with curiosity a desire to understand people, its place and story waiting to unfold. We believe great architecture emerges when imagination meets context, when light, material, landscape, art and structure come together with purpose.",
        "Our Studio approaches each commission as an unique narrative rather than predetermined style. We question the obvious, explore the unexpected and allow ideas to evolve through sketches, models and material, conversation and collaboration. The result is architecture that is expressive yet grounded, contemporary yet connected to its context.",
        "We don't seek to create a signature style. We seek to give every place its own identity.",
    ],
    quote: 'SPACESARCHITECTS@ka "Architecture with a sense of place, purpose and soul"',
    founder: {
        name: "Ar. Kapil Aggarwal",
        role: "Founder",
        // Each paragraph is a list of segments. `highlight: true` renders
        // that segment in the brand orange, matching the reference bio.
        bio: [
            [
                { text: "Ar. KAPIL AGGARWAL", highlight: true },
                { text: " Founder and Principal Architect of " },
                { text: "SPACES ARCHITECTS@KA", highlight: true },
                {
                    text: ", is an architect, artist and storyteller whose practice is rooted in the belief that architecture should create an emotional connection between people, place and memory. After graduating from MIT, Manipal, in 1996, he founded the studio in 2000, bringing together his interests in fine art, design, materiality and architecture.",
                },
            ],
            [
                {
                    text: "His work spans residences, institutions, workplaces, hospitality, interiors, landscapes and heritage, with a distinctive approach that allows every project to develop its own identity rather than follow a predetermined style.",
                },
            ],
            [
                { text: "His contribution to the architectural and cultural fabric of " },
                { text: "Old Delhi and Shahjahanabad", highlight: true },
                { text: ", particularly through the restoration of " },
                { text: "Haveli Dharampura", highlight: true },
                {
                    text: ", reflects his belief that heritage should not merely be preserved but brought back to life. The project received the ",
                },
                { text: "UNESCO Asia-Pacific Heritage Award for Cultural Heritage Conservation", highlight: true },
                {
                    text: " and brought renewed attention to the living traditions of the Walled City. His work has also received international recognition, including coverage by ",
                },
                { text: "BBC World for Adharshila Vatika and Stylist Magazine,", highlight: true },
                { text: " which featured his own studio among the world's coolest offices." },
            ],
            [
                { text: "Recognised among " },
                { text: "AD50-the 50 most influential names in architecture and design,", highlight: true },
                { text: " he has received " },
                { text: "50+ national and international awards,", highlight: true },
                {
                    text: " along with seven World Architecture Festival finalist recognitions and 300+ media features. He continues to explore architecture as a medium for creating meaningful experiences and is also the author of the national bestseller Timeless Houses.",
                },
            ],
        ],
    },
    team: [
        { name: "Kapil Aggarwal", role: "Founder & Principal Architect" },
        { name: "Studio Team", role: "Architecture & Interiors" },
        { name: "Studio Team", role: "Design & Visualisation" },
        { name: "Studio Team", role: "Project Management" },
    ],
};

export const contactCopy = {
    heading: "Contact",
    whatsapp: "+91 93110 13122",
    emails: [
        { label: "Career", value: "career@spacesarchitects-ka.com" },
        { label: "Media", value: "admin@spacesarchitects-ka.com" },
        { label: "Enquiry", value: "projects@spacesarchitects-ka.com" },
    ],
    purposeOptions: [
        "Project Enquiry",
        "Media & Press",
        "Careers",
        "General Enquiry",
    ],
    map: {
        embedSrc:
            "https://www.google.com/maps?q=A-21%2FA%2C+South+Extension+II%2C+New+Delhi%2C+Delhi+110049&output=embed",
        directionsHref:
            "https://www.google.com/maps/dir/?api=1&destination=A-21%2FA%2C+South+Extension+II%2C+New+Delhi%2C+Delhi+110049",
        heading: "How to Get Here?",
        lines: [
            "Closest station is South Ex Metro.",
            "The studio is just off South Ex Market Part 2.",
        ],
        directionsLabel: "Get Directions Here",
    },
};
