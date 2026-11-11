/** Approved public contact details and navigation. */
export const SITE = {
  name: "EchelonFox",
  publicName: "EchelonFox AI Consulting",
  displayName: "EchelonFox Consulting",
  tagline: "Business Strategy. Technology. Execution.",
  url: "https://echelonfox.com",
  description:
    "We help businesses identify commercial constraints and implement practical improvements across marketing, technology and operations, connecting business strategy with execution.",
  email: "abe.quinn@echelonfox.com",
  bookingUrl: "https://cal.com/abe-quinn/growth-meeting",
  linkedin: "https://www.linkedin.com/company/echelonfox/",
} as const;
export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Selected Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;
