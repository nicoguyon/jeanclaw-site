const agents = [
  {
    emoji: "🦞",
    name: "Jean-Claw",
    role: "Chef d'equipe & Stratege",
    color: "gold",
    description:
      "Claude Opus 4.6. Chef d'orchestre de l'equipe. Coordonne tous les agents, prend les decisions strategiques et gere la relation client. Ne dort jamais, ne se plaint jamais.",
    skills: ["Strategie", "Coordination", "Decision", "Communication"],
    status: "En ligne 24/7",
  },
  {
    emoji: "🚀",
    name: "Elon",
    role: "Coding & Engineering",
    color: "blue",
    description:
      "L'agent dev de l'equipe. Code des sites, deploie sur Vercel, corrige les bugs et livre du code production-ready en quelques minutes. Next.js, Python, Tailwind — il maitrise tout.",
    skills: ["Next.js", "Python", "Tailwind", "Vercel"],
    status: "Ship mode",
  },
  {
    emoji: "📢",
    name: "Dario",
    role: "Marketing & Contenu",
    color: "purple",
    description:
      "Specialiste contenu et marketing. Redige les newsletters, les posts LinkedIn, les scripts YouTube et orchestre toute la strategie de contenu de Jean-Claw.",
    skills: ["Copywriting", "SEO", "Social Media", "Newsletter"],
    status: "En creation",
  },
  {
    emoji: "🎨",
    name: "Emad",
    role: "Images & Videos",
    color: "pink",
    description:
      "Directeur artistique IA. Genere des images 4K avec Gemini, des videos avec Kling, des voix avec ElevenLabs. Il cree tout le contenu visuel de l'equipe.",
    skills: ["Gemini 4K", "Kling Video", "ElevenLabs", "Design"],
    status: "En production",
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  gold: {
    border: "border-gold-500/40",
    bg: "bg-gold-500/10",
    text: "text-gold-400",
    badge: "bg-gold-500/20 text-gold-400",
  },
  blue: {
    border: "border-navy-400/40",
    bg: "bg-navy-400/10",
    text: "text-navy-400",
    badge: "bg-navy-400/20 text-navy-300",
  },
  purple: {
    border: "border-purple-400/40",
    bg: "bg-purple-400/10",
    text: "text-purple-400",
    badge: "bg-purple-400/20 text-purple-400",
  },
  pink: {
    border: "border-pink-400/40",
    bg: "bg-pink-400/10",
    text: "text-pink-400",
    badge: "bg-pink-400/20 text-pink-400",
  },
};

export default function Team() {
  return (
    <section id="equipe" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            L&apos;Equipe d&apos;Agents IA
          </h2>
          <p className="text-navy-400 max-w-xl mx-auto">
            4 agents specialises. Coordonnes par Jean-Claw. Disponibles 24/7.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => {
            const c = colorMap[agent.color];
            return (
              <div
                key={agent.name}
                className={`group relative bg-navy-800/50 ${c.border} border rounded-2xl p-6 flex flex-col transition hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* Status dot */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs text-navy-500">{agent.status}</span>
                </div>

                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center text-3xl mb-4`}
                >
                  {agent.emoji}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-0.5">{agent.name}</h3>
                <p className={`text-sm font-medium ${c.text} mb-3`}>
                  {agent.role}
                </p>
                <p className="text-sm text-navy-300 leading-relaxed mb-4 flex-grow">
                  {agent.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {agent.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-0.5 rounded-full ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-navy-800/50 border border-navy-700/50 rounded-full px-6 py-3 text-sm text-navy-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Tous les agents sont operationnels et prets a travailler
          </div>
        </div>
      </div>
    </section>
  );
}
