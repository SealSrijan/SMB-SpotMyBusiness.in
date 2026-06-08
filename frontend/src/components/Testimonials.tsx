"use client";

import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarLetter: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The local SEO blueprint created by SMB changed our clinic completely. Within 3 months we went from ranking #12 on Google Maps to #1 for all critical pediatric searches.",
    name: "Dr. Evelyn Vance",
    role: "Chief Medical Officer",
    company: "Vitals Clinic",
    avatarLetter: "E"
  },
  {
    quote: "We were skeptical about local SEO agencies, but SMB is in a class of their own. They don't report vanity metrics; they track actual calls and bookings. Our tables are fully booked every weekend now.",
    name: "Marcus Thorne",
    role: "Founder & Owner",
    company: "Urban Cafe",
    avatarLetter: "M"
  },
  {
    quote: "As an academy with multiple centers, managing local listings was a nightmare. SMB consolidated our profiles, cleaned up citations, and automated our review loop. Highly recommended.",
    name: "Prof. Julian Croft",
    role: "Director of Admissions",
    company: "Science Squad",
    avatarLetter: "J"
  },
  {
    quote: "We have seen a 310% increase in online appointment bookings since partnering with SMB. Their dashboard is addictive—we see keyword movements and customer calls in real-time.",
    name: "Serena Vance",
    role: "Creative Director",
    company: "Starlight Salon",
    avatarLetter: "S"
  }
];

export default function Testimonials() {
  // Triple the list to create a seamless looping marquee
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 relative bg-primary-bg overflow-hidden border-b border-border-color/30">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-bronze/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            PARTNER FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#F8F8F8]">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>
      </div>

      {/* Scrolling Carousel Window */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Soft edge masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-bg to-transparent pointer-events-none z-10" />

        {/* Carousel Row 1 - Left to Right */}
        <div className="flex w-max">
          <div className="animate-marquee flex gap-6">
            {items.map((t, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[420px] glass-card p-6 md:p-8 rounded-2xl border border-border-color flex flex-col justify-between h-[230px] relative group"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-border-color/30 group-hover:text-bronze/15 transition-colors duration-300" />
                <p className="text-xs md:text-sm text-gray-text leading-relaxed relative z-10 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary-bg border border-border-color flex items-center justify-center font-heading font-bold text-light-bronze">
                    {t.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-bold text-[#F8F8F8]">{t.name}</h4>
                    <span className="text-[10px] text-gray-text/60 mt-0.5 block">{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
