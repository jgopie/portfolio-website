# Jordan Gopie Portfolio Design Context

## Design Direction

"Independent studio, personal voice." Bold, confident typography with a single brand-green accent, card-based evidence (app screenshots, project cards), and generous spacing. It should feel like a working developer's studio: polished but not corporate.

## Theme and Color

Dark is the default. The light theme is complete, and manual choices are remembered in `localStorage`. The public theme is scoped with the `public-site` class on `<html>`; `/supersecret` omits it and keeps the legacy palette and aliases.

Tokens live in `src/styles/global.css` (OKLCH):

- **Dark:** background 16.5% L, surfaces 20.5%, raised 24.5%, text 95%, secondary 75%, and faint 64%, with a slight green tint (hue 165).
- **Light:** warm off-white background (97.5%), white surfaces, text 21%, and secondary 44%.
- **Accent (`--accent`):** brand green, `oklch(80% 0.15 158)` in dark and `oklch(50% 0.13 158)` in light. Used for the primary button, links, focus, eyebrows, and the mark. `--on-accent` is the text color used on accent fills.
- **Warm (`--warm`):** reserved for "in development" and "unreleased" status pills. Don't use it decoratively.
- Soft accent radial glows are allowed on the featured app card and the contact panel only.

## Typography

- **Recursive** (`MONO 0`, `CASL 0`) for headings and UI. Headings are weight 750 with -0.03em tracking.
- **Recursive `MONO 1`** only for `.chip` tech tags and code.
- **Literata** for article prose and the About paragraphs.
- Homepage hero: fluid 2.6–5rem, with the second clause in secondary text color. Page titles: 2.4–4rem. Section titles: 2–3rem.

## Brand Mark

A "JG" monogram, stroked in `--on-accent` on a rounded accent square (`public/favicon.svg`, and inline in `Navbar.astro`). The OG image (`public/og-default.png`, 1200×630) repeats the mark and hero line.

## Components

- Shared utilities in `global.css`: `.eyebrow`, `.section`, `.section-head`, `.section-head-row`, `.page-head`, `.chips`/`.chip`, `.status[data-status]`, `.text-link`, `.btn-primary`, `.btn-secondary`.
- `components/projects/AppCard.astro`: the featured variant shows three screenshots and store links; the compact variant is a fully clickable card.
- `components/projects/ClientProjectCard.astro`: client case studies.
- `components/blog-card/BlogCard.astro`: image-topped post card, used on the homepage and `/blog`.
- Legal pages use `LegalPageShell.astro`, which adds a Work › App › Page breadcrumb automatically for `/apps/<slug>/…` routes.

## Imagery

- App screenshots live in `src/assets/apps/<slug>/` and are served through `astro:assets` `<Image>` with capped widths.
- Blog images stay in `/public` (OG tags link to them) and are also imported through `src/data/postImages.ts` for resized listings.
- No generated or stock hero imagery.

## Accessibility and Motion

Keep the skip link, visible focus rings, mobile menu with Escape-to-close, and `prefers-reduced-motion` handling. Maintain normal-text contrast in both themes. Card links stretch over the card with a pseudo-element rather than wrapping block content in `<a>`.
