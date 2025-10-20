"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cyberButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white border border-cyan-500/50 shadow-lg hover:shadow-cyan-500/25 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500",
        secondary:
          "bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-400 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-300",
        destructive:
          "bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white border border-red-500/50 shadow-lg hover:shadow-red-500/25",
        outline:
          "border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-sm",
        ghost: "text-cyan-400 hover:bg-cyan-400/10",
        hacker:
          "bg-black border border-green-400/50 text-green-400 font-mono hover:bg-green-400/10 hover:border-green-400 hover:text-green-300 shadow-lg hover:shadow-green-400/25",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-lg",
        sm: "h-10 px-4 py-2 rounded-md text-xs",
        lg: "h-14 px-8 py-4 rounded-xl text-base",
        icon: "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean;
  glowIntensity?: "low" | "medium" | "high";
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      glowIntensity = "medium",
      children,
      ...props
    },
    ref,
  ) => {
    const glowClasses = {
      low: "hover:shadow-lg",
      medium: "hover:shadow-xl hover:shadow-current/20",
      high: "hover:shadow-2xl hover:shadow-current/30 animate-glow",
    };

    if (asChild) {
      // For asChild, we need to clone the child and apply our styles to it
      const child = React.Children.only(children) as React.ReactElement;
      return React.cloneElement(child, {
        ...props,
        ref,
        className: cn(
          cyberButtonVariants({ variant, size }),
          glowClasses[glowIntensity],
          "relative group overflow-hidden",
          className,
          child.props.className,
        ),
        children: (
          <>
            {/* Background glow effect */}
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"
              data-oid="d77md.p"
            ></div>

            {/* Animated border effect */}
            <div
              className="absolute inset-0 rounded-inherit"
              data-oid="twxk0xb"
            >
              <div
                className="absolute inset-0 rounded-inherit border-2 border-transparent bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-glow"
                data-oid="a6j492_"
              ></div>
            </div>

            {/* Content */}
            <span
              className="relative z-10 flex items-center gap-2"
              data-oid="lk5bm4d"
            >
              {child.props.children}
            </span>

            {/* Scan line effect */}
            <div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-300"
              data-oid="ye0b73o"
            ></div>

            {/* Corner accents */}
            <div
              className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              data-oid="ai:pvm7"
            ></div>
            <div
              className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              data-oid="w:3nzyd"
            ></div>
            <div
              className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              data-oid="uabeio9"
            ></div>
            <div
              className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              data-oid="5fn88qo"
            ></div>
          </>
        ),
      });
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
        data-oid="-d3-eh4"
      >
        {/* Background glow effect */}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"
          data-oid="ru-zpx6"
        ></div>

        <button
          className={cn(
            cyberButtonVariants({ variant, size }),
            glowClasses[glowIntensity],
            className,
          )}
          ref={ref}
          {...props}
          data-oid="vmmlvvq"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-inherit" data-oid="q-47:np">
            <div
              className="absolute inset-0 rounded-inherit border-2 border-transparent bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-glow"
              data-oid="lkb6u-8"
            ></div>
          </div>

          {/* Content */}
          <span
            className="relative z-10 flex items-center gap-2"
            data-oid="v02vxqt"
          >
            {children}
          </span>

          {/* Scan line effect */}
          <div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-300"
            data-oid="f1ar7mp"
          ></div>

          {/* Corner accents */}
          <div
            className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="aaj9xjb"
          ></div>
          <div
            className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="wb_ed:4"
          ></div>
          <div
            className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="k.e_9im"
          ></div>
          <div
            className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="nh72qxf"
          ></div>
        </button>
      </motion.div>
    );
  },
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };
