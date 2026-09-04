"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import TrustMarquee from "@/components/TrustMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
// import SEOCommandCenter from "@/components/SEOCommandCenter";
import Process from "@/components/Process";
// import Results from "@/components/Results";
import ClientShowcase from "@/components/ClientShowcase";
// import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
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
      {/* Loading Animation */}
      <LoadingScreen />

      {/* Primary Web Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex min-h-screen flex-col relative"
      >
        <Navbar />

        {/* ==========================================
             HERO SECTION
        ========================================== */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden bg-primary-bg pt-24 pb-16 md:pb-24"
        >
          {/* Radial gradient background lights */}
          <div className="pointer-events-none absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-bronze/5 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-light-bronze/5 blur-[100px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
            {/* ==========================================
                 LEFT SIDE — COPY
            ========================================== */}
            <div className="space-y-6 md:space-y-8 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-4"
              >
                <span className="inline-block rounded-full border border-bronze/20 bg-bronze/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-light-bronze">
                  Elite SEO Architects
                </span>

                <h1 className="text-4xl font-heading font-extrabold uppercase leading-[1.08] tracking-tight text-heading sm:text-5xl md:text-[54px]">
                  Google Business Profile
                  <span className="mt-2 block bg-gradient-to-r from-bronze via-light-bronze to-champagne bg-clip-text text-transparent drop-shadow-sm">
                    & Local SEO Experts.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-xl text-base font-normal leading-relaxed text-gray-text md:text-lg"
              >
                We help local businesses improve Google Maps visibility,
                attract more local customers, and generate qualified
                enquiries through Google Business Profile optimization and
                Local SEO.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => handleScrollTo("services")}
                  className="rounded-full border border-border-color bg-secondary-bg px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-text transition-all duration-300 hover:border-bronze/50 hover:text-heading"
                >
                  View Services
                </button>
              </motion.div>
            </div>

            {/* ==========================================
                 RIGHT SIDE — PHONE MOCKUP
            ========================================== */}
            <div className="flex w-full justify-center lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-lg md:max-w-xl"
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================
             REMAINING SECTIONS
        ========================================== */}

        <TrustMarquee />

        <About />

        <Services />

        {/* <SEOCommandCenter /> */}

        <Process />

        {/* <Results /> */}

        <ClientShowcase />

        {/* <Testimonials /> */}

        <Comparison />

        <Contact />

        <Footer />
      </motion.div>
    </>
  );
}
