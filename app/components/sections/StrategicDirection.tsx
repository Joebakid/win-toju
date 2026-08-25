// app/components/sections/StrategicDirection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUsers, FaCogs, FaHandshake, FaShieldAlt, FaCheckCircle, FaChartLine } from "react-icons/fa";

export default function StrategicDirection() {
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      title: "PEOPLE",
      desc: "Developing competent Nigerian professionals and technical personnel.",
      icon: FaUsers,
    },
    {
      title: "CAPABILITY",
      desc: "Strengthening technical and operational capacity.",
      icon: FaCogs,
    },
    {
      title: "PARTNERSHIPS",
      desc: "Building strategic relationships with qualified local and international organizations.",
      icon: FaHandshake,
    },
    {
      title: "COMPLIANCE",
      desc: "Maintaining strong regulatory and governance standards.",
      icon: FaShieldAlt,
    },
    {
      title: "EXECUTION",
      desc: "Delivering projects safely, efficiently and professionally.",
      icon: FaCheckCircle,
    },
    {
      title: "GROWTH",
      desc: "Expanding sustainably into new capabilities and markets.",
      icon: FaChartLine,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".strat-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white text-corporate-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">

        {/* Header & Copy */}
        <div className="strat-anim max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-corporate-red bg-corporate-red/10 px-3 py-1 rounded-full">
            Our Strategic Direction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Building a Stronger Indigenous Industrial Platform
          </h2>
          <div className="space-y-4 text-corporate-slate text-base sm:text-lg leading-relaxed text-left sm:text-center">
            <p>
              Nigeria's industrial future requires indigenous companies capable of more than providing individual services. It requires organizations that understand complex operating environments, mobilize resources efficiently, comply with regulatory requirements and deliver consistently.
            </p>
            <p className="font-bold text-corporate-navy text-center">
              Win-Toju is building toward that future.
            </p>
            <p>
              Our strategy is centered on strengthening technical competence, developing strategic partnerships, investing in people, improving operational systems and expanding our ability to deliver integrated solutions to clients across Nigeria's energy and infrastructure sectors.
            </p>
          </div>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="strat-anim bg-corporate-cream border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-corporate-red transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center group-hover:bg-corporate-red transition-colors shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-corporate-navy font-black text-lg tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-corporate-slate text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
