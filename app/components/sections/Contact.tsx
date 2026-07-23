// app/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import Loader from "../ui/Loader";

export default function Contact() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Details & Map */}
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-corporate-red pl-4">
              <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
                Get In Touch
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-corporate-navy tracking-tight">
              Let's Build the Future Together.
            </h3>
            
            <div className="space-y-6 text-corporate-slate">
              {/* Headquarters Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-corporate-red">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-corporate-navy">Corporate Headquarters</h4>
                  <p>
                    Suite A11, Golden Plaza[cite: 5, 8, 9]<br />
                    By Shell Contractor Road, Ogunu[cite: 5, 9]<br />
                    Warri, Delta State, Nigeria[cite: 5, 7, 9]
                  </p>
                </div>
              </div>

              {/* Clickable Email Addresses */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-corporate-red">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-corporate-navy">Official Correspondence</h4>
                  <p>
                    <a href="mailto:wintojultd@gmail.com" className="hover:text-corporate-red transition-colors block">
                      wintojultd@gmail.com[cite: 2, 9]
                    </a>
                    <a href="mailto:tojuwin@gmail.com" className="hover:text-corporate-red transition-colors block">
                      tojuwin@gmail.com[cite: 2, 9]
                    </a>
                  </p>
                </div>
              </div>

              {/* Clickable Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-corporate-red">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-corporate-navy">Direct Lines</h4>
                  <p>
                    <a href="tel:+2348057183697" className="hover:text-corporate-red transition-colors block">
                      08057183697[cite: 2, 9]
                    </a>
                    <a href="tel:+2348067518929" className="hover:text-corporate-red transition-colors block">
                      08067518929[cite: 2, 9]
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Live Google Map with Custom Loader */}
            <div className="w-full h-72 bg-gray-200 rounded-lg border border-gray-300 overflow-hidden relative shadow-inner">
              {!isMapLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
                  <Loader text="Loading Map..." />
                </div>
              )}
              <iframe 
                src="https://maps.google.com/maps?q=5.527570724487305,5.722580909729004&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Win-Toju Office Location"
                onLoad={() => setIsMapLoaded(true)}
                className={`transition-opacity duration-500 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
              ></iframe>
            </div>
          </div>

          {/* Right Column: Routing Form */}
          <div className="bg-corporate-cream p-8 md:p-12 rounded-lg border-t-4 border-corporate-navy shadow-lg">
            <h4 className="text-2xl font-bold text-corporate-navy mb-6">Direct Inquiry Form</h4>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-corporate-navy mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-corporate-navy mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-corporate-navy mb-2">Department Routing</label>
                <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition bg-white text-corporate-slate">
                  <option value="general">General Inquiry</option>
                  <option value="procurement">Procurement & Logistics</option>
                  <option value="engineering">Engineering & Contracting</option>
                  <option value="careers">Careers & Labour Supply</option>
                  <option value="job_application">Job Application</option>
                  <option value="internship">Internship Application</option>
                  <option value="vendor">Vendor / Partnership Registration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-corporate-navy mb-2">Message detailing project, application, or inquiry</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="button" className="w-full bg-corporate-navy hover:bg-slate-800 text-white font-bold py-4 px-6 rounded transition duration-300 uppercase tracking-wide">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}