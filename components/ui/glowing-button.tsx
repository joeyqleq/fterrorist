"use client"

import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/ui/glow-effect"
import { cn } from "@/lib/utils"
import type React from "react"

interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
  href?: string
  glowColors?: string[]
  glowMode?: "rotate" | "pulse" | "breathe" | "colorShift"
}

export function GlowingButton({
  children,
  onClick,
  className,
  variant = "default",
  size = "default",
  asChild,
  href,
  glowColors = ["#4ade80", "#ec4899", "#f59e0b", "#8b5cf6"],
  glowMode = "colorShift",
  ...props
}: GlowingButtonProps) {
  return (
    <div className="relative group">
      <GlowEffect
        colors={glowColors}
        mode={glowMode}
        blur="soft"
        duration={3}
        scale={0.9}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <Button
        onClick={onClick}
        className={cn("relative z-10", className)}
        variant={variant}
        size={size}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
