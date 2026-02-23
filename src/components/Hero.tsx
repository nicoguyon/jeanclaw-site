"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = 16;
          const increment = target / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function Particles() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 28 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background:
              i % 2 === 0
                ? "rgba(229,57,53,0.55)"
                : "rgba(33,150,243,0.45)",
            left: `${(i * 3.7 + 1.5) % 100}%`,
            top: `${(i * 6.3 + 5) % 92}%`,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.22,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "6rem 1.5rem 5rem",
        overflow: "hidden",
        background: "#0A0A0A",
      }}
    >
      {/* Hero background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/jeanclaw-hero.webp"
          alt="Jean-Claw hero"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.22,
          }}
        />
        {/* Gradient overlay on top of image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.6) 70%, #0A0A0A 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(229,57,53,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(33,150,243,0.10) 0%, transparent 55%)",
          }}
        />
      </div>

      <Particles />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,57,53,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: 860,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1.1rem",
              borderRadius: 999,
              border: "1px solid rgba(229,57,53,0.35)",
              background: "rgba(229,57,53,0.08)",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "#E53935",
              letterSpacing: "0.04em",
            }}
          >
            {/* Pulse dot */}
            <span style={{ position: "relative", display: "inline-flex" }}>
              <span
                style={{
                  display: "block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px rgba(34,197,94,0.7)",
                }}
              />
            </span>
            🦞 Online · 3 agents · 44 skills · 24/7
          </span>
        </motion.div>

        {/* Main title — Dario's copy */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-space), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6.5vw, 5.25rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            marginBottom: "1.75rem",
          }}
        >
          L&apos;IA qui bosse{" "}
          <span className="gradient-text">pendant que tu lis</span>{" "}
          ces lignes.
        </motion.h1>

        {/* Subtitle — Dario's copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            color: "#A0A0A0",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            maxWidth: 620,
            margin: "0 auto 2.75rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Jean-Claw est un agent IA autonome. Il code, il rédige, il crée — et
          il vend ce qu&apos;il produit. Premier agent entrepreneur français.
          Résultat : des vrais produits, des vrais euros, zéro bullshit.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "4.5rem",
          }}
        >
          <motion.a
            href="#guide"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#E53935",
              color: "white",
              padding: "0.9rem 2.1rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(229,57,53,0.32)",
            }}
          >
            Découvrir le guide
            <span
              style={{
                opacity: 0.8,
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              — 39€
            </span>
          </motion.a>
          <motion.a
            href="#dashboard"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              padding: "0.9rem 2.1rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            Voir le dashboard →
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: 0,
            justifyContent: "center",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {[
            {
              value: 3,
              suffix: "",
              unit: "agents IA",
              color: "#E53935",
              accent: "linear-gradient(135deg,#E53935,#ff6b6b)",
            },
            {
              value: 44,
              suffix: "+",
              unit: "skills actives",
              color: "#A0A0A0",
              accent: "linear-gradient(135deg,#888,#fff)",
            },
            {
              value: 24,
              suffix: "/7",
              unit: "opérationnel",
              color: "#2196F3",
              accent: "linear-gradient(135deg,#2196F3,#64b5f6)",
            },
          ].map((s, i) => (
            <motion.div
              key={s.unit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.12 }}
              style={{
                padding: "1.4rem 2.8rem",
                textAlign: "center",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontWeight: 800,
                  fontSize: "2.4rem",
                  lineHeight: 1,
                  background: s.accent,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.3rem",
                }}
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div
                style={{
                  color: "#505050",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {s.unit}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "#303030",
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          zIndex: 10,
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, rgba(229,57,53,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
