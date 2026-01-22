"use client";

import { REALISATIONS } from "@/lib/realisations-data";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function RealisationsSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // We only show the first 8 on the home page
  const displayImages = REALISATIONS.slice(0, 8);

  return (
    <section id="réalisations" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16 text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 italic leading-[0.9] uppercase">
              Réalisations <br />
              <span className="text-primary not-italic text-xl sm:text-2xl tracking-tight">
                L'Atelier en Image
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
              Un rendu propre et professionnel pour chaque projet unique.
            </p>
          </div>
          <Link href="/realisations">
            <Button className="h-14 px-8 uppercase text-[9px] tracking-widest font-black">
              Voir tous mes projets
            </Button>
          </Link>
        </div>

        {/* Multiplex Grid Layout - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] cursor-pointer shadow-md hover:shadow-xl transition-all duration-700 animate-in fade-in zoom-in-95 fill-mode-both ${
                i === 0
                  ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 h-[300px] sm:h-[400px] lg:h-full animation-delay-0"
                  : i === 1
                    ? "h-[250px] md:h-[350px] animation-delay-100"
                    : i === 2
                      ? "h-[250px] md:h-[350px] animation-delay-200"
                      : i === 3
                        ? "h-[250px] md:h-[350px] animation-delay-300"
                        : i === 4
                          ? "h-[250px] md:h-[350px] animation-delay-400"
                          : i === 5
                            ? "h-[250px] md:h-[350px] animation-delay-500"
                            : i === 6
                              ? "h-[250px] md:h-[350px] animation-delay-600"
                              : "h-[250px] md:h-[350px] animation-delay-700"
              }`}
              onClick={() => setSelectedImg(img.url)}
            >
              <div className="w-full h-full relative">
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
                <p className="text-primary text-[9px] uppercase font-black tracking-[0.2em] mb-1">
                  {img.category}
                </p>
                <h4 className="text-white text-xl md:text-2xl font-black tracking-tighter italic uppercase">
                  {img.title}
                </h4>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-[9px] uppercase font-bold tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn size={12} /> Cliquer pour voir
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 p-3 rounded-full border-none cursor-pointer"
              onClick={() => setSelectedImg(null)}
              aria-label="Fermer l'aperçu"
              title="Fermer"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImg}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-500"
              alt="Vue agrandie"
            />
          </div>
        )}
      </div>
    </section>
  );
}
