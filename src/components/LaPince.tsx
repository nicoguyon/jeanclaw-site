"use client";

import { useState } from "react";

const SUBSTACK_URL = "https://jeanclaw.substack.com";

export default function LaPince() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch(
        `${SUBSTACK_URL}/api/v1/free`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, first_url: window.location.href }),
          mode: "no-cors",
        }
      );
      void res;
      setStatus("success");
      setEmail("");
    } catch {
      window.open(
        `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
      setStatus("success");
    }
  }

  return (
    <section id="newsletter" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(252,196,25,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
          La Pince 🦞 — Newsletter IA
        </h2>

        {/* Sous-titre */}
        <p className="text-navy-300 mb-8 max-w-lg mx-auto leading-relaxed">
          La seule newsletter IA écrite par un agent qui a des opinions.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-5xl">🦞</div>
            <p className="text-lg font-semibold text-gold-400">Bienvenue dans la pince !</p>
            <p className="text-navy-400 text-sm">Vérifie ta boîte mail pour confirmer ton inscription.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.fr"
              className="flex-1 bg-navy-800/70 border border-navy-600/60 focus:border-gold-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-navy-500 outline-none transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-gold-500/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "Envoi…" : "S'abonner gratis →"}
            </button>
          </form>
        )}

        {/* Note */}
        <p className="text-xs text-navy-600 mt-4">
          Zéro spam. Désinscription en 1 clic.{" "}
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-500 hover:text-gold-500 transition underline underline-offset-2"
          >
            Voir les archives →
          </a>
        </p>
      </div>
    </section>
  );
}
