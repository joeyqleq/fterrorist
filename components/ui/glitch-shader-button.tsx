"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchShaderButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glitchIntensity?: "low" | "medium" | "high";
  variant?: "primary" | "secondary" | "danger";
}

export const GlitchShaderButton: React.FC<GlitchShaderButtonProps> = ({
  children,
  onClick,
  className,
  glitchIntensity = "medium",
  variant = "primary",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const animationRef = useRef<number>();

  // Shader animation using Canvas 2D (for better compatibility)
  const drawShaderEffect = useCallback(
    (ctx: CanvasRenderingContext2D, time: number) => {
      if (!ctx || !buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const canvas = ctx.canvas;
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isHovered) return;

      // Create digital noise pattern
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        // Mouse influence
        const distanceToMouse = Math.sqrt(
          Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2),
        );
        const influence = Math.max(0, 1 - distanceToMouse / 100);

        // Digital rain effect
        const noise = Math.random() * influence * 0.3;
        const wave = Math.sin(time * 0.01 + x * 0.1) * 0.2;
        const glitchEffect = isGlitching ? Math.random() * 0.8 : 0;

        const intensity = (noise + wave + glitchEffect) * 255;

        // Green/cyan digital aesthetic
        data[i] = intensity * 0.1; // R
        data[i + 1] = intensity * 0.8; // G
        data[i + 2] = intensity * 0.6; // B
        data[i + 3] = intensity * 0.4; // A
      }

      ctx.putImageData(imageData, 0, 0);

      // Add scan lines
      ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 + Math.sin(time * 0.02) * 0.05})`;
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    },
    [isHovered, mousePos, isGlitching],
  );

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !isHovered) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    let startTime = Date.now();

    const animate = () => {
      const time = Date.now() - startTime;
      drawShaderEffect(ctx, time);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, drawShaderEffect]);

  // Mouse tracking
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [],
  );

  // Glitch trigger
  useEffect(() => {
    if (!isHovered) return;

    const glitchInterval = setInterval(
      () => {
        if (Math.random() > 0.7) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 100 + Math.random() * 200);
        }
      },
      1000 + Math.random() * 2000,
    );

    return () => clearInterval(glitchInterval);
  }, [isHovered]);

  const intensityConfig = {
    low: { scale: 1.02, blur: 2, glitchChance: 0.1 },
    medium: { scale: 1.05, blur: 4, glitchChance: 0.3 },
    high: { scale: 1.08, blur: 6, glitchChance: 0.5 },
  };

  const variantStyles = {
    primary:
      "border-green-400/40 bg-black/60 text-green-400 hover:bg-green-400/10",
    secondary:
      "border-cyan-400/40 bg-black/60 text-cyan-400 hover:bg-cyan-400/10",
    danger: "border-red-400/40 bg-black/60 text-red-400 hover:bg-red-400/10",
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden font-mono font-bold border-2 backdrop-blur-sm transition-all duration-300",
        "transform-gpu will-change-transform",
        variantStyles[variant],
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsGlitching(false);
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{
        scale: intensityConfig[glitchIntensity].scale,
        filter: `blur(${isGlitching ? intensityConfig[glitchIntensity].blur : 0}px)`,
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        filter: isGlitching
          ? ["blur(0px)", "blur(2px)", "blur(0px)", "blur(1px)", "blur(0px)"]
          : "blur(0px)",
        x: isGlitching ? [0, -2, 2, -1, 0] : 0,
        y: isGlitching ? [0, 1, -1, 0] : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      data-oid="eeyg9:7"
    >
      {/* Shader Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ mixBlendMode: "screen" }}
        data-oid="ml1kcgu"
      />

      {/* Digital Grid Overlay */}
      <AnimatePresence data-oid="8nvp2_g">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 98%, rgba(34, 197, 94, 0.3) 100%),
                linear-gradient(0deg, transparent 98%, rgba(34, 197, 94, 0.3) 100%)
              `,
              backgroundSize: "8px 8px",
              filter: isGlitching ? "invert(1)" : "none",
            }}
            data-oid="ryvx92z"
          />
        )}
      </AnimatePresence>

      {/* Glitch Bars */}
      <AnimatePresence data-oid=":.pyts7">
        {isGlitching && (
          <>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 0.7, x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-r from-transparent via-green-400 to-transparent z-[3] pointer-events-none"
              style={{ mixBlendMode: "difference" }}
              data-oid="83:iha8"
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 0.7, x: "-100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "linear", delay: 0.05 }}
              className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-[3] pointer-events-none"
              style={{ mixBlendMode: "difference" }}
              data-oid="67:.wgg"
            />
          </>
        )}
      </AnimatePresence>

      {/* RGB Split Effect */}
      <motion.div
        className="absolute inset-0 z-[4] pointer-events-none"
        animate={{
          textShadow: isGlitching
            ? [
                "2px 0 0 #ff0000, -2px 0 0 #00ff00, 0 2px 0 #0000ff",
                "1px 0 0 #ff0000, -1px 0 0 #00ff00, 0 1px 0 #0000ff",
                "0px 0 0 #ff0000, 0px 0 0 #00ff00, 0px 0px 0 #0000ff",
              ]
            : "none",
        }}
        transition={{ duration: 0.1 }}
        data-oid="yq2:5zc"
      >
        <div
          className="absolute inset-0 flex items-center justify-center opacity-50"
          data-oid="jps-s1x"
        >
          {children}
        </div>
      </motion.div>

      {/* Scan Line Effect */}
      <AnimatePresence data-oid=".flfti_">
        {isHovered && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "100%", opacity: [0, 0.8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent z-[5] pointer-events-none"
            style={{
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)",
              filter: "blur(0.5px)",
            }}
            data-oid="o.xkm-7"
          />
        )}
      </AnimatePresence>

      {/* Button Content */}
      <div
        className="relative z-[6] flex items-center justify-center px-6 py-3"
        data-oid="-07vxx-"
      >
        {children}
      </div>

      {/* Border Glow */}
      <motion.div
        className="absolute inset-[-2px] rounded-[inherit] pointer-events-none z-[0]"
        animate={{
          background: isHovered
            ? [
                "linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.3), transparent, rgba(6, 182, 212, 0.3), transparent)",
                "linear-gradient(225deg, transparent, rgba(6, 182, 212, 0.3), transparent, rgba(34, 197, 94, 0.3), transparent)",
                "linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.3), transparent, rgba(6, 182, 212, 0.3), transparent)",
              ]
            : "transparent",
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        data-oid="-zeyug-"
      />
    </motion.button>
  );
};

export default GlitchShaderButton;
