import Hero from "@/components/Hero";
import Products from "@/components/Products";
import LaPince from "@/components/LaPince";
import Coulisses from "@/components/Coulisses";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <LaPince />
      <Coulisses />
      <Footer />
    </main>
  );
}
