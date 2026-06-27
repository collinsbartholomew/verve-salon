import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaSection from "@/components/sections/CtaSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join Our Team",
  description: "Join the Coiffure team in New York. We're always looking for talented stylists, barbers, and beauty professionals.",
};

const benefits = [
  {
    title: "Competitive Pay",
    description: "Earn what you deserve with our commission-based structure and performance bonuses.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Continuing Education",
    description: "Regular training sessions, workshops, and industry conference opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Flexible Schedule",
    description: "Work-life balance matters. We offer flexible scheduling to fit your lifestyle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    description: "Clear career paths from junior to senior stylist, with mentorship along the way.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Product Discounts",
    description: "Enjoy generous discounts on all salon products and services.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Supportive Team",
    description: "Join a collaborative, positive environment where everyone helps each other succeed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function JoinOurTeamPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Build your career with New York's premier salon."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="Careers"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Why Coiffure</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Why Work With Us
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              We believe that when our team thrives, our clients get the best experience. Here's what makes Coiffure a great place to grow.
            </p>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <div className="card-body">
                  <div className="w-12 h-12 rounded-full bg-green-5 flex items-center justify-center text-green mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading font-medium text-black mb-2">{benefit.title}</h3>
                  <p className="text-black-60 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Open Positions</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Current Openings
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="card">
              <div className="card-body flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-medium text-black">Senior Stylist</h3>
                  <p className="text-black-60 text-sm mt-1">Full-time | 3+ years experience</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-medium text-black">Junior Stylist</h3>
                  <p className="text-black-60 text-sm mt-1">Full-time | 1+ year experience</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-medium text-black">Barber</h3>
                  <p className="text-black-60 text-sm mt-1">Full-time | 2+ years experience</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-medium text-black">Esthetician</h3>
                  <p className="text-black-60 text-sm mt-1">Full-time | Licensed professional</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready to Join?"
        description="Send us your resume and portfolio. We'd love to hear from you."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="green"
      />
    </>
  );
}
