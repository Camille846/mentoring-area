import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import CalendarSection from "@/components/sections/CalendarSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
// import Leaders from "@/components/sections/Leaders";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CalendarSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
