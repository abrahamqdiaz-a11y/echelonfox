# EchelonFox Consulting identity

## Naming

- Navigation and primary wordmark: **EchelonFox**.
- Secondary wordmark descriptor: **CONSULTING**.
- Display identity: **EchelonFox Consulting**.
- Full public-facing organisation name in metadata/schema: **EchelonFox AI Consulting**, as specified in the branding brief.
- Positioning: **Business Strategy. Technology. Execution.**

The consultancy identifies commercial constraints and implements practical improvements across marketing, technology and operations. AI remains an existing capability within that offer. No new team-size, history, qualification or client-result claims are introduced.

## Wordmark

`components/site/Wordmark.tsx` is a text-based mark using the existing self-hosted Manrope variable font: main name at weight 500, descriptor at 400. Descriptor spacing is .34em; the main name has restrained kerning. No illustrated fox, added symbol, gradient or effect appears in the active identity.

### Downloadable assets

All paths below are relative to `public/brand/`:

- `echelonfox-consulting-navy.svg` — outlined glyphs in #101C2B, transparent background.
- `echelonfox-consulting-white.svg` — outlined glyphs in #FFFFFF, transparent background.
- Matching navy and white `.png` fallbacks.
- `ef-monogram.svg` — geometric EF icon.
- `identity.html` — responsive, noindex asset review page showing both variants and native-size favicon previews.

SVG wordmarks use outlines, so their appearance does not depend on an installed font. The outlines derive from the locally licensed Manrope font; the original OFL licence remains in `app/fonts/`. No paid font dependency is added. Website body typography remains Inter; large hero/page headings use regular Manrope for the restrained editorial direction.

## Favicon

The EF monogram uses a navy square and white rectilinear letters, drawn on a 16-unit grid. Assets: `app/icon.svg`, `app/favicon.ico`, `public/favicon-16.png`, `public/favicon-32.png` and `public/apple-touch-icon.png`. The old illustrated `app/icon.png` is removed.

## Preservation

Domain, public page URLs, existing redirects, service capability records, historical case data, form handlers and fields, tracking behaviour, database identifiers and integrations are unchanged. Existing legal-policy entity wording remains intact. Legacy public fox image files are retained solely for existing external links or historical email references; active site components, metadata and schema no longer use them.

## Changed files

- Identity components: new `components/site/Wordmark.tsx`; updated Header, Footer, Process, CapabilityPage and FinalCta.
- Identity assets: `public/brand/*`, favicon files, new `app/_og/Manrope-Regular.ttf`; removed illustrated `app/icon.png`.
- Branding and metadata: `lib/site.ts`, `lib/metadata.ts`, `app/layout.tsx`, `app/opengraph-image.tsx`, `public/llms.txt`.
- Positioning copy: `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/services/page.tsx`, `app/our-approach/page.tsx`.
- Secondary surfaces: branding only in subscribe/unsubscribe, admin layout/login, Insights metadata/publisher logo, and privacy business descriptor.
- Typography/layout: `app/globals.css`.
- Documentation and validation: README, CHANGELOG, this guide, and the existing navigation check's expected capability count.

No production deployment is authorised by this change.
