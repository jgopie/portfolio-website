# Jordan Gopie Portfolio Design Context

## Design Direction

Late-night engineering field notebook. The site should feel like reading marked-up notes beside a running build: tactile, low-glare, authored, and slightly worn without becoming messy.

The public portfolio does not use a self-portrait as a primary artifact. Personality should come from authored writing, note structure, metadata, and sparse physical-paper marks rather than a headshot or generated avatar.

## Theme

The lead scene is a late-night bench: a peer is reading notes and project traces in a dim room, with enough warmth to keep the site human. Dark mode is the primary expression. Light mode remains fully designed as a daylight notebook counterpart.

## Color Strategy

Use OKLCH tokens. Replace the current electric blue, vibrant purple, and brand gradient with:

- Graphite neutrals for page and surface color.
- Oxidized green for live/work signals, links, focus, and quiet positive emphasis.
- Dull amber for annotations, metadata, and warmth.
- Muted red only for error states.

Avoid pure `#000` and `#fff`. Avoid gradient text, glow-heavy hover states, decorative glassmorphism, and blue/purple SaaS accents.

## Typography

Use free fonts:

- `Literata` for reading, prose, and major display moments.
- `Recursive` for navigation, metadata, technical labels, compact UI, and code-adjacent text.

Use strong contrast between headings, body, and labels. Body copy should stay within comfortable reading measure.

## Layout

Use a desk-index structure rather than a centered hero brochure:

- First viewport: name, compact identity statement, featured note, and quick routing.
- Projects: compact work ledger, not case-study cards.
- Blog: notes index with article artifacts and readable metadata.
- Articles: essay-first layout with strong reading rhythm.
- Legal pages: sober document panels using the shared notebook system.

Cards are allowed for individual entries and legal document blocks, but avoid nested cards and repeated identical grids.

Use a sparse physical field-slip grammar for expressive surfaces: ruled lines, stamp-like labels, clipped or worn corners, small pinned artifacts, and dry marginal notes. Keep the marks restrained so the site feels handled, not scrapbooked.

## Motion

Restrained motion only: subtle reveals, hover states, and focus changes. Do not animate layout properties. Respect `prefers-reduced-motion`.

## Imagery

Use existing site images as cropped or pinned artifacts. Do not introduce generated imagery for this redesign.

Do not ship or render a self-portrait on the public site. Existing blog images remain historical post artifacts.

## Copy Boundaries

Homepage, blog index framing, titles, excerpts, and article intros may be sharpened. Blog bodies remain historical artifacts. Legal body text is not rewritten.
