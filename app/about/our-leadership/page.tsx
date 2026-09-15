"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCompass,
  FaScrewdriverWrench,
  FaCoins,
  FaDiagramProject,
  FaHandshake,
  FaScaleBalanced,
  FaChevronRight
} from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, getInitials, TeamMember } from "../../lib/teamData";

const practicePillars = [
  { title: "Strategic Direction", desc: "Guiding corporate growth and long-term development.", icon: FaCompass },
  { title: "Operational Discipline", desc: "Maintaining coordination and execution across business activities.", icon: FaScrewdriverWrench },
  { title: "Financial Governance", desc: "Supporting responsible financial management and resource allocation.", icon: FaCoins },
  { title: "Project Delivery", desc: "Coordinating technical and operational requirements.", icon: FaDiagramProject },
  { title: "Nigerian Content", desc: "Developing indigenous participation and local capability.", icon: FaHandshake },
  { title: "Corporate Governance", desc: "Maintaining appropriate documentation, compliance and institutional processes.", icon: FaScaleBalanced },
];

function TeamImage({ member, heightClass }: { member: TeamMember; heightClass: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full ${heightClass} bg-slate-900 overflow-hidden flex items-center justify-center p-3`}>
      {member.image && !imgError ? (
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setImgError(true)}
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-corporate-navy text-white/30 text-6xl font-black select-none">
          {getInitials(member.name)}
        </div>
      )}
    </div>
  );
}

export default function LeadershipPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".lead-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: ".lead-grid", start: "top 85%" },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const ceo = teamMembers.find((m) => m.slug === "godwin-ogbaro");
  const executives = teamMembers.filter((m) => m.slug !== "godwin-ogbaro");

  return (
    <main ref={pageRef} className="min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-corporate-navy relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-20 w-full">

        {/* HERO SECTION */}
        <section className="max-w-4xl space-y-6">
          {/* <div className="hero-anim inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-corporate-navy transition-colors">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-slate-500">About</span>
            <FaChevronRight className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-corporate-red font-bold">Our Leadership</span>
          </div> */}

          <div className="hero-anim border-l-4 border-corporate-red pl-4">
            <span className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm">
              OUR LEADERSHIP
            </span>
          </div>

          <h1 className="hero-anim text-4xl md:text-6xl font-black tracking-tight text-corporate-navy leading-[1.15]">
            People Behind the Purpose. <br />
            <span className="text-slate-600">Leadership Behind the Execution.</span>
          </h1>

          <div className="hero-anim space-y-4 text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
            <p>
              Win-Toju is guided by a multidisciplinary leadership team bringing together experience across executive management, finance, administration, technical operations, project delivery, Nigerian Content and corporate governance.
            </p>
            <p className="text-base md:text-lg text-slate-500">
              Together, our leadership team provides the direction, oversight and operational discipline required to build Win-Toju as a dependable indigenous industrial services company.
            </p>
          </div>
        </section>

        {/* EXECUTIVE DIRECTORY SECTION */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Directory</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Executive Leadership</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our leadership team brings together complementary expertise across business management, finance, operations, technical services, project execution, Nigerian Content and corporate governance.
            </p>
          </div>

          <div className="lead-grid space-y-8">
            {/* FEATURED CEO ROW */}
            {ceo && (
              <div className="lead-card bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-corporate-red transition-all duration-300">
                <div className="lg:col-span-5 h-[360px] lg:h-auto">
                  <TeamImage member={ceo} heightClass="h-full" />
                </div>
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">
                      {ceo.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-corporate-navy">
                      {ceo.name}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                      {ceo.summary || "Provides executive leadership and strategic direction for Win-Toju, with professional experience spanning engineering, oilfield logistics, marine operations and offshore asset management."}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-200">
                    <Link
                      href={`/team/${ceo.slug}`}
                      className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-corporate-navy hover:text-corporate-red transition-colors group"
                    >
                      <span>Read Full Profile</span>
                      <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* EXECUTIVE MEMBERS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {executives.map((member) => (
                <div
                  key={member.slug}
                  className="lead-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-corporate-red transition-all duration-300 group"
                >
                  <TeamImage member={member} heightClass="h-72" />

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">
                        {member.role}
                      </span>
                      <h3 className="text-xl font-black text-corporate-navy group-hover:text-corporate-red transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed pt-1">
                        {member.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={`/team/${member.slug}`}
                        className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-corporate-navy hover:text-corporate-red transition-colors"
                      >
                        <span>Read Full Profile</span>
                        <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP IN PRACTICE SECTION */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operational Execution</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Leadership in Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corporate-red">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-corporate-navy text-sm">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CLOSING BANNER SECTION */}
        <section className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Building With Purpose</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Positioned for Sustainable Growth</h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Win-Toju's leadership is focused on building an organization that is capable, responsible and positioned for sustainable growth. By combining technical knowledge, operational discipline, corporate governance and indigenous participation, we continue to strengthen the platform from which Win-Toju serves its clients and partners.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-800">
            {/* <Link
              href="/our-operations"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider shadow-md"
            >
              Explore Our Capabilities <FaArrowRight />
            </Link> */}
            <Link
              href="/contact"
              className="bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider border border-white/10"
            >
              Contact Win-Toju <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
