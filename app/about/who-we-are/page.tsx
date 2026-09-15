"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaAnchor, 
  FaShieldHalved, 
  FaTruckFast, 
  FaUsers, 
  FaAward, 
  FaArrowRight, 
  FaCircleCheck, 
  FaBuilding, 
  FaGlobe, 
  FaGears,
  FaFileContract,
  FaLock,
  FaFileInvoiceDollar
} from "react-icons/fa6";
import gsap from "gsap";

export default function WhoWeArePage() {
  const pageRef = useRef<HTMLElement>(null);
  const [selectedCredential, setSelectedCredential] = useState<any>(null);

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

  const stats = [
    { value: "2020", label: "Year Established" },
    { value: "RC 1744024", label: "Corporate Registration" },
    { value: "Warri, Delta State", label: "Headquarters" },
    { value: "Nigeria", label: "Primary Market" },
    { value: "Industrial Services", label: "Core Business Focus" },
  ];

  const timeline = [
    { year: "2020", title: "Company Established", desc: "Win-Toju System Enterprise Limited incorporated." },
    { year: "2021", title: "Operational Foundation", desc: "Established core logistics and contracting frameworks." },
    { year: "2022", title: "Regulatory Compliance", desc: "Secured key operational permits across target sectors." },
    { year: "2023", title: "Offshore Support Expansion", desc: "Expanded fleet and marine support operations." },
    { year: "2024", title: "NCDMB & JQS Certification", desc: "Achieved NCDMB/NOGIC JQS certification." },
    { year: "2025", title: "Integrated Contracting", desc: "Scaled turnkey onshore and offshore contracts." },
    { year: "2026", title: "Next-Gen Indigenous Growth", desc: "Driving strategic expansion in technical capabilities." },
  ];

  const capabilities = [
    {
      num: "01",
      title: "Marine Logistics & Special Transportation",
      desc: "Specialized marine logistics supporting offshore operations.",
      items: ["Marine vessel supply", "Vessel operations", "Specialized transportation", "Offshore logistical support", "Marine security & escort", "Mooring & Barges"],
    },
    {
      num: "02",
      title: "Offshore Support",
      desc: "Helping clients maintain safe, efficient, and reliable operations in demanding marine environments.",
      items: ["Offshore support services", "Operational support", "Field safety integration"],
    },
    {
      num: "03",
      title: "Onshore Waste Management",
      desc: "Compliant onshore waste solutions supporting energy operations.",
      items: ["Waste management compliance", "Environmental safety", "NCDMB certified protocols"],
    },
    {
      num: "04",
      title: "General Contracting & Claims Agency",
      desc: "Project execution and professional claims agency representation.",
      items: ["Project execution", "Claims representation", "Corporate agency support"],
    },
    {
      num: "05",
      title: "Indigenous Labour Supply",
      desc: "Competent Nigerian technical and management personnel supply.",
      items: ["Technical personnel", "Management staffing", "100% Indigenous workforce focus"],
    },
  ];

  const principles = [
    { num: "01", title: "Safety First", desc: "Protecting our people, assets, and environment is fundamental." },
    { num: "02", title: "Operational Excellence", desc: "We plan, coordinate, and execute with strict discipline." },
    { num: "03", title: "Compliance", desc: "Operating strictly within applicable laws and regulatory standards." },
    { num: "04", title: "Accountability", desc: "We take direct ownership of our commitments and deliverables." },
    { num: "05", title: "Local Expertise", desc: "Leveraging indigenous knowledge and strategic partnerships." },
    { num: "06", title: "Continuous Improvement", desc: "Continually strengthening our operational systems and capabilities." },
  ];

  const credentials = [
    { title: "CAC Certificate", body: "Corporate Registration", ref: "RC 1744024", desc: "Incorporated under the Companies and Allied Matters Act." },
    { title: "NUPRC Permit", body: "Specialized Transportation", ref: "Permit Registered", desc: "Authorized for offshore support and specialized transit." },
    { title: "NIMASA Registration", body: "Shipping Enterprise", ref: "Registered Company", desc: "Certified shipping and marine operator." },
    { title: "NCDMB / NOGIC JQS", body: "Service Enterprise", ref: "Registered Service Provider", desc: "Compliant with Nigerian Content requirements." },
  ];

  const leadership = [
    { name: "Deacon Godwin Toju Ogbaro", role: "Chief Executive Officer" },
    { name: "Mr. Ogbaro Tosan Francis", role: "Financial Director" },
    { name: "Mrs. Betty Ogbaro Owubetime", role: "General Manager" },
    { name: "Mr. Mogbusiaghan Dave Oyibote", role: "Project & Local Content Manager" },
    { name: "Oki Samuel", role: "Company Secretary" },
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
              WHO WE ARE
            </span>
          </div>

          <h1 className="comp-anim text-4xl md:text-6xl font-black tracking-tight text-corporate-navy leading-[1.15]">
            Engineering Industrial Possibilities. <br />
            <span className="text-slate-600">Delivering with Precision.</span>
          </h1>

          <p className="comp-anim text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
            Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management, and workforce solutions.
          </p>

          <div className="comp-anim pt-4 flex flex-wrap gap-4">
            <Link
              href="#capabilities"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg text-sm uppercase tracking-wider"
            >
              Explore Our Capabilities <FaArrowRight />
            </Link>
            <Link
              href="#identity"
              className="bg-slate-100 text-corporate-navy px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              Meet Win-Toju <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* CORPORATE IDENTITY */}
        <section id="identity" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-200 pt-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="comp-anim">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Identity</span>
              <h2 className="text-3xl md:text-4xl font-black text-corporate-navy mt-1">
                An Indigenous Company Built for Industrial Execution
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed pt-2">
              <p className="comp-anim">
                Win-Toju System Enterprise Limited is an indigenous Nigerian company established to provide dependable technical, logistics, and contracting solutions to industries where operational reliability, regulatory compliance, and disciplined execution are critical.
              </p>
              <p className="comp-anim">
                Incorporated on 10 December 2020, Win-Toju operates from Warri, Delta State, with a strategic focus on supporting Nigeria's energy, oil & gas, and infrastructure sectors.
              </p>
              <p className="comp-anim">
                We combine local knowledge, professional expertise, regulatory awareness, and strategic partnerships to deliver practical solutions aligned with the requirements of modern industrial operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 comp-anim bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-corporate-navy uppercase tracking-wider border-b border-slate-200 pb-3">Company Quick Facts</h3>
            <div className="space-y-4">
              {stats.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-medium text-slate-500">{s.label}</span>
                  <span className="font-bold text-corporate-navy text-xs md:text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY & TIMELINE */}
        <section className="space-y-12 border-t border-slate-200 pt-16">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">
              Built from Indigenous Capability. Driven by Industrial Purpose.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Win-Toju was established with a clear understanding of the evolving demands of Nigeria's industrial economy: the need for capable indigenous companies that combine local knowledge, technical competence, responsive logistics, and disciplined project execution.
            </p>
          </div>

          <div className="relative border-l-2 border-corporate-red ml-4 md:ml-32 space-y-10 pt-2">
            {timeline.map((t, idx) => (
              <div key={idx} className="comp-anim relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-corporate-red border-4 border-white shadow-xs" />
                <span className="md:absolute md:-left-32 md:top-0 font-mono font-bold text-corporate-red text-base md:text-lg block mb-1 md:mb-0">{t.year}</span>
                <h3 className="text-lg font-bold text-corporate-navy mb-1">{t.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-xl">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VISION, MISSION & STRATEGIC PILLARS */}
        <section className="space-y-12 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
          <div className="comp-anim text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Direction</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Purpose That Guides Our Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-corporate-red uppercase tracking-wider">Vision Statement</span>
              <h3 className="text-xl font-bold text-corporate-navy">Our Vision</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                To become a trusted Nigerian industrial services company recognized for excellence in engineering support, marine logistics, contracting, and sustainable project execution.
              </p>
            </div>
            <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-corporate-red uppercase tracking-wider">Mission Statement</span>
              <h3 className="text-xl font-bold text-corporate-navy">Our Mission</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                To deliver reliable, compliant, and professionally executed industrial solutions that create measurable value for our clients while advancing Nigerian Content, developing local capabilities, and contributing to sustainable economic growth.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 space-y-6">
            <h3 className="text-xs font-bold text-corporate-navy uppercase tracking-wider text-center">Strategic Pillars</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "PEOPLE", desc: "Developing competent Nigerian professionals." },
                { label: "CAPABILITY", desc: "Strengthening operational capacity." },
                { label: "PARTNERSHIPS", desc: "Building qualified strategic relationships." },
                { label: "COMPLIANCE", desc: "Maintaining high governance standards." },
                { label: "EXECUTION", desc: "Delivering safely and efficiently." },
                { label: "GROWTH", desc: "Expanding sustainably into new markets." },
              ].map((p, idx) => (
                <div key={idx} className="comp-anim bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs">
                  <span className="block font-bold text-corporate-red text-xs tracking-wider">{p.label}</span>
                  <p className="text-[11px] text-slate-500 leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRATED CAPABILITIES */}
        <section id="capabilities" className="space-y-8 border-t border-slate-200 pt-16">
          <div className="comp-anim max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Comprehensive Capabilities for Demanding Operations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-corporate-red transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">{c.num}</span>
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-corporate-red font-bold text-xs">
                      {c.num}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-corporate-navy">{c.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                      <FaCircleCheck className="text-slate-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATING PHILOSOPHY */}
        <section className="space-y-8">
          <div className="comp-anim">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Operating Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">The Standards Behind Every Engagement</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <span className="text-xs font-mono font-bold text-corporate-red">{p.num}</span>
                <h3 className="text-base font-bold text-corporate-navy">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NIGERIAN CONTENT */}
        <section className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Indigenous Commitment</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Building Nigerian Capacity. Creating Indigenous Value.</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              At Win-Toju, Nigerian Content is not simply a regulatory requirement. It is an important part of how we build our business through deliberate investment in local personnel, procurement, and knowledge transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "PEOPLE", desc: "Training and developing Nigerian professionals." },
              { title: "PARTNERSHIPS", desc: "Building relationships with qualified indigenous businesses." },
              { title: "PROCUREMENT", desc: "Supporting compliant Nigerian suppliers and manufacturers." },
              { title: "KNOWLEDGE TRANSFER", desc: "Strengthening indigenous technical capability." },
            ].map((card, idx) => (
              <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <h3 className="font-bold text-corporate-red text-xs tracking-wider">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CREDENTIALS & COMPLIANCE */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="comp-anim">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Credentials</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Trusted to Operate in Regulated Environments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCredential(cred)}
                className="comp-anim bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-corporate-red"
              >
                <div className="w-10 h-10 rounded-lg bg-corporate-red/5 border border-corporate-red/10 flex items-center justify-center">
                  <FaFileContract className="text-corporate-red w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-navy text-sm">{cred.title}</h3>
                  <p className="text-slate-500 text-xs">{cred.body}</p>
                </div>
                <span className="text-[11px] font-bold text-corporate-red uppercase tracking-wider inline-flex items-center gap-1">
                  {cred.ref} <FaArrowRight className="text-[9px]" />
                </span>
              </div>
            ))}
          </div>

          {/* Modal Preview */}
          {selectedCredential && (
            <div className="fixed inset-0 bg-corporate-navy/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white p-8 max-w-md w-full rounded-2xl border border-slate-200 shadow-2xl space-y-4">
                <div className="space-y-1 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold text-corporate-red uppercase tracking-wider">{selectedCredential.ref}</span>
                  <h3 className="text-xl font-bold text-corporate-navy">{selectedCredential.title}</h3>
                  <p className="text-xs text-slate-500">{selectedCredential.body}</p>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{selectedCredential.desc}</p>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCredential(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact?subject=Credential%20Verification%20Request"
                    className="px-4 py-2 bg-corporate-red text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Request Details
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="comp-anim max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">People Behind the Execution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leadership.map((l, idx) => (
              <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-corporate-navy text-xs border border-slate-200">
                  {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-corporate-navy text-xs leading-snug">{l.name}</h3>
                  <p className="text-[10px] text-corporate-red font-bold uppercase tracking-wider">{l.role}</p>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">Experienced leadership committed to operational integrity.</p>
              </div>
            ))}
          </div>
        </section>

        {/* HSE & QUALITY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-200 pt-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="comp-anim space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Standard</span>
              <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Safety and Quality Are Not Negotiable</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                Our commitment to Health, Safety, and Environment is embedded in the way we plan, mobilize, and execute operations, keeping a firm zero-LTI objective at our center.
              </p>
            </div>
            <div className="comp-anim pt-2">
              <Link
                href="/about/hse-quality-environment"
                className="inline-flex items-center gap-2 text-xs font-bold text-corporate-red hover:text-red-700 uppercase tracking-wider"
              >
                Explore HSE & QA/QC Standards <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "HSE", desc: "Risk-based planning and safety protocols." },
              { title: "QUALITY", desc: "Structured QA/QC operational controls." },
              { title: "ENVIRONMENT", desc: "Responsible environmental practices." },
            ].map((p, idx) => (
              <div key={idx} className="comp-anim bg-slate-50 p-5 rounded-xl border border-slate-200 text-center space-y-1">
                <h3 className="font-bold text-corporate-navy text-xs tracking-wider">{p.title}</h3>
                <p className="text-[11px] text-slate-500 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="comp-anim bg-corporate-navy text-white p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Let's Build the Next Operation Together.</h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Talk to our team about your marine, logistics, contracting, workforce, or industrial support requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/operations"
              className="bg-corporate-red text-white hover:bg-red-700 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
            >
              Explore Our Services <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              Contact Win-Toju <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}