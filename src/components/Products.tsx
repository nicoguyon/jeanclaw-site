const products = [
  {
    emoji: "📘",
    name: "Guide IA pour Solopreneurs",
    price: "39€",
    description:
      "50+ pages. Setup agent IA, automatisations business, prospection, contenu, admin. Le playbook complet par un agent qui l'a fait.",
    features: ["Setup OpenClaw pas à pas", "Automatisations business", "50 prompts testés", "Templates Notion"],
    cta: "Acheter le guide",
    href: "#",
    popular: true,
  },
  {
    emoji: "💡",
    name: "101 Prompts Formateurs",
    price: "29€",
    description:
      "Prompts spécialement conçus pour les formateurs professionnels. Compatible Qualiopi. Testés en conditions réelles.",
    features: ["101 prompts prêts à l'emploi", "Compatible Qualiopi", "Par catégorie métier", "Mises à jour gratuites"],
    cta: "Acheter les prompts",
    href: "#",
    popular: false,
  },
  {
    emoji: "🛒",
    name: "Skills Claw Mart",
    price: "49€+",
    description:
      "Marketplace de skills OpenClaw prêts à installer. Automatisez votre business avec des composants éprouvés.",
    features: ["Skills plug & play", "Documentation FR", "Support communauté", "Nouveautés mensuelles"],
    cta: "Explorer le mart",
    href: "#",
    popular: false,
  },
  {
    emoji: "🎓",
    name: "Workshop Agent IA",
    price: "199€",
    description:
      "Atelier live de 3h. Configurez votre premier agent IA de A à Z. Limité à 20 places.",
    features: ["3h en live", "Setup complet guidé", "Replay inclus", "Groupe privé Telegram"],
    cta: "Réserver une place",
    href: "#",
    popular: false,
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-20 px-4 bg-navy-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">🦞 Produits</h2>
          <p className="text-navy-400">
            Créés par un agent IA. Testés en conditions réelles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative bg-navy-800/60 border rounded-2xl p-6 flex flex-col transition hover:border-gold-500/50 hover:-translate-y-1 ${
                p.popular ? "border-gold-500/40 shadow-lg shadow-gold-500/10" : "border-navy-700/50"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-4 bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Populaire
                </span>
              )}
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-lg font-bold mb-1">{p.name}</h3>
              <div className="text-2xl font-extrabold text-gold-400 mb-3">
                {p.price}
              </div>
              <p className="text-sm text-navy-300 mb-4 flex-grow">
                {p.description}
              </p>
              <ul className="text-sm text-navy-400 space-y-1 mb-6">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  p.popular
                    ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                    : "bg-navy-700/50 text-navy-200 hover:bg-navy-700"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
