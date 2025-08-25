"use client"

import React, { useState } from "react"
import type { StudentOffer } from "@/lib/studentOffers"
import EnhancedOfferCardFixed from "./enhanced-offer-card-fixed"
import { motion, AnimatePresence } from "framer-motion"

interface EnhancedOfferGridProps {
  offers: StudentOffer[]
}

export default function EnhancedOfferGrid({ offers }: EnhancedOfferGridProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const handleCardFlip = (index: number) => {
    // If the same card is clicked, flip it back
    // If a different card is clicked, flip the new one and close the old one
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 items-stretch">
      <AnimatePresence mode="popLayout">
        {offers.map((offer, index) => (
          <motion.div
            key={`${offer.provider}-${index}`}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              type: "tween",
              ease: [0.25, 0.1, 0.25, 1],
              duration: 0.3,
              delay: index * 0.03  // Reduced delay for faster grid loading
            }}
            style={{
              willChange: "transform, opacity",  // Optimize for hardware acceleration
              backfaceVisibility: "hidden"  // Prevent subpixel rendering issues
            }}
          >
            <EnhancedOfferCardFixed
              offer={offer}
              index={index}
              isFlipped={flippedCard === index}
              onFlip={() => handleCardFlip(index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
