"use client"

import { useState, useMemo } from "react"
import { studentOffers } from "@/lib/studentOffers"
import DisplayCards from "@/components/ui/display-cards"
import RainbowButton from "@/components/ui/rainbow-button"
import BackgroundPaths from "@/components/ui/background-paths"
import { ScrollBackgroundPaths } from "@/components/ui/scroll-background-paths"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"
import { GlowingButton } from "@/components/ui/glowing-button"
import { GlowingIcon } from "@/components/ui/glowing-icon"
import { ContactFormModal } from "@/components/ui/contact-form-modal"
import { OfferFilterMenu } from "@/components/ui/offer-filter-menu"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Globe, Shield, Users, FileText, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(studentOffers.map((offer) => offer.category)))
    return ["All", ...uniqueCategories.sort()]
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
      <BackgroundPaths />
      <ScrollBackgroundPaths />

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/terrorist_logo.png"
                alt="Freebie Terrorist Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h1 className="text-2xl font-black bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Freebie Terrorist
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                About
              </Button>
              <GlowingButton
                asChild
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
                glowColors={["#4ade80", "#ec4899", "#f59e0b"]}
              >
                <Link href="/donate">Support Us</Link>
              </GlowingButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Text */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Logo positioned top right as requested */}
            <div className="lg:order-2 flex-shrink-0">
              <div className="relative">
                <Image
                  src="/terrorist_logo.png"
                  alt="Freebie Terrorist Logo"
                  width={200}
                  height={200}
                  className="rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-pink-500/20 to-yellow-400/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Hero Text with Animation */}
            <div className="lg:order-1 flex-1 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-white">Breaking</span>
                  <span className="block">
                    <AnimatedTextCycle
                      words={["Educational", "Economic", "Digital", "Academic", "Systemic"]}
                      interval={3000}
                      className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                    />
                  </span>
                  <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 bg-clip-text text-transparent">
                    Barriers
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-4 max-w-4xl">
                  <p>
                    This space is more than just a repository for student freebies. It aggregates verified offers and
                    helps students worldwide, especially those from the global south, who don't have easy access to .edu
                    addresses.
                  </p>
                  <p>
                    <strong className="text-green-400">Freebie Terrorist</strong> supports those marginalized by
                    economic and political barriers by providing real, fully functional .edu accounts with legitimate
                    Office 365 tied to them.
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>FYI:</strong> I can also help with university/school IDs, transcripts, and other
                    verification documents required for these offers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <RainbowButton onClick={() => setIsContactModalOpen(true)}>
                  <Heart className="w-5 h-5 mr-2" />
                  Request .edu Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </RainbowButton>
                <GlowingButton
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-4"
                  glowColors={["#8b5cf6", "#ec4899", "#f59e0b"]}
                >
                  <Link href="#about">Learn More</Link>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Why Freebie Terrorist Exists</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6 text-left">
              <p>
                <strong className="text-pink-400">Let's be honest:</strong> This website is made for people who love
                free stuff. It's a place where you can discover amazing offers and request legitimate .edu addresses and
                valid IDs when needed.
              </p>
              <p>
                Growing up in economic hardship, I witnessed firsthand how educational barriers prevent talented
                individuals from accessing the tools they need to succeed. Premium software, cloud services, and
                development tools are often locked behind paywalls that exclude those who need them most.
              </p>
              <p>
                When you request a .edu address from me, it takes considerable work and effort. I'm trying to hustle but
                I'm not greedy— I'm saving you the time, effort, and research required to get these accounts yourself.
                <strong className="text-yellow-400"> Not to mention the risk</strong>, since (let's not kid ourselves)
                I'm placing myself in considerable risk to help you access these resources.
              </p>
              <p>
                <strong className="text-green-400">I trust that people will tip me whatever they think is fair.</strong>
                However, this doesn't mean I'm willing to help users who want to take advantage of apps and services
                they otherwise can't afford if they can't tip me appropriately.
              </p>
              <p className="text-center text-xl font-semibold text-purple-400">
                This service is legitimate, honest, and community-driven. We're fighting against exclusivity, one
                student at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Glowing Icons */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <GlowingIcon
                size="lg"
                glowColors={["#4ade80", "#22c55e", "#16a34a"]}
                glowMode="breathe"
                className="mx-auto mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-black" />
                </div>
              </GlowingIcon>
              <h3 className="text-xl font-bold text-white mb-2">Global Access</h3>
              <p className="text-gray-300">Supporting students worldwide, especially from underserved regions</p>
            </div>

            <div className="text-center">
              <GlowingIcon
                size="lg"
                glowColors={["#ec4899", "#db2777", "#be185d"]}
                glowMode="pulse"
                className="mx-auto mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </GlowingIcon>
              <h3 className="text-xl font-bold text-white mb-2">Legitimate Accounts</h3>
              <p className="text-gray-300">Real .edu addresses with full Office 365 functionality</p>
            </div>

            <div className="text-center">
              <GlowingIcon
                size="lg"
                glowColors={["#f59e0b", "#d97706", "#b45309"]}
                glowMode="colorShift"
                className="mx-auto mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
              </GlowingIcon>
              <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
              <p className="text-gray-300">Tip-based service with anonymous support options</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Offers Section */}
      <section id="offers" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              All Available Offers ({studentOffers.length})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing tools and services that become completely free with your .edu account
            </p>
          </div>

          <OfferFilterMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <DisplayCards offers={filteredOffers} />

          {filteredOffers.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No offers found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Ready to Break Barriers?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have gained access to premium tools and services. Support our mission and get
            your legitimate .edu account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowingButton
              onClick={() => setIsContactModalOpen(true)}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 font-bold"
              glowColors={["#000000", "#374151", "#6b7280"]}
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Access
            </GlowingButton>
            <GlowingButton
              asChild
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10 rounded-full px-8 py-4 font-bold"
              glowColors={["#000000", "#374151"]}
            >
              <Link href="/donate">Support Us</Link>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/terrorist_logo.png" alt="Freebie Terrorist Logo" width={32} height={32} />
              <span className="font-bold text-white">Freebie Terrorist</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Breaking educational barriers worldwide.
              <br />
              Legitimate • Anonymous • Community-driven
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
