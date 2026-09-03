"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { Mail, MapPin, MessageCircle, Phone, Star, Building2, User, Instagram, Facebook, Truck, Sparkles, Heart, Award, CheckCircle2, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = React.useState<"entreprise" | "particulier">(
    "entreprise",
  );
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    sector: "",
    phone: "",
    article: "",
    customArticle: "",
    quantity: "1",
    complexity: "text",
    placement: "coeur",
    description: "",
    deadline: "",
    occasion: "",
  });

  const proArticles = [
    "Polos",
    "T-shirts",
    "Sweats / Hoodies",
    "Tabliers",
    "Serviettes",
    "Patchs Velcro",
    "Autre (préciser)",
  ];
  const persoArticles = [
    "Serviette de bain",
    "Peignoir",
    "Doudou / Peluche",
    "Bavoir",
    "Couverture bébé",
    "Protege carnet de santé",
    "Sac / Totebag",
    "Autre (préciser)",
  ];
  const placements = [
    { id: "coeur", label: "Cœur (Gauche)" },
    { id: "dos", label: "Grand Dos" },
    { id: "manche", label: "Manche" },
    { id: "nuque", label: "Nuque" },
    { id: "libre", label: "Emplacement libre" },
  ];

  React.useEffect(() => {
    const type = searchParams.get("type");
    if (type === "particulier") setFormType("particulier");
    else if (type === "entreprise") setFormType("entreprise");
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isPro = formType === "entreprise";
    const finalArticle =
      formData.article === "Autre (préciser)"
        ? formData.customArticle
        : formData.article;

    const complexityLabels: Record<string, string> = {
      text: "Texte uniquement",
      simple: "Logo Simple (1-3 couleurs)",
      complex: "Logo Complexe / Photo",
    };

    const currentComplexity =
      complexityLabels[formData.complexity] || "Texte uniquement";

    const message = `✨ *NOUVELLE DEMANDE DE DEVIS* ✨

👤 *CLIENT*
- Type : ${isPro ? "🏢 PRO / ENTREPRISE" : "👋 PARTICULIER"}
- Nom : ${formData.name}${isPro ? `\n- Société : ${formData.company}\n- Secteur : ${formData.sector}` : ""}
- Tél : ${formData.phone}${!isPro && formData.occasion ? `\n- Occasion : ${formData.occasion}` : ""}

🧵 *PROJET*
- Article : ${finalArticle}
- Quantité : ${formData.quantity}
- Type : ${currentComplexity}
- Placement : ${placements.find((p) => p.id === formData.placement)?.label}

📝 *DÉTAILS*
- Description : ${formData.description || "Non précisé"}
- Délai : ${formData.deadline || "Dès que possible"}

---
_Envoyé depuis le site Sandrine Couture_`;

    const whatsappURL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative min-h-screen font-sans bg-white">
      <Navbar />

      {/* Luxury Artisan Hero & Portrait Section — Sandrine à l'Honneur */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#faf8f5] to-white border-b border-black/[0.06]">
        
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-500/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          
          {/* Top Pill */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white text-[9px] font-mono tracking-[0.25em] uppercase shadow-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span>Votre Artisane Brodeuse en Normandie</span>
              <span className="text-amber-400">★ ★ ★ ★ ★</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Sandrine Portrait Card — Framed Luxury Lookbook */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[3rem] p-3 bg-white border border-pink-500/20 shadow-[0_25px_60px_-15px_rgba(244,63,94,0.18)] group">
                
                {/* Image Container with golden ring */}
                <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-stone-950">
                  <img
                    src="/images/realisations/sandrine-couture.webp"
                    alt="Sandrine, fondatrice et artisane de By Sandrine Couture"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                  {/* Badges Over Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-white border border-white/20 text-[9px] font-mono uppercase tracking-widest font-bold">
                      Atelier Robertot (76)
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <p className="text-[10px] font-mono text-pink-300 uppercase tracking-widest font-bold mb-1">
                      Artisane Créatrice
                    </p>
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1 text-white">
                      Sandrine
                    </h3>
                    <p className="text-[11px] text-stone-200 font-medium leading-relaxed opacity-90">
                      « Chaque projet est unique, cousu avec amour et précision pour vos plus beaux moments. »
                    </p>
                  </div>
                </div>

                {/* Floating Stamp / Certificat Fait Main */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3.5 rounded-2xl shadow-xl shadow-pink-500/30 flex items-center gap-2.5 border-2 border-white pointer-events-none">
                  <Heart className="w-4 h-4 fill-white text-white animate-bounce" />
                  <span className="text-[9px] font-black uppercase tracking-widest">100% Fait Main</span>
                </div>
              </div>
            </div>

            {/* Right: Personal Greeting & Trust Highlights */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.02] text-stone-900 uppercase mb-5">
                Parlons de votre projet <br />
                <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8">
                  avec Sandrine
                </span>.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed mb-8 max-w-xl">
                Que vous soyez un particulier en quête d'un <b>cadeau de naissance brodé inoubliable</b> ou une <b>entreprise souhaitant habiller ses équipes</b>, Sandrine vous conseille personnellement pour choisir les bons fils, textiles et typographies.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-primary flex items-center justify-center mb-2.5">
                    <Clock size={16} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wide text-stone-900 mb-0.5">Écoute & Réactivité</h4>
                  <p className="text-[10px] text-stone-500 font-medium">Réponse sous 24h et conseils adaptés à votre budget.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-primary flex items-center justify-center mb-2.5">
                    <Award size={16} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wide text-stone-900 mb-0.5">Broderie d'Art</h4>
                  <p className="text-[10px] text-stone-500 font-medium">Fils certifiés Oeko-Tex et haute tenue au lavage 60°C.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-primary flex items-center justify-center mb-2.5">
                    <Truck size={16} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wide text-stone-900 mb-0.5">Expédition Rapide</h4>
                  <p className="text-[10px] text-stone-500 font-medium">Mondial Relay, Colissimo ou retrait direct à l'atelier.</p>
                </div>
              </div>

              {/* Quick direct contact action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black uppercase tracking-widest text-[10px] shadow-lg shadow-green-500/20 flex items-center gap-2 no-underline transition-transform hover:scale-105"
                >
                  <MessageCircle size={15} />
                  <span>Discuter en direct sur WhatsApp</span>
                </a>

                <a
                  href="tel:0629492213"
                  className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-black uppercase tracking-widest text-[10px] shadow-md flex items-center gap-2 no-underline transition-colors"
                >
                  <Phone size={14} />
                  <span>06 29 49 22 13</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tighter italic uppercase mb-6 sm:mb-8">
                Nos coordonnées
              </h2>
            </div>

            {/* Phone */}
            <a
              href="tel:+33629492213"
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-primary/10 transition-colors group no-underline"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone
                  size={20}
                  className="text-primary group-hover:text-white sm:w-6 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold italic uppercase text-xs sm:text-sm tracking-tight mb-1">
                  Téléphone
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  06 29 49 22 13
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-700 font-bold uppercase tracking-widest mt-1 sm:mt-2">
                  Lun-Ven 9h-18h
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:bysandrinecouture@gmail.com"
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-primary/10 transition-colors group no-underline"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail
                  size={20}
                  className="text-primary group-hover:text-white sm:w-6 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold italic uppercase text-xs sm:text-sm tracking-tight mb-1">
                  Email
                </p>
                <p className="text-gray-700 font-medium text-sm break-all">
                  bysandrinecouture@gmail.com
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-700 font-bold uppercase tracking-widest mt-1 sm:mt-2">
                  Réponse sous 24h
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Robertot+76560"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-primary/10 transition-colors group no-underline"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin
                  size={20}
                  className="text-primary group-hover:text-white sm:w-6 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold italic uppercase text-xs sm:text-sm tracking-tight mb-1">
                  Localisation
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  Robertot, 76560
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-700 font-bold uppercase tracking-widest mt-1 sm:mt-2">
                  Normandie, France
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/33629492213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-primary text-white rounded-xl sm:rounded-2xl hover:shadow-lg transition-all group no-underline"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-bold italic uppercase text-xs sm:text-sm tracking-tight mb-1">
                  WhatsApp
                </p>
                <p className="font-medium text-sm">Messagerie instantanée</p>
                <p className="text-[9px] sm:text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1 sm:mt-2">
                  Réponse rapide
                </p>
              </div>
            </a>

            {/* Google Review */}
            <a
              href={SITE_CONFIG.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-yellow-50 transition-colors group no-underline border border-black/5"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#1a73e8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-all">
                <Star
                  size={20}
                  className="text-[#1a73e8] group-hover:text-white sm:w-6 sm:h-6"
                />
              </div>
              <div>
                <p className="font-bold italic uppercase text-xs sm:text-sm tracking-tight mb-1">
                  Avis Google
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  Laissez-nous un avis
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-700 font-bold uppercase tracking-widest mt-1 sm:mt-2">
                  Soutenez notre atelier artisanal
                </p>
              </div>
            </a>

            {/* Réseaux Sociaux & Mondial Relay */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-gradient-to-tr from-[#f09433]/10 via-[#e6683c]/10 to-[#bc1888]/10 rounded-xl border border-pink-500/20 hover:scale-105 transition-all group no-underline"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="font-bold italic uppercase text-[10px] tracking-tight mb-0.5 text-black">Instagram</p>
                  <p className="text-[9px] text-gray-700 font-semibold">@bysandrinecouture</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-[#1877F2]/10 rounded-xl border border-[#1877F2]/20 hover:scale-105 transition-all group no-underline"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Facebook size={18} />
                </div>
                <div>
                  <p className="font-bold italic uppercase text-[10px] tracking-tight mb-0.5 text-black">Facebook</p>
                  <p className="text-[9px] text-gray-700 font-semibold">By Sandrine Couture</p>
                </div>
              </a>
            </div>

            {/* Badge Mondial Relay */}
            <div className="p-4 bg-pink-50/60 rounded-2xl border border-pink-200/60 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <Truck size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-black">Livraison Mondial Relay & Colissimo</p>
                <p className="text-[9px] text-gray-700 font-medium">Expédition express en point relais ou domicile en France métropolitaine.</p>
              </div>
            </div>
          </div>

          {/* Devis Form */}
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter italic uppercase mb-4 sm:mb-6">
              Demander un devis
            </h2>

            {/* Type Selection */}
            <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
              {(["entreprise", "particulier"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFormType(type)}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold italic uppercase text-[9px] sm:text-[10px] tracking-widest transition-all ${
                    formType === type
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white border border-black/10 text-gray-700 hover:border-primary"
                  }`}
                >
                  {type === "entreprise" ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Entreprise
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      Particulier
                    </span>
                  )}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-1 sm:mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                  placeholder="Votre nom"
                />
              </div>

              {formType === "entreprise" && (
                <>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                      Société
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                      Secteur
                    </label>
                    <input
                      type="text"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                      placeholder="Ex: Restaurant, BTP, etc."
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="article"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2"
                >
                  Article
                </label>
                <select
                  id="article"
                  name="article"
                  value={formData.article}
                  onChange={handleChange}
                  required
                  aria-label="Sélectionnez un article"
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  <option value="">Sélectionnez un article</option>
                  {(formType === "entreprise"
                    ? proArticles
                    : persoArticles
                  ).map((art) => (
                    <option key={art} value={art}>
                      {art}
                    </option>
                  ))}
                </select>
              </div>

              {formData.article === "Autre (préciser)" && (
                <div>
                  <label
                    htmlFor="customArticle"
                    className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2"
                  >
                    Précisez l'article
                  </label>
                  <input
                    id="customArticle"
                    type="text"
                    name="customArticle"
                    value={formData.customArticle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                    placeholder="Précisez l'article"
                    aria-label="Précisez l'article"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2"
                >
                  Quantité
                </label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  placeholder="Quantité"
                  aria-label="Quantité"
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="complexity"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2"
                >
                  Complexité
                </label>
                <select
                  id="complexity"
                  name="complexity"
                  value={formData.complexity}
                  onChange={handleChange}
                  aria-label="Sélectionnez la complexité"
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  <option value="text">Texte uniquement</option>
                  <option value="simple">Logo Simple (1-3 couleurs)</option>
                  <option value="complex">Logo Complexe / Photo</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="placement"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2"
                >
                  Placement
                </label>
                <select
                  id="placement"
                  name="placement"
                  value={formData.placement}
                  onChange={handleChange}
                  aria-label="Sélectionnez le placement"
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  {placements.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm resize-none"
                  placeholder="Détails de votre projet..."
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Délai
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                  placeholder="Ex: Dès que possible, 2 semaines, etc."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 rounded-lg uppercase text-[9px] font-black tracking-widest"
              >
                Envoyer via WhatsApp
              </Button>

              <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest text-center">
                Votre devis sera envoyé directement à Sandrine
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
