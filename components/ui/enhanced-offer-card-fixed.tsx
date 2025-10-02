"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Shield, ExternalLink, ArrowRight } from 'lucide-react'
import OfferLogo3D from '@/components/OfferLogo3D'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import OfferDetailsModal from '@/components/ui/offer-details-modal'
import { StudentOffer } from '@/lib/studentOffers'

// Category colors and gradients
const categoryColors = {
  "Web Design": "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  "Cloud": "bg-gradient-to-r from-sky-500 to-blue-500 text-white",
  "Domains": "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  "Design": "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
  "AI/Cloud": "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
  "AI Coding": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  "Productivity": "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
  "Hosting": "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
  "AI Tools": "bg-gradient-to-r from-violet-500 to-purple-500 text-white",
  "Security": "bg-gradient-to-r from-red-500 to-pink-500 text-white",
  "Password Managers": "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
  "Development": "bg-gradient-to-r from-green-500 to-teal-500 text-white",
  "Video Editing": "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  "Engineering": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  "Project Management": "bg-gradient-to-r from-orange-500 to-yellow-500 text-white",
  "Analytics": "bg-gradient-to-r from-green-500 to-blue-500 text-white",
  "Entertainment": "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
  "Finance": "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  "Infrastructure Design": "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
  "Survey Tools": "bg-gradient-to-r from-teal-500 to-green-500 text-white",
  "Game Development": "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
  "3D Design": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  "Collaboration": "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  "Music Production": "bg-gradient-to-r from-pink-500 to-red-500 text-white",
  "Statistical Analysis": "bg-gradient-to-r from-green-500 to-teal-500 text-white",
  "Career": "bg-gradient-to-r from-yellow-500 to-orange-500"
}

const categoryGradients = {
  "Web Design": "from-blue-500 to-purple-500",
  "Cloud": "from-sky-500 to-blue-500",
  "Domains": "from-green-500 to-emerald-500",
  "Design": "from-pink-500 to-rose-500",
  "AI/Cloud": "from-purple-500 to-indigo-500",
  "AI Coding": "from-orange-500 to-red-500",
  "Productivity": "from-teal-500 to-cyan-500",
  "Hosting": "from-yellow-500 to-orange-500",
  "AI Tools": "from-violet-500 to-purple-500",
  "Security": "from-red-500 to-pink-500",
  "Password Managers": "from-indigo-500 to-blue-500",
  "Development": "from-green-500 to-teal-500",
  "Video Editing": "from-purple-500 to-pink-500",
  "Engineering": "from-blue-500 to-cyan-500",
  "Project Management": "from-orange-500 to-yellow-500",
  "Analytics": "from-green-500 to-blue-500",
  "Entertainment": "from-pink-500 to-purple-500",
  "Finance": "from-green-500 to-emerald-500",
  "Infrastructure Design": "from-blue-500 to-indigo-500",
  "Survey Tools": "from-teal-500 to-green-500",
  "Game Development": "from-purple-500 to-indigo-500",
  "3D Design": "from-orange-500 to-red-500",
  "Collaboration": "from-blue-500 to-purple-500",
  "Music Production": "from-pink-500 to-red-500",
  "Statistical Analysis": "from-green-500 to-teal-500",
  "Career": "from-yellow-500 to-orange-500"
}

interface EnhancedOfferCardProps {
  offer: StudentOffer
  index: number
  isFlipped: boolean
  onFlip: () => void
}

export default function EnhancedOfferCardFixed({ offer, index, isFlipped, onFlip }: EnhancedOfferCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const categoryColor = categoryColors[offer.category as keyof typeof categoryColors] || "bg-gradient-to-r from-gray-500 to-gray-400 text-white"
  const categoryGradient = categoryGradients[offer.category as keyof typeof categoryGradients] || "from-gray-500 to-gray-400"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full h-[380px] perspective-1000"
    >
      {/* Glowing effect wrapper */}
      <div className="relative w-full h-full rounded-2xl border border-green-500/20">
        <GlowingEffect
          spread={35}
          glow={true}
          disabled={false}
          proximity={48}
          inactiveZone={0.01}
        />
        
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 rounded-2xl"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front of card */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl">
            <Card className="h-full bg-black/80 backdrop-blur-sm border-0 rounded-2xl overflow-hidden flex flex-col">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-5`} />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${categoryColor} font-bold px-3 py-1 rounded-full border-0`}>
                    {offer.category}
                  </Badge>
                  <motion.div 
                    className="text-right"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                      {offer.savings}
                    </div>
                    <div className="text-xs text-gray-400">value</div>
                  </motion.div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <OfferLogo3D imageUrl={offer.image} provider={offer.provider} size="sm" />
                  </motion.div>
                  <h3 className="text-lg font-black text-white line-clamp-2 leading-tight">
                    {offer.provider}
                  </h3>
                </div>

                <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">{offer.offer}</p>
              </CardHeader>

              <CardContent className="pt-0 pb-4 relative z-10 flex-1 flex flex-col overflow-hidden">
                <div className="space-y-2 mb-4 flex-shrink-0">
                  {[
                    { icon: Clock, text: offer.duration, gradient: "from-purple-500 to-pink-500" },
                    { icon: MapPin, text: offer.eligibility, gradient: "from-pink-500 to-yellow-400" },
                    { icon: Shield, text: offer.verification, gradient: "from-yellow-400 to-orange-500" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-[10px] line-clamp-1 leading-tight">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 hover:from-green-300 hover:via-green-400 hover:to-emerald-300 text-black font-bold rounded-lg h-8 text-xs shadow-lg shadow-green-500/25 hover:shadow-green-400/40 transition-all duration-300"
                  >
                    <a href={offer.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Get Free
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={onFlip}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg h-8 px-3"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl">
            <Card className="h-full bg-black/85 backdrop-blur-sm border-0 rounded-2xl overflow-hidden flex flex-col">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-10`} />
              
              <CardHeader className="pb-2 relative z-10 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{offer.provider}</h3>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={onFlip}
                    className="text-gray-400 hover:text-white h-8 w-8 p-0"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-0 relative z-10 flex-1 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <div>
                    <h4 className="text-xs font-semibold text-green-400 mb-1">Duration</h4>
                    <p className="text-xs text-gray-300 line-clamp-1">{offer.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-green-400 mb-1">Eligibility</h4>
                    <p className="text-xs text-gray-300 line-clamp-1">{offer.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-green-400 mb-1">Verification</h4>
                    <p className="text-xs text-gray-300 line-clamp-1">{offer.verification}</p>
                  </div>

                  {offer.notes && (
                    <div>
                      <h4 className="text-xs font-semibold text-yellow-400 mb-1">Notes</h4>
                      <p className="text-xs text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 rounded p-1 line-clamp-2">
                        {offer.notes}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-auto space-y-2 flex-shrink-0">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 hover:from-green-300 hover:via-green-400 hover:to-emerald-300 text-black font-bold rounded-lg h-8 shadow-lg shadow-green-500/25 hover:shadow-green-400/40 transition-all duration-300"
                  >
                    <a href={offer.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Claim Offer
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Full Details clicked, opening modal');
                      setIsModalOpen(true);
                    }}
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg h-8"
                  >
                    Full Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      
      {/* Offer Details Modal */}
      <OfferDetailsModal 
        offer={offer} 
        isOpen={isModalOpen} 
        onClose={() => {
          console.log('Closing modal');
          setIsModalOpen(false);
        }} 
      />
    </motion.div>
  )
}