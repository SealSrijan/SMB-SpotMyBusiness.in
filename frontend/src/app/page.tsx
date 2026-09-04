"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Phone } from "lucide-react";

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
  {/* Call Us */}
  <a
    href="tel:+919007960333"
    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20"
  >
    <Phone className="h-3.5 w-3.5" />
    Call Us
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919007960333"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full border border-border-color bg-secondary-bg px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-text transition-all duration-300 hover:border-bronze/50 hover:text-heading"
  >
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.44ZM12.07 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.26C2.22 6.47 6.64 2.05 12.06 2.05c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.42-4.42 9.86-9.84 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34Z" />
    </svg>
    WhatsApp
  </a>
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
