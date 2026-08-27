"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

export default function WhoWeArePage() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for text and buttons
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-slate-950 overflow-hidden">
      
      {/* BACKGROUND ASSET */}
      <div className="absolute inset-0 z-0">
        {/* Note: Replace this placeholder with your actual Win-Toju industrial asset */}
        <Image
          src="https://images.unsplash.com/photo-1542224424-60b64be65e06?q=80&w=2940&auto=format&fit=crop"
          alt="Offshore vessel operations and marine logistics"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center scale-105" // slight scale prevents edge artifacting
          priority
        />
        
        {/* Gradient overlays to ensure text readability while maintaining image visibility */}
        <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* FOREGROUND CONTENT */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="hero-content max-w-4xl space-y-8">
          
          {/* Section Label / Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500 rounded-full" />
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-sky-400 uppercase">
              Who We Are
            </h2>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Engineering Industrial Possibilities. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Delivering with Precision.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-medium">
            Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management and workforce solutions to the energy, oil & gas and infrastructure sectors.
          </p>

          {/* Call To Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <Link
              href="/operations"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm bg-sky-600 text-white font-semibold transition-all hover:bg-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]"
            >
              Explore Our Capabilities
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/team/godwin-ogbaro"
              className="inline-flex items-center justify-center h-14 px-8 rounded-sm bg-white/10 text-white font-semibold backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]"
            >
              Meet Win-Toju
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}