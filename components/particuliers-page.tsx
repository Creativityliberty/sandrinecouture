import React from 'react';
import { 
  Heart, Gift, Baby, Star, ArrowRight, Sparkles, MessageCircle, 
  MapPin, CheckCircle2, Home, ShoppingBag, Lightbulb, Camera, Phone
} from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';

export function ParticuliersPage() {
  const giftIdeas = [
    { icon: Baby, title: "Naissance / bébé", desc: "Couvertures, accessoires, cadeaux brodés" },
    { icon: Gift, title: "Anniversaire", desc: "Prénom + motif, petit message personnalisé" },
    { icon: Heart, title: "Couple / mariage", desc: "Initiales, date, broderie élégante" },
    { icon: Home, title: "Maison", desc: "Serviettes, linge de lit, peignoirs" },
    { icon: ShoppingBag, title: "Accessoires", desc: "Sacs, trousses, pochettes" }
  ];

  const articles = [
    "Serviettes & peignoirs", "Couvertures bébé", "Bodies & vêtements", 
    "Sacs / trousses", "Accessoires personnalisés"
  ];

  return (
    <div className="pt-32 animate-in fade-in duration-700">
      {/* HERO SECTION */}
      <section className="px-6 mb-24 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 -z-10 blur-[120px] rounded-full translate-y-[-20%]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-6">
              <MapPin className="w-3 h-3" />
              <span>📍 Robertot (76560) • Livraison possible</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 italic leading-[0.9] uppercase">
              Broderie <br /><span className="text-primary not-italic">personnalisée</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-bold mb-6 italic uppercase tracking-tighter leading-tight">
              Prénoms, cadeaux, bébé : une attention unique.
            </p>
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-xl font-medium">
              Vous cherchez un cadeau qui marque vraiment ? Je personnalise vos textiles avec une broderie propre et résistante : prénom, date, petit message, motif… 
              Parfait pour bébé / naissance, anniversaires, ou pour vous faire plaisir.
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 py-5 border-y border-black/5">
              {["Devis rapide", "Travail soigné", "Sur-mesure"].map((check, i) => (
                <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary">
                  <CheckCircle2 size={14} /> <span>{check}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button 
                onClick={() => window.location.hash = 'devis?type=particulier'}
                variant="whatsapp" size="lg" className="h-16 px-8 rounded-full shadow-xl uppercase text-[9px] font-black tracking-widest"
              >
                Demander un devis WhatsApp
                <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
              <Button 
                onClick={() => window.location.hash = 'réalisations'}
                variant="outline" size="lg" className="h-16 px-8 rounded-full uppercase text-[9px] font-black tracking-widest"
              >
                Voir les réalisations
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight italic">
              Vous remplissez le devis → WhatsApp s’ouvre avec un message déjà prêt à envoyer.
            </p>
          </div>

          <div className="relative group hidden lg:block">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl" />
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <img src="https://images.unsplash.com/photo-1522771917563-ee75ff71e1c6?w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Broderie bébé" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/40 text-white">
                 <p className="text-xs uppercase font-black tracking-widest text-primary mb-1">Douceur & Qualité</p>
                 <p className="text-xl font-bold italic">"Une finition nette et durable."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: IDÉES CADEAUX */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-4">Des idées qui marchent <br />à tous les coups</h2>
            <p className="text-muted-foreground font-medium italic uppercase tracking-tighter">Des cadeaux simples… mais qui font toujours effet.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {giftIdeas.map((gift, i) => (
              <div key={i} className="bento-card glass p-8 group hover:bg-primary hover:text-white transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <gift.icon className="text-primary group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 italic">{gift.title}</h3>
                <p className="text-xs opacity-60 font-medium leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm font-black uppercase tracking-widest text-primary italic bg-primary/5 py-4 px-8 rounded-full inline-block mx-auto w-full max-w-2xl">
            👉 Vous avez une idée précise ? Envoyez-la : je vous dis directement si c’est faisable.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: PERSONNALISATION & ARTICLES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-8">Personnalisation <br /><span className="text-primary not-italic">au choix</span></h2>
            <p className="text-gray-500 font-medium mb-12 uppercase tracking-tighter italic text-sm">Vous choisissez le style, je m’occupe du rendu.</p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {["Prénom", "Date", "Petit texte / message", "Motif (selon demande)", "Couleurs au choix", "Style discret ou visible"].map((opt, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-black/5 shadow-sm group hover:border-primary/50 transition-all">
                  <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                  <span className="font-bold uppercase tracking-widest text-[10px]">{opt}</span>
                </div>
              ))}
            </div>
            <p className="p-4 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest text-center italic border-l-4 border-primary">
              📌 Avant production, on valide ensemble pour éviter toute erreur.
            </p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors" />
            <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-12">Articles souvent demandés</h2>
            <div className="space-y-6 mb-12">
              {articles.map((art, i) => (
                <div key={i} className="flex items-center justify-between border-b border-black/5 pb-4 group/item">
                  <span className="font-bold italic text-lg">{art}</span>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover/item:opacity-100 transition-all" />
                </div>
              ))}
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground italic">
              📌 Vous pouvez apporter votre textile ou demander une solution selon le projet.
            </p>
            <p className="mt-8 text-xl font-black italic tracking-tighter">
              Chaque projet est différent : <span className="text-primary not-italic">je confirme le rendu au devis.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMENT COMMANDER */}
      <section className="py-24 px-6 bg-pink-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-4">Comment commander ?</h2>
            <p className="text-muted-foreground font-medium uppercase tracking-tighter italic text-sm">En quelques minutes, c’est lancé.</p>
          </div>
          <div className="space-y-8">
            {[
              "Vous remplissez la demande de devis",
              "WhatsApp s’ouvre avec un message complet",
              "Je vous réponds avec prix + délai",
              "Validation",
              "Broderie + livraison / retrait"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform shadow-lg shadow-primary/20 shrink-0">
                  {i + 1}
                </div>
                <p className="text-xl font-bold italic uppercase tracking-tighter">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 glass rounded-[2rem] border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Sparkles className="text-primary w-10 h-10" />
              <div>
                <p className="text-2xl font-black italic">~1 SEMAINE</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50 italic">Délai moyen constaté</p>
              </div>
            </div>
            <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
               <p className="text-[11px] font-bold uppercase italic leading-tight text-primary">
                 🚀 Si c’est urgent : indiquez la date, <br /> je vous réponds franchement.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSEILS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-black text-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter italic uppercase mb-12 flex items-center gap-4">
              <Lightbulb className="text-primary" /> Pour un résultat encore plus joli
            </h2>
            <ul className="space-y-6 mb-12 list-none p-0">
              {[
                "Indiquez si vous voulez un style discret ou visible",
                "Si vous avez une inspiration : envoyez une photo",
                "Précisez la date si c’est pour un cadeau"
              ].map((advice, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold italic tracking-tighter border-b border-white/10 pb-4">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  {advice}
                </li>
              ))}
            </ul>
            <p className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-4">
              <Camera className="text-primary" /> 
              <span>👉 Une photo de l’article aide à confirmer <br className="hidden sm:block" /> la faisabilité et le rendu.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: ZONE & SEO */}
      <section className="py-24 px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black italic uppercase mb-4">Normandie & livraison possible</h2>
          <p className="text-muted-foreground mb-12 font-medium">Atelier basé à Robertot (76560). Je reçois des demandes en Normandie et je propose la livraison selon votre projet.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {["Broderie Normandie", "Seine-Maritime 76", "Broderie Rouen"].map((link, i) => (
              <a key={i} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-black uppercase tracking-[0.2em] text-black/30 hover:text-primary transition-colors no-underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase leading-[0.85]">
            Dites-moi ce que <br /><span className="text-primary not-italic">vous voulez broder</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-medium italic">Article + prénom/texte + couleurs + date = devis rapide.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.location.hash = 'devis?type=particulier'}
              variant="whatsapp" size="lg" className="h-16 px-10 rounded-full uppercase text-[9px] font-black tracking-widest"
            >
              <MessageCircle className="mr-3 w-5 h-5" /> Demander un devis WhatsApp
            </Button>
            <Button 
              onClick={() => window.location.hash = 'contact'}
              variant="outline" size="lg" className="h-16 px-10 rounded-full uppercase text-[9px] font-black tracking-widest"
            >
              Contact
            </Button>
          </div>
          <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic flex items-center justify-center gap-2">
            <Camera size={12} /> Vous pouvez aussi envoyer une photo sur WhatsApp pour confirmer.
          </p>
        </div>
      </section>
    </div>
  );
}