import { testimonials } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CoiffureTestimonialsSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel centered>Testimonials</SectionLabel>
          <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md-grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <p className="font-medium text-sm text-black">{t.name}</p>
                  <p className="text-black-50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
