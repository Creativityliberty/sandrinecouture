"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Play, Film, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ReelItem {
  id: number;
  title: string;
  category: string;
  // Can be a local MP4 path (e.g. "/videos/reel1.mp4") or a Facebook Reel URL
  videoUrl: string;
  thumbnail: string;
}

export function ReelsCarousel() {
  const [activeReelId, setActiveReelId] = useState<number | null>(null);
  const reels: ReelItem[] = [
    {
      id: 1,
      title: "Sac à dos enfant Nora-Dee brodé",
      category: "Bébé / Naissance",
      videoUrl: "https://www.facebook.com/reel/4039173042961666",
      thumbnail: "/images/realisations/sac-linge-enfant-motif-dinosaure-personnalise-mae-sandrine-couture-normandie.webp",
    },
    {
      id: 2,
      title: "Personnalisation textile en direct",
      category: "Technique",
      videoUrl: "https://www.facebook.com/reel/895520609638848",
      thumbnail: "/images/realisations/2b-couverture-collection-1.webp",
    },
    {
      id: 3,
      title: "Créations bébés personnalisées",
      category: "Particuliers",
      videoUrl: "https://www.facebook.com/reel/1307188358184329",
      thumbnail: "/images/realisations/lange-bapteme-personnalise-giulia.webp",
    },
    {
      id: 4,
      title: "Marquage logo brodé sur textile pro",
      category: "Entreprises",
      videoUrl: "https://www.facebook.com/reel/775711962039276",
      thumbnail: "/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp",
    },
    {
      id: 5,
      title: "Artisanat et précision de broderie",
      category: "Atelier",
      videoUrl: "https://www.facebook.com/reel/1422454149374605",
      thumbnail: "/images/realisations/poules-decoratives-brodees.webp",
    },
    {
      id: 6,
      title: "Personnalisation de doudous bébés",
      category: "Bébé / Naissance",
      videoUrl: "https://www.facebook.com/reel/2353398705087142/",
      thumbnail: "/images/realisations/sac-linge-enfant-motif-dinosaure-personnalise-mae-sandrine-couture-normandie.webp",
    },
    {
      id: 7,
      title: "Broderie logo entreprise sur vestes",
      category: "Entreprises",
      videoUrl: "https://www.facebook.com/reel/1490491628627775/",
      thumbnail: "/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp",
    },
    {
      id: 8,
      title: "Broderie de précision sur serviettes",
      category: "Atelier",
      videoUrl: "https://www.facebook.com/reel/2216409348787182/",
      thumbnail: "/images/realisations/poules-decoratives-brodees.webp",
    },
    {
      id: 9,
      title: "Trousseau de naissance personnalisé",
      category: "Bébé / Naissance",
      videoUrl: "https://www.facebook.com/reel/745797054849455/",
      thumbnail: "/images/realisations/lange-bapteme-personnalise-giulia.webp",
    },
    {
      id: 13,
      title: "Motifs de broderie originaux",
      category: "Atelier",
      videoUrl: "https://www.facebook.com/reel/1209577394511796/",
      thumbnail: "/images/realisations/poules-decoratives-brodees.webp",
    },
    {
      id: 14,
      title: "Coffrets de naissance artisanaux",
      category: "Bébé / Naissance",
      videoUrl: "https://www.facebook.com/reel/1527164635355844/",
      thumbnail: "/images/realisations/lange-bapteme-personnalise-giulia.webp",
    },
    {
      id: 15,
      title: "Logo brodé sur polo professionnel",
      category: "Entreprises",
      videoUrl: "https://www.facebook.com/reel/3835618966679801/",
      thumbnail: "/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp",
    },
    {
      id: 16,
      title: "Zoom sur le fil et la texture",
      category: "Technique",
      videoUrl: "https://www.facebook.com/reel/526177550081104/",
      thumbnail: "/images/realisations/2b-couverture-collection-1.webp",
    }
  ];

  // Helper to check if URL is a local file or external FB link
  const getEmbedUrl = (url: string) => {
    if (url.startsWith("http")) {
      // Return FB video plugin embed URL
      return `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(
        url
      )}&show_text=false&width=267&t=0`;
    }
    return url;
  };

  return (
    <section className="py-20 sm:py-24 bg-gray-50 border-y border-black/5 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-white/60 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-6">
              <Film className="w-3.5 h-3.5" />
              <span>Les Coulisses de l'Atelier</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-[0.9]">
              Nos Réalisations <br />
              <span className="text-primary not-italic">En Vidéo.</span>
            </h2>
            <p className="text-gray-700 font-medium max-w-xl mt-4 text-sm sm:text-base">
              Découvrez la précision des points de broderie et le travail sur les matières en mouvement direct depuis nos publications réseaux sociaux.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="https://www.instagram.com/direct/t/17849788362080500/?hl=fr" target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button className="rounded-full uppercase text-[9px] font-black tracking-widest h-12 bg-primary hover:bg-black text-white px-6">
                Nous contacter sur Instagram
              </Button>
            </a>
            <a href="https://instagram.com/bysandrinecouture" target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="outline" className="rounded-full uppercase text-[9px] font-black tracking-widest h-12">
                Suivre sur Instagram
              </Button>
            </a>
          </div>
        </div>

        {/* Scrolling Reels Container - Contained & Fluid */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x snap-mandatory w-full max-w-full">
          {reels.map((reel) => {
            const isLocal = !reel.videoUrl.startsWith("http");
            const isActive = activeReelId === reel.id;

            return (
              <div
                key={reel.id}
                className="w-[280px] sm:w-[300px] shrink-0 snap-start group relative rounded-[2rem] overflow-hidden bg-stone-950 shadow-xl border-4 border-white transform transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between select-none"
                style={{ height: "480px" }}
              >
                {isActive ? (
                  <>
                    {isLocal ? (
                      <video
                        src={reel.videoUrl}
                        poster={reel.thumbnail}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        controls
                        playsInline
                      />
                    ) : (
                      <iframe
                        src={`${getEmbedUrl(reel.videoUrl)}&autoplay=true`}
                        title={`Vidéo atelier broderie - ${reel.title}`}
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="absolute inset-0 w-full h-full"
                      />
                    )}
                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveReelId(null);
                      }}
                      className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/80 text-white hover:bg-primary transition-colors cursor-pointer"
                      aria-label="Fermer la vidéo"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  /* High-Performance Poster Façade (0 KB video downloaded on initial load) */
                  <button
                    onClick={() => setActiveReelId(reel.id)}
                    className="absolute inset-0 w-full h-full text-left cursor-pointer group focus:outline-none"
                    aria-label={`Lire le reel : ${reel.title}`}
                  >
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      width={300}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/20 group-hover:from-stone-950/80 transition-colors" />

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                      <div className="w-14 h-14 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                        <Play className="w-6 h-6 fill-white ml-1 text-white" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-200 bg-stone-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                        Regarder le Reel
                      </span>
                    </div>
                  </button>
                )}

                {/* Badges & Titles */}
                {!isActive && (
                  <>
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-md">
                        {reel.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-16 z-20 pointer-events-none">
                      <h3 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2">
                        {reel.title}
                      </h3>
                      <p className="text-stone-300 text-[9px] font-black uppercase tracking-widest">
                        Atelier Sandrine Couture
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
