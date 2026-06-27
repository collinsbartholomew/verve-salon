import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { galleryImages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our portfolio of stunning hair transformations, color work, and styling at Coiffure salon.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="A showcase of our finest work and salon atmosphere."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-1.jpg"
        label="Portfolio"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Gallery</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Our Work Speaks for Itself
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              Browse through our portfolio of hair transformations, color artistry, and styling creations.
            </p>
          </div>
          <div className="grid grid-cols-2 md-grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Follow Us</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              See More on Instagram
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              Follow @verve for daily inspiration and behind-the-scenes content.
            </p>
          </div>
          <div className="grid grid-cols-3 md-grid-cols-6 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready for a Transformation?"
        description="Book your appointment and let our team create your next look."
        buttonText="Book Now"
        buttonHref="/booking"
      />
    </>
  );
}
