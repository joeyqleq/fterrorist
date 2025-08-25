"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CircuitBoardBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-25">
      {/* Premium Terminal Grid Base */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            {/* High-res grid pattern */}
            <pattern id="terminal-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(34, 197, 94, 0.08)" 
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
            </pattern>
            
            {/* Terminal scan lines */}
            <pattern id="scan-lines" width="100%" height="4" patternUnits="userSpaceOnUse">
              <rect width="100%" height="2" fill="rgba(34, 197, 94, 0.02)"/>
              <rect y="2" width="100%" height="2" fill="transparent"/>
            </pattern>
            
            {/* Premium glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid background */}
          <rect width="100%" height="100%" fill="url(#terminal-grid)"/>
          
          {/* Scan lines overlay */}
          <rect width="100%" height="100%" fill="url(#scan-lines)"/>
          
          {/* Premium circuit paths */}
          {/* Main data highways */}
          <motion.path
            d="M0,200 Q300,180 600,200 T1200,200"
            fill="none"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,400 Q400,380 800,400 T1200,400"
            fill="none"
            stroke="rgba(34, 197, 94, 0.25)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <motion.path
            d="M0,600 Q200,580 400,600 T800,600 Q1000,580 1200,600"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          
          {/* Vertical data streams */}
          <motion.path
            d="M200,0 Q180,200 200,400 T200,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          <motion.path
            d="M600,0 Q580,150 600,300 T600,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.25)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          
          <motion.path
            d="M1000,0 Q980,250 1000,500 T1000,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
          
          {/* Terminal connection nodes */}
          <motion.circle
            cx="200"
            cy="200"
            r="3"
            fill="rgba(34, 197, 94, 0.6)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.circle
            cx="600"
            cy="400"
            r="2"
            fill="rgba(34, 197, 94, 0.7)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          />
          
          <motion.circle
            cx="1000"
            cy="600"
            r="3"
            fill="rgba(34, 197, 94, 0.5)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
          
          {/* Data packet animations */}
          <motion.circle
            r="2"
            fill="rgba(34, 197, 94, 0.8)"
            filter="url(#glow)"
            animate={{
              cx: [0, 1200],
              cy: [200, 200]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.circle
            r="1.5"
            fill="rgba(34, 197, 94, 0.6)"
            filter="url(#glow)"
            animate={{
              cx: [1200, 0],
              cy: [400, 400]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
        </svg>
      </div>
      
      {/* Terminal flicker effect */}
      <motion.div
        className="absolute inset-0 bg-green-400/5"
        animate={{
          opacity: [0, 0.1, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 5
        }}
      />
    </div>
  )
}