import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { teamMemberDetails } from "@/lib/constants";

export function generateStaticParams() {
  return teamMemberDetails.map((member) => ({
    slug: member.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMemberDetails.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.name} - ${member.role} at Coiffure salon. ${member.specialties.join(", ")}.`,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = teamMemberDetails.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageHero
        title={member.name}
        subtitle={member.role}
        bgImage={member.image}
        label="Our Team"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md-flex-row gap-10 items-start">
              <div className="w-full md-w-1-3 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-4-5 object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <SectionLabel>{member.role}</SectionLabel>
                <h2 className="text-3xl font-heading font-medium text-black mb-4">
                  {member.name}
                </h2>
                <p className="text-black-60 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-3">
                    Experience
                  </h3>
                  <p className="text-black-80">{member.experience}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-3">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span key={s} className="px-3 py-1 bg-green-5 text-green text-sm font-medium rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/booking" className="btn btn-primary">
                  Book with {member.name.split(" ")[0]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready to Book?"
        description="Schedule your appointment with one of our expert stylists."
        buttonText="Book Now"
        buttonHref="/booking"
        variant="light"
      />
    </>
  );
}
