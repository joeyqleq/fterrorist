"use client"

import { useState } from "react"

interface GradientUnderlineProps {
  children: React.ReactNode
  className?: string
  hoverOnly?: boolean
}

export default function GradientUnderline({ 
  children, 
  className = "",
  hoverOnly = true 
}: GradientUnderlineProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span 
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 transition-all duration-500 ${
          hoverOnly 
            ? (isHovered ? 'w-full' : 'w-0') 
            : 'w-full animate-pulse'
        }`}
      />
    </span>
  )
}