import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Confidentialite() {
    return (
        <main className="min-h-screen bg-white" suppressHydrationWarning>
            <Navbar />
            <div className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
                    <h1 className="text-4xl md:text-5xl mb-12">Politique de Confidentialité</h1>

                    <p className="text-gray-500 mb-8 italic">Dernière mise à jour : 16 janvier 2026</p>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Chez <strong>{SITE_CONFIG.name}</strong>, nous accordons une importance capitale à la protection de vos données personnelles. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">2. Données collectées</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Nous collectons les données que vous nous fournissez volontairement via notre formulaire de devis ou de contact :
                        </p>
                        <ul className="text-gray-600">
                            <li>Nom et Prénom</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone</li>
                            <li>Détails relatifs à votre demande de broderie (texte, images, etc.)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">3. Utilisation des données</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Vos données sont uniquement utilisées pour :
                        </p>
                        <ul className="text-gray-600">
                            <li>Répondre à vos demandes de devis et de renseignements</li>
                            <li>Gérer la relation commerciale (exécution des commandes, facturation)</li>
                            <li>Vous contacter dans le cadre de votre projet de personnalisation</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">4. Conservation des données</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Vos informations sont conservées pendant la durée nécessaire à la finalisation de votre commande et pour une durée maximale de 3 ans après notre dernier contact à des fins de suivi client.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">5. Vos droits</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Conformément à la réglementation RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles. Pour exercer ce droit, écrivez-nous à : <strong>{SITE_CONFIG.email}</strong>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
