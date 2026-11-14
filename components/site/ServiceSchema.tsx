import { SITE } from "@/lib/site";
import type { Offer } from "@/lib/offers";

/** Schema.org offer for one rung of the ladder, with its public starting price. */
export function offerSchema(o: Offer, url: string) {
  return {
    "@type": "Offer",
    name: o.name,
    description: o.summary,
    url,
    priceCurrency: "USD",
    priceSpecification: o.monthly
      ? {
          "@type": "UnitPriceSpecification",
          minPrice: o.priceValue,
          priceCurrency: "USD",
          unitText: "month",
        }
      : {
          "@type": "PriceSpecification",
          minPrice: o.priceValue,
          priceCurrency: "USD",
        },
  };
}

/** Service structured data for a page that sells one or more offers. */
export default function ServiceSchema({
  name,
  description,
  path,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  offers: Offer[];
}) {
  const url = `${SITE.url}${path}`;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          serviceType: "Revenue operations consulting",
          description,
          url,
          provider: {
            "@type": "Organization",
            name: SITE.publicName,
            url: SITE.url,
          },
          areaServed: { "@type": "Country", name: "United States" },
          offers: offers.map((o) => offerSchema(o, url)),
        }),
      }}
    />
  );
}
