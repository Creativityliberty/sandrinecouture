"use client";

import { AIAssistant } from "@/components/layout/ai-assistant";
import { Footer } from "@/components/layout/footer";
import { BentoServices } from "@/components/home/bento-services";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { LocalisationSection } from "@/components/home/localisation-section";
import { ProcessSection } from "@/components/home/process-section";
import { RealisationsSection } from "@/components/home/realisations-section";
import { ReassuranceSection } from "@/components/home/reassurance-section";
import { SegmentationSection } from "@/components/home/segmentation-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Navbar } from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SegmentationSection />
        <BentoServices />
        <ReassuranceSection />
        <ProcessSection />
        <RealisationsSection />
        <TestimonialsSection />
        <LocalisationSection />
        <CtaSection />
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}
