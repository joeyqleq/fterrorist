"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  Clock,
  MapPin,
  Shield,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OfferLogo3D from "@/components/OfferLogo3D";
import { StudentOffer } from "@/lib/studentOffers";
import { createPortal } from "react-dom";
import { MagicCard } from "./magic-card";
import { BorderBeam } from "./border-beam";
import { Particles } from "./particles";

// Category colors and gradients
const categoryColors = {
  "Web Design": "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  Cloud: "bg-gradient-to-r from-sky-500 to-blue-500 text-white",
  Domains: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  Design: "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
  "AI/Cloud": "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
  "AI Coding": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  Productivity: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
  Hosting: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
  "AI Tools": "bg-gradient-to-r from-violet-500 to-purple-500 text-white",
  Security: "bg-gradient-to-r from-red-500 to-pink-500 text-white",
  "Password Managers":
    "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
  Development: "bg-gradient-to-r from-green-500 to-teal-500 text-white",
  "Video Editing": "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  Engineering: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  "Project Management":
    "bg-gradient-to-r from-orange-500 to-yellow-500 text-white",
  Analytics: "bg-gradient-to-r from-green-500 to-blue-500 text-white",
  Entertainment: "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
  Finance: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  "Infrastructure Design":
    "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
  "Survey Tools": "bg-gradient-to-r from-teal-500 to-green-500 text-white",
  "Game Development":
    "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
  "3D Design": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  Collaboration: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  "Music Production": "bg-gradient-to-r from-pink-500 to-red-500 text-white",
  "Statistical Analysis":
    "bg-gradient-to-r from-green-500 to-teal-500 text-white",
  Career: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
};

const categoryGradients = {
  "Web Design": "from-blue-500 to-purple-500",
  Cloud: "from-sky-500 to-blue-500",
  Domains: "from-green-500 to-emerald-500",
  Design: "from-pink-500 to-rose-500",
  "AI/Cloud": "from-purple-500 to-indigo-500",
  "AI Coding": "from-orange-500 to-red-500",
  Productivity: "from-teal-500 to-cyan-500",
  Hosting: "from-yellow-500 to-orange-500",
  "AI Tools": "from-violet-500 to-purple-500",
  Security: "from-red-500 to-pink-500",
  "Password Managers": "from-indigo-500 to-blue-500",
  Development: "from-green-500 to-teal-500",
  "Video Editing": "from-purple-500 to-pink-500",
  Engineering: "from-blue-500 to-cyan-500",
  "Project Management": "from-orange-500 to-yellow-500",
  Analytics: "from-green-500 to-blue-500",
  Entertainment: "from-pink-500 to-purple-500",
  Finance: "from-green-500 to-emerald-500",
  "Infrastructure Design": "from-blue-500 to-indigo-500",
  "Survey Tools": "from-teal-500 to-green-500",
  "Game Development": "from-purple-500 to-indigo-500",
  "3D Design": "from-orange-500 to-red-500",
  Collaboration: "from-blue-500 to-purple-500",
  "Music Production": "from-pink-500 to-red-500",
  "Statistical Analysis": "from-green-500 to-teal-500",
  Career: "from-yellow-500 to-orange-500",
};

const categoryDescriptions: { [key: string]: string } = {
  "Web Design":
    "Professional web design tools and services for creating stunning websites.",
  Cloud: "Cloud computing services and infrastructure for modern applications.",
  Domains: "Domain registration and management services.",
  Design: "Creative design tools and software for digital artists.",
  "AI/Cloud": "Artificial intelligence and cloud computing platforms.",
  "AI Coding": "AI-powered coding assistants and development tools.",
  Productivity: "Tools and applications to boost your productivity.",
  Hosting: "Web hosting services and infrastructure solutions.",
  "AI Tools": "Advanced artificial intelligence tools and platforms.",
  Security: "Cybersecurity tools and services for protection.",
  "Password Managers": "Secure password management and authentication tools.",
  Development:
    "Software development tools and integrated development environments.",
  "Video Editing": "Professional video editing and post-production software.",
  Engineering: "Engineering software and CAD tools for technical design.",
  "Project Management": "Project management and collaboration platforms.",
  Analytics: "Data analytics and business intelligence tools.",
  Entertainment: "Entertainment and media streaming services.",
  Finance: "Financial management and budgeting applications.",
  "Infrastructure Design": "Infrastructure engineering and design software.",
  "Survey Tools": "Survey creation and data collection platforms.",
  "Game Development": "Game development engines and tools.",
  "3D Design": "3D modeling and rendering software.",
  Collaboration: "Team collaboration and communication tools.",
  "Music Production": "Music creation and audio production software.",
  "Statistical Analysis": "Statistical analysis and data science tools.",
  Career: "Career development and job search tools.",
};

