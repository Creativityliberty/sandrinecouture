"use client"

import { ParticuliersPage } from "@/components/pages/particuliers-page"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AIAssistant } from "@/components/layout/ai-assistant"

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
