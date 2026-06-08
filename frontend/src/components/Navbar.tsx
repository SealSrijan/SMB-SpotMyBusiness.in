"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-primary-bg/80 backdrop-blur-md border-b border-border-color/50 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with slight overlap/glow */}
          <div className="relative z-50">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border-color bg-secondary-bg transition-transform duration-500 group-hover:scale-105 group-hover:border-bronze">
                <Image
                  src="/assets/logo.jpg"
                  alt="Spot My Business Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-[0.15em] text-[#F8F8F8] text-[16px] md:text-[17px] leading-none">
                  SPOT MY BUSINESS
                </span>
                <span className="text-[8px] tracking-[0.35em] text-light-bronze uppercase font-medium mt-1">
                  Global SEO Partner
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#command-center"
              onClick={(e) => handleNavClick(e, "command-center")}
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Command Center
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-bronze/50 text-xs tracking-[0.15em] uppercase font-semibold text-[#F8F8F8] hover:border-light-bronze/80 transition-all duration-300 shadow-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-bronze to-light-bronze opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-text hover:text-[#F8F8F8] focus:outline-none z-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 px-6"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-bronze/5 blur-[70px]"></div>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-[#F8F8F8] transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-[#F8F8F8] transition-colors"
            >
              Services
            </a>
            <a
              href="#command-center"
              onClick={(e) => handleNavClick(e, "command-center")}
              className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-[#F8F8F8] transition-colors"
            >
              Command Center
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-8 py-3 rounded-full border border-bronze text-sm tracking-[0.15em] uppercase font-semibold text-[#F8F8F8] hover:bg-bronze hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
