"use client";

import { useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLinkedin, FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
import { teamMembers, getInitials } from "../../lib/teamData";

interface ProfileProps {
  params: Promise<{ slug: string }>;
}

export default function TeamMemberProfile({ params }: ProfileProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  const resolvedParams = use(params);
  const member = teamMembers.find((m) => m.slug === resolvedParams.slug);

  if (!member) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(".content-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
        clearProps: "all",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-corporate-cream pb-16 md:pb-24">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[520px] pt-28 pb-24 md:pt-36 md:pb-32 flex flex-col items-center justify-center bg-corporate-navy overflow-hidden">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center md:object-[center_40%]"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/10 text-9xl font-black">
              {getInitials(member.name)}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col items-center w-full max-w-5xl">

          {/* Breadcrumbs */}
          <div className="hero-anim bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-gray-200 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-2 tracking-wide shadow-lg">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            {/* ADDED LEADING SLASH HERE */}
            <Link href="/about/our-leadership" className="hover:text-white transition-colors">Our Leadership</Link>
            <span>/</span>
            <span className="text-[#38bdf8] font-bold">{member.name}</span>
          </div>

          <h1
            className="hero-anim text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl mb-3"
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
          >
            {member.name}
          </h1>

          <h2 className="hero-anim text-lg sm:text-2xl font-extrabold text-[#38bdf8] drop-shadow-lg tracking-wide mb-6">
            {member.role}
          </h2>

          {/* Hero LinkedIn Button */}
          {member.linkedIn && member.linkedIn !== "#" && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${member.name} on LinkedIn`}
              className="hero-anim relative z-30 inline-flex items-center gap-2.5 px-6 py-3 bg-[#0077b5] hover:bg-[#005885] text-white rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 border border-white/20"
            >
              <FaLinkedin className="text-xl shrink-0" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      </section>

      {/* BIO / PROFILE SECTION */}
      <section className="content-anim max-w-4xl mx-auto px-4 sm:px-6 md:px-12 -mt-12 md:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border-t-8 border-corporate-red">

          {/* Top Bar inside Bio Card: Back to Team */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
            {/* UPDATED HREF HERE AS WELL */}
            <Link
              href="/about/our-leadership"
              className="inline-flex items-center gap-2 text-corporate-slate hover:text-corporate-red font-bold transition-colors text-xs sm:text-sm uppercase tracking-wider"
            >
              <FaArrowLeft /> Back to Our Team
            </Link>
          </div>

          <div className="prose prose-lg max-w-none">
            {member.fullProfile}
          </div>

        </div>
      </section>

    </main>
  );
}