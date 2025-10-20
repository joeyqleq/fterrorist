"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface OfferLogo3DProps {
  provider: string;
  imageUrl: string | null;
  size?: "sm" | "md" | "lg";
}

export default function OfferLogo3D({
  provider,
  imageUrl,
  size = "lg",
}: OfferLogo3DProps) {
  const [imageError, setImageError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const sizes = {
    sm: { container: "w-12 h-12", text: "text-sm", image: 48 },
    md: { container: "w-16 h-16", text: "text-lg", image: 64 },
    lg: { container: "w-24 h-24", text: "text-2xl", image: 96 },
  };

  const currentSize = sizes[size];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fallbackInitials = provider
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const fallbackColor = "from-gray-500 via-gray-400 to-gray-600";

  // Determine if we should show the logo or the fallback
  const isPlaceholder = !imageUrl || imageUrl.includes("placeholder");
  const shouldShowLogo = isClient && !isPlaceholder && !imageError;

  if (!isClient) {
    // SSR Fallback
    return (
      <div
        className={`${currentSize.container} bg-gradient-to-br ${fallbackColor} rounded-3xl flex items-center justify-center text-black font-black ${currentSize.text} shadow-2xl transform-gpu border-4 border-black/20`}
        data-oid="yr08mb9"
      >
        {fallbackInitials}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotateY: 20,
        rotateX: 10,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="relative"
      style={{ perspective: "1000px" }}
      data-oid="wzl4uf8"
    >
      <div
        className={`${currentSize.container} ${shouldShowLogo ? "bg-white/10" : `bg-gradient-to-br ${fallbackColor}`} rounded-3xl flex items-center justify-center ${shouldShowLogo ? "text-white" : "text-black"} font-black ${currentSize.text} shadow-2xl transform-gpu border-4 border-black/20 overflow-hidden`}
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
        data-oid="pf_xxjr"
      >
        {shouldShowLogo ? (
          <Image
            src={imageUrl!}
            alt={`${provider} logo`}
            width={currentSize.image}
            height={currentSize.image}
            className="w-full h-full object-contain p-2"
            onError={() => setImageError(true)}
            data-oid="_oqa7_n"
          />
        ) : (
          fallbackInitials
        )}

        {/* Shine effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          data-oid="cur:3mx"
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          data-oid="xj0jla1"
        />
      </div>

      {/* Shadow and glow */}
      <div
        className={`absolute top-4 left-4 ${currentSize.container} bg-gradient-to-br ${fallbackColor} rounded-3xl opacity-30 -z-10 blur-xl`}
        data-oid="i4wut.4"
      />
      <div
        className={`absolute top-2 left-2 ${currentSize.container} bg-gradient-to-br ${fallbackColor} rounded-3xl opacity-20 -z-20 blur-2xl scale-110`}
        data-oid="2if:e.k"
      />
    </motion.div>
  );
}
