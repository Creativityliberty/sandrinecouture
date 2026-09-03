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

  // ThreeUI Animated Proximity Dock Controller (Variant Command Bar / Modern) — Desktop Only
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
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
      className={`fixed top-0 left-0 right-0 w-full z-[90] transition-all duration-500 pointer-events-none ${
        isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-2.5 sm:px-6 flex items-center justify-center">
        
        {/* Animated Command Bar Container - Guaranteed 100% Fit on 320px to 430px */}
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-2.5 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between transition-all duration-500 border ${
            isScrolled
              ? "bg-stone-950/90 border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl text-white"
              : "bg-white/90 border-black/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl text-stone-900"
          }`}
        >
          
          {/* 1. BRAND WORDMARK (LEFT) */}
          <Link
            href="/"
            aria-label="Retour à l'accueil"
            className="flex items-center gap-2 sm:gap-3 group shrink-0 no-underline min-w-0"
          >
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border p-0.5 shrink-0 transition-all duration-500 group-hover:scale-105 ${
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
            
            <div className="flex flex-col text-left min-w-0">
              <span className={`text-[11px] sm:text-xs font-black tracking-tighter uppercase leading-none font-mono truncate ${
                isScrolled ? "text-white" : "text-stone-900"
              }`}>
                By Sandrine
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider sm:tracking-widest text-primary font-bold truncate">
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
                  aria-current={isActive ? "page" : undefined}
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

            {/* Mobile Bento 6-Dot Dice Toggle (High-End Tactile Trigger) */}
            <button
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer border ${
                isMobileMenuOpen
                  ? "bg-primary text-white border-primary shadow-lg shadow-pink-500/30 scale-105"
                  : isScrolled
                    ? "bg-white/10 text-white border-white/15 hover:bg-white/20"
                    : "bg-stone-100 text-stone-900 border-black/10 hover:bg-stone-200"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {isMobileMenuOpen ? (
                <X size={18} className="animate-in spin-in-90 duration-200" />
              ) : (
                /* 6-dot dice matrix (2x3 grid) */
                <div className="grid grid-cols-3 gap-1 p-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-125" />
                </div>
              )}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu — Ultra Fluid Luxury Bento Experience */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-stone-950/95 backdrop-blur-3xl z-[100] p-6 flex flex-col justify-between text-white animate-in fade-in slide-in-from-top-6 duration-300 pointer-events-auto overflow-y-auto">
          
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-primary/40 overflow-hidden shadow-md bg-stone-900 p-0.5">
                <img
                  src="/logo-sandrine.webp"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                  alt="By Sandrine Couture"
                />
              </div>
              <div>
                <span className="text-xs font-black tracking-tight uppercase block leading-none">By Sandrine Couture</span>
                <span className="text-[9px] font-mono text-primary uppercase tracking-widest">Atelier Normand • Robertot</span>
              </div>
            </div>

            <button
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items Grid / Bento Links */}
          <div className="py-6 flex flex-col gap-2.5 max-w-md mx-auto w-full">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isCurrent = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl border transition-all no-underline ${
                    isCurrent
                      ? "bg-primary text-white border-primary shadow-lg shadow-pink-500/25 font-bold"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-stone-200 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isCurrent ? "bg-white/20 text-white" : "bg-white/10 text-primary"
                    }`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className={isCurrent ? "text-white" : "text-stone-500"} />
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Cards */}
          <div className="pt-4 border-t border-white/10 max-w-md mx-auto w-full space-y-3">
            <Link 
              href="/devis" 
              className="w-full block no-underline" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                className="w-full h-13 rounded-full bg-primary hover:bg-pink-600 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2"
              >
                <span>Demander un Devis sous 24h</span>
                <ArrowRight size={16} />
              </Button>
            </Link>

            <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-2xl text-[9px] font-mono text-stone-400">
              <span>Mondial Relay & Colissimo</span>
              <span className="text-primary font-bold">Fait Main 76</span>
            </div>
          </div>

        </div>
      )}
    </nav>
  );
}
