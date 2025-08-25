"use client";

import { useState, useEffect } from "react";

const spinnerFrames = ["/", "-", "\\", "|"];

export function InitSpinner() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-green-400 text-lg font-bold animate-pulse">
      {spinnerFrames[frameIndex]}
    </span>
  );
}

export function InitButton({ visible }: { visible: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="font-mono text-amber-100 text-sm font-bold tracking-widest">
        INIT
      </span>
      {!visible && <InitSpinner />}
    </div>
  );
}