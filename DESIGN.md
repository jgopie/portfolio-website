# Jordan Gopie Portfolio Design Context

## Design Direction

Understated and direct. Use typography, spacing, and the actual content to establish hierarchy. No notebook metaphor, decorative stamps, folded corners, graph-paper backgrounds, or paper shadows.

## Theme and Color

Dark mode is the default; retain a complete light theme and remember manual choices. A reader can browse articles or projects comfortably in either setting.

Scope the public theme with the `public-site` class on the document root. The private Valentine route omits this class and retains the legacy palette.

Use OKLCH tokens:

- Dark: charcoal at 18% lightness, surfaces at 22%, off-white primary text at 94%, muted text at 74%.
- Light: background at 97%, surfaces at 99%, primary text at 23%, muted text at 45%.
- Neutral tokens use chroma 0.005 and hue 155.
- Retain green for links, focus, and interactive emphasis. Metadata uses neutral gray rather than amber.
- Keep contrast suitable for normal-size text in both themes.

## Typography

- Recursive, proportional and non-casual (`MONO` 0, `CASL` 0), for public headings, navigation, and interface text.
- Literata for article prose. Code retains Recursive with `MONO` 1.
- Homepage name: fluid 3-5rem. Supporting homepage headings: 1.75-2.5rem. Article titles: 2.25-3.5rem.
- Use natural case, restrained weights and tracking, and metadata of at least 0.8125rem.
- Let full titles wrap naturally. Never truncate content to fit a layout.

## Layout and Components

- Align the homepage introduction with the rest of the page. Pair it with a simple featured-article text block separated by a rule.
- Writing follows the introduction, using flat entries, existing thumbnails, dates, and titles.
- Projects remain a compact list; stack entries below 1024px.
- Contact and footer links are lightweight text links.
- Legal pages use sober document styling; preserve all legal text.
- Maintain visible keyboard focus, mobile navigation, skip links, and comfortable article measure.

## Imagery and Motion

Keep existing images without decorative desaturation filters. Do not introduce generated imagery, a self-portrait, or new animations. Respect reduced-motion preferences.

## Content Boundaries

Use plain framing such as Home, Writing, Work, Contact, Latest post, and About this site. Preserve article titles, excerpts, bodies, project descriptions, dates, tags, image assets, and legal text. Shared navigation and footer use the new framing; the private Valentine component stays unchanged.
