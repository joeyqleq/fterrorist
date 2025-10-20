"use client";

import { useRef, useEffect, useState } from "react";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
  gradientColors?: string[];
  sensitivity?: number;
  animationSpeed?: number;
}

function MagnetLines({
  rows = 15,
  columns = 25,
  containerSize = "100vw",
  lineColor = "#22c55e", // Changed to green
  lineWidth = "4px",
  lineHeight = "20px",
  baseAngle = -10,
  className = "",
  style = {},
  gradientColors = ["#22c55e", "#16a34a", "#15803d", "#166534"], // Different shades of green
  sensitivity = 300, // Distance sensitivity
  animationSpeed = 0.06, // Animation transition speed
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [spanOpacities, setSpanOpacities] = useState<number[]>([]);

  // Ensure this only runs on client side and force re-render
  useEffect(() => {
    setIsClient(true);
    const total = rows * columns;
    const opacities = Array.from(
      { length: total },
      () => 0.6 + Math.random() * 0.4,
    );
    setSpanOpacities(opacities);

    // Force a re-render after state is set
    const timer = setTimeout(() => {
      setSpanOpacities((prev) => [...prev]); // Trigger re-render
    }, 50);

    return () => clearTimeout(timer);
  }, [rows, columns]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(
      "span",
    ) as NodeListOf<HTMLSpanElement>;
    let animationFrameId: number;

    const onPointerMove = (event: MouseEvent) => {
      // Cancel previous animation frame to prevent stacking
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const pointer = { x: event.clientX, y: event.clientY };

        items.forEach((item: HTMLSpanElement, index: number) => {
          const rect = item.getBoundingClientRect();
          const centerX = rect.x + rect.width / 2;
          const centerY = rect.y + rect.height / 2;

          const deltaX = pointer.x - centerX;
          const deltaY = pointer.y - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          // Calculate angle pointing toward the mouse
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          // Smooth rotation with enhanced sensitivity
          item.style.setProperty("--rotate", `${angle}deg`);

          // Enhanced distance-based effects
          const maxDistance = sensitivity; // Maximum effective distance
          const normalizedDistance = Math.min(distance / maxDistance, 1);
          const proximity = 1 - normalizedDistance; // Inverted for proximity

          // Dynamic opacity based on proximity
          const baseOpacity = 0.6;
          const maxOpacity = 1.0;
          const proximityOpacity =
            baseOpacity + proximity * (maxOpacity - baseOpacity);
          item.style.opacity = proximityOpacity.toString();

          // Dynamic color intensity based on proximity
          const colorIndex = Math.floor(
            normalizedDistance * (gradientColors.length - 1),
          );
          const color = gradientColors[colorIndex] || gradientColors[0];

          // Add scale effect for nearby elements
          const scale = 1 + proximity * 0.3; // Scale up to 130% when close

          // Add glow effect for very close elements
          if (proximity > 0.6) {
            const glowIntensity = (proximity - 0.6) / 0.4; // 0 to 1 for top 40% proximity
            item.style.boxShadow = `0 0 ${glowIntensity * 20}px ${color}, 0 0 ${glowIntensity * 40}px ${color}80`;
            item.style.filter = `brightness(${1 + glowIntensity * 0.5})`;
          } else {
            item.style.boxShadow = "none";
            item.style.filter = "brightness(1)";
          }

          // Apply all transforms together
          item.style.transform = `rotate(var(--rotate)) scale(${scale})`;
          item.style.backgroundColor = color;
        });
      });
    };

    // Add smooth mouse tracking
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // Initialize immediately and on window load
    const initializeLines = () => {
      if (items.length) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        onPointerMove({ clientX: centerX, clientY: centerY } as MouseEvent);
      }
    };

    // Initial positioning at center
    initializeLines();

    // Also try again after a short delay to ensure DOM is ready
    const initTimer = setTimeout(initializeLines, 100);
    window.addEventListener("load", initializeLines);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("load", initializeLines);
      clearTimeout(initTimer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [gradientColors, sensitivity, animationSpeed]);

  const total = rows * columns;

  // Don't render anything until client-side hydration is complete
  if (!isClient || spanOpacities.length === 0) {
    return (
      <div
        className={`grid place-items-center pointer-events-none ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: containerSize,
          height: containerSize,
          ...style,
        }}
        data-oid="8x5t0kw"
      />
    );
  }

  const spans = Array.from({ length: total }, (_, i) => {
    // Use different gradient colors for variation
    const colorIndex = i % gradientColors.length;
    const color = gradientColors[colorIndex];
    const opacity = spanOpacities[i] || 0.8; // Increased base opacity

    return (
      <span
        key={i}
        className="block origin-center transition-colors duration-300"
        style={{
          backgroundColor: color,
          width: lineWidth,
          height: lineHeight,
          ["--rotate" as any]: `${baseAngle}deg`,
          transform: "rotate(var(--rotate)) scale(1)",
          willChange: "transform, opacity, box-shadow",
          opacity: opacity,
          borderRadius: "1px",
          transition: `all ${animationSpeed}s ease-out`,
          transformOrigin: "center center",
        }}
        data-oid=":nuqabr"
      />
    );
  });

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
      data-oid="kx.4jlg"
    >
      {spans}
    </div>
  );
}

export { MagnetLines };
