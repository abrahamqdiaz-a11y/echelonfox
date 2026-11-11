# EchelonFox Consulting

Business Strategy, Technology & Execution Consultancy, built with Next.js 16, React and TypeScript. Public pages use the navy, off-white and copper design system in `app/globals.css`, with locally served Manrope and Inter fonts.

## Development

```sh
npm ci
npm run dev
```

Production remains hosted on Netlify. Contact submissions depend on Netlify Forms; a local server does not prove notification delivery.

## Validation

```sh
npm run build
npm run test:site
```

The site checks require Python 3 and the development dependencies. They inspect all sitemap pages in the production build for metadata, structured data, internal links, anchors and form-definition consistency. React/JSDOM tests exercise the contact form and navigation, plus one-time motion and reduced-motion preferences. Contact requests are intercepted, so tests send no email or external form submission. These checks do not replace real-browser visual, responsive or assistive-technology testing.

## Structure

- `app/` — public pages, utility pages, administration and APIs.
- `app/globals.css` — design tokens, responsive layouts and shared styles.
- `components/site/` — navigation, footer, heroes, capability layouts, process and commercial-system diagrams.
- `components/ContactForm.tsx` — the Netlify form, with visible labels and success/error states.
- `lib/capabilities.ts` — four core AI capabilities and five retained supporting business capabilities.
- `lib/work-data.ts` — published and withheld case records. Do not add claims or permissions without evidence.
- `lib/metadata.ts` — consistent page and social metadata.
- `next.config.ts` — retained legacy redirects.
- `scripts/` — build-output and interaction checks.

## Preservation rules

The contact form is named `contact`. Keep its fields synchronised in `components/ContactForm.tsx`, the hidden form in `app/page.tsx`, and `public/netlify-forms.html`. Preserve the POST destination `/netlify-forms.html`, consent and honeypot. Netlify notification settings must be checked in the hosting account.

Keep campaign administration, subscription, global opt-out handling and legacy email links working. The redesign does not change the Supabase schema or email-delivery implementation.

No analytics or advertising trackers are installed. Adding them requires appropriate consent behaviour and corresponding privacy-policy changes. The current cookie notice is informational.

Use British English, retain valuable public URLs and publish only documented work. Do not publish client names, performance figures or testimonials without evidence and the relevant permission.

See `CHANGELOG.md` for the redesign and `VALIDATION.md` for verification limits. Production deployment requires separate approval.
