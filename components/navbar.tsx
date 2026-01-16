import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';

interface NavbarProps {
  onNavigate: (page: 'home' | 'devis' | 'entreprises' | 'particuliers') => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Professionnels', href: '#entreprises' },
    { label: 'Particuliers', href: '#particuliers' },
    { label: 'Réalisations', href: '#réalisations' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-8 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'border-black/5 bg-white/80 shadow-lg' : 'border-transparent bg-transparent shadow-none'
        }`}>
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group bg-transparent border-none cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold italic transition-transform group-hover:rotate-12">
              S
            </div>
            <span className="font-bold tracking-tighter text-lg hidden sm:block uppercase">By Sandrine Couture</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button onClick={() => onNavigate('devis')} variant="primary" size="sm" className="hidden sm:flex uppercase text-[10px] tracking-widest">
              Devis Rapide
            </Button>
            <button 
              className="lg:hidden p-2 text-black bg-transparent border-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[100] p-10 flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
          <button className="absolute top-10 right-10 bg-transparent border-none cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-3xl font-black tracking-tighter no-underline text-black uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button onClick={() => { onNavigate('devis'); setIsMobileMenuOpen(false); }} size="lg" className="mt-8 uppercase tracking-widest">Obtenir un Devis</Button>
        </div>
      )}
    </nav>
  );
}