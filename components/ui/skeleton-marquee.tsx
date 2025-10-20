"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  DollarSign,
  Code,
  FileText,
  Zap,
  Target,
  ExternalLink,
} from "lucide-react";
import type { StudentOffer } from "@/lib/studentOffers";

interface SkeletonMarqueeProps {
  offers: StudentOffer[];
}

const skeletonVariants = ["receipt", "list", "banner", "code", "report"];

const getSkeletonIcon = (category: string) => {
  switch (category) {
    case "Web Design":
      return Code;
    case "Cloud":
      return Building;
    case "AI/Cloud":
      return Zap;
    case "AI Tools":
      return Target;
    default:
      return FileText;
  }
};

const categoryColors = {
  "Web Design": "from-cyan-400 via-blue-500 to-purple-600",
  Cloud: "from-purple-500 via-pink-500 to-red-500",
  Domains: "from-green-400 via-emerald-500 to-teal-600",
  Design: "from-pink-500 via-rose-400 to-orange-500",
  "AI/Cloud": "from-orange-500 via-yellow-400 to-amber-500",
  "AI Tools": "from-red-500 via-pink-500 to-purple-600",
  "AI Coding": "from-indigo-500 via-purple-500 to-pink-600",
  Productivity: "from-yellow-400 via-orange-500 to-red-500",
};

