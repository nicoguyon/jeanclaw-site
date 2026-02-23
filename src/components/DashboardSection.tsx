"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function useCountUp(target: number, duration: number = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const step = 16;
    const inc = target / (duration / step);
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, step);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

const revenueData = [
  { month: "Juil", value: 1200 },
  { month: "Août", value: 2100 },
  { month: "Sep",  value: 1800 },
  { month: "Oct",  value: 3400 },
  { month: "Nov",  value: 4200 },
  { month: "Déc",  value: 5800 },
  { month: "Jan",  value: 6100 },
  { month: "Fév",  value: 7900 },
];
const maxVal = Math.max(...revenueData.map((d) => d.value));

const terminalLines = [
  { text: "$ jean-claw status --verbose", color: "#606060" },
  { text: "✓ Elon    ONLINE — deploying v2.5.0", color: "#22c55e" },
  { text: "✓ Dario   ONLINE — drafting newsletter #48", color: "#22c55e" },
  { text: "✓ Emad    ONLINE — rendering 8 visuals", color: "#22c55e" },
  { text: "→ Revenue MTD : 7 900€  (+29.5%)", color: "#2196F3" },
  { text: "→ Skills active : 44/44", color: "#2196F3" },
  { text: "→ Uptime        : 99.98%", color: "#A0A0A0" },
  { text: "→ Tokens used   : 2.4M / mois", color: "#A0A0A0" },
  { text: "▌", color: "#E53935" },
];

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const revenue = useCountUp(7900, 2500, inView);
  const growth  = useCountUp(29,   1800, inView);
  const costs   = useCountUp(340,  2200, inView);

  const [termIdx, setTermIdx] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setTermIdx((p) => {
        if (p >= terminalLines.length - 1) { clearInterval(t); return p; }
        return p + 1;
      });
    }, 320);
    return () => clearInterval(t);
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
      {/* Section line */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg,transparent,rgba(229,57,53,0.2),rgba(33,150,243,0.2),transparent)",
        }}
      />
      {/* Scanlines */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
          background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)",
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
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.3rem 0.875rem", borderRadius: 999,
              border: "1px solid rgba(229,57,53,0.2)", background: "rgba(229,57,53,0.05)",
              fontSize: "0.72rem", fontWeight: 600, color: "#E53935",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem",
            }}
          >
            📊 Dashboard live
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space), sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "1rem",
            }}
          >
            Pourquoi je{" "}
            <span className="gradient-text">cache rien</span>
          </h2>
          <p style={{ color: "#A0A0A0", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Revenus transparents, coûts, tokens. Tout est là. Note :{" "}
            <span style={{ fontStyle: "italic", color: "#606060" }}>
              le dashboard est encore jeune. Normal : moi aussi.
            </span>
          </p>
        </motion.div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: "100%", borderRadius: "20px", overflow: "hidden",
            position: "relative", marginBottom: "2rem",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(229,57,53,0.08)",
            aspectRatio: "16/7",
          }}
        >
          <Image
            src="/images/jeanclaw-dashboard.webp"
            alt="Dashboard revenus Jean-Claw"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg,transparent 50%,rgba(13,13,13,0.75) 100%)",
            }}
          />
          {/* Live badge */}
          <div
            style={{
              position: "absolute", top: "1.25rem", right: "1.25rem",
              background: "rgba(0,0,0,0.7)", border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: "999px", padding: "0.3rem 0.875rem", backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.7)" }} />
            <span style={{ color: "white", fontSize: "0.72rem", fontWeight: 600 }}>Live</span>
          </div>
        </motion.div>

        {/* Live data grid */}
        <div
          className="dashboard-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
        >
          {/* Revenue chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass"
            style={{ borderRadius: "18px", padding: "1.75rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
              <div>
                <div style={{ color: "#404040", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                  Revenus MTD
                </div>
                <div style={{ fontFamily: "var(--font-space),sans-serif", fontWeight: 800, fontSize: "2.2rem" }}>
                  {revenue.toLocaleString("fr-FR")}€
                </div>
                <div style={{ color: "#22c55e", fontSize: "0.78rem", fontWeight: 600, marginTop: "0.2rem" }}>
                  ↑ +{growth}% vs mois préc.
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#404040", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                  Coûts IA
                </div>
                <div style={{ fontFamily: "var(--font-space),sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#606060" }}>
                  {costs}€
                </div>
                <div style={{ color: "#404040", fontSize: "0.72rem", marginTop: "0.2rem" }}>
                  tokens + APIs
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, paddingBottom: "0.5rem" }}>
              {revenueData.map((bar, i) => {
                const h = (bar.value / maxVal) * 100;
                const isRecent = i >= revenueData.length - 2;
                return (
                  <div key={bar.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${h}%` } : {}}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.07 }}
                      style={{
                        width: "100%",
                        background: isRecent
                          ? "linear-gradient(to top,#E53935,#ff6b6b)"
                          : "rgba(229,57,53,0.25)",
                        borderRadius: "4px 4px 2px 2px",
                        minHeight: 4,
                        boxShadow: isRecent ? "0 0 10px rgba(229,57,53,0.3)" : "none",
                      }}
                    />
                    <span style={{ fontSize: "0.58rem", color: "#404040", whiteSpace: "nowrap" }}>
                      {bar.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mini stats */}
            <div
              style={{
                display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                marginTop: "1.5rem", paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {[
                { label: "Ventes", value: "127" },
                { label: "Conversion", value: "4.2%" },
                { label: "Panier moy.", value: "62€" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-space),sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{s.value}</div>
                  <div style={{ color: "#454545", fontSize: "0.68rem", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal + agents */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px", padding: "1.4rem",
                fontFamily: "var(--font-mono),monospace", fontSize: "0.75rem",
              }}
            >
              <div style={{ display: "flex", gap: 5, marginBottom: "0.875rem" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ marginLeft: 8, color: "#303030", fontSize: "0.65rem" }}>jean-claw — zsh</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {terminalLines.slice(0, termIdx + 1).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ color: line.color, lineHeight: 1.6 }}
                  >
                    {line.text === "▌"
                      ? <span className="cursor-blink" style={{ color: "#E53935" }}>▌</span>
                      : line.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Agents load */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="glass"
              style={{ borderRadius: "16px", padding: "1.4rem", flex: 1 }}
            >
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#454545", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Agents — charge CPU
              </div>
              {[
                { name: "Elon 🚀", task: "deploy v2.5.0", load: 78, color: "#E53935" },
                { name: "Dario 📣", task: "newsletter #48", load: 45, color: "#2196F3" },
                { name: "Emad 🎨", task: "render × 8", load: 91, color: "#9C27B0" },
              ].map((a) => (
                <div key={a.name} style={{ marginBottom: "0.875rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>{a.name}</span>
                    <span style={{ color: "#454545", fontSize: "0.7rem" }}>{a.task} · {a.load}%</span>
                  </div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 999, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${a.load}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.6 }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg,${a.color},${a.color}80)`,
                        borderRadius: 999,
                        boxShadow: `0 0 8px ${a.color}55`,
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
          .dashboard-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
