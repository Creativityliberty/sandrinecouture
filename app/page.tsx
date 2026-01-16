"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SegmentationSection } from "@/components/home/segmentation-section"
import { BentoServices } from "@/components/home/bento-services"
import { ReassuranceSection } from "@/components/home/reassurance-section"
import { ProcessSection } from "@/components/home/process-section"
import { RealisationsSection } from "@/components/home/realisations-section"
import { LocalisationSection } from "@/components/home/localisation-section"
import { CtaSection } from "@/components/home/cta-section"
import { AIAssistant } from "@/components/ai-assistant"

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
      <Navbar />
      <HeroSection />
      <SegmentationSection />
      <BentoServices />
      <ReassuranceSection />
      <ProcessSection />
      <RealisationsSection />
      <LocalisationSection />
      <CtaSection />
      <AIAssistant />
      <Footer />
    </div>
  )
}