const offerSummaries: { [key: string]: string } = {
  Webflow:
    "Webflow is a powerful visual web design platform that allows designers to build responsive websites without coding.",
  "Microsoft Azure":
    "Microsoft Azure is a comprehensive cloud computing platform offering a wide range of services for building, deploying, and managing applications.",
  Figma:
    "Figma is a collaborative interface design tool that enables teams to design, prototype, and gather feedback in one place.",
  GitHub:
    "GitHub is the world's largest code hosting platform, providing version control, collaboration tools, and a comprehensive development ecosystem.",
  Notion:
    "Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases to help individuals and teams stay organized.",
};

interface OfferDetailsModalProps {
  offer: StudentOffer;
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferDetailsModal({
  offer,
  isOpen,
  onClose,
}: OfferDetailsModalProps) {
  console.log("OfferDetailsModal render:", { offer: offer?.provider, isOpen });

  if (!offer) return null;

  // Add client-side check to ensure DOM is available for createPortal
  if (typeof window === "undefined") return null;

  const categoryColor =
    categoryColors[offer.category as keyof typeof categoryColors] ||
    "bg-gradient-to-r from-gray-500 to-gray-400 text-white";
  const categoryGradient =
    categoryGradients[offer.category as keyof typeof categoryGradients] ||
    "from-gray-500 to-gray-400";

  const categoryDescription =
    categoryDescriptions[offer.category] ||
    "Professional software and services for students.";
  const offerSummary =
    offerSummaries[offer.provider] ||
    `${offer.provider} is a professional platform offering valuable tools and services for students. This student discount provides significant savings on premium features that would otherwise be costly for individual users.`;

  return (
    <AnimatePresence data-oid="1x.3irn">
      {isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              data-oid="n6zy..4"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] max-w-4xl max-h-[90vh] overflow-y-auto p-2 sm:p-4"
              data-oid="wttg97f"
            >
              <div
                className="relative w-full overflow-hidden"
                data-oid="cm2455:"
              >
                {/* Background Particles */}
                <Particles
                  className="absolute inset-0 z-0"
                  quantity={25}
                  ease={80}
                  color="#10b981"
                  size={0.5}
                  staticity={40}
                  data-oid="o.6hzq2"
                />

                <MagicCard
                  className="relative w-full bg-black/95 border border-green-500/30 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden"
                  gradientSize={400}
                  gradientColor="#10b981"
                  gradientOpacity={0.1}
                  gradientFrom="#10b981"
                  gradientTo="#059669"
                  data-oid="sv-s54c"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full"
                    data-oid="79rv247"
                  >
                    {/* Background gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-emerald-500/5 to-green-600/10 animate-pulse"
                      data-oid="w66l-n6"
                    />

                    {/* Close button */}
                    <motion.button
                      className="absolute top-6 right-6 z-10 p-2 bg-black/50 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                      onClick={onClose}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-oid="re-xa9v"
                    >
                      <X className="w-5 h-5" data-oid="l2rlswo" />
                    </motion.button>

                    {/* Content */}
                    <div
                      className="relative z-10 p-4 sm:p-6 lg:p-8"
                      data-oid="sxq:-ot"
                    >
                      {/* Header */}
                      <div
                        className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8"
                        data-oid="4e8p:z-"
                      >
                        <motion.div
                          className="flex-shrink-0"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          data-oid="a0penio"
                        >
                          <a
                            href={offer.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-oid="h7anpmv"
                          >
                            <OfferLogo3D
                              provider={offer.provider}
                              size="lg"
                              imageUrl={offer.image}
                              data-oid="u-_rvdt"
                            />
                          </a>
                        </motion.div>

                        <div className="flex-1 min-w-0" data-oid="kw29p6r">
                          <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            data-oid="n6z35hg"
                          >
                            {offer.provider}
                          </motion.h2>

                          <div
                            className="flex items-center gap-3 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full w-fit mb-4"
                            data-oid="nc80g36"
                          >
                            <div
                              className={`w-6 h-6 rounded-full ${categoryColor} flex items-center justify-center flex-shrink-0`}
                              data-oid="f5rftsr"
                            >
                              <Star
                                className="w-3 h-3 text-white"
                                data-oid="xga9gkb"
                              />
                            </div>
                            <span
                              className="text-sm font-medium text-green-400"
                              data-oid="o3710-2"
                            >
                              {offer.category}
                            </span>
                          </div>

                          <p
                            className="text-gray-300 text-lg leading-relaxed"
                            data-oid="4::ix.h"
                          >
                            {offer.offer}
                          </p>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        data-oid="xo_4b10"
                      >
                        <div
                          className="p-4 sm:p-6 bg-black/50 border border-purple-500/30 rounded-xl"
                          data-oid=":cxutd4"
                        >
                          <div
                            className="flex items-center gap-3 mb-3"
                            data-oid="ttdq9w6"
                          >
                            <div
                              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
                              data-oid="3-4a77:"
                            >
                              <Clock
                                className="w-3 h-3 text-white"
                                data-oid="cndxxh0"
                              />
                            </div>
                            <h4
                              className="text-lg font-bold text-white"
                              data-oid="0fpahuw"
                            >
                              Duration
                            </h4>
                          </div>
                          <p
                            className="text-gray-300 text-sm"
                            data-oid="_:f_7yl"
                          >
                            {offer.duration}
                          </p>
                        </div>

                        <div
                          className="p-4 sm:p-6 bg-black/50 border border-green-500/30 rounded-xl"
                          data-oid="46ib4h0"
                        >
                          <div
                            className="flex items-center gap-3 mb-3"
                            data-oid="zpkpm6b"
                          >
                            <div
                              className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0"
                              data-oid="zd03f4x"
                            >
                              <MapPin
                                className="w-3 h-3 text-white"
                                data-oid="1ltukfe"
                              />
                            </div>
                            <h4
                              className="text-lg font-bold text-white"
                              data-oid="tb8eea6"
                            >
                              Eligibility
                            </h4>
                          </div>
                          <p
                            className="text-gray-300 text-sm"
                            data-oid="fo6cw0r"
                          >
                            {offer.eligibility}
                          </p>
                        </div>

                        <div
                          className="p-4 sm:p-6 bg-black/50 border border-yellow-500/30 rounded-xl"
                          data-oid="0ffmp-g"
                        >
                          <div
                            className="flex items-center gap-3 mb-3"
                            data-oid="ww4zx1g"
                          >
                            <div
                              className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
                              data-oid="qa0wspb"
                            >
                              <Shield
                                className="w-3 h-3 text-white"
                                data-oid="8_c.wzu"
                              />
                            </div>
                            <h4
                              className="text-lg font-bold text-white"
                              data-oid="c._yitm"
                            >
                              Verification
                            </h4>
                          </div>
                          <p
                            className="text-gray-300 text-sm"
                            data-oid="ord3--4"
                          >
                            {offer.verification}
                          </p>
                        </div>
                      </motion.div>

                      {/* About Section */}
                      <motion.div
                        className="mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        data-oid="8qu.pae"
                      >
                        <h3
                          className="text-xl sm:text-2xl font-bold text-green-400 mb-4 flex items-center gap-3"
                          data-oid="def3rgq"
                        >
                          <Zap className="w-5 h-5" data-oid="o59b783" />
                          About {offer.provider}
                        </h3>
                        <p
                          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
                          data-oid="y_psv:d"
                        >
                          {offerSummary}
                        </p>

                        <div
                          className="p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
                          data-oid="pv3k:ja"
                        >
                          <h4
                            className="text-lg font-bold text-green-400 mb-2"
                            data-oid="lqacn:z"
                          >
                            Category: {offer.category}
                          </h4>
                          <p
                            className="text-gray-300 text-sm"
                            data-oid="yg39mba"
                          >
                            {categoryDescription}
                          </p>
                        </div>
                      </motion.div>

                      {/* Notes Section */}
                      {offer.notes && (
                        <motion.div
                          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          data-oid="nwqd5fo"
                        >
                          <h4
                            className="text-lg font-bold text-yellow-400 mb-3"
                            data-oid="38-sd-."
                          >
                            Important Notes
                          </h4>
                          <p
                            className="text-yellow-200 text-sm"
                            data-oid="jsjka.b"
                          >
                            {offer.notes}
                          </p>
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        data-oid="-ap9-_l"
                      >
                        <Button
                          asChild
                          size="lg"
                          className="flex-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 hover:from-green-300 hover:via-green-400 hover:to-emerald-300 text-black font-bold py-4 sm:py-6 rounded-xl"
                          data-oid="w6pb55r"
                        >
                          <a
                            href={offer.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-oid="itd1ilo"
                          >
                            <ExternalLink
                              className="w-4 h-4 mr-2"
                              data-oid="d2.4q5b"
                            />
                            Claim This Offer
                          </a>
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          onClick={onClose}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white py-4 sm:py-6 px-6 sm:px-8 rounded-xl"
                          data-oid="isj5dmt"
                        >
                          Close
                        </Button>
                      </motion.div>
                    </div>

                    {/* Animated Border Beam */}
                    <BorderBeam
                      size={120}
                      duration={8}
                      colorFrom="#10b981"
                      colorTo="#059669"
                      borderWidth={2}
                      data-oid="cq4htw1"
                    />
                  </motion.div>
                </MagicCard>
              </div>
            </motion.div>
          </>,
          document.body,
        )}
    </AnimatePresence>
  );
}
