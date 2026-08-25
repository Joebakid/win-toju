// app/components/sections/HSE.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaShieldAlt, FaClipboardCheck, FaLeaf, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HSE() {
  const sectionRef = useRef<HTMLElement>(null);

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

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animate Header Text
      gsap.fromTo(".hse-header-anim",
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

      // 2. Animate Pillars Grid
      gsap.fromTo(".hse-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hse-grid",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hse" ref={sectionRef} className="py-24 bg-corporate-navy text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 translate-x-32 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* Section Header & Narrative */}
        <div className="max-w-3xl space-y-4">
          <div className="hse-header-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Standard
            </h2>
          </div>
          <h3 className="hse-header-anim opacity-0 text-3xl md:text-5xl font-black tracking-tight">
            Safety and Quality Are Not Negotiable
          </h3>
          <div className="hse-header-anim opacity-0 space-y-4 text-slate-300 text-base md:text-lg leading-relaxed pt-2">
            <p>
              Our commitment to Health, Safety and Environment is embedded in the way we plan, mobilize and execute our operations.
            </p>
            <p>
              We apply structured risk management, quality assurance and operational control measures designed to protect personnel, assets, clients and the environment while maintaining the standards expected within Nigeria's energy and industrial sectors.
            </p>
          </div>
        </div>

        {/* Three Pillars Grid */}
        <div className="hse-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="hse-card-anim opacity-0 bg-slate-900/80 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-corporate-red transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-corporate-red/10 flex items-center justify-center border border-corporate-red/20 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white group-hover:text-corporate-red transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-corporate-cream pt-1">
                    {pillar.subtitle}
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="hse-header-anim opacity-0 pt-4">
          <Link
            href="/hse"
            className="inline-flex items-center gap-2 text-white font-bold hover:text-corporate-red transition-colors text-sm uppercase tracking-wider group"
          >
            <span>Explore HSE & QA/QC</span>
            <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
