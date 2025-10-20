"use client";

import { useEffect, useState } from "react";

export default function DotGrid() {
  const [dots, setDots] = useState<
    Array<{ id: number; x: number; y: number; active: boolean; color: string }>
  >([]);

  useEffect(() => {
    // Generate initial dots
    const initialDots = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: Math.random() > 0.7,
      color: Math.random() > 0.5 ? "green" : "blue",
    }));
    setDots(initialDots);

    // Animate dots
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => ({
          ...dot,
          active: Math.random() > 0.8,
          color: Math.random() > 0.5 ? "green" : "blue",
        })),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" data-oid="_ogpf7d">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" data-oid="1ws0-mo">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="om-xnwn"
        >
          <defs data-oid="nmo_beo">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              data-oid="lhybkbs"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="1"
                data-oid="8ur4m2t"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            data-oid="lyd74-r"
          />
        </svg>
      </div>

      {/* Animated dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
            dot.active
              ? dot.color === "green"
                ? "bg-green-400 shadow-lg shadow-green-400/50"
                : "bg-blue-400 shadow-lg shadow-blue-400/50"
              : "bg-gray-600"
          }`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: dot.active ? "scale(2)" : "scale(1)",
          }}
          data-oid="5gcql2z"
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" data-oid=":e085tv">
        {dots
          .filter((dot) => dot.active)
          .map((dot, index) => {
            const nearbyDots = dots.filter(
              (otherDot) =>
                otherDot.id !== dot.id &&
                otherDot.active &&
                Math.abs(otherDot.x - dot.x) < 15 &&
                Math.abs(otherDot.y - dot.y) < 15,
            );

            return nearbyDots.map((nearbyDot) => (
              <line
                key={`${dot.id}-${nearbyDot.id}`}
                x1={`${dot.x}%`}
                y1={`${dot.y}%`}
                x2={`${nearbyDot.x}%`}
                y2={`${nearbyDot.y}%`}
                stroke="rgba(34, 197, 94, 0.2)"
                strokeWidth="0.5"
                className="animate-pulse"
                data-oid="6rh3my3"
              />
            ));
          })}
      </svg>

      {/* Scanning line effect */}
      <div className="absolute inset-0" data-oid="_up1aal">
        <div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan"
          data-oid="a.j:7qw"
        ></div>
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-scan-vertical"
          data-oid="7s-q6aa"
        ></div>
      </div>

      {/* Corner accents */}
      <div
        className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-green-400/30"
        data-oid="rsp-wgu"
      ></div>
      <div
        className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-green-400/30"
        data-oid="1y:35z0"
      ></div>
      <div
        className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-green-400/30"
        data-oid="rmxezqn"
      ></div>
      <div
        className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-green-400/30"
        data-oid="korbgif"
      ></div>
    </div>
  );
}
