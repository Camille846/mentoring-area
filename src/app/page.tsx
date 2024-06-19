import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import CalendarSection from "@/components/sections/CalendarSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CalendarSection />
      <FooterSection />
    </main>
  );
}
