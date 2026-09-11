"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Loader2, 
  Phone, 
  FileText, 
  ChevronRight, 
  ShoppingBag,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { useCart } from "@/context/cart-context";
import { ChatMessage, ChatBlock, Product, QuickReply } from "@/types/chat-commerce";
import { ChatProductCarousel } from "@/components/chat/chat-product-carousel";
import { ChatQuickReplies } from "@/components/chat/chat-quick-replies";
import { ChatProductConfigurator } from "@/components/chat/chat-product-configurator";
import { ChatQuoteCard } from "@/components/chat/chat-quote-card";
import Link from "next/link";

export function AIAssistant() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();
  const [activeConfigProduct, setActiveConfigProduct] = useState<Product | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      blocks: [
        {
          type: "text",
          content: "Bonjour ! Je suis Sandrine. Bienvenue dans mon atelier de broderie normand ✨ Que recherchez-vous aujourd'hui ?"
        },
        {
          type: "quick_replies",
          options: [
            { id: "opt_naissance", label: "👶 Cadeau Naissance (< 30 €)", payload: "Je cherche une idée de cadeau de naissance pour moins de 30 €" },
            { id: "opt_b2b", label: "👔 Projet Entreprise & Logos", payload: "Je souhaite des vêtements brodés avec le logo de mon entreprise" },
            { id: "opt_accessoires", label: "✨ Sacs & Trousses fait main", payload: "Montrez-moi vos créations de sacs et trousses artisanales" },
            { id: "opt_custom", label: "🧵 Personnaliser un prénom", payload: "Comment personnaliser un article avec un prénom brodé ?" }
          ]
        }
      ]
    }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setMounted(true));
    } else {
      setTimeout(() => setMounted(true), 1200);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (!mounted) return null;

  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim() || isLoading) return;

    setInput("");
    const userMsgId = Date.now().toString();

    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMsgId,
        role: "user",
        blocks: [{ type: "text", content: userText }]
      }
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build lightweight message payload for backend
      const payloadMessages = newMessages.map(m => {
        const textContent = m.blocks
          .filter(b => b.type === "text")
          .map(b => (b as { type: "text"; content: string }).content)
          .join(" ");
        return {
          role: m.role,
          content: textContent || "Interaction produit"
        };
      });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages })
      });

      const data = await response.json();
      const assistantBlocks: ChatBlock[] = data.blocks || [
        { type: "text", content: data.text || "Je reste à votre écoute pour concrétiser votre projet !" }
      ];

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          blocks: assistantBlocks
        }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          blocks: [
            {
              type: "text",
              content: "Une petite coupure momentanée... Écrivez-moi directement sur WhatsApp, je vous réponds avec grand plaisir !"
            },
            {
              type: "actions",
              actions: [
                {
                  label: "Discuter sur WhatsApp",
                  url: `https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}`,
                  actionType: "wa"
                }
              ]
            }
          ]
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductSelect = (product: Product) => {
    // Insert a product configurator block into chat
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "assistant",
        blocks: [
          {
            type: "text",
            content: `Vous avez choisi : **${product.title}** (${product.price.toFixed(2)} €). Personnalisez vos options ci-dessous :`
          },
          {
            type: "product_configurator",
            product
          }
        ]
      }
    ]);
  };

  const handleDirectAddToCart = (product: Product) => {
    addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      imgUrl: product.imgUrl,
      threadColor: product.colors[0]?.name || "Écru"
    });
    setIsCartOpen(true);
  };

  const handleConfiguredAddToCart = (item: {
    productId: number;
    title: string;
    price: number;
    imgUrl: string;
    threadColor: string;
    notes?: string;
  }) => {
    addToCart({
      productId: item.productId,
      title: item.title,
      price: item.price,
      quantity: 1,
      imgUrl: item.imgUrl,
      threadColor: item.threadColor,
      textToEmbroider: item.notes
    });
    setIsCartOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="glass w-[360px] sm:w-[400px] h-[600px] flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 animate-in slide-in-from-bottom-10 fade-in duration-500 bg-white/95">
          {/* Header */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-950 p-5 text-white shrink-0 shadow-md">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/20 shadow-inner p-0.5">
                  <img
                    src="/images/hero/sandrine-atelier-real.jpg"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-xl"
                    alt="Sandrine Couture"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-black text-sm uppercase tracking-tight leading-none text-white">
                      By Sandrine Couture
                    </p>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[10px] text-stone-300 font-medium mt-0.5">
                    Conseillère Atelier & Créations
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white/80 hover:text-white"
                aria-label="Fermer le chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#faf8f5]/60 text-stone-800"
          >
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-2 max-w-full`}
                >
                  {m.blocks.map((block, idx) => {
                    if (block.type === "text") {
                      return (
                        <div
                          key={idx}
                          className={`max-w-[88%] p-3.5 rounded-2xl text-[12px] sm:text-[13px] leading-relaxed font-medium shadow-xs ${
                            isUser
                              ? "bg-stone-900 text-white rounded-tr-none"
                              : "bg-white text-stone-800 rounded-tl-none border border-black/5"
                          }`}
                        >
                          {block.content}
                        </div>
                      );
                    }

                    if (block.type === "products") {
                      return (
                        <div key={idx} className="w-full max-w-full">
                          <ChatProductCarousel
                            products={block.products}
                            onSelect={handleProductSelect}
                            onAddToCart={handleDirectAddToCart}
                          />
                        </div>
                      );
                    }

                    if (block.type === "quick_replies") {
                      return (
                        <div key={idx} className="w-full">
                          <ChatQuickReplies
                            options={block.options}
                            onSelect={(opt) => handleSend(opt.payload)}
                            disabled={isLoading}
                          />
                        </div>
                      );
                    }

                    if (block.type === "product_configurator") {
                      return (
                        <div key={idx} className="w-full">
                          <ChatProductConfigurator
                            product={block.product}
                            onAddToCart={handleConfiguredAddToCart}
                          />
                        </div>
                      );
                    }

                    if (block.type === "quote") {
                      return (
                        <div key={idx} className="w-full">
                          <ChatQuoteCard quote={block.quote} />
                        </div>
                      );
                    }

                    if (block.type === "actions") {
                      return (
                        <div key={idx} className="flex flex-col gap-2 w-full max-w-[88%]">
                          {block.actions.map((act, aIdx) => (
                            <a
                              key={aIdx}
                              href={act.url || `https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-between p-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-md shadow-pink-500/20 no-underline cursor-pointer"
                            >
                              <span>{act.label}</span>
                              <ChevronRight size={14} />
                            </a>
                          ))}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl rounded-tl-none border border-black/5 w-fit text-xs text-stone-500 shadow-xs">
                <Loader2 size={13} className="animate-spin text-primary" />
                <span className="italic">Sandrine vous répond...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-stone-200/80 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question à Sandrine..."
                className="flex-1 px-4 py-2.5 rounded-full border border-stone-200 text-xs bg-stone-50 focus:outline-none focus:border-primary focus:bg-white transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-primary text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer shrink-0 shadow-sm"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 p-3.5 rounded-full bg-stone-900 text-white shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer"
          aria-label="Ouvrir la conseillère atelier"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img
              src="/images/hero/sandrine-atelier-real.jpg"
              alt="Sandrine Couture"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-900 animate-pulse" />
          </div>

          <div className="hidden sm:flex flex-col text-left pr-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Une question broderie ?
            </span>
            <span className="text-[9px] text-stone-300 font-medium">
              Sandrine vous répond en direct
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
            <MessageCircle size={16} />
          </div>
        </button>
      )}
    </div>
  );
}
