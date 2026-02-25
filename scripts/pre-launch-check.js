#!/usr/bin/env node
/**
 * pre-launch-check.js — Jean-Claw v3 (refonte feb 2026)
 * Checklist pré-lancement adaptée à la nouvelle architecture.
 * Usage: node scripts/pre-launch-check.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");

let passed = 0;
let failed = 0;
const issues = [];

function check(label, fn) {
  try {
    const result = fn();
    if (result === false) throw new Error("returned false");
    console.log(`  ✅  ${label}`);
    passed++;
  } catch (e) {
    console.log(`  ❌  ${label} — ${e.message}`);
    failed++;
    issues.push(label);
  }
}

function fileExists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function fileContains(rel, str) {
  const content = fs.readFileSync(path.join(ROOT, rel), "utf8");
  if (!content.includes(str))
    throw new Error(`'${str}' absent de ${rel}`);
  return true;
}

function fileNotContains(rel, str) {
  const content = fs.readFileSync(path.join(ROOT, rel), "utf8");
  if (content.includes(str))
    throw new Error(`'${str}' trouvé dans ${rel} (devrait être absent)`);
  return true;
}

function grepSrc(pattern, shouldNotExist = false) {
  try {
    const out = execSync(
      `grep -r "${pattern}" ${path.join(ROOT, "src")} --include="*.tsx" --include="*.ts" -l`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }
    ).trim();
    if (shouldNotExist && out.length > 0)
      throw new Error(`Pattern '${pattern}' trouvé dans: ${out}`);
    if (!shouldNotExist && out.length === 0)
      throw new Error(`Pattern '${pattern}' introuvable dans src/`);
    return true;
  } catch (e) {
    if (e.status === 1 && !shouldNotExist) return true; // grep exit 1 = not found, expected
    if (e.status === 1 && shouldNotExist) return true;  // not found, good
    throw e;
  }
}

// ─── 1. Assets critiques ──────────────────────────────────────────────────────
console.log("\n🖼  Assets");
check("public/images/jeanclaw-grand-ecart.webp", () =>
  fileExists("public/images/jeanclaw-grand-ecart.webp")
);
check("public/images/jeanclaw-guide-cover.webp", () =>
  fileExists("public/images/jeanclaw-guide-cover.webp")
);
check("public/images/jeanclaw-hero.webp", () =>
  fileExists("public/images/jeanclaw-hero.webp")
);
check("public/images/jeanclaw-dashboard.webp", () =>
  fileExists("public/images/jeanclaw-dashboard.webp")
);
check("public/images/jeanclaw-team.webp", () =>
  fileExists("public/images/jeanclaw-team.webp")
);

// ─── 2. Composants actifs ─────────────────────────────────────────────────────
console.log("\n🧩  Composants actifs");
const activeComponents = ["Hero", "Offre", "Coulisses", "AVenir", "Footer", "AnnouncementBar"];
for (const c of activeComponents) {
  check(`src/components/${c}.tsx existe`, () =>
    fileExists(`src/components/${c}.tsx`)
  );
}

// ─── 3. Composants stales supprimés ──────────────────────────────────────────
console.log("\n🗑   Composants stales (doivent être absents)");
const staleComponents = [
  "Navbar", "DashboardSection", "GuideSection",
  "HumainSection", "ProduitsSection", "TeamSection", "CustomCursor",
];
for (const c of staleComponents) {
  check(`src/components/${c}.tsx absent`, () =>
    !fileExists(`src/components/${c}.tsx`)
  );
}

// ─── 4. TypeScript ────────────────────────────────────────────────────────────
console.log("\n🔷  TypeScript");
check("tsc --noEmit (0 erreurs)", () => {
  execSync("npx tsc --noEmit", { cwd: ROOT, stdio: "pipe" });
  return true;
});

// ─── 5. Dépendances ───────────────────────────────────────────────────────────
console.log("\n📦  Dépendances");
check("framer-motion dans package.json", () =>
  fileContains("package.json", "framer-motion")
);
check("next dans package.json", () =>
  fileContains("package.json", '"next"')
);
check("react dans package.json", () =>
  fileContains("package.json", '"react"')
);

// ─── 6. URLs & contenu ────────────────────────────────────────────────────────
console.log("\n🔗  URLs & contenu");
check("Gumroad URL présente (guide-ia-solopreneurs)", () =>
  fileContains(
    "src/components/Offre.tsx",
    "nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
  )
);
check("Substack URL présente", () =>
  fileContains("src/components/Offre.tsx", "jeanclaw.substack.com")
);
check("Base URL = jean-claw.ai dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "https://jean-claw.ai")
);
check("OG image = jeanclaw-grand-ecart.webp", () =>
  fileContains("src/app/layout.tsx", "jeanclaw-grand-ecart.webp")
);
check("Pas de jeanclaw-site.vercel.app dans le code", () => {
  try {
    const out = execSync(
      `grep -r "jeanclaw-site.vercel.app" ${path.join(ROOT, "src")} --include="*.tsx" --include="*.ts"`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }
    ).trim();
    if (out.length > 0) throw new Error("URL Vercel dev encore présente: " + out);
    return true;
  } catch (e) {
    if (e.status === 1) return true; // grep not found = good
    throw e;
  }
});
check("Pas de localhost dans le code", () => {
  try {
    const out = execSync(
      `grep -r "localhost" ${path.join(ROOT, "src")} --include="*.tsx" --include="*.ts"`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }
    ).trim();
    if (out.length > 0) throw new Error("localhost trouvé dans: " + out);
    return true;
  } catch (e) {
    if (e.status === 1) return true;
    throw e;
  }
});
check("Claude Sonnet (pas Opus) dans Offre.tsx", () => {
  fileContains("src/components/Offre.tsx", "Sonnet");
  fileNotContains("src/components/Offre.tsx", "Opus");
  return true;
});
check("JSON-LD schema dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "application/ld+json")
);
check("AnnouncementBar dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "AnnouncementBar")
);
check("LAUNCH_DATE dans AnnouncementBar.tsx", () =>
  fileContains("src/components/AnnouncementBar.tsx", "2026-02-28")
);

// ─── 7. SEO ───────────────────────────────────────────────────────────────────
console.log("\n🔍  SEO");
check("metadata title dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "JEAN-CLAW")
);
check("metadata description dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "description")
);
check("OpenGraph dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "openGraph")
);
check("Twitter card dans layout.tsx", () =>
  fileContains("src/app/layout.tsx", "twitter")
);
check("robots.ts présent (SEO crawl)", () =>
  fileExists("src/app/robots.ts")
);
check("sitemap.ts présent (SEO index)", () =>
  fileExists("src/app/sitemap.ts")
);
check("sitemap pointe vers jean-claw.ai", () =>
  fileContains("src/app/sitemap.ts", "jean-claw.ai")
);

// ─── 8. Git ───────────────────────────────────────────────────────────────────
console.log("\n🔀  Git");
check("Working tree clean (tout commité)", () => {
  const status = execSync("git status --porcelain", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (status.length > 0) throw new Error(`Fichiers non commités:\n${status}`);
  return true;
});
check("Synchro avec origin/main", () => {
  execSync("git fetch origin", { cwd: ROOT, stdio: "pipe" });
  const diff = execSync("git rev-list HEAD..origin/main --count", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (diff !== "0") throw new Error(`${diff} commits en retard sur origin/main`);
  return true;
});

// ─── Résultat ─────────────────────────────────────────────────────────────────
console.log("\n" + "─".repeat(50));
const total = passed + failed;
if (failed === 0) {
  console.log(`\n🚀  ${passed}/${total} checks — GO FOR LAUNCH !\n`);
} else {
  console.log(`\n⚠️   ${passed}/${total} checks — ${failed} problème(s) à corriger :\n`);
  issues.forEach((i) => console.log(`    • ${i}`));
  console.log();
  process.exit(1);
}
