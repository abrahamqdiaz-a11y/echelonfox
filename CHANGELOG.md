# Distinct photography — 11 November 2026

- Added four different stock scenes: a code review, a business conversation, a close-up laptop review and a small group sharing ideas.
- Replaced the near-duplicate hero photo and removed repeated uses of the original office scene. The homepage, Our Approach and About now use five distinct photographs, with each used once.
- Added an editorial photograph beside the existing About closing copy; no founder, staff or client identities are inferred from stock images.
- Kept images local, compressed as WebP, explicitly sized and responsive. Only hero images are eager-loaded; editorial images remain lazy-loaded.
- Updated image sources and removed the unused portrait asset. Site copy, forms, backend behaviour and routes are unchanged.

---

# AI consultancy direction — 11 November 2026

- Repositioned EchelonFox as a founder-led AI strategy and implementation consultancy, retaining the commercial diagnosis-first approach.
- Rebuilt the homepage around AI opportunities, implementation, human oversight and adoption. Added illustrative applications for enquiries, knowledge access and operations, clearly separated from client results.
- Added dedicated AI Strategy & Readiness, AI Assistants & Integrations, and AI Adoption & Improvement routes. Reframed the existing automation page as AI Workflow & Automation.
- Made the four AI capabilities primary in navigation, service overview, footer and organisation schema. Retained all five supporting business service pages and all existing redirects.
- Updated About, Contact, Our Approach, shared CTAs, metadata, sitemap, Open Graph imagery and llms.txt to the AI positioning.
- Kept case-study data and founder biographical claims unchanged. Selected Work explicitly identifies historical business-system projects as separate from AI implementation claims.
- Added locally hosted WebP workplace photography in staggered hero panels and editorial sections. Images illustrate collaboration, not EchelonFox staff or clients. Sources are recorded in docs/IMAGE-CREDITS.md.
- Added brief one-time section reveals, subtle hero panel reveals and restrained hover feedback. Content remains visible without JavaScript. Reduced-motion preferences are respected, including changes during a session.
- Extended tests to all 22 sitemap pages, local image references and motion behaviour. Production build, TypeScript, metadata/schema/link checks and mocked contact/navigation/motion tests passed.
- Contact integration, backend code, database, email delivery and authentication infrastructure are unchanged. No production deployment performed for this branch.

---

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
