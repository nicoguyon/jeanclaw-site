"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 180000,
    suffix: "K+",
    display: "180K+",
    label: "GitHub Stars",
    icon: "⭐",
    neon: "#fcc419",
    glow: "rgba(252,196,25,0.3)",
  },
  {
    value: 245,
    suffix: "+",
    display: "245+",
    label: "Apps dans l'écosystème",
    icon: "🧩",
    neon: "#748ffc",
    glow: "rgba(116,143,252,0.3)",
  },
  {
    value: 67,
    suffix: "%",
    display: "67%",
    label: "des agents génèrent du revenu",
    icon: "💸",
    neon: "#51cf66",
    glow: "rgba(81,207,102,0.3)",
  },
  {
    value: 34,
    suffix: "%",
    display: "34%",
    label: "atteignent 4 chiffres le 1er mois",
    icon: "🚀",
    neon: "#f03e3e",
    glow: "rgba(240,62,62,0.3)",
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({
  stat,
  animate,
}: {
  stat: (typeof stats)[0];
  animate: boolean;
}) {
  // For large numbers we show K format
  const raw = useCountUp(
    stat.suffix === "K+" ? 180 : stat.value,
    1800,
    animate
  );

  const displayValue =
    stat.suffix === "K+"
      ? `${raw}K+`
      : stat.suffix === "+"
      ? `${raw}+`
      : `${raw}%`;

  return (
    <div
      className="relative flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-navy-900/60 overflow-hidden group transition-all duration-300 hover:-translate-y-1"
      style={{ border: `1px solid ${stat.neon}33` }}
    >
      {/* Animated glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 60px ${stat.glow} inset, 0 0 30px ${stat.glow}` }}
      />

      {/* Top neon bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.neon}, transparent)`,
          opacity: 0.8,
        }}
      />

      {/* Pulse dot */}
      <span className="relative z-10 text-4xl mb-3 select-none">{stat.icon}</span>

      {/* Counter */}
      <span
        className="relative z-10 text-4xl sm:text-5xl font-black tabular-nums"
        style={{ color: stat.neon, textShadow: `0 0 20px ${stat.glow}` }}
      >
        {animate ? displayValue : "0"}
      </span>

      {/* Label */}
      <span className="relative z-10 mt-2 text-sm text-navy-300 leading-snug max-w-[140px]">
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="chiffres" className="py-20 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(252,196,25,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{ background: "rgba(252,196,25,0.12)", color: "#fcc419", border: "1px solid rgba(252,196,25,0.25)" }}>
            Écosystème OpenClaw
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            🦞 Jean-Claw en chiffres
          </h2>
          <p className="text-navy-400 max-w-md mx-auto text-sm">
            Des vraies métriques. Des vrais builders. Une communauté qui génère.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-navy-500">
          <span className="w-8 h-px bg-navy-700" />
          <span>Mis à jour en temps réel · Données communauté · Feb 2026</span>
          <span className="w-8 h-px bg-navy-700" />
        </div>
      </div>
    </section>
  );
}
