import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import { serviceCategories, testimonials } from "@/lib/constants";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Salon",
  description: "Discover Coiffure - New York's premier hair and beauty salon. Expert stylists, luxurious services, and an unforgettable experience.",
};

export default function SalonPage() {
  return (
    <>
      <PageHero
        title="Our Salon"
        subtitle="Where artistry meets luxury in the heart of New York."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="Welcome"
      />
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image overflow-hidden rounded-2xl">
              <img
                src="https://coiffure.vamtam.com/wp-content/uploads/2023/10/about-salon.jpg"
                alt="Coiffure salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SectionLabel>About the Salon</SectionLabel>
              <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black mb-6">
                A Place for Transformation
              </h2>
              <p className="text-black-70 leading-relaxed mb-6">
                At Coiffure, every visit is more than a service — it's an experience.
                From the moment you walk through our doors, our team is dedicated to
                making you feel welcomed, inspired, and confident.
              </p>
              <p className="text-black-70 leading-relaxed mb-8">
                Our salon combines modern luxury with timeless artistry. We invest in
                ongoing education, premium products, and the latest techniques to ensure
                every client receives exceptional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn btn-primary">
                  View Services
                </Link>
                <Link href="/salon/team" className="btn btn-ghost">
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Our Services</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              What We Offer
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              From expert cuts and color to relaxing beauty treatments, we have everything you need.
            </p>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-4 gap-6">
            {serviceCategories.map((cat) => (
              <Link key={cat.category} href={`/services/${cat.category.toLowerCase()}`} className="card card-hover text-center">
                <div className="card-body">
                  <h3 className="font-heading font-medium text-black">{cat.category}</h3>
                  <p className="text-black-60 text-sm mt-1">{cat.services.length} services</p>
                </div>
              </Link>
            ))}
            <Link href="/services" className="card card-hover text-center">
              <div className="card-body">
                <h3 className="font-heading font-medium text-green">All Services</h3>
                <p className="text-black-60 text-sm mt-1">View complete menu</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Testimonials</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="card-body">
                  <p className="text-black-70 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-black text-sm">{t.name}</p>
                      <p className="text-black-60 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Visit Us Today"
        description="Experience the Coiffure difference. Book your appointment and let our team create your perfect look."
        buttonText="Book Now"
        buttonHref="/booking"
        secondaryButton={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
