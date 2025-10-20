"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

interface HackerAnimationProps {
  className?: string;
}

export default function HackerAnimation({
  className = "",
}: HackerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 320, height: 320 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = "";

    // Create SVG with performance optimizations
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", dimensions.width.toString());
    svg.setAttribute("height", dimensions.height.toString());
    svg.setAttribute("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);
    svg.setAttribute("class", "overflow-visible");
    svg.style.willChange = "transform"; // Optimize for animations

    // Create matrix/code rain effect
    const columns = Math.floor(dimensions.width / 20);
    const characters =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    // Create falling code columns
    for (let i = 0; i < columns; i++) {
      const column = Math.floor(Math.random() * 15) + 5; // 5-20 characters per column

      for (let j = 0; j < column; j++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );

        text.textContent = char;
        text.setAttribute("x", (i * 20 + 10).toString());
        text.setAttribute("y", (-j * 25 - Math.random() * 100).toString());
        text.setAttribute(
          "fill",
          `rgba(34, 197, 94, ${0.3 + Math.random() * 0.7})`,
        );
        text.setAttribute("font-family", "monospace");
        text.setAttribute("font-size", "14");
        text.setAttribute("font-weight", "bold");
        text.setAttribute("text-anchor", "middle");
        text.style.filter = "drop-shadow(0 0 3px rgba(34, 197, 94, 0.8))";

        svg.appendChild(text);
      }
    }

    // Create central grid/circuit pattern
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const gridSize = Math.min(dimensions.width, dimensions.height) * 0.6;

    // Create grid lines
    const gridSpacing = 30;
    const gridLines = Math.floor(gridSize / gridSpacing);

    for (let i = -gridLines / 2; i <= gridLines / 2; i++) {
      // Vertical lines
      const vLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      vLine.setAttribute("x1", (centerX + i * gridSpacing).toString());
      vLine.setAttribute("y1", (centerY - gridSize / 2).toString());
      vLine.setAttribute("x2", (centerX + i * gridSpacing).toString());
      vLine.setAttribute("y2", (centerY + gridSize / 2).toString());
      vLine.setAttribute("stroke", "rgba(34, 197, 94, 0.2)");
      vLine.setAttribute("stroke-width", "1");
      vLine.style.filter = "drop-shadow(0 0 2px rgba(34, 197, 94, 0.5))";
      svg.appendChild(vLine);

      // Horizontal lines
      const hLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      hLine.setAttribute("x1", (centerX - gridSize / 2).toString());
      hLine.setAttribute("y1", (centerY + i * gridSpacing).toString());
      hLine.setAttribute("x2", (centerX + gridSize / 2).toString());
      hLine.setAttribute("y2", (centerY + i * gridSpacing).toString());
      hLine.setAttribute("stroke", "rgba(34, 197, 94, 0.2)");
      hLine.setAttribute("stroke-width", "1");
      hLine.style.filter = "drop-shadow(0 0 2px rgba(34, 197, 94, 0.5))";
      svg.appendChild(hLine);
    }

    // Create central nodes/connection points
    const nodeCount = 8;
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = gridSize * 0.15;
      const nodeX = centerX + Math.cos(angle) * radius;
      const nodeY = centerY + Math.sin(angle) * radius;

      const node = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
      );
      node.setAttribute("cx", nodeX.toString());
      node.setAttribute("cy", nodeY.toString());
      node.setAttribute("r", "4");
      node.setAttribute("fill", "rgba(34, 197, 94, 0.8)");
      node.setAttribute("stroke", "rgba(34, 197, 94, 1)");
      node.setAttribute("stroke-width", "2");
      node.style.filter = "drop-shadow(0 0 6px rgba(34, 197, 94, 0.8))";
      svg.appendChild(node);

      // Create connecting lines to center
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", centerX.toString());
      line.setAttribute("y1", centerY.toString());
      line.setAttribute("x2", nodeX.toString());
      line.setAttribute("y2", nodeY.toString());
      line.setAttribute("stroke", "rgba(34, 197, 94, 0.6)");
      line.setAttribute("stroke-width", "2");
      line.style.filter = "drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))";
      svg.appendChild(line);
    }

    // Create central hub
    const centralHub = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    centralHub.setAttribute("cx", centerX.toString());
    centralHub.setAttribute("cy", centerY.toString());
    centralHub.setAttribute("r", "8");
    centralHub.setAttribute("fill", "rgba(34, 197, 94, 0.9)");
    centralHub.setAttribute("stroke", "rgba(34, 197, 94, 1)");
    centralHub.setAttribute("stroke-width", "3");
    centralHub.style.filter = "drop-shadow(0 0 10px rgba(34, 197, 94, 1))";
    svg.appendChild(centralHub);

    containerRef.current.appendChild(svg);

    // Animate falling text
    const texts = svg.querySelectorAll("text");
    texts.forEach((text, index) => {
      animate(text, {
        translateY: dimensions.height + 100,
        duration: 3000 + Math.random() * 2000,
        delay: Math.random() * 2000,
        loop: true,
        ease: "linear",
      });
    });

    // Animate grid lines opacity
    const gridLineElements = svg.querySelectorAll("line");
    animate(gridLineElements, {
      opacity: [0.2, 0.6, 0.2],
      duration: 2000,
      loop: true,
      ease: "inOut(sine)",
      delay: stagger(100),
    });

    // Animate nodes
    const nodes = svg.querySelectorAll("circle:not(:last-child)");
    animate(nodes, {
      scale: [1, 1.3, 1],
      opacity: [0.8, 1, 0.8],
      duration: 1500,
      loop: true,
      ease: "inOut(sine)",
      delay: stagger(200),
    });

    // Animate central hub
    animate(centralHub, {
      scale: [1, 1.2, 1],
      opacity: [0.9, 1, 0.9],
      duration: 2000,
      loop: true,
      ease: "inOut(sine)",
    });

    // Scanline effect
    const scanline = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect",
    );
    scanline.setAttribute("x", "0");
    scanline.setAttribute("y", "0");
    scanline.setAttribute("width", dimensions.width.toString());
    scanline.setAttribute("height", "2");
    scanline.setAttribute("fill", "rgba(34, 197, 94, 0.8)");
    scanline.style.filter =
      "blur(1px) drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))";
    svg.appendChild(scanline);

    animate(scanline, {
      translateY: [0, dimensions.height],
      duration: 4000,
      loop: true,
      ease: "linear",
      opacity: [0, 0.8, 0],
    });
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      style={{ minHeight: "320px", minWidth: "320px" }}
      data-oid="exzo7it"
    />
  );
}
