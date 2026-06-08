"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary-bg relative z-10 border-t border-border-color">
      {/* Premium top accent border line in bronze gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border-color bg-secondary-bg">
                <Image
                  src="/assets/logo.jpg"
                  alt="Spot My Business Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-[0.15em] text-[#F8F8F8] text-[16px] leading-none">
                  SPOT MY BUSINESS
                </span>
                <span className="text-[8px] tracking-[0.3em] text-light-bronze uppercase font-medium mt-1">
                  Global SEO Partner
                </span>
              </div>
            </div>
            <p className="text-gray-text text-xs md:text-sm max-w-sm leading-relaxed">
              We build digital dominance. Spot My Business helps local and multi-location companies capture search intent, dominate Google Maps, and grow their physical footprint.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Facebook Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Twitter Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="LinkedIn Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F8F8F8] font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              <li>
                <a href="#about" className="hover:text-light-bronze transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-light-bronze transition-colors">Industries We Serve</a>
              </li>
              <li>
                <a href="#command-center" className="hover:text-light-bronze transition-colors">Command Center</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-light-bronze transition-colors">Get A Free Audit</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F8F8F8] font-bold">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-gray-text leading-relaxed font-medium">
              <p>500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
              <p className="pt-2">Phone: +1 (800) 555-7265</p>
              <p>Email: grow@spotmybusiness.com</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-color/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-text/50 uppercase tracking-widest font-semibold">
          <p>© {new Date().getFullYear()} SPOT MY BUSINESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-xl border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
