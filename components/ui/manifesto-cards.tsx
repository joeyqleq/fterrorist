"use client"

import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "./glowing-background-stars-card"
import { motion } from "framer-motion"
import { BinaryHoverText } from "./binary-hover-text"

interface ManifestoCard {
  title: string
  description: string
  price?: string
  service?: string
  note?: string
  guarantee?: string
}

export default function ManifestoCards() {
  const cards: ManifestoCard[] = [
    {
      title: "The Problem",
      description: "Corporations gate premium tools behind student verification from elite institutions. Not everyone had the privilege of attending a top US university, but everyone deserves access to these tools."
    },
    {
      title: "The Solution", 
      description: "Freebie Terrorist provides authentic .edu email addresses and student IDs from verified US/Canadian universities. No forwards - real accounts with Office 365 or Google Workspace included."
    },
    {
      title: ".EDU Email",
      description: "Authentic .edu email address in your name (or any name you choose) from verified universities. Delivered within 7-10 days with full access to student portals and benefits.",
      price: "$13",
      service: "per .edu address",
      note: "Payment: Crypto, PayPal, or AliPay only"
    },
    {
      title: "Student ID",
      description: "Real digital student ID image for the same university and name as your .edu email. Required for offers that need photo verification alongside email verification.",
      price: "$20",
      service: "additional for Student ID",
      note: "Payment: Crypto, PayPal, or AliPay only",
      guarantee: "If rejected by vendor, show proof and get full refund!"
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
              <GlowingStarsBackgroundCard className="h-[520px] bg-gradient-to-br from-gray-900 via-black to-gray-800 border-green-500/30 max-w-none">
                <div className="flex flex-col h-full justify-between text-center p-6 relative z-10">
                  <div className="space-y-3">
                    <h3 className="text-green-400 font-mono text-lg font-bold">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  {card.price && (
                    <div className="mt-auto pt-3 border-t border-green-500/20">
                      <div className="flex items-center justify-center mb-3">
                        <img src="/terrorist_logo.png" alt="FT Logo" className="w-8 h-8 rounded-full opacity-50" />
                      </div>
                      <div className="text-2xl font-bold text-green-400 font-mono mb-1">
                        {card.price}
                      </div>
                      <div className="text-xs text-gray-400 font-mono mb-2">
                        {card.service}
                      </div>
                      {card.note && (
                        <div className="text-xs text-blue-300 font-mono mb-1 bg-blue-900/20 rounded p-2">
                          💳 {card.note}
                        </div>
                      )}
                      {card.guarantee && (
                        <div className="text-xs text-green-300 font-mono bg-green-900/20 rounded p-2">
                          ✅ {card.guarantee}
                        </div>
                      )}
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
          <p className="text-lg text-gray-400 font-mono max-w-3xl mx-auto">
            The free arsenal below remains free. But if you want to unlock the full potential 
            of these offers without the academic gatekeeping, we've got your back. 
            <span className="text-green-400"> This is digital anarchy with a business model.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
