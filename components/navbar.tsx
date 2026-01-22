"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Particuliers", href: "/particuliers" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`glass rounded-full px-4 sm:px-8 py-2.5 flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "border-black/5 bg-white/90 shadow-md"
              : "border-transparent bg-transparent shadow-none"
          }`}
        >
          {/* Logo avec image et forme arrondie */}
          <Link
            href="/"
            className="flex items-center gap-3 group bg-transparent border-none cursor-pointer no-underline"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden bg-white shadow-sm transition-transform group-hover:scale-110">
              <img
                src="/logo-sandrine.png"
                alt="Logo Sandrine Couture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span
              className={`font-bold tracking-tighter text-sm sm:text-base hidden xs:block uppercase text-gray-800 italic transition-all duration-500 overflow-hidden ${
                isLogoHovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              By Sandrine Couture
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-widest font-extrabold text-muted-foreground hover:text-primary transition-colors no-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/devis">
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:flex uppercase text-[9px] tracking-widest h-10 px-6 font-black"
              >
                Devis
              </Button>
            </Link>
            <button
              className="lg:hidden p-2 text-black bg-transparent border-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              title={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-xl z-[100] p-6 flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
          <button
            className="absolute top-6 right-6 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            title="Fermer le menu"
          >
            <X size={24} />
          </button>

          <div className="w-16 h-16 rounded-full border border-primary/20 overflow-hidden mb-2 shadow-md">
            <img
              src="/logo-sandrine.png"
              className="w-full h-full object-cover"
              alt="By Sandrine Couture"
            />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-bold tracking-widest no-underline text-gray-900 uppercase hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/devis" className="w-full max-w-xs no-underline mt-2">
            <Button
              onClick={() => setIsMobileMenuOpen(false)}
              size="lg"
              className="uppercase tracking-widest text-[9px] h-12 w-full font-bold shadow-lg shadow-primary/20"
            >
              Demander un Devis
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
