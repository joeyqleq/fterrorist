"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CircuitBoardBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden opacity-25"
      data-oid="elcj0cu"
    >
      {/* Premium Terminal Grid Base */}
      <div className="absolute inset-0" data-oid="3dvfhs3">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          data-oid="txji81y"
        >
          <defs data-oid="v1ban3r">
            {/* High-res grid pattern */}
            <pattern
              id="terminal-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              data-oid="ysl-rkc"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(34, 197, 94, 0.08)"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                data-oid="axsw4u-"
              />
            </pattern>

            {/* Terminal scan lines */}
            <pattern
              id="scan-lines"
              width="100%"
              height="4"
              patternUnits="userSpaceOnUse"
              data-oid="d7dmbcx"
            >
              <rect
                width="100%"
                height="2"
                fill="rgba(34, 197, 94, 0.02)"
                data-oid="k:1d0ei"
              />
              <rect
                y="2"
                width="100%"
                height="2"
                fill="transparent"
                data-oid="vz9qndx"
              />
            </pattern>

            {/* Premium glow filter */}
            <filter id="glow" data-oid="gvbzpok">
              <feGaussianBlur
                stdDeviation="2"
                result="coloredBlur"
                data-oid="dz4nna3"
              />
              <feMerge data-oid="vgcgjln">
                <feMergeNode in="coloredBlur" data-oid=".10kxk:" />
                <feMergeNode in="SourceGraphic" data-oid="efx8uft" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid background */}
          <rect
            width="100%"
            height="100%"
            fill="url(#terminal-grid)"
            data-oid="o4.270."
          />

          {/* Scan lines overlay */}
          <rect
            width="100%"
            height="100%"
            fill="url(#scan-lines)"
            data-oid="8ta:bnr"
          />

          {/* Premium circuit paths */}
          {/* Main data highways */}
          <motion.path
            d="M0,200 Q300,180 600,200 T1200,200"
            fill="none"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            data-oid="roz6vc-"
          />

          <motion.path
            d="M0,400 Q400,380 800,400 T1200,400"
            fill="none"
            stroke="rgba(34, 197, 94, 0.25)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            data-oid="3rzvpxt"
          />

          <motion.path
            d="M0,600 Q200,580 400,600 T800,600 Q1000,580 1200,600"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            data-oid="f.k6mm."
          />

          {/* Vertical data streams */}
          <motion.path
            d="M200,0 Q180,200 200,400 T200,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            data-oid="_4qe03x"
          />

          <motion.path
            d="M600,0 Q580,150 600,300 T600,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.25)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            data-oid="_10pn6f"
          />

          <motion.path
            d="M1000,0 Q980,250 1000,500 T1000,800"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            data-oid="n:g6ybf"
          />

          {/* Terminal connection nodes */}
          <motion.circle
            cx="200"
            cy="200"
            r="3"
            fill="rgba(34, 197, 94, 0.6)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            data-oid="6x.7c4l"
          />

          <motion.circle
            cx="600"
            cy="400"
            r="2"
            fill="rgba(34, 197, 94, 0.7)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            data-oid="4rvm371"
          />

          <motion.circle
            cx="1000"
            cy="600"
            r="3"
            fill="rgba(34, 197, 94, 0.5)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            data-oid=".8qv005"
          />

          {/* Data packet animations */}
          <motion.circle
            r="2"
            fill="rgba(34, 197, 94, 0.8)"
            filter="url(#glow)"
            animate={{
              cx: [0, 1200],
              cy: [200, 200],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            data-oid="v41riq9"
          />

          <motion.circle
            r="1.5"
            fill="rgba(34, 197, 94, 0.6)"
            filter="url(#glow)"
            animate={{
              cx: [1200, 0],
              cy: [400, 400],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            data-oid="5rgwmhn"
          />
        </svg>
      </div>

      {/* Terminal flicker effect */}
      <motion.div
        className="absolute inset-0 bg-green-400/5"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 5,
        }}
        data-oid="aby_rd2"
      />
    </div>
  );
}
