"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

interface HackerTitleProps {
  text: string[];
  className?: string;
}

export default function HackerTitle({
  text,
  className = "",
}: HackerTitleProps) {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Glitch effect on text
    const glitchAnimation = () => {
      textRefs.current.forEach((ref, index) => {
        if (!ref) return;

        animate(ref, {
          opacity: [
            { value: [0.7, 1], duration: 50 },
            { value: [1, 0.8], duration: 50 },
            { value: [0.8, 1], duration: 50 },
          ],

          translateX: [
            { value: [-2, 0], duration: 50 },
            { value: [0, 2], duration: 50 },
            { value: [2, 0], duration: 50 },
          ],

          delay: index * 100 + Math.random() * 3000,
          loop: true,
          easing: "easeInOutQuad",
        });
      });
    };

    // SVG stroke animation
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("text");

      animate(paths, {
        strokeDashoffset: 0,
        easing: "easeInOutCubic",
        duration: 2000,
        delay: stagger(200),
        loop: false,
      });

      // Subtle pulse on SVG paths
      animate(paths, {
        opacity: [0.3, 0.6, 0.3],
        duration: 3000,
        loop: true,
        easing: "easeInOutSine",
        delay: stagger(100),
      });
    }

    glitchAnimation();
  }, [isClient, text]);

  if (!isClient) {
    return (
      <h1
        className={`${className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-mono leading-none text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-green-500 to-green-600`}
        data-oid="roe5r:d"
      >
        {text.map((line, i) => (
          <span key={i} className="block" data-oid="25ms287">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <div className={`relative w-full ${className}`} data-oid="stz6my7">
      <div
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-mono leading-tight w-full"
        data-oid="bvzeghc"
      >
        <div className="relative w-full" data-oid="qu125:-">
          <h1
            className="relative z-10 w-full text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-green-500 to-green-600"
            style={{ filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))" }}
            data-oid="q92pqj."
          >
            {text.map((line, i) => (
              <span
                key={i}
                ref={(el) => (textRefs.current[i] = el)}
                className="block whitespace-nowrap"
              >
                {line}
              </span>
            ))}
          </h1>

          {/* SVG Outline Tracing - Much more subtle */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1400 300"
            preserveAspectRatio="xMinYMin meet"
            data-oid="plg4tev"
          >
            {text.map((line, i) => (
              <text
                key={i}
                x="10"
                y={100 + i * 100}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono fill-none stroke-green-400/40"
                strokeWidth="1"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(34, 197, 94, 0.3))",
                  animationDelay: `${i * 0.3}s`,
                  fontSize: 'clamp(3rem, 12vw, 8rem)'
                }}
                data-oid="tn68_t."
              >
                {line}
              </text>
            ))}
          </svg>

          {/* Matrix-style digital rain effect overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-10"
            data-oid="vbe1-lv"
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-[2px] bg-gradient-to-b from-green-400 to-transparent animate-fall"
                style={{
                  left: `${i * 5}%`,
                  height: "20px",
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "7s",
                }}
                data-oid="kle.h41"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
