"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { studentOffers } from "@/lib/studentOffers"
import { animate } from "animejs"
import Counter, { Formatter } from "@/components/animata/text/counter"

function parseSavingsToYearUSD(s: string): number {
  // Extract first number group
  const num = (() => {
    const m = s.match(/\$\s*([0-9]+(?:\.[0-9]+)?)/)
    return m ? parseFloat(m[1]) : 0
  })()
  if (!num) return 0
  const isMonthly = /\/\s*month|per\s*month/i.test(s)
  const isYearly = /\/\s*year|per\s*year|year\)/i.test(s)
  if (isMonthly) return Math.round(num * 12)
  return Math.round(num) // assume yearly/default
}

function parseDurationToMonths(d: string): number | null {
  if (/while\s+enrolled|lifetime|ongoing/i.test(d)) return 12
  const year = d.match(/([0-9]+)\s*year/)
  if (year) return parseInt(year[1], 10) * 12
  const month = d.match(/([0-9]+)\s*month/)
  if (month) return parseInt(month[1], 10)
  const days = d.match(/([0-9]+)\s*day/)
  if (days) return Math.round(parseInt(days[1], 10) / 30)
  return null
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)

  const { freeCount, totalValue, avgDuration } = useMemo(() => {
    // Count all offers as 99% are accessible to students with proper verification
    const freeCount = studentOffers.length
    // Fixed total value as calculated by user after removing Survey Hero duplicate and adding Roboform
    const totalValue = 23222
    const months = studentOffers.map(o => parseDurationToMonths(o.duration)).filter((v): v is number => v !== null)
    const avgDuration = months.length ? Math.round(months.reduce((a, b) => a + b, 0) / months.length) : 12
    return { freeCount, totalValue, avgDuration }
  }, [])

  useEffect(() => {
    if (!ref.current || hasPlayed) return
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const els = ref.current!.querySelectorAll("[data-anim]") as NodeListOf<HTMLElement>
        els.forEach((el, index) => {
          const end = parseInt(el.dataset.value || "0", 10)
          let start = 0
          const increment = Math.ceil(end / 60) // 60 frames for ~1 second at 60fps
          
          const counter = () => {
            start += increment
            if (start >= end) {
              el.textContent = end.toString()
            } else {
              el.textContent = start.toString()
              requestAnimationFrame(counter)
            }
          }
          
          // Add staggered delay for each stat
          setTimeout(() => {
            requestAnimationFrame(counter)
          }, index * 200)
        })
        setHasPlayed(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [hasPlayed])

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      <div className="p-6 rounded-xl border border-green-500/30 bg-black/50 text-center">
        <div className="text-gray-400 text-xs mb-1 font-mono">Total Student Offers</div>
        <Counter
          delay={500}
          direction="up"
          targetValue={freeCount}
          className="text-4xl font-black text-green-400 font-mono"
        />
      </div>
      <div className="p-6 rounded-xl border border-green-500/30 bg-black/50 text-center">
        <div className="text-gray-400 text-xs mb-1 font-mono">Total Value (USD/year)</div>
        <Counter
          delay={800}
          direction="up"
          targetValue={totalValue}
          format={Formatter.currency}
          className="text-4xl font-black text-green-400 font-mono"
        />
      </div>
      <div className="p-6 rounded-xl border border-green-500/30 bg-black/50 text-center">
        <div className="text-gray-400 text-xs mb-1 font-mono">Average Duration (months)</div>
        <Counter
          delay={1100}
          direction="up"
          targetValue={avgDuration}
          className="text-4xl font-black text-green-400 font-mono"
        />
      </div>
    </div>
  )
}


