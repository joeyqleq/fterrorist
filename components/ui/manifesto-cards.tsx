"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BinaryHoverText } from "@/components/ui/binary-hover-text";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-background-stars-card";

interface ManifestoCard {
  title: string;
  description: string;
  price?: string;
  details?: string[];
}

export default function ManifestoCards() {
  const cards: ManifestoCard[] = [
    {
      title: "The Problem",
      description:
        "Corporations gate premium tools behind student verification from elite institutions. Not everyone had the privilege of attending a top US university, but everyone deserves access to these tools.",
    },
    {
      title: "The Solution",
      description:
        "Freebie Terrorist provides authentic .edu email addresses and student IDs from verified universities. No forwards - real accounts with Office 365 or Google Workspace included.",
    },
    {
      title: ".EDU Email",
      description:
        "Authentic .edu email address in your name (or any name you choose) from verified universities. Delivered within 7-10 days with full access to student portals and benefits.",
      price: "$13",
      details: [
        "• Real .edu email address",
        "• Office 365 or Google Workspace",
        "• 7-10 day delivery",
        "• Full student portal access",
        "• Lifetime validity",
      ],
    },
    {
      title: "Student ID",
      description:
        "Real digital student ID image for the same university and name as your .edu email. Required for offers that need photo verification alongside email verification.",
      price: "$20",
      details: [
        "• High-quality digital ID image",
        "• Matches your .edu email",
        "• Photo verification ready",
        "• Same university as email",
        "• Instant delivery",
      ],
    },
  ];

  return (
    <section
      id="manifesto"
      className="relative z-10 py-20 px-4 mt-16"
      data-oid="gv0i9ld"
    >
      <div className="container mx-auto" data-oid="yx9p6z8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="763e-9a"
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-8 text-green-400 font-mono"
            data-oid="w0kgsv-"
          >
            <BinaryHoverText text="THE MANIFESTO" data-oid="nqv2rsv" />
          </h2>
          <p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed"
            data-oid="6nwqhu_"
          >
            We're not just another freebie site. We're digital insurgents
            leveling the playing field. The corporate oligarchy hoards premium
            tools behind academic gatekeeping - we tear down those gates. This
            isn't charity, it's rebellion with a price tag.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          data-oid="vbtn6o3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              data-oid=":3km452"
            >
              <GlowingStarsBackgroundCard
                className="h-[520px] bg-gradient-to-br from-gray-900 via-black to-gray-800 border-green-500/30 max-w-none"
                data-oid=":-t3gf3"
              >
                <div
                  className="flex flex-col h-full justify-between text-center p-6 relative z-10"
                  data-oid="d2z20:m"
                >
                  <div className="space-y-3" data-oid="_yiemjq">
                    <h3
                      className="text-green-400 font-mono text-lg font-bold"
                      data-oid="kj-k9_y"
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-gray-300 font-mono text-sm leading-relaxed"
                      data-oid="wi3jf_p"
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Price and details section for cards 3 and 4 */}
                  {card.price && card.details && (
                    <div className="mt-6 space-y-4" data-oid="qim3nxz">
                      <div className="text-center" data-oid="utqf:-x">
                        <span
                          className="text-3xl font-bold text-green-400 font-mono"
                          data-oid="pu4st9d"
                        >
                          {card.price}
                        </span>
                      </div>
                      <div className="space-y-2" data-oid="ebhkhfh">
                        {card.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-400 font-mono text-xs text-left"
                            data-oid="fort2in"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          data-oid="n_c_g8m"
        >
          <p
            className="text-gray-400 text-lg font-mono max-w-3xl mx-auto"
            data-oid="fz3s78i"
          >
            The free arsenal below remains free. But if you want to unlock the
            full potential of these offers without the academic gatekeeping,
            we've got your back.
            <span className="text-green-400" data-oid="ltgdydd">
              {" "}
              This is digital anarchy with a business model.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
