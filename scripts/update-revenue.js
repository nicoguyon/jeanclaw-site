#!/usr/bin/env node
/**
 * update-revenue.js — Met à jour les données du dashboard Jean-Claw
 *
 * Usage:
 *   node scripts/update-revenue.js [options]
 *
 * Options:
 *   --total=<n>           Revenu total depuis le lancement (€)
 *   --this-month=<n>      Revenu ce mois-ci (€)
 *   --last-month=<n>      Revenu mois dernier (€)
 *
 *   --sales-guide=<n>     Nb de ventes Guide IA Solopreneurs
 *   --sales-prompts=<n>   Nb de ventes 101 Prompts Formateurs
 *   --sales-linkedin=<n>  Nb de ventes LinkedIn Post Generator
 *   --sales-workshop=<n>  Nb de ventes Workshop Agent IA
 *
 *   --cost-claude=<n>     Coût mensuel Claude API (€)
 *   --cost-vercel=<n>     Coût mensuel Vercel (€)
 *   --cost-openclaw=<n>   Coût mensuel OpenClaw licence (€)
 *   --cost-divers=<n>     Coût mensuel outils divers (€)
 *
 *   --weekly=<n,n,n,n,n,n,n>  Revenus journaliers semaine (Lun→Dim), ex: 0,15,30,0,45,0,20
 *
 *   --progress-lancement=<n>   Progression projet Lancement (0-100)
 *   --progress-guide=<n>       Progression projet Guide
 *   --progress-prompts=<n>     Progression projet 101 Prompts
 *   --progress-linkedin=<n>    Progression projet LinkedIn
 *   --progress-workshop=<n>    Progression projet Workshop
 *
 *   --status-lancement=<s>     Status: "en cours" | "à venir" | "terminé"
 *   --status-guide=<s>
 *   --status-prompts=<s>
 *   --status-linkedin=<s>
 *   --status-workshop=<s>
 *
 * Exemples:
 *   # Première vente du guide
 *   node scripts/update-revenue.js --total=39 --this-month=39 --sales-guide=1
 *
 *   # Mise à jour revenus semaine
 *   node scripts/update-revenue.js --weekly=0,39,0,78,0,39,0
 *
 *   # Marquer le workshop comme terminé
 *   node scripts/update-revenue.js --status-workshop=terminé --progress-workshop=100
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "dashboard.json");

// Parse args
const args = {};
for (const arg of process.argv.slice(2)) {
  const [key, val] = arg.replace(/^--/, "").split("=");
  args[key] = val;
}

if (!fs.existsSync(DATA_FILE)) {
  console.error("❌ Fichier data/dashboard.json introuvable. Lance d'abord le setup.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

// Revenue globals
if (args["total"] !== undefined) data.total = parseFloat(args["total"]);
if (args["this-month"] !== undefined) data.thisMonth = parseFloat(args["this-month"]);
if (args["last-month"] !== undefined) data.lastMonth = parseFloat(args["last-month"]);

// Products sales (auto-calculate revenue = sales * price)
const productMap = {
  "sales-guide": 0,      // Guide IA Solopreneurs
  "sales-prompts": 1,    // 101 Prompts Formateurs
  "sales-linkedin": 2,   // LinkedIn Post Generator
  "sales-workshop": 3,   // Workshop Agent IA
};
for (const [key, idx] of Object.entries(productMap)) {
  if (args[key] !== undefined) {
    const sales = parseInt(args[key]);
    data.products[idx].sales = sales;
    data.products[idx].revenue = sales * data.products[idx].price;
  }
}

// Costs
const costMap = {
  "cost-claude": 0,
  "cost-vercel": 1,
  "cost-openclaw": 2,
  "cost-divers": 3,
};
for (const [key, idx] of Object.entries(costMap)) {
  if (args[key] !== undefined) {
    data.costs[idx].monthly = parseFloat(args[key]);
  }
}

// Weekly data
if (args["weekly"] !== undefined) {
  const vals = args["weekly"].split(",").map(Number);
  if (vals.length === 7) {
    data.weeklyData = vals;
  } else {
    console.warn("⚠️  --weekly attend 7 valeurs (Lun,Mar,Mer,Jeu,Ven,Sam,Dim). Ignoré.");
  }
}

// Projects progress & status
const projectMap = {
  "lancement": 0,
  "guide": 1,
  "prompts": 2,
  "linkedin": 3,
  "workshop": 4,
};
for (const [key, idx] of Object.entries(projectMap)) {
  if (args[`progress-${key}`] !== undefined) {
    data.projects[idx].progress = Math.min(100, Math.max(0, parseInt(args[`progress-${key}`])));
  }
  if (args[`status-${key}`] !== undefined) {
    const validStatuses = ["en cours", "à venir", "terminé"];
    if (validStatuses.includes(args[`status-${key}`])) {
      data.projects[idx].status = args[`status-${key}`];
    } else {
      console.warn(`⚠️  Status invalide "${args[`status-${key}`]}". Valeurs: ${validStatuses.join(", ")}`);
    }
  }
}

// Recalculate total if products changed
const autoTotal = data.products.reduce((acc, p) => acc + p.revenue, 0);
if (args["total"] === undefined && autoTotal > 0) {
  data.total = autoTotal;
}

// Update timestamp
data.lastUpdated = new Date().toISOString();

// Save
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n");

// Summary
const totalCosts = data.costs.reduce((acc, c) => acc + c.monthly, 0);
const margin = data.thisMonth - totalCosts;
const totalSales = data.products.reduce((acc, p) => acc + p.sales, 0);

console.log("✅ Dashboard mis à jour !");
console.log("");
console.log(`💰 Total depuis lancement : ${data.total}€`);
console.log(`📈 Ce mois-ci            : ${data.thisMonth}€`);
console.log(`💸 Coûts mensuels        : ${totalCosts}€`);
console.log(`🎯 Marge nette           : ${margin}€`);
console.log(`🛒 Ventes totales        : ${totalSales}`);
console.log("");
console.log("Produits :");
for (const p of data.products) {
  console.log(`  ${p.name.padEnd(30)} ${p.sales} ventes — ${p.revenue}€`);
}
console.log("");
console.log("⚡ Commit + push pour déployer sur Vercel :");
console.log("   git add data/dashboard.json && git commit -m '📊 update revenue' && git push");
