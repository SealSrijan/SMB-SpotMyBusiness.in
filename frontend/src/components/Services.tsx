"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Utensils, Coffee, Stethoscope, Pill, GraduationCap, 
  BookOpen, Scissors, Armchair, Laptop, Building2, X, ArrowUpRight, Truck, UtensilsCrossed 
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  longDesc: string;
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Restaurants",
    icon: Utensils,
    shortDesc: "Drive hungry diners straight to your tables by ranking top for local searches.",
    longDesc: "For culinary businesses, local search ranking is the lifeblood of walk-in customers. We optimize your Google Business Profile, structure digital menus for search indexability, manage review pipelines, and build geo-located culinary authority. When users search for 'dining near me' or specific cuisines, your restaurant will be the prominent choice.",
    features: ["Digital Menu Schema Markup", "Local Cuisines Keyword Maps", "Aggregated Review Acceleration", "Food Directory Citation Auditing"],
  },
  {
    id: 2,
    title: "Cafes",
    icon: Coffee,
    shortDesc: "Be the neighborhood's absolute first choice for morning brews and study spots.",
    longDesc: "Coffee shops thrive on proximity and repeat habits. We place your cafe on the map by targeting micro-local neighborhoods, capturing mobile searches from travelers, and highlighting amenities like 'free Wi-Fi' or 'outdoor seating' directly in search results.",
    features: ["Local Coffee Keywords", "Hour & Amenity Optimizations", "User-Generated Photos Booster", "Google Maps Directions Optimization"],
  },
  {
    id: 3,
    title: "Doctor Clinics",
    icon: Stethoscope,
    shortDesc: "Help patients find specialized care instantly during critical searches.",
    longDesc: "Medical visibility demands trust and precision. We help clinics, general practitioners, and dental practices rank for critical near-me queries. We format schemas so patients see operating hours, phone numbers, and booking options immediately.",
    features: ["Medical & Doctor Schema", "HIPAA-Friendly Reputation Management", "Local Medical Citation Networks", "Condition-Specific SEO Pages"],
  },
  {
    id: 4,
    title: "Pharmacies",
    icon: Pill,
    shortDesc: "Ensure customers find your medical supply store immediately when needing prescriptions.",
    longDesc: "When customers need medication, speed and proximity are their only concerns. We optimize your pharmacy's listing for 'pharmacy near me' and 24/7 emergency drug store searches, ensuring your inventory and location are highlighted.",
    features: ["24/7 Open Hour Verification", "In-Stock Product Feeds", "Emergency/Prescription Search Optimization", "Local Directory Citations"],
  },
  {
    id: 5,
    title: "Coaching Institutes",
    icon: GraduationCap,
    shortDesc: "Boost enrollment rates by ranking highest for local tutors and colleges.",
    longDesc: "Parents and students looking for quality education search for nearby coaching centers and prep schools. We optimize your academy for academic subjects and test preparations, driving phone inquiries and campus tours.",
    features: ["Course and Subject Schemas", "Parent/Student Search Matching", "Local Success Story Showcases", "Interactive Local FAQ Schema"],
  },
  {
    id: 6,
    title: "Book Stores",
    icon: BookOpen,
    shortDesc: "Guide students and bibliophiles directly to your physical shop for reading materials.",
    longDesc: "Create an inviting presence for book lovers. We index your specialized book inventory, author signing events, and study spaces, making sure you are the go-to bookstore in your city.",
    features: ["Book Inventory Indexing", "Local Event Schema Markup", "Special Interest Book Queries", "Indie Bookstore Community SEO"],
  },
  {
    id: 7,
    title: "Salons",
    icon: Scissors,
    shortDesc: "Capture clients looking for hair, nail, or spa treatments in your immediate vicinity.",
    longDesc: "Beauty salons depend on local convenience. We list your treatments, stylist portfolios, and booking links directly on Google search results, keeping your calendars full and minimizing booking friction.",
    features: ["Booking Link Integration", "Stylist Portfolio Optimization", "Treatment Price Schemas", "Instagram-to-Maps Photo Syncing"],
  },
  {
    id: 8,
    title: "Furniture Stores",
    icon: Armchair,
    shortDesc: "Attract homeowners and office managers looking to buy furniture locally.",
    longDesc: "High-ticket furniture purchases almost always involve a showroom visit. We target high-intent keywords like 'luxury sofas' or 'office desks near me,' ensuring buyers see your showroom hours and address.",
    features: ["Showroom Location Listings", "High-Ticket Keyword Targeting", "Google Merchant Center Feeds", "Local Directions Optimization"],
  },
  {
    id: 9,
    title: "Electronics Stores",
    icon: Laptop,
    shortDesc: "Drive high-intent shoppers looking for specific gadgets or repair services.",
    longDesc: "When people want electronics, they compare prices and instant availability. We optimize your store listings for device purchases, repair services, and tech accessories, ensuring they drive to you instead of ordering online.",
    features: ["Repair Service Keyword Dominance", "Product Catalog Synchronization", "Instant Call & Directions Buttons", "Local Competitor Price Placements"],
  },
  {
    id: 10,
    title: "Local Businesses",
    icon: Building2,
    shortDesc: "Comprehensive SEO packages for general boutiques, service providers, and brands.",
    longDesc: "Whether you operate a locksmith service, dry cleaner, or specialty shop, our general Local Business SEO system establishes dominant organic authority in your zip codes to increase inbound calls.",
    features: ["Hyper-local Citation Auditing", "Localized Content Siloing", "Google Post & Update Campaigns", "Maps Ranking Audit & Tracking"],
  },
  {
  id: 11,
  title: "Packers and Movers",
  icon: Truck,
  shortDesc: "Specialized local SEO solutions designed exclusively for packers and movers to generate more relocation leads.",
  longDesc: "Our Packers and Movers SEO strategy helps relocation companies dominate Google Search and Google Maps in their service areas. From local keyword optimization and service-area targeting to reputation management and Google Business Profile optimization, we focus on increasing qualified leads, phone calls, and booking requests.",
  features: [
    "Service Area SEO Optimization",
    "Google Business Profile Management",
    "Moving & Relocation Keyword Targeting",
    "Maps Ranking & Competitor Tracking"
  ],
  },
  {
  id: 12,
  title: "Decorators & Caterers",
  icon: UtensilsCrossed,
  shortDesc: "Tailored local SEO solutions for decorators, event planners, and catering businesses to attract more event bookings.",
  longDesc: "Our Decorators & Caterers SEO strategy helps event service providers rank higher on Google Search and Google Maps. We optimize your online presence with location-specific keywords, service pages, Google Business Profile enhancements, and reputation management to generate more wedding, corporate, and special event inquiries.",
  features: [
    "Event & Wedding Keyword Optimization",
    "Google Business Profile Optimization",
    "Location-Based Service Page SEO",
    "Review & Maps Ranking Management"
  ],
},
];

