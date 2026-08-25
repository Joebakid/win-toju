// app/components/sections/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // GSAP Animation Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use fromTo to strictly define the start and end states, preventing flashes
      gsap.fromTo(".hero-anim",
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2 // Slight delay to ensure the page has loaded visually
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[85vh] bg-corporate-navy flex items-center py-20 lg:py-0 overflow-hidden">

      {/* Background Image Layer - Positioned to fill the empty right space */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full lg:w-2/3 h-full relative overflow-hidden">

          {/* Gradient Masks to blend the image seamlessly into the navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-corporate-navy/80 to-transparent z-10 block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/80 via-transparent to-transparent z-10 lg:hidden"></div>

          {/* The Image - Updated to use an authentic photo of field personnel from the local public folder */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40 lg:opacity-60 mix-blend-luminosity blur-sm transform scale-105"
            style={{
              backgroundImage: "url('/win-toju-photos/technical man power.JPG')"
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 lg:mt-0">
        <div className="max-w-3xl space-y-6 md:space-y-8">

          <div className="hero-anim opacity-0 inline-block border-l-4 border-corporate-red pl-3 md:pl-4">
            <h2 className="text-corporate-cream font-semibold tracking-widest uppercase text-xs md:text-sm">
              Indigenous Capability. Professional Execution.
            </h2>
          </div>

          <h1 className="hero-anim opacity-0 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Engineering Industrial Possibilities. <span className="text-corporate-red block sm:inline">Delivering with Precision.</span>
          </h1>

          <p className="hero-anim opacity-0 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management and workforce solutions to the energy, oil & gas and infrastructure sectors.
          </p>

          <div className="hero-anim opacity-0 flex flex-col sm:flex-row flex-wrap gap-4 pt-4 md:pt-6">
            <Link
              href="/operations"
              className="w-full sm:w-auto bg-corporate-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition duration-300 shadow-lg text-center uppercase tracking-wider text-sm flex justify-center items-center gap-2"
            >
              Explore Our Capabilities
            </Link>

            <Link
              href="/team/godwin-ogbaro"
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-4 px-8 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm"
            >
              Meet Win-Toju
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
