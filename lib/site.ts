import { industries } from "./industries";

/** Approved public contact details and navigation. */
export const SITE = {
  name: "EchelonFox",
  publicName: "EchelonFox",
  displayName: "EchelonFox",
  tagline: "Go-to-market strategy and revenue operations for established B2B companies.",
  headline: "Find the revenue your business already earned and lost.",
  url: "https://echelonfox.com",
  description:
    "GTM strategy and revenue operations for established B2B companies. We sharpen how you win customers, find revenue leaks and fix the systems behind growth. Every engagement starts with a Revenue Leak Diagnostic.",
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
      { label: "GTM Strategy", href: "/what-we-do#gtm-strategy" },
      { label: "Revenue Operations", href: "/what-we-do#revenue-operations" },
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
