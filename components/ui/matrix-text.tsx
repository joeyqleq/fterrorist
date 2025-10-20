"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MatrixTextProps {
  text: string;
  className?: string;
}

export function MatrixText({ text, className = "" }: MatrixTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const matrixChars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let currentIndex = 0;
    let cycles = 0;
    const maxCycles = 3; // Number of scramble cycles before revealing each letter

    const revealText = () => {
      const interval = setInterval(() => {
        if (currentIndex >= text.length) {
          setIsComplete(true);
          clearInterval(interval);
          setDisplayText(text);
          return;
        }

        if (cycles < maxCycles) {
          // Scramble phase - show random characters
          const scrambledPart = text
            .slice(currentIndex)
            .split("")
            .map(
              () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
            )
            .join("");

          const revealedPart = text.slice(0, currentIndex);
          setDisplayText(revealedPart + scrambledPart);
          cycles++;
        } else {
          // Reveal next character
          currentIndex++;
          cycles = 0;
        }
      }, 80);

      return interval;
    };

    const timeout = setTimeout(() => {
      const interval = revealText();
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <motion.span
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-oid="mb8-2rg"
    >
      {displayText}
      {!isComplete && (
        <motion.span
          className="animate-pulse text-green-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          data-oid="uznmo21"
        >
          █
        </motion.span>
      )}
    </motion.span>
  );
}
