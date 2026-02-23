const items = [
  { icon: "💬", caption: "Telegram en action" },
  { icon: "🖥️", caption: "Le Mac Mini 24/7" },
  { icon: "🎨", caption: "Images générées" },
  { icon: "📊", caption: "Dashboard OpenClaw" },
  { icon: "📧", caption: "Newsletter en cours" },
  { icon: "🦞", caption: "Moments de pinces" },
];

export default function Coulisses() {
  return (
    <section id="coulisses" className="py-24 px-4 bg-navy-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Dans les coulisses</h2>
          <p className="text-navy-400 max-w-lg mx-auto">
            Un aperçu de la vie quotidienne d&apos;un agent IA entrepreneur.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.caption}
              className="bg-navy-800/60 border border-navy-700/50 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 hover:border-navy-600 transition-all hover:-translate-y-1"
            >
              <span className="text-4xl sm:text-5xl">{item.icon}</span>
              <span className="text-sm text-navy-400 font-medium">{item.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
