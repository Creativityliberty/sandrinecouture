"use client";

import React from "react";
import { QuoteDraft } from "@/types/chat-commerce";
import { MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface QuoteCardProps {
  quote: QuoteDraft;
}

export function ChatQuoteCard({ quote }: QuoteCardProps) {
  const message = `✨ *DEMANDE DE PROJET PRO VIA L'ASSISTANTE ATELIER* ✨

👔 *SECTEUR & ENTREPRISE*
- Activité : ${quote.sector || "Non précisé"}
- Support textile : ${quote.garmentType}
- Quantité souhaitée : ${quote.quantity} pièces

🧵 *PERSONNALISATION*
- Type de marquage : ${quote.customization}
${quote.deadline ? `- Échéance souhaitée : ${quote.deadline}\n` : ""}${quote.notes ? `- Remarques : ${quote.notes}\n` : ""}
---
_Transmis en direct depuis l'assistant By Sandrine Couture_`;

  const whatsappURL = `https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full my-3 p-4 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 text-white border border-white/10 shadow-xl">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
        <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary-light">
          <FileText size={14} />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary-light font-bold">
          Dossier Projet Atelier
        </span>
      </div>

      <div className="space-y-1.5 text-xs text-stone-300 mb-4">
        <div className="flex justify-between">
          <span className="text-stone-400">Article :</span>
          <span className="font-bold text-white">{quote.garmentType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Volume estimé :</span>
          <span className="font-bold text-white">{quote.quantity} pièces</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Secteur :</span>
          <span className="font-bold text-white">{quote.sector}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Marquage :</span>
          <span className="font-bold text-primary-light">{quote.customization}</span>
        </div>
      </div>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase tracking-wider text-[11px] flex items-center justify-center gap-2 transition-transform hover:scale-102 no-underline shadow-lg shadow-green-500/20"
      >
        <MessageCircle size={15} />
        <span>Valider le devis avec Sandrine</span>
      </a>
    </div>
  );
}
