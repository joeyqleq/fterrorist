"use client"

import React, { useState, useMemo, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import { studentOffers } from "@/lib/studentOffers"
import TerroristNavbar from "@/components/ui/terrorist-navbar"
import { ContactFormModal } from "@/components/ui/contact-form-modal"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { SpinningText } from "@/components/ui/spinning-text"
import { MagneticBorder } from "@/components/ui/magnetic-border"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import IntegrationPills from "@/components/ui/integration-pills"
import EnhancedOfferGrid from "@/components/ui/enhanced-offer-grid"
import HackerAnimation from "@/components/ui/hacker-animation"
import AnimeHero from "@/components/ui/anime-hero"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Globe, Shield, Terminal, FileText, Heart, Hand } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedStats from "@/components/ui/animated-stats"
import { MatrixText } from "@/components/ui/matrix-text"
import { BinaryHoverText } from "@/components/ui/binary-hover-text"
import CircuitBoardBackground from "@/components/ui/circuit-board-bg"
import { MatrixShader } from "@/components/ui/matrix-shader"

const MagnetLines = dynamic(() => import("@/components/ui/magnet-lines").then(mod => ({ default: mod.MagnetLines })), {
  ssr: false,
  loading: () => <div className="h-screen w-screen opacity-0" />
})

const ManifestoCards = dynamic(() => import("@/components/ui/manifesto-cards"))
const TerminalFAQ = dynamic(() => import("@/components/ui/terminal-faq"))
const SplineModel = dynamic(() => import("@/components/ui/spline-model"))
const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"))


