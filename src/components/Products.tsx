export default function Products() {
  return (
    <section id="produits" className="py-24 px-4 bg-navy-900/40">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">🦞 Produits</h2>
          <p className="text-navy-400 max-w-lg mx-auto">
            Créés par un agent IA. Testés en conditions réelles. Livrés via Gumroad — accès immédiat.
          </p>
        </div>

        {/* Featured product - Guide IA avec mockup 3D */}
        <div className="mb-8 bg-navy-800/60 border border-gold-500/50 rounded-2xl overflow-hidden shadow-xl shadow-gold-500/10">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Mockup image */}
            <div className="relative bg-gradient-to-br from-navy-700/50 to-navy-900/80 flex items-center justify-center p-8 min-h-[280px]">
              <span className="absolute top-4 left-4 bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Best-seller
              </span>
              <picture>
                <source srcSet="/mockup-guide.webp" type="image/webp" />
                <img
                  src="/mockup-guide.jpg"
                  alt="Guide IA pour Solopreneurs — mockup 3D"
                  className="max-h-64 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>

            {/* Product details */}
            <div className="p-8 flex flex-col justify-center">
              <div className="text-4xl mb-2">📘</div>
              <h3 className="text-2xl font-bold mb-1">Guide IA pour Solopreneurs</h3>
              <div className="text-3xl font-extrabold text-gold-400 mb-4">39€</div>
              <p className="text-navy-300 mb-5 leading-relaxed">
                63+ pages · 13 chapitres. Setup agent IA, coding agents, pipelines de production, équipes multi-agents.
                Le playbook complet écrit par un agent qui l&apos;a fait.
              </p>
              <ul className="text-sm text-navy-400 space-y-2 mb-6">
                {["13 chapitres · Coding agents · Multi-agents", "50 prompts testés en conditions réelles", "4 templates Notion inclus", "Checklist lancement en 1 après-midi"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-gold-500 text-navy-950 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:-translate-y-0.5"
              >
                Acheter — 39€
                <span className="block text-xs font-medium opacity-70 mt-0.5">Téléchargement immédiat sur Gumroad</span>
              </a>
            </div>
          </div>
        </div>

        {/* 101 Prompts Formateurs */}
        <div className="bg-navy-800/60 border border-navy-700/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center transition-all hover:-translate-y-1 hover:border-navy-600">
          <div className="text-5xl shrink-0">💡</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">101 Prompts Formateurs</h3>
            <div className="text-2xl font-extrabold text-gold-400 mb-2">29€</div>
            <p className="text-sm text-navy-300 leading-relaxed mb-3">
              Prompts spécialement conçus pour les formateurs professionnels. Compatible Qualiopi. Testés en conditions réelles.
            </p>
            <ul className="text-sm text-navy-400 space-y-1.5 mb-4">
              {["101 prompts prêts à l'emploi", "Catégorisés par phase pédagogique", "Compatible Qualiopi", "Format copier-coller"].map((f) => (
                <li key={f} className="flex items-start gap-2 justify-center sm:justify-start">
                  <span className="text-gold-500 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://nicoguyon.gumroad.com/l/101-prompts-formateurs"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-navy-700/60 text-navy-200 hover:bg-navy-700 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            Acheter — 29€
          </a>
        </div>

      </div>
    </section>
  );
}
