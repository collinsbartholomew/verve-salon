import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { serviceCategories } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Coiffure hair and beauty services - hair styling, barber, beauty treatments, and nail art.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Premium hair, beauty, and nail services tailored to you."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="What We Offer"
      />
      {serviceCategories.map((cat) => (
        <section key={cat.category} className="section section-light">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel centered>{cat.category}</SectionLabel>
              <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
                {cat.category} Services
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="card-body">
                  <ul className="space-y-4">
                    {cat.services.map((s) => (
                      <li key={s.name} className="flex justify-between items-center py-2 border-b border-black-5 last:border-0">
                        <span className="text-black font-medium">{s.name}</span>
                        <span className="text-green font-medium">{s.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <CtaSection
        title="Ready to Book?"
        description="Schedule your appointment today and experience the Coiffure difference."
        buttonText="Book Now"
        buttonHref="/contact"
        variant="green"
      />
    </>
  );
}
