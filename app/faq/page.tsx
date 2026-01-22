import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Les délais moyens sont de 10 jours ouvrables après validation de la commande. Pour les urgences, contactez-nous directement via WhatsApp au 06 29 49 22 13.",
    },
    {
      question: "Acceptez-vous les petites commandes ?",
      answer:
        "Oui ! Nous acceptons les commandes à partir d'une pièce. Que ce soit pour un cadeau unique ou une série complète, nous adaptons nos services à vos besoins.",
    },
    {
      question: "Quels types de textiles pouvez-vous broder ?",
      answer:
        "Nous brodons sur : polos, t-shirts, sweats, tabliers, serviettes, peignoirs, sacs, trousses, et bien d'autres. Si vous avez un textile spécifique, contactez-nous pour vérifier la faisabilité.",
    },
    {
      question: "Comment fonctionne le processus de devis ?",
      answer:
        "1. Vous remplissez le formulaire de devis avec vos détails (logo, quantité, article)\n2. Nous vous répondons sous 24h avec un devis clair\n3. Vous validez et versez un acompte si nécessaire\n4. Nous commençons la production\n5. Livraison à votre adresse",
    },
    {
      question: "Pouvez-vous reproduire mon logo en broderie ?",
      answer:
        "Oui ! Nous numérisons votre logo en haute définition avant la broderie. Cela garantit un rendu propre et lisible. Nous vous montrons un aperçu avant de commencer la production.",
    },
    {
      question: "Quelle est la durée de vie d'une broderie ?",
      answer:
        "Nos broderies sont très durables et résistent au lavage intensif. Elles ne s'effacent pas et conservent leur qualité pendant des années, même avec un usage quotidien.",
    },
    {
      question: "Livrez-vous en dehors de la Normandie ?",
      answer:
        "Oui ! Nous livrons partout en France métropolitaine. Les frais de port varient selon la destination. Contactez-nous pour un devis de livraison.",
    },
    {
      question: "Proposez-vous des retouches ou modifications ?",
      answer:
        "Bien sûr ! Si vous n'êtes pas satisfait, nous pouvons effectuer des retouches. Contactez-nous dans les 7 jours suivant la livraison.",
    },
    {
      question: "Quel est votre délai de réponse aux devis ?",
      answer:
        "Nous répondons à tous les devis sous 24 heures ouvrables. Pour une réponse plus rapide, utilisez WhatsApp : 06 29 49 22 13",
    },
    {
      question: "Acceptez-vous les paiements en plusieurs fois ?",
      answer:
        "Pour les commandes importantes, nous pouvons étudier un paiement en plusieurs fois. Contactez-nous directement pour discuter des modalités.",
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
            Questions <br />
            <span className="text-primary not-italic">Fréquentes</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur nos services, délais et
            processus de commande.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase mb-6">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-gray-600 mb-8 font-medium text-lg">
            Contactez-nous directement, nous sommes là pour vous aider !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="no-underline">
              <Button
                variant="whatsapp"
                size="lg"
                className="h-14 px-8 rounded-full shadow-xl uppercase text-[9px] font-black tracking-widest w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Demander via WhatsApp
              </Button>
            </Link>
            <a
              href="mailto:bysandrinecouture@gmail.com"
              className="no-underline"
            >
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-full uppercase text-[9px] font-black tracking-widest w-full sm:w-auto"
              >
                Envoyer un email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-black/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <h3 className="font-bold text-lg italic uppercase tracking-tight text-black">
          {question}
        </h3>
        <ChevronDown
          size={24}
          className={`text-primary transition-transform duration-300 shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-5 bg-gray-50 border-t border-black/10 animate-in fade-in duration-300">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
