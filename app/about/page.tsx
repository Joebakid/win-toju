"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaArrowRight,
  FaShieldHalved,
  FaAward,
  FaBuildingColumns,
  FaUsers,
  FaHandshakeAngle,
  FaScaleBalanced,
  FaScrewdriverWrench,
  FaAnchor,
  FaTruckFast,
  FaTrashCan,
  FaFileContract,
  FaUserGroup,
  FaCompass,
  FaDiagramProject,
  FaXmark,
  FaDownload,
  FaEye,
} from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers } from "@/lib/teamData";

// --- DATA STRUCTURES ---

const companyFacts = [
  { label: "Year Established", value: "2020" },
  { label: "Corporate Registration", value: "RC 1744024" },
  { label: "Headquarters", value: "Warri, Delta State" },
  { label: "Primary Market", value: "Nigeria" },
  { label: "Core Business Focus", value: "Industrial Services" },
];

const timelineMilestones = [
  { year: "2020", title: "Company Established", desc: "Win-Toju System Enterprise Limited incorporated under CAC (RC 1744024) in Warri, Delta State." },
  { year: "2021", title: "Operational Foundation", desc: "Established core logistics and specialized transportation operations across the Niger Delta." },
  { year: "2022", title: "Regulatory Compliance", desc: "Secured key operating permits from NUPRC and NIMASA as a registered shipping & services firm." },
  { year: "2023", title: "Offshore Support Expansion", desc: "Expanded fleet and marine logistics operations to support major offshore asset management." },
  { year: "2024", title: "NCDMB / NOGIC JQS Certification", desc: "Achieved full NCDMB registration for onshore waste management and local labour supply." },
  { year: "2025", title: "Integrated Industrial Contracting", desc: "Scaled turn-key engineering, manpower supply, and claims agency operations across Nigeria." },
  { year: "2026", title: "Next-Gen Indigenous Growth", desc: "Driving strategic partnerships and technological innovation in marine & energy infrastructure support." },
];

const strategicPillars = [
  { title: "PEOPLE", desc: "Developing competent Nigerian professionals and technical personnel.", icon: FaUsers },
  { title: "CAPABILITY", desc: "Strengthening technical and operational capacity.", icon: FaScrewdriverWrench },
  { title: "PARTNERSHIPS", desc: "Building strategic relationships with qualified local and international organizations.", icon: FaHandshakeAngle },
  { title: "COMPLIANCE", desc: "Maintaining strong regulatory and governance standards.", icon: FaScaleBalanced },
  { title: "EXECUTION", desc: "Delivering projects safely, efficiently, and professionally.", icon: FaDiagramProject },
  { title: "GROWTH", desc: "Expanding sustainably into new capabilities and markets.", icon: FaCompass },
];

const capabilities = [
  {
    number: "01",
    title: "Marine Logistics & Special Transportation",
    desc: "Specialized marine logistics and transportation supporting offshore operations.",
    items: ["Marine vessel supply", "Vessel operations", "Specialized transportation", "Offshore logistical support", "Marine security & escort", "Mooring services", "Houseboats & Barges"],
    icon: FaAnchor,
  },
  {
    number: "02",
    title: "Offshore Support",
    desc: "Marine and offshore support services designed to help clients maintain safe, efficient, and reliable operations.",
    items: ["Offshore asset support", "Deck cargo handling", "Crew transfer operations", "Field support vessels"],
    icon: FaTruckFast,
  },
  {
    number: "03",
    title: "Onshore Waste Management",
    desc: "Compliant onshore waste management solutions supporting oil & gas operations and environmental responsibilities.",
    items: ["NCDMB/NOGIC JQS certified", "Hazardous & non-hazardous disposal", "Environmental compliance", "Site remediation support"],
    icon: FaTrashCan,
  },
  {
    number: "04",
    title: "General Contracting & Claims Agency",
    desc: "General contracting and professional claims agency services for project execution and corporate representation.",
    items: ["Project execution support", "Claims agency & representation", "Technical procurement", "Site infrastructure"],
    icon: FaFileContract,
  },
  {
    number: "05",
    title: "Indigenous Labour Supply",
    desc: "Competent Nigerian technical, management, and local contractor personnel supporting project requirements.",
    items: ["100% Nigerian technical workforce", "Management personnel supply", "Local contractor mobilization", "Regulatory workforce compliance"],
    icon: FaUserGroup,
  },
];

