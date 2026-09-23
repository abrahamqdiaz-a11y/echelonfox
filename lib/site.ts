/** Site-wide facts. Change them here, not in individual pages. */
export const SITE = {
  name: "EchelonFox",
  url: "https://echelonfox.com",
  description:
    "EchelonFox works with established companies to identify the commercial constraint that matters most, then connects positioning, customer acquisition, sales processes, and technology into a clearer way to grow.",
  email: "abe.quinn@echelonfox.com",
  bookingUrl: "https://cal.com/abe-quinn/growth-meeting",
  linkedin: "https://www.linkedin.com/company/echelonfox/",
} as const;

export const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
] as const;
