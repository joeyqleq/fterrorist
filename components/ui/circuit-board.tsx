"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CircuitBoardProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export default function CircuitBoard({
  className = "",
  intensity = "medium",
}: CircuitBoardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Circuit paths
    const paths = [
      // Horizontal paths
      { start: { x: 50, y: 100 }, end: { x: 750, y: 100 }, type: "main" },
      { start: { x: 100, y: 150 }, end: { x: 600, y: 150 }, type: "secondary" },
      { start: { x: 150, y: 200 }, end: { x: 650, y: 200 }, type: "main" },
      { start: { x: 50, y: 250 }, end: { x: 500, y: 250 }, type: "secondary" },

      // Vertical connections
      { start: { x: 200, y: 80 }, end: { x: 200, y: 270 }, type: "connector" },
      { start: { x: 400, y: 80 }, end: { x: 400, y: 270 }, type: "connector" },
      { start: { x: 600, y: 80 }, end: { x: 600, y: 270 }, type: "connector" },
    ];

    // Circuit components (chips, capacitors, etc.)
    const components = [
      { x: 180, y: 80, type: "chip", width: 40, height: 20 },
      { x: 380, y: 80, type: "chip", width: 40, height: 20 },
      { x: 580, y: 80, type: "chip", width: 40, height: 20 },
      { x: 120, y: 130, type: "capacitor", width: 15, height: 30 },
      { x: 320, y: 130, type: "capacitor", width: 15, height: 30 },
      { x: 520, y: 130, type: "capacitor", width: 15, height: 30 },
      { x: 250, y: 180, type: "resistor", width: 30, height: 10 },
      { x: 450, y: 180, type: "resistor", width: 30, height: 10 },
      { x: 350, y: 230, type: "transistor", width: 20, height: 25 },
    ];

    let animationId: number;
    let pulseOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circuit board background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw circuit paths
      paths.forEach((path, index) => {
        const progress = (pulseOffset + index * 0.3) % 1;
        const speed = isHovered ? 2 : 1;

        // Base path
        ctx.strokeStyle =
          path.type === "main"
            ? "#22c55e"
            : path.type === "secondary"
              ? "#16a34a"
              : "#15803d";
        ctx.lineWidth = path.type === "main" ? 3 : 2;
        ctx.beginPath();
        ctx.moveTo(path.start.x, path.start.y);
        ctx.lineTo(path.end.x, path.end.y);
        ctx.stroke();

        // Animated pulse
        const pulseX = path.start.x + (path.end.x - path.start.x) * progress;
        const pulseY = path.start.y + (path.end.y - path.start.y) * progress;

        const gradient = ctx.createRadialGradient(
          pulseX,
          pulseY,
          0,
          pulseX,
          pulseY,
          20,
        );
        gradient.addColorStop(0, "#00ff88");
        gradient.addColorStop(0.5, "#22c55e");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw components
      components.forEach((comp) => {
        ctx.save();

        switch (comp.type) {
          case "chip":
            // IC Chip
            ctx.fillStyle = "#1a1a1a";
            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 1;
            ctx.fillRect(comp.x, comp.y, comp.width, comp.height);
            ctx.strokeRect(comp.x, comp.y, comp.width, comp.height);

            // Pins
            for (let i = 0; i < 6; i++) {
              const pinY = comp.y + (comp.height / 5) * (i + 0.5);
              ctx.fillStyle = "#666";
              ctx.fillRect(comp.x - 3, pinY - 1, 3, 2);
              ctx.fillRect(comp.x + comp.width, pinY - 1, 3, 2);
            }
            break;

          case "capacitor":
            // Electrolytic capacitor
            ctx.fillStyle = "#333";
            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(
              comp.x + comp.width / 2,
              comp.y + comp.height / 2,
              comp.width / 2,
              0,
              Math.PI * 2,
            );
            ctx.fill();
            ctx.stroke();

            // Polarity marking
            ctx.fillStyle = "#ff4444";
            ctx.fillRect(
              comp.x + comp.width / 2 - 1,
              comp.y + 2,
              2,
              comp.height - 4,
            );
            break;

          case "resistor":
            // Resistor
            ctx.fillStyle = "#8b4513";
            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 1;
            ctx.fillRect(comp.x, comp.y, comp.width, comp.height);
            ctx.strokeRect(comp.x, comp.y, comp.width, comp.height);

            // Color bands
            const bandColors = ["#ff0000", "#ff8800", "#ffff00", "#ffff00"];
            bandColors.forEach((color, i) => {
              ctx.fillStyle = color;
              ctx.fillRect(comp.x + 5 + i * 5, comp.y, 2, comp.height);
            });
            break;

          case "transistor":
            // Transistor
            ctx.fillStyle = "#1a1a1a";
            ctx.strokeStyle = "#22c55e";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(
              comp.x + comp.width / 2,
              comp.y + comp.height / 2,
              comp.width / 2,
              0,
              Math.PI * 2,
            );
            ctx.fill();
            ctx.stroke();

            // Leads
            ctx.strokeStyle = "#666";
            ctx.lineWidth = 2;
            const centerX = comp.x + comp.width / 2;
            const centerY = comp.y + comp.height / 2;
            ctx.beginPath();
            ctx.moveTo(centerX, comp.y);
            ctx.lineTo(centerX, comp.y - 10);
            ctx.moveTo(centerX - 8, centerY);
            ctx.lineTo(centerX - 18, centerY);
            ctx.moveTo(centerX + 8, centerY);
            ctx.lineTo(centerX + 18, centerY);
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      // Update pulse animation
      pulseOffset +=
        (isHovered ? 0.02 : 0.01) *
        (intensity === "low" ? 0.5 : intensity === "high" ? 2 : 1);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", () => setIsHovered(true));
    canvas.addEventListener("mouseleave", () => setIsHovered(false));

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", () => setIsHovered(true));
      canvas.removeEventListener("mouseleave", () => setIsHovered(false));
    };
  }, [isHovered, intensity]);

  return (
    <div
      className={`relative w-full h-80 bg-black rounded-lg overflow-hidden border border-green-500/30 ${className}`}
      data-oid="vhtjiwf"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))" }}
        data-oid="71.g9a2"
      />

      {/* Overlay content */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        data-oid="kspq7lb"
      >
        <div
          className="text-center p-6 bg-black/80 backdrop-blur-sm rounded-lg border border-green-500/30"
          data-oid="71tfgbw"
        >
          <motion.h3
            className="text-2xl font-bold text-green-400 mb-2 font-mono"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            data-oid="a8vd7u."
          >
            NEURAL NETWORK ACTIVE
          </motion.h3>
          <p className="text-green-300 text-sm font-mono" data-oid="j0tzxlz">
            Scanning for student opportunities...
          </p>
        </div>
      </div>
    </div>
  );
}
