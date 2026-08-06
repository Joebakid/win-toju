// app/components/sections/Team.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTimes, FaBriefcase } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TeamMember {
  name: string;
  role: string;
  linkedIn: string;
  image?: string;
  bio: string;
  experience: string[];
}

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    { 
      name: "Deacon Godwin Toju Ogbaro", 
      role: "Chief Executive Officer", 
      linkedIn: "https://www.linkedin.com/in/godwin-ogbaro-845a29a0/",
      image: "/win-toju-photos/1.png",
      bio: "Strategic leadership and decades-long field experience, combining over 30 years of hands-on technical experience with high-level enterprise governance. Deacon Ogbaro’s career in the energy landscape is defined by operational integrity, deep-rooted sector expertise, and an unwavering commitment to execution excellence.",
      experience: [
        "Entered the upstream sector in 1987 with Halliburton Geophysical Services Nigeria Limited, managing complex community interface dynamics, field claims, and land rights negotiations.",
        "Spearheaded the chartering, marine supply, and operational management of specialized marine transportation vessels and qualified offshore manpower for Chevron Nigeria Limited (2012–2021).",
        "Managed the procurement, chartering, and tactical deployment of heavy-duty tugboats and barges for Elcrest Exploration & Production Nigeria Limited (2020–2021).",
        "Maintains an impeccable track record of asset availability, zero-incident safety culture (HSE compliance), and transparent supply chain execution across deepwater and swamp locations."
      ]
    },
    { 
      name: "Mr. Ogbaro Tosan Francis", 
      role: "Financial Director", 
      linkedIn: "#",
      bio: "Drives sustainable growth and operational resilience through rigorous financial governance. Mr. Ogbaro is an accomplished professional whose academic foundation combines advanced business management, entrepreneurial strategy, and engineering discipline.",
      experience: [
        "Holds a Master’s Degree in Management and Entrepreneurship from the University of Dundee, Scotland, equipping him with advanced expertise in corporate governance and enterprise risk mitigation.",
        "Earned a Bachelor of Engineering in Mechanical Engineering from Benson Idahosa University, providing an analytical approach to asset evaluation and technical project financing.",
        "Gained international operational and supervisory experience with Newcross Healthcare UK and Balhousie Care Group Dundee UK, managing high-compliance operations.",
        "Oversees Win-Toju System Enterprise Limited’s fiscal strategy, capital allocation, vendor risk assessment, and financial compliance to ensure robust financial health and optimal resource utilization."
      ]
    },
    { 
      name: "Mrs. Betty Ogbaro Owubetime", 
      role: "General Manager", 
      linkedIn: "#",
      bio: "Directs daily administrative workflows, resource allocation, human capital development, and inter-departmental operations.",
      experience: [
        "Coordinates day-to-day corporate administration and operational efficiency.",
        "Directs human resource management, policy implementation, and staff performance workflows.",
        "Ensures seamless communication between field engineering teams and executive management."
      ]
    },
    { 
      name: "Mr. Mogbusiaghan Dave Oyibote", 
      role: "Project & Local Content Manager", 
      linkedIn: "#",
      image: "/win-toju-photos/Dave.png",
      bio: "A seasoned technical leader whose hands-on expertise ensures that every charter, crew deployment, and energy contract is executed with complete operational integrity and strict regulatory compliance.",
      experience: [
        "Holds a deep, practical background in electrical diagnostic work, power conduit installation, and system safety from tenures with Fmon Nigeria Limited and Pedro’s Global Services Limited.",
        "Demonstrated exceptional leadership capabilities as Manager at Juwadate Nigeria Limited, directing administrative operations and streamlining project scheduling.",
        "Ensures absolute compliance with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act and NOGIC JQS requirements.",
        "Maximizes indigenous capacity utilization while building harmonious, long-term relationships with Niger Delta host communities to guarantee zero downtime and total safety compliance."
      ]
    },
    { 
      name: "Samuel Oki", 
      role: "Company Secretary", 
      linkedIn: "https://www.linkedin.com/in/okizaweb3pro/",
      image: "/win-toju-photos/sammy.PNG",
      bio: "A high-caliber professional bridging advanced environmental science, academic innovation, and executive secretarial leadership. Samuel seamlessly connects administrative rigor with technical insight to anchor corporate governance.",
      experience: [
        "Holds a B.Sc. in Environmental Management and Toxicology from FUPRE, with a milestone thesis on bioremediation of crude oil contaminated soil establishing expertise in environmental risk assessment.",
        "Directs executive correspondence, board documentation, high-level scheduling, and secretarial oversight for the CEO and board of directors.",
        "Spearheads the compilation, audit, and management of sensitive corporate documentation, project proposals, and regulatory filings for NipeX and NOGIC JQS.",
        "Enforces rigorous records management and serves as the primary administrative bridge between internal operational teams, JV partners, IOC compliance officers, and regulatory authorities."
      ]
    },
  ];

  // Helper function to extract initials for the avatar
  const getInitials = (name: string) => {
    const cleanName = name.replace(/(Pst\.|Deacon\.|Mr\.|Mrs\.|Miss)\s*/g, '');
    const parts = cleanName.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  // Robust GSAP ScrollTrigger Animations using a Timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // 1. Animate the header text explicitly from 0 to 1
      tl.fromTo(".team-header-anim", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      )
      // 2. Animate the team cards explicitly from 0 to 1
      .fromTo(".team-card-anim", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-corporate-cream border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4 flex flex-col items-center">
          <div className="team-header-anim inline-block border-b-4 border-corporate-red pb-2 opacity-0">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Leadership
            </h2>
          </div>
          <h3 className="team-header-anim text-3xl md:text-5xl font-black text-corporate-navy tracking-tight opacity-0">
            The Team Behind the Excellence.
          </h3>
          <p className="team-header-anim text-corporate-slate text-lg leading-relaxed max-w-2xl opacity-0">
            Our management framework is driven by certified, highly experienced indigenous professionals dedicated to executing projects safely, efficiently, and to global standards. Click any profile to view professional experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedMember(member)}
              className="team-card-anim opacity-0 bg-white p-8 rounded-lg border-t-4 border-corporate-navy shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
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
              <h4 className="text-xl font-bold text-corporate-navy mb-1 group-hover:text-corporate-red transition-colors">
                {member.name}
              </h4>
              <p className="text-sm font-semibold text-corporate-red uppercase tracking-wide mb-6">
                {member.role}
              </p>

              <span className="text-xs text-gray-400 mb-4 italic">Click to view experience</span>
              
              {/* LinkedIn Social Icon */}
              <div className="mt-auto" onClick={(e) => e.stopPropagation()}>
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

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative border-t-8 border-corporate-red flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 md:p-8 bg-corporate-navy text-white flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full bg-white/10 overflow-hidden border-2 border-white/20 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                  {selectedMember.image ? (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    getInitials(selectedMember.name)
                  )}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{selectedMember.name}</h3>
                  <p className="text-corporate-red font-semibold text-sm uppercase tracking-wider">{selectedMember.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-corporate-red transition-colors flex items-center justify-center text-white"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold text-corporate-red uppercase tracking-wider mb-2">Executive Summary</h4>
                <p className="text-corporate-slate text-base leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-corporate-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaBriefcase className="text-corporate-red" /> Professional Experience & Highlights
                </h4>
                <ul className="space-y-3">
                  {selectedMember.experience.map((exp, i) => (
                    <li key={i} className="flex items-start gap-3 bg-corporate-cream/50 p-3.5 rounded-lg border border-gray-100 text-corporate-slate text-sm">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-corporate-red flex-shrink-0" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center px-6 md:px-8">
              {selectedMember.linkedIn && selectedMember.linkedIn !== "#" ? (
                <a 
                  href={selectedMember.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-corporate-navy hover:text-corporate-red transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-corporate-red" /> Connect on LinkedIn
                </a>
              ) : (
                <span className="text-xs text-gray-400">Internal Leadership Profile</span>
              )}
              <button 
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 bg-corporate-navy text-white text-sm font-semibold rounded-lg hover:bg-corporate-red transition-colors"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}