"use client";

import { useEffect, useState } from "react";

export default function FaultyTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const terminalTexts = [
    "> INITIALIZING SYSTEM...",
    "> LOADING MODULES...",
    "> CONNECTING TO NETWORK...",
    "> AUTHENTICATING USER...",
    "> ACCESS GRANTED...",
    "> SCANNING FOR VULNERABILITIES...",
    "> BYPASSING SECURITY...",
    "> EXECUTING PAYLOAD...",
    "> TARGET ACQUIRED...",
    "> MISSION COMPLETE...",
    "> CLEANING TRACES...",
    "> DISCONNECTING...",
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (lineIndex >= terminalTexts.length) {
        lineIndex = 0;
        setLines([]);
        return;
      }

      const targetText = terminalTexts[lineIndex];

      if (!isDeleting) {
        if (charIndex < targetText.length) {
          currentText = targetText.slice(0, charIndex + 1);
          setCurrentLine(currentText);
          charIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 1000);
        }
      } else {
        if (charIndex > 0) {
          currentText = targetText.slice(0, charIndex - 1);
          setCurrentLine(currentText);
          charIndex--;
        } else {
          setLines((prev) => [...prev, targetText]);
          lineIndex++;
          isDeleting = false;
          charIndex = 0;
          setCurrentLine("");
        }
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" data-oid="udf-mxm">
      <div
        className="absolute top-20 left-8 w-96 h-64 bg-black/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-xs text-green-400 overflow-hidden"
        data-oid="xlv6kp2"
      >
        <div className="flex items-center gap-2 mb-2" data-oid="8:k9lo1">
          <div
            className="w-3 h-3 bg-red-500 rounded-full"
            data-oid="1zrcqke"
          ></div>
          <div
            className="w-3 h-3 bg-yellow-500 rounded-full"
            data-oid="lsluwl0"
          ></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full"
            data-oid="cituxyg"
          ></div>
        </div>
        <div className="space-y-1" data-oid="4a6cuvh">
          {lines.map((line, index) => (
            <div key={index} className="text-green-400/80" data-oid="3_qkmex">
              {line}
            </div>
          ))}
          <div className="text-green-400" data-oid="bzk8u9:">
            {currentLine}
            <span
              className={`${cursorVisible ? "opacity-100" : "opacity-0"}`}
              data-oid=".9sm0g8"
            >
              |
            </span>
          </div>
        </div>
      </div>

      {/* Glitch effects */}
      <div
        className="absolute top-40 right-20 w-64 h-48 bg-black/10 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 font-mono text-xs text-blue-400 overflow-hidden animate-pulse"
        data-oid="cxzji.5"
      >
        <div className="text-blue-400/60" data-oid="x_77qkq">
          <div data-oid="dd6wrf:">ERROR: CONNECTION LOST</div>
          <div data-oid="7cz.vcs">RETRYING...</div>
          <div className="mt-2" data-oid="_be5fgy">
            <div className="animate-pulse" data-oid="a4nr-lg">
              █ █ █ █ █ █ █ █
            </div>
            <div className="animate-pulse delay-100" data-oid="tjgsp4f">
              █ █ █ █ █ █ █ █
            </div>
            <div className="animate-pulse delay-200" data-oid="j7tpi-_">
              █ █ █ █ █ █ █ █
            </div>
          </div>
        </div>
      </div>

      {/* Matrix-style falling characters */}
      <div className="absolute inset-0 overflow-hidden" data-oid="-3.-w95">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
            data-oid="0cii5j1"
          >
            {String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96))}
          </div>
        ))}
      </div>
    </div>
  );
}
