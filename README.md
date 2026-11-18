# EchelonFox

Go-to-market strategy and revenue operations consultancy website, built with Next.js 16, React and TypeScript. Public pages use the midnight navy (`#111827`), warm ivory (`#F8F7F4`) and periwinkle (`#7366F0`) design system in `app/globals.css`. Headlines use Instrument Sans; body text and UI use Geist. Both fonts are bundled by `next/font/google` at build time.

## Development

```sh
npm ci
npm run dev
```

Production remains hosted on Netlify. Contact submissions depend on Netlify Forms; a local server does not prove notification delivery.

## Positioning

- GTM Strategy determines which customers to target, the value proposition and the sales motion.
- Revenue Operations improves the handoffs, CRM, quoting, follow-up and retention systems that deliver the strategy.
- Revenue leakage remains the core entry problem, and all scopes remain in `lib/offers.ts`. Prices are not published anywhere on the site; offer cards show the booking step "Book a call to scope your project" (`SCOPE_STEP`).
- Capability anchors on `/what-we-do` are `#gtm-strategy` and `#revenue-operations`.

## Design system

- `app/layout.tsx` loads Instrument Sans and Geist as self-hosted font assets via Next.js.
- `app/globals.css` contains the palette and typography tokens. The darker `--accent-action` is used behind white button labels for WCAG AA contrast.
- Existing page content, tracking behaviour and public routes remain unchanged by the typography and colour refresh.
- The homepage hero embeds the supplied animated Growth Map from `public/hero-visual-growth-map.html` in a sandboxed iframe, preserving the original canvas behaviour and isolating its styles. Example figures in the illustration are not client results. The mid-page illustration respects `prefers-reduced-motion`.

## Validation

```sh
npm run build
npm run test:site
```

The site checks require Python 3 and the development dependencies. They inspect all sitemap pages in the production build for metadata, structured data, internal links, anchors and form-definition consistency. React/JSDOM tests exercise the contact form and navigation, plus one-time motion and reduced-motion preferences. Contact requests are intercepted, so tests send no email or external form submission. These checks do not replace real-browser visual, responsive or assistive-technology testing.

## Structure

- `app/` — public pages, utility pages, administration and APIs.
- `app/globals.css` — design tokens, responsive layouts and shared styles.
- `components/site/` — navigation, footer, heroes, the offer ladder, process diagram and the single closing call to action.
- `components/ContactForm.tsx` — the Netlify form, with visible labels and success/error states.
- `lib/offers.ts` — the four offers: names, terms, inclusions and exclusions, plus the `SCOPE_STEP` booking line shown in place of prices.
- `lib/industries.ts` — industry page content for the `/industries/[slug]` template. Add an entry to publish a new industry page.
- `lib/work-data.ts` — published and withheld case records. Do not add claims or permissions without evidence.
- `lib/metadata.ts` — consistent page and social metadata.
- `next.config.ts` — legacy redirects, including every retired `/services` URL → `/what-we-do`.
- `scripts/` — build-output and interaction checks.

## Preservation rules

The contact form is named `contact`. Keep its fields synchronised in `components/ContactForm.tsx`, the hidden form in `app/page.tsx`, and `public/netlify-forms.html`. Preserve the POST destination `/netlify-forms.html`, consent and honeypot. Netlify notification settings must be checked in the hosting account.

Keep campaign administration, subscription, global opt-out handling and legacy email links working. The redesign does not change the Supabase schema or email-delivery implementation.

No analytics or advertising trackers are installed. Adding them requires appropriate consent behaviour and corresponding privacy-policy changes. The current cookie notice is informational.

Use British English, retain valuable public URLs and publish only documented work. Every page ends with the shared `FinalCta`. Do not list SEO, paid advertising, content production or social media management as services we perform. Do not publish client names, performance figures or testimonials without evidence and the relevant permission.

See `CHANGELOG.md` for the redesign and `VALIDATION.md` for verification limits. Production deployment requires separate approval.
