// app/components/sections/OurFuture.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShip, FaCogs, FaHandshake, FaChartLine } from "react-icons/fa";

export default function OurFuture() {
  const sectionRef = useRef<HTMLElement>(null);

  const focusPoints = [
    {
      title: "Technical Capabilities",
      description: "Strengthening core competencies across demanding sectors.",
      icon: FaCogs,
    },
    {
      title: "People & Workforce",
      description: "Developing the next generation of Nigerian professionals.",
      icon: FaChartLine,
    },
    {
      title: "Strategic Partnerships",
      description: "Expanding alliances with qualified local and international entities.",
      icon: FaHandshake,
    },
    {
      title: "Vessel & Fleet Growth",
      description: "Scaling offshore logistics and marine support assets.",
      icon: FaShip,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Switched to fromTo for guaranteed visibility rendering
      gsap.fromTo(".future-anim", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", 
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Reduced base mobile padding to py-8
    <section ref={sectionRef} className="py-8 md:py-16 bg-corporate-navy text-white relative overflow-hidden">

      {/* Background Wrapper */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-55 transform md:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1664521224230-c0eeba61e4a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-corporate-navy/95 via-corporate-navy/70 to-corporate-navy/95"></div>
      </div>

      {/* 
        FIX: Changed from space-y to flex flex-col gap-8. 
        This prevents margin-collapsing bugs when GSAP animates elements.
        Bumped z-index to 20 to ensure it clears the background overlay.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8 md:gap-10 relative z-20">

        {/* Section Header & Narrative */}
        <div className="future-anim max-w-4xl mx-auto text-center flex flex-col gap-4">
          <div className="inline-block border-l-4 border-corporate-red pl-4 self-center md:self-auto">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm text-left">
              Where We Are Going
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Building the Next Generation of Indigenous Industrial Services
          </h3>
          <div className="flex flex-col gap-3 text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-center pt-2 drop-shadow">
            <p className="font-bold text-white text-base md:text-xl">
              Win-Toju's ambition extends beyond individual contracts.
            </p>
            <p>
              We are building an indigenous industrial services platform capable of supporting increasingly complex requirements across Nigeria's energy, marine, logistics and infrastructure sectors.
            </p>
            <p>
              Our future focus includes strengthening technical capabilities, developing people, expanding strategic partnerships, improving operational systems, investing in appropriate technology and increasing our contribution to Nigerian Content development.
            </p>
            <p className="text-corporate-cream font-semibold pt-1">
              We intend to grow responsibly—building a company that clients can depend on, employees can grow with and partners can confidently build alongside.
            </p>
          </div>
        </div>

        {/* Future Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {focusPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="future-anim bg-slate-900/85 border border-slate-600 p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl hover:border-corporate-red transition-all flex flex-col gap-3 group backdrop-blur-md"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-corporate-red/30 border border-corporate-red/50 text-corporate-red flex items-center justify-center shadow-md group-hover:bg-corporate-red group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 md:w-5 md:h-5"/>
                </div>
                <h4 className="text-white font-black text-base md:text-lg tracking-wider">
                  {item.title}
                </h4>
                <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}