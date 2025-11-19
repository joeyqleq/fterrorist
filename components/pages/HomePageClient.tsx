"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { studentOffers } from "@/lib/studentOffers";
import TerroristNavbar from "@/components/ui/terrorist-navbar";
import { ContactFormModal } from "@/components/ui/contact-form-modal";
import { MatrixShader } from "@/components/ui/matrix-shader";
import { SpinningText } from "@/components/ui/spinning-text";
import { MagneticBorder } from "@/components/ui/magnetic-border";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import IntegrationPills from "@/components/ui/integration-pills";
import EnhancedOfferGrid from "@/components/ui/enhanced-offer-grid";
import HackerAnimation from "@/components/ui/hacker-animation";
import AnimeHero from "@/components/ui/anime-hero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Terminal,
  FileText,
  Heart,
  Hand,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedStats from "@/components/ui/animated-stats";
import { MatrixText } from "@/components/ui/matrix-text";
import { BinaryHoverText } from "@/components/ui/binary-hover-text";
import { HackerShimmerButton } from "@/components/ui/hacker-shimmer-button";
import HackerTitle from "@/components/ui/hacker-title";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { OfferUseCasesModal } from "@/components/ui/offer-usecases-modal";
import type { StudentOffer } from "@/lib/studentOffers";

