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

interface SkeletonCardGridProps {
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

export default function SkeletonCardGrid({ offers }: SkeletonCardGridProps) {
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
          data-oid="1qcyee."
        >
          <Icon className="w-6 text-muted-foreground" data-oid="k2c3xiw" />
          <DollarSign className="w-6 text-green-400" data-oid="87yj6o." />
        </div>
      );
    }

    if (variant === "code") {
      return <Icon className="w-6 text-cyan-400" data-oid="3:9.f75" />;
    }

    if (variant === "banner") {
      return (
        <div
          className="flex items-center justify-between border-b pb-3 border-cyan-400/30"
          data-oid="4eu-tr0"
        >
          <span
            className="font-semibold text-foreground text-xs"
            data-oid="d_ephez"
          >
            OFFER
          </span>
          <span
            className="inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 text-center text-xs font-semibold text-white"
            data-oid="m5v3m6_"
          >
            FREE
          </span>
        </div>
      );
    }

    return (
      <div
        className="flex justify-between border-b pb-3 border-cyan-400/30"
        data-oid="tojj-q."
      >
        <Icon className="w-6 text-cyan-400" data-oid="-hs-uqx" />
        <span className="text-xs text-green-400 font-mono" data-oid="c6xv2r3">
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
          data-oid="5lod2p7"
        >
          <div
            className="h-2 w-2 rounded-md bg-cyan-400/30"
            data-oid="i9p:02d"
          />
          <div
            className="h-3 w-3 rounded-sm bg-purple-400/30"
            data-oid="tsy-x3s"
          />
          <div
            className="h-2 flex-1 rounded-md bg-muted/50"
            data-oid="pz4jlaa"
          />
        </div>
      ));
    }

    if (variant === "banner") {
      return (
        <div
          className="flex flex-1 flex-col justify-center gap-2"
          data-oid="jf2vc60"
        >
          <div
            className="h-2 w-1/2 rounded-md bg-cyan-400/30"
            data-oid="wc5om6t"
          />
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid="p3.vfx1"
          />
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="5k56k1z"
          />
        </div>
      );
    }

    if (variant === "code") {
      return (
        <div
          className="flex flex-1 flex-col justify-center gap-2"
          data-oid="bly4am."
        >
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="zql:2-i"
          />
          <div
            className="h-2 w-3/4 rounded-md bg-cyan-400/30"
            data-oid="ihlusc1"
          />
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="b:kc.3d"
          />
        </div>
      );
    }

    if (variant === "report") {
      return Array.from({ length: 6 }).map((_, i) => (
        <div
          className="h-2 w-full rounded-md bg-muted/50"
          key={`item-${i}`}
          data-oid="3k-nhbn"
        />
      ));
    }

    return (
      <>
        <div className="flex w-full justify-between gap-2" data-oid="et7xrdx">
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="efg43_k"
          />
          <div
            className="h-2 w-4 rounded-md bg-cyan-400/30"
            data-oid="8229lgd"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="3lugpz-">
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid="3-ly:ft"
          />
          <div
            className="h-2 w-5 rounded-md bg-green-400/30"
            data-oid="uei8ofy"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="ltjutt2">
          <div
            className="h-2 w-1/2 rounded-md bg-muted/50"
            data-oid="qe5xz2p"
          />
          <div
            className="h-2 w-4 rounded-md bg-purple-400/30"
            data-oid="seg3r3a"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="_dm95in">
          <div
            className="h-2 w-3/4 rounded-md bg-muted/50"
            data-oid="ditkh-n"
          />
          <div
            className="h-2 w-5 rounded-md bg-blue-400/30"
            data-oid="4ybdp1e"
          />
        </div>
        <div className="flex w-full justify-between gap-2" data-oid="2dl5qud">
          <div
            className="h-2 w-3/5 rounded-md bg-muted/50"
            data-oid="bt-28:5"
          />
          <div
            className="h-2 w-8 rounded-md bg-pink-400/30"
            data-oid="b45mcne"
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
        className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-md border border-cyan-400/50 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        data-oid="0swa7:1"
      >
        <div className="h-full flex flex-col" data-oid="-:5hz:e">
          <div className="flex items-center gap-2 mb-4" data-oid="3169fkw">
            <div
              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              data-oid="i7.tmtp"
            ></div>
            <h4
              className="text-sm font-black text-white uppercase tracking-wider"
              data-oid="vv96omo"
            >
              INTEL
            </h4>
          </div>

          <div className="space-y-3 mb-4 flex-1" data-oid="z8z6oqm">
            <div className="text-sm font-bold text-cyan-400" data-oid="t0lkkdw">
              {offer.provider}
            </div>
            <div
              className="text-sm text-gray-300 line-clamp-4"
              data-oid="crs:6-7"
            >
              {offer.offer}
            </div>
            <div
              className="text-sm text-green-400 font-mono"
              data-oid="4:y5bdj"
            >
              {offer.savings}
            </div>
          </div>

          <div className="space-y-3" data-oid="41.s3vz">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(offer.link, "_blank");
              }}
              className="w-full h-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded text-sm flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              data-oid="r:7b2j1"
            >
              <ExternalLink className="w-4 h-4" data-oid="c14qyvb" />
              EXECUTE
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlippedCard(null);
              }}
              className="w-full h-8 border border-gray-600 text-gray-300 hover:bg-gray-800/50 rounded text-sm font-bold transition-all duration-300"
              data-oid="hbnk27r"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8"
      data-oid="0:mm.t6"
    >
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
            className="relative flex-shrink-0 w-full h-80 cursor-pointer [perspective:1000px]"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index)}
            whileHover={{ y: -10 }}
            layout
            data-oid="ex.nwhl"
          >
            <motion.div
              className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              data-oid="::butpq"
            >
              {/* Front of card */}
              <div
                className="absolute inset-0 [backface-visibility:hidden]"
                data-oid="g:j0muu"
              >
                <div
                  className={`
                  flex min-h-80 w-full flex-col gap-4 rounded-md border bg-black/40 backdrop-blur-sm p-4 
                  shadow-xl transition-all duration-300 group
                  ${isHovered ? "shadow-2xl border-cyan-400/50 bg-black/60" : "border-gray-800 hover:border-cyan-400/30"}
                `}
                  data-oid="io4pkai"
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-md blur opacity-0 group-hover:opacity-20 transition duration-300`}
                    data-oid="kmwkbpa"
                  ></div>

                  <div className="relative z-10" data-oid="zovrvq9">
                    {renderSkeletonContent(offer, index, variant)}

                    <div
                      className="flex flex-col gap-4 mt-4"
                      data-oid="_kk7xbm"
                    >
                      {renderSkeletonBars(variant, offer)}
                    </div>

                    {variant === "list" && (
                      <div
                        className="mt-auto flex w-full justify-end gap-2"
                        data-oid="ayx7_5k"
                      >
                        <button
                          className="w-2/5 rounded-sm bg-green-500/80 p-2"
                          data-oid="lln_nv."
                        >
                          <span
                            className="block h-2 rounded-sm bg-black/20"
                            data-oid="a.xu.85"
                          />
                        </button>
                        <button
                          className="w-1/5 rounded-sm bg-muted/80 p-2"
                          data-oid=":8w0-pu"
                        >
                          <span
                            className="block h-2 rounded-sm bg-gray-300/50"
                            data-oid="mpgbacm"
                          />
                        </button>
                      </div>
                    )}

                    {variant === "banner" && (
                      <button
                        className="w-full rounded-sm bg-cyan-400/80 p-2 mt-auto"
                        data-oid="y.linr5"
                      >
                        <span
                          className="block h-2 rounded-sm bg-black/20"
                          data-oid="15an11v"
                        />
                      </button>
                    )}

                    {variant === "receipt" && (
                      <span
                        className="mt-auto inline-block w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
                        data-oid="t2-un-a"
                      >
                        {offer.category}
                      </span>
                    )}

                    {variant === "report" && (
                      <div
                        className="h-2 w-1/2 rounded-md bg-muted/50 mt-auto"
                        data-oid="1sw16wy"
                      />
                    )}
                  </div>

                  {/* Hover scan line */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    data-oid="sc_ux4m"
                  ></div>
                </div>
              </div>

              {/* Back of card */}
              {renderCardBack(offer, index)}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
