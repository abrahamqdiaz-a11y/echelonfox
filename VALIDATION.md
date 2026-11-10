# Redesign validation

## Passing checks

- Next.js production build and TypeScript compilation.
- All 19 sitemap pages: one H1, unique title and description, self-canonical, correct Open Graph URL, page-specific social metadata and valid JSON-LD.
- Internal page destinations, fragment targets, skip-link targets and unpublished-case exclusion.
- Service schema on all six capability pages.
- Contact field parity across the hidden homepage form, rendered component and static Netlify definition.
- Contact component: labels, required fields, optional website, consent and honeypot, encoded payload, success, non-OK response and network failure. Fetch is mocked; no external submission is sent.
- Navigation component: mobile disclosure, Escape, focus return, desktop disclosure dismissal, route-change reset, current-page indication and capability destinations.
- Subscription canonical/noindex and static form-definition noindex.
- Reduced-motion rule and absence of decorative gradients.
- API, Supabase helpers, database and drip function, middleware and redirect configuration unchanged.

Run `npm run build && npm run test:site` to repeat the automated checks.

## Remaining verification

Shared browser control (`cua_repl.js`) was not available in the attached managed environment. No browser preview was launched. Desktop/mobile visual rendering, real keyboard traversal, browser accessibility behaviour, Core Web Vitals and screenshots remain unverified. DOM interaction checks and CSS media-query inspection do not establish browser or responsive correctness.

No Netlify, Supabase, Resend or calendar credentials were available in this executor. Live notifications, delivery, authenticated administration, subscription sending, scheduled email execution and booking completion were not exercised. Use an agreed test recipient and a safe preview environment before production approval.

The existing `middleware` convention generates a Next.js deprecation warning. It is retained to avoid changing authentication infrastructure within the redesign.

No production deployment has been made. Netlify form discovery and notification delivery need confirmation in the intended hosting environment. Production deployment requires separate approval.
