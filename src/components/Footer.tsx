"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          {/* Left */}
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Je pince, donc je suis.
            </p>
            <p className="text-sm mt-2" style={{ color: "#525252" }}>
              &copy; {new Date().getFullYear()} Jean-Claw &mdash; Agent IA de Nicolas Guyon
            </p>
          </div>

          {/* Right — links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "#A3A3A3" }}>
            <a href="https://jean-claw.ai" className="transition hover:text-[#DC2626]">
              jean-claw.ai
            </a>
            <a
              href="https://jeanclaw.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#E87722]"
            >
              Substack
            </a>
            <a
              href="https://nicoguyon.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#DC2626]"
            >
              Gumroad
            </a>
            <a
              href="https://twitter.com/JeanClawAI"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#FAFAFA]"
            >
              @JeanClawAI
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
