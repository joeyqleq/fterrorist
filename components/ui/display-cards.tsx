"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, MapPin, Shield, DollarSign, AlertTriangle } from "lucide-react"
import type { StudentOffer } from "@/lib/studentOffers"
import OfferLogo3D from "../OfferLogo3D"

interface DisplayCardsProps {
  offers: StudentOffer[]
}

export default function DisplayCards({ offers }: DisplayCardsProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const categoryColors = {
    "Web Design": "from-blue-500 to-cyan-400",
    Cloud: "from-purple-500 to-pink-500",
    Domains: "from-green-500 to-emerald-400",
    Design: "from-pink-500 to-rose-400",
    "AI/Cloud": "from-orange-500 to-yellow-400",
    "AI Tools": "from-red-500 to-pink-500",
    "AI Coding": "from-indigo-500 to-purple-500",
    Productivity: "from-yellow-400 to-orange-500",
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
      <AnimatePresence>
        {offers.map((offer, index) => {
          const categoryGradient =
            categoryColors[offer.category as keyof typeof categoryColors] || "from-gray-500 to-gray-400"
          const isSelected = selectedCard === index
          const isHovered = hoveredCard === index

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: isSelected ? 0 : isHovered ? 5 : -5,
                scale: isSelected ? 1.05 : isHovered ? 1.02 : 1,
                z: isSelected ? 50 : isHovered ? 25 : 0,
              }}
              exit={{ opacity: 0, y: -50, rotateY: 15 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(isSelected ? null : index)}
            >
              <Card className="h-full bg-black/40 backdrop-blur-md border border-gray-800/50 overflow-hidden group">
                {/* Front of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-10`} />

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${categoryGradient} text-black font-bold px-3 py-1`}>
                        {offer.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                          {offer.savings}
                        </div>
                        <div className="text-xs text-gray-400">value</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <OfferLogo3D provider={offer.provider} size="sm" />
                      <h3 className="text-2xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offer.provider}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{offer.offer}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{offer.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{offer.eligibility}</span>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs text-gray-500">Click to reveal details</span>
                    </div>
                  </CardContent>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-20`} />

                  <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Verification & Details</h4>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-white">Verification</div>
                            <div className="text-xs text-gray-300">{offer.verification}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-green-400 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-white">Value</div>
                            <div className="text-xs text-gray-300">{offer.savings} saved</div>
                          </div>
                        </div>

                        {offer.notes && (
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-white">Important</div>
                              <div className="text-xs text-gray-300">{offer.notes}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold"
                      >
                        <a href={offer.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Get This Offer
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCard(null)
                        }}
                      >
                        Close Details
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
