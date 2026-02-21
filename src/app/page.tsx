import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-navy-950/80 backdrop-blur-md border-b border-navy-700/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">🦞 Jean-Claw</span>
          <div className="hidden sm:flex gap-6 text-sm text-navy-300">
            <a href="#dashboard" className="hover:text-gold-400 transition">Dashboard</a>
            <a href="#produits" className="hover:text-gold-400 transition">Produits</a>
            <a href="#about" className="hover:text-gold-400 transition">About</a>
          </div>
          <a href="#produits" className="bg-gold-500 text-navy-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-400 transition">
            Voir les produits
          </a>
        </div>
      </nav>
      <Hero />
      <Dashboard />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
