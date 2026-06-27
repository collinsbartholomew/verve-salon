import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { products } from "@/lib/constants";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.shortDescription} ${product.fullDescription.slice(0, 150)}...`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.brand}
        bgImage={product.image}
        label="Products"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md-flex-row gap-10 items-start">
              <div className="w-full md-w-1-2 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <SectionLabel>{product.category}</SectionLabel>
                <h2 className="text-3xl font-heading font-medium text-black mb-2">
                  {product.name}
                </h2>
                <p className="text-green font-medium mb-4">{product.brand}</p>
                <p className="text-2xl font-medium text-black mb-6">{product.price}</p>
                <p className="text-black-60 leading-relaxed mb-6">
                  {product.fullDescription}
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-black-80">
                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Inquire Now
                  </Link>
                  <Link href="/products" className="btn btn-outline">
                    All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>More Products</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Explore Our Collection
            </h2>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-4 gap-6">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="card card-hover text-center">
                  <div className="card-img aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover card-img-hover"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="font-heading font-medium text-black">{p.name}</h3>
                    <p className="text-green font-medium mt-1">{p.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Need a Recommendation?"
        description="Our stylists can help you find the perfect products for your hair type."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
