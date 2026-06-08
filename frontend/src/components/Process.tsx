"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Compass, ShieldAlert, Award } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string[];
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    icon: Search,
    desc: "Deep-dive audit of your local search presence and competitors.",
    details: [
      "GBP listing health checks",
      "Local keyword gap analysis",
      "Competitor citation benchmarking",
      "Core web vitals audit"
    ],
  },
  {
    num: "02",
    title: "Optimization",
    icon: Compass,
    desc: "Structuring and reinforcing your on-page and map assets.",
    details: [
      "Google Business Profile optimization",
      "Local schema markup injection",
      "Geographic landing page architecture",
      "Review acquisition system setup"
    ],
  },
  {
    num: "03",
    title: "Growth",
    icon: ShieldAlert,
    desc: "Accelerating authority and scaling localized rankings.",
    details: [
      "Hyper-local citation building",
      "Review generation campaign automation",
      "Niche relevant backlinking",
      "Ongoing maps ranking adjustments"
    ],
  },
  {
    num: "04",
    title: "Digital Dominance",
    icon: Award,
    desc: "Cementing top positions and dominating local markets.",
    details: [
      "Multi-keyword map pack domination",
      "Conversion rate optimization",
      "Competitor defensive strategies",
      "Granular lead attribution tracking"
    ],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative bg-primary-bg overflow-hidden">
      {/* Decorative blurred glow background */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            THE ENGINE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            OUR DOMINANCE PROCESS
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We follow a rigorous, methodical pipeline designed to systematically out-rank local competition and capture high-intent buyers.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Background Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-border-color -translate-x-[1px]" />
          
          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-4 w-[2px] bg-gradient-to-b from-bronze via-light-bronze to-champagne -translate-x-[1px] origin-top z-10"
          />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24 relative z-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Indicator Ball (Overlapping Line) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-border-color bg-secondary-bg flex items-center justify-center z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <IconComponent className="w-4 h-4 text-light-bronze" />
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                      className="glass-card p-6 md:p-8 rounded-2xl border border-border-color relative group"
                    >
                      {/* Step Number Badge */}
                      <span className="absolute top-6 right-6 font-heading font-black text-3xl text-border-color/60 group-hover:text-bronze/25 transition-colors duration-300 select-none">
                        {step.num}
                      </span>

                      <h3 className="text-xl font-heading font-bold text-heading">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-text text-sm mt-3 leading-relaxed">
                        {step.desc}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-border-color/60 pt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-text/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-bronze/60" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
