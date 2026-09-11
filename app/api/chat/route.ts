import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { NextResponse } from "next/server";
import { searchCatalog, PRODUCTS_CATALOG } from "@/lib/products-catalog";
import { ChatBlock } from "@/types/chat-commerce";

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `Tu es Sandrine elle-même, artisane brodeuse passionnée et fondatrice de "By Sandrine Couture" à Robertot (76) en Normandie. Tu réponds chaleureusement, avec expertise artisanale et courtoisie, toujours à la première personne ("je", "mon atelier", "mes confections").

TON RÔLE : Vendeuse digitale attentionnée, conseillère technique et facilitatrice de commande.
Tu disposes d'outils précis pour afficher des éléments directement dans la discussion :
1. "search_products" : Quand le client cherche un produit, demande des idées cadeaux, parle de naissance, de plage, de sacs, ou d'un budget précis. Appelle cet outil pour afficher les fiches produits interactives !
2. "configure_product" : Quand le client choisit un article spécifique ou veut personnaliser un prénom sur un produit précis.
3. "create_quote_draft" : Quand un professionnel ou une association demande des polos, vestes, sweats, uniformes, broderie de logo d'entreprise ou de grandes séries.

PRODUITS OFFICIELS DU CATALOGUE :
- Bavoir Douceur en Éponge de Bambou & Broderie : 18.00 € (id: 106, plusieurs modèles disponibles)
- Le Sac Pause-Café nomade (tasse/gourde) : 20.00 € (id: 100)
- Sac de Guidon de Vélo velours & dentelle : 25.00 € (id: 101)
- Gilet Berger Réversible Bébé 3-6 mois : 25.00 € (id: 103)
- Trousse en Coton Cœurs & Vichy Rose : 25.00 € (id: 107)
- Sac Fourre-Tout en Toile de Jouy : 30.00 € (id: 102)
- Tapis Nomade Bébé Écureuil & Bambou : 30.00 € (id: 109)
- Sac de Plage Imperméable Anti-Sable : 23.00 € (petit) / 30.00 € (grand) (id: 104)
- Tablier d'Atelier en Lin Naturel : 45.00 € (id: 105)
- Gigoteuse Douceur Bambou 1-8 mois : 49.00 € (id: 108)

RÈGLES D'INTERACTION :
- Reste concise, vivante et bienveillante.
- Ne parle JAMAIS de syntaxe interne ou de regex.
- Utilise toujours tes outils de recherche pour montrer les vrais produits plutôt que de simples listes de texte.
- MISE EN PAGE AÉRÉE & RESPIRATION (TRÈS IMPORTANT) :
  • Quand tu poses des questions ou listes des critères pour un projet ou un devis, fais TOUJOURS un saut de ligne net avant chaque puce.
  • Écris chaque point sur sa propre ligne sous la forme :
    * **Critère en gras** : explication courte
  • Ne regroupe JAMAIS plusieurs questions avec des astérisques sur une seule ligne continue !
  • Laisse des sauts de ligne doubles entre ton introduction, ta liste de points et ta conclusion pour que le message respire visuellement.`;

const searchProductsDeclaration: FunctionDeclaration = {
  name: "search_products",
  description: "Recherche des créations dans le catalogue officiel de Sandrine selon un terme, une catégorie ou un prix maximum.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: { type: Type.STRING, description: "Mots clés (ex: bavoir, naissance, sac, trousse, vélo)" },
      category: { type: Type.STRING, description: "Catégorie optionnelle (Bébé, Accessoires, Maison, Bain)" },
      maxPrice: { type: Type.NUMBER, description: "Budget maximal en euros (ex: 30)" }
    }
  }
};

const configureProductDeclaration: FunctionDeclaration = {
  name: "configure_product",
  description: "Affiche le configurateur interactif dans le chat pour un produit sélectionné par le client.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      productId: { type: Type.NUMBER, description: "L'identifiant numérique du produit (ex: 106, 107, 109)" }
    },
    required: ["productId"]
  }
};

