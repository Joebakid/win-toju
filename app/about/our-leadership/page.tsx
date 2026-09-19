"use client";

import React from "react";
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
} from "react-icons/fa6";

// Exact relative import based on your folder structure
import PageLayout from "../../components/layout/PageLayout-aboutus";
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
  const [imgError, setImgError] = React.useState(false);

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
  const ceo = teamMembers.find((m) => m.slug === "godwin-ogbaro");
  const executives = teamMembers.filter((m) => m.slug !== "godwin-ogbaro");

  return (
    <PageLayout
      hero={{
        prefix: "OUR LEADERSHIP",
        slides: [
          {
            image: "/win-toju-photos/leadership.png",
            headline: "People Behind the Purpose.",
            sub: "Leadership Behind the Execution."
          }
        ],
        description: "Win-Toju is guided by a multidisciplinary leadership team bringing together experience across executive management, finance, administration, technical operations, project delivery, Nigerian Content and corporate governance. Together, our leadership team provides the direction, oversight and operational discipline required to build Win-Toju as a dependable indigenous industrial services company.",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "About" },
          { label: "Our Leadership" }
        ],
        buttons: [
          { label: "Executive Directory", href: "#directory", variant: "primary" }
        ]
      }}
      cta={{
        prefix: "BUILDING WITH PURPOSE",
        headline: "Positioned for Sustainable Growth",
        paragraphs: [
          "Win-Toju's leadership is focused on building an organization that is capable, responsible and positioned for sustainable growth. By combining technical knowledge, operational discipline, corporate governance and indigenous participation, we continue to strengthen the platform from which Win-Toju serves its clients and partners."
        ],
        buttons: [
          { label: "Contact Win-Toju", href: "/contact", variant: "primary" },
          { label: "Explore Our Capabilities", href: "/operations", variant: "secondary" }
        ]
      }}
    >
      {/* EXECUTIVE DIRECTORY SECTION */}
      <section id="directory" className="space-y-10 border-t border-slate-200 pt-16">
        <div className="comp-anim space-y-2 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Directory</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Executive Leadership</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our leadership team brings together complementary expertise across business management, finance, operations, technical services, project execution, Nigerian Content and corporate governance.
          </p>
        </div>

        <div className="space-y-8">
          {/* FEATURED CEO ROW */}
          {ceo && (
            <div className="comp-anim bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-corporate-red transition-all duration-300">
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
                className="comp-anim bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-corporate-red transition-all duration-300 group"
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
        <div className="comp-anim space-y-2 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operational Execution</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Leadership in Practice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="comp-anim bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
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

    </PageLayout>
  );
}