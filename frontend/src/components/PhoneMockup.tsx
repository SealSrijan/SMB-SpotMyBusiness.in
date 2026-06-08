"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function useIndianTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Convert to IST (UTC+5:30)
      const istOffset = 5.5 * 60 * 60 * 1000;
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + istOffset);
      const hours = ist.getHours();
      const mins = ist.getMinutes().toString().padStart(2, "0");
      const h12 = hours % 12 || 12;
      setTime(`${h12}:${mins}`);
    };

    update();
    const interval = setInterval(update, 10000); // update every 10s
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function PhoneMockup() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const indiaTime = useIndianTime();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMousePos({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center py-4">
      {/* Ambient glow behind phone */}
      <div className="absolute w-72 h-72 rounded-full bg-bronze/15 blur-[80px] pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-light-bronze/10 blur-[60px] pointer-events-none translate-y-20" />

      {/* Floating SEO Particles — MORE PROMINENT */}
      <FloatingParticles />

      {/* Floating Phone */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: mousePos.x * 12,
          y: mousePos.y * 8,
        }}
        className="relative z-10"
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotateY: [0, 1, 0],
            rotateX: [0, -0.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative"
        >
          {/* Phone glow ring */}
          <div className="absolute -inset-3 rounded-[52px] bg-gradient-to-b from-bronze/20 via-transparent to-light-bronze/10 blur-xl pointer-events-none opacity-60" />

          {/* iPhone Frame */}
          <div
            className="relative w-[260px] h-[530px] md:w-[280px] md:h-[570px] rounded-[44px] border-[3px] border-[#333] bg-black overflow-hidden"
            style={{
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(139,94,60,0.15), inset 0 0 0 1.5px #1a1a1a",
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-[13px] z-20" />

            {/* Status Bar */}
            <div className="absolute top-[10px] left-0 right-0 flex justify-between items-center px-6 z-10">
              <span className="text-[9px] text-white/70 font-semibold">
                {indiaTime || "9:41"}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex gap-[2px]">
                  <div className="w-[3px] h-[5px] bg-white/70 rounded-[1px]" />
                  <div className="w-[3px] h-[7px] bg-white/70 rounded-[1px]" />
                  <div className="w-[3px] h-[9px] bg-white/70 rounded-[1px]" />
                  <div className="w-[3px] h-[11px] bg-white/40 rounded-[1px]" />
                </div>
                <div className="w-[18px] h-[9px] border border-white/70 rounded-[2px] ml-1 relative">
                  <div className="absolute inset-[1.5px] right-[3px] bg-white/70 rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Screen Content — Google Search Results */}
            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-[#1F1F1F]">
              <div className="flex flex-col h-full pt-11">
                {/* Google Header */}
                <div className="flex items-center justify-between px-4 pt-2 pb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[14px] font-medium tracking-tight"
                    style={{
                      background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Google
                  </motion.span>
                  <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                    <span className="text-[9px] text-white font-bold">S</span>
                  </div>
                </div>

                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="mx-3 mb-2 px-3 py-[6px] bg-[#303134] rounded-full flex items-center gap-2"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="3" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="text-[9px] text-[#E8EAED] flex-1 truncate">
                    best coaching centre in j...
                  </span>
                  <div className="flex items-center gap-2">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="3" strokeLinecap="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="3" strokeLinecap="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-3 px-3 pb-2 border-b border-[#3C4043] text-[8px] overflow-hidden"
                >
                  <span className="text-[#9AA0A6] whitespace-nowrap">AI Mode</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">All</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">Maps</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">Forums</span>
                  <span className="text-[#8AB4F8] whitespace-nowrap font-semibold border-b border-[#8AB4F8] pb-1.5">Places</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">Short vi...</span>
                </motion.div>

                {/* Search Results — Scrollable */}
                <div className="flex-1 overflow-y-auto px-3 pt-2 space-y-2">
                  {/* Result 1 — Science Squad (highlighted #1) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="relative p-2 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(139,94,60,0.12) 0%, rgba(212,163,115,0.06) 100%)",
                      border: "1px solid rgba(139,94,60,0.2)",
                    }}
                  >
                    {/* #1 Badge */}
                    <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-bronze to-light-bronze flex items-center justify-center shadow-md">
                      <span className="text-[7px] text-white font-bold">#1</span>
                    </div>

                    <h4 className="text-[10px] font-semibold text-[#E8EAED] leading-tight">
                      Science Squad | Best Coaching Centre...
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED] font-medium">4.9</span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(158)</span>
                      <span className="text-[7px] text-[#9AA0A6]">· Coaching Center</span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 5 pm · 2F, 29/A, Raja SC...
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">3+ years in business</p>
                    <p className="text-[7px] text-[#9AA0A6]">On-site services · Online classes</p>

                    {/* Action Buttons */}
                    <div className="flex gap-1.5 mt-1.5">
                      <ActionBtn icon="📞" label="Call" />
                      <ActionBtn icon="🧭" label="Directions" />
                      <ActionBtn icon="🌐" label="Website" />
                      <ActionBtn icon="💬" label="Text" />
                    </div>
                  </motion.div>

                  {/* Result 2 — Excellent Tutorial */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="p-2 border-t border-[#3C4043]"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-[10px] font-semibold text-[#E8EAED] leading-tight">
                        Excellent Tutorial - Jadavpur
                      </h4>
                      <span className="text-[8px] text-[#9AA0A6]">⋮</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED]">4.5</span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(316)</span>
                      <span className="text-[7px] text-[#9AA0A6]">· Banking entrance</span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 7 pm · 2nd Floor, 16B...
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">7+ years in business</p>
                    <div className="flex gap-1.5 mt-1.5">
                      <ActionBtn icon="📞" label="Call" />
                      <ActionBtn icon="🧭" label="Directions" />
                      <ActionBtn icon="🌐" label="Website" />
                    </div>
                  </motion.div>

                  {/* Result 3 — Tutelage (partial) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                    className="p-2 border-t border-[#3C4043]"
                  >
                    <h4 className="text-[10px] font-semibold text-[#E8EAED] leading-tight">
                      Tutelage – Coaching Center by Dr. So...
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED]">5.0</span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(12)</span>
                      <span className="text-[7px] text-[#9AA0A6]">· Education center</span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 10 pm · Flat No 4B...
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Nav Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="flex justify-around items-center px-2 py-1.5 border-t border-[#3C4043] bg-[#1F1F1F]"
                >
                  <NavItem icon="🏠" label="Home" />
                  <NavItem icon="🔍" label="Search" active />
                  <NavItem icon="🔔" label="Notifs" badge />
                  <NavItem icon="⚙️" label="Activity" />
                </motion.div>

                {/* Home Indicator */}
                <div className="flex justify-center py-1 bg-[#1F1F1F]">
                  <div className="w-[80px] h-[3px] bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* "THIS CAN BE YOU" — OUTSIDE the phone, on the website */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.7 }}
        className="relative z-10 mt-6 flex flex-col items-center"
      >
        {/* Animated Upward Arrow */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="mb-2"
        >
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(212,163,115,0.4)]"
          >
            <path
              d="M12 28V4M12 4L4 12M12 4L20 12"
              stroke="url(#arrowGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="arrowGrad" x1="12" y1="28" x2="12" y2="4">
                <stop stopColor="#8B5E3C" />
                <stop offset="1" stopColor="#E7D3B0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <p className="text-[15px] md:text-[17px] font-heading font-bold text-heading tracking-[0.2em] uppercase">
          This Can Be You
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-bronze/60" />
          <span className="text-[9px] text-bronze/80 tracking-[0.25em] uppercase font-medium">
            Powered by SMB
          </span>
          <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-bronze/60" />
        </div>
      </motion.div>
    </div>
  );
}

/* Small reusable components for the phone UI */

function ActionBtn({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-0.5 px-2 py-[3px] rounded-full border border-[#5F6368] bg-[#303134]">
      <span className="text-[7px]">{icon}</span>
      <span className="text-[7px] text-[#E8EAED]">{label}</span>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
  badge,
}: {
  icon: string;
  label: string;
  active?: boolean;
  badge?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5 relative">
      <span className="text-[11px]">{icon}</span>
      {badge && (
        <div className="absolute -top-0.5 right-0 w-[8px] h-[8px] rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-[5px] text-white font-bold">3</span>
        </div>
      )}
      <span
        className={`text-[7px] ${
          active ? "text-[#8AB4F8] font-semibold" : "text-[#9AA0A6]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function FloatingParticles() {
  const particles = [
    { x: -140, y: -70, label: "Google Search", icon: "🔍", delay: 0 },
    { x: 150, y: -90, label: "Google Maps", icon: "📍", delay: 0.4 },
    { x: -120, y: 90, label: "Reviews", icon: "⭐", delay: 0.8 },
    { x: 160, y: 70, label: "Analytics", icon: "📊", delay: 1.2 },
    { x: -70, y: -140, label: "Traffic", icon: "📈", delay: 0.6 },
    { x: 90, y: 140, label: "Rankings", icon: "🏆", delay: 1.0 },
    { x: -160, y: 10, label: "Leads", icon: "👥", delay: 1.4 },
    { x: 140, y: -20, label: "Visibility", icon: "🌐", delay: 0.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-[45%] flex items-center gap-2 px-3 py-1.5 rounded-full border border-bronze/15 bg-secondary-bg/70 shadow-lg shadow-black/20"
          style={{ backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.85, 0.65, 0.85],
            scale: 1,
            x: [p.x, p.x + 12, p.x - 8, p.x],
            y: [p.y, p.y - 10, p.y + 6, p.y],
          }}
          transition={{
            delay: 1.2 + p.delay,
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="text-[14px]">{p.icon}</span>
          <span className="text-[9px] font-heading font-semibold text-gray-text tracking-wider uppercase hidden md:inline">
            {p.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
