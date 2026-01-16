import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/site-config';

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-white" suppressHydrationWarning>
            <Navbar />
            <div className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
                    <h1 className="text-4xl md:text-5xl mb-12">Mentions Légales</h1>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">1. Éditeur de la Plateforme</h2>
                        <p className="text-gray-600 leading-relaxed italic">
                            Le site <strong>{SITE_CONFIG.name}</strong> est édité par :
                        </p>
                        <ul className="list-none p-0 text-gray-600">
                            <li><strong>Nom :</strong> Sandrine [Nom de famille à compléter]</li>
                            <li><strong>Forme juridique :</strong> Auto-entrepreneur / Micro-entreprise</li>
                            <li><strong>Siège social :</strong> Robertot, 76560, Normandie, France</li>
                            <li><strong>SIRET :</strong> [Numéro SIRET à compléter]</li>
                            <li><strong>Email :</strong> {SITE_CONFIG.email}</li>
                            <li><strong>Téléphone :</strong> {SITE_CONFIG.phone}</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">2. Directeur de la publication</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Le directeur de la publication du site est Sandrine [Nom].
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">3. Hébergement</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Le site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723<br />
                            États-Unis
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">4. Propriété intellectuelle</h2>
                        <p className="text-gray-600 leading-relaxed">
                            L'ensemble des contenus (textes, images, graphismes, logo, icônes) présents sur le site sont la propriété exclusive de <strong>{SITE_CONFIG.name}</strong>, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Sandrine [Nom].
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl mb-4">5. Données personnelles</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Pour en savoir plus sur la collecte et le traitement de vos données, veuillez consulter notre <a href="/confidentialite" className="text-primary underline">Politique de Confidentialité</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
