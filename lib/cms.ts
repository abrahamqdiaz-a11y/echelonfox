import { capabilities, getCapability, type Capability } from "@/lib/capabilities";
import { SITE } from "@/lib/site";

/**
 * Editable copy from Sanity (the Studio lives in /studio), read once at build time.
 *
 * - SANITY_PROJECT_ID unset: the site builds from the defaults below, so local dev
 *   and preview builds work without a Sanity account.
 * - SANITY_PROJECT_ID set but Sanity unreachable or empty: the build fails rather
 *   than shipping stale text, and Netlify keeps the last good deploy live.
 *
 * The defaults are also the starting content in studio/seed/initial-content.ndjson.
 */
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
const DATASET = process.env.SANITY_DATASET || "production";
const API_VERSION = "2025-02-19";

export type SiteSettings = {
  /** Lines separated by "\n"; ==phrase== gets the red pen underline. */
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaText: string;
};

export type ServiceCard = Capability & { name: string; summary: string };

export const DEFAULT_SETTINGS: SiteSettings = {
  heroHeadline: "Find what's ==holding growth back==.\nBuild what comes next.",
  heroSubheadline: SITE.description,
  heroCtaText: "Start a conversation",
};

async function query<T>(groq: string): Promise<T> {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(groq)}`;
  // No data cache: every build must see what is published now. The pages stay static.
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Sanity query failed (${res.status}): ${groq}`);
  return (await res.json()).result as T;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!PROJECT_ID) return DEFAULT_SETTINGS;
  const doc = await query<SiteSettings | null>(
    `*[_id == "siteSettings"][0]{heroHeadline, heroSubheadline, heroCtaText}`
  );
  if (!doc?.heroHeadline || !doc.heroSubheadline || !doc.heroCtaText) {
    throw new Error("Sanity: the Site settings document is missing or incomplete. Publish it in the Studio.");
  }
  return doc;
}

/** Visible services in their Sanity order, each joined to the page it links to. */
export async function getServices(): Promise<ServiceCard[]> {
  if (!PROJECT_ID) return capabilities;
  const docs = await query<{ name: string; shortDescription: string; page: string }[]>(
    `*[_type == "service" && visible != false && defined(page) && !(_id in path("drafts.**"))] | order(order asc){name, shortDescription, page}`
  );
  if (docs.length === 0) throw new Error("Sanity: no visible services. Publish at least one in the Studio.");
  return docs.flatMap((d) => {
    const page = getCapability(d.page);
    return page ? [{ ...page, name: d.name, summary: d.shortDescription }] : [];
  });
}
