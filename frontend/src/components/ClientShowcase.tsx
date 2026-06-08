"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Star, ArrowRight, Activity } from "lucide-react";

interface ClientData {
  id: string;
  name: string;
  website: string;
  traffic: string;
  leads: string;
  reviews: string;
  visibility: string;
  initials: string;
  desc: string;
}

const staticClients: ClientData[] = [
  {
    id: "1",
    name: "Science Squad",
    website: "https://sciencesquad.com",
    traffic: "+420% Organic Traffic",
    leads: "12x Leads Generated",
    reviews: "4.9 Star Rating (120+)",
    visibility: "#1 Google Maps Position",
    initials: "SS",
    desc: "An elite educational coaching center dominating high-intent student searches.",
  },
  {
    id: "2",
    name: "Urban Cafe",
    website: "https://urbancafe.coffee",
    traffic: "+280% Foot Traffic",
    leads: "8.5x Daily Bookings",
    reviews: "4.8 Star Rating (340+)",
    visibility: "Top 3 Local Pack",
    initials: "UC",
    desc: "A busy metropolitan coffee shop and bakery ranking on Google Maps for tourist searches.",
  },
  {
    id: "3",
    name: "Vitals Pharmacy",
    website: "https://vitalspharmacy.com",
    traffic: "+180% Search Impressions",
    leads: "6.2x Prescription Calls",
    reviews: "4.9 Star Rating (200+)",
    visibility: "#1 Near Me Searches",
    initials: "VP",
    desc: "A community-focused local pharmacy ranking first for medical prescription lookups.",
  },
  {
    id: "4",
    name: "Starlight Salon",
    website: "https://starlightbeauty.com",
    traffic: "+310% Online Bookings",
    leads: "9.8x Customer Leads",
    reviews: "4.7 Star Rating (410+)",
    visibility: "#1 Salon in Area",
    initials: "SS",
    desc: "A luxury beauty salon booking appointments 24/7 through Google Maps.",
  },
];

export default function ClientShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll inside the component
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Transform scroll progress to horizontal translation (X axis)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-primary-bg">
      {/* Sticky outer frame */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Title / Info */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-bronze" />
              CASE STUDIES
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#F8F8F8]">
              CLIENT SHOWCASE
            </h2>
          </div>
          <span className="text-xs text-gray-text/60 tracking-wider flex items-center gap-1.5">
            Scroll down to explore <ArrowRight className="w-3.5 h-3.5 animate-bounce" />
          </span>
        </div>

        {/* Horizontal Scroll Window */}
        <div className="relative">
          {/* Gradient shadows on edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-bg to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-bg to-transparent pointer-events-none z-10" />

          {/* Scrolling horizontal container */}
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[160vw] md:w-[150vw]">
            {staticClients.map((client) => (
              <div
                key={client.id}
                className="w-[320px] md:w-[420px] shrink-0 glass-panel border border-border-color rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[360px] md:h-[400px] relative group hover:border-bronze/40 transition-colors duration-300"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-bronze/5 blur-[40px] pointer-events-none group-hover:bg-bronze/10 transition-all duration-300" />
                
                <div>
                  <div className="flex justify-between items-start">
                    {/* Initials Avatar Logo */}
                    <div className="w-12 h-12 rounded-2xl bg-secondary-bg border border-border-color flex items-center justify-center font-heading font-bold text-light-bronze text-lg shadow-md group-hover:border-bronze/50 transition-colors">
                      {client.initials}
                    </div>

                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#F8F8F8] mt-6">
                    {client.name}
                  </h3>
                  <p className="text-gray-text text-xs md:text-sm mt-2 leading-relaxed">
                    {client.desc}
                  </p>
                </div>

                {/* Metrics list */}
                <div className="grid grid-cols-2 gap-4 border-t border-border-color/60 pt-6 mt-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-text/50">Traffic Impact</span>
                    <p className="text-sm font-semibold text-light-bronze mt-0.5">{client.traffic}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-text/50">Leads Growth</span>
                    <p className="text-sm font-semibold text-champagne mt-0.5">{client.leads}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-text/50">Reputation</span>
                    <p className="text-sm font-semibold text-[#F8F8F8] mt-0.5">{client.reviews}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-text/50">Search Position</span>
                    <p className="text-sm font-semibold text-bronze mt-0.5">{client.visibility}</p>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
