"use client";

import React from "react";

interface FormattedChatMessageProps {
  content: string;
  isUser?: boolean;
}

// Parses bold (**text**) and italic (*text* or _text_)
function renderFormattedInline(text: string, isUser: boolean): React.ReactNode[] {
  // Regex to match **bold** and *italic*
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|\*[^*]+?\*|_[^_]+?_)/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong
          key={match.index}
          className={`font-black ${isUser ? "text-white" : "text-stone-950 font-bold"}`}
        >
          {token.slice(2, -2)}
        </strong>
      );
    } else if (
      (token.startsWith("*") && token.endsWith("*")) ||
      (token.startsWith("_") && token.endsWith("_"))
    ) {
      parts.push(
        <em key={match.index} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
}

export function FormattedChatMessage({ content, isUser = false }: FormattedChatMessageProps) {
  if (!content) return null;

  // 1. Normalize inline bullets into newlines if model bundled them on a single line
  let normalized = content
    .replace(/([^\n])\s*\*\s+(?=\*\*|[A-ZÀ-ÖØ-ß0-9])/g, "$1\n* ")
    .replace(/([^\n])\s*-\s+(?=\*\*|[A-ZÀ-ÖØ-ß0-9])/g, "$1\n- ");

  // 2. Separate trailing call-to-action sentences that got attached to the last bullet
  normalized = normalized.replace(/(\?|\.)\s+(N'hésitez|N’hésitez|Au plaisir|À bientôt|Dites-moi|Je reste)/gi, "$1\n\n$2");

  // 3. Split into lines
  const lines = normalized.split("\n");

  // 4. Group lines into blocks: either "paragraph" or "list"
  type Block =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

  const blocks: Block[] = [];
  let currentList: string[] | null = null;
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) blocks.push({ type: "paragraph", text });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList && currentList.length > 0) {
      blocks.push({ type: "list", items: currentList });
      currentList = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const isBullet = line.startsWith("* ") || line.startsWith("- ") || line.startsWith("• ");

    if (isBullet) {
      flushParagraph();
      const itemText = line.replace(/^(\*|-|•)\s+/, "").trim();
      if (!currentList) currentList = [];
      currentList.push(itemText);
    } else {
      flushList();
      currentParagraph.push(line);
    }
  }

  flushParagraph();
  flushList();

  return (
    <div className="space-y-3 text-[13px] leading-relaxed">
      {blocks.map((b, idx) => {
        if (b.type === "list") {
          return (
            <ul key={idx} className="my-2 space-y-2 pl-0.5">
              {b.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      isUser ? "bg-white" : "bg-primary"
                    }`}
                  />
                  <span className={isUser ? "text-stone-100" : "text-stone-800"}>
                    {renderFormattedInline(item, isUser)}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={idx}
            className={`${isUser ? "text-white" : "text-stone-800"} leading-relaxed`}
          >
            {renderFormattedInline(b.text, isUser)}
          </p>
        );
      })}
    </div>
  );
}
