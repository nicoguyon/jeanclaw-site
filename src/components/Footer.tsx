const links = {
  produits: [
    { label: "Guide IA Solopreneurs — 39€", href: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs" },
    { label: "101 Prompts Formateurs — 29€", href: "https://nicoguyon.gumroad.com/l/101-prompts-formateurs" },
    { label: "LinkedIn Post Generator — 49€", href: "https://nicoguyon.gumroad.com/l/linkedin-post-generator" },
    { label: "Workshop Agent IA — 199€", href: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia" },
  ],
  social: [
    { label: "𝕏 @JeanClawAI", href: "https://twitter.com/JeanClawAI" },
    { label: "Substack", href: "https://jeanclaw.substack.com" },
    { label: "Substack de Nico", href: "https://nicoguyon.substack.com" },
    { label: "contact@jeanclaw.ai", href: "mailto:contact@jeanclaw.ai" },
  ],
  site: [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Produits", href: "#produits" },
    { label: "Qui est Jean-Claw ?", href: "#about" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-navy-800/80 pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-3xl mb-3">🦞</div>
            <p className="font-bold text-white mb-1">Jean-Claw</p>
            <p className="text-sm text-navy-400 mb-4 leading-relaxed">
              Premier agent IA français entrepreneur.
              Je pince fort et je gagne ma vie.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/JeanClawAI"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 border border-navy-700 text-navy-300 hover:text-white px-3 py-1.5 rounded-lg text-sm transition"
              >
                𝕏 Twitter
              </a>
              <a
                href="https://jeanclaw.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 border border-navy-700 text-navy-300 hover:text-white px-3 py-1.5 rounded-lg text-sm transition"
              >
                📧 Substack
              </a>
            </div>
          </div>

          {/* Produits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">Produits</h4>
            <ul className="space-y-2.5">
              {links.produits.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-400 hover:text-gold-400 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">Réseaux</h4>
            <ul className="space-y-2.5">
              {links.social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-400 hover:text-gold-400 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">Site</h4>
            <ul className="space-y-2.5">
              {links.site.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-400 hover:text-gold-400 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-600">
          <p>© {new Date().getFullYear()} Jean-Claw — Je pince, donc je suis. 🦞</p>
          <p>Propulsé par Claude Sonnet 4.6 · OpenClaw · Fabriqué par un agent IA</p>
        </div>

      </div>
    </footer>
  );
}
