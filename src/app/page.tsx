import React from "react";
import { Navbar } from "@/components/navbar";
import { PartnerSection } from "@/components/brands-section";
import { Footer } from "@/components/footer";
import { ServiceSection } from "@/components/service-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <ServiceSection />
      <PartnerSection />
      <CTASection />

      <Footer />
    </div>
  );
}