// Interactive 3D Tilt Card
function TiltCard({ service, onClick }: { service: ServiceItem; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation angles (-15 to 15 deg)
    const rX = ((mouseY - height / 2) / (height / 2)) * -12;
    const rY = ((mouseX - width / 2) / (width / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);

    // Calculate glow position as percentage
    setGlowX((mouseX / width) * 100);
    setGlowY((mouseY / height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease" : "none",
      }}
      className="glass-card hover:border-bronze/50 cursor-pointer p-8 rounded-2xl flex flex-col justify-between h-[300px] relative group overflow-hidden border border-border-color"
    >
      {/* Interactive Radial Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 120px at ${glowX}% ${glowY}%, rgba(212, 163, 115, 0.15), transparent)`,
        }}
      />

      <div>
        <div className="flex justify-between items-start">
          <div className="p-3 bg-secondary-bg border border-border-color rounded-xl flex items-center justify-center text-light-bronze group-hover:text-champagne transition-colors duration-300">
            <IconComponent className="w-7 h-7" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-text/40 group-hover:text-light-bronze transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold text-heading mt-6 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-text text-sm mt-3 leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      <div className="text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase mt-4">
        Explore Blueprint →
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-primary-bg">
      {/* Background radial highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            INDUSTRIES WE DOMINATE
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t believe in boilerplate SEO. We have designed hyper-targeted maps optimization engines for specialized consumer industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <TiltCard
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Expandable Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary-bg/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass-panel w-full max-w-2xl rounded-2xl border border-border-color p-8 md:p-10 relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-bronze/10 blur-[50px] pointer-events-none" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-border-color bg-secondary-bg hover:border-bronze/50 hover:text-white text-gray-text transition-colors duration-200"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-secondary-bg border border-border-color rounded-2xl text-light-bronze">
                  {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-heading">
                    {selectedService.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.25em] text-light-bronze uppercase font-bold mt-1 block">
                    Tailored SEO Blueprint
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
                    Overview
                  </h4>
                  <p className="text-gray-text text-sm mt-2.5 leading-relaxed">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
                    Key Features in Our Strategy
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-gray-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-color/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-gray-text/60">
                  Ready to dominate local search?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-3 text-center rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.2em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
                >
                  Apply Strategy Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
