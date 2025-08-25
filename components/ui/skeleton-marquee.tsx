"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, DollarSign, Code, FileText, Zap, Target, ExternalLink } from "lucide-react"
import type { StudentOffer } from "@/lib/studentOffers"

interface SkeletonMarqueeProps {
  offers: StudentOffer[]
}

const skeletonVariants = [
  "receipt",
  "list", 
  "banner",
  "code",
  "report"
]

const getSkeletonIcon = (category: string) => {
  switch (category) {
    case "Web Design": return Code
    case "Cloud": return Building
    case "AI/Cloud": return Zap
    case "AI Tools": return Target
    default: return FileText
  }
}

const categoryColors = {
  "Web Design": "from-cyan-400 via-blue-500 to-purple-600",
  Cloud: "from-purple-500 via-pink-500 to-red-500",
  Domains: "from-green-400 via-emerald-500 to-teal-600",
  Design: "from-pink-500 via-rose-400 to-orange-500",
  "AI/Cloud": "from-orange-500 via-yellow-400 to-amber-500",
  "AI Tools": "from-red-500 via-pink-500 to-purple-600",
  "AI Coding": "from-indigo-500 via-purple-500 to-pink-600",
  Productivity: "from-yellow-400 via-orange-500 to-red-500",
}

export default function SkeletonMarquee({ offers }: SkeletonMarqueeProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  const renderSkeletonContent = (offer: StudentOffer, index: number, variant: string) => {
    const Icon = getSkeletonIcon(offer.category)
    const isHovered = hoveredCard === index
    const isFlipped = flippedCard === index

    if (variant === "receipt") {
      return (
        <div className="flex justify-between border-b pb-3 border-cyan-400/30">
          <Icon className="w-6 text-muted-foreground" />
          <DollarSign className="w-6 text-green-400" />
        </div>
      )
    }

    if (variant === "code") {
      return (
        <Icon className="w-6 text-cyan-400" />
      )
    }

    if (variant === "banner") {
      return (
        <div className="flex items-center justify-between border-b pb-3 border-cyan-400/30">
          <span className="font-semibold text-foreground text-xs">OFFER</span>
          <span className="inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white">
            FREE
          </span>
        </div>
      )
    }

    return (
      <div className="flex justify-between border-b pb-3 border-cyan-400/30">
        <Icon className="w-6 text-cyan-400" />
        <span className="text-xs text-green-400 font-mono">{offer.savings}</span>
      </div>
    )
  }

  const renderSkeletonBars = (variant: string, offer: StudentOffer) => {
    if (variant === "list") {
      return Array.from({ length: 6 }).map((_, i) => (
        <div key={`item-${i}`} className="flex w-full items-center justify-between gap-2">
          <div className="h-2 w-2 rounded-md bg-cyan-400/30" />
          <div className="h-3 w-3 rounded-sm bg-purple-400/30" />
          <div className="h-2 flex-1 rounded-md bg-muted/50" />
        </div>
      ))
    }

    if (variant === "banner") {
      return (
        <div className="flex flex-1 flex-col justify-center gap-2">
          <div className="h-2 w-1/2 rounded-md bg-cyan-400/30" />
          <div className="h-2 w-3/4 rounded-md bg-muted/50" />
          <div className="h-2 w-3/5 rounded-md bg-muted/50" />
        </div>
      )
    }

    if (variant === "code") {
      return (
        <div className="flex flex-1 flex-col justify-center gap-2">
          <div className="h-2 w-1/2 rounded-md bg-muted/50" />
          <div className="h-2 w-3/4 rounded-md bg-cyan-400/30" />
          <div className="h-2 w-3/5 rounded-md bg-muted/50" />
        </div>
      )
    }

    if (variant === "report") {
      return Array.from({ length: 6 }).map((_, i) => (
        <div className="h-2 w-full rounded-md bg-muted/50" key={`item-${i}`} />
      ))
    }

    return (
      <>
        <div className="flex w-full justify-between gap-2">
          <div className="h-2 w-1/2 rounded-md bg-muted/50" />
          <div className="h-2 w-4 rounded-md bg-cyan-400/30" />
        </div>
        <div className="flex w-full justify-between gap-2">
          <div className="h-2 w-3/4 rounded-md bg-muted/50" />
          <div className="h-2 w-5 rounded-md bg-green-400/30" />
        </div>
        <div className="flex w-full justify-between gap-2">
          <div className="h-2 w-1/2 rounded-md bg-muted/50" />
          <div className="h-2 w-4 rounded-md bg-purple-400/30" />
        </div>
        <div className="flex w-full justify-between gap-2">
          <div className="h-2 w-3/4 rounded-md bg-muted/50" />
          <div className="h-2 w-5 rounded-md bg-blue-400/30" />
        </div>
        <div className="flex w-full justify-between gap-2">
          <div className="h-2 w-3/5 rounded-md bg-muted/50" />
          <div className="h-2 w-8 rounded-md bg-pink-400/30" />
        </div>
      </>
    )
  }

  const renderCardBack = (offer: StudentOffer, index: number) => {
    const categoryGradient = categoryColors[offer.category as keyof typeof categoryColors] || "from-gray-500 to-gray-400"
    
    return (
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-md border border-cyan-400/50 p-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider">INTEL</h4>
          </div>

          <div className="space-y-2 mb-3 flex-1">
            <div className="text-xs font-bold text-cyan-400">{offer.provider}</div>
            <div className="text-xs text-gray-300 line-clamp-3">{offer.offer}</div>
            <div className="text-xs text-green-400 font-mono">{offer.savings}</div>
          </div>

          <div className="space-y-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(offer.link, '_blank')
              }}
              className="w-full h-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded text-xs flex items-center justify-center gap-1 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              <ExternalLink className="w-3 h-3" />
              EXECUTE
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlippedCard(null)
              }}
              className="w-full h-6 border border-gray-600 text-gray-300 hover:bg-gray-800/50 rounded text-xs font-bold transition-all duration-300"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden py-8">
      {/* Marquee container */}
      <div className="flex space-x-6 animate-marquee">
        {/* First set */}
        {offers.map((offer, index) => {
          const variant = skeletonVariants[index % skeletonVariants.length]
          const isHovered = hoveredCard === index
          const isFlipped = flippedCard === index
          const categoryGradient = categoryColors[offer.category as keyof typeof categoryColors] || "from-gray-500 to-gray-400"

          return (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-52 h-52 cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(index)}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className={`
                    flex min-h-52 w-52 flex-col gap-3 rounded-md border bg-black/40 backdrop-blur-sm p-3 
                    shadow-xl transition-all duration-300 group
                    ${isHovered ? 'shadow-2xl border-cyan-400/50 bg-black/60' : 'border-gray-800 hover:border-cyan-400/30'}
                  `}>
                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-md blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
                    
                    <div className="relative z-10">
                      {renderSkeletonContent(offer, index, variant)}
                      
                      <div className="flex flex-col gap-3 mt-3">
                        {renderSkeletonBars(variant, offer)}
                      </div>

                      {variant === "list" && (
                        <div className="mt-auto flex w-full justify-end gap-2">
                          <button className="w-2/5 rounded-sm bg-green-500/80 p-2">
                            <span className="block h-1.5 rounded-sm bg-black/20" />
                          </button>
                          <button className="w-1/5 rounded-sm bg-muted/80 p-2">
                            <span className="block h-1.5 rounded-sm bg-gray-300/50" />
                          </button>
                        </div>
                      )}

                      {variant === "banner" && (
                        <button className="w-full rounded-sm bg-cyan-400/80 p-2 mt-auto">
                          <span className="block h-1.5 rounded-sm bg-black/20" />
                        </button>
                      )}

                      {variant === "receipt" && (
                        <span className="mt-auto inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white">
                          {offer.category}
                        </span>
                      )}

                      {variant === "report" && (
                        <div className="h-2 w-1/2 rounded-md bg-muted/50 mt-auto" />
                      )}
                    </div>

                    {/* Hover scan line */}
                    <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </div>

                {/* Back of card */}
                {renderCardBack(offer, index)}
              </motion.div>
            </motion.div>
          )
        })}
        
        {/* Duplicate set for seamless loop */}
        {offers.map((offer, index) => {
          const variant = skeletonVariants[index % skeletonVariants.length]
          const realIndex = index + offers.length
          const isHovered = hoveredCard === realIndex
          const isFlipped = flippedCard === realIndex
          const categoryGradient = categoryColors[offer.category as keyof typeof categoryColors] || "from-gray-500 to-gray-400"

          return (
            <motion.div
              key={realIndex}
              className="relative flex-shrink-0 w-52 h-52 cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setHoveredCard(realIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(realIndex)}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className={`
                    flex min-h-52 w-52 flex-col gap-3 rounded-md border bg-black/40 backdrop-blur-sm p-3 
                    shadow-xl transition-all duration-300 group
                    ${isHovered ? 'shadow-2xl border-cyan-400/50 bg-black/60' : 'border-gray-800 hover:border-cyan-400/30'}
                  `}>
                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-md blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
                    
                    <div className="relative z-10">
                      {renderSkeletonContent(offer, realIndex, variant)}
                      
                      <div className="flex flex-col gap-3 mt-3">
                        {renderSkeletonBars(variant, offer)}
                      </div>

                      {variant === "list" && (
                        <div className="mt-auto flex w-full justify-end gap-2">
                          <button className="w-2/5 rounded-sm bg-green-500/80 p-2">
                            <span className="block h-1.5 rounded-sm bg-black/20" />
                          </button>
                          <button className="w-1/5 rounded-sm bg-muted/80 p-2">
                            <span className="block h-1.5 rounded-sm bg-gray-300/50" />
                          </button>
                        </div>
                      )}

                      {variant === "banner" && (
                        <button className="w-full rounded-sm bg-cyan-400/80 p-2 mt-auto">
                          <span className="block h-1.5 rounded-sm bg-black/20" />
                        </button>
                      )}

                      {variant === "receipt" && (
                        <span className="mt-auto inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white">
                          {offer.category}
                        </span>
                      )}

                      {variant === "report" && (
                        <div className="h-2 w-1/2 rounded-md bg-muted/50 mt-auto" />
                      )}
                    </div>

                    {/* Hover scan line */}
                    <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                </div>

                {/* Back of card */}
                {renderCardBack(offer, realIndex)}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}