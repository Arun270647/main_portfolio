# Handoff: Arun Vignesh portfolio — "Bubblegum Chrome" redesign

## Overview
Full UI/UX revamp of arunvignesh.my in a goofy Y2K / sticker-bomb direction: dark plum base, candy accents, bubbly chrome headlines, bouncy motion. Four routes: Home, About, Projects, Experience. The old terminal/CRT theme, certificates grid, testimonials carousel, blog and contact form are dropped (certs + testimonials survive as marquee one-liners; contact is a `mailto:` CTA).

## What's in this bundle
- `src/` — **ready-to-drop React + TypeScript source** written for the existing Vite + react-router-dom stack in `Arun270647/main_portfolio`. No Tailwind, no framer-motion: one CSS file + inline styles + a tiny IntersectionObserver `Reveal` component.
- `design_reference/` — the HTML design files these components were derived from (they rely on the design tool's runtime, so treat them as source-of-truth for values, not as pages to open).

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, shadows, copy and motion are final. Recreate 1:1.

## Install
1. Copy `src/pages`, `src/components`, `src/data`, `src/styles` into the repo's `src/` (replace the old sections/pages — `App.tsx` here shows the 4 routes; keep your `SEOHead`/Helmet, analytics and `vercel.json` rewrites).
2. Fonts load via `@import` at the top of `bubblegum.css` (Bowlby One, Outfit, Space Mono — Google Fonts). Move the `<link>`s into `index.html` with `preconnect` for better LCP.
3. Add photos: `/public/me.jpg` (Home hero blob), `/public/me-goofy.jpg` (About). Optional project screenshots → set `shot: '/projects/<id>.jpg'` in `data/portfolio.ts`.
4. Remove old deps you no longer use (framer-motion, lucide-react, react-icons, shadcn/ui, emailjs) once the old pages are gone.

## Design tokens
Colors (`:root` in `bubblegum.css`)
- `--ink` #120a14 (page bg) · `--ink-2` #1f1222 (photo well)
- `--cream` #fff3e0 (nav, footer, body text) · `--cream-2` #ffd9b0 (muted text)
- `--tang` #ff6b1a · `--gum` #ff8ad8 · `--must` #ffd23f · `--mint` #5df2c8

Type
- Display: **Bowlby One** 400, uppercase, line-height .88–.95. Hero h1 `clamp(64px,13vw,210px)`; section h2 `clamp(40px,6–7vw,88–100px)`; card h3 26–28px; footer h2 `clamp(48px,11vw,180px)`.
- Body: **Outfit** 500 (400 for paragraphs); body copy `clamp(17px,1.5vw,21px)` / 1.5; card blurb 16px / 1.4; buttons 700.
- Labels: **Space Mono** 13px, uppercase, letter-spacing .14em (section eyebrows: "01 — about").
- "Chrome" headline = stacked hard text-shadows, no blur: `4px 4px 0 ink, 8px 8px 0 accent, 12px 12px 0 ink` (h1) or `5px 5px 0 ink, 10px 10px 0 accent` (h2). Footer adds a third step `15px 15px 0 ink`.

Shape & depth
- Radii: pills 999px; cards 30px; speech bubbles `28px 28px 28px 6px` (tail bottom-left) / `28px 28px 6px 28px`; footer `60px 60px 0 0`; photo = morphing blob (`@keyframes blob`).
- Shadows are **solid offsets, never blurred**: nav `0 8px 0 <page accent>`, cards `0 12px 0 cream`, buttons `0 7px 0` (hover `0 11px 0`), chips `0 5px 0`, footer buttons `0 6px 0 ink`.
- Everything sits slightly tilted: cards `rotate(±0.7–2deg)`, pills `rotate(±1–3deg)`; hover straightens to 0 and lifts (`translateY(-10px)` cards, `-4px` buttons).

Spacing
- Page gutter 20px; content `max-width:1100px` (hero 1300, timeline 1000); section padding 90–120px vertical; grid gaps 26–28px; `grid-template-columns: repeat(auto-fit, minmax(min(100%,300px),1fr))` everywhere so it reflows under ~640px.

## Screens
**Home** (`pages/Home.tsx`) — sticky cream pill nav (shadow tang) → centered hero: mint status pill with blinking dot, two-line chrome name, 620px intro, two buttons (`see the work` tang, `gimme advice` cream) → 420px blob photo with 3 bobbing sticker pills + spinning "hire me pls" badge → mustard marquee (tilt 1.2°, 20s) → About teaser: tilted "player card" (stats: curiosity 99, shipping speed 92, sleep 12, coffee ∞) beside copy and squishing stat pills → "shipped & live" horizontal snap strip of 4 featured cards → "the receipts": 5 role pills, alternating tilt/indent → footer "say hi!" with email/github/linkedin/instagram.

**About** (`pages/About.tsx`) — nav shadow mustard → "hi, I'm / Arun" + mustard blob photo → sticky headline "student by day, shipper by 2 AM." beside 3 speech-bubble paragraphs (cream/mint/gum) → "three lanes" cards (tang/gum/mint) → "candy jar": 15 skill pills, each squishing on a staggered delay → gum marquee of goofy facts → 3 outlined "currently / studying / open to" cards → footer "now the work".

**Projects** (`pages/Projects.tsx`) — nav shadow gum → "shipped & live" + 3 filter pills (all · 11 / client work · 9 / games & AI · 2; active = filled, `0 5px 0 cream`) → responsive grid of all 11 `ProjectCard`s (color cycle gum→mint→must→tang→cream; striped placeholder until a screenshot is set; `live ↗` + `github ↗`) → mint testimonial marquee → footer "yours next?".

**Experience** (`pages/Experience.tsx`) — nav shadow mint → "intern to / product / in 12 months" → central 10px cream rail (18% opacity); 6 rows alternating [year badge | card] / [card | year badge]; badges are bobbing pills, sticky at `top:120px`; cards are speech bubbles with mono date, display role, bold company, bullet list; row 4 has a "promoted ↑" tag; last row is dark-ink outlined → mustard certifications marquee → footer "next role?".

## Interactions & motion
- Entry: `.drop` (`drop` keyframes, .9–1s, `cubic-bezier(.2,1.4,.4,1)`, staggered via `--d`), photo `.popin`.
- Scroll reveal: `<Reveal kind="up|left|right|pop" delay>` adds `.in` at 15% visibility, once. Transitions: opacity .6s, translate .9s `cubic-bezier(.2,1.5,.4,1)`, scale .9s `--spring` (= `cubic-bezier(.2,1.6,.4,1)`).
  - Do **not** use `kind="pop"` on children of the `.strip` snap scroller — scaling a snap target shifts `scrollLeft`. Use `up`.
- Loops: `bob` 4–5s, `squish` 3.2s, `blob` 8–11s, `spin` 16s, `marquee` 20–26s (track is duplicated once; `width:max-content`, translate −50%).
- Hover: nav links scale 1.1 + rotate ±3° + accent fill; buttons lift 4px and swap shadow color; cards un-tilt and lift 10px; skill pills scale 1.12.
- Advice modal: random line from `data/portfolio.ts → advice`, "another one" re-rolls, click-outside / "ok bye" closes. Speech-bubble radius `40px 40px 40px 8px`, mustard, `0 14px 0 tang`.
- Reduced motion: `@media (prefers-reduced-motion: reduce)` kills all animations/transitions and forces `.reveal` visible; `Reveal` also short-circuits in JS.

## State
- `Projects`: `filter: 'all' | 'client' | 'play'` (local `useState`).
- `AdviceButton`: `open: boolean`, `line: string`.
- Nav active state from `useLocation().pathname`.
No data fetching. Geolocation from the old hero is intentionally removed.

## Assets needed from you
- `me.jpg`, `me-goofy.jpg` (square-ish; the blob mask crops to a circle-ish shape).
- Optional 16:10 screenshots for each project (`data/portfolio.ts → shot`).
- No icons are used — all glyphs are text (★ ✦ ● ↗ →).

## Files
```
src/App.tsx                     routes
src/styles/bubblegum.css        tokens, keyframes, reveal + hover classes, reduced-motion
src/data/portfolio.ts           projects (11), roles (6), skills, advice, links, card palette
src/components/Nav.tsx          sticky pill nav (+ active route)
src/components/Blobs.tsx        blurred background blobs
src/components/Marquee.tsx      tilted marquee
src/components/Reveal.tsx       scroll-reveal wrapper
src/components/AdviceModal.tsx  gimme-advice button + modal
src/components/ProjectCard.tsx  candy card
src/components/Footer.tsx       chrome-headline footer
src/pages/{Home,About,Projects,Experience}.tsx
design_reference/*.dc.html      original HTML designs (values source of truth)
```
