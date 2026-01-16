import React, { useState, useEffect } from 'react';
import { Building2, User, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DevisForm() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<'entreprise' | 'particulier'>('entreprise');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    sector: '',
    phone: '',
    article: '',
    customArticle: '',
    quantity: '1',
    complexity: 'text',
    placement: 'coeur',
    description: '',
    deadline: '',
    occasion: ''
  });

  const proArticles = ["Polos", "T-shirts", "Sweats / Hoodies", "Tabliers", "Casquettes", "Bonnets", "Patchs Velcro", "Autre (préciser)"];
  const persoArticles = ["Serviette de bain", "Peignoir", "Doudou / Peluche", "Bavoir", "Couverture bébé", "Protege carnet de santé", "Sac / Totebag", "Autre (préciser)"];
  const placements = [
    { id: 'coeur', label: 'Cœur (Gauche)' },
    { id: 'dos', label: 'Grand Dos' },
    { id: 'manche', label: 'Manche' },
    { id: 'nuque', label: 'Nuque' },
    { id: 'libre', label: 'Emplacement libre' }
  ];

  useEffect(() => {
    const type = searchParams.get('type');
    const secteur = searchParams.get('secteur');
    const produit = searchParams.get('produit');

    if (type === 'particulier') setFormType('particulier');
    else if (type === 'entreprise') setFormType('entreprise');

    if (secteur) setFormData(prev => ({ ...prev, sector: secteur }));
    if (produit) setFormData(prev => ({ ...prev, article: produit }));
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isPro = formType === 'entreprise';
    const finalArticle = formData.article === 'Autre (préciser)' ? formData.customArticle : formData.article;

    const complexityLabels: Record<string, string> = {
      text: "Texte uniquement",
      simple: "Logo Simple (1-3 couleurs)",
      complex: "Logo Complexe / Photo"
    };

    const currentComplexity = complexityLabels[formData.complexity] || "Texte uniquement";

    const message = `✨ *NOUVELLE DEMANDE DE DEVIS* ✨

👤 *CLIENT*
- Type : ${isPro ? '🏢 PRO / ENTREPRISE' : '👋 PARTICULIER'}
- Nom : ${formData.name}${isPro ? `\n- Société : ${formData.company}\n- Secteur : ${formData.sector}` : ''}
- Tél : ${formData.phone}${!isPro && formData.occasion ? `\n- Occasion : ${formData.occasion}` : ''}

🧵 *PROJET*
- Article : ${finalArticle}
- Quantité : ${formData.quantity}
- Type : ${currentComplexity}
- Placement : ${placements.find(p => p.id === formData.placement)?.label}

📝 *DÉTAILS*
- Description : ${formData.description || 'Non précisé'}
- Délai : ${formData.deadline || 'Dès que possible'}

---
_Envoyé depuis le site Sandrine Couture_`;

    const whatsappURL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 no-underline font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={14} /> Retour à l'accueil
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">Votre Projet <span className="text-primary not-italic">sur-mesure</span></h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold italic">Remplissez ces informations pour un devis précis sous 24h.</p>
        </div>

        <div className="flex gap-4 mb-12">
          {(['entreprise', 'particulier'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFormType(type)}
              className={`flex-1 py-6 px-4 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 bg-white cursor-pointer ${formType === type ? 'border-primary bg-primary/5 shadow-xl scale-105 z-10' : 'border-black/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
            >
              {type === 'entreprise' ? <Building2 size={24} className="text-primary" /> : <User size={24} className="text-primary" />}
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">{type === 'entreprise' ? 'Professionnel' : 'Particulier'}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 md:p-16 rounded-[3rem] space-y-10">
          {/* SECTION 1: CONTACT */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs not-italic">1</span>
              Vos coordonnées
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Nom complet *</label>
                <input
                  required
                  className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                  placeholder="Ex: Jean Dupont"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Téléphone *</label>
                <input
                  required
                  type="tel"
                  className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                  placeholder="Ex: 06 00 00 00 00"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              {formType === 'entreprise' ? (
                <>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Nom de la société *</label>
                    <input
                      required
                      className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                      placeholder="Ex: Restaurant Le Gourmet"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Secteur / Métier</label>
                    <input
                      className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                      placeholder="Ex: Restauration, BTP..."
                      value={formData.sector}
                      onChange={e => setFormData({ ...formData, sector: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Occasion (facultatif)</label>
                  <input
                    className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                    placeholder="Ex: Naissance, Anniversaire, Mariage..."
                    value={formData.occasion}
                    onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>

          <hr className="border-black/5" />

          {/* SECTION 2: ARTICLES */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs not-italic">2</span>
              L&apos;article à broder
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Type d&apos;article *</label>
                <select
                  required
                  className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold appearance-none"
                  value={formData.article}
                  onChange={e => setFormData({ ...formData, article: e.target.value })}
                >
                  <option value="">-- Sélectionner --</option>
                  {(formType === 'entreprise' ? proArticles : persoArticles).map(art => (
                    <option key={art} value={art}>{art}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Quantité souhaitée *</label>
                <input
                  required
                  type="number"
                  min="1"
                  className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                  value={formData.quantity}
                  onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              {formData.article === 'Autre (préciser)' && (
                <div className="md:col-span-2 animate-in fade-in duration-300">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Précisez l&apos;article</label>
                  <input
                    required
                    className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                    placeholder="Ex: Tapis de selle, Casquette spécifique..."
                    value={formData.customArticle}
                    onChange={e => setFormData({ ...formData, customArticle: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>

          <hr className="border-black/5" />

          {/* SECTION 3: COMPLEXITÉ & PLACEMENT */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs not-italic">3</span>
              Rendu souhaité
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Complexité de la broderie</label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'text', label: 'Texte uniquement', desc: 'Prénom, slogan, initiales' },
                    { id: 'simple', label: 'Logo Simple', desc: '1 à 3 couleurs, formes nettes' },
                    { id: 'complex', label: 'Logo Complexe', desc: 'Beaucoup de couleurs ou détails' }
                  ].map(opt => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${formData.complexity === opt.id ? 'border-primary bg-primary/5' : 'border-black/5 hover:bg-black/5'}`}
                    >
                      <input
                        type="radio"
                        name="complexity"
                        className="hidden"
                        checked={formData.complexity === opt.id}
                        onChange={() => setFormData({ ...formData, complexity: opt.id })}
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.complexity === opt.id ? 'border-primary' : 'border-gray-300'}`}>
                        {formData.complexity === opt.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <p className="font-bold text-xs uppercase tracking-tight">{opt.label}</p>
                        <p className="text-[9px] opacity-60 uppercase">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Emplacement idéal</label>
                <div className="grid grid-cols-2 gap-2">
                  {placements.map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, placement: p.id })}
                      className={`p-3 rounded-xl border transition-all text-[10px] font-black uppercase tracking-tighter ${formData.placement === p.id ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-black/5 hover:border-black/20'}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-black/5" />

          {/* SECTION 4: DÉTAILS FINAUX */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs not-italic">4</span>
              Détails & Délai
            </h3>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Description de votre projet</label>
              <textarea
                rows={4}
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all resize-none font-medium text-sm"
                placeholder="Précisez ici les couleurs, la police d'écriture, les dimensions souhaitées..."
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Délai souhaité</label>
              <input
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all font-bold"
                placeholder="Ex: Avant le 15 juin pour un anniversaire"
                value={formData.deadline}
                onChange={e => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-6">
            <Button variant="whatsapp" className="w-full h-20 text-xs sm:text-sm uppercase tracking-[0.2em] font-black shadow-2xl shadow-green-500/20 rounded-full" type="submit">
              <MessageCircle className="mr-3 w-6 h-6" /> Envoyer ma demande WhatsApp
            </Button>
            <p className="text-center text-[10px] uppercase font-black tracking-[0.3em] opacity-40 mt-6 flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Sandrine traite votre demande personnellement sous 24h
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function DevisPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center font-bold">Chargement...</div>}>
      <DevisForm />
    </Suspense>
  );
}