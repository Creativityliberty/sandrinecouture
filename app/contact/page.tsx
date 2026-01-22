"use client";

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const text = `Bonjour,\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nSujet: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/33629492213?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
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

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-black tracking-tighter italic uppercase mb-8">
              Envoyez un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Sujet
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Devis entreprise">Devis entreprise</option>
                  <option value="Devis particulier">Devis particulier</option>
                  <option value="Question générale">Question générale</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 rounded-lg uppercase text-[9px] font-black tracking-widest"
              >
                Envoyer via WhatsApp
              </Button>

              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center">
                Votre message sera envoyé directement à Sandrine via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
