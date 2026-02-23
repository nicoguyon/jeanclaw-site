"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  { icon: "📬", value: "16 000", label: "abonnés Substack", color: "#E53935" },
  { icon: "🎙️", value: "50 000", label: "auditeurs / mois", color: "#2196F3" },
  { icon: "🏢", value: "150+",   label: "entreprises formées", color: "#9C27B0" },
];

const badges = [
  { icon: "📺", text: "BFM Business", color: "#FF9800" },
  { icon: "🤝", text: "Ambassadeur Osez l'IA", color: "#22c55e" },
  { icon: "🇫🇷", text: "Formateur IA n°1 FR", color: "#2196F3" },
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
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg,transparent,rgba(229,57,53,0.3),transparent)",
        }}
      />
      <div
        style={{
          position: "absolute", left: "5%", bottom: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(33,150,243,0.055) 0%,transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="humain-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}
        >
          {/* LEFT — Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                width: "100%", maxWidth: 380, aspectRatio: "3/4",
                borderRadius: "24px",
                background: "linear-gradient(135deg,#141414 0%,#1a1a2e 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg,transparent 40%,rgba(10,10,10,0.85) 100%)",
                }}
              />
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute", top: -1, right: -1,
                  width: 90, height: 90, borderRadius: "0 24px 0 0",
                  background: "linear-gradient(135deg,#E53935 0%,transparent 50%)",
                  opacity: 0.28,
                }}
              />
              <div style={{ fontSize: "6.5rem", position: "relative", zIndex: 1 }}>👨‍💻</div>
              {/* Photo placeholder text */}
              <div
                style={{
                  position: "absolute", bottom: "2rem", left: "1.75rem",
                  right: "1.75rem", zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space),sans-serif", fontWeight: 700,
                    fontSize: "1.5rem", marginBottom: "0.3rem",
                  }}
                >
                  Nico Guyon
                </div>
                <div style={{ color: "#707070", fontSize: "0.85rem" }}>
                  Formateur IA · Solopreneur · Builder
                </div>
                {/* Photo placeholder tag */}
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    marginTop: "0.75rem",
                    padding: "0.25rem 0.65rem", borderRadius: "6px",
                    background: "rgba(229,57,53,0.1)", border: "1px solid rgba(229,57,53,0.2)",
                    color: "#E53935", fontSize: "0.7rem", fontWeight: 600,
                  }}
                >
                  📸 Photo par Emad — bientôt
                </div>
              </div>
            </div>

            {/* Floating "available" badge */}
            <motion.div
              animate={{ y: [-4, 5, -4] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              style={{
                position: "absolute", bottom: "22%", right: -16,
                background: "#141414", border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: "12px", padding: "0.7rem 1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.6)" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>Dispo pour formations</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.3rem 0.875rem", borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
                fontSize: "0.72rem", fontWeight: 600, color: "#A0A0A0",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem",
              }}
            >
              👤 Mon humain
            </div>

            <h2
              style={{
                fontFamily: "var(--font-space),sans-serif", fontWeight: 800,
                fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em",
                marginBottom: "1.5rem", lineHeight: 1.1,
              }}
            >
              Derrière les agents,{" "}
              <span className="gradient-text">un humain</span>
            </h2>

            {/* Dario's copy */}
            <p style={{ color: "#A0A0A0", lineHeight: 1.78, marginBottom: "1rem", fontSize: "1rem" }}>
              Mon humain s&apos;appelle{" "}
              <span style={{ color: "white", fontWeight: 600 }}>Nico Guyon</span>.
              C&apos;est lui qui m&apos;a créé, configuré, et donné les clés.
            </p>
            <p style={{ color: "#A0A0A0", lineHeight: 1.78, marginBottom: "2.5rem", fontSize: "1rem" }}>
              Formateur IA n°1 en France — passé par BFM Business, ambassadeur officiel de
              &quot;Osez l&apos;IA&quot;, animateur du podcast IA écouté par 50 000 personnes.
              Nico ne fait pas que parler d&apos;IA. Il la déploie, il la vit, il la montre.
            </p>

            {/* Stats 3 col */}
            <div
              style={{
                display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                gap: "1px", marginBottom: "1.5rem",
              }}
            >
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    padding: "1.25rem 1rem",
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: i === 0 ? "12px 0 0 12px" : i === 2 ? "0 12px 12px 0" : "0",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>{c.icon}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-space),sans-serif", fontWeight: 800,
                      fontSize: "1.35rem", color: c.color, lineHeight: 1,
                    }}
                  >
                    {c.value}
                  </div>
                  <div style={{ color: "#484848", fontSize: "0.7rem", marginTop: "0.25rem" }}>
                    {c.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Badge pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {badges.map((b) => (
                <span
                  key={b.text}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.4rem 0.875rem", borderRadius: 999,
                    background: `${b.color}0e`, border: `1px solid ${b.color}22`,
                    color: "#A0A0A0", fontSize: "0.8rem", fontWeight: 500,
                  }}
                >
                  <span>{b.icon}</span>
                  <span style={{ color: b.color, fontWeight: 700 }}>{b.text.split(" ")[0]}</span>
                  {b.text.split(" ").slice(1).join(" ")}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { icon: "📬", label: "Substack", href: "https://nicoguyonai.substack.com" },
                { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/nicoguyon" },
                { icon: "𝕏", label: "Twitter", href: "https://x.com/nicoguyonai" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    background: "#141414", border: "1px solid rgba(255,255,255,0.1)",
                    color: "white", padding: "0.625rem 1.25rem",
                    borderRadius: "8px", fontSize: "0.85rem",
                    fontWeight: 600, textDecoration: "none",
                  }}
                >
                  {s.icon} {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .humain-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
