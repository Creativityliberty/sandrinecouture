"use client"

import { ParticuliersPage } from "@/components/particuliers-page"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function Page() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
            <Navbar />
            <main>
                <ParticuliersPage />
            </main>
            <AIAssistant />
            <Footer />
        </div>
    )
}
