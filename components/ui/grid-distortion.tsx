"use client"

import { useEffect, useState } from "react"

export default function GridDistortion() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Distortion effect following mouse */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: `
            radial-gradient(circle, 
              rgba(34, 197, 94, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 30%, 
              rgba(139, 92, 246, 0.1) 60%, 
              transparent 100%
            )
          `,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Pixelated overlay grid */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 2px, transparent 2px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 8px 8px, 8px 8px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Moving scan lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scan-slow top-1/4"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-scan-slow top-3/4" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-scan-vertical-slow left-1/4" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-scan-vertical-slow right-1/4" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  )
}