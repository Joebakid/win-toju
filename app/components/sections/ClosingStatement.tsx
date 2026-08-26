"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ClosingStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header and text animation
      gsap.from(".closing-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Highlight card animation
      gsap.from(".closing-card-anim", {
        scrollTrigger: {
          trigger: ".closing-card-container",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="closing-statement"
      ref={sectionRef}
      className="py-16 md:py-28 bg-corporate-navy relative overflow-hidden text-white"
    >
      {/* Background Decorative Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-corporate-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="closing-anim inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-corporate-red animate-pulse" />
              <span className="text-corporate-cream font-bold tracking-widest uppercase text-xs">
                Corporate Promise
              </span>
            </div>

            <h2 className="closing-anim text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Built for the <span className="text-corporate-red">Demands of Industry.</span>
            </h2>

            <div className="closing-anim space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p>
                From marine logistics and specialized transportation to waste management, contracting and indigenous workforce solutions, Win-Toju is positioned to support organizations operating in demanding industrial environments.
              </p>
              <p>
                We bring together indigenous knowledge, professional expertise, regulatory awareness and a commitment to disciplined execution—helping our clients move people, materials, projects and operations forward.
              </p>
            </div>

            <div className="closing-anim pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-corporate-red hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-red-900/30"
              >
                <span>Partner With Us</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Brand Pillar Box */}
          <div className="lg:col-span-5 closing-card-container">
            <div className="closing-card-anim bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl relative">
              
              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  Win-Toju System Enterprise Limited
                </h3>
                <p className="text-xs text-corporate-red font-bold uppercase tracking-widest mt-1">
                  RC 1744024
                </p>
              </div>

              {/* Pillars List */}
              <ul className="space-y-4 mb-8">
                {[
                  "Indigenous capability.",
                  "Professional execution.",
                  "Industrial confidence.",
                ].map((pillar) => (
                  <li key={pillar} className="flex items-center gap-3">
                    <FaCheckCircle className="text-corporate-red w-5 h-5 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-gray-100 tracking-wide">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 font-medium">
                Headquartered in Warri, Delta State — Serving Nigeria’s Energy & Infrastructure Sectors.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}