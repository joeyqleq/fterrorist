"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CyberButton } from "@/components/ui/cyber-button";
import Image from "next/image";
import Link from "next/link";

interface FloatingNavProps {
  onContactClick: () => void;
}

export default function FloatingNav({ onContactClick }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Always show the navbar immediately
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence data-oid="67_4fd7">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center w-full max-w-screen-xl px-4"
          data-oid="g5f48g5"
        >
          <div className="relative" data-oid="7kcsde8">
            {/* Glow effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 via-green-500/20 to-yellow-600/20 rounded-full blur-xl"
              data-oid="bh6ubc5"
            ></div>

            {/* Main nav container */}
            <div
              className="relative bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-full px-8 py-4 shadow-2xl"
              data-oid="9sfbf3w"
            >
              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 via-green-500/20 to-yellow-400/20 animate-border-glow"
                data-oid="7:.81_n"
              ></div>

              {/* Grid overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-10 overflow-hidden"
                data-oid="tqzp.8u"
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(234, 179, 8, 0.2) 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                  data-oid="xot.9im"
                ></div>
              </div>

              <div
                className="relative z-10 flex items-center gap-6"
                data-oid=":iafops"
              >
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2 group"
                  data-oid="0tq6pbk"
                >
                  <div className="relative" data-oid=":wrsj:c">
                    <Image
                      src="/terrorist_logo.png"
                      alt="Freebie Terrorist Logo"
                      width={28}
                      height={28}
                      className="rounded-full transition-transform duration-300 group-hover:scale-110"
                      data-oid="ceaoc0t"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-pink-500/20 to-purple-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="_laky6n"
                    ></div>
                  </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8" data-oid="k3.jicf">
                  <Link
                    href="#offers"
                    className="relative group text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    data-oid=":vo9:sc"
                  >
                    <span
                      className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="xtd0zmn"
                    >
                      OFFERS
                    </span>
                    <span
                      className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                      data-oid="82b05.i"
                    >
                      OFFERS
                    </span>
                    <div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-500 group-hover:w-full transition-all duration-500 ease-out"
                      data-oid="4daybax"
                    ></div>
                  </Link>

                  <button
                    onClick={onContactClick}
                    className="relative group text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    data-oid="17fmo5_"
                  >
                    <span
                      className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="ehmdumr"
                    >
                      CONTACT
                    </span>
                    <span
                      className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                      data-oid="dhqgt58"
                    >
                      CONTACT
                    </span>
                    <div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-500 group-hover:w-full transition-all duration-500 ease-out"
                      data-oid="i.p3pf8"
                    ></div>
                  </button>

                  <Link
                    href="/donate"
                    className="relative group text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    data-oid="v22u70w"
                  >
                    <span
                      className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="kh03wq4"
                    >
                      DONATE
                    </span>
                    <span
                      className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                      data-oid="-.34s4l"
                    >
                      DONATE
                    </span>
                    <div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-500 group-hover:w-full transition-all duration-500 ease-out"
                      data-oid="z5te965"
                    ></div>
                  </Link>
                </div>
              </div>

              {/* Scan line animation */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden"
                data-oid="j_j:kgs"
              >
                <div
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan opacity-30"
                  data-oid="90a7gqj"
                ></div>
              </div>

              {/* Corner indicators */}
              <div
                className="absolute top-2 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                data-oid="rpyh1q5"
              ></div>
              <div
                className="absolute top-2 right-4 w-1 h-1 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
                data-oid="goyneje"
              ></div>
              <div
                className="absolute bottom-2 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
                data-oid="2j2hde4"
              ></div>
              <div
                className="absolute bottom-2 right-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
                data-oid="1.jyg8."
              ></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
