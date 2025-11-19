"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { StudentOffer } from "@/lib/studentOffers";
import { buildUseCaseNarrative } from "@/lib/offerUseCases";

interface OfferUseCasesModalProps {
  offer: StudentOffer | null;
  isOpen: boolean;
  onClose: () => void;
}

const TYPING_INTERVAL = 15;

export function OfferUseCasesModal({
  offer,
  isOpen,
  onClose,
}: OfferUseCasesModalProps) {
  const narrative = useMemo(() => buildUseCaseNarrative(offer), [offer]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setDisplayedText("");
      setIsTyping(false);
      return;
    }

    setDisplayedText("");
    setIsTyping(true);

    let index = 0;
    const text = narrative.body;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index += 1;
      if (index > text.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, TYPING_INTERVAL);

    return () => clearInterval(interval);
  }, [isOpen, narrative.body]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-green-500/30 bg-black/95 p-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full border border-gray-700 bg-black/70 p-2 text-gray-200 transition hover:bg-gray-800"
                aria-label="Close use cases"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-green-400">
                    Use cases
                  </p>
                  <h3 className="text-2xl font-black text-white">
                    {narrative.heading}
                  </h3>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-4">
                  <pre className="min-h-[220px] whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-100">
                    {displayedText}
                    {isTyping && (
                      <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-green-400/80 align-middle" />
                    )}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
