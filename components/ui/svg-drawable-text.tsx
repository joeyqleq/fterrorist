"use client"

import { useEffect, useRef } from "react"
import { animate } from "animejs"

interface SVGDrawableTextProps {
  text: string
  className?: string
  fontSize?: number
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  duration?: number
  delay?: number
}

export function SVGDrawableText({
  text,
  className = "",
  fontSize = 120,
  strokeWidth = 3,
  strokeColor = "#22c55e",
  fillColor = "transparent",
  duration = 3000,
  delay = 0
}: SVGDrawableTextProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRefs = useRef<SVGPathElement[]>([])

  useEffect(() => {
    if (!svgRef.current) return

    // Find all path elements
    const paths = svgRef.current.querySelectorAll('path')
    pathRefs.current = Array.from(paths)

    // Set initial state
    pathRefs.current.forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length.toString()
      path.style.strokeDashoffset = length.toString()
      path.style.fill = "transparent"
    })

    // Animate the drawing
    const animation = animate(pathRefs.current, {
      strokeDashoffset: 0,
      duration: duration,
      delay: (el, i) => delay + (i * 100),
      easing: "easeOutExpo",
      complete: () => {
        // After drawing, fill the text
        animate(pathRefs.current, {
          fill: fillColor === "transparent" ? strokeColor : fillColor,
          duration: 500,
          delay: 200,
          easing: "easeInOutQuad"
        })
      }
    })

    // Loop the animation every 8 seconds
    const loopInterval = setInterval(() => {
      // Reset
      pathRefs.current.forEach(path => {
        const length = path.getTotalLength()
        path.style.strokeDashoffset = length.toString()
        path.style.fill = "transparent"
      })
      
      // Redraw
      animate(pathRefs.current, {
        strokeDashoffset: 0,
        duration: duration,
        delay: (el, i) => i * 100,
        easing: "easeOutExpo",
        complete: () => {
          animate(pathRefs.current, {
            fill: fillColor === "transparent" ? strokeColor : fillColor,
            duration: 500,
            delay: 200,
            easing: "easeInOutQuad"
          })
        }
      })
    }, 8000)

    return () => {
      clearInterval(loopInterval)
    }
  }, [duration, delay, strokeColor, fillColor])

  // Generate SVG paths for text - this is a simplified version
  // In a real implementation, you'd want to use a library like opentype.js
  const generateTextPaths = (text: string) => {
    const words = text.split(' ')
    const paths: JSX.Element[] = []
    
    words.forEach((word, wordIndex) => {
      // Simple letter outlines - you'll want to replace these with actual font paths
      word.split('').forEach((char, charIndex) => {
        const x = (wordIndex * 300) + (charIndex * 60)
        const y = 100
        
        // Very basic letter shapes - replace with actual font paths
        let pathData = ""
        switch(char.toUpperCase()) {
          case 'F':
            pathData = `M ${x},${y-50} L ${x},${y+50} M ${x},${y-50} L ${x+40},${y-50} M ${x},${y} L ${x+30},${y}`
            break
          case 'R':
            pathData = `M ${x},${y+50} L ${x},${y-50} L ${x+30},${y-50} L ${x+35},${y-40} L ${x+35},${y-10} L ${x+30},${y} L ${x},${y} L ${x+35},${y+50}`
            break
          case 'E':
            pathData = `M ${x},${y+50} L ${x},${y-50} L ${x+40},${y-50} M ${x},${y} L ${x+30},${y} M ${x},${y+50} L ${x+40},${y+50}`
            break
          case 'B':
            pathData = `M ${x},${y+50} L ${x},${y-50} L ${x+30},${y-50} L ${x+35},${y-35} L ${x+35},${y-15} L ${x+30},${y} L ${x},${y} L ${x+30},${y} L ${x+35},${y+15} L ${x+35},${y+35} L ${x+30},${y+50} L ${x},${y+50}`
            break
          case 'I':
            pathData = `M ${x+10},${y-50} L ${x+30},${y-50} M ${x+20},${y-50} L ${x+20},${y+50} M ${x+10},${y+50} L ${x+30},${y+50}`
            break
          case 'T':
            pathData = `M ${x},${y-50} L ${x+40},${y-50} M ${x+20},${y-50} L ${x+20},${y+50}`
            break
          case 'O':
            pathData = `M ${x+20},${y-50} L ${x+10},${y-40} L ${x+10},${y+40} L ${x+20},${y+50} L ${x+30},${y+40} L ${x+30},${y-40} L ${x+20},${y-50}`
            break
          case 'S':
            pathData = `M ${x+35},${y-40} L ${x+20},${y-50} L ${x+10},${y-40} L ${x+15},${y-25} L ${x+25},${y-10} L ${x+30},${y+5} L ${x+25},${y+25} L ${x+10},${y+40} L ${x+20},${y+50} L ${x+35},${y+40}`
            break
          default:
            pathData = `M ${x+10},${y-30} L ${x+30},${y+30}` // Default line
        }
        
        paths.push(
          <path
            key={`${wordIndex}-${charIndex}`}
            d={pathData}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      })
    })
    
    return paths
  }

  return (
    <div className={`svg-drawable-text ${className}`}>
      <svg
        ref={svgRef}
        width="100%"
        height={fontSize * 1.5}
        viewBox="0 0 800 150"
        className="w-full h-auto"
      >
        {generateTextPaths(text)}
      </svg>
    </div>
  )
}
