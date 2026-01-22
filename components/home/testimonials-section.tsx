import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Directrice Restaurant",
      company: "Le Petit Normand",
      text: "Les uniformes brodés de Sandrine ont transformé l'image de notre restaurant. Nos clients remarquent immédiatement la qualité et la professionnalité. Un vrai investissement !",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Thomas Bernard",
      role: "Responsable RH",
      company: "Artisans & Co",
      text: "Service impeccable, délais respectés et qualité exceptionnelle. Sandrine comprend vraiment nos besoins professionnels. Nous recommandons vivement !",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sophie Martin",
      role: "Maman",
      company: "Particulier",
      text: "J'ai commandé une serviette brodée pour la naissance de ma fille. C'est devenu un objet précieux que je garde précieusement. Magnifique travail !",
      rating: 5,
      image: "👩",
    },
    {
      name: "Laurent Petit",
      role: "Gérant",
      company: "Salon de Coiffure",
      text: "Les tabliers brodés avec notre logo donnent une vraie identité à notre équipe. Les clients adorent ! Merci Sandrine pour cette belle collaboration.",
      rating: 5,
      image: "👨",
    },
    {
      name: "Isabelle Leclerc",
      role: "Organisatrice",
      company: "Événementiel",
      text: "Pour notre événement d'entreprise, Sandrine a créé des patchs brodés personnalisés en un délai record. Impeccable et très professionnel !",
      rating: 5,
      image: "👩‍🎨",
    },
    {
      name: "Jean-Pierre Rousseau",
      role: "Propriétaire",
      company: "Hôtel 3 étoiles",
      text: "Les serviettes brodées avec notre logo ajoutent une touche de luxe à nos chambres. Les clients demandent souvent où les acheter. Excellent travail !",
      rating: 5,
      image: "👨‍💼",
    },
  ];

  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic uppercase mb-4 leading-[0.9]">
            Ils nous font <br />
            <span className="text-primary not-italic">confiance</span>
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nos services et de la qualité
            de notre travail.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bento-card glass p-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 hover:shadow-xl transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-black/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold italic uppercase text-sm tracking-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                    <p className="text-[9px] text-primary font-black uppercase tracking-widest">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl border border-black/5">
            <p className="text-4xl font-black text-primary mb-2">500+</p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-600">
              Clients satisfaits
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-black/5">
            <p className="text-4xl font-black text-primary mb-2">10 ans</p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-600">
              D'expérience
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-black/5">
            <p className="text-4xl font-black text-primary mb-2">4.9/5</p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-600">
              Note moyenne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
