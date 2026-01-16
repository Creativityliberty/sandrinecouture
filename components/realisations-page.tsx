"use client"

import React, { useState } from 'react';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { REALISATIONS } from '@/lib/realisations-data';

export function RealisationsPage() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState('Tous');

    const categories = ['Tous', 'Entreprises', 'Particuliers', 'Bébé', 'Accessoires'];

    const filteredImages = activeFilter === 'Tous'
        ? REALISATIONS
        : REALISATIONS.filter(img => img.category === activeFilter);

    return (
        <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 no-underline">
                    <ArrowLeft size={16} /> Retour à l'accueil
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-[0.9]">
                        Toutes mes <br /><span className="text-primary not-italic">réalisations.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        Découvrez un aperçu complet de mon travail au fil des projets. Chaque pièce est unique et réalisée avec soin.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((img, i) => (
                        <div
                            key={i}
                            className="group relative h-[350px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-md hover:shadow-xl transition-all duration-700"
                            onClick={() => setSelectedImg(img.url)}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                <p className="text-primary text-[9px] uppercase font-black tracking-[0.2em] mb-1">{img.category}</p>
                                <h4 className="text-white text-2xl font-black tracking-tighter italic uppercase">{img.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-24 text-center glass p-12 rounded-[3.5rem] border-primary/5">
                    <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-6">Un projet similaire ?</h2>
                    <Link href="/devis" className="no-underline">
                        <Button size="lg" className="h-16 px-12 rounded-full uppercase text-[10px] tracking-widest font-black shadow-xl">
                            Lancer mon projet maintenant
                        </Button>
                    </Link>
                </div>

                {/* Lightbox */}
                {selectedImg && (
                    <div
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-8 right-8 text-white"><X size={32} /></button>
                        <img
                            src={selectedImg}
                            className="max-w-full max-h-[90vh] rounded-2xl animate-in zoom-in-95 duration-500"
                            alt="Vue agrandie"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
