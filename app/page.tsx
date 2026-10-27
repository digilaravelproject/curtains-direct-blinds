import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductRangeSection } from "@/components/sections/ProductRangeSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { RecentInstallationsSection } from "@/components/sections/RecentInstallationsSection";
import { MelbourneServiceAreaSection } from "@/components/sections/MelbourneServiceAreaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BottomConsultationSection } from "@/components/sections/BottomConsultationSection";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingBar } from "@/components/layout/MobileFloatingBar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Announcement Trust Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Navbar />

      {/* 3. Hero Section with Get Your Free Quote Card Above The Fold */}
      <HeroSection />

      {/* 4. Trust Badges & 30+ Years Experience Bar */}
      <TrustBar />

      {/* 5. Our Range: Custom Curtains, Roller Blinds & Motorised Blinds */}
      <ProductRangeSection />

      {/* 6. Why Choose Us: Trusted by Melbourne Homeowners */}
      <WhyChooseUsSection />

      {/* 7. Recent Installations: Real Homes. Real Results. */}
      <RecentInstallationsSection />

      {/* 8. Melbourne & Surrounding Suburbs Service Area */}
      <MelbourneServiceAreaSection />

      {/* 9. Testimonials: What Our Customers Say */}
      <TestimonialsSection />

      {/* 10. How It Works: Simple 4-Step Process */}
      <HowItWorksSection />

      {/* 11. Frequently Asked Questions & Callout Card */}
      <FaqSection />

      {/* 12. Bottom Consultation Banner with Quick Form */}
      <BottomConsultationSection />

      {/* 13. Site Footer */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Action Bar */}
      <MobileFloatingBar />
    </main>
  );
}
