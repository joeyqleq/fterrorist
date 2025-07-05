import { studentOffers } from "@/lib/studentOffers"
import OfferDetail from "@/components/OfferDetail"
import { notFound } from "next/navigation"

interface OfferPageProps {
  params: {
    slug: string
  }
}

export default function OfferPage({ params }: OfferPageProps) {
  // Convert slug back to provider name (simple implementation)
  const providerName = params.slug.replace(/-/g, " ")
  const offer = studentOffers.find((o) => o.provider.toLowerCase().replace(/\s+/g, "-") === params.slug)

  if (!offer) {
    notFound()
  }

  return <OfferDetail offer={offer} />
}

export function generateStaticParams() {
  return studentOffers.map((offer) => ({
    slug: offer.provider.toLowerCase().replace(/\s+/g, "-"),
  }))
}
