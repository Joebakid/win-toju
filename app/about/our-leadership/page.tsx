"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, getInitials } from "../../lib/teamData";

export default function TeamPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Cards staggered entrance on scroll
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-corporate-cream pb-20 md:pb-32">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-corporate-navy text-white pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Ambient Gradient Blur Backgrounds */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-corporate-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          
          {/* Breadcrumbs */}
          <div className="hero-anim inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm font-semibold text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-corporate-red font-bold">Leadership & Team</span>
          </div>

          <h1 className="hero-anim text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Our Executive <span className="text-corporate-red">Leadership & Team</span>
          </h1>

          <p className="hero-anim text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Engineered with decades of field experience, technical expertise, and absolute regulatory compliance across marine logistics and industrial operations.
          </p>
        </div>
      </section>

      {/* TEAM MEMBERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-10 relative z-20">
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.slug}
              className="team-card bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-corporate-navy overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-7xl font-black select-none">
                    {getInitials(member.name)}
                  </div>
                )}
                
                {/* Gradient Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* LinkedIn Badge Link */}
                {member.linkedIn && member.linkedIn !== "#" && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 z-10"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white">
                <div className="space-y-2">
                  <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">
                    {member.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-corporate-navy group-hover:text-corporate-red transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-corporate-navy hover:text-corporate-red transition-colors"
                  >
                    <span>Read Full Profile</span>
                    <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}