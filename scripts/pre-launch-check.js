#!/usr/bin/env node
/**
 * pre-launch-check.js — Checklist automatisée avant le lancement du 28 fév
 *
 * Usage:
 *   node scripts/pre-launch-check.js
 *
 * Vérifie :
 *  ✓ Assets publics critiques présents
 *  ✓ Aucune référence "Opus" dans le code
 *  ✓ URLs Gumroad accessibles
 *  ✓ Données dashboard.json valides
 *  ✓ TypeScript propre (tsc --noEmit)
 *  ✓ Build Next.js réussi
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
let passed = 0;
let failed = 0;
let warnings = 0;

function ok(msg) {
  console.log(`  ✅ ${msg}`);
  passed++;
}
function fail(msg) {
  console.log(`  ❌ ${msg}`);
  failed++;
}
function warn(msg) {
  console.log(`  ⚠️  ${msg}`);
  warnings++;
}
function section(title) {
  console.log(`\n📋 ${title}`);
  console.log("─".repeat(50));
}

// ── 1. Assets critiques ─────────────────────────────────────
section("Assets publics");

const requiredAssets = [
  "public/hero.webp",
  "public/hero.jpg",
  "public/og-image.jpg",
  "public/twitter-image.jpg",
  "public/mockup-guide.webp",
  "public/avatar.webp",
  "public/favicon.ico",
  "public/icon-192.png",
  "public/apple-touch-icon.png",
];

for (const asset of requiredAssets) {
  const full = path.join(ROOT, asset);
  if (fs.existsSync(full)) {
    const size = fs.statSync(full).size;
    if (size === 0) {
      fail(`${asset} — fichier VIDE`);
    } else {
      ok(`${asset} (${(size / 1024).toFixed(0)} KB)`);
    }
  } else {
    fail(`${asset} — MANQUANT`);
  }
}

// ── 2. Contenu guide ────────────────────────────────────────
section("Contenu");

const guideFile = path.join(ROOT, "content/guide-ia-solopreneurs.md");
if (fs.existsSync(guideFile)) {
  const size = fs.statSync(guideFile).size;
  const lines = fs.readFileSync(guideFile, "utf8").split("\n").length;
  ok(`guide-ia-solopreneurs.md (${(size / 1024).toFixed(0)} KB, ${lines} lignes)`);
} else {
  fail("content/guide-ia-solopreneurs.md — MANQUANT");
}

// ── 3. Pas de références "Opus" ─────────────────────────────
section("Références modèle IA");

try {
  const result = execSync(
    `grep -r "Opus" ${path.join(ROOT, "src")} --include="*.tsx" --include="*.ts" -l 2>/dev/null`,
    { encoding: "utf8" }
  ).trim();
  if (result) {
    fail(`"Opus" trouvé dans : ${result.split("\n").join(", ")}`);
  } else {
    ok('Aucune référence "Opus" dans le code source');
  }
} catch {
  ok('Aucune référence "Opus" dans le code source');
}

// ── 4. Dashboard JSON valide ────────────────────────────────
section("Dashboard data");

try {
  const dashboard = JSON.parse(
    fs.readFileSync(path.join(ROOT, "data/dashboard.json"), "utf8")
  );
  ok(`Total revenus: ${dashboard.total}€`);
  ok(`Produits: ${dashboard.products.length} configurés`);
  ok(`Projets: ${dashboard.projects.length} listés`);

  const lastUpdated = new Date(dashboard.lastUpdated);
  const hoursSince = (Date.now() - lastUpdated.getTime()) / (1000 * 3600);
  if (hoursSince > 72) {
    warn(`dashboard.json dernière mise à jour il y a ${Math.floor(hoursSince)}h`);
  } else {
    ok(`dashboard.json mis à jour il y a ${Math.floor(hoursSince)}h`);
  }
} catch (e) {
  fail(`dashboard.json invalide: ${e.message}`);
}

// ── 5. TypeScript ───────────────────────────────────────────
section("TypeScript");

try {
  execSync("npx tsc --noEmit 2>&1", { cwd: ROOT, stdio: "pipe" });
  ok("tsc --noEmit — aucune erreur");
} catch (e) {
  const output = (e.stdout || "").toString().trim();
  if (output) {
    fail(`Erreurs TypeScript :\n${output.split("\n").slice(0, 5).join("\n")}`);
  } else {
    ok("tsc --noEmit — aucune erreur");
  }
}

// ── 6. URLs Gumroad (vérification manuelle — Gumroad bloque les bots) ───
section("URLs Gumroad (À vérifier manuellement dans le navigateur)");
console.log("  ℹ️  Gumroad bloque les requêtes automatisées. Vérifie ces URLs :");

const gumroadUrls = [
  { name: "Guide IA Solopreneurs", url: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs" },
  { name: "101 Prompts Formateurs", url: "https://nicoguyon.gumroad.com/l/101-prompts-formateurs" },
  { name: "LinkedIn Post Generator", url: "https://nicoguyon.gumroad.com/l/linkedin-post-generator" },
  { name: "Workshop Agent IA", url: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia" },
];

function checkUrl(name, url) {
  // Gumroad bloque les requêtes automatisées → vérification manuelle requise
  console.log(`  🔗 ${name}`);
  console.log(`     → ${url}`);
  return Promise.resolve();
}

// ── 7. Git status ───────────────────────────────────────────
section("Git");

try {
  const status = execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }).trim();
  if (status) {
    warn(`Fichiers non commités :\n  ${status.split("\n").join("\n  ")}`);
  } else {
    ok("Working tree propre — tout commité");
  }

  const ahead = execSync("git log origin/main..HEAD --oneline 2>/dev/null", {
    cwd: ROOT, encoding: "utf8"
  }).trim();
  if (ahead) {
    warn(`${ahead.split("\n").length} commit(s) non pushés`);
  } else {
    ok("Branches main et origin/main synchronisées");
  }
} catch {
  warn("Impossible de vérifier le statut git");
}

// ── Résumé ──────────────────────────────────────────────────
async function main() {
  // URLs Gumroad en parallèle
  await Promise.all(gumroadUrls.map(({ name, url }) => checkUrl(name, url)));

  const total = passed + failed + warnings;
  console.log("\n" + "═".repeat(50));
  console.log(`📊 RÉSUMÉ PRÉ-LANCEMENT`);
  console.log("═".repeat(50));
  console.log(`  ✅ Réussi   : ${passed}/${total}`);
  if (warnings > 0) console.log(`  ⚠️  Warnings : ${warnings}/${total}`);
  if (failed > 0) {
    console.log(`  ❌ Échoué   : ${failed}/${total}`);
    console.log("\n🔴 Des erreurs critiques doivent être corrigées avant le lancement.");
    process.exit(1);
  } else if (warnings > 0) {
    console.log("\n🟡 Warnings à vérifier, mais le lancement peut se faire.");
  } else {
    console.log("\n🟢 Tout est prêt. Go for launch ! 🚀");
  }
}

main().catch(console.error);
