"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Clock, MapPin, Shield, Zap, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OfferLogo3D from '@/components/OfferLogo3D'
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
  "Career": "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
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

const categoryDescriptions: { [key: string]: string } = {
  "Web Design": "Professional web design tools and services for creating stunning websites.",
  "Cloud": "Cloud computing services and infrastructure for modern applications.",
  "Domains": "Domain registration and management services.",
  "Design": "Creative design tools and software for digital artists.",
  "AI/Cloud": "Artificial intelligence and cloud computing platforms.",
  "AI Coding": "AI-powered coding assistants and development tools.",
  "Productivity": "Tools and applications to boost your productivity.",
  "Hosting": "Web hosting services and infrastructure solutions.",
  "AI Tools": "Advanced artificial intelligence tools and platforms.",
  "Security": "Cybersecurity tools and services for protection.",
  "Password Managers": "Secure password management and authentication tools.",
  "Development": "Software development tools and integrated development environments.",
  "Video Editing": "Professional video editing and post-production software.",
  "Engineering": "Engineering software and CAD tools for technical design.",
  "Project Management": "Project management and collaboration platforms.",
  "Analytics": "Data analytics and business intelligence tools.",
  "Entertainment": "Entertainment and media streaming services.",
  "Finance": "Financial management and budgeting applications.",
  "Infrastructure Design": "Infrastructure engineering and design software.",
  "Survey Tools": "Survey creation and data collection platforms.",
  "Game Development": "Game development engines and tools.",
  "3D Design": "3D modeling and rendering software.",
  "Collaboration": "Team collaboration and communication tools.",
  "Music Production": "Music creation and audio production software.",
  "Statistical Analysis": "Statistical analysis and data science tools.",
  "Career": "Career development and job search tools."
}

const offerSummaries: { [key: string]: string } = {
  "Webflow": "Webflow is a powerful visual web design platform that allows designers to build responsive websites without coding.",
  "Microsoft Azure": "Microsoft Azure is a comprehensive cloud computing platform offering a wide range of services for building, deploying, and managing applications.",
  "Figma": "Figma is a collaborative interface design tool that enables teams to design, prototype, and gather feedback in one place.",
  "GitHub": "GitHub is the world's largest code hosting platform, providing version control, collaboration tools, and a comprehensive development ecosystem.",
  "Notion": "Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases to help individuals and teams stay organized."
}

interface OfferDetailsModalProps {
  offer: StudentOffer
  isOpen: boolean
  onClose: () => void
}

export default function OfferDetailsModal({ offer, isOpen, onClose }: OfferDetailsModalProps) {
  if (!offer) return null

  const categoryColor = categoryColors[offer.category as keyof typeof categoryColors] || "bg-gradient-to-r from-gray-500 to-gray-400 text-white"
  const categoryGradient = categoryGradients[offer.category as keyof typeof categoryGradients] || "from-gray-500 to-gray-400"

  const categoryDescription = categoryDescriptions[offer.category] || "Professional software and services for students."
  const offerSummary = offerSummaries[offer.provider] || `${offer.provider} is a professional platform offering valuable tools and services for students. This student discount provides significant savings on premium features that would otherwise be costly for individual users.`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[59]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-full max-w-5xl max-h-[90vh] overflow-y-auto p-4"
          >
            <div className="relative w-full">
              <motion.div
                className="relative w-full bg-black/95 border border-green-500/30 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-emerald-500/5 to-green-600/10 animate-pulse" />
                
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-2xl opacity-20 blur-sm" />
                
                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 z-10 p-2 bg-black/50 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div 
                      className="flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">
                        <OfferLogo3D provider={offer.provider} size="lg" imageUrl={offer.image} />
                      </a>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <motion.h2 
                        className="text-3xl md:text-4xl font-black text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {offer.provider}
                      </motion.h2>
                      
                      <div className="flex items-center gap-3 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full w-fit mb-4">
                        <div className={`w-6 h-6 rounded-full ${categoryColor} flex items-center justify-center flex-shrink-0`}>
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-green-400">{offer.category}</span>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">{offer.offer}</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="p-6 bg-black/50 border border-purple-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Duration</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{offer.duration}</p>
                    </div>

                    <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Eligibility</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{offer.eligibility}</p>
                    </div>

                    <div className="p-6 bg-black/50 border border-yellow-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Verification</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{offer.verification}</p>
                    </div>
                  </motion.div>

                  {/* About Section */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
                      <Zap className="w-5 h-5" />
                      About {offer.provider}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {offerSummary}
                    </p>
                    
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                      <h4 className="text-lg font-bold text-green-400 mb-2">Category: {offer.category}</h4>
                      <p className="text-gray-300 text-sm">{categoryDescription}</p>
                    </div>
                  </motion.div>

                  {/* Notes Section */}
                  {offer.notes && (
                    <motion.div 
                      className="mb-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="text-lg font-bold text-yellow-400 mb-3">Important Notes</h4>
                      <p className="text-yellow-200 text-sm">{offer.notes}</p>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 hover:from-green-300 hover:via-green-400 hover:to-emerald-300 text-black font-bold py-6 rounded-xl"
                    >
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Claim This Offer
                      </a>
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={onClose}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white py-6 px-8 rounded-xl"
                    >
                      Close
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}