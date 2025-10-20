"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Clock,
  MapPin,
  Shield,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import type { StudentOffer } from "@/lib/studentOffers";
import OfferLogo3D from "../OfferLogo3D";

interface DisplayCardsProps {
  offers: StudentOffer[];
}

export default function DisplayCards({ offers }: DisplayCardsProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categoryColors = {
    "Web Design": "from-blue-500 to-cyan-400",
    Cloud: "from-purple-500 to-pink-500",
    Domains: "from-green-500 to-emerald-400",
    Design: "from-pink-500 to-rose-400",
    "AI/Cloud": "from-orange-500 to-yellow-400",
    "AI Tools": "from-red-500 to-pink-500",
    "AI Coding": "from-indigo-500 to-purple-500",
    Productivity: "from-yellow-400 to-orange-500",
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
      data-oid="_o_6yfk"
    >
      <AnimatePresence data-oid="nzjwp1x">
        {offers.map((offer, index) => {
          const categoryGradient =
            categoryColors[offer.category as keyof typeof categoryColors] ||
            "from-gray-500 to-gray-400";
          const isSelected = selectedCard === index;
          const isHovered = hoveredCard === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: isSelected ? 0 : isHovered ? 5 : -5,
                scale: isSelected ? 1.05 : isHovered ? 1.02 : 1,
                z: isSelected ? 50 : isHovered ? 25 : 0,
              }}
              exit={{ opacity: 0, y: -50, rotateY: 15 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(isSelected ? null : index)}
              data-oid="_88xavo"
            >
              <Card
                className="h-full bg-black/40 backdrop-blur-md border border-gray-800/50 overflow-hidden group"
                data-oid=".3balfi"
              >
                {/* Front of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  data-oid="q.qiaxj"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-10`}
                    data-oid="j7xv2b2"
                  />

                  <CardContent className="p-6 relative z-10" data-oid="-9s6fac">
                    <div
                      className="flex items-start justify-between mb-4"
                      data-oid="2n1d5w2"
                    >
                      <Badge
                        className={`bg-gradient-to-r ${categoryGradient} text-black font-bold px-3 py-1`}
                        data-oid="j1a8gt7"
                      >
                        {offer.category}
                      </Badge>
                      <div className="text-right" data-oid="ol2f84d">
                        <div
                          className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                          data-oid="q3e4.m-"
                        >
                          {offer.savings}
                        </div>
                        <div
                          className="text-xs text-gray-400"
                          data-oid="yp0eka5"
                        >
                          value
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-3 mb-3"
                      data-oid="3aogmog"
                    >
                      <OfferLogo3D
                        provider={offer.provider}
                        size="sm"
                        data-oid="vygvmll"
                      />
                      <h3
                        className="text-2xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                        data-oid="ff5w7eh"
                      >
                        {offer.provider}
                      </h3>
                    </div>

                    <p
                      className="text-gray-300 text-sm leading-relaxed mb-4"
                      data-oid="bg:6g60"
                    >
                      {offer.offer}
                    </p>

                    <div className="space-y-2" data-oid="hbj-3zz">
                      <div
                        className="flex items-center gap-2 text-sm text-gray-400"
                        data-oid=":ked2cb"
                      >
                        <Clock className="w-4 h-4" data-oid="ccgh488" />
                        <span data-oid="yqhusx1">{offer.duration}</span>
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm text-gray-400"
                        data-oid="tztcbw_"
                      >
                        <MapPin className="w-4 h-4" data-oid="zq_mekn" />
                        <span data-oid="by7mlo6">{offer.eligibility}</span>
                      </div>
                    </div>

                    <div className="mt-4 text-center" data-oid="t9qhkgd">
                      <span
                        className="text-xs text-gray-500"
                        data-oid="-3ss1f_"
                      >
                        Click to reveal details
                      </span>
                    </div>
                  </CardContent>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  animate={{ rotateY: isSelected ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  data-oid="bl2sw6e"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-20`}
                    data-oid="9a7f6g_"
                  />

                  <CardContent
                    className="p-6 h-full flex flex-col justify-between relative z-10"
                    data-oid="f57ikzu"
                  >
                    <div data-oid="4sg_i4k">
                      <h4
                        className="text-lg font-bold text-white mb-4"
                        data-oid="uw9.9-v"
                      >
                        Verification & Details
                      </h4>

                      <div className="space-y-3 mb-4" data-oid="m14tyz-">
                        <div
                          className="flex items-start gap-3"
                          data-oid="z801on4"
                        >
                          <Shield
                            className="w-5 h-5 text-yellow-400 mt-0.5"
                            data-oid="1qww:1n"
                          />
                          <div data-oid="0.yi_4e">
                            <div
                              className="text-sm font-medium text-white"
                              data-oid="l7y31lc"
                            >
                              Verification
                            </div>
                            <div
                              className="text-xs text-gray-300"
                              data-oid="u3hi94a"
                            >
                              {offer.verification}
                            </div>
                          </div>
                        </div>

                        <div
                          className="flex items-start gap-3"
                          data-oid="dm9:5i7"
                        >
                          <DollarSign
                            className="w-5 h-5 text-green-400 mt-0.5"
                            data-oid="hhvai01"
                          />
                          <div data-oid="pkmj2b4">
                            <div
                              className="text-sm font-medium text-white"
                              data-oid="0adqqp_"
                            >
                              Value
                            </div>
                            <div
                              className="text-xs text-gray-300"
                              data-oid="8aj:.33"
                            >
                              {offer.savings} saved
                            </div>
                          </div>
                        </div>

                        {offer.notes && (
                          <div
                            className="flex items-start gap-3"
                            data-oid="oo5u:bo"
                          >
                            <AlertTriangle
                              className="w-5 h-5 text-orange-400 mt-0.5"
                              data-oid="s-zqmg4"
                            />
                            <div data-oid="nzq-8c3">
                              <div
                                className="text-sm font-medium text-white"
                                data-oid="rwwy0_5"
                              >
                                Important
                              </div>
                              <div
                                className="text-xs text-gray-300"
                                data-oid="b28xd.."
                              >
                                {offer.notes}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3" data-oid="v5tt.i5">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold"
                        data-oid="2dnxv_o"
                      >
                        <a
                          href={offer.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-oid="hki85s_"
                        >
                          <ExternalLink
                            className="w-4 h-4 mr-2"
                            data-oid="6o.9_ot"
                          />
                          Get This Offer
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(null);
                        }}
                        data-oid="otpbuz8"
                      >
                        Close Details
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
