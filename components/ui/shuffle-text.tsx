"use client"

import { useState, useEffect } from "react"

interface ShuffleTextProps {
  text: string
  className?: string
  trigger?: boolean
}

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

export default function ShuffleText({ 
  text, 
  className = "",
  trigger = false 
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isShuffling, setIsShuffling] = useState(false)

  useEffect(() => {
    if (trigger) {
      setIsShuffling(true)
      let iteration = 0

      const interval = setInterval(() => {
        setDisplayText(prev => 
          prev.split("").map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          }).join("")
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setIsShuffling(false)
        }

        iteration += 1 / 3
      }, 30)

      return () => clearInterval(interval)
    }
  }, [text, trigger])

  return (
    <span className={`${className} ${isShuffling ? 'text-cyan-400' : ''} transition-colors duration-300`}>
      {displayText}
    </span>
  )
}