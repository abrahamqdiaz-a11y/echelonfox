# Echelon Fox Website

Marketing site for EchelonFox: commercial growth strategy and implementation for established companies. Built with Next.js 16 and TypeScript. The public pages use the "Red pen" design system in `app/globals.css`; Tailwind is still used by the admin area.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deployed on Netlify (see `netlify.toml`), which also captures contact form submissions via Netlify Forms.

## Structure

- `app/` — Next.js App Router pages and layout
- `app/globals.css` — design tokens and components for the "Red pen" system. Read the header comment before using the accent colour: it marks only the headline constraint phrase, the first engagement step, case-study findings, and a page's single final CTA.
- `components/site/` — header, footer, page shell, final CTA, article parts
- `components/ContactForm.tsx` — the Netlify contact form
- `lib/site.ts` — site-wide facts (email, booking link, nav)
- `lib/capabilities.ts` — the four capability groups behind `/services/*`
- `lib/work-data.ts` — case studies. Read the rules at the top before adding one: no client names or performance numbers without written permission and verifiable data, and no case goes live without a documented broader issue.
- `next.config.ts` — 301 redirects from the old single-channel service URLs

## Content rules

- Nothing unfinished ships. No `TODO`, `EDITABLE`, or placeholder strings in anything a visitor can reach.
- Echelon Fox is industry-agnostic. Individual vertical pages and articles (e-commerce, SaaS, insurance) are fine; site-wide copy stays broad.
- Statistics need a source. If a number can't be traced to the client's own analytics or a citable study, don't publish it.
- The contact form is a Netlify form named `contact`. Its fields must stay in sync across `components/ContactForm.tsx`, the hidden static form in `app/page.tsx`, and `public/netlify-forms.html`.
- No analytics or tracking scripts are installed. If any are added, `app/privacy/page.tsx` and `components/CookieConsent.tsx` must be updated first — the notice is currently informational, not a consent gate.
