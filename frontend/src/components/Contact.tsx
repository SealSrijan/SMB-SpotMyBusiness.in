"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, AlertCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";

// Form validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  website: z.string().url({ message: "Invalid URL (e.g. https://example.com)" }).or(z.string().length(0)).optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      email: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate form processing (frontend-only — no backend required)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitSuccess(true);
      // Trigger high-end celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#8B5E3C", "#D4A373", "#E7D3B0"],
      });
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary-bg overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
                GET STARTED
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
                LET'S SECURE YOUR DOMINANCE
              </h2>
              <p className="text-gray-text text-base leading-relaxed">
                Connect with our local search architects. We will conduct a thorough, manual review of your current maps indexing, keyword rankings, and competitor authority to design a tailored growth blueprint.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border-color/60">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Email Support</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">smb.spot.my.business@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Direct Hotline</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">+91-9007960333/ +91-8597913452</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Global HQ</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-border-color rounded-2xl p-8 md:p-10 relative">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitError && (
                      <div className="flex items-center gap-2.5 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="name"
                          {...register("name")}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="name"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Your Name *
                        </label>
                        {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Business Name Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="businessName"
                          {...register("businessName")}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="businessName"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Business Name *
                        </label>
                        {errors.businessName && <p className="text-[10px] text-red-400 mt-1">{errors.businessName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="phone"
                          {...register("phone")}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="phone"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone Number *
                        </label>
                        {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>}
                      </div>

                      {/* Email Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="email"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email Address *
                        </label>
                        {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Website URL Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        id="website"
                        {...register("website")}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="website"
                        className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Business Website URL (optional)
                      </label>
                      {errors.website && <p className="text-[10px] text-red-400 mt-1">{errors.website.message}</p>}
                    </div>

                    {/* Message Field */}
                    <div className="relative z-0 w-full group">
                      <textarea
                        id="message"
                        {...register("message")}
                        placeholder=" "
                        rows={3}
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer resize-none"
                      />
                      <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tell us about your goals (optional)
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-bronze to-light-bronze font-heading text-xs tracking-[0.25em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Strategy...</span>
                        </>
                      ) : (
                        <span>Request Free SEO Audit</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-light-bronze mb-6 animate-pulse" />
                    <h3 className="text-2xl font-heading font-bold text-heading">
                      STRATEGY COMMENCED
                    </h3>
                    <p className="text-gray-text text-sm max-w-sm mt-3 leading-relaxed">
                      Thank you! Your business profile has been synced. Our local SEO auditors are preparing your custom ranking audit. Expect a response in less than 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-border-color hover:border-bronze/50 text-xs tracking-wider uppercase font-semibold text-gray-text hover:text-white transition-all duration-200"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
