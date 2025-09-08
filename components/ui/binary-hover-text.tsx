"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BinaryHoverTextProps {
  text: string
  className?: string
}

export function BinaryHoverText({ text, className = '' }: BinaryHoverTextProps) {
  const [scrambledChars, setScrambledChars] = useState<{ [key: number]: string }>({})
  const [activeColors, setActiveColors] = useState<{ [key: number]: string }>({})
  const [activeFonts, setActiveFonts] = useState<{ [key: number]: string }>({})

  const getRandomBinary = () => Math.random() > 0.5 ? '0' : '1'
  // More vibrant and professional colors with a stronger green focus
  const binaryColors = [
    'text-green-500',
    'text-green-600',
    'text-green-400',
    'text-emerald-600',
    'text-green-300',
    'text-green-500',
    'text-blue-500',
    'text-cyan-500',
    'text-lime-500',
    'text-emerald-400',
    'text-green-700',
    'text-green-500',
    'text-green-400',
    'text-green-600',
    'text-emerald-500',
    'text-green-500',
  ]
  const getRandomFont = () => {
    const fonts = ['font-mono', 'font-sans', 'font-serif']
    return fonts[Math.floor(Math.random() * fonts.length)]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly scramble letters with different timing
      text.split('').forEach((char, index) => {
        if (char !== ' ' && Math.random() > 0.80) { // 20% chance per cycle
          const scrambleDelay = Math.random() * 300 // Random delay up to 300ms
          
          setTimeout(() => {
            setScrambledChars(prev => ({ ...prev, [index]: getRandomBinary() }))
            setActiveColors(prev => ({ ...prev, [index]: binaryColors[Math.floor(Math.random() * binaryColors.length)] }))
            setActiveFonts(prev => ({ ...prev, [index]: getRandomFont() }))
            
            // Multiple flickers before reverting
            const flickerCount = 2 + Math.floor(Math.random() * 3) // 2-4 flickers
            let currentFlicker = 0
            
            const flickerInterval = setInterval(() => {
              setScrambledChars(prev => ({ ...prev, [index]: getRandomBinary() }))
              setActiveColors(prev => ({ ...prev, [index]: binaryColors[Math.floor(Math.random() * binaryColors.length)] }))
              currentFlicker++
              
              if (currentFlicker >= flickerCount) {
                clearInterval(flickerInterval)
                // Revert back to original
                setTimeout(() => {
                  setScrambledChars(prev => {
                    const newState = { ...prev }
                    delete newState[index]
                    return newState
                  })
                  setActiveColors(prev => {
                    const newState = { ...prev }
                    delete newState[index]
                    return newState
                  })
                  setActiveFonts(prev => {
                    const newState = { ...prev }
                    delete newState[index]
                    return newState
                  })
                }, 50)
              }
            }, 80) // Flicker every 80ms
          }, scrambleDelay)
        }
      })
    }, 800 + Math.random() * 1200) // Random interval between 800ms - 2s

    return () => clearInterval(interval)
  }, [text])

  return (
    <span className={className}>
      {text.split('').map((char, index) => {
        const scrambledChar = scrambledChars[index]
        const isScrambled = scrambledChar !== undefined
        const charColor = activeColors[index] || 'text-green-400'
        const charFont = activeFonts[index] || 'font-mono'
        
        return (
          <motion.span
            key={index}
            className={`relative inline-block ${isScrambled ? `${charColor} ${charFont}` : 'text-green-400 font-mono'}`}
            animate={{
              scale: isScrambled ? [1, 1.2, 1.1, 1] : 1,
              opacity: isScrambled ? [1, 0.5, 1] : 1,
              rotate: isScrambled ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut"
            }}
          >
            {isScrambled ? scrambledChar : char}
          </motion.span>
        )
      })}
    </span>
  )
}