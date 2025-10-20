"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticBorderProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  sparkleColor?: string;
}

export function MagneticBorder({
  children,
  className = "",
  intensity = 0.3,
  sparkleColor = "#22c55e",
}: MagneticBorderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * intensity);
    y.set(yPct * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative group cursor-pointer", className)}
      data-oid="3n0:69r"
    >
      {/* Magnetic sparkle effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        data-oid="kegj4n6"
      >
        <div
          className="absolute inset-0 rounded-2xl animate-pulse"
          style={{
            background: `radial-gradient(circle at center, ${sparkleColor}20 0%, transparent 70%)`,
            filter: "blur(1px)",
          }}
          data-oid="ln7n22d"
        />

        {/* Sparkles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: sparkleColor,
              left: `${20 + i * 10}%`,
              top: `${20 + Math.sin(i) * 40}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            data-oid="qfa63-n"
          />
        ))}
      </div>

      {children}
    </motion.div>
  );
}
