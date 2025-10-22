"use client";

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface HackerShimmerButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HackerShimmerButton = React.forwardRef<
  HTMLButtonElement,
  HackerShimmerButtonProps
>(
  (
    {
      shimmerColor = "#22c55e",
      shimmerDuration = "2s",
      borderRadius = "1rem",
      background = "rgba(0, 0, 0, 0.8)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          "[border-radius:var(--radius)] border-2 border-green-400/30 px-6 py-3 text-white [background:var(--bg)]",
          "transform-gpu transition-all duration-300 ease-out",
          "hover:border-green-400/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
          "active:translate-y-px active:scale-[0.98]",
          className,
        )}
        ref={ref}
        {...props}
        data-oid="peo3hhr"
      >
        {/* Removed shimmer effect */}

        {/* Scanline effect */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden opacity-30"
          data-oid="oaw9jsu"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,197,94,0.05)_50%)] bg-[length:100%_4px]"
            data-oid="dei1jl:"
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center gap-2"
          data-oid="wyq-xk:"
        >
          {children}
        </div>

        {/* Glow effect on hover */}
        <div
          className={cn(
            "absolute inset-[2px] size-full [border-radius:calc(var(--radius)-2px)]",
            "bg-gradient-to-b from-white/5 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          )}
          data-oid="uy1zs8r"
        />

        {/* Border glow animation */}
        <div
          className="absolute -inset-[2px] -z-20 rounded-[var(--radius)] bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 blur-sm group-hover:opacity-100 transition-opacity duration-500"
          data-oid="k06xtfl"
        />
      </button>
    );
  },
);

HackerShimmerButton.displayName = "HackerShimmerButton";
