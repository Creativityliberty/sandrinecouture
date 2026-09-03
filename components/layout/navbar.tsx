"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Baby, 
  ShoppingBag, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  ShoppingCart, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { createTopDockController } from "./topDockController";

const NAV_ITEMS = [
  { id: "entreprises", label: "Entreprises", href: "/entreprises", icon: Building2 },
  { id: "particuliers", label: "Particuliers", href: "/particuliers", icon: Baby },
  { id: "boutique", label: "Boutique", href: "/boutique", icon: ShoppingBag },
  { id: "realisations", label: "Réalisations", href: "/realisations", icon: Sparkles },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen },
  { id: "faq", label: "FAQ", href: "/faq", icon: HelpCircle },
  { id: "contact", label: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemsCount, setIsCartOpen } = useCart();

  const dockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ThreeUI Animated Proximity Dock Controller (Variant Command Bar / Modern)
  useEffect(() => {
    const root = dockRef.current;
    if (!root) return;

    const cleanup = createTopDockController(root, () => ({
      proximity: 122,
      spring: 0.19,
      damping: 0.70,
      widthGrowth: 17,
      heightGrowth: 16,
      drop: 3.5,
      axis: "x",
      lockTrack: true,
    }));

    return cleanup;
  }, []);

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 pointer-events-none ${
        isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-center">
        
        {/* Animated Command Bar Container */}
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-3 sm:px-6 py-2 flex items-center justify-between transition-all duration-500 border ${
            isScrolled
              ? "bg-stone-950/90 border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl text-white"
              : "bg-white/85 border-black/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl text-stone-900"
          }`}
        >
          
          {/* 1. BRAND WORDMARK (LEFT) */}
          <Link
            href="/"
            aria-label="Retour à l'accueil"
            className="flex items-center gap-3 group shrink-0 no-underline"
          >
            <div className={`w-9 h-9 rounded-full overflow-hidden border p-0.5 transition-all duration-500 group-hover:scale-105 ${
              isScrolled ? "border-primary/40 bg-stone-900 shadow-sm" : "border-primary/20 bg-white shadow-xs"
            }`}>
              <img
                src="/logo-sandrine.webp"
                alt="Logo Sandrine Couture"
                width={36}
                height={36}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="flex flex-col text-left">
              <span className={`text-xs font-black tracking-tighter uppercase leading-none font-mono ${
                isScrolled ? "text-white" : "text-stone-900"
              }`}>
                By Sandrine
              </span>
              <span className="text-[9px] uppercase tracking-widest text-primary font-bold">
                Atelier Normand
              </span>
            </div>
          </Link>

          {/* 2. THREEUI ANIMATED PROXIMITY DOCK (CENTER) */}
          <nav
            ref={dockRef}
            aria-label="Navigation principale"
            className="hidden lg:flex items-center justify-center gap-1.5 h-10 px-2"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  data-dock-item
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 h-9 px-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-pointer no-underline select-none whitespace-nowrap will-change-transform ${
                    isActive
                      ? isScrolled
                        ? "bg-white text-stone-950 font-bold shadow-md"
                        : "bg-stone-900 text-white font-bold shadow-md"
                      : isScrolled
                        ? "text-stone-400 hover:text-white hover:bg-white/10"
                        : "text-stone-600 hover:text-stone-950 hover:bg-black/5"
                  }`}
                >
                  <Icon size={13} className={isActive ? "text-primary" : "opacity-70"} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. PAIRED ACTIONS & CART (RIGHT) */}
          <div className="flex items-center gap-2.5 shrink-0">
            
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 rounded-full transition-all cursor-pointer ${
                isScrolled 
                  ? "bg-white/10 text-stone-200 hover:bg-white/20 hover:text-white" 
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-950"
              }`}
              aria-label="Ouvrir le panier"
            >
              <ShoppingCart size={15} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* Gradient Call To Action (ThreeUI paired action) */}
            <Link href="/devis" className="hidden sm:inline-flex">
              <Button
                size="sm"
                className="h-10 px-5 rounded-full bg-primary hover:bg-primary/95 text-white font-bold uppercase tracking-wider text-[10px] shadow-md shadow-primary/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Devis 24h</span>
                <ChevronRight size={13} />
              </Button>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`lg:hidden p-2 rounded-full cursor-pointer ${
                isScrolled ? "text-white hover:bg-white/10" : "text-stone-900 hover:bg-black/5"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-stone-950/98 backdrop-blur-2xl z-[100] p-6 flex flex-col items-center justify-center gap-4 text-white animate-in fade-in duration-300 pointer-events-auto">
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>

          <div className="w-16 h-16 rounded-full border border-primary/30 overflow-hidden mb-2 shadow-xl bg-stone-900 p-1">
            <img
              src="/logo-sandrine.webp"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full"
              alt="By Sandrine Couture"
            />
          </div>

          <div className="flex flex-col items-center gap-1 mb-6">
            <span className="text-base font-black tracking-tight uppercase">By Sandrine Couture</span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Atelier Normand</span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full max-w-xs">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-stone-200 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-primary" />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight size={14} className="opacity-50" />
                </Link>
              );
            })}
          </div>

          <Link href="/devis" className="w-full max-w-xs mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-primary/30"
            >
              Demander un Devis sous 24h
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
