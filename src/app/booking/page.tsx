"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import { teamMemberDetails, serviceCategories } from "@/lib/constants";

export default function BookingPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    stylist: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const allServices = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({ ...s, category: cat.category })),
  );

  return (
    <>
      <PageHero
        title="Book an Appointment"
        subtitle="Schedule your visit to Coiffure. We can't wait to see you."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="Reserve"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card">
                <div className="card-body text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-5 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-medium text-black mb-2">
                    Booking Request Received!
                  </h3>
                  <p className="text-black-60 mb-6">
                    Thank you for choosing Coiffure. We'll confirm your appointment via email
                    shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-body">
                  <div className="text-center mb-8">
                    <SectionLabel centered>Appointment</SectionLabel>
                    <h2 className="text-2xl font-heading font-medium text-black">
                      Schedule Your Visit
                    </h2>
                    <p className="text-black-60 mt-2">
                      Fill out the form below and we'll confirm your appointment.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm-grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Preferred Stylist
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                        value={formState.stylist}
                        onChange={(e) => setFormState({ ...formState, stylist: e.target.value })}
                      >
                        <option value="">No preference</option>
                        {teamMemberDetails.map((m) => (
                          <option key={m.slug} value={m.slug}>
                            {m.name} - {m.role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Service *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        {serviceCategories.map((cat) => (
                          <optgroup key={cat.category} label={cat.category}>
                            {cat.services.map((s) => (
                              <option key={s.name} value={s.name}>
                                {s.name} - {s.price}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                    <div className="grid sm-grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Date *</label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                          value={formState.date}
                          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Time *</label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                          value={formState.time}
                          onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green resize-none"
                        placeholder="Any special requests or notes for your stylist..."
                        value={formState.notes}
                        onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                      Request Appointment
                    </button>
                    <p className="text-center text-black-40 text-sm">
                      We'll confirm your appointment within 24 hours via email.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
