"use client";
import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import CalendarSection from "@/components/sections/CalendarSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import SoulSmartSection from "@/components/sections/SoulSmartSection";
import { motion, useScroll } from "framer-motion";
// import Leaders from "@/components/sections/Leaders";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <main className="bg-white">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <CalendarSection />
        <FaqSection />
        <FooterSection />
      </main>
    </motion.div>
  );
}
