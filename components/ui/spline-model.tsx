// components/ui/spline-model.tsx
"use client";

import React from "react";

interface SplineModelProps {
  scene: string;
  className?: string;
}

export default function SplineModel({ scene, className }: SplineModelProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    let mounted = true;
    let appInstance: any = null;

    async function init() {
      if (!canvasRef.current) return;

      try {
        // dynamic import to avoid server-side resolution and allow graceful failure
        const runtime = await import("@splinetool/runtime");
        const { Application } = runtime;
        appInstance = new Application(canvasRef.current);

        try {
          // try loading the scene; catch parse errors
          await appInstance.load(scene);
        } catch (loadErr) {
          // Log and swallow load errors to avoid crashing the entire React tree
          // Common errors here include parsing issues for invalid/corrupted .splinecode
          // or network issues when fetching the asset.
          // Provide helpful debug output.
          // eslint-disable-next-line no-console
          console.warn("[SplineModel] failed to load scene", scene, loadErr);
          // Optionally render nothing
          if (appInstance && typeof appInstance.dispose === "function") {
            try {
              appInstance.dispose();
            } catch {}
          }
          appInstance = null;
        }
      } catch (err) {
        // Dynamic import failed - runtime not available or bundler issue
        // eslint-disable-next-line no-console
        console.warn("[SplineModel] @splinetool/runtime not available", err);
      }
    }

    init();

    return () => {
      mounted = false;
      if (appInstance && typeof appInstance.dispose === "function") {
        try {
          appInstance.dispose();
        } catch {}
      }
    };
  }, [scene]);

  return <canvas ref={canvasRef} className={className} data-oid="ryfw-wb" />;
}
