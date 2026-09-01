# Spaces Architects@ka — Next.js Site

A pixel-close Next.js (App Router) rebuild of the Spaces Architects@ka site,
covering the Home, Studio/About, Projects, Blog pages and the full-screen
hamburger menu.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where things live

```
spaces-architects/
├── app/
│   ├── layout.js          Root layout — wires up the global font
│   ├── globals.css        Tailwind + shared type utility classes
│   ├── page.js             Home page
│   ├── about/page.js       Studio / About page
│   ├── projects/page.js    Projects portfolio grid
│   └── blog/page.js        Blog / journal listing
├── components/
│   ├── Header.js            Logo + hamburger trigger
│   ├── MenuOverlay.js        Full-screen nav overlay (matches menu design)
│   ├── SiteChrome.js         Client wrapper owning menu open/close state
│   ├── Footer.js              Shared footer (nav columns, newsletter, legal bar)
│   ├── ProjectCard.js         Project tile used on Home + Projects
│   ├── NewsCard.js            Press tile used on Home
│   └── FeaturedIn.js          Press-logo strip
├── config/
│   ├── fonts.js       ⭐ SINGLE FILE to change the site-wide font
│   ├── assets.js      ⭐ SINGLE FILE listing every image used on the site
│   └── site.js         Nav links, footer columns, page copy
├── tailwind.config.js  Colour tokens (ink / accent / muted / paper / line)
├── next.config.mjs
└── package.json
```

## Changing the font

Open `config/fonts.js` and swap the `next/font/google` import/call for a
different font. Every page picks it up automatically via the
`--font-primary` CSS variable — no other file needs to change.

## Changing images

Open `config/assets.js`. Replace any URL with either:
- a local file placed in `public/images/...`, referenced as `/images/file.jpg`
- another remote URL (add its domain to `images.remotePatterns` in
  `next.config.mjs`)

Placeholder photography ships from Unsplash so the project runs immediately;
swap in real project photography before launch.

## Notes on fidelity

- Layout, type scale, letter-spacing, section order and the two-column
  full-screen menu follow the supplied screenshots closely.
- "Featured In" press logos are rendered as text marks (no external logo
  files were available) — drop in real SVG/PNG logos via `config/assets.js`
  and swap the `FeaturedIn` component's markup for `<Image>` tags if wanted.
- Colours (`ink`, `accent`, `muted`, `paper`, `line`) are centralized in
  `tailwind.config.js`.