const MagnetLines = dynamic(
  () =>
    import("@/components/ui/magnet-lines").then((mod) => ({
      default: mod.MagnetLines,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-screen opacity-0" data-oid="yg_hdac" />
    ),
  },
);

const ManifestoCards = dynamic(() => import("@/components/ui/manifesto-cards"));
const TerminalFAQ = dynamic(() => import("@/components/ui/terminal-faq"));
const SplineModel = dynamic(() => import("@/components/ui/spline-model"));
const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"));

export default function HomePageClient() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [useCaseOffer, setUseCaseOffer] = useState<StudentOffer | null>(null);
  const [isUseCaseModalOpen, setIsUseCaseModalOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(studentOffers.map((offer) => offer.category)),
    );
    return ["All", ...uniqueCategories.sort()];
  }, []);

  // Memoized handlers for better performance
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [],
  );

  const handleScrollToOffers = useCallback(() => {
    document.querySelector("#offers")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleOpenContactModal = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleCloseContactModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const handleOpenUseCases = useCallback((offer: StudentOffer) => {
    setUseCaseOffer(offer);
    setIsUseCaseModalOpen(true);
  }, []);

  const handleCloseUseCases = useCallback(() => {
    setIsUseCaseModalOpen(false);
    setUseCaseOffer(null);
  }, []);

  // Filter offers based on category and search
  const filteredOffers = useMemo(() => {
    return studentOffers.filter((offer) => {
      const matchesCategory =
        selectedCategory === "All" || offer.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        offer.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.offer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      data-oid=".vxnvq8"
    >
      {/* Magnet Lines Background - More reactive with increased brightness */}
      <div className="fixed inset-0 z-0 opacity-60" data-oid="wznq6jk">
        <MagnetLines
          rows={18}
          columns={30}
          containerSize="100vw"
          lineWidth="2px"
          lineHeight="14px"
          gradientColors={["#34d965", "#22c55e", "#16a34a", "#15803d"]}
          sensitivity={200}
          animationSpeed={0.06}
          className="h-screen w-screen"
          data-oid="690:415"
        />
      </div>

      {/* Lightweight backdrop to reduce jank */}
      <div
        className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_40%)]"
        data-oid="gtayxs4"
      />

      {/* Navbar */}
      <TerroristNavbar
        onContactClick={() => setIsContactModalOpen(true)}
        data-oid="9cw8k35"
      />

      {/* Hero Section (Anime.js inspired) */}
      <section
        id="hero"
        className="relative z-10 min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16"
        data-oid="osffdk9"
      >
        <div
          className="container mx-auto text-center max-w-7xl px-4 sm:px-6"
          data-oid="77wb7ic"
        >
          <div
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            data-oid="lqhezs8"
          >
            {/* Hero Logo with Rotating Text */}
            <div
              className="lg:order-2 flex-shrink-0 order-1"
              data-oid="6e:1u5c"
            >
              <div className="relative" data-oid="w_5xqy6">
                <AnimeHero data-oid="ir4chci" />

                {/* Rotating Text Around ASCII Logo */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  data-oid="7k0-uuh"
                >
                  <SpinningText
                    radius={12}
                    fontSize={0.9}
                    duration={20}
                    className="font-mono font-bold text-green-400"
                    data-oid="cp:4083"
                  >
                    {"DIGITAL ANARCHIST • FREEBIE TERRORIST • "}
                  </SpinningText>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div
              className="lg:order-1 flex-1 text-center lg:text-left space-y-8 lg:space-y-12 order-2 w-full"
              data-oid="77y534o"
            >
              {/* Main Title with Hacker Animation */}
              <div className="w-full overflow-visible">
                <HackerTitle
                  text={["FREEBIE", "TERRORIST"]}
                  className="relative"
                  data-oid="tllca34"
                />
              </div>

              {/* Description with spacing */}
              <motion.div
                className="space-y-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                data-oid="yl3.u7v"
              >
                <motion.p
                  className="text-xl text-gray-300 font-mono bg-gradient-to-r from-gray-300 via-green-400 to-gray-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ backgroundSize: "200% 100%" }}
                  data-oid="d5fjr:e"
                >
                  The anti-coupon arsenal for real student freebies
                </motion.p>
                <motion.p
                  className="text-gray-400 max-w-lg mx-auto lg:mx-0 font-mono"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  data-oid="q.w3b0x"
                >
                  Verified zero-cost perks, not coupon fluff. We dig up the
                  student-only gems (and the .edu lifelines when schools
                  gatekeep) so you can build, learn, and ship without paying.
                </motion.p>
              </motion.div>

              {/* CTA Buttons with Hacker Style */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                data-oid="p-pxmyh"
              >
                <HackerShimmerButton
                  className="min-w-[280px] h-16 text-lg font-mono font-bold group"
                  onClick={handleScrollToOffers}
                  data-oid="m.1ysgw"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Terminal
                      className="w-5 h-5 text-green-400"
                      data-oid="e6w6sbw"
                    />
                    <AnimatedGradientText
                      colorFrom="#22c55e"
                      colorTo="#10b981"
                      speed={1.5}
                      className="text-lg font-bold"
                    >
                      &gt;_ Access Free Arsenal
                    </AnimatedGradientText>
                    <ArrowRight
                      className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform"
                      data-oid="wqsmwnq"
                    />
                  </div>
                </HackerShimmerButton>

                <HackerShimmerButton
                  className="min-w-[280px] h-16 text-lg font-mono font-bold"
                  shimmerColor="#ec4899"
                  onClick={() => setIsContactModalOpen(true)}
                  data-oid="2_b2gwq"
                >
                  <div className="text-2xl" data-oid="6rsf11-">
                    🖕
                  </div>
                  <span
                    className="text-green-400 whitespace-nowrap"
                    data-oid="1goem24"
                  >
                    Want a .EDU e-mail?
                  </span>
                  <ArrowRight
                    className="w-5 h-5 text-green-400"
                    data-oid="4:of.lp"
                  />
                </HackerShimmerButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <ManifestoCards data-oid=".2yr7oh" />

      {/* Offers Section */}
      <section
        id="offers"
        className="relative z-10 py-16 px-4"
        data-oid="qq:z2ez"
      >
        <div className="container mx-auto" data-oid="vooyz3m">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="xd5inxu"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-green-400 font-mono"
              data-oid="4ihyes0"
            >
              <BinaryHoverText text="FREE ARSENAL" data-oid="cauti1a" />
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-mono"
              data-oid="v6p106q"
            >
              65+ vetted offers with eligibility and verification spelled out.
              No half-baked trials or coupon blogs—just gear you can actually
              redeem.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid=".mayiv5"
          >
            <IntegrationPills
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              data-oid="hboh8b0"
            />
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            data-oid="0n34gzb"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              data-oid="i-b6d4p"
            >
              {/* Animated border glow */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm"
                data-oid="crc__wz"
              />

              <motion.input
                type="text"
                placeholder="Search for offers..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
                className="relative w-full px-6 py-4 pr-14 bg-black/60 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:bg-black/80 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm font-mono transition-all duration-300 ease-out"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                data-oid="msy4oc5"
              />

              {/* Animated search icon */}
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{
                  rotate: searchTerm ? [0, 360] : 0,
                  scale: searchTerm ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeOut" },
                }}
                data-oid="earxivk"
              >
                <Zap
                  className="text-green-400 w-5 h-5 group-hover:text-green-300 transition-colors duration-300"
                  data-oid="ckqy729"
                />
              </motion.div>

              {/* Search results count indicator */}
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -bottom-8 left-0 text-sm text-gray-400 font-mono"
                  data-oid="za2t-5i"
                >
                  {filteredOffers.length} result
                  {filteredOffers.length !== 1 ? "s" : ""} found
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Offers Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            data-oid="y735.fb"
          >
            <AnimatedStats data-oid="iw1ln3h" />
            <EnhancedOfferGrid
              offers={filteredOffers}
              onOpenUseCases={handleOpenUseCases}
              data-oid="3lz2doh"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative z-10 py-32 px-4 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600"
        data-oid="mc2h_na"
      >
        <div className="container mx-auto text-center" data-oid="syz__.l">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="e0-7ku0"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-black font-mono"
              data-oid="fryd66:"
            >
              JOIN THE REBELLION
            </h2>
            <p
              className="text-xl text-black/80 mb-12 max-w-3xl mx-auto font-mono"
              data-oid="72up9:1"
            >
              Beat the paywalls, ship something real, and help other students do
              the same. Grab your .edu lifeline or fuel the hunt so we can keep
              this arsenal updated.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="5a286p4"
            >
              <motion.button
                className="bg-black text-green-400 font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                data-oid="8i.i751"
              >
                <Terminal className="w-5 h-5" data-oid="m77j7rc" />
                Request .edu Access
              </motion.button>
              <motion.button
                className="border-2 border-black text-black font-bold px-8 py-4 rounded-lg hover:bg-black hover:text-green-400 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-oid="ia7nih3"
              >
                <Link
                  href="/donate"
                  className="flex items-center gap-2"
                  data-oid="icwlktw"
                >
                  <Heart className="w-5 h-5" data-oid="s0_jabf" />
                  Support the Cause
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <TerminalFAQ data-oid="0lggyi_" />

      {/* Footer */}
      <footer
        className="relative z-10 py-16 px-4 border-t border-green-500/20 bg-gradient-to-t from-black/90 to-transparent"
        data-oid="4r4ov__"
      >
        <div className="absolute inset-0 z-0 opacity-50" data-oid="8jzer.8">
          <FaultyTerminal data-oid="bfrhv8." />
        </div>
        <div className="container mx-auto relative z-10" data-oid="okbft7b">
          {/* Animated Header */}
          <div className="text-center mb-12" data-oid="6nwkmhm">
            <motion.div
              className="text-green-400 font-mono text-lg mb-4"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              data-oid="c8:m-q_"
            >
              <span className="text-green-400" data-oid="p2a_9co">
                {">"}
              </span>{" "}
              SYSTEM STATUS:{" "}
              <span className="text-cyan-400" data-oid="_wwvm1h">
                OPERATIONAL
              </span>
              <span className="animate-pulse ml-2" data-oid="ztxnwwv">
                █
              </span>
            </motion.div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            data-oid="4vgdr3:"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
              data-oid="9b5h0-:"
            >
              <div className="flex items-center gap-3 mb-4" data-oid="ji6bhl0">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  data-oid="l_l5f86"
                >
                  <Image
                    src="/terrorist_logo.png"
                    alt="Terrorist Logo"
                    width={32}
                    height={32}
                    className="rounded-full border border-green-400/50"
                    data-oid="vya_44k"
                  />
                </motion.div>
                <span
                  className="text-xl font-bold text-green-400 font-mono group-hover:text-green-300 transition-colors"
                  data-oid="7.q7b8:"
                >
                  FTERRORIST
                </span>
              </div>
              <p
                className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors"
                data-oid="9xou4ii"
              >
                Digital anarchist fighting educational inequality through free
                access to premium tools.
              </p>
              <div
                className="mt-4 text-xs font-mono text-green-400/60"
                data-oid="xz7z4-v"
              >
                <span className="text-cyan-400" data-oid="uox2hn:">
                  {">"}
                </span>{" "}
                uptime: 99.9% <br data-oid="w4tgkas" />
                <span className="text-cyan-400" data-oid="qd1bw__">
                  {">"}
                </span>{" "}
                mode: rebellion
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
              data-oid="svyey9m"
            >
              <h4
                className="text-lg font-bold text-white mb-4 font-mono group-hover:text-green-400 transition-colors"
                data-oid="hh:7n70"
              >
                <span className="text-green-400" data-oid="ng.ksqq">
                  {">"}
                </span>{" "}
                Navigation
              </h4>
              <div className="space-y-3" data-oid="mgq7pld">
                {[
                  { href: "#manifesto", label: "Manifesto" },
                  { href: "#offers", label: "Free Arsenal" },
                  { href: "/donate", label: "Donate", external: true },
                ].map((link, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="group/link"
                    data-oid="gqktcnj"
                  >
                    {link.external ? (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-green-400 transition-colors block font-mono text-sm group-hover/link:text-green-300"
                        data-oid="ip22iko"
                      >
                        <span
                          className="text-green-400/60 group-hover/link:text-green-400"
                          data-oid="wfcgb6f"
                        >
                          $
                        </span>{" "}
                        cd {link.label.toLowerCase()}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-green-400 transition-colors block font-mono text-sm group-hover/link:text-green-300"
                        data-oid="tl-5oul"
                      >
                        <span
                          className="text-green-400/60 group-hover/link:text-green-400"
                          data-oid="0ypofhz"
                        >
                          $
                        </span>{" "}
                        cd {link.label.toLowerCase()}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-green-500/20 bg-black/50 hover:border-green-400/40 transition-all duration-300"
              data-oid="4.y4cw7"
            >
              <h4
                className="text-lg font-bold text-white mb-4 font-mono group-hover:text-green-400 transition-colors"
                data-oid="muhw7ua"
              >
                <span className="text-green-400" data-oid="lecvb0m">
                  {">"}
                </span>{" "}
                Core Values
              </h4>
              <div className="flex flex-wrap gap-2" data-oid="3zl2vhr">
                {[
                  { label: "ANTI-CORPORATE", color: "green" },
                  { label: "ANTI-PAYWALL", color: "red" },
                  { label: "PRO-FREEDOM", color: "blue" },
                  { label: "COMMUNITY-DRIVEN", color: "purple" },
                ].map((principle, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className={`px-3 py-1 bg-${principle.color}-500/20 border border-${principle.color}-500/30 rounded text-${principle.color}-400 text-xs font-mono cursor-pointer hover:bg-${principle.color}-500/30 transition-all duration-300`}
                    data-oid="yqjislq"
                  >
                    {principle.label}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 text-xs font-mono" data-oid="po7zecv">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-400/60"
                  data-oid="kgp-qso"
                >
                  <span className="text-cyan-400" data-oid="g491zco">
                    {">"}
                  </span>{" "}
                  status: active rebellion
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pt-8 border-t border-green-500/20"
            animate={{
              borderColor: [
                "rgba(34, 197, 94, 0.2)",
                "rgba(34, 197, 94, 0.4)",
                "rgba(34, 197, 94, 0.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            data-oid="x41ptyc"
          >
            <div className="text-center" data-oid="qlbqo1u">
              <motion.p
                className="text-sm text-gray-600 font-mono mb-2"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                data-oid="pazz5p:"
              >
                <span className="text-green-400" data-oid="5dhn6sq">
                  $
                </span>{" "}
                rm -rf educational_barriers && echo "Mission Complete"
                <span
                  className="animate-pulse text-cyan-400 ml-2"
                  data-oid="z-.m4at"
                >
                  █
                </span>
              </motion.p>
              <motion.div
                className="text-xs font-mono text-green-400/40"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                data-oid="epr3wvz"
              >
                <span className="text-cyan-400" data-oid="mbqbhlb">
                  {">"}
                </span>{" "}
                breaking educational barriers since 2024{" "}
                <br data-oid="4873vs_" />
                <span className="text-cyan-400" data-oid="p7i9-oo">
                  {">"}
                </span>{" "}
                join the digital revolution
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>

      <OfferUseCasesModal
        offer={useCaseOffer}
        isOpen={isUseCaseModalOpen}
        onClose={handleCloseUseCases}
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        data-oid="7969_2:"
      />
    </div>
  );
}
