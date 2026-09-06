/* ─── SVG Status Bar Icons ─── */

function CellularIcon() {
  // 4 ascending bars, left-to-right (small → large), last bar dim = not full signal
  return (
    <svg width="14" height="11" viewBox="0 0 17 11" fill="none">
      <rect x="0" y="8" width="3" height="3" rx="0.5" fill="white" />
      <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="white" />
      <rect x="9" y="2" width="3" height="9" rx="0.5" fill="white" />
      <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="white" opacity="0.35" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 16 12" fill="white">
      <path d="M8 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
      <path d="M4.93 7.82a4.38 4.38 0 0 1 6.14 0" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M2.1 5a8.28 8.28 0 0 1 11.8 0" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <div className="flex items-center gap-[2px]">
      <div className="relative w-[20px] h-[9px] border border-white/80 rounded-[2.5px]">
        {/* Fill at ~76% */}
        <div
          className="absolute top-[1px] left-[1px] bottom-[1px] rounded-[1.5px] bg-white"
          style={{ width: "74%" }}
        />
        {/* Percentage text inside */}
        <span className="absolute inset-0 flex items-center justify-center text-[5.5px] font-bold text-black/70 leading-none">
          76
        </span>
      </div>
      {/* Battery nub */}
      <div className="w-[1.5px] h-[4px] bg-white/80 rounded-r-[1px]" />
    </div>
  );
}


