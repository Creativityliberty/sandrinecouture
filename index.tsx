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
import { EntreprisesPage } from './components/entreprises-page';
import { ParticuliersPage } from './components/particuliers-page';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'devis' | 'entreprises' | 'particuliers'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.split('?')[0];
      
      if (hash === '#devis') {
        setCurrentPage('devis');
      } else if (hash === '#entreprises') {
        setCurrentPage('entreprises');
      } else if (hash === '#particuliers') {
        setCurrentPage('particuliers');
      } else {
        setCurrentPage('home');
        // If it's an anchor like #réalisations, the browser will handle the scroll if we are on 'home'
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'devis': return <DevisPage />;
      case 'entreprises': return <EntreprisesPage />;
      case 'particuliers': return <ParticuliersPage />;
      default: return (
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
      );
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20">
      <Navbar onNavigate={(page) => {
          window.location.hash = page === 'home' ? '' : page;
      }} />
      
      <main>{renderContent()}</main>

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