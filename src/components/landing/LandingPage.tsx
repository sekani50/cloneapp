import { AboutSection } from "./_components/AboutSection";
import { ClientsSection } from "./_components/ClientSection";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Headers";
import { HeroSection } from "./_components/HeroSection";
import { MissionSection } from "./_components/MissionSection";
import { ServicesCards } from "./_components/ServicesCards";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesCards />
      <AboutSection />
      <MissionSection />
      <ClientsSection />
      <Footer />
    </main>
  )
}
