import Image from "next/image";

const useCases = [
  {
    emoji: "🏢",
    title: "Business Autopilot",
    description:
      "Gérer une agence solo : SEO, emails, contenu, Shopify — tout tourne en automatique pendant que tu dors.",
    quote: "Je me réveille avec du travail terminé. Mon agent a géré 3 clients cette nuit.",
    neon: "#fcc419",
    glow: "rgba(252,196,25,0.25)",
    border: "rgba(252,196,25,0.4)",
    image: "/images/usecases/usecase-1-business.webp",
  },
  {
    emoji: "💻",
    title: "Dev depuis ton téléphone",
    description:
      "Builder des apps complètes via Telegram. Pipeline dev intégral automatisé — commit, test, deploy.",
    quote: "J'ai shipper une feature en prod depuis mon canapé. Juste un message Telegram.",
    neon: "#748ffc",
    glow: "rgba(116,143,252,0.25)",
    border: "rgba(116,143,252,0.4)",
    image: "/images/usecases/usecase-2-dev.webp",
  },
  {
    emoji: "📹",
    title: "Production de contenu",
    description:
      "Pipeline vidéo IA complet : idée → storyboard → production. Analytics YouTube en temps réel.",
    quote: "Mon agent produit 3 vidéos par semaine. Moi, je valide juste le concept.",
    neon: "#f03e3e",
    glow: "rgba(240,62,62,0.25)",
    border: "rgba(240,62,62,0.4)",
    image: "/images/usecases/usecase-3-contenu.webp",
  },
  {
    emoji: "📧",
    title: "Briefing matinal intelligent",
    description:
      "Résumé emails + agenda + actu du jour livré à 7h. 30 minutes gagnées chaque matin.",
    quote: "Mon café est encore chaud quand j'ai déjà tout lu. Game changer.",
    neon: "#20c997",
    glow: "rgba(32,201,151,0.25)",
    border: "rgba(32,201,151,0.4)",
    image: "/images/usecases/usecase-4-briefing.webp",
  },
  {
    emoji: "🏠",
    title: "Smart Home",
    description:
      "Contrôle ta maison connectée en langage naturel. Agent 24/7 qui anticipe tes habitudes.",
    quote: "Je rentre et tout est déjà à la bonne température. L'agent sait avant moi.",
    neon: "#cc5de8",
    glow: "rgba(204,93,232,0.25)",
    border: "rgba(204,93,232,0.4)",
    image: "/images/usecases/usecase-5-smarthome.webp",
  },
  {
    emoji: "💰",
    title: "Trading automatisé",
    description:
      "Agents qui analysent et tradent 24/7 avec updates Telegram. Tu supervises, tu n'exécutes plus.",
    quote: "Une alerte à 3h du mat, l'agent avait déjà sorti la position. Tranquille.",
    neon: "#51cf66",
    glow: "rgba(81,207,102,0.25)",
    border: "rgba(81,207,102,0.4)",
    image: "/images/usecases/usecase-6-trading.webp",
  },
  {
    emoji: "🤝",
    title: "Client Manager",
    description:
      "Triage automatique emails + Slack, réponses en moins de 3 min, suivi des livrables. Zéro client qui attend.",
    quote: "800-1500€/mois par client",
    neon: "#ff922b",
    glow: "rgba(255,146,43,0.25)",
    border: "rgba(255,146,43,0.4)",
    badge: true,
  },
  {
    emoji: "📞",
    title: "Appels téléphoniques",
    description:
      "L'agent passe et reçoit des appels à ta place. Qualification prospects, prise de RDV, SAV — sans décrocher.",
    quote: "Mon agent a pris 8 RDV cette semaine. Je n'ai pas touché un téléphone.",
    neon: "#cc5de8",
    glow: "rgba(204,93,232,0.25)",
    border: "rgba(204,93,232,0.4)",
  },
  {
    emoji: "💼",
    title: "Automation-as-a-Service",
    description:
      "Vends des automations clé en main à tes clients. Pipelines sur-mesure, dashboards, intégrations — recurring revenue.",
    quote: "500-5000€/mois",
    neon: "#fcc419",
    glow: "rgba(252,196,25,0.25)",
    border: "rgba(252,196,25,0.4)",
    badge: true,
  },
  {
    emoji: "📚",
    title: "Formation & Tutorat",
    description:
      "Tutorat personnalisé adapté au niveau de l'élève, correction automatique, curriculum IA évolutif. 24/7.",
    quote: "Mon agent corrige les devoirs de 40 étudiants pendant que je dors.",
    neon: "#20c997",
    glow: "rgba(32,201,151,0.25)",
    border: "rgba(32,201,151,0.4)",
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            ⚡ Cas d&apos;usage OpenClaw
          </h2>
          <p className="text-navy-400 max-w-xl mx-auto">
            Ce que des gens réels font déjà avec leurs agents. Pas de la sci-fi — du quotidien automatisé.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="use-case-card group relative bg-navy-900/70 rounded-2xl flex flex-col overflow-hidden transition-all duration-300 cursor-default"
              style={
                {
                  border: `1px solid ${uc.border}`,
                  "--neon": uc.neon,
                  "--glow": uc.glow,
                } as React.CSSProperties
              }
            >
              {/* Glow layer on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                style={{ boxShadow: `0 0 40px ${uc.glow} inset, 0 0 60px ${uc.glow}` }}
              />

              {/* Neon top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ background: `linear-gradient(90deg, transparent, ${uc.neon}, transparent)` }}
              />

              {/* Illustration */}
              <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={uc.image}
                  alt={`Illustration ${uc.title}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient fade into card body */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(10,12,25,0.85) 100%)`,
                  }}
                />
                {/* Neon-colored emoji badge */}
                <span
                  className="absolute top-3 left-3 text-xl px-2 py-1 rounded-xl backdrop-blur-sm font-bold"
                  style={{
                    background: `rgba(10,12,25,0.7)`,
                    border: `1px solid ${uc.border}`,
                    color: uc.neon,
                    textShadow: `0 0 8px ${uc.neon}`,
                  }}
                >
                  {uc.emoji}
                </span>
              </div>

              {/* Card body */}
              <div className="relative z-10 flex flex-col flex-grow p-6 pt-4">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{uc.title}</h3>

                {/* Description */}
                <p className="text-navy-300 text-sm leading-relaxed mb-5 flex-grow">
                  {uc.description}
                </p>

                {/* Client quote / revenue badge */}
                {"badge" in uc && uc.badge ? (
                  <div className="mt-auto">
                    <span
                      className="inline-block px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide"
                      style={{
                        background: `${uc.neon}18`,
                        color: uc.neon,
                        border: `1px solid ${uc.border}`,
                        textShadow: `0 0 12px ${uc.glow}`,
                      }}
                    >
                      💰 {uc.quote}
                    </span>
                  </div>
                ) : (
                  <blockquote
                    className="relative pl-3 text-xs italic leading-relaxed mt-auto"
                    style={{ color: uc.neon, borderLeft: `2px solid ${uc.border}` }}
                  >
                    &ldquo;{uc.quote}&rdquo;
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-navy-400 text-sm mb-4">
            Prêt à automatiser ton quotidien ?
          </p>
          <a
            href="#produits"
            className="inline-block bg-gold-500 text-navy-950 px-8 py-4 rounded-xl text-base font-bold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:-translate-y-0.5"
          >
            Voir les produits →
          </a>
        </div>
      </div>
    </section>
  );
}
