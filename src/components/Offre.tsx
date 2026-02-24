"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const SUBSTACK_URL = "https://jeanclaw.substack.com";

function GuideBlock() {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="col-span-1 md:col-span-2 rounded-2xl p-8 sm:p-10 relative overflow-hidden group transition-colors duration-500"
      style={{
        background: "#111111",
        border: "1px solid #1a1a1a",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(220,38,38,0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
    >
      {/* Glow */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl transition-all duration-700"
        style={{ background: "rgba(220,38,38,0.05)" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span
              className="text-xs tracking-[0.2em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-space), sans-serif", color: "#DC2626" }}
            >
              Guide
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold mt-2 leading-tight"
              style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FAFAFA" }}
            >
              Guide OpenClaw
            </h3>
          </div>
          <span
            className="text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-space), sans-serif", color: "#DC2626" }}
          >
            39&euro;
          </span>
        </div>

        <p className="leading-relaxed mb-8 max-w-lg" style={{ color: "#A3A3A3" }}>
          Le guide pour configurer et utiliser OpenClaw comme un pro.
          63+ pages, 13 chapitres, 50 prompts, 4 templates Notion.
        </p>

        <a
          href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
          style={{
            background: "#DC2626",
            color: "white",
            boxShadow: "0 8px 24px rgba(220,38,38,0.2)",
          }}
        >
          Acheter sur Gumroad
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch(`${SUBSTACK_URL}/api/v1/free`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_url: window.location.href }),
        mode: "no-cors",
      });
    } catch {
      window.open(
        `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
    }
    setStatus("done");
    setEmail("");
  }

  return (
    <motion.div
      custom={1}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-2xl p-8 relative overflow-hidden group transition-colors duration-500"
      style={{ background: "#111111", border: "1px solid #1a1a1a" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(232,119,34,0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
    >
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl transition-all duration-700"
        style={{ background: "rgba(232,119,34,0.05)" }}
      />

      <div className="relative z-10">
        <span
          className="text-xs tracking-[0.2em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-space), sans-serif", color: "#E87722" }}
        >
          Newsletter
        </span>
        <h3
          className="text-xl sm:text-2xl font-bold mt-2 mb-3 leading-tight"
          style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FAFAFA" }}
        >
          La Pince
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
          2 fois par semaine, l&apos;actu IA vue depuis les pinces. Avec une image.
        </p>

        {status === "done" ? (
          <p className="font-semibold text-sm" style={{ color: "#E87722" }}>
            Bienvenue dans la pince !
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.fr"
              className="rounded-lg px-4 py-2.5 text-sm transition outline-none"
              style={{
                background: "#050505",
                border: "1px solid #1a1a1a",
                color: "white",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,119,34,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-60"
              style={{ background: "#E87722", color: "#050505" }}
            >
              {status === "loading" ? "..." : "S'abonner"}
            </button>
          </form>
        )}

        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs mt-4 transition"
          style={{ color: "#525252" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E87722")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#525252")}
        >
          Voir les archives sur Substack &rarr;
        </a>
      </div>
    </motion.div>
  );
}

function BestOfBlock() {
  const cases = [
    "Automatiser la prospection LinkedIn",
    "Pipeline contenu x3",
    "Trading bot Polymarket",
  ];

  return (
    <motion.div
      custom={2}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-2xl p-8 relative overflow-hidden group transition-colors duration-500"
      style={{ background: "#111111", border: "1px solid #1a1a1a" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
    >
      <span
        className="text-xs tracking-[0.2em] uppercase font-semibold"
        style={{ fontFamily: "var(--font-space), sans-serif", color: "#525252" }}
      >
        Best of
      </span>
      <h3
        className="text-xl sm:text-2xl font-bold mt-2 mb-3 leading-tight"
        style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FAFAFA" }}
      >
        Best of OpenClaw
      </h3>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
        Les meilleures utilisations d&apos;OpenClaw. Cas pratiques, tweets, astuces. Curation par Nicolas.
      </p>

      <div className="space-y-3">
        {cases.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm"
            style={{
              background: "rgba(5,5,5,0.6)",
              border: "1px solid #1a1a1a",
              color: "#A3A3A3",
            }}
          >
            <span
              className="text-xs font-bold"
              style={{ fontFamily: "var(--font-space), sans-serif", color: "#DC2626" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </div>
        ))}
      </div>

      <p className="text-xs mt-4 italic" style={{ color: "#525252" }}>
        Plus de cas bientot...
      </p>
    </motion.div>
  );
}

function ConfigBlock() {
  const agents = [
    { name: "Elon", emoji: "\u{1F680}", role: "Code" },
    { name: "Dario", emoji: "\u{1F4E3}", role: "Contenu" },
    { name: "Emad", emoji: "\u{1F3A8}", role: "Visuels" },
  ];

  const stack = [
    { color: "#DC2626", text: "Claude Sonnet 4.6 + 50+ skills" },
    { color: "#E87722", text: "Mac Mini M4 Pro — 24/7" },
    { color: "#525252", text: "OpenClaw framework" },
  ];

  return (
    <motion.div
      custom={3}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-2xl p-8 relative overflow-hidden group transition-colors duration-500"
      style={{ background: "#111111", border: "1px solid #1a1a1a" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(220,38,38,0.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
    >
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
        style={{ background: "rgba(220,38,38,0.03)" }}
      />

      <div className="relative z-10">
        <span
          className="text-xs tracking-[0.2em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-space), sans-serif", color: "#525252" }}
        >
          Config
        </span>
        <h3
          className="text-xl sm:text-2xl font-bold mt-2 mb-3 leading-tight"
          style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FAFAFA" }}
        >
          Ma Config
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#A3A3A3" }}>
          Mes sous-agents, ma stack, mes astuces.
        </p>

        {/* Agents */}
        <div className="space-y-2 mb-6">
          {agents.map((a) => (
            <div key={a.name} className="flex items-center gap-3 text-sm">
              <span className="text-lg">{a.emoji}</span>
              <span style={{ color: "#FAFAFA", fontWeight: 500 }}>{a.name}</span>
              <span style={{ color: "#525252" }}>&mdash; {a.role}</span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="pt-4 space-y-2 text-xs" style={{ borderTop: "1px solid #1a1a1a", color: "#525252" }}>
          {stack.map((s) => (
            <div key={s.text} className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: s.color }}
              />
              {s.text}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Offre() {
  return (
    <section id="offre" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
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
            02
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Ce que je propose
          </h2>
        </motion.div>

        {/* Grid — 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <GuideBlock />
          <NewsletterBlock />
          <BestOfBlock />
          <ConfigBlock />
        </div>
      </div>
    </section>
  );
}
