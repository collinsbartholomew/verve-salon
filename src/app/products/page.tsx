import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { products } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description: "Shop professional hair care products curated by Coiffure salon experts.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Professional-grade hair care, curated by our experts."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-2.jpg"
        label="Shop"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Products</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Salon-Quality Products at Home
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              Every product we carry is hand-selected by our stylists for proven results.
            </p>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="card card-hover">
                <div className="card-img aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover card-img-hover"
                  />
                </div>
                <div className="card-body">
                  <p className="text-green text-sm font-medium">{product.brand}</p>
                  <h3 className="font-heading font-medium text-black mt-1">{product.name}</h3>
                  <p className="text-black-60 text-sm mt-2">{product.shortDescription}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-medium text-black">{product.price}</span>
                    <span className="text-green text-sm font-medium">View Details</span>
                  </div>
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
        variant="light"
      />
    </>
  );
}