export default function PhoneMockup() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center py-4"
    >
      {/* Ambient glow behind phone */}
      <div className="absolute w-72 h-72 rounded-full bg-bronze/15 blur-[80px] pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-light-bronze/10 blur-[60px] pointer-events-none translate-y-20" />

      {/* Phone */}
      <div
        className="relative z-10"
      >
        <div
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

            {/* ─── Status Bar (matching reference) ─── */}
            <div className="absolute top-[11px] left-0 right-0 flex justify-between items-center px-[22px] z-10">
              {/* Left: Time */}
              <span className="text-[10px] text-white font-semibold leading-none tracking-tight">
                5:13
              </span>

              {/* Right: Cellular + WiFi + Battery */}
              <div className="flex items-center gap-[5px]">
                <CellularIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            {/* ─── Screen Content — Google Search Results ─── */}
            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-[#1F1F1F]">
              <div className="flex flex-col h-full pt-[38px]">
                {/* Google Header */}
                <div className="flex items-center justify-between px-4 pb-2">
                  <span
                    className="text-[14px] font-medium tracking-tight"
                    style={{
                      background:
                        "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Google
                  </span>
                  <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center overflow-hidden border border-amber-700/50">
                    <span className="text-[9px] text-white font-bold">S</span>
                  </div>
                </div>

                {/* Search Bar */}
                <div
                  className="mx-3 mb-2 px-3 py-[6px] bg-[#303134] rounded-full flex items-center gap-2"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA0A6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="text-[9px] text-[#E8EAED] flex-1 truncate">
                    best coaching centre in j...
                  </span>
                  <div className="flex items-center gap-2">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>

                {/* Category Tabs */}
                <div
                  className="flex gap-3 px-3 pb-2 border-b border-[#3C4043] text-[8px] overflow-hidden"
                >
                  <span className="text-[#9AA0A6] whitespace-nowrap">
                    AI Mode
                  </span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">All</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">Maps</span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">
                    Forums
                  </span>
                  <span className="text-[#8AB4F8] whitespace-nowrap font-semibold border-b border-[#8AB4F8] pb-1.5">
                    Places
                  </span>
                  <span className="text-[#9AA0A6] whitespace-nowrap">
                    Short vi...
                  </span>
                </div>

                {/* Search Results — Scrollable */}
                <div className="flex-1 overflow-y-auto px-3 pt-2 space-y-1">
                  {/* Result 1 — Science Squad (highlighted #1) */}
                  <div
                    className="relative p-2 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,94,60,0.12) 0%, rgba(212,163,115,0.06) 100%)",
                      border: "1px solid rgba(139,94,60,0.2)",
                    }}
                  >
                    {/* #1 Badge */}
                    <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-bronze to-light-bronze flex items-center justify-center shadow-md">
                      <span className="text-[7px] text-white font-bold">
                        #1
                      </span>
                    </div>

                    <p className="text-[10px] font-semibold text-[#E8EAED] leading-tight pr-4">
                      Science Squad | Best Coaching Centre...
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED] font-medium">
                        4.9
                      </span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(158)</span>
                      <span className="text-[7px] text-[#9AA0A6]">
                        · Coaching Center
                      </span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 5 pm · 2F, 29/A, Raja SC Mullick Rd · 3.6
                      k...
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">
                      3+ years in business
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">
                      On-site services · Online classes
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      <ActionBtn icon="📞" label="Call" />
                      <ActionBtn icon="🧭" label="Directions" />
                      <ActionBtn icon="🌐" label="Website" />
                      <ActionBtn icon="💬" label="Text" />
                    </div>
                  </div>

                  {/* Result 2 — Excellent Tutorial */}
                  <div
                    className="p-2 border-t border-[#3C4043]"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] font-semibold text-[#E8EAED] leading-tight">
                        Excellent Tutorial - Jadavpur
                      </p>
                      <span className="text-[8px] text-[#9AA0A6]">⋮</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED]">4.5</span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(316)</span>
                      <span className="text-[7px] text-[#9AA0A6]">
                        · Banking entrance coaching centre
                      </span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 7 pm · 2nd Floor, 16B, Central Rd,
                      opposit...
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">
                      7+ years in business
                    </p>
                    <p className="text-[7px] text-[#9AA0A6]">
                      On-site services
                    </p>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      <ActionBtn icon="📞" label="Call" />
                      <ActionBtn icon="🧭" label="Directions" />
                      <ActionBtn icon="🌐" label="Website" />
                      <ActionBtn icon="💬" label="Wha..." />
                    </div>
                  </div>

                  {/* Result 3 — Tutelage (partial) */}
                  <div
                    className="p-2 border-t border-[#3C4043]"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] font-semibold text-[#E8EAED] leading-tight">
                        Tutelage – Coaching Center by Dr. So...
                      </p>
                      <span className="text-[8px] text-[#9AA0A6]">⋮</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] text-[#E8EAED]">5.0</span>
                      <span className="text-[8px] text-amber-400">★</span>
                      <span className="text-[7px] text-[#9AA0A6]">(12)</span>
                      <span className="text-[7px] text-[#9AA0A6]">
                        · Education center
                      </span>
                    </div>
                    <p className="text-[7px] text-[#34A853] mt-0.5">
                      Open · Closes 10 pm · Flat No 4B, 10/94, near 10 No
                      Pu...
                    </p>
                    <p className="text-[7px] text-[#9AA0A6] italic leading-tight mt-0.5">
                      &quot;Where Concepts Become Clear, Confidence Grows, and
                      Results Speak!&quot;
                    </p>
                    <div className="flex gap-1 mt-1.5">
                      <ActionBtn icon="🧭" label="Directions" />
                      <ActionBtn icon="📤" label="Share" />
                    </div>
                  </div>
                </div>

                {/* Bottom Nav Bar */}
                <div
                  className="flex justify-around items-center px-2 py-1.5 border-t border-[#3C4043] bg-[#1F1F1F]"
                >
                  <NavItem icon="🏠" label="Home" />
                  <NavItem icon="🔍" label="Search" active />
                  <NavItem icon="🔔" label="Notifications" badge />
                  <NavItem icon="⚙️" label="Activity" />
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center py-1 bg-[#1F1F1F]">
                  <div className="w-[80px] h-[3px] bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "THIS CAN BE YOU" — OUTSIDE the phone, on the website */}
      <div
        className="relative z-10 mt-6 flex flex-col items-center"
      >
        {/* Animated Upward Arrow */}
        <div
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
        </div>

        <p className="text-[15px] md:text-[17px] font-heading font-bold text-white-text tracking-[0.2em] uppercase">
          This Can Be You
        </p>
      </div>
    </div>
  );
}

/* ─── Small reusable components for the phone UI ─── */

function ActionBtn({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-0.5 px-[6px] py-[2.5px] rounded-full border border-[#5F6368] bg-[#303134]">
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
        className={`text-[6px] ${
          active ? "text-[#8AB4F8] font-semibold" : "text-[#9AA0A6]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
