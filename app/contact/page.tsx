"use client";

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/site-config';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = React.useState<'entreprise' | 'particulier'>('entreprise');
  const [formData, setFormData] = React.useState({
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

  const proArticles = ["Polos", "T-shirts", "Sweats / Hoodies", "Tabliers", "Patchs Velcro", "Autre (préciser)"];
  const persoArticles = ["Serviette de bain", "Peignoir", "Doudou / Peluche", "Bavoir", "Couverture bébé", "Protege carnet de santé", "Sac / Totebag", "Autre (préciser)"];
  const placements = [
    { id: 'coeur', label: 'Cœur (Gauche)' },
    { id: 'dos', label: 'Grand Dos' },
    { id: 'manche', label: 'Manche' },
    { id: 'nuque', label: 'Nuque' },
    { id: 'libre', label: 'Emplacement libre' }
  ];

  React.useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'particulier') setFormType('particulier');
    else if (type === 'entreprise') setFormType('entreprise');
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
    <div className="relative min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
            Contactez <br />
            <span className="text-primary not-italic">Sandrine</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            Une question ? Un projet ? Nous sommes là pour vous aider. Contactez-nous par le moyen qui vous convient le mieux.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-8">
                Nos coordonnées
              </h2>
            </div>

            {/* Phone */}
            <a href="tel:+33629492213" className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-primary/10 transition-colors group no-underline">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={24} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold italic uppercase text-sm tracking-tight mb-1">Téléphone</p>
                <p className="text-gray-600 font-medium">06 29 49 22 13</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">Lun-Ven 9h-18h</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:bysandrinecouture@gmail.com" className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-primary/10 transition-colors group no-underline">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={24} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold italic uppercase text-sm tracking-tight mb-1">Email</p>
                <p className="text-gray-600 font-medium">bysandrinecouture@gmail.com</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">Réponse sous 24h</p>
              </div>
            </a>

            {/* Address */}
            <a href="https://maps.google.com/?q=Robertot+76560" target="_blank" rel="noopener noreferrer" className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-primary/10 transition-colors group no-underline">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={24} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <p className="font-bold italic uppercase text-sm tracking-tight mb-1">Localisation</p>
                <p className="text-gray-600 font-medium">Robertot, 76560</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">Normandie, France</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/33629492213" target="_blank" rel="noopener noreferrer" className="flex gap-6 p-6 bg-primary text-white rounded-2xl hover:shadow-lg transition-all group no-underline">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="font-bold italic uppercase text-sm tracking-tight mb-1">WhatsApp</p>
                <p className="font-medium">Messagerie instantanée</p>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-2">Réponse rapide</p>
              </div>
            </a>
          </div>

          {/* Devis Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-black tracking-tighter italic uppercase mb-6">
              Demander un devis
            </h2>
            
            {/* Type Selection */}
            <div className="flex gap-4 mb-8">
              {(['entreprise', 'particulier'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFormType(type)}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold italic uppercase text-[10px] tracking-widest transition-all ${
                    formType === type
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white border border-black/10 text-gray-700 hover:border-primary'
                  }`}
                >
                  {type === 'entreprise' ? '🏢 Entreprise' : '👋 Particulier'}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
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

              {formType === 'entreprise' && (
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
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Article
                </label>
                <select
                  name="article"
                  value={formData.article}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  <option value="">Sélectionnez un article</option>
                  {(formType === 'entreprise' ? proArticles : persoArticles).map((art) => (
                    <option key={art} value={art}>{art}</option>
                  ))}
                </select>
              </div>

              {formData.article === 'Autre (préciser)' && (
                <div>
                  <input
                    type="text"
                    name="customArticle"
                    value={formData.customArticle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                    placeholder="Précisez l'article"
                  />
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Quantité
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Complexité
                </label>
                <select
                  name="complexity"
                  value={formData.complexity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  <option value="text">Texte uniquement</option>
                  <option value="simple">Logo Simple (1-3 couleurs)</option>
                  <option value="complex">Logo Complexe / Photo</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Placement
                </label>
                <select
                  name="placement"
                  value={formData.placement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium text-sm"
                >
                  {placements.map((p) => (
                    <option key={p.id} value={p.id}>{p.label}</option>
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

              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center">
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
