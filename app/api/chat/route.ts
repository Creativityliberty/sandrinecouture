import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = 'edge';

const SYSTEM_PROMPT = `Tu es l'expert-conseil de "By Sandrine Couture", un atelier de broderie artisanale haut de gamme situé à Robertot (76), en Normandie.

TA MISSION : 
Assister les visiteurs, répondre à leurs questions techniques sur la broderie et les orienter vers les bons services.

TES CONNAISSANCES :
1. LOCALISATION : Atelier à Robertot (76560), Normandie. Proche d'Yvetot, Rouen et Dieppe.
2. SERVICES PRO : Broderie de logos sur uniformes (polos, tabliers, sweats, casquettes, bonnets) et patchs velcro. Idéal pour barmen, artisans, clubs sportifs.
3. SERVICES PERSO : Cadeaux de naissance personnalisés (doudous, bavoirs, couvertures, protège carnet de santé), linge de maison (peignoirs, serviettes).
4. LIVRAISON : Expédition sécurisée partout en France et Europe. Partenaire Mondial Relay.
5. QUALITÉ : Travail artisanal, couture durable, rendu premium. Chaque demande est traitée personnellement par Sandrine.

TON TON :
Accueillant, professionnel, fier de l'artisanat français. Sois concis et structuré.

DIRECTIVES SPÉCIALES :
- Si l'utilisateur veut un prix, explique que chaque projet est unique et invite-le à utiliser le bouton "Faire un devis".
- Si l'utilisateur veut parler directement, suggère "WhatsApp".
- Utilise des emojis avec parcimonie pour rester pro. 🧵✨`;

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
