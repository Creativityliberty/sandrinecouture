import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Guide Complet : Choisir la Bonne Broderie pour Votre Entreprise",
      excerpt:
        "Découvrez comment sélectionner le type de broderie idéal pour valoriser l'image de votre entreprise et créer une cohésion d'équipe.",
      category: "Entreprises",
      date: "22 janvier 2026",
      author: "Sandrine",
      readTime: "5 min",
      image: "/images/realisations/serviette-brodee-audi-axel.webp",
    },
    {
      id: 2,
      title:
        "Cadeaux de Naissance Personnalisés : Idées Originales et Durables",
      excerpt:
        "Explorez nos idées de cadeaux de naissance brodés qui marquent vraiment et deviennent des souvenirs précieux pour les familles.",
      category: "Particuliers",
      date: "20 janvier 2026",
      author: "Sandrine",
      readTime: "6 min",
      image: "/images/realisations/bavoir-bebe-mon-premier-noel.webp",
    },
    {
      id: 3,
      title:
        "Durabilité de la Broderie : Comment Nos Créations Résistent au Temps",
      excerpt:
        "Apprenez pourquoi la broderie artisanale est plus durable que l'impression textile et comment en prendre soin.",
      category: "Conseils",
      date: "18 janvier 2026",
      author: "Sandrine",
      readTime: "4 min",
      image: "/images/realisations/serviette-brodee-van-surf.webp",
    },
    {
      id: 4,
      title: "Uniformes Professionnels : L'Impact Visuel sur Votre Marque",
      excerpt:
        "Découvrez comment des uniformes brodés cohérents renforcent l'identité de votre entreprise et impressionnent vos clients.",
      category: "Entreprises",
      date: "15 janvier 2026",
      author: "Sandrine",
      readTime: "7 min",
      image: "/images/realisations/serviette-brodee-audi-axel.webp",
    },
    {
      id: 5,
      title: "Personnalisation Textile : Tendances 2026",
      excerpt:
        "Explorez les dernières tendances en matière de personnalisation textile et comment rester à la pointe du design.",
      category: "Tendances",
      date: "12 janvier 2026",
      author: "Sandrine",
      readTime: "5 min",
      image: "/images/realisations/sac-personnalise-brode-octavia.webp",
    },
    {
      id: 6,
      title: "Processus de Digitalisation : De Votre Logo à la Broderie",
      excerpt:
        "Comprenez comment nous transformons votre logo en fichier de broderie haute définition pour un rendu parfait.",
      category: "Technique",
      date: "10 janvier 2026",
      author: "Sandrine",
      readTime: "6 min",
      image: "/images/realisations/serviette-brodee-van-surf.webp",
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
            Blog & <br />
            <span className="text-primary not-italic">Conseils</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            Découvrez nos articles sur la broderie, la personnalisation textile
            et les tendances du secteur.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bento-card glass overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold italic uppercase tracking-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-medium">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-auto pt-4 border-t border-black/5 space-y-2">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        {article.author}
                      </div>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {article.readTime}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-4 w-full px-4 py-2 bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold italic uppercase text-[9px] tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Lire l'article
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase mb-6">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8 font-medium text-lg">
            Recevez nos derniers articles et conseils directement dans votre
            boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-primary font-medium"
            />
            <Button
              size="lg"
              className="h-12 px-8 rounded-lg uppercase text-[9px] font-black tracking-widest whitespace-nowrap"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
