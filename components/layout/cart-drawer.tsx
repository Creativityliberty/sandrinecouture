"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Plus, Minus, ShoppingCart, MessageCircle, ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

const getColorHex = (name?: string) => {
  if (!name) return "#000000";
  const colors: Record<string, string> = {
    "Vieux rose": "#D4A373",
    "Bleu marine": "#1D3557",
    "Vert sauge": "#A3B19B",
    "Rose poudré": "#E8C5C8",
    "Vert forêt": "#2D5A27",
    "Blanc pur": "#FFFFFF",
    "Blanc": "#FFFFFF",
    "Gris anthracite": "#4A5568",
    "Vert eucalyptus": "#8FBC8F",
    "Rouge Noël": "#C53030",
    "Jaune moutarde": "#ECC94B",
    "Lin naturel": "#E2D9C8",
    "Noir": "#1A202C"
  };
  return colors[name] || "#000000";
};

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart
  } = useCart();

  const [mounted, setMounted] = useState(false);
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [activeDiscount, setActiveDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [promoMessage, setPromoMessage] = useState("");

  // Delivery details state
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  // Prevent hydration warnings and load local settings
  useEffect(() => {
    setMounted(true);
    setFullName(localStorage.getItem("sandrine_couture_fullName") || "");
    setStreetAddress(localStorage.getItem("sandrine_couture_streetAddress") || "");
    setPostalCode(localStorage.getItem("sandrine_couture_postalCode") || "");
    setCity(localStorage.getItem("sandrine_couture_city") || "");
  }, []);

  const handleSaveDeliveryInfo = (name: string, value: string) => {
    if (name === "fullName") {
      setFullName(value);
      localStorage.setItem("sandrine_couture_fullName", value);
    } else if (name === "streetAddress") {
      setStreetAddress(value);
      localStorage.setItem("sandrine_couture_streetAddress", value);
    } else if (name === "postalCode") {
      setPostalCode(value);
      localStorage.setItem("sandrine_couture_postalCode", value);
    } else if (name === "city") {
      setCity(value);
      localStorage.setItem("sandrine_couture_city", value);
    }
  };

  const isDeliveryInfoComplete = fullName.trim() !== "" && streetAddress.trim() !== "" && postalCode.trim() !== "" && city.trim() !== "";

  if (!mounted) return null;

  const applyPromoCode = () => {
    const code = promoCodeInput.trim().toUpperCase();
    if (code === "BIENVENUE10") {
      setActiveDiscount({ code: "BIENVENUE10", percent: 10 });
      setPromoMessage("Code -10% appliqué ! 🎉");
    } else if (code === "NOEL15") {
      setActiveDiscount({ code: "NOEL15", percent: 15 });
      setPromoMessage("Code -15% appliqué ! 🎄");
    } else if (code === "PRO20") {
      setActiveDiscount({ code: "PRO20", percent: 20 });
      setPromoMessage("Code -20% appliqué ! 💼");
    } else {
      setPromoMessage("Code promo invalide ❌");
      setActiveDiscount(null);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    if (!isDeliveryInfoComplete) return;

    let message = `Bonjour Sandrine ! 🧵\nJe souhaite passer commande de produits personnalisés depuis le site. Voici mon panier :\n\n📦 *DÉTAIL DE LA COMMANDE :*\n`;

    cart.forEach((item, index) => {
      message += `-------------------------------\n`;
      message += `${index + 1}. *${item.title}* (Qté: ${item.quantity}) - ${(item.price * item.quantity).toFixed(2)} €\n`;
      if (item.threadColor) {
        message += `   • Couleur tissu : _${item.threadColor}_\n`;
      }
    });

    const cartTotal = getCartTotal();
    message += `-------------------------------\n`;

    if (activeDiscount) {
      const discountAmount = (cartTotal * activeDiscount.percent) / 100;
      const finalTotal = cartTotal - discountAmount;
      message += `🏷️ *CODE PROMO APPLIQUÉ :* ${activeDiscount.code} (-${activeDiscount.percent}%)\n`;
      message += `💰 *TOTAL DE BASE :* ${cartTotal.toFixed(2)} €\n`;
      message += `📉 *REMISE :* -${discountAmount.toFixed(2)} €\n`;
      message += `💰 *TOTAL COMPLET : ${finalTotal.toFixed(2)} €*\n\n`;
    } else {
      message += `💰 *TOTAL GLOBAL : ${cartTotal.toFixed(2)} €*\n\n`;
    }

    message += `📦 *ADRESSE DE LIVRAISON :*\n`;
    message += `👤 Nom : ${fullName.trim()}\n`;
    message += `🏠 Adresse : ${streetAddress.trim()}\n`;
    message += `📮 Code Postal : ${postalCode.trim()}\n`;
    message += `🏙️ Ville : ${city.trim()}\n\n`;

    message += `Est-ce que nous pouvons discuter des modalités ? Merci encore ! ✨`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Clear cart & promo on success
    clearCart();
    setActiveDiscount(null);
    setPromoCodeInput("");
    setPromoMessage("");
    setIsCartOpen(false);
  };

  const cartTotal = getCartTotal();
  const discountAmount = activeDiscount ? (cartTotal * activeDiscount.percent) / 100 : 0;
  const finalTotal = cartTotal - discountAmount;

  return (
    <>
      {/* Backdrop overlay (z-index 200) */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Slide-over panel (z-index 201) */}
      <div
        className={`fixed inset-y-0 right-0 z-[201] w-full sm:max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">
              Votre Panier
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900 focus:outline-none"
            aria-label="Fermer le panier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-1">
                Votre panier est vide
              </h3>
              <p className="text-[10px] text-gray-500 max-w-[220px] font-semibold uppercase tracking-wider leading-relaxed">
                Explorez la boutique et personnalisez vos articles pour les ajouter ici.
              </p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-black/5 pb-5 last:border-0 last:pb-0"
                >
                  {/* Product Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                          aria-label="Retirer l'article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Personalizations summary */}
                      {item.threadColor && (
                        <div className="mt-1.5 space-y-0.5 text-[9px] text-gray-500 font-semibold uppercase tracking-wider bg-gray-50 p-2.5 rounded-lg border border-black/5">
                          <div className="flex items-center gap-1.5">
                            <span>Couleur tissu :</span>
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block shrink-0"
                              style={{ backgroundColor: getColorHex(item.threadColor) }}
                            />
                            <span className="text-black font-bold">{item.threadColor}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quantity and price row */}
                    <div className="flex justify-between items-center mt-3">
                      {/* Qty edit buttons */}
                      <div className="flex items-center border border-black/10 rounded-full py-0.5 px-1 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Subtotal price */}
                      <span className="text-xs font-black text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Formulaire d'adresse de livraison */}
              <div className="border-t border-black/5 pt-6 space-y-4 bg-gray-50/50 p-4 rounded-3xl border border-black/5">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-900">
                  Coordonnées de livraison
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => handleSaveDeliveryInfo("fullName", e.target.value)}
                      placeholder="Ex: Jean Dupont"
                      className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-black/10 focus:outline-none focus:border-primary bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">
                      Adresse de livraison
                    </label>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(e) => handleSaveDeliveryInfo("streetAddress", e.target.value)}
                      placeholder="Ex: 12 Rue de la Paix"
                      className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-black/10 focus:outline-none focus:border-primary bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">
                        Code Postal
                      </label>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => handleSaveDeliveryInfo("postalCode", e.target.value)}
                        placeholder="Ex: 75002"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-black/10 focus:outline-none focus:border-primary bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1">
                        Ville
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => handleSaveDeliveryInfo("city", e.target.value)}
                        placeholder="Ex: Paris"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-black/10 focus:outline-none focus:border-primary bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            
            {/* Shopify-like Promo Code Field */}
            <div className="border-b border-black/5 pb-4">
              <label className="block text-[8px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                Code Promo / Réduction
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Ex: BIENVENUE10"
                    className="w-full pl-9 pr-3 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border border-black/10 focus:outline-none focus:border-primary bg-white"
                  />
                </div>
                <button
                  onClick={applyPromoCode}
                  className="px-4 py-2 bg-black text-white hover:bg-neutral-800 transition-colors rounded-xl text-[9px] font-black uppercase tracking-wider"
                >
                  Appliquer
                </button>
              </div>
              {promoMessage && (
                <p className={`text-[9px] font-bold mt-1.5 uppercase tracking-wide ${
                  activeDiscount ? "text-green-600" : "text-red-500"
                }`}>
                  {promoMessage}
                </p>
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider text-gray-900">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[10px]">Sous-total :</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
              {activeDiscount && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="text-[10px]">Remise ({activeDiscount.code}) :</span>
                  <span>-{discountAmount.toFixed(2)} €</span>
                </div>
              )}
              <div className="flex justify-between items-center border-t border-black/5 pt-3">
                <span>Total complet :</span>
                <span className="text-base font-black text-primary">
                  {finalTotal.toFixed(2)} €
                </span>
              </div>
            </div>

            <p className="text-[9px] text-gray-500 font-bold tracking-wide uppercase leading-relaxed text-center py-1">
              💡 Le panier est transmis à Sandrine sur WhatsApp. Elle vous recontactera pour finaliser le paiement.
            </p>

            <Button
              onClick={handleCheckout}
              disabled={!isDeliveryInfoComplete}
              size="lg"
              className={`w-full h-12 rounded-full uppercase text-[10px] font-black tracking-widest flex items-center justify-center gap-2 shadow-lg ${
                !isDeliveryInfoComplete ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300" : ""
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Acheter via WhatsApp
            </Button>
            {!isDeliveryInfoComplete && (
              <p className="text-[8px] text-red-500 font-bold tracking-wide uppercase text-center mt-1">
                ⚠️ Veuillez remplir vos coordonnées de livraison ci-dessus pour commander
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
