"use client"

import { useEffect, useRef } from "react"

interface PathPoint {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export default function BackgroundPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<PathPoint[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initPoints = () => {
      const points: PathPoint[] = []
      const numPoints = Math.max(20, Math.floor((canvas.width * canvas.height) / 15000))

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      pointsRef.current = points
    }

    const isFinite = (value: number): boolean => {
      return Number.isFinite(value) && !Number.isNaN(value)
    }

    const updatePoints = () => {
      const points = pointsRef.current
      const mouse = mouseRef.current

      points.forEach((point, i) => {
        // Validate point coordinates
        if (!isFinite(point.x) || !isFinite(point.y)) {
          point.x = Math.random() * canvas.width
          point.y = Math.random() * canvas.height
          point.vx = (Math.random() - 0.5) * 0.5
          point.vy = (Math.random() - 0.5) * 0.5
          return
        }

        // Mouse interaction
        const dx = mouse.x - point.x
        const dy = mouse.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 0 && distance < 150) {
          const force = (150 - distance) / 150
          const normalizedDx = dx / distance
          const normalizedDy = dy / distance

          if (isFinite(normalizedDx) && isFinite(normalizedDy)) {
            point.vx += normalizedDx * force * 0.01
            point.vy += normalizedDy * force * 0.01
          }
        }

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Boundary collision
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1
          point.x = Math.max(0, Math.min(canvas.width, point.x))
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1
          point.y = Math.max(0, Math.min(canvas.height, point.y))
        }

        // Damping
        point.vx *= 0.99
        point.vy *= 0.99

        // Clamp velocities
        point.vx = Math.max(-2, Math.min(2, point.vx))
        point.vy = Math.max(-2, Math.min(2, point.vy))

        // Find connections
        point.connections = []
        for (let j = i + 1; j < points.length; j++) {
          const other = points[j]
          if (isFinite(other.x) && isFinite(other.y)) {
            const dist = Math.sqrt((point.x - other.x) ** 2 + (point.y - other.y) ** 2)
            if (dist < 120 && dist > 0) {
              point.connections.push(j)
            }
          }
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const points = pointsRef.current

      // Draw connections
      points.forEach((point, i) => {
        if (!isFinite(point.x) || !isFinite(point.y)) return

        point.connections.forEach((connectionIndex) => {
          const other = points[connectionIndex]
          if (!other || !isFinite(other.x) || !isFinite(other.y)) return

          const distance = Math.sqrt((point.x - other.x) ** 2 + (point.y - other.y) ** 2)
          if (!isFinite(distance) || distance === 0) return

          const opacity = Math.max(0, Math.min(1, 1 - distance / 120))

          try {
            const gradient = ctx.createLinearGradient(point.x, point.y, other.x, other.y)
            gradient.addColorStop(0, `rgba(236, 72, 153, ${opacity * 0.3})`)
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.4})`)
            gradient.addColorStop(1, `rgba(245, 158, 11, ${opacity * 0.3})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = Math.max(0.5, opacity * 2)
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          } catch (error) {
            // Skip this line if gradient creation fails
            console.warn("Gradient creation failed:", error)
          }
        })
      })

      // Draw points
      points.forEach((point) => {
        if (!isFinite(point.x) || !isFinite(point.y)) return

        try {
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 3)
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
          gradient.addColorStop(1, "rgba(236, 72, 153, 0.4)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
          ctx.fill()
        } catch (error) {
          // Fallback to simple circle
          ctx.fillStyle = "rgba(236, 72, 153, 0.6)"
          ctx.beginPath()
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const animate = () => {
      updatePoints()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleResize = () => {
      resizeCanvas()
      initPoints()
    }

    resizeCanvas()
    initPoints()
    animate()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
