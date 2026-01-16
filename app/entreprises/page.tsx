"use client"

import { EntreprisesPage } from "@/components/entreprises-page"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

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
