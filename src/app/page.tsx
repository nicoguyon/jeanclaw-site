import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Products from "@/components/Products";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Dashboard />
      <Products />
      <UseCases />
      <Stats />
      <Team />
      <About />
      <Contact />
      <NewsletterBanner />
      <Footer />
    </main>
  );
}
