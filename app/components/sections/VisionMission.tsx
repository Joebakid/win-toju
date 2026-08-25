// app/components/sections/VisionMission.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".vision-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corporate-red/50 via-transparent to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 relative z-10">

        <div className="vision-anim text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-corporate-cream">
            Our Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Purpose That Guides Our Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <div className="vision-anim bg-slate-900 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl hover:border-corporate-red/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-corporate-red/10 flex items-center justify-center border border-corporate-red/30">
                <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              To become a trusted Nigerian industrial services company recognized for excellence in engineering support, marine logistics, contracting and sustainable project execution.
            </p>
          </div>

          {/* Mission Card */}
          <div className="vision-anim bg-slate-900 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl hover:border-[#38bdf8]/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center border border-[#38bdf8]/30">
                <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              To deliver reliable, compliant and professionally executed industrial solutions that create measurable value for our clients while advancing Nigerian Content, developing local capabilities and contributing to sustainable economic growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
