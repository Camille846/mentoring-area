"use client";
import { useRef } from 'react';
import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import CalendarSection from "@/components/sections/CalendarSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
// import SoulSmartSection from "@/components/sections/SoulSmartSection";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <main className="bg-bg bg-contain w-full h-full bg-center bg-fixed">
        <NavBar 
          heroRef={heroRef} 
          aboutRef={aboutRef} 
          calendarRef={calendarRef} 
          faqRef={faqRef} 
          footerRef={footerRef}
        />
        <div ref={heroRef} id="hero"> 
          <HeroSection />
        </div>
        <div ref={aboutRef} id="about">
          <AboutSection /> 
        </div>
        <div ref={calendarRef} id="calendar">
          <CalendarSection />
        </div>
        <div ref={faqRef} id="faq">
          <FaqSection />
        </div>
        <div ref={footerRef} id="footer">
          <FooterSection />
        </div>
      </main>
    </motion.div>
  );
}
