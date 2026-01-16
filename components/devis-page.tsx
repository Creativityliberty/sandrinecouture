import React, { useState, useEffect } from 'react';
import { Building2, User, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';

export function DevisPage() {
  const [formType, setFormType] = useState<'entreprise' | 'particulier'>('entreprise');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    quantity: '',
    article: '',
    description: '',
    deadline: '',
    phone: ''
  });

  // Intercept query params from hash
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const type = params.get('type');
    const secteur = params.get('secteur');
    const produit = params.get('produit');
    const theme = params.get('theme');

    if (type === 'particulier') setFormType('particulier');
    else if (type === 'entreprise') setFormType('entreprise');

    let initialDesc = "";
    if (secteur) initialDesc += `Secteur : ${secteur}\n`;
    if (produit) initialDesc += `Produit : ${produit}\n`;
    if (theme) initialDesc += `Thème : ${theme}\n`;
    
    if (initialDesc) {
      setFormData(prev => ({ ...prev, description: initialDesc }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour Sandrine, je souhaite un devis pour :
- Type : ${formType.toUpperCase()}
- Nom : ${formData.name}
- Article : ${formData.article}
- Quantité : ${formData.quantity}
- Description : ${formData.description}
- Délai : ${formData.deadline || 'Dès que possible'}
- Contact : ${formData.phone}`;

    const whatsappURL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-3xl mx-auto">
        <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 no-underline">
          <ArrowLeft size={16} /> Retour à l'accueil
        </a>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Votre Projet.</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Remplissez ces quelques informations pour que je puisse préparer votre devis.
        </p>

        <div className="flex gap-4 mb-12">
          <button 
            onClick={() => setFormType('entreprise')}
            className={`flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 bg-white cursor-pointer ${
              formType === 'entreprise' ? 'border-primary bg-primary/5 shadow-xl' : 'border-black/5 hover:border-black/20'
            }`}
          >
            <Building2 size={32} className={formType === 'entreprise' ? 'text-primary' : 'text-black/20'} />
            <span className="font-bold uppercase tracking-widest text-[10px]">Entreprise</span>
          </button>
          <button 
            onClick={() => setFormType('particulier')}
            className={`flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 bg-white cursor-pointer ${
              formType === 'particulier' ? 'border-primary bg-primary/5 shadow-xl' : 'border-black/5 hover:border-black/20'
            }`}
          >
            <User size={32} className={formType === 'particulier' ? 'text-primary' : 'text-black/20'} />
            <span className="font-bold uppercase tracking-widest text-[10px]">Particulier</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Nom / Entreprise</label>
              <input 
                required
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all text-sm"
                placeholder="Ex: Restaurant Le Gourmet"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Téléphone</label>
              <input 
                required
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all text-sm"
                placeholder="Ex: 06 00 00 00 00"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Article & Quantité</label>
              <input 
                required
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all text-sm"
                placeholder="Ex: 10 Polos, 1 Doudou..."
                value={formData.article}
                onChange={e => setFormData({...formData, article: e.target.value})}
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Délai souhaité</label>
              <input 
                className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all text-sm"
                placeholder="Ex: Avant le 15 juin"
                value={formData.deadline}
                onChange={e => setFormData({...formData, deadline: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Description du projet</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-black/5 border-none rounded-2xl p-4 outline-none focus:ring-2 ring-primary/20 transition-all resize-none text-sm"
              placeholder="Décrivez votre logo, le texte à broder, les emplacements..."
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <Button variant="whatsapp" className="w-full h-16 text-xs uppercase tracking-widest font-bold" type="submit">
            <MessageCircle className="mr-2 w-4 h-4" /> Envoyer ma demande WhatsApp
          </Button>
          <p className="text-center text-[10px] uppercase tracking-widest opacity-50 font-bold">
            Sandrine traite chaque demande personnellement sous 24h
          </p>
        </form>
      </div>
    </div>
  );
}