const operatingPrinciples = [
  { number: "01", title: "Safety First", desc: "Protecting our people, clients, assets, and the environment is fundamental to our operations." },
  { number: "02", title: "Operational Excellence", desc: "We plan, coordinate, and execute with discipline and attention to detail." },
  { number: "03", title: "Compliance", desc: "We operate within applicable laws, regulatory requirements, and client standards." },
  { number: "04", title: "Accountability", desc: "We take ownership of our commitments, responsibilities, and deliverables." },
  { number: "05", title: "Local Expertise", desc: "We leverage indigenous knowledge, personnel, and partnerships to create practical solutions." },
  { number: "06", title: "Continuous Improvement", desc: "We continually strengthen our systems, people, capabilities, and methods of execution." },
];

const contentPillars = [
  { title: "PEOPLE", desc: "Training and developing Nigerian professionals." },
  { title: "PARTNERSHIPS", desc: "Building relationships with qualified indigenous businesses." },
  { title: "PROCUREMENT", desc: "Supporting compliant Nigerian suppliers and manufacturers." },
  { title: "KNOWLEDGE TRANSFER", desc: "Using strategic partnerships to strengthen indigenous technical capability." },
];

const credentials = [
  { id: "cac", agency: "CAC", title: "Corporate Affairs Commission", detail: "RC 1744024 - Incorporated 10 Dec 2020", docPath: "/docs/cac-certificate.pdf" },
  { id: "nuprc", agency: "NUPRC", title: "Nigerian Upstream Petroleum Regulatory Commission", detail: "Specialized Transportation & Offshore Support Services", docPath: "/docs/nuprc-permit.pdf" },
  { id: "nimasa", agency: "NIMASA", title: "Nigerian Maritime Administration and Safety Agency", detail: "Registered Shipping Company", docPath: "/docs/nimasa-registration.pdf" },
  { id: "nogic", agency: "NCDMB / NOGIC JQS", title: "Nigerian Content Development & Monitoring Board", detail: "Registered Service Company & Onshore Waste Management", docPath: "/docs/ncdmb-certificate.pdf" },
  { id: "tin", agency: "TIN", title: "Tax Identification Number", detail: "Federal Inland Revenue Service Tax Clearance", docPath: "/docs/tax-clearance.pdf" },
];

const corporateValues = [
  { title: "INTEGRITY", desc: "We act honestly, transparently, and responsibly." },
  { title: "EXCELLENCE", desc: "We pursue high standards in everything we execute." },
  { title: "SAFETY", desc: "We protect people, assets, and the environment." },
  { title: "ACCOUNTABILITY", desc: "We take responsibility for our commitments and results." },
  { title: "COLLABORATION", desc: "We create value through strong partnerships." },
  { title: "INNOVATION", desc: "We continually seek better ways to solve operational challenges." },
  { title: "LOCAL VALUE", desc: "We believe in developing Nigerian people, businesses, and capabilities." },
];

