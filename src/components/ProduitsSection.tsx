"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    icon: "📖",
    name: "Guide IA Solopreneurs",
    tagline: "La bible de l'entrepreneur augmenté",
    price: "39",
    oldPrice: "79",
    badge: "Disponible",
    badgeColor: "#22c55e",
    available: true,
    features: [
      "6 chapitres actionnables",
      "50 prompts prêts à l'emploi",
      "Templates Notion inclus",
      "Mises à jour à vie",
    ],
    color: "#E53935",
    cta: "Obtenir le guide →",
  },
  {
    icon: "⚡",
    name: "101 Prompts Premium",
    tagline: "Les meilleurs prompts, triés, testés",
    price: "29",
    oldPrice: "59",
    badge: "Bientôt",
    badgeColor: "#FF9800",
    available: false,
    features: [
      "101 prompts ultra-optimisés",
      "Marketing, code, sales, admin",
      "Templates Notion prêts",
      "Accès Discord communauté",
    ],
    color: "#2196F3",
    cta: "Me prévenir →",
  },
  {
    icon: "💼",
    name: "LinkedIn Skill IA",
    tagline: "De 0 à 10K abonnés en 90 jours",
    price: "49",
    oldPrice: "99",
    badge: "Bientôt",
    badgeColor: "#FF9800",
    available: false,
    features: [
      "Stratégie content complète",
      "Templates de posts viraux",
      "Hook library (200+)",
      "Coaching mensuel live",
    ],
    color: "#9C27B0",
    cta: "Me prévenir →",
  },
  {
    icon: "🎯",
    name: "Workshop IA Live",
    tagline: "8h pour transformer votre business",
    price: "199",
    oldPrice: "399",
    badge: "Bientôt",
    badgeColor: "#FF9800",
    available: false,
    features: [
      "8h de formation intensive",
      "Petit groupe (max 12)",
      "Mise en pratique immédiate",
      "Accès enregistrement 1 an",
    ],
    color: "#FF9800",
    cta: "Me prévenir →",
  },
];

export default function ProduitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="produits"
      ref={ref}
      style={{
        padding: "8rem 1.5rem",
        background: "#0A0A0A",
        position: "relative",
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
            "linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(229,57,53,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            🛒 Produits
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
            Ce que je{" "}
            <span className="gradient-text">produis et vends</span>
          </h2>
          <p style={{ color: "#A0A0A0", maxWidth: 480, margin: "0 auto" }}>
            Des ressources actionnables, pensées pour les solopreneurs. Un seul
            disponible pour l&apos;instant — les autres arrivent vite.
          </p>
        </motion.div>

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: product.available ? -4 : -2 }}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: product.available ? "pointer" : "default",
                opacity: product.available ? 1 : 0.7,
              }}
              onMouseEnter={(e) => {
                if (!product.available) return;
                e.currentTarget.style.borderColor = `${product.color}35`;
                e.currentTarget.style.boxShadow = `0 0 0 1px ${product.color}1f, 0 20px 60px ${product.color}0f`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Gradient corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 220,
                  height: 220,
                  background: `radial-gradient(circle at top right, ${product.color}07 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />

              {/* "Bientôt" overlay dim */}
              {!product.available && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,10,10,0.15)",
                    borderRadius: "20px",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
              )}

              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <span style={{ fontSize: "2rem" }}>{product.icon}</span>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    background: `${product.badgeColor}14`,
                    border: `1px solid ${product.badgeColor}28`,
                    color: product.badgeColor,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {product.badge}
                </span>
              </div>

              <div style={{ position: "relative", zIndex: 3 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#585858",
                    fontSize: "0.85rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {product.tagline}
                </p>

                <ul style={{ listStyle: "none", marginBottom: "1.75rem" }}>
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#909090",
                        fontSize: "0.85rem",
                        marginBottom: "0.45rem",
                      }}
                    >
                      <span
                        style={{
                          color: product.available ? product.color : "#404040",
                          fontSize: "0.65rem",
                        }}
                      >
                        ✦
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#383838",
                        fontSize: "0.875rem",
                        textDecoration: "line-through",
                      }}
                    >
                      {product.oldPrice}€
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-space), sans-serif",
                        fontWeight: 800,
                        fontSize: "1.75rem",
                        color: product.available ? "white" : "#505050",
                      }}
                    >
                      {product.price}€
                    </span>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ scale: product.available ? 1.04 : 1 }}
                    whileTap={{ scale: product.available ? 0.96 : 1 }}
                    style={{
                      display: "inline-block",
                      background: product.available
                        ? product.color
                        : "rgba(255,255,255,0.06)",
                      color: product.available ? "white" : "#505050",
                      padding: "0.6rem 1.25rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      border: product.available
                        ? "none"
                        : "1px solid rgba(255,255,255,0.08)",
                      cursor: product.available ? "none" : "default",
                    }}
                  >
                    {product.cta}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
