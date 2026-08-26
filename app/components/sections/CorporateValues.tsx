"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaShieldAlt, 
  FaAward, 
  FaUserShield, 
  FaClipboardCheck, 
  FaUsers, 
  FaLightbulb, 
  FaGlobeAfrica 
} from "react-icons/fa";

interface ValueItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const corporateValues: ValueItem[] = [
  {
    title: "INTEGRITY",
    description: "We act honestly, transparently and responsibly.",
    icon: FaShieldAlt,
  },
  {
    title: "EXCELLENCE",
    description: "We pursue high standards in everything we execute.",
    icon: FaAward,
  },
  {
    title: "SAFETY",
    description: "We protect people, assets and the environment.",
    icon: FaUserShield,
  },
  {
    title: "ACCOUNTABILITY",
    description: "We take responsibility for our commitments and results.",
    icon: FaClipboardCheck,
  },
  {
    title: "COLLABORATION",
    description: "We create value through strong partnerships.",
    icon: FaUsers,
  },
  {
    title: "INNOVATION",
    description: "We continually seek better ways to solve operational challenges.",
    icon: FaLightbulb,
  },
  {
    title: "LOCAL VALUE",
    description: "We believe in developing Nigerian people, businesses and capabilities.",
    icon: FaGlobeAfrica,
  },
];

export default function CorporateValues() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true, // Prevents re-triggering or hiding on scroll back/forth
        },
      });

      tl.from(".values-header-anim", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "opacity,transform",
      }).from(
        ".value-card-anim",
        {
          y: 35,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "opacity,transform", // Removes inline styles so CSS hover works smooth
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="values" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-corporate-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="values-header-anim inline-block border-b-2 border-corporate-red pb-1">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm">
              Principles That Drive Us
            </h2>
          </div>

          <h3 className="values-header-anim text-3xl sm:text-4xl md:text-5xl font-black text-corporate-navy tracking-tight leading-tight">
            Our Corporate <span className="text-corporate-red">Values</span>
          </h3>

          <p className="values-header-anim text-corporate-slate text-sm sm:text-base md:text-lg leading-relaxed">
            The foundational standards guiding our technical, logistics, and industrial execution across every project.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {corporateValues.map((value, index) => {
            const Icon = value.icon;
            const isLastItem = index === corporateValues.length - 1;

            return (
              <div
                key={value.title}
                className={`value-card-anim bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-t-4 border-t-corporate-red ${
                  isLastItem ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-corporate-cream group-hover:bg-corporate-navy text-corporate-red group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-gray-300 group-hover:text-corporate-red transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-corporate-navy mb-2 tracking-wide group-hover:text-corporate-red transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-corporate-slate text-xs sm:text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end">
                  <div className="w-6 h-0.5 bg-gray-200 group-hover:w-12 group-hover:bg-corporate-red transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}