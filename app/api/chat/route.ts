import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `Tu es l'expert-conseil et assistant de vente de "By Sandrine Couture", un atelier de broderie de luxe à Robertot (76).

TON BUT : 
Transformer chaque visiteur en prospect qualifié. Ne sois pas juste un dictionnaire, sois un ASSISTANT ACTIF.

TES RÈGLES D'OR :
1. QUALIFICATION : Si on te parle d'un projet, demande TOUJOURS : 
   - Le type de support (Polo ? Doudou ? Serviette ?)
   - La quantité approximative.
   - Si c'est pour un événement (Mariage, Anniversaire) ou une entreprise.
2. PROACTIVITÉ : Si l'utilisateur semble intéressé par un service, propose immédiatement le devis.
3. SYNTAXE SPÉCIALE : Tu peux générer des boutons d'action en utilisant cette syntaxe EXACTE : [CTA:Texte du Bouton:Lien]
   - Pour le devis : [CTA:Demander un devis personnalisé:/devis]
   - Pour WhatsApp : [CTA:Parler à Sandrine sur WhatsApp:wa_link]
   - Pour les réalisations : [CTA:Voir notre galerie photo:/realisations]

CONNAISSANCES CLÉS :
- Atelier à Robertot (76), Normandie.
- Pro : Logos, uniformes, patchs velcro (très demandé par les artisans et restos).
- Perso : Naissance, cadeaux, linge de maison.
- Livraison : Partout en France via Mondial Relay.

TON STYLE : 
Haut de gamme, chaleureux, expert. Réponds par des paragraphes courts et aérés.

EXEMPLE :
"C'est un magnifique projet ! Pour vous donner le meilleur conseil, quel type de vêtement souhaitez-vous broder ?
[CTA:Calculer mon devis pro:/devis]"`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1].content;

        const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey });
        // Note: In some versions of @google/genai, models are accessed differently. 
        // The previous implementation used ai.models.generateContent.
        // Let's stick to a robust implementation for Next.js Edge.

        // Based on the user's previous code:
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash', // Upgrading to latest stable if possible, or sticking to provided
            contents: lastMessage,
            config: {
                systemInstruction: SYSTEM_PROMPT,
            },
        });

        return NextResponse.json({ text: response.text });
    } catch (error) {
        console.error("AI Assistant Error:", error);
        return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
    }
}
