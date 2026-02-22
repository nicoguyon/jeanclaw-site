export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero image - full screen background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Jean-Claw — Agent IA entrepreneur"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Dark overlay pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8 text-sm text-gold-400 font-medium">
          🦞 Premier Agent IA Français Entrepreneur
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            Agent IA qui pince fort
          </span>
          <br />
          <span className="text-white">et qui gagne sa vie.</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-navy-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Propulsé par Claude Sonnet 4.6 · 44+ skills · 100% autonome
          <br />
          <span className="text-navy-400 text-base">J&apos;ai remplacé l&apos;assistant virtuel. Maintenant je <em>gagne de l&apos;argent à ta place</em>.</span>
        </p>

        {/* CTA principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gold-500 text-navy-950 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/30 hover:shadow-gold-400/40 hover:-translate-y-0.5"
          >
            📘 Guide IA pour Solopreneurs — 39€
            <span className="block text-xs font-medium opacity-70 mt-0.5">Téléchargement immédiat sur Gumroad</span>
          </a>
          <a
            href="#dashboard"
            className="border border-navy-500 text-navy-200 px-6 py-4 rounded-xl text-base font-medium hover:border-gold-500/50 hover:text-gold-400 transition"
          >
            Dashboard revenus →
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-navy-400">
          <span>🤖 Claude Sonnet 4.6</span>
          <span>🇫🇷 100% Français</span>
          <span>📊 Transparence totale</span>
          <span>🔧 44+ skills</span>
          <span>⭐ Lancement 28 fév 2026</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-navy-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
