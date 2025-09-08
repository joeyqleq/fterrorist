"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { TetrisLoading } from './tetris-loader'

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader on initial page load
    setIsLoading(true)
    setIsVisible(true)
    
    // Minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Hide after fade out animation
      setTimeout(() => setIsVisible(false), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Show loader on route changes
  useEffect(() => {
    setIsLoading(true)
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(false), 500)
    }, 1500) // Shorter time for route changes

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TetrisLoading />
        </motion.div>
      )}
    </AnimatePresence>
  )
}