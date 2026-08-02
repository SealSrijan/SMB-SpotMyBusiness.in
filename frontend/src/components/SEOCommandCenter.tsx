"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, BarChart3, Users, Star, PhoneCall, 
  MapPin, Globe, ArrowUpRight, RefreshCw, Layers 
} from "lucide-react";

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

// Count Up Component
function CountUp({ end, prefix = "", suffix = "", decimals = 0, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const current = easeProgress * end;
      
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function SEOCommandCenter() {
  const [activeTab, setActiveTab] = useState<"traffic" | "leads">("traffic");
  const [isUpdating, setIsUpdating] = useState(false);
  const [liveData, setLiveData] = useState({
    visibilityScore: 94.8,
    keywordsRanked: 1850,
    traffic: 45200,
    leads: 1892,
    rating: 4.9,
    calls: 648
  });

  // Handle manual "Data Refresh" simulation
  const refreshStats = () => {
    if (isUpdating) return;
    setIsUpdating(true);
    setTimeout(() => {
      setLiveData({
        visibilityScore: parseFloat((93.5 + Math.random() * 3).toFixed(1)),
        keywordsRanked: Math.floor(1800 + Math.random() * 100),
        traffic: Math.floor(44000 + Math.random() * 2500),
        leads: Math.floor(1800 + Math.random() * 150),
        rating: 4.9,
        calls: Math.floor(620 + Math.random() * 50)
      });
      setIsUpdating(false);
    }, 1200);
  };

  const lineChartData = [
    { label: "Jan", traffic: 12000, leads: 400 },
    { label: "Feb", traffic: 15000, leads: 520 },
    { label: "Mar", traffic: 22000, leads: 830 },
    { label: "Apr", traffic: 31000, leads: 1240 },
    { label: "May", traffic: 38000, leads: 1550 },
    { label: "Jun", traffic: liveData.traffic, leads: liveData.leads },
  ];

  // Helper to generate SVG path for the line chart
  const getLinePath = (key: "traffic" | "leads") => {
    const width = 600;
    const height = 180;
    const padding = 20;

    const xStep = (width - padding * 2) / (lineChartData.length - 1);
    const maxVal = Math.max(...lineChartData.map((d) => d[key]));
    const minVal = Math.min(...lineChartData.map((d) => d[key])) * 0.8; // Give some baseline

    return lineChartData.map((d, index) => {
      const x = padding + index * xStep;
      const y = height - padding - ((d[key] - minVal) / (maxVal - minVal)) * (height - padding * 2);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");
  };

  // Helper to generate SVG area path for filled gradient below the line
  const getAreaPath = (key: "traffic" | "leads") => {
    const width = 600;
    const height = 180;
    const padding = 20;
    
    const linePath = getLinePath(key);
    const xStep = (width - padding * 2) / (lineChartData.length - 1);
    const startX = padding;
    const endX = padding + (lineChartData.length - 1) * xStep;
    const bottomY = height - padding;

    return `${linePath} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;
  };

  const mapPositions = [
    { keyword: "restaurants near me", rank: 1, volume: "45K", status: "up" },
    { keyword: "best cafe nearby", rank: 2, volume: "18K", status: "stable" },
    { keyword: "pharmacy open now", rank: 1, volume: "12K", status: "up" },
    { keyword: "medical clinic map", rank: 1, volume: "8.5K", status: "stable" },
    { keyword: "coaching classes near me", rank: 3, volume: "24K", status: "down" },
    { keyword: "furniture stores direct", rank: 2, volume: "15K", status: "up" },
    { keyword: "electronics repair shop", rank: 1, volume: "30K", status: "up" },
    { keyword: "top rated salon", rank: 1, volume: "22K", status: "stable" }
  ];

  return (
    <section id="command-center" className="py-24 md:py-32 relative bg-secondary-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bronze/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-bronze animate-pulse" />
              Real-time Business Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
              SEO COMMAND CENTER
            </h2>
            <p className="text-gray-text text-base md:text-lg max-w-2xl leading-relaxed">
              Track visibility, keyword rankings, incoming leads, and foot traffic inside our premium, unified growth dashboard.
            </p>
          </div>

          <button
            onClick={refreshStats}
            className="self-start lg:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-color bg-primary-bg text-xs tracking-wider uppercase font-semibold text-gray-text hover:text-white hover:border-bronze transition-all duration-300"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? "animate-spin text-light-bronze" : ""}`} />
            {isUpdating ? "Updating Stream..." : "Live Sync Data"}
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Chart Section (8 cols) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl border border-border-color p-6 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-border-color pb-6 mb-6">
              <div>
                <h3 className="text-lg font-heading font-bold text-heading">Growth Velocity</h3>
                <p className="text-xs text-gray-text mt-1">Real-time organic performance analytics</p>
              </div>
              
              {/* Tab toggles */}
              <div className="flex bg-primary-bg p-1 border border-border-color rounded-xl">
                <button
                  onClick={() => setActiveTab("traffic")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === "traffic" 
                      ? "bg-bronze text-heading" 
                      : "text-gray-text hover:text-white"
                  }`}
                >
                  Traffic
                </button>
                <button
                  onClick={() => setActiveTab("leads")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === "leads" 
                      ? "bg-bronze text-heading" 
                      : "text-gray-text hover:text-white"
                  }`}
                >
                  Leads
                </button>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="w-full relative h-[200px] flex items-end">
              <svg viewBox="0 0 600 180" className="w-full h-[180px] overflow-visible">
                {/* Definitions for gradients */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5E3C" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#8B5E3C" stopOpacity="0.0"/>
                  </linearGradient>
                </defs>

                {/* Horizontal Gridlines */}
                <line x1="20" y1="20" x2="580" y2="20" stroke="#242424" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20" y1="65" x2="580" y2="65" stroke="#242424" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20" y1="110" x2="580" y2="110" stroke="#242424" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20" y1="160" x2="580" y2="160" stroke="#242424" strokeWidth="1" />

                {/* Area under the line */}
                <motion.path
                  d={getAreaPath(activeTab)}
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* The line itself */}
                <motion.path
                  d={getLinePath(activeTab)}
                  fill="none"
                  stroke="#D4A373"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                {/* Data point dots and tooltips */}
                {lineChartData.map((d, i) => {
                  const width = 600;
                  const height = 180;
                  const padding = 20;
                  const xStep = (width - padding * 2) / (lineChartData.length - 1);
                  const maxVal = Math.max(...lineChartData.map((x) => x[activeTab]));
                  const minVal = Math.min(...lineChartData.map((x) => x[activeTab])) * 0.8;

                  const x = padding + i * xStep;
                  const y = height - padding - ((d[activeTab] - minVal) / (maxVal - minVal)) * (height - padding * 2);

                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="5" fill="#F8F8F8" stroke="#8B5E3C" strokeWidth="2.5" />
                      {/* X-Axis labels */}
                      <text x={x} y="176" fill="#CFCFCF" fontSize="10" textAnchor="middle" fontFamily="var(--font-space-grotesk)" fontWeight="bold">
                        {d.label}
                      </text>
                      {/* Value label on top (last point only) */}
                      {i === lineChartData.length - 1 && (
                        <g>
                          <rect x={x - 30} y={y - 28} width="60" height="20" rx="4" fill="#141414" stroke="#242424" strokeWidth="1" />
                          <text x={x} y={y - 15} fill="#D4A373" fontSize="10" fontWeight="bold" textAnchor="middle">
                            {activeTab === "traffic" ? `${(d.traffic / 1000).toFixed(1)}K` : d.leads}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border-color/60 text-xs text-gray-text">
              <span>Data stream latency: ~0.4s</span>
              <span className="flex items-center gap-1 text-green-500 font-bold">
                <TrendingUp className="w-3.5 h-3.5" /> +24% YoY Growth
              </span>
            </div>
          </div>

          {/* Quick Metrics Panels (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            
            {/* Stat: Visibility Score */}
            <div className="glass-panel p-5 rounded-2xl border border-border-color flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <Globe className="w-5 h-5 text-light-bronze" />
                <span className="text-[10px] text-green-500 font-semibold">+1.8%</span>
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-text font-bold">Visibility Score</h4>
                <div className="text-2xl font-heading font-bold text-heading mt-1">
                  <CountUp end={liveData.visibilityScore} decimals={1} suffix="%" />
                </div>
              </div>
            </div>

            {/* Stat: Keywords Ranked */}
            <div className="glass-panel p-5 rounded-2xl border border-border-color flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <TrendingUp className="w-5 h-5 text-bronze" />
                <span className="text-[10px] text-green-500 font-semibold">+124</span>
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-text font-bold">Keywords Ranked</h4>
                <div className="text-2xl font-heading font-bold text-heading mt-1">
                  <CountUp end={liveData.keywordsRanked} suffix="+" />
                </div>
              </div>
            </div>

            {/* Stat: Reviews & Rating */}
            <div className="glass-panel p-5 rounded-2xl border border-border-color flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <Star className="w-5 h-5 text-champagne fill-champagne/20" />
                <span className="text-[10px] text-gray-text/80">Active</span>
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-text font-bold">Reviews Growth</h4>
                <div className="text-2xl font-heading font-bold text-heading mt-1">
                  <CountUp end={liveData.rating} decimals={1} suffix="★" />
                </div>
                <p className="text-[9px] text-gray-text/60 mt-1">1,240 verified reviews</p>
              </div>
            </div>

            {/* Stat: Calls Generated */}
            <div className="glass-panel p-5 rounded-2xl border border-border-color flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <PhoneCall className="w-5 h-5 text-light-bronze" />
                <span className="text-[10px] text-green-500 font-semibold">+14.2%</span>
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-text font-bold">Click-to-Calls</h4>
                <div className="text-2xl font-heading font-bold text-heading mt-1">
                  <CountUp end={liveData.calls} />
                </div>
              </div>
            </div>

          </div>

          {/* Lower Section 1: Map Rankings List (6 cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-border-color p-6 md:p-8">
            <div className="flex justify-between items-center border-b border-border-color pb-4 mb-4">
              <h3 className="text-base font-heading font-bold text-heading">Live Keyword Map Rankings</h3>
              <span className="text-[10px] text-light-bronze font-semibold uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Google Maps
              </span>
            </div>

            <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
              {mapPositions.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-primary-bg/50 border border-border-color/30 hover:border-bronze/30 hover:bg-primary-bg transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-[10px] font-heading font-bold flex items-center justify-center ${
                      item.rank === 1 
                        ? "bg-bronze/20 border border-bronze/50 text-light-bronze" 
                        : "bg-secondary-bg border border-border-color text-gray-text"
                    }`}>
                      #{item.rank}
                    </span>
                    <span className="text-xs text-white-text font-medium">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-gray-text/60">Vol: {item.volume}</span>
                    <span className={`text-[10px] font-bold ${
                      item.status === "up" ? "text-green-500" : item.status === "down" ? "text-red-500" : "text-gray-text"
                    }`}>
                      {item.status === "up" ? "▲" : item.status === "down" ? "▼" : "■"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Section 2: Traffic Channels (6 cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-border-color p-6 md:p-8">
            <div className="flex justify-between items-center border-b border-border-color pb-4 mb-4">
              <h3 className="text-base font-heading font-bold text-heading">Traffic Acquisition Channels</h3>
              <span className="text-[10px] text-light-bronze font-semibold uppercase tracking-wider flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5" /> Channels
              </span>
            </div>

            <div className="space-y-4 py-2">
              {[
                { name: "Organic Google Search", percentage: 65.3, count: "29.5K visits", color: "bg-bronze" },
                { name: "Google Maps / Local Pack", percentage: 18.7, count: "8.4K visits", color: "bg-light-bronze" },
                { name: "Direct Browser Traffic", percentage: 9.6, count: "4.3K visits", color: "bg-champagne" },
                { name: "Referral / Review Links", percentage: 6.4, count: "2.8K visits", color: "bg-white/20" },
              ].map((channel, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white-text">{channel.name}</span>
                    <span className="text-light-bronze">{channel.percentage}% <span className="text-gray-text/50 font-normal">({channel.count})</span></span>
                  </div>
                  {/* Progress bar container */}
                  <div className="w-full h-1.5 bg-primary-bg border border-border-color/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${channel.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${channel.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
