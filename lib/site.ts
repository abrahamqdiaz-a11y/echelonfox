/** Approved public contact details and navigation. */
export const SITE = {
  name: "EchelonFox",
  url: "https://echelonfox.com",
  description:
    "We identify growth opportunities, solve commercial bottlenecks and implement the marketing, technology and operational systems your business actually needs.",
  email: "abe.quinn@echelonfox.com",
  bookingUrl: "https://cal.com/abe-quinn/growth-meeting",
  linkedin: "https://www.linkedin.com/company/echelonfox/",
} as const;
export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/services" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Selected Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;
