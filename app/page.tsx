"use client";

import { AIAssistant } from "@/components/layout/ai-assistant";
import { Footer } from "@/components/layout/footer";
import { BentoServices } from "@/components/home/bento-services";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeBanner } from "@/components/home/marquee-banner";
import { LocalisationSection } from "@/components/home/localisation-section";
import { ProcessSection } from "@/components/home/process-section";
import { RealisationsSection } from "@/components/home/realisations-section";
import { ReassuranceSection } from "@/components/home/reassurance-section";
import { SegmentationSection } from "@/components/home/segmentation-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ReelsCarousel } from "@/components/home/reels-carousel";
import { Navbar } from "@/components/layout/navbar";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <HeroSection />

        <RevealOnScroll direction="up" delay={50}>
          <MarqueeBanner />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <SegmentationSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <BentoServices />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <ReassuranceSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <ProcessSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <RealisationsSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <ReelsCarousel />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <TestimonialsSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <LocalisationSection />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <CtaSection />
        </RevealOnScroll>
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}
