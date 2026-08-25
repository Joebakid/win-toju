// app/components/sections/Team.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, getInitials } from "../../lib/teamData";

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  // Robust GSAP ScrollTrigger Animations
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

      tl.fromTo(".team-header-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      )
      .fromTo(".team-card-anim",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle click with an exit animation
  const handleCardClick = (slug: string, event: React.MouseEvent<HTMLDivElement>) => {
    const clickedCard = event.currentTarget;
    const allCards = document.querySelectorAll('.team-card-anim');

    const exitTl = gsap.timeline({
      onComplete: () => {
        router.push(`/team/${slug}`);
      }
    });

    exitTl.to(allCards, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in"
    }, 0);

    exitTl.to(clickedCard, {
      scale: 1.05,
      zIndex: 50,
      duration: 0.2,
      ease: "power2.out"
    }, 0).to(clickedCard, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, 0.2);
  };

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-corporate-cream border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4 flex flex-col items-center">
          <div className="team-header-anim inline-block border-b-4 border-corporate-red pb-2 opacity-0">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Leadership
            </h2>
          </div>
          <h3 className="team-header-anim text-3xl md:text-5xl font-black text-corporate-navy tracking-tight opacity-0">
            People Behind the Execution
          </h3>
          <p className="team-header-anim text-corporate-slate text-lg leading-relaxed max-w-2xl opacity-0">
            Win-Toju is led by a multidisciplinary team of indigenous professionals with responsibilities spanning executive management, finance, operations, project execution, local content and corporate governance. Our leadership approach combines entrepreneurial vision with professional accountability, ensuring that business growth remains aligned with safety, compliance, client requirements and long-term sustainability.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={(e) => handleCardClick(member.slug, e)}
              className="team-card-anim opacity-0 bg-white p-8 rounded-lg border-t-4 border-corporate-navy shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer relative"
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
    </section>
  );
}
