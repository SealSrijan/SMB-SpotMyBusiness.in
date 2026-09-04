"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-6 h-6 text-bronze" />,
      desc: "To deliver reliable, affordable, and result-driven digital solutions through innovation, transparency,and dedication, helping local businesses enhance their online presence, attract more customers, and achieve measurable, long-term growth. ",
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-6 h-6 text-light-bronze" />,
      desc: "Inspired by Swami Vivekananda's timeless call to persevere until the goal is reached, we envision empowering every local business with digital excellence, lasting growth, stronger customer trust, and sustainable success.",
    },
    {
      title: "Our Values",
      icon: <Award className="w-6 h-6 text-champagne" />,
      desc: "Uncompromising integrity, data-driven transparency, and relentless growth. We do not hide behind vanity metrics; we focus on real-world results: calls, leads, and store visits.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-primary-bg">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Copy */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading mt-3 leading-tight">
                WE DO NOT JUST IMPROVE SCORES.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze via-light-bronze to-champagne">
                  WE SECURE DOMINANCE.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-4 text-gray-text text-base leading-relaxed"
            >
              <p>
                Spot My Business is a results-driven digital marketing agency serving businesses across Kolkata and beyond. We specialize in Google Business Profile optimization, Local SEO, Google Maps visibility, reputation management, and performance-driven digital marketing strategies designed to generate qualified enquiries and sustainable business growth. Our team specializes in social media marketing and broader media marketing to enhance online visibility and attract high-quality leads. We stand out by combining innovation with transparency and reliability, ensuring every client achieves measurable success in a competitive landscape. We prioritize sustainable growth and data-backed results to help brands dominate their local markets. Contact us today to request a quote and scale your digital presence.
              </p>
              {/* <p>
                We construct digital infrastructure that helps local businesses capture their immediate neighborhood markets. By combining technical search engine optimization, advanced map ranking strategies, and review automation, we build authoritative, high-conversion brands.
              </p> */}
            </motion.div>
          </div>

          {/* Right Column: Glass Cards */}
          <div className="lg:col-span-7 space-y-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 md:p-8 rounded-2xl relative group overflow-hidden border border-border-color/50"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-bronze/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row gap-4 items-start relative z-10">
                  <div className="p-3 bg-secondary-bg border border-border-color rounded-xl flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-heading">
                      {card.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
