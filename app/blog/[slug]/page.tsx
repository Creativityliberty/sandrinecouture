import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article introuvable | Sandrine Couture',
    }
  }

  return {
    title: `${post.title} | Blog Sandrine Couture`,
    description: post.metaDescription || post.excerpt,
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen font-sans bg-white pt-32 pb-16">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 no-underline font-bold uppercase tracking-widest text-[10px]"
        >
          <ArrowLeft size={16} /> Retour aux articles
        </Link>

        <article>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.metaDescription || post.excerpt,
                "image": `https://sandrinecouture.fr${post.image}`,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Sandrine Couture",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sandrinecouture.fr/logo.png"
                  }
                },
                "datePublished": "2026-01-20T08:00:00+08:00", // Simplified, would ideally parse post.date
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://sandrinecouture.fr/blog/${post.slug}`
                }
              })
            }}
          />
          <div className="mb-10 text-center">
            <span className="px-4 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 italic uppercase text-black leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-primary" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                {post.readTime} de lecture
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 relative shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="prose prose-lg prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary prose-a:font-bold hover:prose-a:underline mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
