"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  command: string;
  response: string;
}

const faqData: FAQItem[] = [
  {
    command: "what is freebie terrorist?",
    response:
      "Freebie Terrorist is a live, curated list of 100% free offers for students, including software, SaaS, and educational tools. Unlike coupon sites, we focus on truly free resources, updated automatically via our scraper.",
  },
  {
    command: "how do i get these offers?",
    response:
      "Simply verify that you are an enrolled student with a valid .edu (or equivalent) email. Some offers may also ask for a student ID or class schedule to confirm eligibility. Once verified, you can access all available offers instantly.",
  },
  {
    command: "why should i use this site instead of others?",
    response:
      "Who else, besides Freebie Terrorist, would share all these freebies with you while giving the middle finger to corporate and academia?",
  },
  {
    command: "who are you really?",
    response: "I am the ghost in the shell.",
  },
];

export default function TerminalFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFAQ = faqData[currentIndex];
    let commandIndex = 0;
    let responseIndex = 0;

    // Reset states
    setDisplayedCommand("");
    setDisplayedResponse("");
    setShowResponse(false);

    // Type command
    const commandInterval = setInterval(() => {
      if (commandIndex <= currentFAQ.command.length) {
        setDisplayedCommand(currentFAQ.command.slice(0, commandIndex));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        setShowResponse(true);

        // Start typing response after a delay
        setTimeout(() => {
          const responseInterval = setInterval(() => {
            if (responseIndex <= currentFAQ.response.length) {
              setDisplayedResponse(currentFAQ.response.slice(0, responseIndex));
              responseIndex++;
            } else {
              clearInterval(responseInterval);

              // Move to next FAQ after a pause
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % faqData.length);
              }, 3000);
            }
          }, 30);
        }, 500);
      }
    }, 80);

    return () => clearInterval(commandInterval);
  }, [currentIndex]);

  return (
    <section
      id="faq"
      className="relative z-10 py-20 px-4 bg-black/50"
      data-oid="13-9bcs"
    >
      <div className="container mx-auto max-w-4xl" data-oid="2uo.b-v">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="pt:lzse"
        >
          <h2
            className="text-4xl md:text-5xl font-black font-mono text-green-400 mb-4"
            data-oid="7wzwphi"
          >
            SYSTEM.FAQ
          </h2>
          <p className="text-gray-400 font-mono" data-oid=".qe0.6g">
            Interactive terminal session - ask the system
          </p>
        </motion.div>

        <motion.div
          className="bg-black border border-green-500/30 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          data-oid="4ox5z6d"
        >
          {/* Terminal Header */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-green-500/30"
            data-oid="o0f05ek"
          >
            <div className="flex items-center gap-2" data-oid="tc88gpy">
              <div
                className="w-3 h-3 rounded-full bg-red-500"
                data-oid="c4a7svs"
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500"
                data-oid="w-lfv8u"
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-green-500"
                data-oid="kwhh_x9"
              ></div>
            </div>
            <div
              className="text-green-400 font-mono text-sm"
              data-oid="1u7crp1"
            >
              freebie-terrorist-system v2.1.0
            </div>
          </div>

          {/* Terminal Content */}
          <div
            className="p-6 font-mono text-sm bg-black min-h-[400px]"
            data-oid="w:i1pne"
          >
            {/* Welcome message */}
            <div className="text-green-400 mb-4" data-oid="1587y.w">
              <span className="text-gray-500" data-oid="3n6glj9">
                // Welcome to Freebie Terrorist FAQ System
              </span>
              <br data-oid="whue5px" />
              <span className="text-gray-500" data-oid="urn9vv.">
                // Type your questions below
              </span>
              <br data-oid="rj.r1ba" />
              <span className="text-gray-500" data-oid="nfy8.qe">
                // ----------------------------------------
              </span>
            </div>

            {/* Current FAQ Display */}
            <div className="space-y-4" data-oid="1dr2h-k">
              {/* User command */}
              <div className="flex items-start gap-2" data-oid="si1zdx7">
                <span
                  className="text-green-400 flex-shrink-0"
                  data-oid="0-wvr6s"
                >
                  user@freebie-terrorist:~$
                </span>
                <span className="text-white" data-oid="jkh.w8q">
                  {displayedCommand}
                  {!showResponse && showCursor && (
                    <span className="text-green-400" data-oid="q:u5eul">
                      █
                    </span>
                  )}
                </span>
              </div>

              {/* System response */}
              <AnimatePresence data-oid="za.ymnq">
                {showResponse && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-2 mt-2"
                    data-oid="o4sg8u3"
                  >
                    <span
                      className="text-blue-400 flex-shrink-0"
                      data-oid="zd5s3:d"
                    >
                      system:
                    </span>
                    <span
                      className="text-gray-300 leading-relaxed"
                      data-oid="q2s2_3r"
                    >
                      {displayedResponse}
                      {showCursor && (
                        <span className="text-green-400" data-oid="vtgr2h6">
                          █
                        </span>
                      )}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8" data-oid="kfcau64">
              {faqData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-green-400" : "bg-gray-600"
                  }`}
                  data-oid="4tlk.8q"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
