import Link from "next/link";
import { serviceCategories } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CoiffureServicesSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel centered>Our Services</SectionLabel>
          <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
            What We Offer
          </h2>
          <p className="text-black-60 mt-3 max-w-xl mx-auto">
            From hair styling to nail art, we provide a full range of beauty services.
          </p>
        </div>
        <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div key={cat.category} className="card card-hover">
              <div className="card-body">
                <h3 className="font-heading font-medium text-xl text-black mb-4">
                  {cat.category}
                </h3>
                <ul className="space-y-3 mb-6">
                  {cat.services.map((s) => (
                    <li key={s.name} className="flex justify-between text-sm">
                      <span className="text-black-70">{s.name}</span>
                      <span className="text-green font-medium">{s.price}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="learn-more-link group-hover:text-black">
                  View all {cat.category.toLowerCase()} services
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
