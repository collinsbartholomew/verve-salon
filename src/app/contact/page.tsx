"use client";

import type { Metadata } from "next";
import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions."
        bgImage="https://coiffure.vamtam.com/wp-content/uploads/2023/10/services-hero.jpg"
        label="Get in Touch"
      />
      <section className="section">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            <div>
              <SectionLabel>Contact Info</SectionLabel>
              <h2 className="text-3xl font-heading font-medium text-black mb-6">
                Visit Us or Say Hello
              </h2>
              <p className="text-black-60 leading-relaxed mb-8">
                Whether you have a question, want to book an appointment, or just want to say hello, we're here for you.
                Reach out using any of the methods below or fill out the contact form.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-black mb-1">Address</h3>
                    <p className="text-black-60">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-black mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.phoneHref}`} className="text-green hover:underline">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-black mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-green hover:underline">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-black mb-1">Hours</h3>
                    <p className="text-black-60">Mon-Fri: 9:00 AM - 8:00 PM</p>
                    <p className="text-black-60">Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-black-60">Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="card-body">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-5 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-heading font-medium text-black mb-2">Message Sent!</h3>
                      <p className="text-black-60">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm-grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid sm-grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Phone</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Subject</label>
                          <select
                            className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green"
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          >
                            <option value="">Select a subject</option>
                            <option value="appointment">Book Appointment</option>
                            <option value="services">Services Inquiry</option>
                            <option value="products">Product Inquiry</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Message</label>
                        <textarea
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-black-10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green resize-none"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-full">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
