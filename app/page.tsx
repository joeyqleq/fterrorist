import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";
import OffersJsonLd from "@/components/seo/OffersJsonLd";

export const metadata: Metadata = {
  title: "FREEBIE TERRORIST | Curated Student Freebies & .edu hook-ups",
  description:
    "A rebellious, constantly updated arsenal of verified student freebies, edu-only perks, and underground tips to beat paywalls without coupon fluff.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FREEBIE TERRORIST | Student Freebie Arsenal",
    description:
      "Verified zero-cost software, cloud, and AI perks for students and makers who hate paywalls.",
    url: "https://terrorist.me",
    type: "website",
    images: [
      {
        url: "https://terrorist.me/terrorist_logo.png",
        width: 1200,
        height: 630,
        alt: "Freebie Terrorist digital anarchist hero artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieterrorist",
    creator: "@freebieterrorist",
    title: "FREEBIE TERRORIST | Student Freebie Arsenal",
    description:
      "The constantly updated index of student freebies, edu-only perks, and rebellious .edu hookups.",
    images: ["https://terrorist.me/terrorist_logo.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <OffersJsonLd />
      <HomePageClient />
    </>
  );
}
