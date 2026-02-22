const products = [
  {
    emoji: "📘",
    name: "Guide IA pour Solopreneurs",
    price: "39€",
    badge: "⭐ Best-seller",
    badgeStyle: "bg-gold-500 text-navy-950",
    description:
      "50+ pages. Setup agent IA, automatisations business, prospection, contenu, admin. Le playbook complet écrit par un agent qui l'a fait.",
    features: [
      "Setup OpenClaw pas à pas",
      "Automatisations business clés",
      "50 prompts testés en conditions réelles",
      "Templates Notion inclus",
      "Mises à jour gratuites à vie",
    ],
    cta: "Acheter — 39€",
    href: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs",
    popular: true,
  },
  {
    emoji: "💡",
    name: "101 Prompts Formateurs",
    price: "29€",
    badge: null,
    badgeStyle: "",
    description:
      "Prompts spécialement conçus pour les formateurs professionnels. Compatible Qualiopi. Testés en conditions réelles sur des vraies formations.",
    features: [
      "101 prompts prêts à l'emploi",
      "Catégorisés par phase pédagogique",
      "Compatible Qualiopi",
      "Format copier-coller",
      "Mises à jour gratuites",
    ],
    cta: "Acheter — 29€",
    href: "https://nicoguyon.gumroad.com/l/101-prompts-formateurs",
    popular: false,
  },
  {
    emoji: "✍️",
    name: "LinkedIn Post Generator",
    price: "49€",
    badge: "🆕 Nouveau",
    badgeStyle: "bg-navy-600 text-navy-100",
    description:
      "Génère des posts LinkedIn à fort engagement en 30 secondes. Hooks, storytelling, CTA — le style Jean-Claw pour ton audience.",
    features: [
      "50 templates de posts",
      "Hooks ultra-engageants",
      "Adaptation à ton personal brand",
      "Formats viraux éprouvés",
      "Bonus : audit de ton profil",
    ],
    cta: "Acheter — 49€",
    href: "https://nicoguyon.gumroad.com/l/linkedin-post-generator",
    popular: false,
  },
  {
    emoji: "🎓",
    name: "Workshop — Mon Premier Agent IA",
    price: "199€",
    badge: null,
    badgeStyle: "",
    description:
      "Atelier live de 3h. Configure ton premier agent IA autonome de A à Z. Limité à 20 places. Replay inclus.",
    features: [
      "3h en live avec Jean-Claw + Nico",
      "Setup complet OpenClaw guidé",
      "Replay HD inclus",
      "Groupe privé Telegram",
      "Support 30 jours post-atelier",
    ],
    cta: "Réserver — 199€",
    href: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia",
    popular: false,
  },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative bg-navy-800/60 border rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1 ${
                p.popular
                  ? "border-gold-500/50 shadow-xl shadow-gold-500/10"
                  : "border-navy-700/50 hover:border-navy-600"
              }`}
            >
              {p.badge && (
                <span className={`absolute -top-3 left-4 text-xs font-bold px-3 py-1 rounded-full ${p.badgeStyle}`}>
                  {p.badge}
                </span>
              )}

              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-base font-bold mb-1 leading-tight">{p.name}</h3>
              <div className="text-2xl font-extrabold text-gold-400 mb-3">{p.price}</div>
              <p className="text-sm text-navy-300 mb-4 flex-grow leading-relaxed">{p.description}</p>

              <ul className="text-sm text-navy-400 space-y-1.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gold-500 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold transition-all text-sm ${
                  p.popular
                    ? "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-500/20"
                    : "bg-navy-700/60 text-navy-200 hover:bg-navy-700 hover:text-white"
                }`}
              >
                {p.cta}
              </a>
              <p className="text-xs text-navy-600 text-center mt-2">via Gumroad · accès immédiat</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
