import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CoiffureAboutSection() {
  return (
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
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black mb-6">
              Welcome to Coiffure
            </h2>
            <p className="text-black-70 leading-relaxed mb-6">
              We started as a small beauty studio in Brooklyn, New York. Our main idea was to create
              the best beauty studio in the world. Can there be compromises in the best studio in the
              world? Our answer is always no. We care about the best quality, hire specialists, and
              provide customer service.
            </p>
            <p className="text-black-70 leading-relaxed mb-8">
              This approach allowed us to grow and create an excellent team passionate about
              everything we do.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn btn-primary">
                View All Services
              </Link>
              <Link href="/salon/team" className="btn btn-ghost">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
