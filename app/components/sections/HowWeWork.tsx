// app/components/sections/HowWeWork.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt, FaCogs, FaCheckCircle, FaHandshake, FaGlobeAfrica, FaChartLine } from "react-icons/fa";

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  const principles = [
    {
      number: "01",
      title: "SAFETY FIRST",
      description: "Protecting our people, clients, assets and the environment is fundamental to our operations.",
      icon: FaShieldAlt,
    },
    {
      number: "02",
      title: "OPERATIONAL EXCELLENCE",
      description: "We plan, coordinate and execute with discipline and attention to detail.",
      icon: FaCogs,
    },
    {
      number: "03",
      title: "COMPLIANCE",
      description: "We operate within applicable laws, regulatory requirements and client standards.",
      icon: FaCheckCircle,
    },
    {
      number: "04",
      title: "ACCOUNTABILITY",
      description: "We take ownership of our commitments, responsibilities and deliverables.",
      icon: FaHandshake,
    },
    {
      number: "05",
      title: "LOCAL EXPERTISE",
      description: "We leverage indigenous knowledge, personnel and partnerships to create practical solutions.",
      icon: FaGlobeAfrica,
    },
    {
      number: "06",
      title: "CONTINUOUS IMPROVEMENT",
      description: "We continually strengthen our systems, people, capabilities and methods of execution.",
      icon: FaChartLine,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".work-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-corporate-cream text-corporate-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">

        {/* Section Header */}
        <div className="work-anim max-w-3xl space-y-4">
          <div className="inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Operating Philosophy
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
            The Standards Behind Every Engagement
          </h3>
          <p className="text-corporate-slate text-lg leading-relaxed">
            Our services are only as strong as the standards behind their execution. Win-Toju approaches every engagement with a commitment to safety, quality, accountability, compliance and operational discipline.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="work-anim bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-corporate-red transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-corporate-red font-black text-3xl">{item.number}</span>
                  <div className="w-10 h-10 rounded-xl bg-corporate-navy text-white flex items-center justify-center group-hover:bg-corporate-red transition-colors shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-corporate-navy font-black text-lg tracking-wider">
                  {item.title}
                </h4>
                <p className="text-corporate-slate text-sm leading-relaxed">
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
