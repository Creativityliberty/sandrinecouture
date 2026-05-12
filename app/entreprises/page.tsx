"use client"

import { EntreprisesPage } from "@/components/pages/entreprises-page"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AIAssistant } from "@/components/layout/ai-assistant"

export default function Page() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
            <Navbar />
            <main>
                <EntreprisesPage />
            </main>
            <AIAssistant />
            <Footer />
        </div>
    )
}
