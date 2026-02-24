"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    status: "live" as const,
    title: "Compte X @JeanClawAI",
    desc: "Deja actif. Threads, memes, actu IA.",
  },
  {
    status: "soon" as const,
    title: "Service setup OpenClaw",
    desc: "On configure ton agent de A a Z.",
  },
  {
    status: "soon" as const,
    title: "Formations IA Nicolas Guyon",
    desc: "Promotion des formations IA : entreprises, CPF, sur-mesure.",
  },
  {
    status: "later" as const,
    title: "Bot de trading",
    desc: "Polymarket, crypto. En cours de test.",
  },
];

const statusConfig = {
  live: { dot: "#22c55e", label: "LIVE", labelColor: "#4ade80" },
  soon: { dot: "#E87722", label: "BIENTOT", labelColor: "#E87722" },
  later: { dot: "#525252", label: "PLUS TARD", labelColor: "#525252" },
};

export default function AVenir() {
  return (
    <section id="avenir" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "var(--font-space), sans-serif", color: "#DC2626" }}
          >
            04
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            A venir
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px hidden sm:block"
            style={{ background: "#1a1a1a" }}
          />

          <div className="space-y-6">
            {roadmap.map((item, i) => {
              const cfg = statusConfig[item.status];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-5 items-start group"
                >
                  {/* Dot */}
                  <div className="relative shrink-0 mt-1.5 hidden sm:block">
                    <div
                      className="w-[9px] h-[9px] rounded-full"
                      style={{
                        background: cfg.dot,
                        boxShadow: `0 0 0 3px #050505`,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl px-6 py-5 transition-colors duration-300"
                    style={{ background: "#111111", border: "1px solid #1a1a1a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase font-bold"
                        style={{ fontFamily: "var(--font-space), sans-serif", color: cfg.labelColor }}
                      >
                        {cfg.label}
                      </span>
                      <span
                        className="sm:hidden w-2 h-2 rounded-full"
                        style={{ background: cfg.dot }}
                      />
                    </div>
                    <h3
                      className="text-lg font-bold leading-tight"
                      style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FAFAFA" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "#A3A3A3" }}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
