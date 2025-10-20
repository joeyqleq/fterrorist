"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, DollarSign, Zap, Star } from "lucide-react";
import type { StudentOffer } from "@/lib/studentOffers";

interface OfferCardProps {
  offer: StudentOffer;
  index: number;
}

const categoryColors = {
  "Web Design": "from-yellow-400 via-green-500 to-yellow-600",
  Cloud: "from-green-400 via-yellow-500 to-green-600",
  Domains: "from-yellow-300 via-green-400 to-yellow-500",
  Design: "from-green-300 via-yellow-400 to-green-500",
  "AI/Cloud": "from-yellow-500 via-green-600 to-yellow-700",
  "AI Tools": "from-green-500 via-yellow-600 to-green-700",
  "AI Coding": "from-yellow-600 via-green-700 to-yellow-800",
  Productivity: "from-green-600 via-yellow-700 to-green-800",
};

export default function OfferCard({ offer, index }: OfferCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categoryGradient =
    categoryColors[offer.category as keyof typeof categoryColors] ||
    "from-gray-500 to-gray-400";

  return (
    <motion.div
      className="relative w-full aspect-square cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -10 }}
      layout
      data-oid="2.m7pab"
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        data-oid="4oj598v"
      >
        {/* Front of card - Show offer info */}
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          data-oid="a6d63xm"
        >
          <div
            className={`
            w-full h-full flex flex-col rounded-lg border bg-gray-900/80 backdrop-blur-sm p-5 
            shadow-xl transition-all duration-300 group overflow-hidden
            ${isHovered ? "shadow-2xl border-yellow-400/50 bg-gray-800/90" : "border-gray-700/50 hover:border-yellow-400/30"}
          `}
            data-oid="otudfxp"
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300`}
              data-oid="qetj9pa"
            ></div>

            <div
              className="relative z-10 flex flex-col h-full"
              data-oid="v1uwio1"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between mb-4"
                data-oid="kon0ukd"
              >
                <div className="flex items-center gap-2" data-oid="1:cnpdb">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryGradient}`}
                    data-oid="lc:itu4"
                  ></div>
                  <span
                    className="text-xs text-gray-400 font-mono uppercase tracking-wider"
                    data-oid="yz9yw-v"
                  >
                    {offer.category}
                  </span>
                </div>
                <DollarSign
                  className="w-4 h-4 text-yellow-400"
                  data-oid="bkciis9"
                />
              </div>

              {/* Provider */}
              <div className="flex items-center gap-3 mb-3" data-oid="wpv9wvu">
                <Image
                  src={offer.image}
                  alt={`${offer.provider} logo`}
                  width={40}
                  height={40}
                  className="rounded-md bg-white p-1 object-contain"
                  data-oid="_bbjjih"
                />

                <h3
                  className="text-lg font-black text-white leading-tight"
                  data-oid="prp642m"
                >
                  {offer.provider}
                </h3>
              </div>

              {/* Offer description */}
              <p
                className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-4 flex-1"
                data-oid="-9dvsou"
              >
                {offer.offer}
              </p>

              {/* Savings */}
              <div className="mb-4" data-oid=".k5ee0:">
                <div
                  className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded text-yellow-400 text-xs font-mono"
                  data-oid="d6gz21p"
                >
                  <Star className="w-3 h-3" data-oid="5e_:sgg" />
                  {offer.savings}
                </div>
              </div>

              {/* Click hint */}
              <div className="text-center" data-oid="gelsz2u">
                <span
                  className="text-xs text-gray-500 font-mono"
                  data-oid="8hkpyrp"
                >
                  CLICK FOR DETAILS
                </span>
              </div>
            </div>

            {/* Hover scan line */}
            <div
              className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              data-oid="ii6este"
            ></div>
          </div>
        </div>

        {/* Back of card - More details and action */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-lg border border-yellow-400/50 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          data-oid="owq30nz"
        >
          <div className="h-full flex flex-col" data-oid="kcaqyld">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4" data-oid="jtpeqfe">
              <div
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                data-oid="k3kajd1"
              ></div>
              <h4
                className="text-sm font-black text-white uppercase tracking-wider"
                data-oid="nesn0.h"
              >
                DETAILED INTEL
              </h4>
            </div>

            {/* Content */}
            <div className="space-y-3 mb-4 flex-1" data-oid="3vslp6e">
              <div data-oid="1:_gr7v">
                <span
                  className="text-xs text-gray-400 font-mono uppercase"
                  data-oid="yjgejdf"
                >
                  Provider:
                </span>
                <div
                  className="text-sm font-bold text-yellow-400"
                  data-oid="ki0yt3s"
                >
                  {offer.provider}
                </div>
              </div>

              <div data-oid="pfk10pu">
                <span
                  className="text-xs text-gray-400 font-mono uppercase"
                  data-oid="js1r535"
                >
                  Offer:
                </span>
                <div
                  className="text-sm text-gray-300 leading-relaxed"
                  data-oid="vz_oj-n"
                >
                  {offer.offer}
                </div>
              </div>

              <div data-oid="ry2m464">
                <span
                  className="text-xs text-gray-400 font-mono uppercase"
                  data-oid="wokebj_"
                >
                  Value:
                </span>
                <div
                  className="text-sm text-green-400 font-mono"
                  data-oid="7mk3jqy"
                >
                  {offer.savings}
                </div>
              </div>

              <div data-oid="mgv.-ka">
                <span
                  className="text-xs text-gray-400 font-mono uppercase"
                  data-oid="ab9saz:"
                >
                  Category:
                </span>
                <div
                  className={`inline-block text-xs px-2 py-1 rounded bg-gradient-to-r ${categoryGradient} text-black font-bold`}
                  data-oid="qpda50o"
                >
                  {offer.category}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3" data-oid="w1yeq9d">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(offer.link, "_blank");
                }}
                className="w-full h-10 bg-gradient-to-r from-yellow-500 to-green-600 text-black font-bold rounded text-sm flex items-center justify-center gap-2 hover:from-yellow-400 hover:to-green-500 transition-all duration-300"
                data-oid="m2vh.b_"
              >
                <ExternalLink className="w-4 h-4" data-oid="az_.qlg" />
                EXECUTE MISSION
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-full h-8 border border-gray-600 text-gray-300 hover:bg-gray-800/50 rounded text-sm font-bold transition-all duration-300"
                data-oid="eee6ilq"
              >
                RETURN
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
