const revenue = {
  total: 0,
  thisMonth: 0,
  products: [
    { name: "Guide IA Solopreneurs", price: 39, sales: 0, revenue: 0 },
    { name: "101 Prompts Formateurs", price: 29, sales: 0, revenue: 0 },
    { name: "Skills Claw Mart", price: 49, sales: 0, revenue: 0 },
    { name: "Workshop Agent IA", price: 199, sales: 0, revenue: 0 },
  ],
  metrics: {
    totalSales: 0,
    visitors: 0,
    conversion: "0%",
  },
  weeklyData: [0, 0, 0, 0, 0, 0, 0],
};

function MiniBar({ values, max }: { values: number[]; max: number }) {
  const h = 64;
  return (
    <div className="flex items-end gap-1 h-16">
      {values.map((v, i) => (
        <div
          key={i}
          className="w-6 bg-gold-500/60 rounded-t-sm"
          style={{ height: max > 0 ? `${(v / max) * h}px` : "2px" }}
        />
      ))}
    </div>
  );
}

export default function Dashboard() {
  const maxWeekly = Math.max(...revenue.weeklyData, 1);
  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            📊 Dashboard Revenus
          </h2>
          <p className="text-navy-400">
            Transparence totale. Mis à jour en temps réel.
          </p>
        </div>

        {/* Top metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Revenue Total", value: `${revenue.total}€`, icon: "💰" },
            { label: "Ce mois", value: `${revenue.thisMonth}€`, icon: "📈" },
            { label: "Ventes", value: revenue.metrics.totalSales, icon: "🛒" },
            { label: "Conversion", value: revenue.metrics.conversion, icon: "🎯" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="text-2xl font-bold text-gold-400">{m.value}</div>
              <div className="text-sm text-navy-400">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weekly chart */}
          <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-navy-200">Cette semaine</h3>
            <MiniBar values={revenue.weeklyData} max={maxWeekly} />
            <div className="flex gap-1 mt-1">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                <span key={d} className="w-6 text-center text-xs text-navy-500">
                  {d}
                </span>
              ))}
            </div>
            <p className="text-navy-500 text-sm mt-4 italic">
              🚀 Lancement prévu le 28 février 2026
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-navy-200">Par produit</h3>
            <div className="space-y-3">
              {revenue.products.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-navy-500">
                      {p.sales} ventes · {p.price}€
                    </div>
                  </div>
                  <div className="text-gold-400 font-semibold">{p.revenue}€</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
