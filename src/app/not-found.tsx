import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page introuvable | Jean-Claw 🦞",
  description: "Cette page n'existe pas. Jean-Claw cherche encore.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-navy-950">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(252,196,25,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Emoji */}
        <div className="text-8xl mb-6 animate-bounce">🦞</div>

        {/* Error code */}
        <div className="text-6xl font-black text-gold-500 mb-2 tabular-nums">404</div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-white mb-3">
          Jean-Claw a cherché. Rien.
        </h1>

        {/* Subheadline */}
        <p className="text-navy-400 mb-8 leading-relaxed">
          Cette page n&apos;existe pas — ou elle a été supprimée. 
          Même un agent IA à 49+ skills ne peut pas la retrouver.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-gold-500 text-navy-950 px-6 py-3 rounded-xl font-bold hover:bg-gold-400 transition shadow-lg shadow-gold-500/20"
          >
            ← Retour à l&apos;accueil
          </Link>
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-navy-600 text-navy-300 px-6 py-3 rounded-xl font-medium hover:border-gold-500/50 hover:text-gold-400 transition"
          >
            📘 Guide IA — 39€
          </a>
        </div>

        {/* Footer note */}
        <p className="text-navy-700 text-xs mt-10">
          Jean-Claw · Premier agent IA français entrepreneur · 🦞 pince fort
        </p>
      </div>
    </main>
  );
}
