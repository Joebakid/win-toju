// app/team/[slug]/page.tsx
"use client";

import { useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLinkedin, FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
import { teamMembers, getInitials } from "../../lib/teamData";

import Navbar from "../../components/layout/Navbar"; 
import Footer from "../../components/layout/Footer"; 

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
        ease: "power3.out" 
      });
      
      gsap.from(".content-anim", { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.4 
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main ref={pageRef} className="min-h-screen bg-corporate-cream pb-16 md:pb-24">
        
        <section className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] flex flex-col items-center justify-center pt-20">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-corporate-navy">
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
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" /> 
          </div>

          {/* Hero Text Content */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center w-full max-w-5xl mt-12">
            
            {/* ADDED: Semi-transparent pill background to the navigation breadcrumbs */}
            <div className="hero-anim bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 text-gray-300 text-sm md:text-base font-semibold mb-6 flex items-center gap-2 tracking-wide shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#team" className="hover:text-white transition-colors">Leadership</Link>
              <span>/</span>
              <span className="text-[#38bdf8]">{member.name}</span>
            </div>

            <h1 
              className="hero-anim text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl mb-4" 
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              {member.name}
            </h1>
            
            <h2 className="hero-anim text-xl md:text-3xl font-extrabold text-[#38bdf8] drop-shadow-lg tracking-wide">
              {member.role}
            </h2>

            {member.linkedIn && member.linkedIn !== "#" && (
              <a 
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-anim mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#005885] text-white rounded-full text-sm sm:text-base font-bold transition-all shadow-lg hover:scale-105"
              >
                <FaLinkedin className="text-xl" /> Connect on LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* BIO / PROFILE SECTION */}
        <section className="content-anim max-w-4xl mx-auto px-4 sm:px-6 md:px-12 -mt-16 relative z-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border-t-8 border-corporate-red">
            
            <Link 
              href="/#team" 
              className="inline-flex items-center gap-2 text-corporate-slate hover:text-corporate-red font-bold mb-8 transition-colors text-sm sm:text-base uppercase tracking-wider"
            >
              <FaArrowLeft /> Back to Leadership Team
            </Link>
            
            <div className="prose prose-lg max-w-none">
              {member.fullProfile}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}