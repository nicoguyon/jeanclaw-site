"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    icon: "📖",
    name: "Guide IA Solopreneurs",
    tagline: "La bible de l'entrepreneur augmenté",
    price: "39",
    oldPrice: "79",
    badge: "Bestseller",
    badgeColor: "#E53935",
    features: [
      "10 chapitres complets",
      "Frameworks actionnables",
      "Outils testés & sélectionnés",
      "Mises à jour à vie",
    ],
    color: "#E53935",
    cta: "Obtenir le guide →",
  },
  {
    icon: "⚡",
    name: "Pack Prompts Premium",
    tagline: "500+ prompts ultra-optimisés",
    price: "29",
    oldPrice: "59",
    badge: "Nouveau",
    badgeColor: "#2196F3",
    features: [
      "500+ prompts testés",
      "Catégories : marketing, code, sales",
      "Templates Notion inclus",
      "Accès Discord communauté",
    ],
    color: "#2196F3",
    cta: "Obtenir les prompts →",
  },
  {
    icon: "💼",
    name: "Skill LinkedIn IA",
    tagline: "De 0 à 10K abonnés en 90 jours",
    price: "49",
    oldPrice: "99",
    badge: "Top rated",
    badgeColor: "#9C27B0",
    features: [
      "Stratégie content complète",
      "Templates de posts viraux",
      "Hook library (200+)",
      "Coaching mensuel inclus",
    ],
    color: "#9C27B0",
    cta: "Booster mon LinkedIn →",
  },
  {
    icon: "🎯",
    name: "Workshop IA Live",
    tagline: "8h pour transformer votre business",
    price: "199",
    oldPrice: "399",
    badge: "Exclusif",
    badgeColor: "#FF9800",
    features: [
      "8h de formation intensive",
      "Petit groupe (max 12)",
      "Mise en pratique immédiate",
      "Accès enregistrement 1 an",
    ],
    color: "#FF9800",
    cta: "Réserver ma place →",
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
            Tout ce dont vous avez{" "}
            <span className="gradient-text">besoin</span>
          </h2>
          <p style={{ color: "#A0A0A0", maxWidth: 480, margin: "0 auto" }}>
            Des ressources pensées pour les solopreneurs qui veulent aller vite,
            bien, et sans se prendre la tête.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
          className="products-grid"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${product.color}35`;
                el.style.boxShadow = `0 0 0 1px ${product.color}20, 0 20px 60px ${product.color}10`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Gradient corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle at top right, ${product.color}08 0%, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{product.icon}</span>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    background: `${product.badgeColor}15`,
                    border: `1px solid ${product.badgeColor}25`,
                    color: product.badgeColor,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {product.badge}
                </span>
              </div>

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
                  color: "#606060",
                  fontSize: "0.85rem",
                  marginBottom: "1.5rem",
                }}
              >
                {product.tagline}
              </p>

              {/* Features */}
              <ul style={{ listStyle: "none", marginBottom: "1.75rem" }}>
                {product.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#A0A0A0",
                      fontSize: "0.85rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: product.color, fontSize: "0.7rem" }}>
                      ✦
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
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
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span
                    style={{
                      color: "#404040",
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
                      color: "white",
                    }}
                  >
                    {product.price}€
                  </span>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "inline-block",
                    background: product.color,
                    color: "white",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {product.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
