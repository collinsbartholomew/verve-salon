import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "light" | "green" | "dark";
  secondaryButton?: { text: string; href: string };
};

const variantStyles = {
  default: { section: "", titleColor: "text-black", descColor: "text-black-60" },
  light: { section: "section-light", titleColor: "text-black", descColor: "text-black-60" },
  green: { section: "bg-green", titleColor: "text-white", descColor: "text-white-70" },
  dark: { section: "bg-dark", titleColor: "text-white", descColor: "text-white-60" },
};

export default function CtaSection({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/contact",
  variant = "default",
  secondaryButton,
}: CtaSectionProps) {
  const styles = variantStyles[variant];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container text-center">
        <h2 className={`text-3xl lg-text-4xl font-heading font-medium ${styles.titleColor} mb-6`}>
          {title}
        </h2>
        {description && (
          <p className={`${styles.descColor} max-w-xl mx-auto mb-8`}>
            {description}
          </p>
        )}
        <div className="flex justify-center gap-4">
          <Link href={buttonHref} className="btn btn-primary">
            {buttonText}
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href} className="btn btn-outline">
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
