"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BinaryHoverText } from '@/components/ui/binary-hover-text'
import { GlowingStarsBackgroundCard } from '@/components/ui/glowing-background-stars-card'

interface ManifestoCard {
  title: string
  description: string
  price?: string
  details?: string[]
}

export default function ManifestoCards() {
  const cards: ManifestoCard[] = [
    {
      title: "The Problem",
      description: "Corporations gate premium tools behind student verification from elite institutions. Not everyone had the privilege of attending a top US university, but everyone deserves access to these tools."
    },
    {
      title: "The Solution", 
      description: "Freebie Terrorist provides authentic .edu email addresses and student IDs from verified universities. No forwards - real accounts with Office 365 or Google Workspace included."
    },
    {
      title: ".EDU Email",
      description: "Authentic .edu email address in your name (or any name you choose) from verified universities. Delivered within 7-10 days with full access to student portals and benefits.",
      price: "$13",
      details: [
        "• Real .edu email address",
        "• Office 365 or Google Workspace",
        "• 7-10 day delivery",
        "• Full student portal access",
        "• Lifetime validity"
      ]
    },
    {
      title: "Student ID",
      description: "Real digital student ID image for the same university and name as your .edu email. Required for offers that need photo verification alongside email verification.",
      price: "$20",
      details: [
        "• High-quality digital ID image",
        "• Matches your .edu email",
        "• Photo verification ready",
        "• Same university as email",
        "• Instant delivery"
      ]
    }
  ]

  return (
    <section id="manifesto" className="relative z-10 py-20 px-4 mt-16">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-green-400 font-mono">
            <BinaryHoverText text="THE MANIFESTO" />
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            We're not just another freebie site. We're digital insurgents leveling the playing field. 
            The corporate oligarchy hoards premium tools behind academic gatekeeping - we tear down those gates. 
            This isn't charity, it's rebellion with a price tag.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlowingStarsBackgroundCard 
                className="h-[520px] bg-gradient-to-br from-gray-900 via-black to-gray-800 border-green-500/30 max-w-none"
              >
                <div className="flex flex-col h-full justify-between text-center p-6 relative z-10">
                  <div className="space-y-3">
                    <h3 className="text-green-400 font-mono text-lg font-bold">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Price and details section for cards 3 and 4 */}
                  {card.price && card.details && (
                    <div className="mt-6 space-y-4">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-green-400 font-mono">
                          {card.price}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {card.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 font-mono text-xs text-left">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg font-mono max-w-3xl mx-auto">
            The free arsenal below remains free. But if you want to unlock the full potential 
            of these offers without the academic gatekeeping, we've got your back. 
            <span className="text-green-400"> This is digital anarchy with a business model.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}