import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/site-config';

export default function CGV() {
    return (
        <main className="min-h-screen bg-white" suppressHydrationWarning>
            <Navbar />
            <div className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
                    <h1 className="text-4xl md:text-5xl mb-12">Conditions Générales de Vente</h1>

                    <p className="text-gray-500 mb-8 italic">Applicables à compter du 16 janvier 2026</p>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">1. Objet</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les présentes Conditions Générales de Vente (CGV) régissent les prestations de broderie personnalisée proposées par <strong>{SITE_CONFIG.name}</strong> à ses clients (professionnels et particuliers).
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">2. Commandes et Devis</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Toute prestation donne lieu à l'établissement d'un devis gratuit. La validation du devis par le client vaut acceptation ferme de la commande. Pour les produits personnalisés (prénoms, logos spécifiques), aucun droit de rétractation ne peut être exercé une fois la broderie commencée.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">3. Tarifs et Paiement</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les prix sont indiqués en Euros. En tant qu'auto-entrepreneur, la TVA est non applicable (article 293 B du CGI). Le règlement s'effectue selon les modalités précisées sur le devis (virement, chèque ou espèces).
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">4. Livraison</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Les produits peuvent être retirés à l'atelier (Robertot) ou expédiés par transporteur. Les délais de livraison sont donnés à titre indicatif et peuvent varier selon la charge de travail de l'atelier.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">5. Responsabilité et Garantie</h2>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>{SITE_CONFIG.name}</strong> s'engage à réaliser une prestation de qualité. Toutefois, la responsabilité ne saurait être engagée en cas de mauvaise utilisation ou entretien du textile brodé par le client.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">6. Litiges</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Tout litige relatif à l'interprétation ou à l'exécution des présentes CGV est soumis au droit français. À défaut de résolution amiable, les tribunaux compétents seront ceux de la juridiction de Rouen.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
