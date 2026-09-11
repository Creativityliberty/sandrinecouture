"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { 
  ChevronDown, 
  MessageCircle, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  HelpCircle, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone,
  UtensilsCrossed,
  HardHat,
  Trophy,
  HeartHandshake,
  Baby,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LUXURY_EASE, MotionReveal } from "@/components/effects/motion-reveal";

interface FAQItemData {
  id: string;
  category: "restauration" | "btp" | "clubs" | "beaute" | "naissance" | "express";
  categoryLabel: string;
  searchIntentTag: string;
  question: string;
  answer: string;
  highlight: string;
  actionText?: string;
  actionLink?: string;
}

const INTENT_FAQS: FAQItemData[] = [
  // 🍽️ 1. RESTAURATION, CAFÉS & MÉTIERS DE BOUCHE
  {
    id: "restauration-graisse-lavage",
    category: "restauration",
    categoryLabel: "Restauration & Cuisine",
    searchIntentTag: "broderie tablier restaurant résiste graisse lavage 90°",
    question: "Les broderies sur tabliers de restaurant résistent-elles aux taches de gras et aux lavages intensifs à haute température ?",
    answer: "Oui, c'est l'atout numéro un de la broderie professionnelle. Contrairement au flocage qui s'effrite et pèle dès le 20ème lavage, nous utilisons des fils industriels Madeira Polyneon 100% polyester à haute ténacité.\n\n• Température : Ils résistent aux lavages machine intensifs jusqu'à 60°C et 90°C.\n• Détachants : Insensibles aux produits dégraissants, lessives professionnelles et agents de blanchiment dilués.\n• Résultat : Votre logo garde sa brillance éclatante et ses couleurs intactes pendant des années de service.",
    highlight: "Tenue garantie 90°C & Graisse",
    actionText: "Devis Tabliers Restaurant",
    actionLink: "/devis"
  },
  {
    id: "restauration-emplacements-veste",
    category: "restauration",
    categoryLabel: "Restauration & Cuisine",
    searchIntentTag: "veste de cuisine broderie nom chef et logo restaurant",
    question: "Veste de cuisine & service : peut-on broder le nom du chef sur la poitrine et le logo du restaurant sur la manche ?",
    answer: "Absolument. Notre atelier est équipé pour positionner vos marquages au millimètre sur toutes les zones du vêtement de cuisine ou de salle :\n\n• Cœur / Poitrine : Nom et titre du chef, monogramme ou blason.\n• Manches : Écusson du restaurant, drapeau français ou logo discret.\n• Bavette & Tour de cou : Grand lettrage sur tabliers de sommeliers ou serveurs.\n• Grand dos : Enseigne visible en salle ou lors des prestations traiteur.",
    highlight: "Multi-emplacements précis au millimètre",
    actionText: "Configurer mes vestes de cuisine",
    actionLink: "/devis"
  },
  {
    id: "restauration-reassort-unite",
    category: "restauration",
    categoryLabel: "Restauration & Cuisine",
    searchIntentTag: "reassort tablier brodé petit nombre nouvel employé",
    question: "Réassort en cours d'année : puis-je commander seulement 2 ou 3 tabliers quand un nouveau serveur ou cuisinier arrive ?",
    answer: "Oui, sans aucun surcoût de programmation ! Dès votre première commande, votre matrice de numérisation de logo est archivée précieusement et à vie dans notre base atelier.\n\nQuand vous recrutez un nouveau salarié ou renouvelez un tablier usé, il vous suffit de nous envoyer un message WhatsApp : nous relançons 1, 2 ou 3 pièces immédiatement au même tarif unitaire négocié, sans frais de dossier.",
    highlight: "Matrice archivée à vie • Réassort 1 pièce",
    actionText: "Échanger avec Sandrine",
    actionLink: "https://wa.me/33629492213"
  },

  // 🏗️ 2. ARTISANS, BTP, CHANTIERS & GARAGES
  {
    id: "btp-softshell-etancheite",
    category: "btp",
    categoryLabel: "Artisans & BTP",
    searchIntentTag: "broderie veste softshell btp étanchéité pluie",
    question: "Broderie sur veste softshell ou parka de chantier : est-ce que cela perce et abîme l'imperméabilité du vêtement ?",
    answer: "Non, nous appliquons un protocole technique spécifique pour les vêtements d'extérieur techniques du BTP :\n\n• Sous-couche déperlante et renfort stabilisateur thermique étanche appliqués sur l'envers du piquage pour sceller les micro-perforations de l'aiguille.\n• Préservation du confort coupe-vent et déperlant de votre softshell, doudoune de travail ou parka haute visibilité.\n• Vos équipes restent parfaitement au sec sur les chantiers tout en arborant une image de marque irréprochable.",
    highlight: "Scellage étanche sous broderie",
    actionText: "Demander une étude BTP",
    actionLink: "/devis"
  },
  {
    id: "btp-frottements-poussiere",
    category: "btp",
    categoryLabel: "Artisans & BTP",
    searchIntentTag: "sweat de travail logo brodé résistant frottements poussière",
    question: "Sweat et polaire de travail : pourquoi la broderie est-elle obligatoire plutôt que le flocage pour les artisans ?",
    answer: "Sur un chantier de maçonnerie, plomberie, menuiserie ou électricité, le flocage plastique est détruit en quelques semaines par les frottements d'outils, la poussière et les lavages hebdomadaires répétés.\n\nLa broderie est tissée directement dans l'épaisseur de la maille du textile avec un point de bourdon et de remplissage haute densité. Même après 100 chantiers, le logo reste intact, net et valorise l'image professionnelle de votre entreprise auprès de vos clients.",
    highlight: "10x plus robuste que le flocage",
    actionText: "Voir nos réalisations BTP",
    actionLink: "/realisations"
  },
  {
    id: "btp-facture-tva",
    category: "btp",
    categoryLabel: "Artisans & BTP",
    searchIntentTag: "marquage textile déductible charges entreprise facture tva",
    question: "Comptabilité entreprise : fournissez-vous une facture conforme avec TVA déductible pour les vêtements professionnels ?",
    answer: "Oui, systématiquement. L'atelier By Sandrine Couture fournit pour chaque commande professionnelle une facture en bonne et due forme avec toutes les mentions légales requises.\n\nLes dépenses de vêtements de travail floqués ou brodés au logo de votre entreprise sont 100% déductibles de votre résultat fiscal (frais généraux / tenues professionnelles), et la TVA est intégralement récupérable par votre société.",
    highlight: "Facture pro • TVA 100% récupérable"
  },

  // 🏇 3. CLUBS DE SPORT, ÉQUITATION & ASSOCIATIONS
  {
    id: "clubs-tapis-de-selle",
    category: "clubs",
    categoryLabel: "Équitation & Clubs",
    searchIntentTag: "broderie tapis de selle chabraque équitation cheval club",
    question: "Broderie équestre : prenez-vous en charge les tapis de selle très épais, couvertures de chevaux et bonnets ?",
    answer: "C'est l'une des spécialités reconnues de l'atelier en Normandie ! La broderie équestre exige des cadres de tension lourds et des aiguilles renforcées capables de traverser le matelassage épais sans déformer la ligne de dos du cheval.\n\n• Nous brodons sur : chabraques d'obstacles et de dressage, couvre-reins polaires, couvertures d'écurie, chemises séchantes, bonnets anti-mouches et vestes de concours.\n• Fils imputrescibles résistants à la sueur acide du cheval et aux frottements de la selle.",
    highlight: "Spécialiste broderie équestre Normandie",
    actionText: "Demander une broderie équestre",
    actionLink: "/contact"
  },
  {
    id: "clubs-sweats-series",
    category: "clubs",
    categoryLabel: "Clubs & Assos",
    searchIntentTag: "sweat capuche broderie club sportif petite serie sans minimum",
    question: "Club de sport : quel est le délai pour une série de 20 à 50 sweats à capuche avant le début de saison ou un tournoi ?",
    answer: "En moyenne 7 à 12 jours ouvrés à compter de la validation du Bon À Tirer (BAT).\n\n• Nous vous envoyons une simulation numérique ultra-précise avec le blason de votre club, les numéros ou les prénoms des joueurs.\n• Tarifs de groupe spécialement étudiés pour les associations et clubs sportifs.\n• Envoi d'une broderie test sur tissu pour validation par le bureau du club avant lancement de la série complète.",
    highlight: "Tarifs club & BAT préalable inclus",
    actionText: "Devis pour mon association",
    actionLink: "/devis"
  },

  // 🌿 4. SPAS, INSTITUTS DE BEAUTÉ, HÔTELS & SANTÉ
  {
    id: "beaute-draps-bain-spa",
    category: "beaute",
    categoryLabel: "Spas, Instituts & Santé",
    searchIntentTag: "drap de bain peignoir brodé logo spa résistant huiles massage",
    question: "Spas & Instituts de beauté : vos broderies sur peignoirs et draps de bain résistent-elles aux huiles de massage et lavages fréquents ?",
    answer: "Parfaitement. Les instituts de beauté et centres de bien-être ont des contraintes drastiques d'hygiène avec des cycles de lavage quotidiens à 60°C pour éliminer les résidus d'huiles végétales et d'huiles essentielles.\n\nNous sélectionnons des éponges 550g/m² peignées au toucher velours luxueux et des fils de broderie hydrofuges et inaltérables qui conservent leur gonflant sans gratter les clientes lors des soins.",
    highlight: "Résistance huiles & hygiène 60°C",
    actionText: "Découvrir la gamme Linge",
    actionLink: "/boutique"
  },
  {
    id: "beaute-blouse-anti-irritation",
    category: "beaute",
    categoryLabel: "Spas, Instituts & Santé",
    searchIntentTag: "blouse medicale broderie prenom kine osteo anti irritation",
    question: "Blouse médicale, ostéo & kiné : la broderie gratte-t-elle la peau à l'intérieur du vêtement ?",
    answer: "Non, jamais. Nous appliquons systématiquement au dos de chaque broderie de vêtement porté à même la peau une protection thermo-fusible ultra-douce appelée « cover-stitch ».\n\nCe voile protecteur soyeux isole totalement les fils et nœuds de renfort intérieur, garantissant zéro démangeaison, zéro rougeur et un confort absolu tout au long de vos journées de consultations.",
    highlight: "Finition intérieure douce brevetée"
  },

  // 👶 5. CADEAUX DE NAISSANCE, ENFANCE & PARENTS
  {
    id: "naissance-doudou-deja-achete",
    category: "naissance",
    categoryLabel: "Naissance & Famille",
    searchIntentTag: "faire broder prenom sur doudou vêtement couverture déjà acheté",
    question: "Peut-on faire broder un prénom sur un doudou, un plaid ou un vêtement que j'ai déjà acheté dans le commerce ?",
    answer: "Oui, avec grand plaisir ! Vous n'êtes absolument pas obligés d'acheter vos articles chez nous.\n\nVous pouvez déposer à l'atelier de Robertot (ou m'envoyer par colis) le doudou fétiche, la couverture en tricot offerte par les grands-parents ou la cape de bain achetée en magasin. Sandrine choisira l'entoilage adapté pour broder délicatement le prénom de bébé sans altérer la douceur d'origine du doudou.",
    highlight: "Broderie sur vos articles personnels acceptée",
    actionText: "Envoyer une photo de mon doudou",
    actionLink: "https://wa.me/33629492213"
  },
  {
    id: "naissance-securite-oeko-tex",
    category: "naissance",
    categoryLabel: "Naissance & Famille",
    searchIntentTag: "broderie naissance bébé certifiée oeko tex sans produit toxique",
    question: "Bébé & Nourrissons : vos matières et fils sont-ils certifiés sans aucun risque pour la santé des tout-petits ?",
    answer: "La sécurité des nouveau-nés est la priorité absolue de Sandrine, elle-même maman passionnée de puériculture :\n\n• Tous nos fils de broderie sont certifiés Oeko-Tex Standard 100 Classe 1 (la norme la plus exigeante au monde, autorisée pour le contact direct avec la salive et la peau des bébés dès le premier jour).\n• Tissus en fibre de bambou naturelle, suédine douce et coton bio certifié.\n• Aucun fil coupant, nœud saillant ou composant allergène.",
    highlight: "100% Oeko-Tex Standard 100 Classe 1",
    actionText: "Voir les créations Bébé",
    actionLink: "/boutique"
  },
  {
    id: "naissance-cartable-maternelle",
    category: "naissance",
    categoryLabel: "Naissance & Famille",
    searchIntentTag: "cartable sac a dos maternelle brodé prénom dessin animaux",
    question: "Rentrée scolaire & Crèche : peut-on broder un animal ou un dessin personnalisé en plus du prénom sur le sac ?",
    answer: "Oui, c'est l'une des demandes préférées des familles ! En plus du prénom brodé dans la typographie de votre choix (cursive rétro, moderne, majuscules), nous disposons d'un catalogue de motifs brodés de haute précision :\n\n• Petits animaux de la forêt (renards, biches, hérissons, écureuils)\n• Dinosaures, engins de chantier, tracteurs, fusées\n• Fleurs champêtres, cœurs vichy et étoiles poétiques.\nLe tout brodé sur des sacs à dos résistants et lavables.",
    highlight: "Motifs + Prénom au choix",
    actionText: "Découvrir les cartables brodés",
    actionLink: "/boutique"
  },

  // ⚡ 6. TEXTILES DE MARQUE, URGENCES & LOCAL
  {
    id: "express-vetement-marque",
    category: "express",
    categoryLabel: "Urgences & Marques",
    searchIntentTag: "peut on faire broder doudoune veste de marque carhartt north face",
    question: "Puis-je faire broder une veste ou doudoune de marque de grande valeur (Carhartt, The North Face, Ralph Lauren, Barbour) ?",
    answer: "Oui, Sandrine a l'habitude de manipuler des pièces haut de gamme et des vestes de grande valeur.\n\n• Technique sur doudoune : Nous utilisons des cadres de serrage magnétique spéciaux qui ne pincent ni n'écrasent le tissu plume, et des aiguilles ultra-fines qui ne percent pas les chambres d'isolation thermique en duvet.\n• Vestes Barbour ou toiles cirées : Piquage précis avec renfort stabilisateur pour préserver l'allure noble du textile.",
    highlight: "Cadres magnétiques sans trace de serrage",
    actionText: "Poser une question à Sandrine",
    actionLink: "/contact"
  },
  {
    id: "express-delai-urgence",
    category: "express",
    categoryLabel: "Urgences & Marques",
    searchIntentTag: "broderie personnalisée express 48h cadeau derniere minute",
    question: "Cadeau de dernière minute ou événement ce week-end : proposez-vous une confection express sous 24h à 48h ?",
    answer: "Oui, selon la disponibilité de l'atelier ! Pour toute demande urgente, ne passez pas par un email classique :\n\n• Écrivez ou appelez directement Sandrine sur son WhatsApp professionnel au 06 29 49 22 13.\n• Précisez votre besoin (prénom, article en stock à l'atelier ou vêtement apporté).\n• Si l'article est en stock, une confection prioritaire en 24h à 48h peut être calée dans le planning avec retrait direct à l'atelier de Robertot ou expédition Chronopost express.",
    highlight: "Créneau d'urgence WhatsApp en direct",
    actionText: "Ligne directe WhatsApp",
    actionLink: "https://wa.me/33629492213"
  },
  {
    id: "local-normandie-acces",
    category: "express",
    categoryLabel: "Atelier 76",
    searchIntentTag: "atelier broderie pres de chez moi yvetot rouen le havre dieppe",
    question: "Où faire broder un vêtement en Normandie (Seine-Maritime 76) et comment venir à l'atelier ?",
    answer: "L'atelier By Sandrine Couture est situé dans le pays de Caux à Robertot (76560), idéalement placé au carrefour de la Seine-Maritime :\n\n• À 10 minutes d'Yvetot et de Doudeville\n• À 15 minutes de Cany-Barville et de Saint-Valery-en-Caux\n• À 40 minutes de Rouen, Dieppe et Le Havre\n\nVous pouvez venir déposer et retirer vos vêtements gratuitement sur rendez-vous, ou profiter de nos envois suivis en 48h partout en France via Colissimo et Mondial Relay.",
    highlight: "Proximité Yvetot, Rouen, Le Havre (76)",
    actionText: "Plan d'accès et coordonnées",
    actionLink: "/contact"
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>([
    "restauration-graisse-lavage",
    "btp-softshell-etancheite",
    "naissance-doudou-deja-achete"
  ]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return INTENT_FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryLabel.toLowerCase().includes(q) ||
        faq.searchIntentTag.toLowerCase().includes(q) ||
        faq.highlight.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Schema.org FAQPage for Google PAA Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: INTENT_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n+/g, " ")
      }
    }))
  };

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-32">
      {/* Google Rich Snippets SEO Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "FAQ", url: "https://sandrinecouture.com/faq" },
        ]}
      />

      <Navbar />

      {/* 1. HERO FAQ QUIET LUXURY (STYLE BOUTIQUE / RÉALISATIONS / BLOG) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20 border-b border-stone-200/60 overflow-hidden bg-stone-900 text-white">
        
        {/* Authentic Normandie Coast Atelier Photo with Laptop Google PAA in Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/hero/hero-faq-atelier.webp" 
            alt="Atelier de couture et broderie By Sandrine Couture avec ordinateur ouvert sur les questions fréquentes et vue sur les falaises de Normandie"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_35%] sm:object-[80%_40%] filter brightness-[1.06] contrast-[1.02] saturate-[1.05]"
          />
          {/* Subtle soft gradient scrim: text is super crisp on left while revealing the bright sunlight, sea view and table on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/35 z-[1]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-10 border-b border-white/15 text-[11px] font-mono tracking-widest uppercase text-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">By Sandrine Couture • Atelier Robertot (Normandie)</span>
              <span className="text-stone-400">/</span>
              <span>Questions Fréquentes &amp; PAA Google</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-300">Conseils &amp; Faisabilité Technique</span>
              <span className="text-primary-light font-bold">Réponses 100% Transparentes</span>
            </div>
          </div>

          {/* Dedicated Mobile Showcase */}
          <div className="sm:hidden mb-8 rounded-2xl overflow-hidden border border-white/20 shadow-xl relative aspect-[16/10]">
            <Image
              src="/images/hero/hero-faq-atelier.webp"
              alt="Atelier de couture et broderie By Sandrine Couture"
              fill
              className="object-cover object-center filter brightness-[1.05]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                Atelier Normand • Pays de Caux (76)
              </span>
              <p className="text-xs text-white font-medium">
                Toutes les réponses de l'artisane aux questions que vous tapez sur Google
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/90 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-4 shadow-md border border-white/10 backdrop-blur-md">
                <HelpCircle size={12} className="text-primary" />
                <span>Base de Connaissance &amp; Recherches Google (PAA)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-4 drop-shadow-md">
                Les réponses précises aux <br />
                <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8">
                  vraies questions
                </span>.
              </h1>
            </div>

            <p className="text-stone-200 text-sm sm:text-base max-w-sm leading-relaxed font-normal drop-shadow-sm">
              Restaurateurs, artisans BTP, clubs sportifs ou cadeaux de naissance : découvrez toutes les réponses techniques et concrètes de l'atelier de broderie normand.
            </p>
          </div>

          {/* Integrated Search Bar in Hero Glassmorphism */}
          <div className="max-w-3xl">
            <div className="relative flex items-center p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-lg">
              <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question (ex: lavage 90°, softshell, doudou, logo, urgence, TVA)..."
                className="w-full pl-12 pr-24 py-3.5 rounded-xl bg-transparent text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 outline-hidden font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[11px] font-bold text-stone-600 cursor-pointer transition-colors"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Main FAQ Content with Filters */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Filter Tabs segmented by real customer personas */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {[
            { id: "all", label: `Toutes (${INTENT_FAQS.length})`, icon: Sparkles },
            { id: "restauration", label: "🍽️ Restauration & Cuisine", icon: UtensilsCrossed },
            { id: "btp", label: "🏗️ Artisans & BTP", icon: HardHat },
            { id: "clubs", label: "🏇 Clubs & Équitation", icon: Trophy },
            { id: "beaute", label: "🌿 Spas & Santé", icon: HeartHandshake },
            { id: "naissance", label: "👶 Naissance & Famille", icon: Baby },
            { id: "express", label: "⚡ Marques & Urgences", icon: Zap },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive ? "text-white" : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="faq-active-tab"
                    className="absolute inset-0 bg-stone-950 rounded-xl shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search status */}
        {searchQuery && (
          <div className="mb-6 text-xs text-stone-500 font-mono text-center">
            {filteredFAQs.length} résultat{filteredFAQs.length > 1 ? "s" : ""} trouvé{filteredFAQs.length > 1 ? "s" : ""} pour la recherche "{searchQuery}"
          </div>
        )}

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-stone-50 border border-stone-200">
              <HelpCircle size={40} className="mx-auto text-stone-400 mb-3" />
              <h3 className="text-base font-bold text-stone-900 mb-1">Aucune réponse spécifique trouvée</h3>
              <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
                Posez directement votre question à Sandrine sur WhatsApp, elle vous conseille en direct sur votre matière ou projet.
              </p>
              <a
                href="https://wa.me/33629492213"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
              >
                <MessageCircle size={14} />
                <span>Poser ma question sur WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredFAQs.map((faq, idx) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.03, ease: LUXURY_EASE }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-primary/40 shadow-lg ring-1 ring-primary/10"
                      : "bg-white hover:bg-stone-50/70 border-stone-200/90 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[9px] font-mono uppercase tracking-wider font-bold">
                          {faq.categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                          <CheckCircle2 size={11} /> {faq.highlight}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-black text-stone-900 tracking-tight leading-snug">
                        {faq.question}
                      </h2>
                      <div className="text-[11px] font-mono text-stone-400 italic">
                        🔍 Recherche Google fréquente : « {faq.searchIntentTag} »
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 mt-1 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                          {faq.answer}

                          {faq.actionText && faq.actionLink && (
                            <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                              <Link
                                href={faq.actionLink}
                                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                              >
                                <span>{faq.actionText}</span>
                                <ArrowUpRight size={14} />
                              </Link>
                              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                                Réponse Atelier Normand
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

      </section>

      {/* Reassurance & Direct Contact Banner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-950 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-300 text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Phone size={12} className="text-primary-light" />
            <span>Votre métier ou textile a une spécificité ?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-white leading-tight">
            Envoyez votre vêtement ou logo en photo à Sandrine
          </h2>

          <p className="text-stone-300 text-xs sm:text-base font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Sandrine vous répond en direct sous 24h avec une confirmation de faisabilité technique, des conseils sur les fils et un chiffrage clair sans surprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/33629492213"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase text-xs tracking-wider shadow-xl shadow-green-500/25 flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Discuter avec Sandrine sur WhatsApp</span>
              </Button>
            </a>

            <Link href="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-white/30 bg-white/10 hover:bg-white hover:text-stone-950 text-white font-bold uppercase text-xs tracking-wider backdrop-blur-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Calculer un devis d'atelier</span>
                <ArrowUpRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-stone-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary-light" /> Atelier Robertot (76)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary-light" /> Réponse sous 24h ouvrées
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-primary-light" /> Conseils personnalisés par l'artisane
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
