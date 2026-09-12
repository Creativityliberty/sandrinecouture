export interface ProductVariant {
  name: string;
  badge: string;
  images: {
    closed: string;
    open: string;
  };
}

export interface ProductVideo {
  id: string;
  title: string;
  badge?: string;
  url: string;
  poster: string;
  format: "vertical" | "horizontal";
  duration: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  price: number;
  category: "Bébé" | "Accessoires" | "Bain" | "Maison";
  description: string;
  badge: string;
  spec: string;
  imgUrl: string;
  videoUrl?: string;
  videoPoster?: string;
  videos?: ProductVideo[];
  details?: {
    howItWorks?: string[];
    capacity?: string[];
    dimensions?: string;
    care?: string;
  };
  variants?: ProductVariant[];
  colors: { name: string; hex: string }[];
  fonts: string[];
  customizable?: boolean;
}

export interface QuickReply {
  id: string;
  label: string;
  payload: string;
}

export interface QuoteDraft {
  sector: string;
  garmentType: string;
  quantity: number;
  customization: string;
  deadline?: string;
  notes?: string;
}

export type ChatBlock =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "products";
      products: Product[];
    }
  | {
      type: "quick_replies";
      options: QuickReply[];
    }
  | {
      type: "product_configurator";
      product: Product;
    }
  | {
      type: "quote";
      quote: QuoteDraft;
    }
  | {
      type: "actions";
      actions: {
        label: string;
        url?: string;
        actionType: "link" | "wa" | "cart" | "devis";
      }[];
    };

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  blocks: ChatBlock[];
}

export interface OpportunityState {
  intent?: "browse" | "shopping" | "custom" | "b2b" | "support";
  budgetMax?: number;
  quantity?: number;
  sector?: string;
  occasion?: string;
  targetProduct?: string;
}
