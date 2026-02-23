"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCountUp(target: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

const revenueData = [
  { month: "Juil", value: 1200, color: "#E53935" },
  { month: "Août", value: 2100, color: "#E53935" },
  { month: "Sep", value: 1800, color: "#E53935" },
  { month: "Oct", value: 3400, color: "#E53935" },
  { month: "Nov", value: 4200, color: "#E53935" },
  { month: "Déc", value: 5800, color: "#E53935" },
  { month: "Jan", value: 6100, color: "#2196F3" },
  { month: "Fév", value: 7900, color: "#2196F3" },
];

const maxValue = Math.max(...revenueData.map((d) => d.value));

const terminalLines = [
  { text: "$ jean-claw status --verbose", color: "#A0A0A0" },
  { text: "✓ Elon: ONLINE — building v2.4.1", color: "#22c55e" },
  { text: "✓ Dario: ONLINE — drafting newsletter #47", color: "#22c55e" },
  { text: "✓ Emad: ONLINE — generating 12 visuals", color: "#22c55e" },
  { text: "→ Revenue MTD: 7,900€ (+29.5%)", color: "#2196F3" },
  { text: "→ Skills active: 44/44", color: "#2196F3" },
  { text: "→ Uptime: 99.98%", color: "#A0A0A0" },
  { text: "▌", color: "#E53935" },
];

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const revenue = useCountUp(7900, 2500, inView);
  const growth = useCountUp(29, 1800, inView);
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setTerminalIndex((prev) => {
        if (prev >= terminalLines.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      id="dashboard"
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
            "linear-gradient(90deg, transparent, rgba(229,57,53,0.2), rgba(33,150,243,0.2), transparent)",
        }}
      />

      {/* Scanline effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.3rem 0.875rem",
              borderRadius: 999,
              border: "1px solid rgba(229,57,53,0.2)",
              background: "rgba(229,57,53,0.05)",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#E53935",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            📊 Dashboard live
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
            Les agents travaillent.{" "}
            <span className="gradient-text">Les chiffres parlent.</span>
          </h2>
          <p style={{ color: "#A0A0A0", maxWidth: 480, margin: "0 auto" }}>
            Transparence totale. Voici ce que 3 agents IA génèrent en autonomie pour
            un solopreneur.
          </p>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
          className="dashboard-grid"
        >
          {/* Left: Revenue chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ borderRadius: "20px", padding: "2rem" }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "2rem",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#505050",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.25rem",
                  }}
                >
                  Revenus (€)
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 800,
                    fontSize: "2.25rem",
                  }}
                >
                  {revenue.toLocaleString("fr-FR")}€
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    marginTop: "0.25rem",
                    color: "#22c55e",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  ↑ +{growth}% vs mois préc.
                </div>
              </div>
              <div
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "8px",
                  background: "rgba(229,57,53,0.1)",
                  border: "1px solid rgba(229,57,53,0.2)",
                  color: "#E53935",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                MTD
              </div>
            </div>

            {/* Bar chart */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
                height: 140,
                paddingBottom: "0.5rem",
              }}
            >
              {revenueData.map((bar, i) => {
                const heightPct = (bar.value / maxValue) * 100;
                return (
                  <div
                    key={bar.month}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${heightPct}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                      style={{
                        width: "100%",
                        background:
                          i >= revenueData.length - 2
                            ? `linear-gradient(to top, ${bar.color}, ${bar.color}80)`
                            : `${bar.color}40`,
                        borderRadius: "4px 4px 2px 2px",
                        minHeight: 4,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {i >= revenueData.length - 2 && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, transparent, rgba(255,255,255,0.1))",
                          }}
                        />
                      )}
                    </motion.div>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        color: "#505050",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {bar.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mini stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {[
                { label: "Produits vendus", value: "127" },
                { label: "Taux conversion", value: "4.2%" },
                { label: "Panier moyen", value: "62€" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-space), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: "#505050", fontSize: "0.7rem", marginTop: "2px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal + Activity */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "1.5rem",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flex: 1,
                  }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      style={{ width: 10, height: 10, borderRadius: "50%", background: c }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    color: "#404040",
                    fontSize: "0.7rem",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  jean-claw — zsh
                </span>
                <div style={{ flex: 1 }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {terminalLines.slice(0, terminalIndex + 1).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: line.color,
                      lineHeight: 1.6,
                    }}
                  >
                    {line.text === "▌" ? (
                      <span className="cursor-blink" style={{ color: "#E53935" }}>
                        ▌
                      </span>
                    ) : (
                      line.text
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Agents status grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass"
              style={{ borderRadius: "16px", padding: "1.5rem" }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#505050",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Agents actifs
              </div>
              {[
                { name: "Elon 🚀", task: "Deploying next.js v2.4.1", load: 78, color: "#E53935" },
                { name: "Dario 📣", task: "Writing newsletter #47", load: 45, color: "#2196F3" },
                { name: "Emad 🎨", task: "Generating 12 visuals", load: 91, color: "#9C27B0" },
              ].map((agent) => (
                <div
                  key={agent.name}
                  style={{ marginBottom: "0.875rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                      {agent.name}
                    </span>
                    <span style={{ color: "#505050", fontSize: "0.75rem" }}>
                      {agent.task}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${agent.load}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg, ${agent.color}, ${agent.color}80)`,
                        borderRadius: 999,
                        boxShadow: `0 0 8px ${agent.color}60`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
