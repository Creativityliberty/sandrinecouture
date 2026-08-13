"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Plus, Minus, ShoppingCart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

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

  // Prevent hydration warnings
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `Bonjour Sandrine ! 🧵\nJe souhaite passer commande de produits personnalisés depuis le site. Voici mon panier :\n\n📦 *DÉTAIL DE LA COMMANDE :*\n`;

    cart.forEach((item, index) => {
      message += `-------------------------------\n`;
      message += `${index + 1}. *${item.title}* (Qté: ${item.quantity}) - ${(item.price * item.quantity).toFixed(2)} €\n`;
      if (item.textToEmbroider) {
        message += `   • Prénom/Texte : _${item.textToEmbroider}_\n`;
      }
      if (item.threadColor) {
        message += `   • Couleur fil : _${item.threadColor}_\n`;
      }
      if (item.font) {
        message += `   • Police : _${item.font}_\n`;
      }
      if (item.customLogoUrl) {
        message += `   • Logo personnalisé : ${item.customLogoUrl}\n`;
      }
    });

    message += `-------------------------------\n`;
    message += `💰 *TOTAL GLOBAL : ${getCartTotal().toFixed(2)} €*\n\n`;
    message += `Merci de m'envoyer les détails pour le règlement afin de valider ma commande ! ✨`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Optional: Clear cart after redirect
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Slide-over panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="text-base font-black uppercase tracking-wider text-gray-900">
              Votre Panier
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900"
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
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                Votre panier est vide
              </h3>
              <p className="text-xs text-gray-500 max-w-[250px]">
                Explorez la boutique et personnalisez vos articles pour les ajouter ici.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
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
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide line-clamp-1">
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
                    <div className="mt-1.5 space-y-0.5 text-[10px] text-gray-500 font-semibold uppercase tracking-wider bg-gray-50 p-2.5 rounded-lg border border-black/5">
                      {item.textToEmbroider && (
                        <div>Texte : <span className="text-black italic font-bold">"{item.textToEmbroider}"</span></div>
                      )}
                      {item.threadColor && (
                        <div className="flex items-center gap-1">Fil : <span className="text-black font-bold">{item.threadColor}</span></div>
                      )}
                      {item.font && (
                        <div>Typo : <span className="text-black font-bold">{item.font}</span></div>
                      )}
                      {item.customLogoName && (
                        <div className="flex items-center gap-1 text-primary">
                          <span>Logo : {item.customLogoName}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity and price row */}
                  <div className="flex justify-between items-center mt-3">
                    {/* Qty edit buttons */}
                    <div className="flex items-center border border-black/10 rounded-full py-0.5 px-1 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
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
            ))
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider text-gray-900">
              <span>Total :</span>
              <span className="text-base font-black text-primary">
                {getCartTotal().toFixed(2)} €
              </span>
            </div>

            <p className="text-[10px] text-gray-500 font-semibold leading-relaxed text-center">
              💡 Votre commande sera validée et finalisée en direct avec Sandrine sur WhatsApp. Aucun paiement n'est requis en ligne.
            </p>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full h-12 rounded-full uppercase text-[10px] font-black tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Acheter via WhatsApp
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
