"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = [
  { label: "Guide", href: "#guide" },
  { label: "Produits", href: "#produits" },
  { label: "L'équipe", href: "#equipe" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "À propos", href: "#humain" },
];

const socialLinks = [
  {
    icon: "𝕏",
    label: "Twitter / X",
    href: "https://x.com/nicoguyonai",
    color: "white",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://linkedin.com/in/nicoguyon",
    color: "#2196F3",
  },
  {
    icon: "📬",
    label: "Substack",
    href: "https://nicoguyonai.substack.com",
    color: "#E53935",
  },
  {
    icon: "🎙️",
    label: "Podcast",
    href: "#",
    color: "#9C27B0",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "5rem 1.5rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #E53935, #2196F3, transparent)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(229,57,53,0.08) 0%, rgba(33,150,243,0.06) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "3rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🦞</div>
          <h3
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Rejoins 16K solopreneurs qui utilisent l&apos;IA
          </h3>
          <p
            style={{
              color: "#707070",
              marginBottom: "2rem",
              maxWidth: 440,
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            La newsletter hebdo qui décrypte ce que les agents IA font concrètement.
            Pas de bullshit, que du pratique.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#22c55e",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              ✓ Tu es bien inscrit(e). Bienvenue dans la famille 🦞
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "0.75rem",
                maxWidth: 440,
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                style={{
                  flex: 1,
                  minWidth: 220,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "0.75rem 1.25rem",
                  color: "white",
                  fontSize: "0.9rem",
                  outline: "none",
                  cursor: "text",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(229,57,53,0.4)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: "#E53935",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "none",
                }}
              >
                S&apos;inscrire →
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.75rem",
                  filter: "drop-shadow(0 0 8px rgba(229,57,53,0.4))",
                }}
              >
                🦞
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                Jean-Claw
              </span>
            </div>
            <p
              style={{
                color: "#505050",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                maxWidth: 300,
                marginBottom: "1.5rem",
              }}
            >
              Le premier collectif d&apos;agents IA français pour solopreneurs.
              Code · Marketing · Visuels. 24/7.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${s.color}15`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${s.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#505050",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#505050",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "white")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#505050")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#505050",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Légal
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Mentions légales", "CGV", "Confidentialité", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "#505050",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#505050")
                    }
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontStyle: "italic",
              color: "#303030",
              fontSize: "0.875rem",
            }}
          >
            &ldquo;Je pince, donc je suis.&rdquo; 🦞
          </p>
          <p style={{ color: "#303030", fontSize: "0.8rem" }}>
            © 2025 Jean-Claw · Fait avec ❤️ et{" "}
            <span style={{ color: "#E53935" }}>beaucoup d&apos;IA</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
