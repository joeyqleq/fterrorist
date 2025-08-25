"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Clock, MapPin, Shield, Zap, Star, DollarSign } from 'lucide-react'
import { StudentOffer } from '@/lib/studentOffers'
import OfferLogo3D from '../OfferLogo3D'
import { Button } from './button'

interface OfferDetailsModalProps {
  offer: StudentOffer | null
  isOpen: boolean
  onClose: () => void
}

const categoryDescriptions: Record<string, string> = {
  "Development Tools": "Professional software development environments, IDEs, and coding platforms used by developers worldwide.",
  "Design & Media": "Creative software for graphic design, video editing, animation, and digital media production.",
  "Productivity": "Tools and services that help streamline workflows, manage projects, and boost productivity.",
  "Cloud Computing": "Scalable cloud infrastructure, storage solutions, and computing services.",
  "Education": "Learning platforms, online courses, and educational resources for skill development.",
  "Security": "Cybersecurity tools, VPNs, password managers, and privacy protection services.",
  "CAD & Engineering": "Computer-aided design software and engineering simulation tools.",
  "Communication": "Team collaboration, messaging, and communication platforms.",
  "Analytics": "Data analysis, business intelligence, and analytics platforms.",
  "Marketing": "Digital marketing tools, email campaigns, and social media management.",
  "Business": "Enterprise software, CRM systems, and business management tools.",
  "Storage": "Cloud storage, backup solutions, and file management systems."
}

const offerSummaries: Record<string, string> = {
  "GitHub": "GitHub is the world's leading platform for version control and collaborative software development. With GitHub Pro, students get unlimited private repositories, advanced code review tools, GitHub Actions for CI/CD, and access to GitHub Codespaces for cloud-based development environments.",
  
  "Canva": "Canva Pro transforms how you create visual content with access to over 100 million premium photos, videos, and graphics. Perfect for students working on presentations, social media content, or design projects with advanced features like brand kits and team collaboration.",
  
  "Notion": "Notion is an all-in-one workspace that combines notes, databases, wikis, and project management. The Pro plan offers unlimited file uploads, version history, and advanced permissions - essential for organizing academic work and collaborative projects.",
  
  "Microsoft Azure": "Azure provides enterprise-grade cloud computing services including virtual machines, databases, AI services, and development tools. Students get substantial credits to learn cloud architecture, deploy applications, and experiment with cutting-edge technologies.",
  
  "Coursera Plus": "Access thousands of courses from top universities and companies including Google, IBM, and Stanford. Coursera Plus includes professional certificates, specializations, and degree programs that can advance your career prospects significantly.",
  
  "NordVPN": "Premium VPN service offering military-grade encryption, global server network, and advanced security features. Essential for protecting privacy while researching, accessing geo-restricted content, and maintaining security on public networks.",
  
  "ZW3D": "Professional 3D CAD/CAM software for mechanical design, industrial design, and manufacturing. ZW3D offers advanced modeling capabilities, simulation tools, and manufacturing features used in aerospace, automotive, and industrial design.",
  
  "Sketch": "Industry-standard UI/UX design tool used by designers at top tech companies. Sketch provides vector-based design tools, prototyping features, and collaborative design systems perfect for app and web interface design.",
  
  "Jotform": "Powerful online form builder with drag-and-drop interface, advanced logic, and integrations. Jotform helps create surveys, registration forms, and data collection tools with professional templates and analytics.",
  
  "Perplexity Pro": "AI-powered search engine and research assistant that provides accurate, cited information with real-time data. Perplexity Pro offers unlimited searches, advanced AI models, and priority support for research and learning.",
  
  "Lumion": "Professional 3D architectural visualization software used by architects and designers worldwide. Create stunning renders and animations of architectural projects with realistic materials, lighting, and environmental effects.",
  
  "Fetch": "Rewards app that turns everyday purchases into points and cashback. Students can earn money back on textbooks, food delivery, and daily essentials while managing their budget effectively.",
  
  "Basecamp": "Project management and team collaboration platform trusted by millions. Basecamp organizes projects with to-do lists, file sharing, message boards, and schedules - perfect for group assignments and team projects.",
  
  "Cursor": "AI-powered code editor built for productivity and collaboration. Cursor integrates advanced AI assistance directly into your coding workflow, helping with code completion, debugging, and refactoring for faster development.",
  
  "Manus": "Motion capture technology for VR/AR development and animation. Manus provides precise hand and finger tracking solutions used in gaming, film production, and virtual reality applications.",
  
  "Spline": "Web-based 3D design tool for creating interactive 3D experiences. Spline allows designers to create 3D animations, interactive models, and immersive web experiences without complex 3D software knowledge.",
  
  "KeyCreator": "Direct CAD modeling software offering flexible design capabilities without traditional parametric constraints. KeyCreator excels in reverse engineering, legacy data repair, and rapid design modifications.",
  
  "Altium Designer": "Industry-leading PCB design software used by electronics engineers worldwide. Altium Designer provides comprehensive tools for schematic capture, PCB layout, and electronics design automation with advanced routing and simulation capabilities."
}

export default function OfferDetailsModal({ offer, isOpen, onClose }: OfferDetailsModalProps) {
  if (!offer) return null

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
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] bg-black/95 border border-green-500/30 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Animated background gradient */}
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
              <div className="relative z-10 overflow-y-auto max-h-[90vh] p-8">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <OfferLogo3D provider={offer.provider} size="lg" />
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
                    
                    <motion.div 
                      className="flex items-center gap-4 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <Star className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">{offer.category}</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-bold text-purple-400">{offer.savings}</span>
                        </div>
                        <div className="text-xs text-purple-300">value</div>
                      </div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {offer.offer}
                    </motion.p>
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
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Duration</h4>
                    </div>
                    <p className="text-gray-300">{offer.duration}</p>
                  </div>

                  <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Eligibility</h4>
                    </div>
                    <p className="text-gray-300">{offer.eligibility}</p>
                  </div>

                  <div className="p-6 bg-black/50 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Verification</h4>
                    </div>
                    <p className="text-gray-300">{offer.verification}</p>
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
                    <Zap className="w-6 h-6" />
                    About {offer.provider}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {offerSummary}
                  </p>
                  
                  <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                    <h4 className="text-lg font-bold text-green-400 mb-2">Category: {offer.category}</h4>
                    <p className="text-gray-300">{categoryDescription}</p>
                  </div>
                </motion.div>

                {/* Notes Section */}
                {offer.notes && (
                  <motion.div 
                    className="mb-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="text-lg font-bold text-yellow-400 mb-3">Important Notes</h4>
                    <p className="text-yellow-200">{offer.notes}</p>
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
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold text-lg py-6 rounded-xl"
                  >
                    <a href={offer.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Claim This Offer
                    </a>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={onClose}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-6 px-8 rounded-xl"
                  >
                    Close
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