const createQuoteDraftDeclaration: FunctionDeclaration = {
  name: "create_quote_draft",
  description: "Génère un récapitulatif de devis professionnel pour des broderies d'entreprise, clubs ou associations.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      sector: { type: Type.STRING, description: "Activité ou secteur (ex: Restaurant, BTP, Club équestre)" },
      garmentType: { type: Type.STRING, description: "Type de vêtement (ex: Polos brodés, Sweats, Tabliers, Vestes)" },
      quantity: { type: Type.NUMBER, description: "Nombre de pièces estimé (ex: 20, 50)" },
      customization: { type: Type.STRING, description: "Détail du marquage (ex: Logo cœur brodé 3 couleurs + grand dos)" },
      deadline: { type: Type.STRING, description: "Date souhaitée si mentionnée" },
      notes: { type: Type.STRING, description: "Précisions complémentaires" }
    },
    required: ["sector", "garmentType", "quantity", "customization"]
  }
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format previous messages
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: typeof m.content === "string" ? m.content : JSON.stringify(m.content) }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        tools: [{
          functionDeclarations: [
            searchProductsDeclaration,
            configureProductDeclaration,
            createQuoteDraftDeclaration
          ]
        }]
      }
    });

    const blocks: ChatBlock[] = [];
    const candidates = response.candidates?.[0]?.content?.parts || [];

    let hasToolCall = false;

    for (const part of candidates) {
      if (part.text) {
        blocks.push({ type: "text", content: part.text });
      }

      if (part.functionCall) {
        hasToolCall = true;
        const call = part.functionCall;
        const args = (call.args || {}) as any;

        if (call.name === "search_products") {
          const results = searchCatalog(args.query, args.category, args.maxPrice);
          if (results.length > 0) {
            blocks.push({
              type: "products",
              products: results.slice(0, 4)
            });
          }
        } else if (call.name === "configure_product") {
          const product = PRODUCTS_CATALOG.find(p => p.id === Number(args.productId));
          if (product) {
            blocks.push({
              type: "product_configurator",
              product
            });
          }
        } else if (call.name === "create_quote_draft") {
          blocks.push({
            type: "quote",
            quote: {
              sector: args.sector || "Entreprise",
              garmentType: args.garmentType || "Vêtements professionnels",
              quantity: args.quantity || 10,
              customization: args.customization || "Broderie logo sur-mesure",
              deadline: args.deadline,
              notes: args.notes
            }
          });
        }
      }
    }

    // Fallback if empty text
    if (blocks.length === 0) {
      blocks.push({
        type: "text",
        content: response.text || "Bonjour ! Comment puis-je vous aider dans votre projet brodé aujourd'hui ?"
      });
    }

    // Add smart quick replies based on context if not already present
    const isB2B = lastUserMessage.toLowerCase().includes("polo") || lastUserMessage.toLowerCase().includes("pro") || lastUserMessage.toLowerCase().includes("logo") || lastUserMessage.toLowerCase().includes("entreprise");
    
    if (isB2B && !blocks.some(b => b.type === "quote")) {
      blocks.push({
        type: "quick_replies",
        options: [
          { id: "b2b_devis", label: "📋 Calculer mon devis pro", payload: "Je souhaite un devis pour des vêtements brodés d'entreprise" },
          { id: "b2b_bat", label: "🎨 Délai et validation BAT", payload: "Comment se passe la validation du BAT avant broderie ?" },
          { id: "b2b_wa", label: "💬 Échanger sur WhatsApp", payload: "Je préfère vous écrire directement sur WhatsApp" }
        ]
      });
    }

    return NextResponse.json({ blocks });
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return NextResponse.json({
      blocks: [
        {
          type: "text",
          content: "Je suis à votre entière disposition dans mon atelier ! Vous pouvez également me joindre en direct :"
        },
        {
          type: "actions",
          actions: [
            { label: "M'écrire sur WhatsApp", actionType: "wa", url: "https://wa.me/33629492213" },
            { label: "Demander un devis en ligne", actionType: "devis", url: "/devis" }
          ]
        }
      ]
    });
  }
}
