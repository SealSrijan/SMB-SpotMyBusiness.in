"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isDone, setIsDone] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // Keep the ref updated (but don't trigger effect re-runs)
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // After 3.2s, mark as done, then call onComplete after exit animation (0.8s)
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []); // No dependency on onComplete — runs exactly once

  // When isDone flips to true, fire onComplete after exit animation
  useEffect(() => {
    if (isDone) {
      const exitTimer = setTimeout(() => {
        onCompleteRef.current();
      }, 800);
      return () => clearTimeout(exitTimer);
    }
  }, [isDone]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Ambient Glow */}
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-bronze/10 blur-[80px]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1.2], opacity: [0.3, 0.7, 0.5] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />

            {/* SVG Logo Outline Drawing */}
            <svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              {/* S shape monogram path */}
              <motion.path
                d="M 40 25 C 40 18, 60 18, 60 30 C 60 42, 40 42, 40 54 C 40 66, 60 66, 60 59"
                stroke="#8B5E3C"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* M shape monogram path */}
              <motion.path
                d="M 28 82 V 42 L 50 62 L 72 42 V 82"
                stroke="#D4A373"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              />
              {/* B shape monogram path */}
              <motion.path
                d="M 28 42 H 58 C 66 42, 66 59, 58 59 H 28 M 28 59 H 60 C 68 59, 68 82, 60 82 H 28 V 42"
                stroke="#E7D3B0"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
              />
            </svg>

            {/* Fading text with glow */}
            <motion.div
              className="mt-8 flex flex-col items-center z-10 text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold tracking-[0.25em] text-[#F8F8F8] uppercase">
                Spot My Business
              </h2>
              <span className="text-xs text-light-bronze tracking-[0.35em] uppercase mt-2 font-medium">
                Global SEO Partner
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
