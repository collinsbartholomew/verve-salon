import { galleryImages } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CoiffureGallerySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel centered>Gallery</SectionLabel>
          <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
            Our Work
          </h2>
        </div>
        <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="card card-img overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-4-3 object-cover card-img-hover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
