"use client";

import React from "react";
import { QuickReply } from "@/types/chat-commerce";

interface QuickRepliesProps {
  options: QuickReply[];
  onSelect: (option: QuickReply) => void;
  disabled?: boolean;
}

export function ChatQuickReplies({ options, onSelect, disabled }: QuickRepliesProps) {
  if (!options || options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 my-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          disabled={disabled}
          onClick={() => onSelect(opt)}
          className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-tight bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-700 transition-all border border-stone-200/80 shadow-2xs hover:scale-102 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
