"use client"

import { DevisPage } from "@/components/pages/devis-page"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AIAssistant } from "@/components/layout/ai-assistant"

export default function Page() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
            <Navbar />
            <main>
                <DevisPage />
            </main>
            <AIAssistant />
            <Footer />
        </div>
    )
}
