import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import { teamMemberDetails } from "@/lib/constants";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the talented stylists, barbers, and beauty experts at Coiffure salon in New York.",
};

export default function SalonTeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the talented professionals behind every look."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="The Experts"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel centered>Our Team</SectionLabel>
            <h2 className="text-3xl lg-text-4xl font-heading font-medium text-black">
              Meet the Experts
            </h2>
            <p className="text-black-60 mt-3 max-w-xl mx-auto">
              Our Coiffure team comprises stylists with 10+ years of experience.
              Highly trained and skilled stylists ready to serve you every day.
            </p>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-4 gap-6">
            {teamMemberDetails.map((member) => (
              <Link key={member.slug} href={`/salon/team/${member.slug}`} className="card card-hover text-center">
                <div className="card-img aspect-4-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover card-img-hover"
                  />
                </div>
                <div className="card-body">
                  <h3 className="font-heading font-medium text-black">{member.name}</h3>
                  <p className="text-green text-sm mt-1">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Book with a Team Member"
        description="Choose your favorite stylist and schedule your next appointment."
        buttonText="Book Now"
        buttonHref="/booking"
      />
    </>
  );
}
