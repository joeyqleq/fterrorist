"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 150"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
      data-oid="ke0w8v8"
    >
      <defs data-oid="a_rpf9b">
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
          data-oid="ldrf2lb"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#22c55e" data-oid=":oaof-u" />
              <stop offset="25%" stopColor="#ef4444" data-oid="wvhb6dj" />
              <stop offset="50%" stopColor="#3b82f6" data-oid="fw4m9kv" />
              <stop offset="75%" stopColor="#06b6d4" data-oid="gsbq77d" />
              <stop offset="100%" stopColor="#8b5cf6" data-oid="90ctcyq" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
          data-oid="zwtgmqy"
        >
          <stop offset="0%" stopColor="white" data-oid=":jxolc-" />
          <stop offset="100%" stopColor="black" data-oid="0e5_lc3" />
        </motion.radialGradient>
        <mask id="textMask" data-oid="5qb3d4w">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
            data-oid="kiwx88z"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-green-400 font-mono text-6xl font-bold dark:stroke-green-500"
        style={{ opacity: hovered ? 0.7 : 0 }}
        data-oid="utka9nm"
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-green-400 font-mono text-6xl font-bold dark:stroke-green-500"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
        data-oid="3g:at22"
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-mono text-6xl font-bold"
        data-oid="vr1zaj:"
      >
        {text}
      </text>
    </svg>
  );
};
