"use client";

import { OurletsServicePage } from "@/components/pages/ourlets-service-page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIAssistant } from "@/components/layout/ai-assistant";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

export default function Page() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
      <Navbar />
      <main>
        <RevealOnScroll direction="up" delay={50}>
          <OurletsServicePage />
        </RevealOnScroll>
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}
