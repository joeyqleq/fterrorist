"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock, MapPin, Shield, DollarSign, AlertTriangle, Zap, Target } from "lucide-react"
import type { StudentOffer } from "@/lib/studentOffers"

interface CyberpunkCardProps {
  offers: StudentOffer[]
}

export default function CyberpunkCard({ offers }: CyberpunkCardProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setMousePos({ x, y })
    
    // Update CSS custom properties for the specific card
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
      <AnimatePresence>
        {offers.map((offer, index) => {
          const categoryGradient = categoryColors[offer.category as keyof typeof categoryColors] || "from-gray-500 to-gray-400"
          const isSelected = selectedCard === index
          const isHovered = hoveredCard === index

          return (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              layout
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: isSelected ? 0 : isHovered ? -5 : -10,
                rotateY: isSelected ? 0 : isHovered ? 2 : 0,
                scale: isSelected ? 1.05 : isHovered ? 1.02 : 1,
                z: isSelected ? 100 : isHovered ? 50 : 0,
              }}
              exit={{ opacity: 0, y: -50, rotateX: 15 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className="relative cursor-pointer group"
              style={{ 
                transformStyle: "preserve-3d",
                '--mouse-x': '50%',
                '--mouse-y': '50%'
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null)
                // Reset mouse position when leaving
                const card = cardRefs.current[index]
                if (card) {
                  card.style.setProperty('--mouse-x', '50%')
                  card.style.setProperty('--mouse-y', '50%')
                }
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={() => setSelectedCard(isSelected ? null : index)}
            >
              {/* Holographic glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              
              <Card className="relative h-full min-h-[400px] bg-black/90 backdrop-blur-xl border-0 overflow-hidden rounded-2xl">
                {/* Dynamic background gradient following mouse */}
                <div 
                  className="absolute inset-0 opacity-20 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgb(59 130 246 / 0.4) 0%, transparent 50%)`
                  }}
                />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-border-glow"></div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Front of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative h-full"
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    {/* Header with category and value */}
                    <div className="flex items-start justify-between mb-6">
                      <Badge className={`bg-gradient-to-r ${categoryGradient} text-black font-black px-4 py-2 text-sm shadow-lg border-0`}>
                        <Zap className="w-3 h-3 mr-1" />
                        {offer.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-black bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                          {offer.savings}
                        </div>
                        <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">VALUE</div>
                      </div>
                    </div>

                    {/* Provider name with glow effect */}
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                      {offer.provider}
                    </h3>

                    {/* Offer description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                      {offer.offer}
                    </p>

                    {/* Info badges */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                          <Clock className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 font-mono">{offer.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                          <MapPin className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-300 font-mono">{offer.eligibility}</span>
                      </div>
                    </div>

                    {/* Scan line effect */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Click indicator */}
                    <div className="mt-auto text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
                        <Target className="w-3 h-3 text-cyan-400 animate-pulse" />
                        <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">SCAN FOR INTEL</span>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 0 : -180 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
                  
                  {/* Dynamic background for back */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgb(139 92 246 / 0.4) 0%, transparent 50%)`
                    }}
                  />

                  <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <h4 className="text-lg font-black text-white uppercase tracking-wider">INTEL ACQUIRED</h4>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-yellow-500/30">
                          <Shield className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-white mb-1">Verification Protocol</div>
                            <div className="text-xs text-gray-300 font-mono">{offer.verification}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-green-500/30">
                          <DollarSign className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-white mb-1">Economic Impact</div>
                            <div className="text-xs text-gray-300 font-mono">{offer.savings} neutralized</div>
                          </div>
                        </div>

                        {offer.notes && (
                          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg border border-orange-500/30">
                            <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-bold text-white mb-1">Mission Notes</div>
                              <div className="text-xs text-gray-300 font-mono">{offer.notes}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <motion.a
                        href={offer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-12 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-black rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border border-cyan-500/30 hover:border-cyan-400/50 group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                        <span className="uppercase tracking-wider">EXECUTE</span>
                      </motion.a>

                      <motion.button
                        className="w-full h-10 border border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500 rounded-lg font-bold uppercase tracking-wider transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCard(null)
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Abort Mission
                      </motion.button>
                    </div>
                  </CardContent>
                </motion.div>

                {/* Particle effects on hover */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%',
                          y: Math.random() * 100 + '%',
                          opacity: 0 
                        }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}