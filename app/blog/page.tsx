"use client";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Search, Sparkles, BookOpen } from "lucide-react";
import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
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
    <div className="relative min-h-screen font-sans bg-white">
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Blog", url: "https://sandrinecouture.com/blog" },
        ]}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-14 px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-primary text-[10px] font-mono uppercase tracking-widest mb-6">
            <BookOpen size={12} />
            <span>L'Atelier des Savoir-Faire & Tendances</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9] text-gray-950">
            Le Mag de la Broderie & <br />
            <span className="text-primary not-italic">Conseils Textiles</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
            Astuces d'entretien, guides techniques pour entreprises, idées cadeaux de naissance personnalisés et coulisses de mon atelier artisanal à Robertot.
          </p>

          {/* Search & Category filter */}
          <div className="max-w-xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un conseil (ex: BTP, lavage, doudou)..."
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-2xl border border-black/10 focus:outline-none focus:border-primary text-xs font-bold transition-all shadow-sm"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md shadow-pink-500/20 scale-105"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-black/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll direction="up" delay={80}>
      {/* Articles Grid */}
      <section className="py-12 px-6">
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
