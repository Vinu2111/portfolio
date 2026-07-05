"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "command", text: "$ git clone github.com/Vinu2111" },
  { type: "output", text: "Cloning into 'open-source-contributions'..." },
  { type: "blank", text: "" },
  { type: "command", text: "$ cd error-prone-support && mvn test" },
  { type: "success", text: "✅ PR #2275 merged by Rickie" },
  { type: "blank", text: "" },
  { type: "command", text: "$ cd NullAway && mvn verify" },
  { type: "success", text: "✅ PR #1546 merged by Manu Sridharan" },
  { type: "blank", text: "" },
  { type: "command", text: "$ cd logbook && ./gradlew test" },
  { type: "success", text: "✅ PR #2301 merged by lukasniemeier-zalando" },
  { type: "blank", text: "" },
  { type: "command", text: "$ cd adyen-java-api-library" },
  { type: "success", text: "✅ PR #1952 merged" },
  { type: "blank", text: "" },
  { type: "command", text: "$ sionna-visualizer --deploy" },
  { type: "success", text: "✅ Deployed → sionna-visualizer.vercel.app" },
];

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<
    { type: string; text: string; displayText: string }[]
  >([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Pause at the end, then restart
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setCycleKey((k) => k + 1);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalLines[currentLineIndex];

    if (currentLine.type === "blank") {
      setDisplayedLines((prev) => [
        ...prev,
        { type: "blank", text: "", displayText: "" },
      ]);
      setCurrentLineIndex((i) => i + 1);
      setCurrentCharIndex(0);
      return;
    }

    if (currentLine.type === "command") {
      // Typewriter effect for commands
      if (currentCharIndex === 0) {
        setDisplayedLines((prev) => [
          ...prev,
          { type: currentLine.type, text: currentLine.text, displayText: "" },
        ]);
      }

      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              displayText: currentLine.text.slice(0, currentCharIndex + 1),
            };
            return updated;
          });
          setCurrentCharIndex((c) => c + 1);
        }, 30 + Math.random() * 20);
        return () => clearTimeout(timeout);
      } else {
        // Command fully typed, move to next line after a pause
        const timeout = setTimeout(() => {
          setCurrentLineIndex((i) => i + 1);
          setCurrentCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // Output/success/review lines appear instantly after a small delay
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          {
            type: currentLine.type,
            text: currentLine.text,
            displayText: currentLine.text,
          },
        ]);
        setCurrentLineIndex((i) => i + 1);
        setCurrentCharIndex(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, cycleKey]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-gray-200";
      case "success":
        return "text-accent";
      case "review":
        return "text-amber-400";
      case "output":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="hidden lg:block w-full max-w-xl"
    >
      <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-accent/5">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-mono text-gray-500">
            vinayak@dev ~ /open-source
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm h-[340px] overflow-hidden">
          {displayedLines.map((line, i) => (
            <div key={`${cycleKey}-${i}`} className="min-h-[1.5rem]">
              {line.type === "blank" ? (
                <br />
              ) : (
                <span className={getLineColor(line.type)}>
                  {line.displayText}
                </span>
              )}
            </div>
          ))}
          {/* Blinking cursor */}
          {currentLineIndex < terminalLines.length && (
            <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-0.5 align-middle" />
          )}
          {currentLineIndex >= terminalLines.length && (
            <div className="min-h-[1.5rem]">
              <span className="text-gray-200">$ </span>
              <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
