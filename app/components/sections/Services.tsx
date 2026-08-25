// app/components/sections/Services.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const servicesList = [
    {
      number: "01",
      title: "Marine Logistics & Special Transportation",
      description: "We provide specialized marine logistics and transportation solutions supporting offshore and industrial operations, including marine vessel supply and operations, specialized transportation and related logistical support.",
      slug: "marine-logistics",
      bullets: [
        "Marine vessel supply",
        "Vessel operations",
        "Specialized transportation",
        "Offshore logistical support",
        "Marine security and escort",
        "Mooring services",
        "Houseboats",
        "Barges"
      ]
    },
    {
      number: "02",
      title: "Offshore Support",
      description: "Win-Toju provides marine and offshore support services designed to help clients maintain safe, efficient and reliable operations in demanding marine environments.",
      slug: "marine-logistics",
      bullets: []
    },
    {
      number: "03",
      title: "Onshore Waste Management",
      description: "We provide compliant onshore waste management solutions supporting oil & gas operations and environmental responsibilities. Our operations maintain certified standards for onshore waste management.",
      slug: "onshore-waste-management",
      bullets: []
    },
    {
      number: "04",
      title: "General Contracting & Claims Agency",
      description: "We provide general contracting and professional claims agency services, supporting clients with project execution, corporate representation and related operational requirements.",
      slug: "general-contracting",
      bullets: []
    },
    {
      number: "05",
      title: "Indigenous Labour Supply",
      description: "We provide competent Nigerian technical, management and local contractor personnel to support project and operational requirements in accordance with applicable regulatory requirements. Our operations specifically exclude the supply of expatriate manpower.",
      slug: "labour-supply",
      bullets: []
    },
  ];

  // GSAP ScrollTrigger Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animate the section header texts
      gsap.fromTo(".services-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Animate the services cards grid
      gsap.fromTo(".services-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-corporate-navy text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="services-header-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              What We Do
            </h2>
          </div>
          <h3 className="services-header-anim opacity-0 text-3xl md:text-5xl font-black text-white tracking-tight">
            Comprehensive Capabilities for Demanding Operations
          </h3>
          <p className="services-header-anim opacity-0 text-slate-300 text-lg leading-relaxed">
            Our core operational divisions are engineered to support complex industrial, energy, and marine requirements across Nigeria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="services-card-anim opacity-0 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative overflow-hidden space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-corporate-red font-black text-4xl">
                  {service.number}
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {service.title}
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Supporting Bullets if available */}
                {service.bullets && service.bullets.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-corporate-cream mb-3">
                      Supporting Services
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-corporate-red"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
