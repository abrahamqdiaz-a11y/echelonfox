# EchelonFox content studio (Sanity)

Editable website text lives in Sanity (project `ndbe4jjy`, dataset `production`).
The website reads it **when Netlify builds the site**, so a change shows up a minute
or two after you press **Publish**.

## What's editable

| In the Studio | On the website |
| --- | --- |
| **Site settings** → Hero headline, subheadline, main button text | Top of the homepage |
| **Services** → name, short description, order, show/hide | "What gets built" cards on the homepage, and the Services page |
| **Proof points** → title, result, short description | Not shown on the site yet |

Headline tips: each line in the box is a line on the page. Put the words that get the
red pen underline between double equals signs: `Find what's ==holding growth back==.`

The service pages themselves (`/services/...`) are still written in code; a service's
**Links to page** setting picks which one its card opens.

## Commands (run inside this folder)

```bash
npm install          # once
npx sanity login     # once per computer
npm run seed         # once: loads the site's current text (skips anything already there)
npm run dev          # Studio on http://localhost:3333
npm run deploy       # publishes the Studio to https://echelonfox.sanity.studio
```

## How the website connects

Netlify environment variables: `SANITY_PROJECT_ID=ndbe4jjy`, `SANITY_DATASET=production`.
Without them the site builds from the original text in `lib/cms.ts`. With them, the
build stops (and the previous version stays live) if Sanity can't be reached or the
Site settings document is empty, so a half-finished edit never ships.

A Sanity webhook calls a Netlify build hook on every publish, which rebuilds the site.
