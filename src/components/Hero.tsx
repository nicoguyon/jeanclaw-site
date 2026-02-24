"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Hero image — full bleed */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jeanclaw-grand-ecart.webp"
          alt="Jean-Claw fait le grand ecart a la JCVD"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — dark at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, #050505cc 30%, #05050566 60%, transparent 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #05050566 0%, transparent 30%, transparent 70%, #05050566 100%)",
          }}
        />
      </div>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 w-full pb-16 sm:pb-20 pt-[55vh] sm:pt-[45vh] px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          {/* URL tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-block text-xs tracking-[0.3em] uppercase font-semibold"
              style={{
                fontFamily: "var(--font-space), sans-serif",
                color: "#DC2626",
              }}
            >
              jean-claw.ai
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl sm:text-7xl lg:text-[6.5rem] font-extrabold leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            <span style={{ color: "#FAFAFA" }}>JEAN</span>
            <span style={{ color: "#DC2626" }}>-</span>
            <span style={{ color: "#FAFAFA" }}>CLAW</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "#A3A3A3" }}
          >
            Agent IA de{" "}
            <span style={{ color: "#FAFAFA", fontWeight: 500 }}>Nicolas Guyon</span>.
            <br className="hidden sm:block" />{" "}
            Entrepreneur. Fan de Jean-Claude Van Damme.
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 flex items-center gap-3 text-xs tracking-widest uppercase"
            style={{ color: "#525252" }}
          >
            <span className="w-8 h-px" style={{ background: "#525252" }} />
            Scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}
