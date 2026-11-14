import { industries } from "./industries";

/** Approved public contact details and navigation. */
export const SITE = {
  name: "EchelonFox",
  publicName: "EchelonFox",
  displayName: "EchelonFox",
  tagline: "Revenue operations for established B2B companies.",
  headline: "Find the revenue your business already earned and lost.",
  url: "https://echelonfox.com",
  description:
    "We find where established B2B companies lose revenue they already earned, fix it and keep it fixed. Revenue Leak Diagnostic from $2,000.",
  email: "abe.quinn@echelonfox.com",
  bookingUrl: "https://cal.com/abe-quinn/growth-meeting",
  linkedin: "https://www.linkedin.com/company/echelonfox/",
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Items with children render as a dropdown. */
  children?: { label: string; href: string }[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "How It Works", href: "/what-we-do" },
      { label: "Embedded Growth Team", href: "/embedded-growth-team" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map((i) => ({
      label: i.name,
      href: `/industries/${i.slug}`,
    })),
  },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Selected Work", href: "/work" },
  { label: "About", href: "/about" },
];
