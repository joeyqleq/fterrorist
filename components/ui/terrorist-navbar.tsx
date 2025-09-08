'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X, FileText, Gift, Heart, MessageCircle, HelpCircle } from 'lucide-react'
import { ContactFormModal } from './contact-form-modal'
import Link from 'next/link'
import Image from 'next/image'

// ASCII Spinner component
const ASCIISpinner = () => {
  const [frame, setFrame] = useState(0)
  const spinnerFrames = ['|', '/', '-', '\\', '|', '/', '-', '\\']

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % spinnerFrames.length)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-mono text-green-400 text-sm">
      {spinnerFrames[frame]}
    </span>
  )
}

// Glitch Text Effect for nav items
const GlitchNavText = ({ children, isHovered }: { children: React.ReactNode; isHovered: boolean }) => {
  const [glitchedText, setGlitchedText] = useState(children as string)
  
  useEffect(() => {
    if (!isHovered) {
      setGlitchedText(children as string)
      return
    }

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`'
    const originalText = children as string
    let glitchTimeout: NodeJS.Timeout

    const startGlitch = () => {
      const glitchCount = 3
      let currentGlitch = 0

      const glitchInterval = setInterval(() => {
        if (currentGlitch >= glitchCount) {
          setGlitchedText(originalText)
          clearInterval(glitchInterval)
          return
        }

        const glitched = originalText
          .split('')
          .map((char, index) => {
            if (Math.random() > 0.8 && char !== ' ') {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            }
            return char
          })
          .join('')

        setGlitchedText(glitched)
        currentGlitch++
      }, 50)
    }

    glitchTimeout = setTimeout(startGlitch, 100)
    return () => clearTimeout(glitchTimeout)
  }, [isHovered, children])

  return <span>{glitchedText}</span>
}

interface TerroristNavbarProps {
  onContactClick: () => void
}

export default function TerroristNavbar({ onContactClick }: TerroristNavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [screenWidth, setScreenWidth] = useState(0)
  const { scrollY } = useScroll()

  // Track screen width for responsive navbar
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth)
    updateScreenWidth()
    window.addEventListener('resize', updateScreenWidth)
    return () => window.removeEventListener('resize', updateScreenWidth)
  }, [])

  // Navigation items with premium icons
  const navItems = [
    { id: 'manifesto', label: 'Manifesto', href: '#manifesto', icon: FileText },
    { id: 'offers', label: 'Offers', href: '#offers', icon: Gift },
    { id: 'faq', label: 'FAQ', href: '#faq', icon: HelpCircle },
    { id: 'donate', label: 'Donate', href: '/donate', icon: Heart },
    { id: 'contact', label: 'Contact', href: '#contact', icon: MessageCircle }
  ]

  // Handle scroll detection for expansion
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsExpanded(latest > 100)
  })

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      onContactClick()
    } else if (href === '/donate') {
      // Open donate page in new tab
      window.open('/donate', '_blank')
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-6 left-1/2 z-50 hidden md:block"
        style={{ x: '-50%' }}
        animate={{
          width: isExpanded ? Math.min(550, screenWidth * 0.85) : 180,
          height: isExpanded ? 64 : 48,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
      >
        <motion.div
          className="relative h-full w-full rounded-full backdrop-blur-xl border border-green-500/30"
          style={{
            background: 'linear-gradient(135deg, rgba(22, 101, 52, 0.8) 0%, rgba(5, 46, 22, 0.9) 100%)',
            boxShadow: '0 8px 32px rgba(22, 101, 52, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          animate={{
            boxShadow: isExpanded 
              ? '0 8px 32px rgba(22, 101, 52, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 4px 16px rgba(22, 101, 52, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {!isExpanded ? (
            // INIT State
            <motion.div
              className="flex items-center justify-center h-full gap-3 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="/terrorist_logo.png"
                alt="FT Logo"
                width={24}
                height={24}
                className="rounded-full border border-green-400/50"
              />
              <span className="text-green-400 font-mono font-bold text-sm tracking-wider">
                INIT
              </span>
              <ASCIISpinner />
            </motion.div>
          ) : (
            // Expanded State
            <motion.div
              className="flex items-center h-full px-4 gap-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Logo */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/terrorist_logo.png"
                  alt="Terrorist Logo"
                  width={41}
                  height={41}
                  className="rounded-full border border-green-400/50"
                />
              </motion.div>

              {/* Nav Items */}
              <div className="flex items-center gap-0.5 flex-1 justify-center">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className="relative px-1.5 py-1 text-sm font-medium transition-colors duration-200"
                    style={{
                      color: hoveredItem === item.id ? '#4ade80' : '#f5f5dc'
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => handleNavClick(item.href)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <item.icon className="w-4 h-4 text-green-400" />
                      <span className="text-xs">
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.nav>

      {/* MobileNavbar */}
      <motion.nav
        className="fixed top-4 left-1/2 z-50 block lg:hidden"
        style={{ x: '-50%' }}
        animate={{
          width: isMobileMenuOpen ? 300 : 160,
          height: isMobileMenuOpen ? 280 : 44,
        }}
        transition={{
          type: 'tween',
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.3
        }}
      >
        <motion.div
          className="relative h-full w-full rounded-2xl backdrop-blur-xl border border-green-500/30"
          style={{
            background: 'linear-gradient(135deg, rgba(22, 101, 52, 0.8) 0%, rgba(5, 46, 22, 0.9) 100%)',
            boxShadow: '0 8px 32px rgba(22, 101, 52, 0.3)'
          }}
        >
          {!isMobileMenuOpen ? (
            // Collapsed Mobile State
            <motion.div
              className="flex items-center justify-between h-full px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-mono font-bold text-xs">INIT</span>
                <ASCIISpinner />
              </div>
              <button
                className="p-1 text-green-400 hover:text-green-300"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={18} />
              </button>
            </motion.div>
          ) : (
            // Expanded Mobile Menu
            <motion.div
              className="p-4 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/terrorist_logo.png"
                    alt="Terrorist Logo"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-green-400 font-mono font-bold text-xs">TERRORIST</span>
                </div>
                <button
                  className="p-1 text-green-400 hover:text-green-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="space-y-2 mb-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-green-100 hover:text-green-400 hover:bg-green-500/20 transition-colors"
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-green-400" />
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.nav>
    </>
  )
}
