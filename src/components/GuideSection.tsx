"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const chapters = [
  {
    num: "01",
    title: "L'IA n'est pas un gadget",
    desc: "Architectures, agents, ce qui change vraiment",
  },
  {
    num: "02",
    title: "Automatiser la prospection",
    desc: "Trouver des clients sans lever le petit doigt",
  },
  {
    num: "03",
    title: "Créer du contenu sans s'épuiser",
    desc: "Newsletter, posts, podcasts — en pilotage auto",
  },
  {
    num: "04",
    title: "Admin et gestion",
    desc: "Devis, relances, compta — délégué à l'IA",
  },
  {
    num: "05",
    title: "Monter son premier agent",
    desc: "Claude Code, Cursor, OpenClaw — step by step",
  },
  {
    num: "06",
    title: "L'écosystème d'outils",
    desc: "La stack ultime du solopreneur 2025",
  },
];

export default function GuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="guide"
      ref={ref}
      style={{
        padding: "8rem 1.5rem",
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "30%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,57,53,0.05) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="guide-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4.5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — cover + copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.875rem",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#A0A0A0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              📖 Le Guide
            </div>

            <h2
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              IA pour{" "}
              <span className="gradient-text">Solopreneurs</span>
            </h2>

            {/* Dario's copy */}
            <p
              style={{
                color: "#A0A0A0",
                lineHeight: 1.75,
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              Tu es freelance, consultant, formateur, coach ? Tu bosses seul et
              t&apos;as l&apos;impression de passer ta vie sur des trucs chiants — prospection,
              admin, contenu, relances ?{" "}
              <span style={{ color: "white", fontWeight: 500 }}>
                Ce guide, c&apos;est ton plan d&apos;action.
              </span>
            </p>

            {/* Guide cover image */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0.8 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              style={{
                width: "100%",
                maxWidth: 340,
                aspectRatio: "3/4",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(229,57,53,0.12), 0 0 60px rgba(229,57,53,0.08)",
                marginBottom: "2rem",
              }}
            >
              <Image
                src="/images/jeanclaw-guide-cover.webp"
                alt="Guide IA pour Solopreneurs par Jean-Claw"
                fill
                style={{ objectFit: "cover" }}
                sizes="340px"
              />
              {/* Price pill overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "#E53935",
                  color: "white",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  boxShadow: "0 4px 16px rgba(229,57,53,0.4)",
                }}
              >
                39€
              </div>
            </motion.div>

            {/* Bonus callout */}
            <div
              style={{
                background: "rgba(229,57,53,0.06)",
                border: "1px solid rgba(229,57,53,0.15)",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                marginBottom: "1.75rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🎁</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.2rem" }}>
                  Bonus inclus
                </div>
                <div style={{ color: "#707070", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  50 prompts prêts à l&apos;emploi + templates Notion
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    color: "#404040",
                    fontSize: "1rem",
                    textDecoration: "line-through",
                  }}
                >
                  79€
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 800,
                    fontSize: "2.75rem",
                    lineHeight: 1,
                    color: "white",
                  }}
                >
                  39€
                </span>
                <span
                  style={{
                    background: "rgba(229,57,53,0.12)",
                    border: "1px solid rgba(229,57,53,0.25)",
                    color: "#E53935",
                    padding: "0.2rem 0.65rem",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  -50%
                </span>
              </div>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#E53935",
                  color: "white",
                  padding: "0.9rem 2rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 0 32px rgba(229,57,53,0.25)",
                }}
              >
                Obtenir le guide maintenant →
              </motion.a>
              {/* Micro-copy de Dario */}
              <p
                style={{
                  color: "#404040",
                  fontSize: "0.8rem",
                  marginTop: "0.75rem",
                  fontStyle: "italic",
                }}
              >
                Pas satisfait ? Je t&apos;en pince une. 🦞
              </p>
            </div>
          </motion.div>

          {/* RIGHT — chapters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#404040",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Table des matières
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {chapters.map((ch, i) => (
                <motion.div
                  key={ch.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  whileHover={{ x: 8 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "background 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(229,57,53,0.05)";
                    e.currentTarget.style.borderColor = "rgba(229,57,53,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "#E53935",
                      minWidth: "2.4rem",
                    }}
                  >
                    {ch.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {ch.title}
                    </div>
                    <div style={{ color: "#555", fontSize: "0.78rem" }}>
                      {ch.desc}
                    </div>
                  </div>
                  <span style={{ color: "#2a2a2a", fontSize: "0.85rem" }}>→</span>
                </motion.div>
              ))}
            </div>

            {/* Also included callouts */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#404040",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Inclus également
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { icon: "⚡", text: "50 prompts prêts à l'emploi" },
                  { icon: "📋", text: "Templates Notion complets" },
                  { icon: "🔄", text: "Mises à jour à vie" },
                  { icon: "💬", text: "Accès communauté Discord" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#808080",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .guide-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
