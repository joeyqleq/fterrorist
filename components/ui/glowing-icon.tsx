"use client";

import { GlowEffect } from "@/components/ui/glow-effect";
import { cn } from "@/lib/utils";
import type React from "react";

interface GlowingIconProps {
  children: React.ReactNode;
  className?: string;
  glowColors?: string[];
  glowMode?: "rotate" | "pulse" | "breathe" | "colorShift";
  size?: "sm" | "md" | "lg";
}

export function GlowingIcon({
  children,
  className,
  glowColors = ["#4ade80", "#ec4899", "#f59e0b", "#8b5cf6"],
  glowMode = "pulse",
  size = "md",
}: GlowingIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("relative group", sizeClasses[size])} data-oid="dqs.yj4">
      <GlowEffect
        colors={glowColors}
        mode={glowMode}
        blur="soft"
        duration={2}
        scale={0.8}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        data-oid="7wus4tu"
      />

      <div
        className={cn(
          "relative z-10 w-full h-full flex items-center justify-center",
          className,
        )}
        data-oid="3fxohqg"
      >
        {children}
      </div>
    </div>
  );
}
