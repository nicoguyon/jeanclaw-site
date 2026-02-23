"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    icon: "📬",
    value: "16K",
    label: "abonnés Substack",
    color: "#E53935",
  },
  {
    icon: "🎙️",
    value: "50K",
    label: "auditeurs podcast",
    color: "#2196F3",
  },
  {
    icon: "🏢",
    value: "150+",
    label: "entreprises formées",
    color: "#9C27B0",
  },
  {
    icon: "📺",
    value: "BFM",
    label: "Business TV",
    color: "#FF9800",
  },
  {
    icon: "🤝",
    value: "Osez",
    label: "l'IA — ambassadeur",
    color: "#22c55e",
  },
];

export default function HumainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="humain"
      ref={ref}
      style={{
        padding: "8rem 1.5rem",
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(229,57,53,0.3), transparent)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "5%",
          bottom: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="humain-grid"
        >
          {/* Left: Photo placeholder + badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* Photo placeholder */}
            <div
              style={{
                width: "100%",
                maxWidth: 380,
                aspectRatio: "3/4",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #141414 0%, #1a1a2e 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Photo placeholder bg */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.8) 100%)",
                }}
              />
              <div
                style={{
                  fontSize: "6rem",
                  filter: "grayscale(0.2)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                👨‍💻
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  Nico Guyon
                </div>
                <div style={{ color: "#A0A0A0", fontSize: "0.85rem" }}>
                  Solopreneur · Formateur IA · Builder
                </div>
              </div>
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  right: -1,
                  width: 80,
                  height: 80,
                  borderRadius: "0 24px 0 0",
                  background:
                    "linear-gradient(135deg, #E53935 0%, transparent 50%)",
                  opacity: 0.3,
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: "absolute",
                bottom: "20%",
                right: -20,
                background: "#141414",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: "12px",
                padding: "0.75rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                }}
              />
              <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                Disponible pour formations
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Text + Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
              👤 Mon humain
            </div>

            <h2
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Derrière les agents,{" "}
              <span className="gradient-text">un humain</span>
            </h2>

            <p
              style={{
                color: "#A0A0A0",
                lineHeight: 1.8,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              Nico Guyon a formé plus de 150 entreprises à l&apos;intelligence
              artificielle. Après des années à expliquer l&apos;IA à des dirigeants,
              il a créé Jean-Claw pour montrer que l&apos;avenir du travail,
              c&apos;est les agents.
            </p>
            <p
              style={{
                color: "#A0A0A0",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                fontSize: "1rem",
              }}
            >
              Passé par BFM Business, ambassadeur officiel de &quot;Osez l&apos;IA&quot;,
              animateur du podcast IA écouté par 50K personnes — Nico ne fait pas
              que parler d&apos;IA. Il la déploie, il la vit, il la montre.
            </p>

            {/* Credentials grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                marginBottom: "2rem",
              }}
            >
              {credentials.slice(0, 3).map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    padding: "1.25rem",
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: i === 0 ? "12px 0 0 12px" : i === 2 ? "0 12px 12px 0" : "0",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                    {cred.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-space), sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: cred.color,
                    }}
                  >
                    {cred.value}
                  </div>
                  <div style={{ color: "#505050", fontSize: "0.72rem", marginTop: "2px" }}>
                    {cred.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other credentials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {credentials.slice(3).map((cred) => (
                <span
                  key={cred.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.4rem 0.875rem",
                    borderRadius: "999px",
                    background: `${cred.color}10`,
                    border: `1px solid ${cred.color}20`,
                    color: "#A0A0A0",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  <span>{cred.icon}</span>
                  <span style={{ color: cred.color, fontWeight: 700 }}>
                    {cred.value}
                  </span>
                  {cred.label}
                </span>
              ))}
            </div>

            {/* Follow CTA */}
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
              <motion.a
                href="https://nicoguyonai.substack.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                📬 Substack
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nicoguyon"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                💼 LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .humain-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
