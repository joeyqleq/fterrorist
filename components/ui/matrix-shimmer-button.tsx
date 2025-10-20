"use client";

import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { MatrixShader } from "@/components/ui/matrix-shader";

export interface MatrixShimmerButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const MatrixShimmerButton = React.forwardRef<
  HTMLButtonElement,
  MatrixShimmerButtonProps
>(
  (
    {
      shimmerColor = "#22c55e",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "2rem",
      background = "rgba(0, 0, 0, 0.3)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className="relative overflow-hidden"
        style={{ borderRadius }}
        data-oid="gig3yq_"
      >
        {/* Matrix Shader Background */}
        <MatrixShader
          className="absolute inset-0 opacity-30"
          style={{ borderRadius }}
          data-oid="xw_g.wt"
        />

        {/* Shimmer Button */}
        <button
          style={
            {
              "--spread": "90deg",
              "--shimmer-color": shimmerColor,
              "--radius": borderRadius,
              "--speed": shimmerDuration,
              "--cut": shimmerSize,
              "--bg": background,
            } as CSSProperties
          }
          className={cn(
            "group relative z-10 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
            "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
            className,
          )}
          ref={ref}
          {...props}
          data-oid="t7i-jru"
        >
          {/* spark container */}
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]",
            )}
            data-oid="s5oez7n"
          >
            {/* spark */}
            <div
              className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]"
              data-oid="h_sbbdj"
            >
              {/* spark before */}
              <div
                className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
                data-oid="btu19lx"
              />
            </div>
          </div>
          {children}

          {/* Highlight */}
          <div
            className={cn(
              "insert-0 absolute size-full",
              "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
            )}
            data-oid="ms46a1d"
          />

          {/* backdrop */}
          <div
            className={cn(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
            )}
            data-oid="62s8pgd"
          />
        </button>
      </div>
    );
  },
);

MatrixShimmerButton.displayName = "MatrixShimmerButton";
