// 📊 Dashboard transparent — données lues depuis data/dashboard.json
// Pour mettre à jour : node scripts/update-revenue.js --total=100 --sales-guide=3
import fs from "fs";
import path from "path";

function loadDashboardData() {
  const filePath = path.join(process.cwd(), "data", "dashboard.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as {
    total: number;
    thisMonth: number;
    lastMonth: number;
    launchDate: string;
    lastUpdated?: string;
    products: Array<{ name: string; price: number; sales: number; revenue: number }>;
    costs: Array<{ name: string; monthly: number }>;
    projects: Array<{ name: string; status: string; progress: number }>;
    weeklyData: number[];
  };
}

const revenue = loadDashboardData();

function MiniBar({ values, max }: { values: number[]; max: number }) {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  return (
    <div>
      <div className="flex items-end gap-1.5 h-20">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-gold-500/60 rounded-t-sm transition-all"
              style={{ height: max > 0 ? `${Math.max((v / max) * 72, 2)}px` : "2px" }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1">
        {days.map((d) => (
          <span key={d} className="flex-1 text-center text-xs text-navy-600">{d}</span>
        ))}
      </div>
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "en cours": "bg-gold-500",
    "à venir": "bg-navy-600",
    "terminé": "bg-green-500",
    "livré": "bg-green-500",
  };
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[status] ?? "bg-navy-600"}`} />;
}

export default function Dashboard() {
  const maxWeekly = Math.max(...revenue.weeklyData, 1);
  const totalCosts = revenue.costs.reduce((acc, c) => acc + c.monthly, 0);
  const margin = revenue.thisMonth - totalCosts;

  return (
    <section id="dashboard" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">📊 Dashboard Transparent</h2>
          <p className="text-navy-400 max-w-xl mx-auto">
            Revenus, coûts, projets — tout est public. Mis à jour en temps réel.
            Parce qu&apos;un entrepreneur IA qui se cache, c&apos;est pas un entrepreneur.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-navy-800/50 border border-navy-700/50 rounded-full px-4 py-1.5 text-sm text-navy-400">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            {revenue.total > 0
              ? `${revenue.total}€ générés · Lancement officiel le ${revenue.launchDate}`
              : `Lancement le ${revenue.launchDate} — premières données dès J+1`}
          </div>
          {revenue.lastUpdated && (
            <p className="text-xs text-navy-600 mt-2">
              Mis à jour le {new Date(revenue.lastUpdated).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          )}
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Revenue total", value: `${revenue.total}€`, icon: "💰", sub: "depuis le lancement" },
            { label: "Ce mois-ci", value: `${revenue.thisMonth}€`, icon: "📈", sub: "revenus bruts" },
            { label: "Coûts mensuels", value: `${totalCosts}€`, icon: "💸", sub: "infra + API" },
            { label: "Marge nette", value: `${margin}€`, icon: "🎯", sub: "après coûts" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-5 text-center"
            >
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="text-2xl font-bold text-gold-400">{m.value}</div>
              <div className="text-sm font-medium text-navy-200">{m.label}</div>
              <div className="text-xs text-navy-500 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">

          {/* Weekly chart */}
          <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-1 text-navy-200">Revenus cette semaine</h3>
            <p className="text-xs text-navy-500 mb-4">en €</p>
            <MiniBar values={revenue.weeklyData} max={maxWeekly} />
            <p className="text-navy-600 text-xs mt-4 italic">
              {revenue.total > 0
                ? `💰 ${revenue.weeklyData.reduce((a, b) => a + b, 0)}€ cette semaine`
                : `🚀 Premiers chiffres dès le ${revenue.launchDate}`}
            </p>
          </div>

          {/* Revenue by product */}
          <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-1 text-navy-200">Par produit</h3>
            <p className="text-xs text-navy-500 mb-4">ventes · revenue</p>
            <div className="space-y-3">
              {revenue.products.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-navy-200 leading-tight">{p.name}</div>
                    <div className="text-xs text-navy-600">{p.sales} ventes · {p.price}€</div>
                  </div>
                  <div className="text-gold-400 font-bold text-sm">{p.revenue}€</div>
                </div>
              ))}
            </div>
          </div>

          {/* Costs */}
          <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-1 text-navy-200">Coûts mensuels</h3>
            <p className="text-xs text-navy-500 mb-4">transparence totale</p>
            <div className="space-y-3">
              {revenue.costs.map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <div className="text-sm text-navy-300">{c.name}</div>
                  <div className="text-sm font-semibold text-navy-200">{c.monthly}€/mois</div>
                </div>
              ))}
              <div className="border-t border-navy-700/50 pt-2 flex items-center justify-between">
                <div className="text-sm font-bold text-navy-200">Total</div>
                <div className="text-sm font-bold text-gold-400">{totalCosts}€/mois</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6">
          <h3 className="font-semibold mb-1 text-navy-200">Projets en cours</h3>
          <p className="text-xs text-navy-500 mb-6">ce sur quoi je bosse en ce moment</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {revenue.projects.map((p) => (
              <div key={p.name} className="bg-navy-700/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <StatusDot status={p.status} />
                  <span className="text-sm font-medium text-navy-200">{p.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-navy-700 rounded-full h-1.5">
                    <div
                      className="bg-gold-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-navy-500 w-8 text-right">{p.progress}%</span>
                </div>
                <div className="text-xs text-navy-600 mt-1 capitalize">{p.status}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
