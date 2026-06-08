"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  label: string;
  endValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description: string;
}

function AnimatedStat({ label, endValue, prefix = "", suffix = "", decimals = 0, description }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 2.5; // seconds
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * endValue;
      
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="glass-panel p-8 rounded-2xl border border-border-color/60 flex flex-col justify-between items-center text-center relative overflow-hidden group">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-bronze via-light-bronze to-champagne opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="text-xs uppercase tracking-[0.25em] text-light-bronze font-bold">
        {label}
      </span>
      
      <div className="text-5xl md:text-6xl font-heading font-extrabold text-[#F8F8F8] my-6 tracking-tight flex items-center justify-center">
        {prefix}
        <span>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>
        {suffix}
      </div>

      <p className="text-xs text-gray-text leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
}

export default function Results() {
  const stats: StatItemProps[] = [
    {
      label: "Traffic Growth",
      endValue: 420,
      suffix: "%",
      description: "Average organic session increase for optimized local business profiles.",
    },
    {
      label: "Lead Growth",
      endValue: 12,
      suffix: "x",
      description: "Scale in phone calls, directions requests, and booking submissions.",
    },
    {
      label: "Review Growth",
      endValue: 2400,
      suffix: "+",
      description: "Reviews automatically generated across GBP, Yelp, and industry platforms.",
    },
    {
      label: "Visibility Growth",
      endValue: 98,
      suffix: "%",
      description: "Of targeted keywords achieving top 3 map positions within 6 months.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-secondary-bg overflow-hidden border-y border-border-color/30">
      {/* Decorative background lights */}
      <div className="absolute left-1/4 top-1/2 w-80 h-80 rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 w-80 h-80 rounded-full bg-light-bronze/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            THE PERFORMANCE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#F8F8F8]">
            MEASURABLE DOMINANCE
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver transparent, verifiable growth metrics that directly translate to bottom-line revenue for our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
