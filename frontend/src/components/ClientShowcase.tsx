"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Globe, Star, Users, ArrowRight, Activity } from "lucide-react";

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

export default function ClientShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clients, setClients] = useState<ClientData[]>([]);

  // Fetch clients from our Express API on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/showcase")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          // Add initials and description fields for display
          const formatted = resData.data.map((c: any) => {
            const initials = c.name.split(" ").map((n: string) => n[0]).join("");
            let desc = "";
            if (c.name.includes("Science")) desc = "An elite educational coaching center dominating high-intent student searches.";
            else if (c.name.includes("Urban")) desc = "A busy metropolitan coffee shop and bakery ranking on Google Maps for tourist searches.";
            else if (c.name.includes("Vitals")) desc = "A community-focused local pharmacy ranking first for medical prescription lookups.";
            else if (c.name.includes("Starlight")) desc = "A luxury beauty salon booking appointments 24/7 through Google Maps.";
            else desc = "A growing business optimized for peak local market search volume.";

            return { ...c, initials, desc };
          });
          setClients(formatted);
        }
      })
      .catch((err) => {
        console.error("API error, falling back to static clients:", err);
        // Fallback static data if backend is not running yet
        setClients([
          {
            id: "1",
            name: "Science Squad Dankuni",
            website: "https://science-squad-dankuni.localo.site/",
            traffic: "+230% Organic Visibility",
            leads: "3x Leads Generated",
            reviews: "5.0 Star Rating (30+)",
            visibility: "#1 Google Maps Position",
            initials: "SS",
            desc: "Science Squad Dankuni provides expert coaching for students seeking academic excellence in Dankuni."
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
            desc: "A busy metropolitan coffee shop and bakery ranking on Google Maps for tourist searches."
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
            desc: "A community-focused local pharmacy ranking first for medical prescription lookups."
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
            desc: "A luxury beauty salon booking appointments 24/7 through Google Maps."
          }
        ]);
      });
  }, []);

  // Track scroll inside the component
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Transform scroll progress to horizontal translation (X axis)
  // We have 4 cards, so we need to scroll them horizontally.
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
            {clients.map((client) => (
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
