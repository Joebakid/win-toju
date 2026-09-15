"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaScaleBalanced,
  FaFolderOpen,
  FaUserCheck,
  FaShieldHalved,
  FaArrowRight,
  FaCircleCheck,
  FaRotate,
  FaLock,
  FaLandmark,
  FaOilWell,
  FaCertificate,
  FaShip,
  FaFileInvoiceDollar
} from "react-icons/fa6";
import gsap from "gsap";

export default function CertificationsCompliancePage() {
  const pageRef = useRef<HTMLElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".comp-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const compliancePillars = [
    {
      number: "01",
      title: "CORPORATE GOVERNANCE",
      description: "Maintaining appropriate corporate records, statutory documentation and internal governance processes that support responsible business operations.",
      icon: <FaBuilding className="w-6 h-6 text-corporate-red" />,
    },
    {
      number: "02",
      title: "REGULATORY ALIGNMENT",
      description: "Recognizing and addressing the regulatory requirements relevant to the services and sectors in which we operate.",
      icon: <FaScaleBalanced className="w-6 h-6 text-corporate-red" />,
    },
    {
      number: "03",
      title: "DOCUMENT CONTROL",
      description: "Maintaining current corporate and regulatory documentation and reviewing records as requirements evolve.",
      icon: <FaFolderOpen className="w-6 h-6 text-corporate-red" />,
    },
    {
      number: "04",
      title: "CLIENT DUE DILIGENCE",
      description: "Supporting reasonable requests for corporate and compliance information during vendor registration, procurement and project onboarding processes.",
      icon: <FaUserCheck className="w-6 h-6 text-corporate-red" />,
    },
  ];

  const maintainedDocuments = [
    {
      category: "Corporate Documentation",
      items: [
        "Certificate of Incorporation",
        "Statutory Company Records",
        "Tax & Corporate Documentation",
      ],
    },
    {
      category: "Industry Registrations",
      items: [
        "Relevant Petroleum Industry Registrations",
        "Nigerian Content Registration (NOGIC JQS)",
        "Applicable Maritime Registrations",
      ],
    },
    {
      category: "Corporate Policies",
      items: [
        "Nigerian Content Policy",
        "HSE Policy",
        "Quality Management Principles",
        "Environmental Commitments",
      ],
    },
    {
      category: "Due-Diligence Information",
      items: [
        "Comprehensive Company Profile",
        "Management & Governance Structure",
        "Compliance Information & Statutory Declarations",
        "Project-Specific Engagement Documentation",
      ],
    },
  ];

  // Regulatory Entities with React Icons
  const regulatoryBodies = [
    {
      name: "Corporate Affairs Commission",
      acronym: "CAC",
      description: "Corporate registration and legal incorporation.",
      icon: <FaLandmark className="w-6 h-6 text-corporate-red" />,
    },
    {
      name: "Nigerian Upstream Petroleum Regulatory Commission",
      acronym: "NUPRC",
      description: "Relevant service-provider regulatory requirements.",
      icon: <FaOilWell className="w-6 h-6 text-corporate-red" />,
    },
    {
      name: "Nigerian Content Development & Monitoring Board",
      acronym: "NCDMB / NOGIC JQS",
      description: "Nigerian Content registration and industry qualification.",
      icon: <FaCertificate className="w-6 h-6 text-corporate-red" />,
    },
    {
      name: "Nigerian Maritime Administration and Safety Agency",
      acronym: "NIMASA",
      description: "Relevant maritime registration requirements.",
      icon: <FaShip className="w-6 h-6 text-corporate-red" />,
    },
    {
      name: "Tax & Statutory Authorities",
      acronym: "FIRS / STATUTORY",
      description: "Applicable tax and statutory compliance obligations.",
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-corporate-red" />,
    },
  ];

  return (
    <main ref={pageRef} className="min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-corporate-navy relative overflow-hidden">

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-24 w-full">

        {/* HERO SECTION */}
        <section className="max-w-4xl space-y-6">
          <div className="comp-anim inline-block border-l-4 border-corporate-red pl-4">
            <span className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm">
              CERTIFICATIONS & COMPLIANCE
            </span>
          </div>

          <h1 className="comp-anim text-4xl md:text-6xl font-black tracking-tight text-corporate-navy leading-[1.15]">
            Built on Responsible <br />
            <span className="text-slate-600">Business Practices.</span>
          </h1>

          <p className="comp-anim text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
            As an indigenous Nigerian industrial services company, Win-Toju recognizes that trust is built through responsible conduct, sound corporate governance and attention to applicable regulatory requirements. We maintain the registrations and documentation relevant to our areas of operation and support appropriate due-diligence processes when required.
          </p>

          <div className="comp-anim pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?subject=Corporate%20/%20Compliance%20Enquiry"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg text-sm uppercase tracking-wider"
            >
              Contact Our Corporate Team <FaArrowRight />
            </Link>
            <Link
              href="/about"
              className="bg-slate-100 text-corporate-navy px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              Who We Are <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* SECTION — OUR APPROACH */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-200 pt-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="comp-anim">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Corporate Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-black text-corporate-navy mt-1">
                Compliance Is Part of How We Work
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
            <p className="comp-anim">
              Responsible business requires more than technical capability. It requires appropriate corporate governance, accurate documentation and an understanding of the legal and regulatory framework within which the business operates.
            </p>
            <p className="comp-anim">
              Win-Toju seeks to maintain its corporate and regulatory standing in line with the requirements applicable to its activities and to provide relevant supporting information during client onboarding, vendor registration, tendering and other due-diligence processes.
            </p>
          </div>
        </section>

        {/* COMPLIANCE PILLARS */}
        <section className="space-y-8">
          <div className="comp-anim">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operational Integrity</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Governance & Operational Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliancePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-corporate-red transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">{pillar.number}</span>
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-corporate-navy">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION — REGULATORY FRAMEWORK */}
        <section className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operating Environment</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Operating Within Applicable Frameworks</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Win-Toju operates within a business environment governed by corporate, industry and project-specific requirements. Depending on the nature of an engagement, these may include corporate registration requirements, petroleum industry service provider requirements, Nigerian Content requirements, maritime considerations, tax and statutory obligations, and client-specific prequalification or compliance requirements.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We recognize the importance of understanding and addressing the requirements relevant to each engagement.
            </p>
          </div>
        </section>

        {/* REGULATORY RECOGNITION */}
        <section className="space-y-8">
          <div className="comp-anim">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Institutional Alignment</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Regulatory Alignment & Statutory Registrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryBodies.map((body, idx) => (
              <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 shrink-0 bg-corporate-red/5 rounded-lg border border-corporate-red/10 flex items-center justify-center">
                  {body.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-corporate-red uppercase tracking-wider">{body.acronym}</span>
                  <h3 className="font-bold text-corporate-navy text-sm">{body.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{body.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION — DOCUMENTATION & WHAT WE MAINTAIN */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Procurement & Commercial Due Diligence</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Supporting Due Diligence</h2>
            <p className="text-slate-600 leading-relaxed">
              We understand that clients and partners may require corporate, regulatory and compliance documentation as part of vendor registration, prequalification, tendering or contract award processes. Relevant documentation is maintained by the company and may be provided through the appropriate commercial or due-diligence channels where required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintainedDocuments.map((docGroup, idx) => (
              <div key={idx} className="comp-anim bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center gap-2">
                  <FaFolderOpen className="text-corporate-red" />
                  {docGroup.category}
                </h3>
                <ul className="space-y-2.5">
                  {docGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                      <FaCircleCheck className="text-slate-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Secure Channel Note */}
          <div className="comp-anim bg-slate-100 p-4 rounded-lg flex items-center gap-3 text-xs text-slate-600 border border-slate-200 max-w-3xl">
            <FaLock className="text-slate-500 shrink-0" />
            <span>
              To protect proprietary information and comply with corporate data governance standards, statutory and corporate compliance records are provided via formal request channels rather than public download galleries.
            </span>
          </div>
        </section>

        {/* GOVERNANCE, INTEGRITY & CONTINUOUS REVIEW */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-16">
          <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-red text-sm font-bold uppercase tracking-wider">
              <FaShieldHalved />
              Governance & Integrity
            </div>
            <h3 className="text-xl font-bold text-corporate-navy">Responsible Conduct</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Win-Toju is committed to conducting its business with integrity, accountability and respect for applicable legal and regulatory requirements. Our approach to governance is intended to support transparent business relationships, responsible decision-making and the confidence of clients, partners and other stakeholders.
            </p>
          </div>

          <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-red text-sm font-bold uppercase tracking-wider">
              <FaRotate />
              Continuous Review
            </div>
            <h3 className="text-xl font-bold text-corporate-navy">Keeping Our Compliance Current</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Regulatory and client requirements evolve over time. Win-Toju recognizes the importance of periodically reviewing its registrations, documentation and internal practices to ensure they remain appropriate to the nature of its business and the requirements of the sectors it serves.
            </p>
          </div>
        </section>

        {/* DUE-DILIGENCE CTA */}
        <section className="comp-anim bg-corporate-navy text-white p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Corporate & Compliance Enquiries</h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            For vendor registration, prequalification or other due-diligence requirements, our corporate team can provide relevant information through the appropriate process.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?subject=Corporate%20/%20Compliance%20Enquiry"
              className="bg-corporate-red text-white hover:bg-red-700 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
            >
              Contact Our Corporate Team <FaArrowRight />
            </Link>
            <Link
              href="/contact?subject=Request%20Company%20Information"
              className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              Request Company Information <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
