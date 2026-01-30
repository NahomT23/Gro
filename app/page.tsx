import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BullaStory from "@/components/BullaStory";
import NutrientGrid from "@/components/NutrientGrid";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BullaStory />
      <NutrientGrid />
      <CTASection />
    </main>
  );
}
