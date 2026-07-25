// app/components/sections/HSE.tsx
"use client";

import { useEffect, useRef } from "react";
import { FaBriefcaseMedical, FaRecycle, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HSE() {
  const sectionRef = useRef<HTMLElement>(null);

  const policies = [
    {
      title: "Comprehensive Staff Medical Care",
      description: "We prioritize personnel health through an active annual medical retainer agreement with Dr. Amadasun Hospitals Ltd. (Westend Hospital & Diagnostic Centre) in Warri, ensuring immediate and continuous healthcare access for our eligible staff.",
      icon: <FaBriefcaseMedical className="w-10 h-10 text-corporate-red" />,
    },
    {
      title: "Certified Waste Management",
      description: "As a core component of our environmental protection strategy, Win-Toju is officially certified by the NCDMB (NOGIC JQS) to execute Onshore Waste Management for the oil and gas industry.",
      icon: <FaRecycle className="w-10 h-10 text-corporate-red" />,
    },
    {
      title: "Zero Incident Tolerance",
      description: "We deploy comprehensive risk management frameworks designed to achieve zero Lost Time Incidents (LTI), operating with strict adherence to environmental safety compliance on all projects.",
      icon: <FaShieldAlt className="w-10 h-10 text-corporate-red" />,
    },
    {
      title: "QA/QC Frameworks",
      description: "Multi-tier quality assurance protocols ensuring all procured materials, engineered structures, and marine logistics operations meet unyielding global and regulatory benchmarks.",
      icon: <FaClipboardCheck className="w-10 h-10 text-corporate-red" />,
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

      // 2. Animate Policy Cards
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="hse-header-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              HSE & Quality Assurance
            </h2>
          </div>
          <h3 className="hse-header-anim opacity-0 text-3xl md:text-5xl font-black tracking-tight">
            Safety & Quality as a Non-Negotiable Standard.
          </h3>
          <p className="hse-header-anim opacity-0 text-slate-300 text-lg leading-relaxed">
            Our Health, Safety, and Environment (HSE) policy is integrated into the core of our operations. We do not compromise on the safety of our personnel, our clients, or the environment.
          </p>
        </div>

        <div className="hse-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div 
              key={index} 
              // Added animation classes and opacity-0
              className="hse-card-anim opacity-0 flex flex-col sm:flex-row gap-4 sm:gap-6 bg-slate-800/40 p-6 sm:p-8 rounded-lg border border-slate-700 hover:border-corporate-red transition-colors duration-300"
            >
              <div className="flex-shrink-0 sm:mt-1">
                {policy.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{policy.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}