export default function SkeletonMarquee({ offers }: SkeletonMarqueeProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const renderSkeletonContent = (
    offer: StudentOffer,
    index: number,
    variant: string,
  ) => {
    const Icon = getSkeletonIcon(offer.category);
    const isHovered = hoveredCard === index;
    const isFlipped = flippedCard === index;

    if (variant === "receipt") {
      return (
        <div
          className="flex justify-between border-b pb-3 border-cyan-400/30"
          data-oid="nddi-de"
        >
          <Icon className="w-6 text-muted-foreground" data-oid="h17exgr" />
          <DollarSign className="w-6 text-green-400" data-oid="xtm73p-" />
        </div>
      );
    }

    if (variant === "code") {
      return <Icon className="w-6 text-cyan-400" data-oid="0:px_0:" />;
    }

    if (variant === "banner") {
      return (
        <div
          className="flex items-center justify-between border-b pb-3 border-cyan-400/30"
          data-oid="mbq9s.v"
        >
          <span
            className="font-semibold text-foreground text-xs"
            data-oid="7ub9k6l"
          >
            OFFER
          </span>
          <span
            className="inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white"
            data-oid="kinzgtj"
          >
            FREE
          </span>
        </div>
      );
    }

    return (
      <div
        className="flex justify-between border-b pb-3 border-cyan-400/30"
        data-oid="2uoqenb"
      >
        <Icon className="w-6 text-cyan-400" data-oid="v9v7saj" />
        <span className="text-xs text-green-400 font-mono" data-oid="i:1z1e2">
          {offer.savings}
        </span>
      </div>
    );
  };

  const renderSkeletonBars = (variant: string, offer: StudentOffer) => {
    if (variant === "list") {
      return Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`item-${i}`}
          className="flex w-full items-center justify-between gap-2"
          data-oid="fn68l5m"
        >
          <div
            className="h-2 w-2 rounded-md bg-cyan-400/30"
            data-oid="sqiipd5"
          />
          <div
            className="h-3 w-3 rounded-sm bg-purple-400/30"
            data-oid="yy1a82o"
          />
          <div
            className="h-2 flex-1 rounded-md bg-muted/50"
            data-oid="u.bxmvw"
          />
        </div>
      ));
    }

    if (variant === "banner") {
      return (
        <div
          className="flex flex-1 flex-col justify-center gap-2"
          data-oid="rdnu8s0"
        >
          <div
            className="h-2 w-1/2 rounded-md bg-cyan-400/30"
            data-oid="b451:ic"
          />
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid="m:vilsi"
          />
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="j7k:a:0"
          />
        </div>
      );
    }

    if (variant === "code") {
      return (
        <div
          className="flex flex-1 flex-col justify-center gap-2"
          data-oid="j4pl7zo"
        >
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="18undx5"
          />
          <div
            className="h-2 w-3/4 rounded-md bg-cyan-400/30"
            data-oid="7z86427"
          />
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="g002dj_"
          />
        </div>
      );
    }

    if (variant === "report") {
      return Array.from({ length: 6 }).map((_, i) => (
        <div
          className="h-2 w-full rounded-md bg-muted/50"
          key={`item-${i}`}
          data-oid="ebh1b:6"
        />
      ));
    }

    return (
      <>
        <div className="flex w-full justify-between gap-2" data-oid="hg.u89y">
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="lz_kk90"
          />
          <div
            className="h-2 w-4 rounded-md bg-cyan-400/30"
            data-oid=".8wdzeg"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="ok5qzav">
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid=".2jghj5"
          />
          <div
            className="h-2 w-5 rounded-md bg-green-400/30"
            data-oid="kiutnwx"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="6bjcxe_">
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="juavoa9"
          />
          <div
            className="h-2 w-4 rounded-md bg-purple-400/30"
            data-oid="cm6_amo"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="-iphmd0">
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid="_gm:4_5"
          />
          <div
            className="h-2 w-5 rounded-md bg-blue-400/30"
            data-oid="lppslwc"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="gug14bg">
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="29g:7xr"
          />
          <div
            className="h-2 w-8 rounded-md bg-pink-400/30"
            data-oid="bz2izkq"
          />
        </div>
      </>
    );
  };

  const renderCardBack = (offer: StudentOffer, index: number) => {
    const categoryGradient =
      categoryColors[offer.category as keyof typeof categoryColors] ||
      "from-gray-500 to-gray-400";

    return (
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-md border border-cyan-400/50 p-3 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        data-oid="rlk1f6:"
      >
        <div className="h-full flex flex-col" data-oid="rbda8w6">
          <div className="flex items-center gap-2 mb-3" data-oid="ngt9x8j">
            <div
              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              data-oid="n7o:1ri"
            ></div>
            <h4
              className="text-xs font-black text-white uppercase tracking-wider"
              data-oid="8kv9v6e"
            >
              INTEL
            </h4>
          </div>

          <div className="space-y-2 mb-3 flex-1" data-oid="3qk_pei">
            <div className="text-xs font-bold text-cyan-400" data-oid="pp5wcte">
              {offer.provider}
            </div>
            <div
              className="text-xs text-gray-300 line-clamp-3"
              data-oid="4p4ff_q"
            >
              {offer.offer}
            </div>
            <div
              className="text-xs text-green-400 font-mono"
              data-oid="_.t8by1"
            >
              {offer.savings}
            </div>
          </div>

          <div className="space-y-2" data-oid="fpeesus">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(offer.link, "_blank");
              }}
              className="w-full h-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded text-xs flex items-center justify-center gap-1 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              data-oid="xuhuvvj"
            >
              <ExternalLink className="w-3 h-3" data-oid="h3k.ijr" />
              EXECUTE
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlippedCard(null);
              }}
              className="w-full h-6 border border-gray-600 text-gray-300 hover:bg-gray-800/50 rounded text-xs font-bold transition-all duration-300"
              data-oid="n_2e5gh"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden py-8" data-oid="ro9azeg">
      {/* Marquee container */}
      <div className="flex space-x-6 animate-marquee" data-oid="7yahv1n">
        {/* First set */}
        {offers.map((offer, index) => {
          const variant = skeletonVariants[index % skeletonVariants.length];
          const isHovered = hoveredCard === index;
          const isFlipped = flippedCard === index;
          const categoryGradient =
            categoryColors[offer.category as keyof typeof categoryColors] ||
            "from-gray-500 to-gray-400";

          return (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-52 h-52 cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(index)}
              whileHover={{ y: -10 }}
              data-oid="u24th70"
            >
              <motion.div
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                data-oid="gm7dbgs"
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden]"
                  data-oid="p6g5g8o"
                >
                  <div
                    className={`
                    flex min-h-52 w-52 flex-col gap-3 rounded-md border bg-black/40 backdrop-blur-sm p-3 
                    shadow-xl transition-all duration-300 group
                    ${isHovered ? "shadow-2xl border-cyan-400/50 bg-black/60" : "border-gray-800 hover:border-cyan-400/30"}
                  `}
                    data-oid="2g9a39r"
                  >
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-md blur opacity-0 group-hover:opacity-20 transition duration-300`}
                      data-oid="5zcnke1"
                    ></div>

                    <div className="relative z-10" data-oid=".hbeenb">
                      {renderSkeletonContent(offer, index, variant)}

                      <div
                        className="flex flex-col gap-3 mt-3"
                        data-oid="bxh4bzu"
                      >
                        {renderSkeletonBars(variant, offer)}
                      </div>

                      {variant === "list" && (
                        <div
                          className="mt-auto flex w-full justify-end gap-2"
                          data-oid="au1693k"
                        >
                          <button
                            className="w-2/5 rounded-sm bg-green-500/80 p-2"
                            data-oid="sz6v51h"
                          >
                            <span
                              className="block h-1.5 rounded-sm bg-black/20"
                              data-oid="7m2np0s"
                            />
                          </button>
                          <button
                            className="w-1/5 rounded-sm bg-muted/80 p-2"
                            data-oid="4j3cq6q"
                          >
                            <span
                              className="block h-1.5 rounded-sm bg-gray-300/50"
                              data-oid="f-dn.yy"
                            />
                          </button>
                        </div>
                      )}

                      {variant === "banner" && (
                        <button
                          className="w-full rounded-sm bg-cyan-400/80 p-2 mt-auto"
                          data-oid="0razf01"
                        >
                          <span
                            className="block h-1.5 rounded-sm bg-black/20"
                            data-oid="b1m3b2q"
                          />
                        </button>
                      )}

                      {variant === "receipt" && (
                        <span
                          className="mt-auto inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white"
                          data-oid="wl3g6uw"
                        >
                          {offer.category}
                        </span>
                      )}

                      {variant === "report" && (
                        <div
                          className="h-2 w-1/2 rounded-md bg-muted/50 mt-auto"
                          data-oid="rj0cd2t"
                        />
                      )}
                    </div>

                    {/* Hover scan line */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      data-oid="i9e28m_"
                    ></div>
                  </div>
                </div>

                {/* Back of card */}
                {renderCardBack(offer, index)}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Duplicate set for seamless loop */}
        {offers.map((offer, index) => {
          const variant = skeletonVariants[index % skeletonVariants.length];
          const realIndex = index + offers.length;
          const isHovered = hoveredCard === realIndex;
          const isFlipped = flippedCard === realIndex;
          const categoryGradient =
            categoryColors[offer.category as keyof typeof categoryColors] ||
            "from-gray-500 to-gray-400";

          return (
            <motion.div
              key={realIndex}
              className="relative flex-shrink-0 w-52 h-52 cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setHoveredCard(realIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(realIndex)}
              whileHover={{ y: -10 }}
              data-oid="t-hoyfk"
            >
              <motion.div
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                data-oid="na8p357"
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden]"
                  data-oid="fmr1l3."
                >
                  <div
                    className={`
                    flex min-h-52 w-52 flex-col gap-3 rounded-md border bg-black/40 backdrop-blur-sm p-3 
                    shadow-xl transition-all duration-300 group
                    ${isHovered ? "shadow-2xl border-cyan-400/50 bg-black/60" : "border-gray-800 hover:border-cyan-400/30"}
                  `}
                    data-oid="upl1xht"
                  >
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-md blur opacity-0 group-hover:opacity-20 transition duration-300`}
                      data-oid="b.l1ini"
                    ></div>

                    <div className="relative z-10" data-oid="ts8-r5y">
                      {renderSkeletonContent(offer, realIndex, variant)}

                      <div
                        className="flex flex-col gap-3 mt-3"
                        data-oid="pr:xp3p"
                      >
                        {renderSkeletonBars(variant, offer)}
                      </div>

                      {variant === "list" && (
                        <div
                          className="mt-auto flex w-full justify-end gap-2"
                          data-oid=".qvrh7e"
                        >
                          <button
                            className="w-2/5 rounded-sm bg-green-500/80 p-2"
                            data-oid="v59fh7f"
                          >
                            <span
                              className="block h-1.5 rounded-sm bg-black/20"
                              data-oid="k6w5ney"
                            />
                          </button>
                          <button
                            className="w-1/5 rounded-sm bg-muted/80 p-2"
                            data-oid="miz.e6z"
                          >
                            <span
                              className="block h-1.5 rounded-sm bg-gray-300/50"
                              data-oid="zc5hc5_"
                            />
                          </button>
                        </div>
                      )}

                      {variant === "banner" && (
                        <button
                          className="w-full rounded-sm bg-cyan-400/80 p-2 mt-auto"
                          data-oid="z4r87r3"
                        >
                          <span
                            className="block h-1.5 rounded-sm bg-black/20"
                            data-oid="50a-e40"
                          />
                        </button>
                      )}

                      {variant === "receipt" && (
                        <span
                          className="mt-auto inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white"
                          data-oid="yhz4gg-"
                        >
                          {offer.category}
                        </span>
                      )}

                      {variant === "report" && (
                        <div
                          className="h-2 w-1/2 rounded-md bg-muted/50 mt-auto"
                          data-oid="5mo41g9"
                        />
                      )}
                    </div>

                    {/* Hover scan line */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      data-oid="2ehdc6n"
                    ></div>
                  </div>
                </div>

                {/* Back of card */}
                {renderCardBack(offer, realIndex)}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
