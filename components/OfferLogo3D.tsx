"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fetchCompanyLogo, type CompanyLogo } from "@/lib/logoService"
import Image from "next/image"

interface OfferLogo3DProps {
  provider: string
  size?: "sm" | "md" | "lg"
}

export default function OfferLogo3D({ provider, size = "lg" }: OfferLogo3DProps) {
  const [logoData, setLogoData] = useState<CompanyLogo | null>(null)
  const [imageError, setImageError] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  const sizes = {
    sm: { container: "w-12 h-12", text: "text-sm", image: 48 },
    md: { container: "w-16 h-16", text: "text-lg", image: 64 },
    lg: { container: "w-24 h-24", text: "text-2xl", image: 96 }
  }
  
  const currentSize = sizes[size]

  // Set client flag to prevent SSR issues
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const loadLogo = async () => {
      try {
        const logo = await fetchCompanyLogo(provider)
        setLogoData(logo)
      } catch (error) {
        console.error(`Failed to load logo for ${provider}:`, error)
        // Create fallback logo data
        setLogoData({
          company: provider,
          logoUrl: null,
          fallbackInitials: provider.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase(),
          fallbackColor: "from-gray-500 via-gray-400 to-gray-600"
        })
      }
    }
    
    loadLogo()
  }, [provider, isClient])

  // Create immediate fallback for SSR and while loading
  const immediateFallback = {
    company: provider,
    logoUrl: null,
    fallbackInitials: provider.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase(),
    fallbackColor: "from-gray-500 via-gray-400 to-gray-600"
  }

  // Use logoData if available, otherwise use immediate fallback
  const displayData = logoData || immediateFallback
  
  if (!isClient) {
    // During SSR, always show fallback to prevent hydration mismatch
    const gradient = immediateFallback.fallbackColor
    return (
      <div
        className={`${currentSize.container} bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center text-black font-black ${currentSize.text} shadow-2xl transform-gpu border-4 border-black/20`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {immediateFallback.fallbackInitials}
      </div>
    )
  }

  const shouldShowLogo = displayData.logoUrl && !imageError
  const gradient = displayData.fallbackColor

  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotateY: 20,
        rotateX: 10,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`${currentSize.container} ${shouldShowLogo ? 'bg-white/10' : `bg-gradient-to-br ${gradient}`} rounded-3xl flex items-center justify-center ${shouldShowLogo ? 'text-white' : 'text-black'} font-black ${currentSize.text} shadow-2xl transform-gpu border-4 border-black/20 overflow-hidden`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {shouldShowLogo ? (
          <Image
            src={displayData.logoUrl!}
            alt={`${provider} logo`}
            width={currentSize.image}
            height={currentSize.image}
            className="w-full h-full object-contain p-2"
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        ) : (
          displayData.fallbackInitials
        )}

        {/* Multiple shine effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced shadow with color */}
      <div
        className={`absolute top-4 left-4 ${currentSize.container} bg-gradient-to-br ${gradient} rounded-3xl opacity-30 -z-10 blur-xl`}
      />

      {/* Additional glow effect */}
      <div
        className={`absolute top-2 left-2 ${currentSize.container} bg-gradient-to-br ${gradient} rounded-3xl opacity-20 -z-20 blur-2xl scale-110`}
      />
    </motion.div>
  )
}
