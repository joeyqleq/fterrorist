"use client";

import React, { useState, useEffect, useRef } from "react";
import type { StudentOffer } from "@/lib/studentOffers";
import EnhancedOfferCardFixed from "./enhanced-offer-card-fixed";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface EnhancedOfferGridProps {
  offers: StudentOffer[];
}

const CARDS_PER_LOAD = 12; // Load 3 rows at a time (4 cards per row)

export default function EnhancedOfferGrid({ offers }: EnhancedOfferGridProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_LOAD);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(loadMoreRef, { once: false, margin: "200px" });

  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  // Load more cards when scroll trigger is in view
  useEffect(() => {
    if (isInView && visibleCount < offers.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + CARDS_PER_LOAD, offers.length));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleCount, offers.length]);

  const visibleOffers = offers.slice(0, visibleCount);

  return (
    <div className="relative">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 items-stretch"
        data-oid="kqkht2z"
      >
        <AnimatePresence mode="popLayout" data-oid="wng6p85">
          {visibleOffers.map((offer, index) => (
            <motion.div
              key={`${offer.provider}-${index}`}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: (index % CARDS_PER_LOAD) * 0.05,
              }}
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
              data-oid="84m-n8_"
            >
              <EnhancedOfferCardFixed
                offer={offer}
                index={index}
                isFlipped={flippedCard === index}
                onFlip={() => handleCardFlip(index)}
                data-oid="d6yz:s_"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Scroll trigger for loading more cards */}
      {visibleCount < offers.length && (
        <div
          ref={loadMoreRef}
          className="flex items-center justify-center py-8"
        >
          <motion.div
            className="text-green-400 font-mono text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading more offers...
          </motion.div>
        </div>
      )}
    </div>
  );
}
