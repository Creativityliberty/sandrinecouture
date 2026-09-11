"use client";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Search, Sparkles, BookOpen, SlidersHorizontal, Scissors } from "lucide-react";
import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Tous", "Entreprises", "Technique", "Cadeaux", "Conseils"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "Tous" ||
      post.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === "Entreprises" && (post.category.includes("Entreprise") || post.category.includes("Pro"))) ||
      (selectedCategory === "Cadeaux" && (post.category.includes("Cadeau") || post.category.includes("Bébé") || post.category.includes("Naissance")));

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-32">
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Blog", url: "https://sandrinecouture.com/blog" },
        ]}
      />

      <Navbar />

      {/* 1. HERO BLOG QUIET LUXURY (STYLE BOUTIQUE / RÉALISATIONS) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20 border-b border-stone-200/60 overflow-hidden bg-stone-900 text-white">
        
        {/* Authentic Normandie Coast Atelier Photo in Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/hero/hero-blog-atelier.webp" 
            alt="Atelier de couture et broderie avec vue sur les falaises de Normandie par Sandrine Couture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_35%] sm:object-[80%_40%] filter brightness-[0.92] contrast-[1.08] saturate-[1.05]"
          />
          {/* Subtle Dark Glassmorphism scrim: text is super crisp on left, cliffs & workshop clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/35 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70 z-[1]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-10 border-b border-white/15 text-[11px] font-mono tracking-widest uppercase text-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">By Sandrine Couture • Atelier Robertot (Normandie)</span>
              <span className="text-stone-400">/</span>
              <span>Le Journal de l'Atelier</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-300">Guides &amp; Conseils 100% Gratuits</span>
              <span className="text-primary-light font-bold">Savoir-Faire Artisanal</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/90 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-4 shadow-md border border-white/10 backdrop-blur-md">
                <BookOpen size={12} className="text-primary" />
                <span>Savoir-Faire, Tendances &amp; Guides Textiles</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-4 drop-shadow-md">
                Le Mag de la Broderie &amp; <br />
                <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8">
                  conseils textiles
                </span>.
              </h1>
            </div>

            <p className="text-stone-200 text-sm sm:text-base max-w-sm leading-relaxed font-normal drop-shadow-sm">
              Astuces d'entretien, guides techniques pour professionnels, idées de cadeaux de naissance personnalisés et coulisses de mon atelier artisanal à Robertot.
            </p>
          </div>

          {/* Integrated Search & Category Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un guide (ex: BTP, lavage)..."
                  className="w-full pl-10 pr-4 py-2 bg-stone-100 hover:bg-stone-200/70 focus:bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-xs font-medium text-stone-900 placeholder:text-stone-400 transition-all"
                />
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 text-xs font-mono text-stone-500 shrink-0">
                <SlidersHorizontal size={13} className="text-primary" />
                <span>{filteredPosts.length} articles</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      <RevealOnScroll direction="up" delay={80}>
      {/* Articles Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-black/5">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Aucun article ne correspond à votre recherche.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Tous");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-wider"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-3xl border border-black/10 overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-500 flex flex-col relative"
                >
                  {/* Image */}
                  <div className="h-56 overflow-hidden relative bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-lg font-black tracking-tight uppercase leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${article.slug}`} className="before:absolute before:inset-0 text-inherit no-underline">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-xs mb-6 line-clamp-3 font-medium leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-auto pt-4 border-t border-black/5 space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-gray-700">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-primary" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1.5 text-primary font-black">
                          <Clock size={13} />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-5 w-full py-2.5 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white font-black uppercase text-[9px] tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                      <span>Lire le guide complet</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      </RevealOnScroll>

      <RevealOnScroll direction="up" delay={80}>
      {/* Demande de Devis ou Contact Section */}
      <section className="py-20 px-6 bg-pink-50/50 border-t border-b border-pink-100/60 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-primary text-[9px] font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles size={12} />
            <span>Un projet de broderie en tête ?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-4">
            Demandez votre devis personnalisé gratuit
          </h2>
          <p className="text-gray-700 mb-8 font-medium max-w-xl mx-auto text-sm leading-relaxed">
            Entreprises, artisans ou créations de naissance : je vous réponds personnellement avec un chiffrage précis sous 24h ouvrées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="px-8 py-3.5 bg-primary hover:bg-pink-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-pink-500/25 transition-all no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Demander un Devis en 24h</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 border border-black/10 font-black uppercase tracking-widest text-[10px] rounded-full shadow-sm transition-all no-underline inline-flex items-center justify-center"
            >
              Contacter l'Atelier
            </Link>
          </div>
        </div>
      </section>

      </RevealOnScroll>
      <Footer />
    </div>
  );
}
