import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { blogPosts } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.author} · ${post.date} · ${post.readTime}`}
        bgImage={post.image}
        label="Blog"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-green text-sm font-medium">{post.category}</span>
              <span className="text-black-40 text-sm">{post.readTime}</span>
            </div>
            <article className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-xl font-heading font-medium text-black mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.includes("**")) {
                  const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={i} className="text-black-80 leading-relaxed mb-4">
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="font-medium text-black">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-black-80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </article>
            <div className="mt-10 pt-8 border-t border-black-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-5 flex items-center justify-center">
                  <span className="text-green font-medium text-lg">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-black">{post.author}</p>
                  <p className="text-black-60 text-sm">Coiffure Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {relatedPosts.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel centered>Related Posts</SectionLabel>
              <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
                More from Our Blog
              </h2>
            </div>
            <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover">
                  <div className="card-img aspect-16-9 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover card-img-hover"
                    />
                  </div>
                  <div className="card-body">
                    <span className="text-green text-sm font-medium">{p.category}</span>
                    <h3 className="font-heading font-medium text-black mt-2 leading-snug">{p.title}</h3>
                    <p className="text-black-60 text-sm mt-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
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
