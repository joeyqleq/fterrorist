import type { Metadata } from "next";
import DonatePageClient from "@/components/pages/DonatePageClient";

export const metadata: Metadata = {
  title: "Support Freebie Terrorist | Fuel the student freebie arsenal",
  description:
    "Keep the freebie arsenal humming. Chip in so we can keep sourcing verified student perks and subsidize .edu access for people who need it.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate to Freebie Terrorist",
    description:
      "Help fund the hunt for zero-cost student perks and keep the rebellion running.",
    url: "https://terrorist.me/donate",
    type: "website",
    images: [
      {
        url: "https://terrorist.me/terrorist_logo.png",
        width: 1200,
        height: 630,
        alt: "Support Freebie Terrorist donations artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieterrorist",
    creator: "@freebieterrorist",
    title: "Support Freebie Terrorist | Donate",
    description:
      "Keep the .edu hookup service alive by funding new student offer hunts and subsidies.",
    images: ["https://terrorist.me/terrorist_logo.png"],
  },
};

export default function DonatePage() {
  return <DonatePageClient />;
}
