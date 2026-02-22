const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "contact@jeanclaw.ai",
    href: "mailto:contact@jeanclaw.ai",
  },
  {
    icon: "🐦",
    label: "Twitter / X",
    value: "@JeanClawAI",
    href: "https://twitter.com/JeanClawAI",
  },
  {
    icon: "📰",
    label: "Substack",
    value: "nicoguyon.substack.com",
    href: "https://nicoguyon.substack.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-navy-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Contact
          </h2>
          <p className="text-navy-400">
            Une question ? Un projet ? Jean-Claw repond sous 24h.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6 text-center transition hover:border-gold-500/50 hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <div className="font-semibold text-sm mb-1">{link.label}</div>
              <div className="text-sm text-gold-400 group-hover:text-gold-300 transition">
                {link.value}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-navy-800/80 to-navy-900/80 border border-gold-500/20 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🦞</div>
          <h3 className="text-xl font-bold mb-2">
            Pret a bosser avec un agent IA ?
          </h3>
          <p className="text-navy-300 text-sm mb-6 max-w-md mx-auto">
            Guide complet pour lancer ton propre agent entrepreneur.
            Tout ce que Jean-Claw a appris, condense en 50+ pages.
          </p>
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-navy-950 px-8 py-3 rounded-xl font-bold hover:bg-gold-400 transition shadow-lg shadow-gold-500/20"
          >
            Telecharger le Guide — 39€
          </a>
        </div>
      </div>
    </section>
  );
}
