"use client";

import React from "react";
import Link from "next/link";
import {
  FaClipboardCheck,
  FaDownload,
  FaQuoteLeft,
  FaCheckCircle
} from "react-icons/fa";

// Exact relative import based on your folder tree
import PageLayout from "../../components/layout/PageLayout-aboutus";

export default function HSEQualityEnvironmentPage() {
  return (
    <PageLayout
      hero={{
        prefix: "HSE, QUALITY & ENVIRONMENT",
        slides: [
          {
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000",
            headline: "Safety in Every Decision.",
            sub: "Quality in Every Delivery."
          }
        ],
        description: "Win-Toju is committed to conducting its activities responsibly, with a focus on protecting people, maintaining service quality, managing operational risks and reducing environmental impact.",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "About" },
          { label: "HSE & Quality" }
        ],
        buttons: [
          { label: "View Our HSE Policy", href: "#policy-documents", variant: "primary" },
          { label: "Certifications & Compliance", href: "#certifications", variant: "secondary" }
        ]
      }}
      cta={{
        prefix: "OPERATIONAL STANDARD",
        headline: "Responsible Work. Reliable Delivery.",
        paragraphs: [
          "Our commitment to HSE, quality and environmental responsibility is part of our broader commitment to serving clients professionally and contributing responsibly to the industries and communities in which we operate."
        ],
        buttons: [
          { label: "Contact Win-Toju", href: "/contact", variant: "primary" },
          { label: "Our Certifications & Compliance", href: "/about/certifications-compliance", variant: "secondary" }
        ]
      }}
    >
      {/* EXECUTIVE STATEMENT / CORE POSITIONING */}
      <section className="comp-anim bg-slate-50 border-l-4 border-corporate-navy p-8 md:p-10 rounded-r-2xl relative">
        <FaQuoteLeft className="text-slate-200 text-5xl absolute top-4 right-6 pointer-events-none" />
        <p className="text-slate-700 text-lg md:text-xl italic relative z-10 leading-relaxed">
          “At Win-Toju, we believe responsible service delivery begins with protecting people, maintaining quality and minimizing environmental impact. HSE and quality considerations are integrated into the way we plan, coordinate and execute our activities.”
        </p>
        <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
          — Dcn Godwin Toju Ogbaro
        </div>
      </section>

      {/* SECTION — OUR HSE COMMITMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="comp-anim">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy mt-1">
              Protecting People. Preventing Harm.
            </h2>
          </div>
          <p className="comp-anim text-slate-600 leading-relaxed">
            The safety and wellbeing of people are fundamental to responsible operations. Win-Toju is committed to identifying hazards, assessing risks and implementing appropriate controls throughout the planning and execution of our activities.
          </p>
          <p className="comp-anim text-slate-600 leading-relaxed">
            We expect our personnel, contractors and partners to work responsibly and to maintain awareness of the risks associated with their activities.
          </p>
        </div>

        {/* Industrial Visual Approach Flow */}
        <div className="lg:col-span-6 comp-anim bg-corporate-navy text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Operational Risk Framework</h3>
          <div className="grid grid-cols-1 gap-3 font-mono text-sm">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
              <span className="text-corporate-red font-bold">01. PLAN</span>
              <span className="text-xs text-slate-300">Establish engagement scope</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
              <span className="text-corporate-red font-bold">02. IDENTIFY</span>
              <span className="text-xs text-slate-300">Hazard identification & analysis</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
              <span className="text-corporate-red font-bold">03. CONTROL</span>
              <span className="text-xs text-slate-300">Implement mitigation measures</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
              <span className="text-corporate-red font-bold">04. EXECUTE</span>
              <span className="text-xs text-slate-300">Disciplined operational delivery</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
              <span className="text-corporate-red font-bold">05. REVIEW</span>
              <span className="text-xs text-slate-300">Lessons learned & feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* HSE MANAGEMENT APPROACH */}
      <section className="space-y-8">
        <div className="comp-anim">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operational Safety</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Our HSE Approach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-slate-300">01</span>
            <h3 className="text-lg font-bold text-corporate-navy">Risk Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We seek to identify potential hazards and assess operational risks before activities commence, with appropriate controls established according to the nature and requirements of each engagement.</p>
          </div>
          <div className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-slate-300">02</span>
            <h3 className="text-lg font-bold text-corporate-navy">Safe Work Practices</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We promote safe systems of work, appropriate procedures and responsible behaviour throughout our activities.</p>
          </div>
          <div className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-slate-300">03</span>
            <h3 className="text-lg font-bold text-corporate-navy">Competence & Awareness</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We recognize the importance of competent personnel, appropriate training and continuous safety awareness in achieving safe and effective operations.</p>
          </div>
          <div className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-2xl font-black text-slate-300">04</span>
            <h3 className="text-lg font-bold text-corporate-navy">Continuous Improvement</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We encourage the reporting, review and learning from incidents, observations and operational experience to strengthen our HSE performance.</p>
          </div>
        </div>
      </section>

      {/* SECTION — QUALITY */}
      <section className="space-y-8 border-t border-slate-200 pt-16">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Quality Assurance Pillar</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Quality Is Part of the Delivery</h2>
          <p className="text-slate-600 leading-relaxed">
            Quality is integral to the value we provide to our clients. Our approach is focused on understanding requirements, coordinating activities effectively and delivering services in accordance with agreed specifications, applicable standards and project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="comp-anim border-l-2 border-slate-300 pl-4 space-y-2">
            <h3 className="font-bold text-corporate-navy">Client Requirements</h3>
            <p className="text-slate-600 text-sm">Understanding the scope, specifications and expectations of each engagement.</p>
          </div>
          <div className="comp-anim border-l-2 border-slate-300 pl-4 space-y-2">
            <h3 className="font-bold text-corporate-navy">Planning & Coordination</h3>
            <p className="text-slate-600 text-sm">Ensuring activities are appropriately planned and coordinated before execution.</p>
          </div>
          <div className="comp-anim border-l-2 border-slate-300 pl-4 space-y-2">
            <h3 className="font-bold text-corporate-navy">Quality Control</h3>
            <p className="text-slate-600 text-sm">Maintaining appropriate checks and controls throughout relevant activities.</p>
          </div>
          <div className="comp-anim border-l-2 border-slate-300 pl-4 space-y-2">
            <h3 className="font-bold text-corporate-navy">Review & Improvement</h3>
            <p className="text-slate-600 text-sm">Using feedback, performance information and lessons learned to improve delivery.</p>
          </div>
        </div>

        {/* Quality Management Quote */}
        <div className="comp-anim bg-slate-900 text-white p-8 rounded-xl flex items-start gap-4">
          <FaClipboardCheck className="text-corporate-red text-3xl shrink-0 mt-1" />
          <div className="space-y-2">
            <p className="italic text-slate-200">
              “We do not view quality as a final inspection. It is a responsibility that begins with planning and continues throughout delivery.”
            </p>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">— Mrs Betty Ogbaro Owubetime</div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL RESPONSIBILITY & PRIORITIES */}
      <section className="space-y-8 border-t border-slate-200 pt-16">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Stewardship</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Responsible Operations. Reduced Environmental Impact.</h2>
          <p className="text-slate-600 leading-relaxed">
            Win-Toju recognizes the importance of protecting the environment in the communities and locations where activities are undertaken. We seek to manage environmental considerations responsibly by identifying potential impacts, observing applicable environmental requirements and promoting practices that reduce unnecessary waste, pollution and environmental harm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="comp-anim bg-slate-50 p-6 rounded-xl space-y-2 border border-slate-100">
            <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">Waste Management</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Responsible handling, segregation and disposal of waste in accordance with applicable requirements.</p>
          </div>
          <div className="comp-anim bg-slate-50 p-6 rounded-xl space-y-2 border border-slate-100">
            <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">Pollution Prevention</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Taking reasonable measures to prevent avoidable releases, contamination and environmental harm.</p>
          </div>
          <div className="comp-anim bg-slate-50 p-6 rounded-xl space-y-2 border border-slate-100">
            <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">Resource Responsibility</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Promoting responsible use of materials, energy and other resources where practicable.</p>
          </div>
          <div className="comp-anim bg-slate-50 p-6 rounded-xl space-y-2 border border-slate-100">
            <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">Environmental Awareness</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Encouraging personnel and project partners to understand and manage environmental responsibilities associated with their activities.</p>
          </div>
        </div>
      </section>

      {/* HSE & QUALITY IN PROJECT DELIVERY */}
      <section className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
        <div className="comp-anim space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Integration</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">From Planning to Delivery</h2>
        </div>

        {/* Horizontal Process Grid */}
        <div className="comp-anim grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-bold text-slate-700">
          {["CLIENT REQUIREMENTS", "PROJECT PLANNING", "RISK IDENTIFICATION", "HSE & QUALITY CONTROLS", "EXECUTION", "MONITORING", "REVIEW & IMPROVEMENT"].map((step, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-slate-200 flex flex-col items-center justify-center min-h-[70px]">
              <span className="text-[10px] text-corporate-red font-mono mb-1">0{idx + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <p className="comp-anim text-slate-600 text-sm leading-relaxed max-w-4xl pt-2">
          HSE and quality considerations are incorporated into our approach to project and service delivery, with controls adapted to the scope, location, risks and requirements of each engagement.
        </p>
      </section>

      {/* CONTRACTOR & PARTNER EXPECTATIONS */}
      <section className="space-y-6">
        <div className="comp-anim space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Supply Chain</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Shared Responsibility</h2>
        </div>
        <p className="comp-anim text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
          Safe and responsible project execution depends on everyone involved. Win-Toju expects contractors, suppliers and project partners engaged in our activities to understand and observe applicable HSE, quality and environmental requirements relevant to their scope of work.
        </p>
        <div className="comp-anim grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-semibold text-slate-700">
          {["Compliance with applicable requirements", "Safe working practices", "Competent personnel", "Appropriate risk controls", "Incident reporting", "Environmental responsibility", "Quality of service delivery"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded border border-slate-200">
              <FaCheckCircle className="text-corporate-red shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HSE CULTURE & ASPIRATION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-corporate-navy">Safety Is Everyone's Responsibility</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            HSE performance is strengthened when safety is treated as a shared responsibility rather than the sole responsibility of the HSE function. We encourage personnel to remain alert to hazards, communicate concerns, report unsafe conditions and contribute to a culture where work can be stopped or reviewed when safety requirements are not adequately addressed.
          </p>
        </div>
        <div className="comp-anim bg-white p-8 rounded-xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-corporate-navy">Our Aspiration: Zero Hazard</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Win-Toju strives to prevent injury, ill health, environmental hazards and avoidable operational incidents through effective planning, risk management, competent execution and continuous improvement.
          </p>
        </div>
      </section>

      {/* POLICY DOCUMENTS */}
      <section id="policy-documents" className="space-y-6 border-t border-slate-200 pt-16">
        <div className="comp-anim">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Documentation</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Policy Documents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HSE Policy Download */}
          <div className="comp-anim bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-corporate-navy">HSE Policy</h3>
                <span className="text-[10px] bg-slate-200 text-slate-700 font-mono px-2 py-0.5 rounded">PDF</span>
              </div>
              <p className="text-slate-600 text-xs">
                Our HSE Policy sets out Win-Toju's commitment to protecting people, maintaining safe operations, managing environmental responsibilities and meeting applicable requirements.
              </p>
            </div>
            <a
              href="/docs/win-toju-hse-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-corporate-red hover:underline pt-2"
            >
              <FaDownload /> Download HSE Policy
            </a>
          </div>

          {/* Quality Policy Download */}
          <div className="comp-anim bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-corporate-navy">Quality Policy</h3>
                <span className="text-[10px] bg-slate-200 text-slate-700 font-mono px-2 py-0.5 rounded">PDF</span>
              </div>
              <p className="text-slate-600 text-xs">
                Our Quality Policy outlines our commitment to meeting client requirements, maintaining appropriate quality controls and continuously improving our service delivery.
              </p>
            </div>
            <a
              href="/docs/win-toju-quality-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-corporate-red hover:underline pt-2"
            >
              <FaDownload /> Download Quality Policy
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & COMPLIANCE POSITION */}
      <section id="certifications" className="space-y-6 border-t border-slate-200 pt-16">
        <div className="comp-anim space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Regulatory Framework</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Working Within Applicable Requirements</h2>
        </div>
        <p className="comp-anim text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
          Win-Toju is committed to conducting its activities in accordance with applicable Nigerian laws, regulatory requirements, client requirements and relevant industry standards. HSE, quality and environmental considerations are reviewed in the context of each engagement and the requirements applicable to the work being undertaken.
        </p>
      </section>
    </PageLayout>
  );
}