"use client"

import React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { RealisationsPage } from "@/components/pages/realisations-page"
import { AIAssistant } from "@/components/layout/ai-assistant"
import { ReelsCarousel } from "@/components/home/reels-carousel"
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll"

export default function Realisations() {
    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
            <Navbar />
            <RealisationsPage />
            <RevealOnScroll direction="up" delay={80}>
                <ReelsCarousel />
            </RevealOnScroll>
            <AIAssistant />
            <Footer />
        </div>
    )
}
