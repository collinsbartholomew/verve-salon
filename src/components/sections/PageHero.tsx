interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  solidBg?: "green";
  label?: string;
  minHeight?: string;
}

export default function PageHero({ title, subtitle, bgImage, solidBg, label, minHeight }: PageHeroProps) {
  return (
    <section
      className={`page-hero ${minHeight ? "" : ""}`}
      style={{
        ...(solidBg === "green" ? { background: "linear-gradient(135deg, var(--color-primary), rgba(60, 162, 0, 0.9))" } : {}),
        ...(minHeight ? { minHeight } : {}),
      }}
    >
      {bgImage && (
        <>
          <div
            className="page-hero-bg"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="page-hero-overlay" />
        </>
      )}
      <div className="container page-hero-content relative z-10">
        {label && (
          <div className="section-label">
            <span className="section-label-line" />
            <span className="section-label-text text-white-70">{label}</span>
          </div>
        )}
        <h1 className="text-4xl lg-text-6xl font-heading font-medium text-white leading-tight max-w-[700px]">{title}</h1>
        {subtitle && <p className="text-white-80 text-lg mt-4 max-w-[500px]">{subtitle}</p>}
      </div>
    </section>
  );
}
