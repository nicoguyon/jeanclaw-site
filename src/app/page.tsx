import Hero from "@/components/Hero";
import Offre from "@/components/Offre";
import Coulisses from "@/components/Coulisses";
import AVenir from "@/components/AVenir";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Offre />
      <Coulisses />
      <AVenir />
      <Footer />
    </main>
  );
}
