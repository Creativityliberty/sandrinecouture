"use client"

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, Loader2, Phone, FileText, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "../lib/site-config";
import Link from "next/link";

const MessageBubble = ({ m, setIsOpen }: { m: { role: 'user' | 'assistant', content: string }, setIsOpen: (o: boolean) => void }) => {
  const isAssistant = m.role === 'assistant';

  // Parse CTA syntax: [CTA:Label:URL]
  const ctaRegex = /\[CTA:(.*?):(.*?)\]/g;
  const parts = m.content.split(ctaRegex);
  const ctas: { label: string, url: string }[] = [];

  let match;
  const tempContent = m.content;
  while ((match = ctaRegex.exec(tempContent)) !== null) {
    ctas.push({ label: match[1], url: match[2] });
  }

  // Clean content (remove CTAs from text bubble)
  const cleanContent = m.content.replace(ctaRegex, '').trim();

  return (
    <div className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} space-y-3`}>
      {cleanContent && (
        <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed font-medium shadow-sm transition-all hover:shadow-md ${m.role === 'user'
          ? 'bg-black text-white rounded-tr-none'
          : 'bg-white text-gray-800 rounded-tl-none border border-black/5'
          }`}>
          {cleanContent}
        </div>
      )}

      {isAssistant && ctas.length > 0 && (
        <div className="flex flex-col gap-2 w-full max-w-[85%] animate-in slide-in-from-left-2 fade-in duration-300">
          {ctas.map((cta, i) => {
            const isWhatsApp = cta.url === 'wa_link';
            const url = isWhatsApp ? `https://wa.me/${SITE_CONFIG.whatsapp}` : cta.url;
            const isExternal = isWhatsApp || url.startsWith('http');

            const btnClass = "w-full flex items-center justify-between p-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 group/cta border border-white/10";

            const content = (
              <>
                <span className="flex items-center gap-2">
                  {isWhatsApp ? <Phone size={14} className="text-white/80" /> : <Sparkles size={14} className="text-white/80" />}
                  {cta.label}
                </span>
                <ChevronRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </>
            );

            return isExternal ? (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={btnClass + " no-underline"}>
                {content}
              </a>
            ) : (
              <Link key={i} href={url} onClick={() => setIsOpen(false)} className={btnClass + " no-underline"}>
                {content}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Bonjour ! Je suis l'assistant de Sandrine. Avez-vous un projet de broderie en tête ? Je suis là pour vous conseiller. ✨" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "Faire un devis", icon: <FileText size={12} />, href: "/devis" },
    { label: "Nos réalisations", icon: <Sparkles size={12} />, href: "/realisations" },
    { label: "WhatsApp", icon: <Phone size={12} />, href: `https://wa.me/${SITE_CONFIG.whatsapp}`, external: true }
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: messageToSend }]
        }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'assistant', content: data.text || "Désolée, je n'ai pas pu traiter votre demande." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Une petite erreur technique... Contactez Sandrine directement par WhatsApp ! [CTA:Ouvrir WhatsApp:wa_link]" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="glass w-[360px] h-[580px] flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl border-white/20 animate-in slide-in-from-bottom-10 fade-in duration-500 bg-white/95">
          {/* Header */}
          <div className="bg-primary p-6 text-white shrink-0">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/10">
                  <img src="/logo-sandrine.png" className="w-full h-full object-cover" alt="Logo" />
                </div>
                <div>
                  <p className="font-black italic uppercase tracking-tighter leading-none">By Sandrine Couture</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">En ligne</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
            {messages.map((m, i) => (
              <MessageBubble key={i} m={m} setIsOpen={setIsOpen} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-black/5 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions & Input */}
          <div className="p-4 bg-white border-t border-black/5 space-y-4">
            {/* Quick Actions Horizontal Scroll */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {quickActions.map((action, idx) => (
                action.external ? (
                  <a
                    key={idx}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-[10px] font-black uppercase tracking-widest transition-all no-underline text-foreground border border-primary/10"
                  >
                    {action.icon}
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    href={action.href}
                    onClick={() => action.href === '/devis' && setIsOpen(false)}
                    className="shrink-0 flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-[10px] font-black uppercase tracking-widest transition-all no-underline text-foreground border border-primary/10"
                  >
                    {action.icon}
                    {action.label}
                  </Link>
                )
              ))}
            </div>

            <div className="relative group">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="w-full bg-gray-50 border-2 border-transparent rounded-[1.5rem] py-4 px-5 pr-12 focus:bg-white focus:border-primary/20 outline-none transition-all text-sm font-medium"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="absolute right-2 top-2 p-2.5 bg-primary text-white rounded-xl hover:scale-105 transition-transform disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest">
              L&apos;IA peut faire des erreurs, vérifiez les infos.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-5 rounded-[2rem] shadow-2xl hover:scale-110 transition-all group relative border-2 border-primary/20"
        >
          <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-4 border-white rounded-full translate-x-1/4 -translate-y-1/4" />
          <MessageCircle className="w-7 h-7" />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-white text-black px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl border border-black/5 translate-x-4 group-hover:translate-x-0 italic">
              Un projet broderie ? ✨
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
