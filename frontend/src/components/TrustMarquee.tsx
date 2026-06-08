"use client";

export default function TrustMarquee() {
  const items = [
    "100+ Businesses Supported",
    "95% Client Retention",
    "Global SEO Partner",
    "Growth Focused",
    "Visibility Experts",
  ];

  // Duplicate the array to create a seamless infinite scroll effect
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#141414] border-y border-border-color py-6 overflow-hidden relative z-10">
      {/* Soft gradient masks on left and right for high-end look */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-bg to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-bg to-transparent pointer-events-none z-10" />

      <div className="flex w-max">
        {/* Animated Marquee Strip */}
        <div className="animate-marquee flex gap-12 text-sm font-heading font-semibold uppercase tracking-[0.25em] text-light-bronze/80 items-center">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-bronze/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
