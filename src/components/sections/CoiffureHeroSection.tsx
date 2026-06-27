import Link from "next/link";

export default function CoiffureHeroSection() {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://coiffure.vamtam.com/wp-content/uploads/2023/10/gabrielle-henderson-e5XjqAnVejo-unsplash-1-1.jpg')",
        }}
      />
      <div className="hero-overlay" />
      <div className="container relative z-10">
        <div className="hero-content">
          <div className="section-label">
            <span className="section-label-line bg-primary" />
            <span className="section-label-text text-primary">
              Premium Hair & Beauty
            </span>
          </div>
          <h1 className="hero-title">
            Be beautiful. Be you.
          </h1>
          <p className="hero-subtitle">
            Coiffure - Hair Salon. Where style meets artistry.
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
            <Link href="/gallery" className="btn btn-outline">
              Our Gallery
            </Link>
          </div>
          <div className="hero-reviews">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://coiffure.vamtam.com/wp-content/uploads/2023/10/testimonial-${i}.jpg`}
                  alt=""
                  className="hero-avatar"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-lg">4.9</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--color-primary)">
                  <path d="M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.49l-4.94 2.7L4 9.71 0 5.81l5.53-.8z" />
                </svg>
              </div>
              <p className="text-white-60 text-xs">200+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
