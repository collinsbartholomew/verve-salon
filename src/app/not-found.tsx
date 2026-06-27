import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section flex items-center justify-center" style={{ minHeight: "60vh", textAlign: "center" }}>
      <div className="container">
        <h1 className="font-heading" style={{ fontSize: "72px", fontWeight: 300, marginBottom: "16px" }}>404</h1>
        <p style={{ fontSize: "16px", color: "var(--color-black-60)", marginBottom: "30px" }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
