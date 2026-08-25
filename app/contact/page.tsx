// app/contact/page.tsx
"use client";

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import gsap from "gsap";
import Loader from "../components/ui/Loader";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "general",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // GSAP Refs
  const pageRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);

  // Handle Input Changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // GSAP Entry Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(".contact-form-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Handle Form Submission with Web3Forms
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = {
        ...formData,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "f8a8e129-157a-4974-9ad2-414ffc7e6d13"
      };
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        gsap.to(formContainerRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setStatus("success");
          }
        });
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  // Success Message Fade In Animation
  useEffect(() => {
    if (status === "success" && successMessageRef.current) {
      gsap.fromTo(
        successMessageRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [status]);

  return (
    <>
      <Navbar />
      <main ref={pageRef} className="min-h-screen bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Breadcrumb Header */}
          <div className="mb-12">
            <div className="bg-gray-100 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-corporate-slate mb-4">
              <Link href="/" className="hover:text-corporate-red transition-colors">Home</Link>
              <span>/</span>
              <span className="text-corporate-navy">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-corporate-navy tracking-tight">
              Get In Touch With Our Team
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Details & Map */}
            <div className="space-y-8">
              <div className="contact-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
                <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
                  Reach Out Directly
                </h2>
              </div>
              <h3 className="contact-anim opacity-0 text-3xl md:text-4xl font-bold text-corporate-navy tracking-tight">
                Let's Build the Future Together.
              </h3>
              
              <div className="space-y-6 text-corporate-slate">
                {/* Headquarters Address */}
                <div className="contact-anim opacity-0 flex items-start gap-4">
                  <div className="mt-1 text-corporate-red">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-navy">Corporate Headquarters</h4>
                    <p>
                      Suite A11, Golden Plaza<br />
                      By Shell Contractor Road, Ogunu<br />
                      Warri, Delta State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Clickable Email Addresses */}
                <div className="contact-anim opacity-0 flex items-start gap-4">
                  <div className="mt-1 text-corporate-red">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-navy">Official Correspondence</h4>
                    <p>
                      <a href="mailto:wintojultd@gmail.com" className="hover:text-corporate-red transition-colors block">
                        wintojultd@gmail.com
                      </a>
                      <a href="mailto:tojuwin@gmail.com" className="hover:text-corporate-red transition-colors block">
                        tojuwin@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Clickable Phone Numbers */}
                <div className="contact-anim opacity-0 flex items-start gap-4">
                  <div className="mt-1 text-corporate-red">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-navy">Direct Lines</h4>
                    <p>
                      <a href="tel:+2348057183697" className="hover:text-corporate-red transition-colors block">
                        08057183697
                      </a>
                      <a href="tel:+2348067518929" className="hover:text-corporate-red transition-colors block">
                        08067518929
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Google Map with Custom Loader */}
              <div className="contact-anim opacity-0 w-full h-72 bg-gray-200 rounded-lg border border-gray-300 overflow-hidden relative shadow-inner">
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
            <div className="contact-form-anim opacity-0 bg-corporate-cream p-8 md:p-12 rounded-lg border-t-4 border-corporate-navy shadow-lg relative min-h-[500px]">
              
              {status === "success" && (
                <div 
                  ref={successMessageRef}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-corporate-cream rounded-lg z-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-3xl font-black text-corporate-navy mb-4">Message Received.</h4>
                  <p className="text-corporate-slate text-lg">
                    Thank you for reaching out to Win-Toju System Enterprise Limited. Your inquiry has been routed to the appropriate department, and our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setFormData({ name: "", email: "", department: "general", message: "" });
                      setStatus("idle");
                    }}
                    className="mt-8 text-corporate-red font-bold uppercase tracking-widest hover:text-red-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {status !== "success" && (
                <div ref={formContainerRef}>
                  <h4 className="text-2xl font-bold text-corporate-navy mb-6">Direct Inquiry Form</h4>
                  
                  {status === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded text-sm font-semibold">
                      An error occurred while sending your message. Please try again or contact us directly via email.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-corporate-navy mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition bg-white text-corporate-navy" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-corporate-navy mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition bg-white text-corporate-navy" 
                          placeholder="john@company.com" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-sm font-bold text-corporate-navy mb-2">Department Routing</label>
                      <select 
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition bg-white text-corporate-navy"
                      >
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
                      <label htmlFor="message" className="block text-sm font-bold text-corporate-navy mb-2">Message detailing project, application, or inquiry</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red outline-none transition resize-none bg-white text-corporate-navy" 
                        placeholder="How can we assist you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="w-full bg-corporate-navy hover:bg-slate-800 text-white font-bold py-4 px-6 rounded transition duration-300 uppercase tracking-wide flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </form>
                </div>
              )}

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}