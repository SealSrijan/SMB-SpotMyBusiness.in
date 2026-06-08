"use client";

import { Check, X, ShieldCheck, HelpCircle } from "lucide-react";
import { useState } from "react";

interface ComparisonRow {
  feature: string;
  smb: boolean | string;
  agency: boolean | string;
  tooltip: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Local Maps Optimization",
    smb: "Hyper-local grid optimization targeting individual zip codes.",
    agency: "Basic city-wide keyword setup.",
    tooltip: "We target specific geographic grids so you appear #1 in your immediate neighborhood, not just generally in the city."
  },
  {
    feature: "Real-time Dashboard (SaaS style)",
    smb: true,
    agency: false,
    tooltip: "Get instant access to live rank changes, traffic streams, and click-to-calls instead of waiting for a monthly PDF report."
  },
  {
    feature: "Automated Review Generation",
    smb: true,
    agency: "Manual requests (email templates).",
    tooltip: "We integrate directly with your payment or booking system to auto-request reviews immediately after a customer transaction."
  },
  {
    feature: "Advanced Schema & JSON-LD Injection",
    smb: true,
    agency: "Standard meta tags only.",
    tooltip: "We inject rich structured data schema directly into your code so Google understands your menus, hours, and physician listings."
  },
  {
    feature: "Contract Requirements",
    smb: "No contracts. Month-to-month, pay on results.",
    agency: "6-12 month lock-in agreements.",
    tooltip: "We earn your business every month. No locking you into long-term commitments that underdeliver."
  },
  {
    feature: "Pricing Model",
    smb: "Value-based flat rate with clear performance tiers.",
    agency: "Opaque retainer hours with hidden markups.",
    tooltip: "Simple, flat rates based on the size of your footprint, with zero billable hour tracking or markups."
  }
];

export default function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative bg-primary-bg overflow-hidden border-b border-border-color/30">
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full bg-bronze/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            THE DIFFERENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#F8F8F8]">
            SMB VS TYPICAL AGENCY
          </h2>
          <p className="text-gray-text text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            See how our automated systems, deep optimization methods, and performance-based contract model outperform traditional local SEO companies.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel border border-border-color rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-secondary-bg border-b border-border-color py-6 px-6 md:px-8 items-center text-xs md:text-sm font-heading font-bold uppercase tracking-wider">
            <div className="col-span-5 text-gray-text">Feature</div>
            <div className="col-span-4 text-light-bronze flex items-center gap-1.5 justify-center text-center">
              <ShieldCheck className="w-4 h-4 text-light-bronze" /> SPOT MY BUSINESS
            </div>
            <div className="col-span-3 text-gray-text/60 text-center">Typical Agency</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border-color/40">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`grid grid-cols-12 py-6 px-6 md:px-8 items-center transition-all duration-300 ${
                  hoveredRow === index ? "bg-white/[0.02] border-l-2 border-l-bronze" : ""
                }`}
              >
                {/* Feature Name & Tooltip */}
                <div className="col-span-5 flex items-center gap-2 pr-4">
                  <span className="text-xs md:text-sm font-heading font-semibold text-[#F8F8F8]">{row.feature}</span>
                  <div className="group relative cursor-pointer">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-text/40 hover:text-light-bronze transition-colors" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded bg-[#141414] border border-border-color text-[10px] text-gray-text leading-relaxed opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-30 text-center shadow-lg">
                      {row.tooltip}
                    </span>
                  </div>
                </div>

                {/* SMB Column */}
                <div className="col-span-4 text-center px-4 flex justify-center">
                  {typeof row.smb === "boolean" ? (
                    row.smb ? (
                      <div className="p-1 rounded-full bg-bronze/10 border border-bronze/40 text-light-bronze">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <X className="w-4 h-4 text-red-500/70" />
                    )
                  ) : (
                    <span className="text-xs text-light-bronze font-medium leading-relaxed">{row.smb}</span>
                  )}
                </div>

                {/* Typical Agency Column */}
                <div className="col-span-3 text-center px-4 flex justify-center">
                  {typeof row.agency === "boolean" ? (
                    row.agency ? (
                      <Check className="w-4 h-4 text-gray-text/50" />
                    ) : (
                      <div className="p-1 rounded-full bg-white/[0.03] border border-white/5 text-gray-text/40">
                        <X className="w-4 h-4" />
                      </div>
                    )
                  ) : (
                    <span className="text-xs text-gray-text/50 leading-relaxed">{row.agency}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
