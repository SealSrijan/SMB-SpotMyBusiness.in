"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import TrustMarquee from "@/components/TrustMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
// import SEOCommandCenter from "@/components/SEOCommandCenter";
import Process from "@/components/Process";
import Results from "@/components/Results";
import ClientShowcase from "@/components/ClientShowcase";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Stable callback reference via useCallback to prevent re-renders in LoadingScreen
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
      {/* Smooth Scroll Engine */}
      <LenisScroll />

      {/* Loading Animation */}
      <LoadingScreen onComplete={handleLoadingComplete} />

      {/* Primary Web Layout (reveals after loading completes) */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="flex flex-col min-h-screen relative"
          >
            <Navbar />

            {/* ==========================================
                 HERO SECTION
                 ========================================== */}
            <section
              id="hero"
              className="relative min-h-screen flex items-center pt-24 pb-16 md:pb-24 overflow-hidden bg-primary-bg"
            >
              {/* Radial gradient background lights */}
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-light-bronze/5 blur-[100px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Side Copy */}
                <div className="lg:col-span-6 space-y-6 md:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <span className="text-xs uppercase tracking-[0.35em] text-light-bronze font-bold inline-block px-3 py-1.5 rounded-full border border-bronze/20 bg-bronze/5">
                      Elite SEO Architects
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-heading font-extrabold tracking-tight text-heading leading-[1.08] uppercase">
                      We Don&#39;t Just Improve Rankings.
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bronze via-light-bronze to-champagne mt-2 drop-shadow-sm">
                        We Build Digital Dominance.
                      </span>
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gray-text text-base md:text-lg max-w-xl leading-relaxed font-normal"
                  >
                    Helping businesses become impossible to ignore through technical SEO, Google Business Profile optimization, local search networks, and high-converting reputation growth.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-4"
                  >
                    <button
                      onClick={() => handleScrollTo("contact")}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold text-white hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300 flex items-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleScrollTo("services")}
                      className="px-8 py-4 rounded-full border border-border-color bg-secondary-bg hover:border-bronze/50 text-xs tracking-[0.25em] uppercase font-bold text-gray-text hover:text-heading transition-all duration-300"
                    >
                      View Services
                    </button>
                  </motion.div>
                </div>

                {/* Right Side — Premium Phone Mockup */}
                <div className="lg:col-span-6 w-full flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-lg md:max-w-xl"
                  >
                    <PhoneMockup />
                  </motion.div>
                </div>
              </div>
            </section>

            <TrustMarquee />
            <About />
            <Services />
            {/* <SEOCommandCenter /> */}
            <Process />
            <Results />
            <ClientShowcase />
            <Testimonials />
            <Comparison />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
