
"use client"

import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: "Bonjour ! Je suis l'assistant de Sandrine. Comment puis-je vous aider dans votre projet de broderie ?"}
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    try {
      // Initialize with correct named parameter and direct environment variable access
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Tu es l'assistant virtuel expert de "By Sandrine Couture", un atelier de broderie à Robertot (76). 
          Sandrine propose : 
          1. Entreprises : Logos sur polos, tabliers, sweats, patchs velcro. Facture pro.
          2. Particuliers : Prénoms sur cadeaux de naissance, peignoirs, serviettes.
          Ton ton est luxueux, accueillant et professionnel. 
          Si l'utilisateur pose une question technique, explique que la broderie est durable et qualitative. 
          Réponds brièvement.`,
        },
      });

      // Use .text property directly as per latest SDK guidelines
      setMessages(prev => [...prev, {role: 'assistant', content: response.text || "Désolée, je n'ai pas pu traiter votre demande."}]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {role: 'assistant', content: "Une petite erreur technique... Contactez Sandrine directement par WhatsApp !"}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass w-[350px] h-[500px] flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl border-primary/20 animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              <div>
                <p className="font-bold">L'Atelier IA</p>
                <p className="text-[10px] opacity-80">Réponse instantanée</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-secondary text-foreground rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-black/5 bg-white/50">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="w-full bg-white border-2 border-primary/10 rounded-full py-3 px-5 pr-12 focus:border-primary outline-none transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1.5 p-2 bg-primary text-white rounded-full hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group relative"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-black/5">
            Une question ?
          </span>
        </button>
      )}
    </div>
  );
}