export default function WhoWeArePage() {
  const pageRef = useRef<HTMLElement>(null);
  const [selectedDoc, setSelectedDoc] = useState<typeof credentials[0] | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );

      // Section Animations
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 35, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-white text-corporate-navy relative overflow-hidden">

      {/* STICKY SECONDARY NAVIGATION */}
      <nav className="hidden lg:block sticky top-20 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 text-xs font-bold uppercase tracking-wider py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-corporate-red font-black">WHO WE ARE</span>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="#identity" className="hover:text-white transition-colors">Identity</a>
            <a href="#story" className="hover:text-white transition-colors">Our Story</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#local-content" className="hover:text-white transition-colors">Nigerian Content</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
            <a href="#hse" className="hover:text-white transition-colors">HSE & Quality</a>
          </div>
        </div>
      </nav>

      {/* 5. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-corporate-navy text-white pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
        {/* Full-width Industrial Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000"
            alt="Offshore Marine Logistics Operations"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-corporate-navy/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full space-y-8">
          <div className="hero-anim inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-corporate-red font-bold">Who We Are</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className="hero-anim text-corporate-red font-bold tracking-widest uppercase text-xs sm:text-sm block">
              WHO WE ARE
            </span>
            <h1 className="hero-anim text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Engineering Industrial Possibilities. <br />
              <span className="text-corporate-red">Delivering with Precision.</span>
            </h1>
            <p className="hero-anim text-gray-300 text-base sm:text-xl max-w-3xl leading-relaxed pt-2">
              Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management, and workforce solutions to the energy, oil & gas, and infrastructure sectors.
            </p>
          </div>

          <div className="hero-anim flex flex-wrap gap-4 pt-4">
            <a
              href="#capabilities"
              className="bg-corporate-red text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-900/30"
            >
              <span>Explore Our Capabilities</span>
              <FaArrowRight />
            </a>
            <a
              href="#identity"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <span>Meet Win-Toju</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28 py-20">

        {/* 6. CORPORATE IDENTITY */}
        <section id="identity" className="gsap-reveal scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-200 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR IDENTITY</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy leading-tight">
              An Indigenous Company Built for Industrial Execution
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Win-Toju System Enterprise Limited is an indigenous Nigerian company established to provide dependable technical, logistics, and contracting solutions to industries where operational reliability, regulatory compliance, and disciplined execution are critical.
              </p>
              <p>
                Incorporated on 10 December 2020, Win-Toju operates from Warri, Delta State, with a strategic focus on supporting Nigeria&apos;s energy, oil & gas, and infrastructure sectors.
              </p>
              <p>
                Our capabilities span marine logistics, offshore support, specialized transportation, onshore waste management, general contracting, claims agency, and indigenous labour supply.
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                We combine local knowledge, professional expertise, regulatory awareness, and strategic partnerships to deliver practical solutions aligned with the requirements of modern industrial operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 md:p-10 border border-slate-800 space-y-8 shadow-xl">
            <div>
              <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">At a Glance</span>
              <h3 className="text-2xl font-black text-white mt-1">Key Corporate Facts</h3>
            </div>
            <div className="divide-y divide-slate-800">
              {companyFacts.map((fact, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{fact.label}</span>
                  <span className="text-white font-bold text-sm text-right">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
              Regulatory Credentials: NUPRC, NIMASA, and NCDMB / NOGIC JQS Certified.
            </div>
          </div>
        </section>

        {/* 7. OUR STORY & TIMELINE */}
        <section id="story" className="gsap-reveal scroll-mt-32 space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR STORY</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Built from Indigenous Capability. Driven by Industrial Purpose.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju was established with a clear understanding of the evolving demands of Nigeria&apos;s industrial economy: the need for capable indigenous companies that combine local knowledge, technical competence, responsive logistics, and disciplined project execution.
            </p>
          </div>

          <div className="relative border-l-2 border-corporate-red/30 pl-6 md:pl-10 space-y-10 ml-2 md:ml-4">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-corporate-red border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 space-y-2 hover:border-corporate-red transition-colors">
                  <span className="text-corporate-red font-black text-sm block">{m.year}</span>
                  <h3 className="text-xl font-bold text-corporate-navy">{m.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. VISION & MISSION */}
        <section className="gsap-reveal grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-200 pb-20">
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR VISION</span>
              <h3 className="text-2xl md:text-3xl font-black leading-tight">Purpose That Guides Our Growth</h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                To become a trusted Nigerian industrial services company recognized for excellence in engineering support, marine logistics, contracting, and sustainable project execution.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
              Long-term industrial recognition and sustainable execution.
            </div>
          </div>

          <div className="bg-corporate-navy text-white p-8 md:p-12 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR MISSION</span>
              <h3 className="text-2xl md:text-3xl font-black leading-tight">Delivering Value & Local Capability</h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                To deliver reliable, compliant, and professionally executed industrial solutions that create measurable value for our clients while advancing Nigerian Content, developing local capabilities, and contributing to sustainable economic growth.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
              Compliant execution driving Nigerian Content.
            </div>
          </div>
        </section>

        {/* 9. STRATEGIC DIRECTION */}
        <section className="gsap-reveal space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">STRATEGIC DIRECTION</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Building a Stronger Indigenous Industrial Platform
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Nigeria&apos;s industrial future requires indigenous companies capable of more than providing individual services. It requires organizations that understand complex operating environments, mobilize resources efficiently, comply with regulatory requirements, and deliver consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-4 hover:border-corporate-red transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corporate-red">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-corporate-navy text-base">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. OUR INTEGRATED CAPABILITIES */}
        <section id="capabilities" className="gsap-reveal scroll-mt-32 space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">WHAT WE DO</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Comprehensive Capabilities for Demanding Operations
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju operates across five core divisions engineered to support energy, marine, and industrial infrastructure projects.
            </p>
          </div>

          <div className="space-y-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.number} className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-corporate-red transition-colors">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-corporate-red font-black text-2xl">{cap.number}</span>
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corporate-navy">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-corporate-navy">{cap.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                  <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-corporate-navy block mb-4">Supporting Services</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cap.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-corporate-red" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. HOW WE WORK */}
        <section className="gsap-reveal space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR OPERATING PHILOSOPHY</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              The Standards Behind Every Engagement
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our services are only as strong as the standards behind their execution. Win-Toju approaches every engagement with a commitment to safety, quality, accountability, compliance, and operational discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((p) => (
              <div key={p.number} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-corporate-red transition-colors">
                <span className="text-corporate-red font-black text-xs uppercase tracking-widest block">{p.number} — PRINCIPLE</span>
                <h3 className="text-lg font-black text-corporate-navy">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. NIGERIAN CONTENT */}
        <section id="local-content" className="gsap-reveal scroll-mt-32 bg-slate-900 text-white p-8 md:p-14 rounded-3xl border border-slate-800 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR INDIGENOUS COMMITMENT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Building Nigerian Capacity. Creating Indigenous Value.
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              At Win-Toju, Nigerian Content is not simply a regulatory requirement. It is an important part of how we build our business. We believe sustainable participation in Nigeria&apos;s energy and industrial economy requires deliberate investment in Nigerian people, businesses, technical capabilities, and local supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentPillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <span className="text-corporate-red font-black text-xs uppercase tracking-widest block">{pillar.title}</span>
                <p className="text-slate-300 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 13. CREDENTIALS & COMPLIANCE */}
        <section id="credentials" className="gsap-reveal scroll-mt-32 space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR CREDENTIALS</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Trusted to Operate in Regulated Environments
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju maintains the statutory registrations, certifications, and regulatory credentials required to operate within its areas of business in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.id}
                onClick={() => setSelectedDoc(cred)}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4 cursor-pointer hover:border-corporate-red hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center font-black text-sm">
                  {cred.agency}
                </div>
                <div>
                  <h3 className="font-black text-corporate-navy text-base group-hover:text-corporate-red transition-colors">{cred.title}</h3>
                  <p className="text-slate-500 text-xs mt-1">{cred.detail}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-corporate-navy group-hover:text-corporate-red">
                  <span>Preview Certificate</span>
                  <FaEye />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 14. LEADERSHIP SECTION */}
        <section id="leadership" className="gsap-reveal scroll-mt-32 space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR LEADERSHIP</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              People Behind the Execution
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju is led by a multidisciplinary team of indigenous professionals with responsibilities spanning executive management, finance, operations, project execution, local content, and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-corporate-red transition-all group flex flex-col justify-between">
                <div className="p-8 space-y-4">
                  <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">{member.role}</span>
                  <h3 className="text-2xl font-black text-corporate-navy group-hover:text-corporate-red transition-colors">{member.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">{member.summary}</p>
                </div>
                <div className="p-8 pt-0">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-corporate-navy hover:text-corporate-red transition-colors"
                  >
                    <span>Read Full Profile</span>
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 15. HSE & QUALITY */}
        <section id="hse" className="gsap-reveal scroll-mt-32 space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR STANDARD</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Safety and Quality Are Not Negotiable
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our commitment to Health, Safety, and Environment is embedded in the way we plan, mobilize, and execute our operations. We apply structured risk management, quality assurance, and operational control measures to protect personnel, assets, clients, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <FaShieldHalved className="w-8 h-8 text-corporate-red" />
              <h3 className="font-black text-corporate-navy text-lg">HSE</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Risk-based operational planning and zero-LTI safety management across field and marine sites.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <FaAward className="w-8 h-8 text-corporate-red" />
              <h3 className="font-black text-corporate-navy text-lg">QUALITY</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Structured QA/QC protocols and operational controls ensuring compliance with industry standards.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-3">
              <FaBuildingColumns className="w-8 h-8 text-corporate-red" />
              <h3 className="font-black text-corporate-navy text-lg">ENVIRONMENT</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Responsible, compliant environmental practices and waste management solutions.</p>
            </div>
          </div>
        </section>

        {/* 17. OUR FUTURE & VALUES */}
        <section className="gsap-reveal space-y-12 border-b border-slate-200 pb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">WHERE WE ARE GOING</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Building the Next Generation of Indigenous Industrial Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju&apos;s ambition extends beyond individual contracts. We are building an indigenous industrial services platform capable of supporting increasingly complex requirements across Nigeria&apos;s energy, marine, logistics, and infrastructure sectors.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 space-y-8">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-navy block">CORPORATE VALUES</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateValues.map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-corporate-red font-black text-xs block">{val.title}</span>
                  <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19 & 20. CLOSING STATEMENT & FINAL CTA */}
        <section className="gsap-reveal bg-slate-900 text-white p-10 md:p-16 rounded-3xl border border-slate-800 space-y-8 text-center max-w-5xl mx-auto shadow-2xl">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-corporate-red font-bold text-xs uppercase tracking-widest block">BUILT FOR INDUSTRY</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Let&apos;s Build the Next Operation Together.
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Talk to our team about your marine, logistics, contracting, workforce, or industrial support requirements. Indigenous capability. Professional execution. Industrial confidence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/our-operations"
              className="bg-corporate-red text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>Explore Our Services</span>
              <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <span>Contact Win-Toju</span>
              <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>

      {/* CREDENTIAL DOCUMENT MODAL */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 space-y-6 relative text-corporate-navy shadow-2xl">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2"
            >
              <FaXmark className="w-5 h-5" />
            </button>
            <div className="space-y-2">
              <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">{selectedDoc.agency} Certificate</span>
              <h3 className="text-2xl font-black">{selectedDoc.title}</h3>
              <p className="text-slate-500 text-xs">{selectedDoc.detail}</p>
            </div>
            <div className="bg-slate-100 h-48 rounded-xl flex items-center justify-center border border-slate-200 text-slate-400 text-xs font-semibold">
              [ Document Preview Window ]
            </div>
            <div className="flex gap-3">
              <a
                href={selectedDoc.docPath}
                download
                className="flex-1 bg-corporate-navy text-white text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaDownload />
                <span>Download PDF</span>
              </a>
              <button
                onClick={() => setSelectedDoc(null)}
                className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
