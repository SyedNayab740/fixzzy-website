# Fixzzy — Home Services Website

A React + Vite recreation of the Fixzzy landing page design (Header, Hero, Services, Emergency, Trust, Become-a-Pro/Partner, How It Works, App Download, Footer), built with Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes on this implementation

- **Stack:** React 19 + Vite, Tailwind CSS v4 (via `@tailwindcss/postcss`), Framer Motion for scroll reveals / hover / counters, `lucide-react` for iconography.
- **Illustrations:** The technician, emergency technician, and van artwork are original hand-built SVG illustrations (`src/components/illustrations/`) styled to match the mockup's palette, poses, and composition — not the exact photographic source images, since this environment cannot download or reproduce the original photography. Swap these for real photography by replacing the components' contents or by rendering an `<img>` in their place.
- **Phone mockups:** Built with a reusable `PhoneFrame` component (`src/components/PhoneFrame.jsx`) and real HTML/CSS UI inside, matching the app screens shown in the mockup (Home feed, Emergency, Partner earnings).
- **Structure:** every section from the mockup is a standalone component in `src/components/` and is composed in `src/App.jsx` in the same order as the design.
- **Responsiveness:** layouts collapse from the 4-column service grid down to 2 columns on mobile, the header collapses into a hamburger menu, and phone mockups hide gracefully on narrow viewports to preserve legibility.
- **Animation:** scroll-reveal (`whileInView`), hover lift on cards, an animated counter for the stats bar, and an animated timeline connector in "How It Works" — kept deliberately subtle per the brief.

## Design tokens

Colors, fonts, and spacing live in `src/index.css` under the `@theme` block (Tailwind v4 CSS-first config) — adjust `--color-brand-*` to retheme globally.
