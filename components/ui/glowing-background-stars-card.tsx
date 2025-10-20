"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={cn(
        "bg-[linear-gradient(110deg,#333_0.6%,#222)] p-6 h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 flex flex-col relative overflow-hidden",
        className,
      )}
      data-oid="k2epcgl"
    >
      <Illustration
        mouseEnter={mouseEnter}
        glowIntensity={mouseEnter ? 1.2 : 0.7} // More intense glow when hovered and slightly brighter when idle
        glowDuration={mouseEnter ? 1 : 2} // Faster glow animation when hovered
        data-oid="o04qtyj"
      />
      <div className="relative z-10 flex-1 flex flex-col" data-oid="j0uh:yg">
        {children}
      </div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn("text-base text-white max-w-[16rem]", className)}
      data-oid="j5heod3"
    >
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2
      className={cn("font-bold text-2xl text-[#eaeaea]", className)}
      data-oid="lm.3ytv"
    >
      {children}
    </h2>
  );
};

export const Illustration = ({
  mouseEnter,
  glowIntensity,
  glowDuration,
}: {
  mouseEnter: boolean;
  glowIntensity: number;
  glowDuration: number;
}) => {
  const stars = 300;
  const columns = 25;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * stars),
      );
      setGlowingStars([...highlightedStars.current]);
    }, 2000); // More frequent random glow for more active idle state

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-full p-1 w-full absolute inset-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
      data-oid="i4zx7xi"
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
            data-oid="4iam.ij"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
              data-oid="i_4jbo4"
            />

            {mouseEnter && <Glow delay={staticDelay} data-oid="xqxah43" />}
            <AnimatePresence mode="wait" data-oid="amk4ytj">
              {isGlowing && <Glow delay={delay} data-oid="iq3a6oe" />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.3, 3, 2.5, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
        opacity: isGlowing ? [0.8, 1, 0] : 1,
      }}
      transition={{
        duration: isGlowing ? 1.5 : 2.5, // Faster animation when glowing
        ease: "easeOut",
        delay: delay,
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
      data-oid="7-c:_wh"
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
      data-oid="zwwp8jc"
    />
  );
};
