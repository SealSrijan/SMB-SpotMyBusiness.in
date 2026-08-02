"use client";

import { ExternalLink, Activity } from "lucide-react";

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
    name: "Science Squad Dankuni",
    website: "https://science-squad-dankuni.localo.site/",
    traffic: "100% Organic Traffic",
    leads: "3x Leads Generated",
    reviews: "5.0 Star Rating (30+)",
    visibility: "#1 Google Maps Position",
    initials: "SS",
    desc: "Science Squad Dankuni provides expert coaching for students seeking academic excellence in Dankuni.",
  },
  {
    id: "2",
    name: "Bharat Relocators",
    website: "https://bharatrelocators.com/",
    traffic: "+200% Organic Traffic",
    leads: "4x Daily Bookings",
    reviews: "4.9 Star Rating (300+)",
    visibility: "Top 1 Relocators in Haltu",
    initials: "BR",
    desc: "Bharat Relocators is an award-winning moving and relocating company in Kolkata",
  },
  {
    id: "3",
    name: "Nayak Decorators and Caterer",
    website: "https://nayakcaterer.com/kolkata/caterers-in-behala",
    traffic: "+180% Search Impressions",
    leads: "5x Prescription Calls",
    reviews: "4.8 Star Rating (50+)",
    visibility: "#1 Near Me Searches",
    initials: "NDC",
    desc: "Nayak Decorators and Caterer in Behala is considered the best caterer in Behala.",
  },
  {
    id: "4",
    name: "Republic Packers and Movers",
    website: "https://republicpackers.com/kolkata-packers-movers-west-bengal",
    traffic: "+310% Online Bookings",
    leads: "10x Customer Leads",
    reviews: "4.7 Star Rating (600+)",
    visibility: "#1 Salon in Area",
    initials: "SS",
    desc: "Republic is Your Trusted Packers and Movers in Kolkata.",
  },
];

function ClientCard({ client }: { client: ClientData }) {
  return (
    <div className="w-[320px] md:w-[420px] shrink-0 glass-panel border border-border-color rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[360px] md:h-[400px] relative group hover:border-bronze/40 transition-colors duration-300">
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

        <h3 className="text-2xl font-heading font-bold text-heading mt-6">
          {client.name}
        </h3>
        <p className="text-gray-text text-xs md:text-sm mt-2 leading-relaxed">
          {client.desc}
        </p>
      </div>

      {/* Metrics list */}
      <div className="grid grid-cols-2 gap-4 border-t border-border-color/60 pt-6 mt-6">
        <div>
          <span className="text-[9px] uppercase tracking-wider text-gray-text/50">
            Traffic Impact
          </span>
          <p className="text-sm font-semibold text-light-bronze mt-0.5">
            {client.traffic}
          </p>
        </div>
        <div>
          <span className="text-[9px] uppercase tracking-wider text-gray-text/50">
            Leads Growth
          </span>
          <p className="text-sm font-semibold text-champagne mt-0.5">
            {client.leads}
          </p>
        </div>
        <div>
          <span className="text-[9px] uppercase tracking-wider text-gray-text/50">
            Reputation
          </span>
          <p className="text-sm font-semibold text-heading mt-0.5">
            {client.reviews}
          </p>
        </div>
        <div>
          <span className="text-[9px] uppercase tracking-wider text-gray-text/50">
            Search Position
          </span>
          <p className="text-sm font-semibold text-bronze mt-0.5">
            {client.visibility}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientShowcase() {
  // Triple the cards for seamless infinite marquee loop
  const items = [...staticClients, ...staticClients, ...staticClients];

  return (
    <section className="py-24 md:py-32 relative bg-primary-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />

      {/* Title / Info */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-bronze" />
            CASE STUDIES
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            CLIENT SHOWCASE
          </h2>
        </div>
        <span className="text-xs text-gray-text/60 tracking-wider flex items-center gap-1.5">
          Continuous scroll →
        </span>
      </div>

      {/* Horizontal Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edge masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-bg to-transparent pointer-events-none z-10" />

        {/* Scrolling row — left to right */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-8 px-4">
            {items.map((client, idx) => (
              <ClientCard key={`${client.id}-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
