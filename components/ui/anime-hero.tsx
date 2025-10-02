"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { animate } from "animejs"
import Logo from "./spinning-arc-logo-with-gradient-text-1"

interface AnimeHeroProps {
  className?: string
}

// Lightweight, GPU-friendly hero inspired by animejs.com landing.
// - Concentric rings with orbiting dots
// - Always-on center ASCII logo
// - Timeline responds to scroll direction (play forward/backward)
export default function AnimeHero({ className = "" }: AnimeHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const tlRef = useRef<any>(null)
  const playingRef = useRef(false)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })!

    let rafId = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const center = () => ({ x: canvas.width / DPR / 2, y: canvas.height / DPR / 2 })

    // Particles on multiple rings
    const rings = [70, 110, 150, 190]
    const dotsPerRing = 12
    const dots: { r: number; a: number; s: number }[] = []
    rings.forEach((r, i) => {
      for (let d = 0; d < dotsPerRing; d++) {
        dots.push({ r, a: (Math.PI * 2 * d) / dotsPerRing, s: 0.4 + i * 0.12 })
      }
    })

    const draw = (t: number) => {
      const { x, y } = center()
      ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR)

      // Rings
      ctx.save()
      rings.forEach((r, i) => {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 + i * 0.05})`
        ctx.lineWidth = 1
        ctx.stroke()
      })
      ctx.restore()

      // Dots - slower, more imperfect movement
      dots.forEach((dot, i) => {
        // Slower rotation with organic variation
        const baseSpeed = 0.0003 // Much slower
        const speedVar = 0.5 + Math.sin(t * 0.0005 + i) * 0.3 // Organic speed variation
        const radiusVar = Math.sin(t * 0.0008 + i * 0.5) * 5 // Radius wobble for imperfect circles
        
        const ang = dot.a + t * baseSpeed * (i % 2 === 0 ? 1 : -1) * speedVar
        const radius = dot.r + radiusVar
        const px = x + Math.cos(ang) * radius
        const py = y + Math.sin(ang) * radius
        const size = 2 + (i % 3) * 0.5
        
        ctx.beginPath()
        ctx.fillStyle = `rgba(34, 197, 94, ${0.6 + Math.sin(t * 0.001 + i) * 0.2})`
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Core render loop
    const start = (t: number) => {
      draw(t)
      rafId = requestAnimationFrame(start)
    }
    rafId = requestAnimationFrame(start)

    // Scroll controlled timeline (subtle scale + glow)
    const root = document.documentElement
    const container = canvas.parentElement as HTMLElement
    const makeGlow = () => {
      if (tlRef.current) tlRef.current.cancel?.()
      const DURATION = 1200
      tlRef.current = animate(
        container,
        {
          scale: [0.98, 1.02],
          filter: [
            "drop-shadow(0 0 0px rgba(34,197,94,0))",
            "drop-shadow(0 0 16px rgba(34,197,94,0.35))",
          ],
          duration: DURATION,
          autoplay: false,
          easing: "easeInOutSine",
        },
      )
      progressRef.current = 0
      tlRef.current.seek?.(0)
    }
    makeGlow()

    let lastScroll = window.scrollY
    const onScroll = () => {
      if (!tlRef.current) return
      const dir = window.scrollY > lastScroll ? 1 : -1
      lastScroll = window.scrollY
      playingRef.current = true
      const delta = dir > 0 ? 0.08 : -0.08
      progressRef.current = Math.max(0, Math.min(1, progressRef.current + delta))
      const dur = 1200
      tlRef.current.seek?.(progressRef.current * dur)
      clearTimeout((onScroll as any)._t)
      ;(onScroll as any)._t = setTimeout(() => {
        playingRef.current = false
      }, 120)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
      tlRef.current?.cancel()
    }
  }, [])

  return (
    <div className={`relative mx-auto w-full max-w-2xl aspect-square ${className}`}>
      {/* Canvas rings */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Enhanced Spinning Arc Logo - positioned behind ASCII logo with smaller size */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <Logo 
            size={220} 
            className="opacity-20 transform transition-all duration-300 hover:opacity-30" 
          />
        </div>
      </div>

      {/* Center ASCII logo - enhanced with subtle glitch effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-80 h-80">
          <Image 
            src="/terrorist_logo_ascii.png" 
            alt="FT ASCII" 
            fill 
            sizes="320px" 
            className="object-contain" 
            style={{
              animation: "slowPulse 4s ease-in-out infinite, subtleGlitch 30s ease-in-out infinite"
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes subtleGlitch {
          0%, 99.5%, 100% { 
            transform: translate(0, 0) scale(1);
            filter: hue-rotate(0deg);
          }
          0.25% { 
            transform: translate(-0.2px, 0.1px) scale(1.0005);
            filter: hue-rotate(0.2deg);
          }
        }
      `}</style>
    </div>
  )
}


