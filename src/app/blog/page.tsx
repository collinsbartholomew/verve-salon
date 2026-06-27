import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hair care tips, style inspiration, and expert advice from the Coiffure salon team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Expert tips, trends, and inspiration from our team."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-5.jpg"
        label="Insights"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Blog</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Tips & Trends
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              Stay up to date with the latest hair care advice and style trends from our expert team.
            </p>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card card-hover">
                <div className="card-img aspect-16-9 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover card-img-hover"
                  />
                </div>
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-green text-sm font-medium">{post.category}</span>
                    <span className="text-black-40 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-medium text-black leading-snug">{post.title}</h3>
                  <p className="text-black-60 text-sm mt-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-black-40">
                    <span>By {post.author}</span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Have a Question?"
        description="Our team is happy to help with any hair care questions you might have."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
