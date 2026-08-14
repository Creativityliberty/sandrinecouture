"use client";

import React from "react";
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
    <section className="py-24 bg-gray-50 border-y border-black/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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

        {/* Scrolling Reels Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 max-w-7xl mx-auto">
          {reels.map((reel) => {
            const isLocal = !reel.videoUrl.startsWith("http");
            return (
              <div
                key={reel.id}
                className="w-[280px] sm:w-[300px] shrink-0 snap-start group relative rounded-[2rem] overflow-hidden bg-black shadow-xl border-4 border-white transform transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between"
                style={{ height: "480px" }}
              >
                {isLocal ? (
                  <video
                    src={reel.videoUrl}
                    poster={reel.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(reel.videoUrl)}
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

                {/* Local Video Overlay & Badges (only visible for local video or as static top details) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-md">
                    {reel.category}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 z-10 pointer-events-none">
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">
                    {reel.title}
                  </h3>
                  <p className="text-white/60 text-[9px] font-black uppercase tracking-widest">
                    By Sandrine Couture
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
