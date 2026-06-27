import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { serviceCategories } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Hair Salon",
  description: "Look & Feel Your Best - Expert hair styling at Coiffure.",
};

export default function HairSalonPage() {
  const hairServices = serviceCategories.find((c) => c.category === "Hair");

  return (
    <>
      <PageHero
        title="Hair Salon"
        subtitle="Expert cuts, color, and styling to transform your look."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/hair-salon-hero.jpg"
        label="Hair Services"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Hair</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Our Hair Services
            </h2>
          </div>
          {hairServices && (
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="card-body">
                  <ul className="space-y-4">
                    {hairServices.services.map((s) => (
                      <li key={s.name} className="flex justify-between items-center py-2 border-b border-black-5 last:border-0">
                        <span className="text-black font-medium">{s.name}</span>
                        <span className="text-green font-medium">{s.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaSection
        title="Book Your Hair Appointment"
        description="Let our expert stylists create your perfect look."
        buttonText="Book Now"
        buttonHref="/contact"
      />
    </>
  );
}
