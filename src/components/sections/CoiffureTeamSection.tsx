import Link from "next/link";
import { teamMembers } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CoiffureTeamSection() {
  return (
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
          {teamMembers.map((member) => (
            <div key={member.name} className="card card-hover text-center">
              <div className="card-img aspect-4-5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover card-img-hover"
                />
              </div>
              <div className="card-body">
                <h3 className="font-heading font-medium text-black">{member.name}</h3>
                <p className="text-black-60 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/salon/team" className="btn btn-ghost">
            Meet the full team
          </Link>
        </div>
      </div>
    </section>
  );
}
