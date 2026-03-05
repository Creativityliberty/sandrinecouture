import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";

export default function BlogPage() {
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
            {BLOG_POSTS.map((article) => (
              <article
                key={article.id}
                className="group bento-card glass overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col relative"
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
                    <Link href={`/blog/${article.slug}`} className="before:absolute before:inset-0 text-inherit no-underline">
                      {article.title}
                    </Link>
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
                  <div className="mt-4 w-full px-4 py-2 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white font-bold italic uppercase text-[9px] tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Lire l'article
                    <ArrowRight size={14} />
                  </div>
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
