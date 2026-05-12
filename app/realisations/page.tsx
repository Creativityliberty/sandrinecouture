"use client"

import React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { RealisationsPage } from "@/components/pages/realisations-page"
import { AIAssistant } from "@/components/layout/ai-assistant"

export default function Realisations() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
            <Navbar />
            <RealisationsPage />
            <AIAssistant />
            <Footer />
        </div>
    )
}
