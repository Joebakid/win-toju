// app/components/sections/Team.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers = [
    { 
      name: "Pst. Ogbaro Godwin Toju", 
      role: "Chief Executive Officer", 
      linkedIn: "https://www.linkedin.com/in/godwin-ogbaro-845a29a0/",
      image: "/win-toju-photos/1.png" 
    },
    { 
      name: "Mr. Ogbaro Tosan Francis", 
      role: "Financial Director", 
      linkedIn: "#" 
    },
    { 
      name: "Mrs. Betty Ogbaro Owubetime", 
      role: "General Manager", 
      linkedIn: "#" 
    },
    { 
      name: "Mr. Mogbusiaghan Dave Oyibote", 
      role: "Project & Local Content Manager", 
      linkedIn: "#" 
    },
    { 
      name: "Oki Samuel", 
      role: "Company Secretary", 
      linkedIn: "#",
      image: "/win-toju-photos/sammy.PNG" 
    },
  ];

  // Helper function to extract initials for the avatar
  const getInitials = (name: string) => {
    // Remove titles like "Pst.", "Mr.", "Mrs.", "Miss" for cleaner initials
    const cleanName = name.replace(/(Pst\.|Mr\.|Mrs\.|Miss)\s*/g, '');
    const parts = cleanName.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animate the header text
      gsap.from(".team-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 2. Animate the team cards
      gsap.from(".team-card-anim", {
        scrollTrigger: {
          trigger: ".team-cards-container",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1, // Smooth stagger effect for the grid
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-corporate-cream border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4 flex flex-col items-center">
          <div className="team-header-anim inline-block border-b-4 border-corporate-red pb-2">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Leadership
            </h2>
          </div>
          <h3 className="team-header-anim text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
            The Team Behind the Excellence.
          </h3>
          <p className="team-header-anim text-corporate-slate text-lg leading-relaxed max-w-2xl">
            Our management framework is driven by certified, highly experienced indigenous professionals dedicated to executing projects safely, efficiently, and to global standards.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card-anim bg-white p-8 rounded-lg border-t-4 border-corporate-navy shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center group"
            >
              {/* Photo or Initials Avatar */}
              <div className="relative w-20 h-20 rounded-full bg-corporate-navy text-white flex items-center justify-center text-2xl font-black mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} Profile Photo`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  getInitials(member.name)
                )}
              </div>
              
              {/* Member Details */}
              <h4 className="text-xl font-bold text-corporate-navy mb-1">
                {member.name}
              </h4>
              <p className="text-sm font-semibold text-corporate-red uppercase tracking-wide mb-6">
                {member.role}
              </p>
              
              {/* LinkedIn Social Icon */}
              <div className="mt-auto">
                <a 
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-corporate-navy hover:bg-corporate-navy hover:text-white transition-colors duration-300"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}