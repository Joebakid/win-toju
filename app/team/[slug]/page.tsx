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
      gsap.fromTo(".profile-anim",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.1 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      {/* Adjusted padding: pt-24 on mobile, pt-32 on desktop. px-4 on mobile to give more screen real estate */}
      <main ref={pageRef} className="min-h-screen bg-corporate-cream pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          <Link 
            href="/#team" 
            className="profile-anim opacity-0 inline-flex items-center gap-2 text-corporate-navy hover:text-corporate-red font-semibold mb-6 md:mb-8 transition-colors text-sm sm:text-base"
          >
            <FaArrowLeft /> Back to Leadership Team
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-corporate-red">
            
            {/* Header Section: Reduced padding (p-6) and gap for mobile */}
            <div className="profile-anim opacity-0 p-6 sm:p-8 md:p-12 bg-corporate-navy text-white flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-center md:text-left">
              
              {/* Profile Image: Scaled down (w-20) for mobile, up to w-32 for desktop */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 overflow-hidden border-4 border-white/20 flex-shrink-0 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-2xl">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  getInitials(member.name)
                )}
              </div>
              
              <div className="flex-1 mt-2 md:mt-4 space-y-1.5 md:space-y-2">
                {/* Typography scales from text-2xl (mobile) to text-4xl (desktop) */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">{member.name}</h1>
                <p className="text-corporate-red font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest">{member.role}</p>
                
                {member.linkedIn && member.linkedIn !== "#" && (
                  <a 
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 md:mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <FaLinkedin className="text-[#0077b5] text-base" /> Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Content Section: Reduced padding (p-6) to prevent squished text on narrow phone screens */}
            <div className="profile-anim opacity-0 p-6 sm:p-8 md:p-12 bg-white rounded-b-2xl">
              {member.fullProfile}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}