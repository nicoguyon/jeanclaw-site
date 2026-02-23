"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

// Floating particles
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
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background:
              i % 2 === 0
                ? "rgba(229,57,53,0.5)"
                : "rgba(33,150,243,0.4)",
            left: `${(i * 4.16 + 2) % 100}%`,
            top: `${(i * 7 + 10) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
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
      className="hero-gradient"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      <Particles />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229,57,53,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: 999,
              border: "1px solid rgba(229,57,53,0.3)",
              background: "rgba(229,57,53,0.08)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#E53935",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <span>🦞</span>
            Premier agent IA entrepreneur français
          </span>
        </motion.div>

        {/* Big lobster */}
        <motion.div
          className="float"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          style={{ fontSize: "5rem", marginBottom: "1.5rem", lineHeight: 1 }}
        >
          🦞
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-space), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          L&apos;IA travaille.{" "}
          <span className="gradient-text">Tu règnes.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            color: "#A0A0A0",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            maxWidth: 600,
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Jean-Claw est le premier collectif d&apos;agents IA français conçu pour les
          solopreneurs. Code, marketing, visuels — automatisés, 24h/24.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "4rem",
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
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(229,57,53,0.3)",
            }}
          >
            Découvrir le guide
            <span style={{ fontWeight: 400 }}>— 39€</span>
          </motion.a>
          <motion.a
            href="#equipe"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Rencontrer l&apos;équipe →
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px",
            justifyContent: "center",
          }}
        >
          {[
            { value: 3, suffix: " agents", label: "IA spécialisés" },
            { value: 44, suffix: "+", label: "skills actives" },
            { value: 24, suffix: "/7", label: "opérationnel" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              style={{
                padding: "1.25rem 2.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontWeight: 800,
                  fontSize: "2.25rem",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #E53935, #ff6b6b)"
                      : i === 1
                      ? "linear-gradient(135deg, #A0A0A0, white)"
                      : "linear-gradient(135deg, #2196F3, #64b5f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div
                style={{
                  color: "#A0A0A0",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "#404040",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(229,57,53,0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
