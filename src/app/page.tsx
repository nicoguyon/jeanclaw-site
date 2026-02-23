"use client";

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GuideSection from "@/components/GuideSection";
import TeamSection from "@/components/TeamSection";
import ProduitsSection from "@/components/ProduitsSection";
import DashboardSection from "@/components/DashboardSection";
import HumainSection from "@/components/HumainSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <GuideSection />
        <TeamSection />
        <ProduitsSection />
        <DashboardSection />
        <HumainSection />
      </main>
      <Footer />
    </>
  );
}
