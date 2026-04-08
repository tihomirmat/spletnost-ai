/* ============================================================
   SPLETNOST AI – Home Page
   Design: "Nebula Flow" – Cosmic Luxury + Fluid Tech
   
   Sections:
   1. Navbar (sticky glassmorphism)
   2. Hero (full-screen nebula bg, stats, CTA)
   3. Automations (5 key AI automations)
   4. CTA Banner
   5. Apps (CRM, Warehouse, Social Media)
   6. Why Spletnost (stats, reasons, process)
   7. Contact + Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AutomationsSection from "@/components/AutomationsSection";
import AppsSection from "@/components/AppsSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080B1A" }}>
      <Navbar />
      <HeroSection />
      <AutomationsSection />
      <CTABanner />
      <AppsSection />
      <WhySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
