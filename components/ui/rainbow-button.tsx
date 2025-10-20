"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function RainbowButton({
  children,
  onClick,
  className = "",
}: RainbowButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-oid="xezue48"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-75 blur-xl"
        animate={{
          background: isHovered
            ? [
                "linear-gradient(45deg, #ec4899, #8b5cf6, #f59e0b, #10b981, #3b82f6, #ec4899)",
                "linear-gradient(90deg, #8b5cf6, #f59e0b, #10b981, #3b82f6, #ec4899, #8b5cf6)",
                "linear-gradient(135deg, #f59e0b, #10b981, #3b82f6, #ec4899, #8b5cf6, #f59e0b)",
              ]
            : "linear-gradient(45deg, #ec4899, #8b5cf6, #f59e0b)",
        }}
        transition={{
          duration: isHovered ? 3 : 0.5,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          ease: "linear",
        }}
        data-oid="5dhlx.-"
      />

      {/* Main button */}
      <Button
        ref={buttonRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-black font-bold border-0 rounded-full px-8 py-4 text-lg overflow-hidden ${className}`}
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(45deg, #ec4899, #8b5cf6, #f59e0b, #10b981, #3b82f6)`
            : "linear-gradient(45deg, #ec4899, #8b5cf6, #f59e0b)",
        }}
        data-oid="7s.yu7m"
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          data-oid="w97w1:_"
        />

        {/* Content */}
        <span className="relative z-10 mix-blend-multiply" data-oid="k4q2mwj">
          {children}
        </span>
      </Button>
    </motion.div>
  );
}
