"use client"

import OfferCard from "./offer-card"
import type { StudentOffer } from "@/lib/studentOffers"

interface OfferGridProps {
  offers: StudentOffer[]
}

export default function OfferGrid({ offers }: OfferGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer} index={index} />
      ))}
    </div>
  )
}