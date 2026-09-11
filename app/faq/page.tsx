"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
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
  Scissors
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LUXURY_EASE, MotionReveal } from "@/components/effects/motion-reveal";
import { SITE_CONFIG } from "@/lib/site-config";

interface FAQItemData {
  id: string;
  category: "all" | "tarifs" | "entreprises" | "particuliers" | "technique" | "local";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
  actionText?: string;
  actionLink?: string;
}

const PAA_FAQS: FAQItemData[] = [
  {
    id: "prix-broderie",
    category: "tarifs",
    categoryLabel: "Tarifs & Devis",
    question: "Quel est le prix moyen d'une broderie personnalisée ?",
    answer: "Le tarif d'une broderie dépend du support et de la densité du motif (nombre de points de piquage). Chez By Sandrine Couture, la transparence est totale :\n\n• En boutique : des créations cousues main et brodées prêtes à personnaliser dès 18,00 € (bavoirs éponge bambou), 25,00 € (trousses, gilets réversibles), 30,00 € (tapis nomades, draps de bain) et 49,00 € (gigoteuses).\n• Pour les entreprises & clubs : tarifs dégressifs selon la quantité (de 1 à 500+ pièces) et frais de programmation de matrice offerts dès certaines séries.\n\nVous recevez un devis clair et sans surprise sous 24h ouvrées.",
    highlight: "Devis 100% gratuit en 24h",
    actionText: "Calculer mon devis pro",
    actionLink: "/devis"
  },
  {
    id: "propres-vetements",
    category: "tarifs",
    categoryLabel: "Fourniture Textile",
    question: "Puis-je fournir mes propres vêtements à faire broder, ou dois-je les acheter chez vous ?",
    answer: "Les deux options sont tout à fait possibles !\n\n1. Vous apportez vos propres textiles : vous pouvez me déposer ou m'expédier vos vêtements personnels, vestes d'entreprise, polos, serviettes ou trousseaux de naissance déjà achetés. J'étudie la matière et réalise le piquage sur mesure sur vos pièces.\n2. Vous commandez directement les textiles de l'atelier : je propose également un catalogue professionnel de vêtements de travail et textiles premium certifiés Oeko-Tex prêts pour la broderie.",
    highlight: "Apport de vêtements accepté sans surcoût",
    actionText: "Poser une question sur un vêtement",
    actionLink: "/contact"
  },
  {
    id: "broderie-vs-flocage",
    category: "technique",
    categoryLabel: "Qualité & Technique",
    question: "Quelle est la différence entre broderie et flocage ? Lequel dure le plus longtemps ?",
    answer: "La broderie est la reine incontestée de la personnalisation textile :\n\n• Durabilité : Le flocage (vinyle thermocollé) finit inévitablement par craqueler, s'effriter et se décoller après 20 à 30 lavages. La broderie, elle, est tissée au cœur de la fibre : elle ne se décolle jamais et résiste à des centaines de lavages à 60°C.\n• Esthétique & Prestige : Le relief 3D du fil et sa brillance satinée apportent une valeur perçue et une élégance incomparable à vos logos ou prénoms.\n• Résistance pro : Conforme aux contraintes du BTP, de la restauration et du sport intensif.",
    highlight: "Tenue garantie toute la vie du vêtement",
    actionText: "Découvrir notre savoir-faire",
    actionLink: "/realisations"
  },
  {
    id: "formats-logo",
    category: "entreprises",
    categoryLabel: "Entreprises & Logos",
    question: "Quel fichier devez-vous fournir pour faire broder un logo d'entreprise ou de club ?",
    answer: "Pour numériser fidèlement votre emblème en matrice de piquage industrielle, nous acceptons :\n\n• Formats vectoriels recommandés : .AI, .EPS, .SVG ou .PDF vectorisé (pour une netteté millimétrique immédiate).\n• Formats image haute définition : .PNG ou .JPEG de bonne résolution.\n\nSi vous ne disposez que d'une image simple ou d'un croquis, je me charge de le vectoriser et d'adapter chaque densité de fil avant de vous envoyer une simulation visuelle complète.",
    highlight: "Numérisation & BAT inclus",
    actionText: "Envoyer mon logo pour étude",
    actionLink: "/devis"
  },
  {
    id: "delais-realisation",
    category: "tarifs",
    categoryLabel: "Délais & Urgences",
    question: "Combien de temps prend la réalisation d'une commande ? Proposez-vous un traitement express ?",
    answer: "• Délais standards : 5 à 10 jours ouvrés après validation finale de la maquette ou de la commande.\n• Commandes urgentes (naissance imminente, anniversaire, événement d'entreprise dans quelques jours) : contactez-moi directement sur WhatsApp au 06 29 49 22 13. Selon le planning de l'atelier, une confection prioritaire en 48-72h peut être arrangée avec le plus grand soin.",
    highlight: "Option Express possible sur WhatsApp",
    actionText: "Contacter sur WhatsApp",
    actionLink: "https://wa.me/33629492213"
  },
  {
    id: "matieres-brodables",
    category: "technique",
    categoryLabel: "Tissus & Matières",
    question: "Peut-on broder sur tous types de tissus (velours, éponge, polaire, cuir) ?",
    answer: "Grâce à notre parc de machines professionnelles multi-aiguilles et à une sélection pointue d'entoilages solubles et stabilisateurs, nous brodons sur :\n\n• Coton, lin, gaze de coton et fibres de bambou naturelles\n• Éponge de bain épaisse (550g/m² peignée) et peignoirs\n• Polaires, sweats molletonnés et vestes softshell d'entreprise\n• Suédine, velours côtelé, canevas épais et casquettes\n\nSeules les matières translucides extrêmement fragiles (soie ultra-fine) ou le cuir d'armure rigide ne peuvent pas être brodés.",
    highlight: "Multi-supports testé en atelier",
    actionText: "Voir les créations atelier",
    actionLink: "/boutique"
  },
  {
    id: "lavage-entretien",
    category: "technique",
    categoryLabel: "Entretien & Lavage",
    question: "Comment entretenir et laver un vêtement ou linge brodé sans l'abîmer ?",
    answer: "Nos broderies sont réalisées avec les fils allemands certifiés Madeira Polyneon reconnus pour leur robustesse extrême :\n\n• Lavage : En machine jusqu'à 60°C (et même résistant aux agents blanchissants doux ou au chlore dilué).\n• Séchage : Sèche-linge en mode délicat autorisé, ou séchage à l'air libre pour préserver la douceur de la fibre textile.\n• Repassage : De préférence sur l'envers ou en posant un tissu fin protecteur pour garder tout le gonflant satiné des points de broderie.",
    highlight: "Lavable à 60°C sans décoloration"
  },
  {
    id: "validation-bat",
    category: "entreprises",
    categoryLabel: "Garantie & BAT",
    question: "Comment se passe la validation avant le lancement officiel de la broderie ?",
    answer: "Zéro risque et zéro mauvaise surprise ! Voici la méthode d'atelier :\n\n1. Simulation visuelle (BAT numérique) : Vous recevez par email ou WhatsApp la maquette fidèle indiquant l'emplacement exact en centimètres, la palette des nuances de fils et la taille du motif.\n2. Échantillon réel pour les séries : Pour les commandes d'entreprises ou de clubs, une broderie test peut être réalisée sur tissu pour juger du relief réel.\n3. Lancement machine : Rien n'est brodé sans votre accord explicite écrit.",
    highlight: "100% de sérénité avant lancement"
  },
  {
    id: "normandie-atelier",
    category: "local",
    categoryLabel: "Atelier & Normandie",
    question: "Où se situe l'atelier en Normandie et peut-on venir retirer sa commande sur place ?",
    answer: "L'atelier By Sandrine Couture est situé au cœur de la Seine-Maritime (76560) à Robertot, à proximité immédiate d'Yvetot, Doudeville, Cany-Barville et Saint-Valery-en-Caux, à 40 min de Rouen et du Havre.\n\n• Retrait à l'atelier : Vous pouvez venir récupérer votre commande en main propre gratuitement sur rendez-vous.\n• Marchés artisanaux : Retrouvez régulièrement Sandrine sur les marchés locaux de Normandie.\n• Envoi postal : Expédition sécurisée partout en France sous 48h (Colissimo suivi à domicile ou Mondial Relay en point de retrait).",
    highlight: "Atelier Robertot (76) & Envoi France",
    actionText: "Voir l'accès et les coordonnées",
    actionLink: "/contact"
  },
  {
    id: "bebe-oeko-tex",
    category: "particuliers",
    categoryLabel: "Cadeaux de Naissance",
    question: "Les broderies et matières utilisées sont-elles sans danger pour la peau des bébés ?",
    answer: "Oui, c'est un engagement absolu de Sandrine. Toutes les confections pour tout-petits respectent un cahier des charges rigoureux :\n\n• Tissus certifiés Oeko-Tex Standard 100 garantis sans substances chimiques nocives pour la peau.\n• Éponge de bambou ultra-absorbante et hypoallergénique.\n• Renfort intérieur doux thermo-collé sur l'envers des broderies de layette pour éviter tout frottement ou irritation sur le torse de bébé.",
    highlight: "Certification Oeko-Tex & Anti-irritation",
    actionText: "Voir le rayon Naissance",
    actionLink: "/boutique"
  },
  {
    id: "retouches-couture",
    category: "local",
    categoryLabel: "Couture & Retouches",
    question: "Proposez-vous des retouches et travaux de couture traditionnels en plus de la broderie ?",
    answer: "Absolument ! En tant que couturière de métier, je réalise au sein de mon atelier normand vos travaux de retouches et de réparations soignées :\n\n• Ourlets de pantalons, jupes et rideaux\n• Changement de fermetures éclair (blousons, manteaux, pantalons)\n• Réajustements de vêtements et reprises de coutures\n• Confection sur-mesure d'accessoires de maison\n\nN'hésitez pas à me contacter pour m'apporter vos pièces à l'atelier.",
    highlight: "Savoir-faire couturière expérimentée",
    actionText: "Prendre contact pour une retouche",
    actionLink: "/contact"
  },
  {
    id: "minimum-commande",
    category: "entreprises",
    categoryLabel: "Quantités & Minimum",
    question: "Y a-t-il un nombre minimum de pièces imposé pour commander ?",
    answer: "Non, aucun minimum n'est imposé !\n\n• Particuliers : Je réalise vos cadeaux uniques à l'unité (un seul doudou, un gilet, un drap de bain, une trousse brodée au prénom).\n• Professionnels, clubs & comités : Vous pouvez commander 5 polos pour vos salariés ou 200 sweats pour votre club. Les tarifs s'adaptent dégressivement au volume.",
    highlight: "De 1 pièce unique à 500+ exemplaires",
    actionText: "Faire une demande de devis",
    actionLink: "/devis"
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>(["prix-broderie", "propres-vetements"]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return PAA_FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // JSON-LD Schema.org FAQPage for Google PAA rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PAA_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n+/g, " ")
      }
    }))
  };

  return (
    <div className="relative min-h-screen font-sans bg-white selection:bg-primary selection:text-white">
      {/* Google Rich Snippets SEO Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-stone-200/70 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionReveal direction="up" distance={20} duration={0.6}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs text-[10px] font-black uppercase tracking-widest text-stone-800 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Questions Fréquentes • Réponses d'Atelier</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] uppercase text-stone-950 leading-[1.05] mb-5">
              Tout ce que vous cherchez sur <br />
              <span className="font-serif italic font-normal text-primary normal-case">la broderie artisanale</span>.
            </h1>

            <p className="text-sm sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Tarifs, apport de vos propres vêtements, tenue des fils, logos d'entreprise et retrait à l'atelier normand : retrouvez toutes les réponses claires et détaillées.
            </p>
          </MotionReveal>

          {/* Quick Search Bar */}
          <MotionReveal direction="up" distance={20} delay={100} duration={0.6} className="max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question (ex: prix, logo, délai, lavage)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-stone-200 shadow-md focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-bold text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  Effacer
                </button>
              )}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Main FAQ Content with Filters */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {[
            { id: "all", label: `Toutes les questions (${PAA_FAQS.length})` },
            { id: "tarifs", label: "Tarifs & Délais" },
            { id: "entreprises", label: "Entreprises & Clubs" },
            { id: "particuliers", label: "Naissance & Famille" },
            { id: "technique", label: "Technique & Entretien" },
            { id: "local", label: "Atelier 76 & Retouches" },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
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
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter if search active */}
        {searchQuery && (
          <div className="mb-6 text-xs text-stone-500 font-mono text-center">
            {filteredFAQs.length} résultat{filteredFAQs.length > 1 ? "s" : ""} trouvé{filteredFAQs.length > 1 ? "s" : ""} pour "{searchQuery}"
          </div>
        )}

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-stone-50 border border-stone-200">
              <HelpCircle size={40} className="mx-auto text-stone-400 mb-3" />
              <h3 className="text-base font-bold text-stone-900 mb-1">Aucune réponse trouvée</h3>
              <p className="text-xs text-stone-500 mb-4 max-w-sm mx-auto">
                Posez directement votre question à Sandrine via WhatsApp, elle vous répondra personnellement.
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
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: LUXURY_EASE }}
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
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[9px] font-mono uppercase tracking-wider font-bold">
                          {faq.categoryLabel}
                        </span>
                        {faq.highlight && (
                          <span className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                            <CheckCircle2 size={11} /> {faq.highlight}
                          </span>
                        )}
                      </div>
                      <h2 className="text-base sm:text-lg font-black text-stone-900 tracking-tight leading-snug">
                        {faq.question}
                      </h2>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
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
                                Réponse Atelier
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
            <span>Un doute ou un projet spécifique ?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-white leading-tight">
            Vous avez une question qui n'est pas listée ?
          </h2>

          <p className="text-stone-300 text-xs sm:text-base font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Sandrine vous répond directement et vous conseille en personne sur la faisabilité technique de votre projet, les délais et les choix de fils.
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
                <span>Écrire à Sandrine sur WhatsApp</span>
              </Button>
            </a>

            <Link href="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-white/30 bg-white/10 hover:bg-white hover:text-stone-950 text-white font-bold uppercase text-xs tracking-wider backdrop-blur-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Demander un devis atelier</span>
                <ArrowUpRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-stone-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary-light" /> Atelier à Robertot (76)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary-light" /> Réponse sous 24h
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-primary-light" /> Conseils personnalisés
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
