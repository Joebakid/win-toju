"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaComments, FaTools, FaEnvelope } from "react-icons/fa";

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".cta-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-16 md:py-24 bg-corporate-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="bg-corporate-navy text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden border border-white/10 text-center">
          
          {/* Background Gradient Accents */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-corporate-red/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Tagline / Sub-badge */}
            <div className="cta-anim inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
              <span className="text-corporate-red font-bold tracking-widest uppercase text-xs sm:text-sm">
                Ready to Begin?
              </span>
            </div>

            {/* Headline */}
            <h2 className="cta-anim text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Let’s Build the Next <span className="text-corporate-red">Operation Together.</span>
            </h2>

            {/* Supporting Text */}
            <p className="cta-anim text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Talk to our team about your marine, logistics, contracting, workforce or industrial support requirements.
            </p>

            {/* Action Buttons */}
            <div className="cta-anim pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 flex-wrap">
              
              {/* Request a Consultation */}
              <Link
                href="/contact#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-corporate-red hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-red-900/40"
              >
                <FaComments className="w-4 h-4" />
                <span>Request a Consultation</span>
              </Link>

              {/* Explore Our Services */}
              <Link
                href="/operations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all border border-white/20 backdrop-blur-md"
              >
                <FaTools className="w-4 h-4" />
                <span>Explore Our Services</span>
              </Link>

              {/* Contact Win-Toju */}
              <Link
                href="/team/godwin-ogbaro"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-corporate-navy hover:bg-gray-100 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <FaEnvelope className="w-4 h-4 text-corporate-red" />
                <span>Contact Win-Toju</span>
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}