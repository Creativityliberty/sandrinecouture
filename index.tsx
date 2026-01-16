import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HeroSection } from './components/home/hero-section';
import { SegmentationSection } from './components/home/segmentation-section';
import { BentoServices } from './components/home/bento-services';
import { ReassuranceSection } from './components/home/reassurance-section';
import { ProcessSection } from './components/home/process-section';
import { RealisationsSection } from './components/home/realisations-section';
import { LocalisationSection } from './components/home/localisation-section';
import { CtaSection } from './components/home/cta-section';
import { AIAssistant } from './components/ai-assistant';
import { DevisPage } from './components/devis-page';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'devis'>('home');

  // Handle simple routing via state and window events
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
    handleHashChange(); // Init
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20">
      <Navbar onNavigate={(page) => {
          if (page === 'devis') window.location.hash = 'devis';
          else window.location.hash = '';
      }} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <SegmentationSection />
            <div id="services">
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
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}