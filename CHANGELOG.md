# Consultancy redesign

## Positioning and content

- Adopted the approved growth strategy and business systems positioning, with diagnosis preceding service recommendations.
- Rebuilt the complete homepage around growth constraints, connected capabilities, methodology, documented work and a consultation path.
- Reframed `/services` as What We Do, with four connected capability groups.
- Retained and redesigned all four existing service URLs for strategy, acquisition, sales systems and automation.
- Added `/services/technology-operations` and `/services/websites-digital-infrastructure` with distinct commercial and search intent.
- Added `/our-approach` with Diagnose, Design, Build, Improve and a review loop.
- Reworked Selected Work and all three published cases around context, challenge, diagnosis, strategy, implementation and documented outcomes/completed improvements.
- Retained anonymisation, existing claims and the unpublished fourth case. Added no client metrics, testimonials or new biographical claims.
- Reworked About using existing founder-led experience and Contact using the approved challenge-led copy.
- Preserved the insurance search guide and its URL, softened the highest-ROI heading and fixed-timeline claims, applied British spellings, and restyled Insights and utility/legal pages.

## Design and navigation

- Replaced the red-pen system with midnight navy, warm off-white, charcoal, slate, white and copper.
- Added compressed, self-hosted variable Manrope and Inter fonts with their licences.
- Replaced decorative gradients with editorial layouts, restrained rules and contextual diagrams.
- Added reusable section introductions, capability layouts, process and commercial-system diagrams.
- Rebuilt the header with desktop capability disclosure, mobile navigation, Escape dismissal, focus return and route-change reset.
- Rebuilt the footer and contextual consultation sections.
- Updated administration UI accents while retaining its workflows and configured email brand settings.
- Updated Open Graph imagery and reduced-motion behaviour.

## Contact and privacy

- Added optional website input and synchronised all three Netlify form definitions.
- Retained field names, form name, static POST target, consent, honeypot, delivery mechanism and success/error states.
- Preserved direct email and Cal.com booking links.
- Updated privacy wording for consultancy positioning and the optional website field. Added no analytics or advertising scripts.

## SEO

- Preserved all existing public routes and legacy redirect configuration.
- Added new pages to the sitemap, using unique titles, descriptions, canonical and social metadata.
- Preserved ProfessionalService, WebSite, Service, BlogPosting and visible-content FAQ structured data where applicable. Removed the former automation FAQ schema with its removed FAQ content.
- Corrected `/subscribe`'s inherited homepage canonical while retaining noindex.
- Added noindex to the static Netlify form-definition page.
- Updated the service offer catalogue, Open Graph image and `llms.txt`.

## Operational preservation

- No changes to API implementations, Supabase client/server helpers, database schema, drip function, authentication middleware or legacy redirects.
- Preserved subscriptions, opt-out behaviour, campaign administration, contact import and email sending.
- No production deployment performed.

## Checks

- Added a production HTML audit and mocked React interaction checks for contact and navigation.
- Added the `test:site` command and jsdom development dependency.
- Production build, TypeScript, page metadata/link/schema checks and interaction tests pass; see VALIDATION.md for limits.