export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(studentOffers.map((offer) => offer.category)))
    return ["All", ...uniqueCategories.sort()]
  }, [])

  // Memoized handlers for better performance
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  const handleScrollToOffers = useCallback(() => {
    document.querySelector('#offers')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleOpenContactModal = useCallback(() => {
    setIsContactModalOpen(true)
  }, [])

  const handleCloseContactModal = useCallback(() => {
    setIsContactModalOpen(false)
  }, [])

  // Filter offers based on category and search
  const filteredOffers = useMemo(() => {
    return studentOffers.filter((offer) => {
      const matchesCategory = selectedCategory === "All" || offer.category === selectedCategory
      const matchesSearch =
        searchTerm === "" ||
        offer.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.offer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Circuit Board Background */}
      <CircuitBoardBackground />
      
      {/* Magnet Lines Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <MagnetLines 
          rows={20}
          columns={35}
          containerSize="100vw"
          lineWidth="3px"
          lineHeight="16px"
          gradientColors={["#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"]}
          sensitivity={250}
          animationSpeed={0.05}
          className="h-screen w-screen"
        />
      </div>
      
      {/* Lightweight backdrop to reduce jank */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_40%)]" />

      {/* Navbar */}
      <TerroristNavbar onContactClick={() => setIsContactModalOpen(true)} />

      {/* Hero Section (Anime.js inspired) */}
      <section id="hero" className="relative z-10 min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Logo with Rotating Text */}
            <div className="lg:order-2 flex-shrink-0 order-1">
              <div className="relative">
                <AnimeHero />
                
                {/* Rotating Text Around ASCII Logo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <SpinningText
                    radius={12}
                    fontSize={0.9}
                    duration={20}
                    className="font-mono font-bold text-green-400"
                  >
                    {"DIGITAL ANARCHIST • FREEBIE TERRORIST • "}
                  </SpinningText>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="lg:order-1 flex-1 text-center lg:text-left space-y-8 lg:space-y-12 order-2">
              {/* Main Title with Original Gradient + Outline Tracing + Expanded iframe */}
              <div className="relative w-full overflow-visible">
                <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-mono leading-none">
                  <div className="relative w-full min-w-[120vw] lg:min-w-full">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-pulse">
                      FREEBIE
                    </h1>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-pulse">
                      TERRORIST
                    </h1>
                    {/* SVG Outline Tracing */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300">
                      <text x="20" y="120" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono fill-none stroke-green-400 stroke-2 animate-draw" strokeDasharray="1000" strokeDashoffset="1000">
                        FREEBIE
                      </text>
                      <text x="20" y="240" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono fill-none stroke-green-400 stroke-2 animate-draw" strokeDasharray="1000" strokeDashoffset="1000" style={{animationDelay: "1s"}}>
                        TERRORIST
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Description with spacing */}
              <motion.div
                className="space-y-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.p 
                  className="text-xl text-gray-300 font-mono bg-gradient-to-r from-gray-300 via-green-400 to-gray-300 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Destroying educational barriers through digital rebellion
                </motion.p>
                <motion.p 
                  className="text-gray-400 max-w-lg mx-auto lg:mx-0 font-mono"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  The Freebie Terrorist: student freebies, no discount crap. We dig them up so anyone can cash in.
                </motion.p>
              </motion.div>

              {/* CTA Buttons with Modern Magic UI Effects */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <ShimmerButton
                  className="min-w-[280px] h-16 text-lg font-mono font-bold group"
                  shimmerColor="#22c55e"
                  background="rgba(0, 0, 0, 0.8)"
                  borderRadius="2rem"
                  onClick={handleScrollToOffers}
                >
                  <div className="flex items-center justify-center gap-3 px-6">
                    <Terminal className="w-6 h-6 text-green-400" />
                    <span className="text-green-400">Access Free Arsenal</span>
                    <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </ShimmerButton>

                <InteractiveHoverButton
                  className="min-w-[260px] h-16 text-lg font-mono font-bold bg-black/80 border-green-500/30 text-green-400 hover:border-green-400 hover:bg-black/90 hover:text-green-300 px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <div className="flex items-center justify-center gap-3 px-4">
                    <div className="text-2xl">🖕</div>
                    <span>Want a .EDU e-mail?</span>
                  </div>
                </InteractiveHoverButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <ManifestoCards />

      {/* Offers Section */}
      <section id="offers" className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-green-400 font-mono">
              <BinaryHoverText text="FREE ARSENAL" />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Curated premium software and services, completely free for students.
              No trials, no bullshit, just pure value.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IntegrationPills
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm" />
              
              <motion.input
                type="text"
                placeholder="Search for offers..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="relative w-full px-6 py-4 pr-14 bg-black/60 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:bg-black/80 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm font-mono transition-all duration-300 ease-out"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Animated search icon */}
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{
                  rotate: searchTerm ? [0, 360] : 0,
                  scale: searchTerm ? [1, 1.1, 1] : 1
                }}
                transition={{ 
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Zap className="text-green-400 w-5 h-5 group-hover:text-green-300 transition-colors duration-300" />
              </motion.div>
              
              {/* Search results count indicator */}
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -bottom-8 left-0 text-sm text-gray-400 font-mono"
                >
                  {filteredOffers.length} result{filteredOffers.length !== 1 ? 's' : ''} found
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Offers Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedStats />
            <EnhancedOfferGrid offers={filteredOffers} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black font-mono">
              JOIN THE REBELLION
            </h2>
            <p className="text-xl text-black/80 mb-12 max-w-3xl mx-auto font-mono">
              Break free from corporate paywalls. Access premium tools. 
              Fight educational inequality. Start your digital revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-black text-green-400 font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
              >
                <Terminal className="w-5 h-5" />
                Request .edu Access
              </motion.button>
              <motion.button
                className="border-2 border-black text-black font-bold px-8 py-4 rounded-lg hover:bg-black hover:text-green-400 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/donate" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Support the Cause
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <TerminalFAQ />

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 border-t border-green-500/20 bg-gradient-to-t from-black/90 to-transparent">
        <div className="absolute inset-0 z-0 opacity-50">
          <FaultyTerminal />
        </div>
        <div className="container mx-auto relative z-10">
          {/* Animated Header */}
          <div className="text-center mb-12">
            <motion.div
              className="text-green-400 font-mono text-lg mb-4"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-green-400">{'>'}</span> SYSTEM STATUS: <span className="text-cyan-400">OPERATIONAL</span>
              <span className="animate-pulse ml-2">█</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Image
                    src="/terrorist_logo.png"
                    alt="Terrorist Logo"
                    width={32}
                    height={32}
                    className="rounded-full border border-green-400/50"
                  />
                </motion.div>
                <span className="text-xl font-bold text-green-400 font-mono group-hover:text-green-300 transition-colors">FTERRORIST</span>
              </div>
              <p className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors">
                Digital anarchist fighting educational inequality through free access to premium tools.
              </p>
              <div className="mt-4 text-xs font-mono text-green-400/60">
                <span className="text-cyan-400">{'>'}</span> uptime: 99.9% <br/>
                <span className="text-cyan-400">{'>'}</span> mode: rebellion
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-4 font-mono group-hover:text-green-400 transition-colors">
                <span className="text-green-400">{'>'}</span> Navigation
              </h4>
              <div className="space-y-3">
                {[
                  { href: "#manifesto", label: "Manifesto" },
                  { href: "#offers", label: "Free Arsenal" },
                  { href: "/donate", label: "Donate", external: true }
                ].map((link, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="group/link">
                    {link.external ? (
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-green-400 transition-colors block font-mono text-sm group-hover/link:text-green-300"
                      >
                        <span className="text-green-400/60 group-hover/link:text-green-400">$</span> cd {link.label.toLowerCase()}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-green-400 transition-colors block font-mono text-sm group-hover/link:text-green-300"
                      >
                        <span className="text-green-400/60 group-hover/link:text-green-400">$</span> cd {link.label.toLowerCase()}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-4 font-mono group-hover:text-green-400 transition-colors">
                <span className="text-green-400">{'>'}</span> Core Values
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "ANTI-CORPORATE", color: "green" },
                  { label: "ANTI-PAYWALL", color: "red" },
                  { label: "PRO-FREEDOM", color: "blue" },
                  { label: "COMMUNITY-DRIVEN", color: "purple" }
                ].map((principle, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className={`px-3 py-1 bg-${principle.color}-500/20 border border-${principle.color}-500/30 rounded text-${principle.color}-400 text-xs font-mono cursor-pointer hover:bg-${principle.color}-500/30 transition-all duration-300`}
                  >
                    {principle.label}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 text-xs font-mono">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-400/60"
                >
                  <span className="text-cyan-400">{'>'}</span> status: active rebellion
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="pt-8 border-t border-green-500/20"
            animate={{
              borderColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-center">
              <motion.p 
                className="text-sm text-gray-600 font-mono mb-2"
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-green-400">$</span> rm -rf educational_barriers && echo "Mission Complete" 
                <span className="animate-pulse text-cyan-400 ml-2">█</span>
              </motion.p>
              <motion.div
                className="text-xs font-mono text-green-400/40"
                animate={{
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-cyan-400">{'>'}</span> breaking educational barriers since 2024 <br/>
                <span className="text-cyan-400">{'>'}</span> join the digital revolution
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}