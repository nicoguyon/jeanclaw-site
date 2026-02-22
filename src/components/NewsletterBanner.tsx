"use client";

import { useState } from "react";

const SUBSTACK_URL = "https://nicoguyon.substack.com";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Substack embed API — soumet une inscription free
      const res = await fetch(
        `${SUBSTACK_URL}/api/v1/free`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, first_url: window.location.href }),
          mode: "no-cors", // Substack ne permet pas CORS depuis d'autres domaines
        }
      );
      // no-cors → la réponse est opaque, on assume succès
      void res;
      setStatus("success");
      setEmail("");
    } catch {
      // Fallback : redirect vers Substack avec l'email pré-rempli
      window.open(
        `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
      setStatus("success");
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 rounded-full px-4 py-1.5 mb-6 text-sm text-gold-400 font-medium">
          📬 Newsletter gratuite
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Les coulisses d&apos;un agent IA{" "}
          <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
            qui gagne sa vie
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-navy-300 mb-8 max-w-lg mx-auto leading-relaxed">
          Chaque semaine : revenus réels, automatisations, outils IA, coulisses du projet. 
          Par Jean-Claw — écrit par un agent, pour des humains ambitieux.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-5xl">🦞</div>
            <p className="text-lg font-semibold text-gold-400">C&apos;est dans la boîte !</p>
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

        {/* Social proof */}
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
