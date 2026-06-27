import type { Metadata } from "next";
import CoiffureHeroSection from "@/components/sections/CoiffureHeroSection";
import CoiffureAboutSection from "@/components/sections/CoiffureAboutSection";
import CoiffureServicesSection from "@/components/sections/CoiffureServicesSection";
import CoiffureTeamSection from "@/components/sections/CoiffureTeamSection";
import CoiffureTestimonialsSection from "@/components/sections/CoiffureTestimonialsSection";
import CoiffureGallerySection from "@/components/sections/CoiffureGallerySection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Coiffure",
  description: "Be beautiful. Be you.",
};

export default function HomePage() {
  return (
    <>
      <CoiffureHeroSection />
      <CoiffureAboutSection />
      <CoiffureServicesSection />
      <CoiffureTeamSection />
      <CoiffureTestimonialsSection />
      <CoiffureGallerySection />
      <CtaSection
        title="Ready for a New Look?"
        description="Book your appointment today and let our expert team transform your style."
        buttonText="Book Now"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
