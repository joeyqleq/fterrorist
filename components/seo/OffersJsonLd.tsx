"use client";

import Script from "next/script";
import { studentOffers } from "@/lib/studentOffers";

export default function OffersJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Freebie Terrorist Student Offer Arsenal",
    numberOfItems: studentOffers.length,
    itemListElement: studentOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: offer.provider,
        description: offer.offer,
        url: offer.link,
        category: offer.category,
        availability: offer.duration,
      },
    })),
  };

  return (
    <Script
      id="offers-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
