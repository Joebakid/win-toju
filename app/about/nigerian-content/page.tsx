"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaUsers, FaHandshake, FaShoppingCart, FaLightbulb } from "react-icons/fa";

export default function NigerianContentPage() {
  const pageRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      title: "PEOPLE",
      desc: "Training and developing Nigerian professionals.",
      icon: FaUsers,
    },
    {
      title: "PARTNERSHIPS",
      desc: "Building relationships with qualified indigenous businesses.",
      icon: FaHandshake,
    },
    {
      title: "PROCUREMENT",
      desc: "Supporting compliant Nigerian suppliers and manufacturers.",
      icon: FaShoppingCart,
    },
    {
      title: "KNOWLEDGE TRANSFER",
      desc: "Using strategic partnerships to strengthen indigenous technical capability.",
      icon: FaLightbulb,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for page load
      gsap.fromTo(
        ".nc-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.1, // Slight delay to ensure smooth rendering on mount
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-[100dvh] flex flex-col justify-center py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">

      {/* ImageKit Wallpaper Background with Reduced Blue / Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity transform scale-105"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/luvrld8r9/win-toju-photo/WhatsApp%20Image%202026-08-18%20at%208.57.06%20PM.jpeg?updatedAt=1787083161863')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10 w-full">

        {/* Section Header & Narrative */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="nc-anim inline-block border-l-4 border-corporate-red pl-4">
            <h1 className="text-corporate-red font-bold tracking-widest uppercase text-sm md:text-base">
              Our Indigenous Commitment
            </h1>
          </div>
          
          <h2 className="nc-anim text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Building Nigerian Capacity. <br className="hidden md:block" /> Creating Indigenous Value.
          </h2>
          
          <div className="nc-anim space-y-4 text-slate-300 text-base md:text-lg leading-relaxed text-left sm:text-center mt-6">
            <p>
              At Win-Toju, Nigerian Content is not simply a regulatory requirement. It is an important part of how we build our business.
            </p>
            <p>
              We believe sustainable participation in Nigeria's energy and industrial economy requires deliberate investment in Nigerian people, businesses, technical capabilities and local supply chains.
            </p>
            <p>
              Through local employment, workforce development, partnerships with Nigerian enterprises, procurement from qualified local suppliers and responsible technology partnerships, we seek to create value that extends beyond individual projects.
            </p>
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-sm md:text-base font-semibold text-corporate-cream text-center">
                The existing Win-Toju Nigerian Content policy already emphasizes Nigerian technical and management employment, qualified local contractors, alliances with Nigerian-registered companies, local procurement and technology/knowledge transfer.
              </p>
            </div>
          </div>
        </div>

        {/* Four Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="nc-anim bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-corporate-red transition-all duration-300 hover:-translate-y-1 space-y-5 group backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-red/10 border border-corporate-red/20 text-corporate-red flex items-center justify-center shadow-md group-hover:bg-corporate-red group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-black text-lg tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}