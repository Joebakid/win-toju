"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaShieldAlt, FaClipboardCheck, FaLeaf, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

export default function HSEQualityEnvironmentPage() {
  const pageRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      title: "HSE",
      subtitle: "Health, Safety & Environment",
      description: "Risk-based operational planning and safety management.",
      icon: <FaShieldAlt className="w-8 h-8 text-corporate-red" />,
    },
    {
      title: "QUALITY",
      subtitle: "Quality Assurance",
      description: "Structured QA/QC processes and operational controls.",
      icon: <FaClipboardCheck className="w-8 h-8 text-corporate-red" />,
    },
    {
      title: "ENVIRONMENT",
      subtitle: "Environmental Stewardship",
      description: "Responsible and compliant environmental practices.",
      icon: <FaLeaf className="w-8 h-8 text-corporate-red" />,
    },
  ];

  // GSAP Page Load Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for all page elements on load
      gsap.fromTo(
        ".hse-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.1, // Slight delay for smooth mounting
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-corporate-navy relative overflow-hidden flex flex-col justify-center">
      
      {/* Subtle Light Accent Background */}
      <div className="absolute top-0 right-0 w-[80%] md:w-1/2 h-full bg-slate-50/80 -skew-x-12 translate-x-16 md:translate-x-32 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-16 w-full">

        {/* Section Header & Narrative */}
        <div className="max-w-3xl space-y-6">
          <div className="hse-anim inline-block border-l-4 border-corporate-red pl-4">
            <h1 className="text-corporate-red font-bold tracking-widest uppercase text-sm md:text-base">
              Our Standard
            </h1>
          </div>
          
          <h2 className="hse-anim text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-corporate-navy leading-[1.1]">
            Safety and Quality <br className="hidden md:block" /> Are Not Negotiable
          </h2>
          
          <div className="hse-anim space-y-4 text-slate-600 text-base md:text-lg leading-relaxed pt-4">
            <p>
              Our commitment to Health, Safety and Environment is embedded in the way we plan, mobilize and execute our operations.
            </p>
            <p>
              We apply structured risk management, quality assurance and operational control measures designed to protect personnel, assets, clients and the environment while maintaining the standards expected within Nigeria's energy and industrial sectors.
            </p>
          </div>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="hse-anim bg-white border border-slate-200/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-corporate-red transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-xl bg-corporate-red/5 flex items-center justify-center border border-corporate-red/10 group-hover:bg-corporate-red/10 group-hover:scale-110 transition-all duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-corporate-navy group-hover:text-corporate-red transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-1">
                    {pillar.subtitle}
                  </p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link (Updated to point to Capabilities since we are already on the HSE page) */}
        <div className="hse-anim pt-8 border-t border-slate-100">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-corporate-navy font-bold hover:text-corporate-red transition-colors text-sm md:text-base uppercase tracking-wider group"
          >
            <span>Explore Our Capabilities</span>
            <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}