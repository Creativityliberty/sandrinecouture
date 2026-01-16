"use client"

import { DevisPage } from "@/components/devis-page"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

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
