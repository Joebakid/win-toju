// app/components/sections/About.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animate the left text content
      gsap.from(".about-text-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 2. Animate the right facts column
      gsap.from(".about-facts-anim", {
        scrollTrigger: {
          trigger: ".facts-container",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Corporate Narrative */}
          <div className="space-y-8">
            <div className="about-text-anim inline-block border-l-4 border-corporate-red pl-4">
              <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
                Our Identity
              </h2>
            </div>

            <h3 className="about-text-anim text-3xl md:text-5xl font-black text-corporate-navy tracking-tight leading-tight">
              An Indigenous Company Built for <span className="text-corporate-red">Industrial Execution.</span>
            </h3>

            <div className="space-y-4 text-corporate-slate text-base md:text-lg leading-relaxed">
              <p className="about-text-anim">
                Win-Toju System Enterprise Limited is an indigenous Nigerian company established to provide dependable technical, logistics and contracting solutions to industries where operational reliability, regulatory compliance and disciplined execution are critical .
              </p>
              <p className="about-text-anim">
                Incorporated on 10 December 2020, Win-Toju operates from Warri, Delta State, with a strategic focus on supporting Nigeria's energy, oil & gas and infrastructure sectors .
              </p>
              <p className="about-text-anim">
                Our capabilities span marine logistics, offshore support, specialized transportation, onshore waste management, general contracting, claims agency and indigenous labour supply .
              </p>
              <p className="about-text-anim">
                We combine local knowledge, professional expertise, regulatory awareness and strategic partnerships to deliver practical solutions aligned with the requirements of modern industrial operations .
              </p>

              <p className="about-text-anim">Win-Toju's current corporate information identifies the company as RC 1744024, incorporated in 2020 and headquartered in Warri, Delta State. It also identifies NUPRC, NIMASA and NCDMB/NOGIC JQS credentials.</p>

            </div>

            <div className="about-text-anim pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-corporate-navy hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Read Our Full Story</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Company Facts/Statistics */}
          <div className="relative mt-8 lg:mt-0 facts-container">
            <div className="absolute inset-0 bg-corporate-navy translate-x-4 translate-y-4 rounded-xl z-0 hidden sm:block"></div>
            <div className="about-facts-anim relative z-10 bg-corporate-cream p-8 md:p-12 rounded-xl border border-gray-200 shadow-xl">

              <div className="border-b border-gray-300 pb-6 mb-6">
                <h4 className="text-2xl font-bold text-corporate-navy">
                  Corporate Facts
                </h4>
              </div>

              <ul className="space-y-6">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4">
                  <span className="text-corporate-red font-black text-2xl">2020</span>
                  <span className="text-corporate-slate font-bold uppercase tracking-wider text-sm mt-1 sm:mt-0">Year Established </span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4">
                  <span className="text-corporate-navy font-black text-xl">RC 1744024</span>
                  <span className="text-corporate-slate font-bold uppercase tracking-wider text-sm mt-1 sm:mt-0">Corporate Registration </span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4">
                  <span className="text-corporate-navy font-black text-xl">Warri</span>
                  <span className="text-corporate-slate font-bold uppercase tracking-wider text-sm mt-1 sm:mt-0">Headquarters </span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4">
                  <span className="text-corporate-navy font-black text-xl">Nigeria</span>
                  <span className="text-corporate-slate font-bold uppercase tracking-wider text-sm mt-1 sm:mt-0">Primary Operating Market </span>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
                  <span className="text-corporate-navy font-black text-xl text-right sm:text-left sm:max-w-[150px] leading-tight">Industrial Services</span>
                  <span className="text-corporate-slate font-bold uppercase tracking-wider text-sm mt-2 sm:mt-0">Core Business Focus </span>
                </li>
              </ul>

              {/* Credentials Note */}
              <div className="mt-10 pt-6 border-t border-gray-300">
                 <p className="text-xs font-bold text-corporate-slate uppercase tracking-wide leading-relaxed">
                   Registered with: NUPRC, NIMASA & NCDMB / NOGIC JQS .
                 </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
