// components/ui/tetris-loader.tsx
"use client"

import React from 'react'
import { motion } from 'framer-motion'

const tetrisBlocks = [
  { id: 1, color: "#EF4444", shape: [[1, 1], [1, 1]] }, // Square (O) - Red
  { id: 2, color: "#3B82F6", shape: [[0, 2, 0], [2, 2, 2]] }, // T-shape (T) - Blue
  { id: 3, color: "#10B981", shape: [[3, 3, 0], [0, 3, 3]] }, // Z-shape (Z) - Green
  { id: 4, color: "#F97316", shape: [[0, 4, 4], [4, 4, 0]] }, // S-shape (S) - Orange
  { id: 5, color: "#6366F1", shape: [[5, 5, 5, 5]] }, // Line (I) - Indigo
  { id: 6, color: "#EC4899", shape: [[6, 0, 0], [6, 6, 6]] }, // L-shape (L) - Pink
  { id: 7, color: "#8B5CF6", shape: [[0, 0, 7], [7, 7, 7]] }, // J-shape (J) - Purple
]

const containerVariants = {
  animate: {},
}

const blockVariants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0.5,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 50,
    scale: 0.5,
    transition: {
      delay: (tetrisBlocks.length - 1 - i) * 0.05,
      duration: 0.3,
      ease: "easeIn",
    },
  }),
}

const blockDropAndFade = {
  initial: { y: -20, opacity: 0 },
  animate: (i: number) => ({
    y: [0, 20, 0],
    opacity: [0, 1, 0],
    transition: {
      delay: i * 0.2,
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  }),
}

export function TetrisLoading() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 bg-black/70 rounded-xl shadow-lg border border-green-500/30"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tetrisBlocks.map((block, i) => (
          <motion.div
            key={block.id}
            className="flex flex-col gap-px"
            custom={i}
            variants={blockDropAndFade}
            initial="initial"
            animate="animate"
          >
            {block.shape.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-px">
                {row.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: cell !== 0 ? block.color : "transparent" }}
          />
        ))}
      </div>
            ))}
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-green-400 text-xl font-mono tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        LOADING_RESOURCES...
      </motion.p>
    </motion.div>
  )
}