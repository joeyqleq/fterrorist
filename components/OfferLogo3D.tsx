"use client"

import { motion } from "framer-motion"

interface OfferLogo3DProps {
  provider: string
}

const logoColors = {
  Webflow: "from-blue-500 via-cyan-400 to-blue-600",
  "Microsoft Azure": "from-blue-600 via-blue-400 to-cyan-500",
  "Alibaba Cloud": "from-orange-500 via-yellow-400 to-red-500",
  Namecheap: "from-orange-600 via-yellow-500 to-orange-400",
  "Bootstrap Studio": "from-purple-600 via-pink-500 to-purple-400",
  "Google One AI Premium": "from-blue-500 via-green-400 to-yellow-500",
  OpenAI: "from-green-500 via-emerald-400 to-teal-500",
  "Cursor AI": "from-blue-600 via-purple-500 to-indigo-600",
  Figma: "from-purple-500 via-pink-500 to-red-500",
  Craft: "from-orange-500 via-yellow-400 to-red-500",
}

export default function OfferLogo3D({ provider }: OfferLogo3DProps) {
  const gradient = logoColors[provider as keyof typeof logoColors] || "from-gray-500 via-gray-400 to-gray-600"
  const initials = provider
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

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
        className={`w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center text-black font-black text-2xl shadow-2xl transform-gpu border-4 border-black/20`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {initials}

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
        className={`absolute top-4 left-4 w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl opacity-30 -z-10 blur-xl`}
      />

      {/* Additional glow effect */}
      <div
        className={`absolute top-2 left-2 w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl opacity-20 -z-20 blur-2xl scale-110`}
      />
    </motion.div>
  )
}
