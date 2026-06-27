import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Barber",
  description: "the BARBERSHOP - Expert grooming at Coiffure.",
};

export default function BarberPage() {
  const barberServices = [
    { name: "Classic Haircut", price: "$35" },
    { name: "Beard Trim & Shape", price: "$25" },
    { name: "Hot Towel Shave", price: "$30" },
    { name: "Haircut & Beard Combo", price: "$50" },
    { name: "Kid's Haircut", price: "$25" },
    { name: "Senior Haircut", price: "$30" },
  ];

  return (
    <>
      <PageHero
        title="the BARBERSHOP"
        subtitle="Classic cuts and modern styles for the modern gentleman."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/barber-hero.jpg"
        label="Barber Services"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Barber</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Barber Services
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="card-body">
                <ul className="space-y-4">
                  {barberServices.map((s) => (
                    <li
                      key={s.name}
                      className="flex justify-between items-center py-2 border-b border-black-5 last:border-0"
                    >
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
      <CtaSection
        title="Book Your Barber Appointment"
        description="Walk-ins welcome. Appointments recommended for weekends."
        buttonText="Book Now"
        buttonHref="/contact"
      />
    </>
  );
}
