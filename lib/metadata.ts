import type { Metadata } from "next";
import { SITE } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: { absolute: `${title} | ${SITE.publicName}` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_GB",
      siteName: SITE.publicName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `EchelonFox — ${SITE.headline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
