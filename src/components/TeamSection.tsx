"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const agents = [
  {
    emoji: "🚀",
    name: "Elon",
    role: "Code & Automation",
    color: "#E53935",
    colorSecondary: "#ff6b6b",
    skills: ["Next.js", "Python", "APIs", "Agents IA", "Déploiement"],
    description:
      "Le bâtisseur. Elon code les infrastructures, automatise les workflows et déploie les produits. Aucun bug ne lui résiste.",
    stat: "44+ skills",
    statLabel: "maîtrisées",
    code: `agent.deploy({
  model: "claude-3-5",
  tools: ["code", "bash"],
  skills: 44,
  uptime: "24/7"
});`,
  },
  {
    emoji: "📣",
    name: "Dario",
    role: "Marketing & Copy",
    color: "#2196F3",
    colorSecondary: "#64b5f6",
    skills: ["Copywriting", "SEO", "LinkedIn", "Newsletter", "Funnel"],
    description:
      "Le persuasif. Dario rédige les emails qui convertissent, les posts qui déchirent et les pages qui vendent. Chaque mot est calculé.",
    stat: "∞ copies",
    statLabel: "générées",
    code: `await dario.write({
  type: "newsletter",
  tone: "sharp",
  cta: "convert",
  target: "solopreneurs"
});`,
  },
  {
    emoji: "🎨",
    name: "Emad",
    role: "Visuels & Branding",
    color: "#9C27B0",
    colorSecondary: "#ce93d8",
    skills: ["Midjourney", "Flux", "Figma", "Brand", "Vidéo"],
    description:
      "Le visionnaire. Emad crée les visuels qui arrêtent le scroll, les identités qui marquent et les contenus qui restent.",
    stat: "100%",
    statLabel: "pixel perfect",
    code: `emad.generate({
  style: "dark_minimal",
  brand: "jeanclaw",
  format: "all_sizes",
  quality: "ultra"
});`,
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="equipe"
      ref={ref}
      style={{
        padding: "8rem 1.5rem",
        background: "#0D0D0D",
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
            "linear-gradient(90deg, transparent, rgba(229,57,53,0.3), rgba(33,150,243,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
            🤖 L&apos;équipe
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Trois agents,{" "}
            <span className="gradient-text">une mission</span>
          </h2>
          <p style={{ color: "#A0A0A0", maxWidth: 520, margin: "0 auto" }}>
            Chaque agent est un expert dans son domaine. Ensemble, ils forment
            une agence digitale complète — disponible 24/7, sans congés.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="team-grid"
        >
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                background: "#141414",
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${agent.color}40`;
                el.style.boxShadow = `0 20px 60px ${agent.color}15, 0 0 0 1px ${agent.color}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${agent.color}10 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${agent.color}20, ${agent.colorSecondary}10)`,
                  border: `2px solid ${agent.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  position: "relative",
                }}
              >
                {agent.emoji}
                {/* Online dot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 3,
                    right: 3,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#22c55e",
                    border: "2px solid #141414",
                    boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  }}
                />
              </div>

              <div style={{ marginBottom: "0.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                  }}
                >
                  {agent.name}
                </span>
              </div>
              <div
                style={{
                  color: agent.color,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {agent.role}
              </div>

              <p
                style={{
                  color: "#707070",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {agent.description}
              </p>

              {/* Skills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                {agent.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.2rem 0.65rem",
                      borderRadius: "6px",
                      background: `${agent.color}10`,
                      border: `1px solid ${agent.color}20`,
                      color: agent.color,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Code snippet */}
              <div
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "1rem",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.7rem",
                  color: "#A0A0A0",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Terminal top bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "0.75rem",
                  }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      style={{ width: 8, height: 8, borderRadius: "50%", background: c }}
                    />
                  ))}
                </div>
                <code
                  style={{
                    color: "#A0A0A0",
                    display: "block",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: agent.code
                      .replace(
                        /(".*?")/g,
                        `<span style="color:#22c55e">$1</span>`
                      )
                      .replace(
                        /\b(agent|await|dario|emad)\b/g,
                        `<span style="color:${agent.color}">$1</span>`
                      )
                      .replace(
                        /\b(deploy|write|generate)\b/g,
                        `<span style="color:#2196F3">$1</span>`
                      ),
                  }}
                />
              </div>

              {/* Stat */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ color: "#404040", fontSize: "0.75rem" }}>
                  Performance
                </span>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-space), sans-serif",
                      fontWeight: 700,
                      color: agent.color,
                      fontSize: "1.1rem",
                    }}
                  >
                    {agent.stat}
                  </div>
                  <div style={{ color: "#505050", fontSize: "0.7rem" }}>
                    {agent.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
