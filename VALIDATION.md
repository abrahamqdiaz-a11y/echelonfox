# Redesign validation

## Passing checks

Updated for the revenue operations positioning on 14 November 2026.

- Next.js production build and TypeScript compilation.
- All 15 sitemap pages: one H1, unique title and description, self-canonical, correct Open Graph URL, page-specific social metadata and valid JSON-LD.
- Internal page destinations, fragment targets, skip-link targets and unpublished-case exclusion.
- Service schema with offer prices on How It Works, Embedded Growth Team and each industry page.
- Every public page except Contact and the legal pages ends with exactly one closing call to action.
- Copy-rule check: no "owner-led", "leverage", "unlock", "synergy", retired tagline or retired brand names in public pages.
- All four published prices present on the homepage; redirect rules present for every retired service URL.
- 301 redirects confirmed against a local production server for `/services`, all nine former service pages, older service URLs, `/websites`, `/ai-agents`, `/pricing`, `/ecommerce`, `/saas` and `/industries`.
- Contact field parity across the hidden homepage form, rendered component and static Netlify definition.
- Contact component: labels, required fields, optional website, consent and honeypot, encoded payload, success, non-OK response and network failure. Fetch is mocked; no external submission is sent.
- Navigation component: mobile disclosure, Escape, focus return, desktop disclosure dismissal, route-change reset, current-page indication, both dropdown groups (one open at a time) and offer and industry destinations.
- Subscription canonical/noindex and static form-definition noindex.
- One-time motion: intersection handling, live reduced-motion preference changes and cleanup of observers/timers.
- Local image references, dimensions and alternative-text attributes in generated HTML.
- Reduced-motion rule and absence of decorative gradients.
- API, Supabase helpers, database and drip function, middleware and redirect configuration unchanged.

Run `npm run build && npm run test:site` to repeat the automated checks.

## Remaining verification

Headless Chromium screenshots of the homepage, How It Works, Embedded Growth Team and the industry page were reviewed at 1440px desktop and iPhone 13 widths, with no horizontal overflow. Real keyboard traversal, screen-reader behaviour, other browsers and Core Web Vitals remain unverified.

No Netlify, Supabase, Resend or calendar credentials were available in this executor. Live notifications, delivery, authenticated administration, subscription sending, scheduled email execution and booking completion were not exercised. Use an agreed test recipient and a safe preview environment before production approval.

The existing `middleware` convention generates a Next.js deprecation warning. It is retained to avoid changing authentication infrastructure within the redesign.

No production deployment has been made. Netlify form discovery and notification delivery need confirmation in the intended hosting environment. Production deployment requires separate approval.
