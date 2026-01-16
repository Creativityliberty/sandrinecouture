
"use client"

import React, { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SegmentationSection } from "@/components/home/segmentation-section"
import { BusinessSection } from "@/components/home/business-section"
import { BentoServices } from "@/components/home/bento-services"
import { ReassuranceSection } from "@/components/home/reassurance-section"
import { ProcessSection } from "@/components/home/process-section"
import { RealisationsSection } from "@/components/home/realisations-section"
import { LocalisationSection } from "@/components/home/localisation-section"
import { CtaSection } from "@/components/home/cta-section"
import { AIAssistant } from "@/components/ai-assistant"
import { DevisPage } from "@/components/devis-page"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<'home' | 'devis'>('home');

  // Handle routing via state and window events to sync with the Navbar's hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#devis') {
        setCurrentPage('devis');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Define onNavigate callback required by Navbar
  const handleNavigate = (page: 'home' | 'devis') => {
    if (page === 'devis') {
      window.location.hash = 'devis';
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className="relative">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <SegmentationSection />
            <BusinessSection />
            <div id="particuliers">
              <BentoServices />
            </div>
            <ReassuranceSection />
            <ProcessSection />
            <div id="réalisations">
              <RealisationsSection />
            </div>
            <LocalisationSection />
            <CtaSection />
          </>
        ) : (
          <DevisPage />
        )}
      </main>

      <AIAssistant />
      <Footer />
    </div>
  )
}
