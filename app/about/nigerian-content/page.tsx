"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaUsers,
  FaHandshake,
  FaCartShopping,
  FaLightbulb,
  FaShieldHalved,
  FaArrowRight,
  FaFilePdf,
  FaCheck,
  FaCertificate,
  FaBuilding,
  FaScaleBalanced,
  FaChevronRight
} from "react-icons/fa6";
import gsap from "gsap";

export default function NigerianContentPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nc-anim",
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

  const fourPillars = [
    {
      num: "01",
      title: "PEOPLE",
      subtitle: "Developing Nigerian Talent",
      desc: "We support the participation and development of Nigerian personnel across the technical, operational, administrative and management functions required by our business and project activities.",
      icon: FaUsers,
    },
    {
      num: "02",
      title: "LOCAL PARTICIPATION",
      subtitle: "Creating Opportunities for Indigenous Businesses",
      desc: "We seek to engage qualified Nigerian companies, contractors and service providers where their capabilities and capacity align with project and operational requirements.",
      icon: FaHandshake,
    },
    {
      num: "03",
      title: "LOCAL VALUE",
      subtitle: "Supporting In-Country Procurement",
      desc: "Where applicable and commercially and technically suitable, we support the utilization of Nigerian goods, services and supply-chain capabilities in accordance with project requirements.",
      icon: FaCartShopping,
    },
    {
      num: "04",
      title: "CAPABILITY DEVELOPMENT",
      subtitle: "Strengthening Indigenous Capacity",
      desc: "We recognize that sustainable Nigerian Content depends on continuous development of people, knowledge, technical capability and local business capacity.",
      icon: FaLightbulb,
    },
  ];

  const complianceSteps = [
    { step: "UNDERSTAND", title: "Nigerian Content Requirements" },
    { step: "PLAN", title: "Local Participation Strategy" },
    { step: "ENGAGE", title: "Qualified Nigerian Resources" },
    { step: "EXECUTE", title: "Project Requirements" },
    { step: "DOCUMENT", title: "Nigerian Content Performance" },
    { step: "REPORT", title: "Regulatory Reporting Where Required" },
  ];

  const commitmentsGrid = [
    { title: "LOCAL EMPLOYMENT", desc: "Supporting opportunities for qualified Nigerian personnel." },
    { title: "LOCAL BUSINESS PARTICIPATION", desc: "Engaging qualified indigenous businesses where appropriate." },
    { title: "LOCAL PROCUREMENT", desc: "Supporting qualified Nigerian suppliers and service providers." },
    { title: "SKILLS DEVELOPMENT", desc: "Encouraging the development of technical and professional capability." },
    { title: "KNOWLEDGE TRANSFER", desc: "Supporting the development and sharing of relevant knowledge and expertise." },
    { title: "REGULATORY ALIGNMENT", desc: "Operating with regard to applicable Nigerian Content requirements." },
  ];

  const credentials = [
    { title: "NCDMB Joint Qualification System", reg: "NOGIC JQS Registered", status: "Active / Verified" },
    { title: "Nigerian Content Plan & Alignment", reg: "NOGICD Act 2010 Aligned Framework", status: "Operational Standard" },
    { title: "Indigenous Corporate Status", reg: "RC Registered Nigerian Enterprise", status: "Verified Indigenous Entity" },
  ];

  return (
    <main ref={pageRef} className="min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-corporate-navy relative overflow-hidden">

      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-24 w-full">

        {/* 1. HERO SECTION */}
        <section className="max-w-4xl space-y-6">
          <div className="nc-anim inline-block border-l-4 border-corporate-red pl-4">
            <span className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm">
              NIGERIAN CONTENT
            </span>
          </div>

          <h1 className="nc-anim text-4xl md:text-6xl font-black tracking-tight text-corporate-navy leading-[1.15]">
            Building Nigerian Capacity. <br />
            <span className="text-slate-600">Creating Indigenous Value.</span>
          </h1>

          <p className="nc-anim text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
            As an indigenous Nigerian company, Win-Toju recognizes the importance of developing local capability and creating sustainable value within the Nigerian economy. Our approach to Nigerian Content focuses on people, local participation, responsible procurement, partnerships and the continuous development of in-country capacity.
          </p>

          <div className="nc-anim pt-4 flex flex-wrap gap-4">
            {/* <Link
              href="/certifications-compliance"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
            >
              Our Certifications & Compliance <FaArrowRight />
            </Link> */}
            <Link
              href="/contact"
              className="bg-slate-100 text-corporate-navy px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              Contact Win-Toju <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* 2. SECTION — OUR APPROACH */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="nc-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Operational Ethos</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">
              Nigerian Content Is Part of Our Business Approach
            </h2>
          </div>

          <div className="nc-anim grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
            <div className="lg:col-span-8 space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Nigerian Content is more than a regulatory requirement; it is an important part of building a stronger and more sustainable Nigerian industrial ecosystem.
              </p>
              <p>
                At Win-Toju, we seek to align our operations and project participation with applicable Nigerian Content requirements while creating meaningful opportunities for Nigerian personnel, businesses and service providers.
              </p>
              <p>
                Through local participation, workforce development, indigenous partnerships and responsible sourcing, we aim to contribute to the retention of value within Nigeria in line with the NOGICD framework.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 space-y-3 text-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-corporate-red flex items-center justify-center font-bold">
                <FaScaleBalanced className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">Regulatory Alignment</h3>
              <p className="text-slate-500 leading-relaxed">
                We align our activities with applicable provisions of the Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010 and guidelines from the NCDMB.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FOUR-PILLAR NIGERIAN CONTENT MODEL */}
        <section className="space-y-10">
          <div className="nc-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Strategic Framework</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Four Pillars of Nigerian Content</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="nc-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 hover:border-corporate-red transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-200 group-hover:text-corporate-red transition-colors">{pillar.num}</span>
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-corporate-red">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-corporate-red uppercase tracking-wider">{pillar.title}</h3>
                      <h4 className="text-base font-black text-corporate-navy pt-1">{pillar.subtitle}</h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. PEOPLE & HUMAN CAPITAL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-200 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="nc-anim space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Human Capital</span>
              <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">People Are at the Centre of Nigerian Content</h2>
            </div>
            <div className="nc-anim space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                The development of Nigerian human capital is central to sustainable participation in the energy and industrial sectors.
              </p>
              <p>
                Win-Toju is committed to creating opportunities for qualified Nigerian personnel and supporting the development of skills required across our areas of operation.
              </p>
              <p>
                Our approach recognizes that a strong indigenous industry depends on capable people who can participate effectively in technical, operational, project and management functions.
              </p>
            </div>
            <div className="nc-anim pt-2">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-xs font-bold text-corporate-navy hover:text-corporate-red uppercase tracking-wider transition-colors"
              >
                Explore Career & Development Opportunities <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="nc-anim relative rounded-xl h-48 md:h-60 overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://ik.imagekit.io/luvrld8r9/win-toju-photo/WhatsApp%20Image%202026-08-18%20at%208.57.06%20PM.jpeg?updatedAt=1787083161863"
                alt="Nigerian Technical Personnel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="nc-anim bg-slate-900 rounded-xl h-48 md:h-60 p-6 flex flex-col justify-end text-white border border-slate-800">
              <FaUsers className="w-8 h-8 text-corporate-red mb-3" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Workforce Focus</span>
              <p className="text-xs font-semibold pt-1">Nigerians participating professionally in industrial work.</p>
            </div>
          </div>
        </section>

        {/* 5. INDIGENOUS PARTNERSHIPS & LOCAL PROCUREMENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="nc-anim bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corporate-red">
              <FaHandshake className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Collaborative Growth</span>
            <h3 className="text-2xl font-black text-corporate-navy">Growing Through Local Partnerships</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Complex industrial projects depend on effective collaboration. Win-Toju seeks to work with qualified Nigerian businesses, contractors, suppliers and professional service providers whose capabilities support project requirements.
            </p>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Through responsible partnerships, we contribute to a broader industrial ecosystem in which local businesses can participate, develop capacity and create economic value.
            </p>
          </div>

          <div className="nc-anim bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corporate-red">
              <FaCartShopping className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Supply Chain</span>
            <h3 className="text-2xl font-black text-corporate-navy">Supporting In-Country Value</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Where applicable, Win-Toju supports the use of qualified Nigerian suppliers and locally available goods and services that meet required technical, commercial, quality and regulatory standards.
            </p>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Our approach is designed to balance local participation with the technical and operational requirements of each engagement, driving sustainable utilization of local goods.
            </p>
          </div>
        </section>

        {/* 6. COMPLIANCE & GOVERNANCE */}
        <section className="space-y-12 border-t border-slate-200 pt-16">
          <div className="nc-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Governance</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">
              Committed to Responsible Nigerian Content Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Win-Toju recognizes the regulatory framework governing Nigerian Content in Nigeria's oil and gas industry and seeks to conduct its activities in accordance with applicable laws, regulations, guidelines and project-specific requirements.
            </p>
          </div>

          {/* PROCESS HORIZONTAL SEQUENCE */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Operating Philosophy Sequence</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {complianceSteps.map((item, idx) => (
                <div key={idx} className="nc-anim bg-white p-4 rounded-xl border border-slate-200 space-y-2 relative">
                  <span className="text-[10px] font-black text-corporate-red uppercase tracking-widest">{item.step}</span>
                  <h3 className="text-xs font-bold text-corporate-navy">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PARTNERSHIPS, CAPACITY BUILDING & COMMITMENTS GRID */}
        <section className="space-y-12">
          <div className="nc-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Capacity Building</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">From Participation to Capacity</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              We believe the long-term value of Nigerian Content is measured not only by participation in individual contracts, but by the capabilities that remain within Nigeria after each engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitmentsGrid.map((comm, idx) => (
              <div key={idx} className="nc-anim bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-corporate-red w-3.5 h-3.5 shrink-0" />
                  <h3 className="font-bold text-corporate-navy text-xs uppercase tracking-wider">{comm.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pl-5">{comm.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CREDENTIALS & NIGERIAN CONTENT POLICY DOCUMENTS */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="nc-anim space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Verified Status</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Our Nigerian Content Credentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((cred, idx) => (
              <div key={idx} className="nc-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-corporate-red">
                  <FaCertificate className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-navy text-sm">{cred.title}</h3>
                  <p className="text-slate-500 text-xs pt-1">{cred.reg}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <FaCheck className="w-3 h-3" /> {cred.status}
                  </span>
                  <Link href="/certifications-compliance" className="text-corporate-navy hover:text-corporate-red font-bold flex items-center gap-1">
                    View <FaChevronRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* DEDICATED POLICY CARD */}
          {/* <div className="nc-anim bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-corporate-red text-xs font-bold uppercase tracking-wider">
                <FaFilePdf className="w-4 h-4" />
                Corporate Policy Document
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Nigerian Content Policy</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Our Nigerian Content Policy outlines our commitment to developing indigenous participation, supporting local capability and aligning our activities with applicable Nigerian Content requirements.
              </p>
            </div>
            <Link
              href="/certifications-compliance"
              className="shrink-0 bg-corporate-red text-white hover:bg-red-700 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
            >
              View Compliance Policy <FaArrowRight />
            </Link>
          </div> */}
        </section>

        {/* 9. OUR COMMITMENT TO NIGERIA */}
        <section className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Value Creation</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Creating Value Beyond the Contract</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our commitment to Nigerian Content extends beyond meeting project requirements. We seek to contribute to an environment where local expertise, businesses, skills and services can participate meaningfully in Nigeria's industrial development.
          </p>
        </section>

        {/* 10. CLOSING CTA */}
        <section className="border-t border-slate-200 pt-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">
            Building Local Capability. Delivering Industrial Value.
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Explore our corporate credentials and learn more about how Win-Toju approaches Nigerian Content, compliance and responsible participation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* <Link
              href="/certifications-compliance"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider shadow-md"
            >
              Certifications & Compliance <FaArrowRight />
            </Link> */}
            {/* <Link
              href="/who-we-are"
              className="bg-slate-100 text-corporate-navy px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              Who We Are <FaArrowRight />
            </Link> */}
            <Link
              href="/contact"
              className="bg-corporate-navy text-white px-6 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
