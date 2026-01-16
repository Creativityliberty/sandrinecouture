"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RealisationsPage } from "@/components/realisations-page"
import { AIAssistant } from "@/components/ai-assistant"

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
