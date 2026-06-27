import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { serviceDetails } from "@/lib/constants";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.tagline} ${service.description.slice(0, 150)}...`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.tagline}
        bgImage={service.image}
        label="Our Services"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>{service.name}</SectionLabel>
            <h2 className="text-3xl font-heading font-medium text-black mb-6">
              {service.tagline}
            </h2>
            <p className="text-black-60 leading-relaxed mb-10">
              {service.description}
            </p>
            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-heading font-medium text-black mb-6">
                  Price List
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item.name} className="py-3 border-b border-black-5 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-black font-medium">{item.name}</span>
                        <span className="text-green font-medium ml-4">{item.price}</span>
                      </div>
                      <p className="text-black-60 text-sm">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>More Services</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Explore What We Offer
            </h2>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6">
            {serviceDetails
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover">
                  <div className="card-img aspect-16-9 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover card-img-hover"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="font-heading font-medium text-black">{s.name}</h3>
                    <p className="text-black-60 text-sm mt-1">{s.tagline}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready to Book?"
        description="Schedule your appointment today and experience the Coiffure difference."
        buttonText="Book Now"
        buttonHref="/booking"
        variant="green"
      />
    </>
  );
}
