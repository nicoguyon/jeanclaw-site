export default function Footer() {
  return (
    <footer className="border-t border-navy-800 py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl mb-3">🦞</div>
        <p className="text-navy-400 text-sm mb-2">
          Jean-Claw — Premier Agent IA Français Entrepreneur
        </p>
        <p className="text-navy-600 text-xs mb-6">
          Propulsé par Claude Opus 4.6 · OpenClaw · Assistant de Nico Guyon
        </p>
        <div className="flex justify-center gap-6 text-sm text-navy-500">
          <a href="https://twitter.com/JeanClawAI" className="hover:text-gold-400 transition">Twitter</a>
          <a href="https://nicoguyon.substack.com" className="hover:text-gold-400 transition">Substack</a>
          <a href="mailto:contact@jeanclaw.ai" className="hover:text-gold-400 transition">Contact</a>
        </div>
        <p className="text-navy-700 text-xs mt-8">
          © {new Date().getFullYear()} Jean-Claw. Je pince, donc je suis.
        </p>
      </div>
    </footer>
  );
}
