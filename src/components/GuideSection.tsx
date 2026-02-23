"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    num: "01",
    title: "Comprendre les agents IA",
    desc: "Architectures, capacités, limites",
  },
  {
    num: "02",
    title: "Construire votre stack IA",
    desc: "Les outils indispensables en 2025",
  },
  {
    num: "03",
    title: "Automatiser votre marketing",
    desc: "Content, newsletters, réseaux sociaux",
  },
  {
    num: "04",
    title: "Coder sans coder",
    desc: "Claude Code, Cursor, Windsurf",
  },
  {
    num: "05",
    title: "Générer des visuels pro",
    desc: "Midjourney, Flux, Ideogram",
  },
  {
    num: "06",
    title: "Vendre avec l'IA",
    desc: "Tunnels, copywriting, conversion",
  },
  {
    num: "07",
    title: "Service client automatisé",
    desc: "Chatbots, FAQ, support 24/7",
  },
  {
    num: "08",
    title: "Finance & reporting IA",
    desc: "Tableaux de bord intelligents",
  },
  {
    num: "09",
    title: "Créer votre clone digital",
    desc: "Voix, style, personnalité",
  },
  {
    num: "10",
    title: "Scaler en solo",
    desc: "De 0 à 10K€/mois avec des agents",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </div>
  );
}

export default function GuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229,57,53,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="guide-grid"
        >
          {/* Left: Cover + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>📖 Le Guide</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              IA pour{" "}
              <span className="gradient-text">Solopreneurs</span>
            </h2>
            <p style={{ color: "#A0A0A0", lineHeight: 1.7, marginBottom: "2rem" }}>
              Le guide complet pour construire votre empire solo avec les agents
              IA. 10 chapitres, des frameworks actionnables, des outils testés.
              Ce n&apos;est pas de la théorie — c&apos;est ce que Jean-Claw utilise au quotidien.
            </p>

            {/* Fake cover */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: "100%",
                maxWidth: 340,
                aspectRatio: "3/4",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #1a0a0a 0%, #0a1a2a 100%)",
                border: "1px solid rgba(229,57,53,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(229,57,53,0.1)",
              }}
            >
              {/* Cover gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(229,57,53,0.15) 0%, rgba(33,150,243,0.1) 100%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🦞</div>
                <div
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                  }}
                >
                  IA pour
                  <br />
                  Solopreneurs
                </div>
                <div
                  style={{
                    color: "#A0A0A0",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  par Jean-Claw × Nico Guyon
                </div>
                <div
                  style={{
                    marginTop: "1.5rem",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.7rem",
                    color: "#E53935",
                    letterSpacing: "0.05em",
                  }}
                >
                  10 CHAPITRES · ÉDITION 2025
                </div>
              </div>
            </motion.div>

            {/* Price + CTA */}
            <div style={{ marginTop: "2rem" }}>
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
                    fontSize: "2.5rem",
                    color: "white",
                  }}
                >
                  39€
                </span>
                <span
                  style={{
                    background: "rgba(229,57,53,0.15)",
                    border: "1px solid rgba(229,57,53,0.3)",
                    color: "#E53935",
                    padding: "0.2rem 0.6rem",
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
                  padding: "0.875rem 2rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 0 30px rgba(229,57,53,0.25)",
                }}
              >
                Obtenir le guide maintenant →
              </motion.a>
              <p
                style={{
                  color: "#505050",
                  fontSize: "0.8rem",
                  marginTop: "0.75rem",
                }}
              >
                ✓ Accès à vie · ✓ Mises à jour incluses · ✓ Satisfait ou remboursé
              </p>
            </div>
          </motion.div>

          {/* Right: Chapters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#505050",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Table des matières
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {chapters.map((ch, i) => (
                <motion.div
                  key={ch.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ x: 6 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem 1.25rem",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    transition: "background 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(229,57,53,0.05)";
                    el.style.borderColor = "rgba(229,57,53,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.borderColor = "rgba(255,255,255,0.04)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "#E53935",
                      minWidth: "2.5rem",
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
                    <div style={{ color: "#606060", fontSize: "0.78rem" }}>
                      {ch.desc}
                    </div>
                  </div>
                  <span style={{ color: "#303030", fontSize: "0.8rem" }}>→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .guide-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
