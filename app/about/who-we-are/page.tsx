"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCircleCheck,
  FaLandmark,
  FaOilWell,
  FaShip,
  FaCertificate,
  FaFileInvoiceDollar
} from "react-icons/fa6";

// Exact relative import based on your folder tree
import PageLayout from "../../components/layout/PageLayout-aboutus";

export default function WhoWeArePage() {
  const [selectedCredential, setSelectedCredential] = useState<any>(null);

  const stats = [
    { value: "2020", label: "Year Established" },
    { value: "RC 1744024", label: "Corporate Registration" },
    { value: "Warri", label: "Headquarters" },
    { value: "Nigeria", label: "Primary Operating Market" },
    { value: "Industrial Services", label: "Core Business Focus" },
  ];

  const timeline = [
    { year: "2020", title: "Company Established", desc: "Win-Toju System Enterprise Limited incorporated." },
    { year: "2021", title: "[MILESTONE TO BE PROVIDED]", desc: "Awaiting management input for historical milestone." },
    { year: "2022", title: "[MILESTONE TO BE PROVIDED]", desc: "Awaiting management input for historical milestone." },
    { year: "2023", title: "[MILESTONE TO BE PROVIDED]", desc: "Awaiting management input for historical milestone." },
    { year: "2024", title: "[MILESTONE TO BE PROVIDED]", desc: "Awaiting management input for historical milestone." },
    { year: "2025", title: "[MILESTONE TO BE PROVIDED]", desc: "Awaiting management input for historical milestone." },
    { year: "2026", title: "Building the Next Generation of Indigenous Industrial Services", desc: "Current strategic development and expansion." },
  ];

  const capabilities = [
    {
      num: "01",
      title: "Marine Logistics & Special Transportation",
      desc: "We provide specialized marine logistics and transportation solutions supporting offshore and industrial operations, including marine vessel supply and operations, specialized transportation and related logistical support.",
      items: ["Marine vessel supply", "Vessel operations", "Specialized transportation", "Offshore logistical support", "Marine security and escort", "Mooring services", "Houseboats", "Barges"],
      slug: "marine-logistics",
      image: "/win-toju-photos/mooring1.jpeg" // Using your local image
    },
    {
      num: "02",
      title: "Offshore Support",
      desc: "Win-Toju provides marine and offshore support services designed to help clients maintain safe, efficient and reliable operations in demanding marine environments.",
      items: ["Offshore support services", "Operational support", "Field safety integration"],
      slug: "offshore-support",
      image: "/win-toju-photos/win-toju (14).jpeg" // Using your local image
    },
    {
      num: "03",
      title: "Onshore Waste Management",
      desc: "We provide compliant onshore waste management solutions supporting oil & gas operations and environmental responsibilities.",
      items: ["NCDMB/NOGIC JQS certification", "Waste management compliance", "Environmental safety"],
      slug: "waste-management",
      image: "/win-toju-photos/waste1.jpeg" // Using your local image
    },
    {
      num: "04",
      title: "General Contracting & Claims Agency",
      desc: "We provide general contracting and professional claims agency services, supporting clients with project execution, corporate representation and related operational requirements.",
      items: ["Project execution", "Claims representation", "Corporate agency support"],
      slug: "general-contracting",
      image: "/win-toju-photos/win-toju (1).jpeg" // Using your local image
    },
    {
      num: "05",
      title: "Indigenous Labour Supply",
      desc: "We provide competent Nigerian technical, management and local contractor personnel to support project and operational requirements in accordance with applicable regulatory requirements.",
      items: ["Technical personnel", "Management staffing", "Local contractors", "Strictly indigenous focus"],
      slug: "labour-supply",
      image: "/win-toju-photos/technical man power.JPG" // Using your local image
    },
  ];

  const principles = [
    { num: "01", title: "SAFETY FIRST", desc: "Protecting our people, clients, assets and the environment is fundamental to our operations." },
    { num: "02", title: "OPERATIONAL EXCELLENCE", desc: "We plan, coordinate and execute with discipline and attention to detail." },
    { num: "03", title: "COMPLIANCE", desc: "We operate within applicable laws, regulatory requirements and client standards." },
    { num: "04", title: "ACCOUNTABILITY", desc: "We take ownership of our commitments, responsibilities and deliverables." },
    { num: "05", title: "LOCAL EXPERTISE", desc: "We leverage indigenous knowledge, personnel and partnerships to create practical solutions." },
    { num: "06", title: "CONTINUOUS IMPROVEMENT", desc: "We continually strengthen our systems, people, capabilities and methods of execution." },
  ];

  const credentials = [
    { title: "CAC", body: "Corporate Registration", ref: "RC 1744024", desc: "Incorporated under the Companies and Allied Matters Act.", icon: <FaLandmark className="w-7 h-7" /> },
    { title: "NUPRC", body: "Specialized Transportation & Offshore Support Services", ref: "Permit Registered", desc: "Authorized for offshore support and specialized transit.", icon: <FaOilWell className="w-7 h-7" /> },
    { title: "NIMASA", body: "Registered Shipping Company", ref: "Registered Enterprise", desc: "Certified shipping and marine operator.", icon: <FaShip className="w-7 h-7" /> },
    { title: "NCDMB / NOGIC JQS", body: "Registered Service Company", ref: "Registered Provider", desc: "Compliant with Nigerian Content requirements.", icon: <FaCertificate className="w-7 h-7" /> },
    { title: "TIN", body: "Tax Identification Number", ref: "FIRS Cleared", desc: "Fully compliant with federal tax regulations.", icon: <FaFileInvoiceDollar className="w-7 h-7" /> },
  ];

  const values = [
    { title: "INTEGRITY", desc: "We act honestly, transparently and responsibly." },
    { title: "EXCELLENCE", desc: "We pursue high standards in everything we execute." },
    { title: "SAFETY", desc: "We protect people, assets and the environment." },
    { title: "ACCOUNTABILITY", desc: "We take responsibility for our commitments and results." },
    { title: "COLLABORATION", desc: "We create value through strong partnerships." },
    { title: "INNOVATION", desc: "We continually seek better ways to solve operational challenges." },
    { title: "LOCAL VALUE", desc: "We believe in developing Nigerian people, businesses and capabilities." },
  ];

  return (
    <PageLayout
      hero={{
        prefix: "WHO WE ARE",
        slides: [
          {
            // Now strictly using your local high-res files from the public folder
            image: "/win-toju-photos/1.jpeg",
            headline: "Engineering Industrial Possibilities.",
            sub: "Delivering with Precision."
          },
          {
            image: "/win-toju-photos/technical man power.JPG",
            headline: "Indigenous Capability.",
            sub: "Professional Execution."
          }
        ],
        description: "Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management and workforce solutions to the energy, oil & gas and infrastructure sectors.",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "About" },
          { label: "Who We Are" }
        ],
        buttons: [
          { label: "Explore Our Capabilities", href: "/operations", variant: "primary" },
          { label: "Meet Win-Toju", href: "/about/our-leadership", variant: "secondary" }
        ]
      }}
      cta={{
        prefix: "Built for the Demands of Industry.",
        headline: "Let's Build the Next Operation Together.",
        paragraphs: [
          "From marine logistics and specialized transportation to waste management, contracting and indigenous workforce solutions, Win-Toju is positioned to support organizations operating in demanding industrial environments.",
          "We bring together indigenous knowledge, professional expertise, regulatory awareness and a commitment to disciplined execution—helping our clients move people, materials, projects and operations forward."
        ],
        signature: { company: "Win-Toju System Enterprise Limited.", tag: "Indigenous capability. Professional execution. Industrial confidence." },
        buttons: [
          { label: "Explore Our Services", href: "/operations", variant: "primary" },
          { label: "Request a Consultation", href: "/contact", variant: "secondary" }
        ]
      }}
    >
      {/* 6. CORPORATE IDENTITY */}
      <section id="identity" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-200 pb-20">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR IDENTITY</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy leading-tight">
            An Indigenous Company Built for Industrial Execution
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
            <p className="comp-anim">
              Win-Toju System Enterprise Limited is an indigenous Nigerian company established to provide dependable technical, logistics and contracting solutions to industries where operational reliability, regulatory compliance and disciplined execution are critical.
            </p>
            <p className="comp-anim">
              Incorporated on 10 December 2020, Win-Toju operates from Warri, Delta State, with a strategic focus on supporting Nigeria's energy, oil & gas and infrastructure sectors.
            </p>
            <p className="comp-anim">
              Our capabilities span marine logistics, offshore support, specialized transportation, onshore waste management, general contracting, claims agency and indigenous labour supply.
            </p>
            <p className="comp-anim text-slate-500 text-sm md:text-base">
              We combine local knowledge, professional expertise, regulatory awareness and strategic partnerships to deliver practical solutions aligned with the requirements of modern industrial operations.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 comp-anim bg-slate-900 text-white rounded-2xl p-8 md:p-10 border border-slate-800 space-y-8 shadow-xl">
          <div>
            <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">At a Glance</span>
            <h3 className="text-2xl font-black text-white mt-1">Company Facts</h3>
          </div>
          <div className="divide-y divide-slate-800">
            {stats.map((s, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{s.label}</span>
                <span className="text-white font-bold text-sm text-right">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
            Regulatory Credentials: NUPRC, NIMASA, and NCDMB / NOGIC JQS Certified.
          </div>
        </div>
      </section>

      {/* 7. OUR STORY & TIMELINE */}
      <section className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR STORY</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            Built from Indigenous Capability. Driven by Industrial Purpose.
          </h2>
          <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Win-Toju was established with a clear understanding of the evolving demands of Nigeria's industrial economy: the need for capable indigenous companies that combine local knowledge, technical competence, responsive logistics and disciplined project execution.
            </p>
            <p>
              From its foundation in Warri, Delta State, the company has focused on developing capabilities that enable it to support demanding operations across the energy, marine, logistics and infrastructure sectors.
            </p>
            <p>
              As Win-Toju grows, our objective remains clear: to build a resilient indigenous organization capable of delivering dependable services while contributing meaningfully to Nigerian Content development and industrial capacity.
            </p>
          </div>
        </div>

        <div className="relative border-l-2 border-corporate-red ml-4 md:ml-32 space-y-10 pt-6">
          {timeline.map((t, idx) => (
            <div key={idx} className="comp-anim relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-corporate-red border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
              <span className="md:absolute md:-left-32 md:top-0 font-mono font-black text-corporate-red text-base md:text-lg block mb-1 md:mb-0">{t.year}</span>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-corporate-red transition-colors">
                <h3 className="text-lg font-black text-corporate-navy mb-1">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. VISION & MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-200 pb-20">
        <div className="comp-anim bg-slate-900 text-white p-8 md:p-12 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR VISION</span>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Purpose That Guides Our Growth</h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              To become a trusted Nigerian industrial services company recognized for excellence in engineering support, marine logistics, contracting and sustainable project execution.
            </p>
          </div>
        </div>

        <div className="comp-anim bg-corporate-navy text-white p-8 md:p-12 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR MISSION</span>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Delivering Value & Local Capability</h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              To deliver reliable, compliant and professionally executed industrial solutions that create measurable value for our clients while advancing Nigerian Content, developing local capabilities and contributing to sustainable economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* 9. OUR STRATEGIC DIRECTION */}
      <section className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR STRATEGIC DIRECTION</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            Building a Stronger Indigenous Industrial Platform
          </h2>
          <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Nigeria's industrial future requires indigenous companies capable of more than providing individual services. It requires organizations that understand complex operating environments, mobilize resources efficiently, comply with regulatory requirements and deliver consistently.
            </p>
            <p>Win-Toju is building toward that future.</p>
            <p>
              Our strategy is centered on strengthening technical competence, developing strategic partnerships, investing in people, improving operational systems and expanding our ability to deliver integrated solutions to clients across Nigeria's energy and infrastructure sectors.
            </p>
          </div>
        </div>

        {/* Strategic Diagram */}
        <div className="comp-anim relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
          <Image
            src="/win-toju-photos/1.png" // Replaced external link with a local asset
            alt="Win-Toju Strategic Pillars"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 10. OUR INTEGRATED CAPABILITIES (STANDALONE CARDS) */}
      <section id="capabilities" className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">WHAT WE DO</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            Comprehensive Capabilities for Demanding Operations
          </h2>
        </div>

        <div className="space-y-8">
          {capabilities.map((c, idx) => (
            <Link
              href={`/operations#${c.slug}`}
              key={idx}
              className="comp-anim block group relative rounded-3xl overflow-hidden border border-slate-200 min-h-[400px] md:min-h-[300px] flex flex-col justify-end p-8 md:p-12 shadow-lg"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-corporate-navy/80 to-transparent" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7 space-y-4 text-white">
                  <span className="text-corporate-red font-black text-3xl opacity-90">{c.num}</span>
                  <h3 className="text-3xl md:text-4xl font-black leading-tight">{c.title}</h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">{c.desc}</p>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">Supporting Services</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {c.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-100 leading-snug">
                          <FaCircleCheck className="text-corporate-red shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-corporate-red font-bold text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                      View Operations <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 11. HOW WE WORK (OPERATING PHILOSOPHY) */}
      <section className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR OPERATING PHILOSOPHY</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            The Standards Behind Every Engagement
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our services are only as strong as the standards behind their execution. Win-Toju approaches every engagement with a commitment to safety, quality, accountability, compliance and operational discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="comp-anim relative bg-slate-900 p-8 rounded-2xl border border-slate-800 overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-9xl font-black text-white">{p.num}</span>
              </div>
              <div className="relative z-10 space-y-4">
                <span className="inline-block bg-corporate-red/10 text-corporate-red px-3 py-1 rounded-lg font-black text-xs uppercase tracking-widest">{p.num}</span>
                <h3 className="text-xl font-black text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. NIGERIAN CONTENT */}
      <section className="comp-anim relative bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 my-20">
        <Image
          src="/win-toju-photos/win-toju (3).jpeg" // Replaced external link with a local asset
          alt="Nigerian Personnel at Work"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="relative z-10 p-10 md:p-16 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-corporate-red font-bold text-xs uppercase tracking-wider block">OUR INDIGENOUS COMMITMENT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Building Nigerian Capacity. Creating Indigenous Value.
            </h2>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                At Win-Toju, Nigerian Content is not simply a regulatory requirement. It is an important part of how we build our business.
              </p>
              <p>
                We believe sustainable participation in Nigeria's energy and industrial economy requires deliberate investment in Nigerian people, businesses, technical capabilities and local supply chains.
              </p>
              <p>
                Through local employment, workforce development, partnerships with Nigerian enterprises, procurement from qualified local suppliers and responsible technology partnerships, we seek to create value that extends beyond individual projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "PEOPLE", desc: "Training and developing Nigerian professionals." },
              { title: "PARTNERSHIPS", desc: "Building relationships with qualified indigenous businesses." },
              { title: "PROCUREMENT", desc: "Supporting compliant Nigerian suppliers and manufacturers." },
              { title: "KNOWLEDGE TRANSFER", desc: "Using strategic partnerships to strengthen indigenous technical capability." },
            ].map((card, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
                <h3 className="font-black text-corporate-red text-sm tracking-wider">{card.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CREDENTIALS (ICONS FIXED) */}
      <section className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR CREDENTIALS</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            Trusted to Operate in Regulated Environments
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Win-Toju maintains the statutory registrations, certifications and regulatory credentials required to operate within its areas of business in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCredential(cred)}
              className="comp-anim bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 cursor-pointer hover:border-corporate-red transition-all flex flex-col justify-between"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-corporate-red">
                {cred.icon}
              </div>
              <div>
                <h3 className="font-bold text-corporate-navy text-sm mb-1">{cred.title}</h3>
                <p className="text-xs text-slate-500 mb-2">{cred.body}</p>
                <span className="inline-block bg-corporate-red/10 text-corporate-red px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {cred.ref}
                </span>
              </div>
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

      {/* 14. LEADERSHIP (SINGLE PLACARD FIXED) */}
      <section className="space-y-12 border-b border-slate-200 pb-20">
        <div className="comp-anim max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR LEADERSHIP</span>
          <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
            Win-Toju People
          </h2>
          <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Win-Toju is led by a multidisciplinary team of indigenous professionals with responsibilities spanning executive management, finance, operations, project execution, local content and corporate governance.
            </p>
            <p>
              Our leadership approach combines entrepreneurial vision with professional accountability, ensuring that business growth remains aligned with safety, compliance, client requirements and long-term sustainability.
            </p>
          </div>
        </div>

        <Link href="/about/our-leadership" className="comp-anim block relative w-full aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
          <Image
            src="/win-toju-photos/leadership.png" // Replaced external link with local asset
            alt="Win-Toju Leadership Team"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/90 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
            <h3 className="text-2xl font-black">Meet Our Executive Team</h3>
            <span className="bg-corporate-red px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              View Profiles <FaArrowRight />
            </span>
          </div>
        </Link>
      </section>

      {/* 15. HSE & QUALITY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-slate-200 pb-20">
        <div className="space-y-6">
          <div className="comp-anim space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">OUR STANDARD</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy">
              Safety and Quality Standards Are Not Negotiable
            </h2>
            <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Our commitment to Health, Safety and Environment is embedded in the way we plan, mobilize and execute our operations.
              </p>
              <p>
                We apply structured risk management, quality assurance and operational control measures designed to protect personnel, assets, clients and the environment while maintaining the standards expected within Nigeria's energy and industrial sectors.
              </p>
            </div>
          </div>

          <div className="comp-anim grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-black text-corporate-navy text-sm tracking-wider">HSE</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Risk-based operational planning and safety management.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-black text-corporate-navy text-sm tracking-wider">QUALITY</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Structured QA/QC processes and operational controls.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-black text-corporate-navy text-sm tracking-wider">ENVIRONMENT</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Responsible and compliant environmental practices.</p>
            </div>
          </div>

          <div className="comp-anim pt-4">
            <Link
              href="/about/hse-quality-environment"
              className="inline-flex items-center gap-2 text-sm font-bold text-corporate-red hover:text-red-700 uppercase tracking-wider"
            >
              Explore HSE & QA/QC <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* HSE Diagram Fixed Image */}
        <div className="comp-anim relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
          <Image
            src="/win-toju-photos/1.png" // Replaced external link with local asset
            alt="HSE Standards Diagram"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 17. OUR FUTURE & 18. CORPORATE VALUES */}
      <section className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="comp-anim space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">WHERE WE ARE GOING</span>
            <h2 className="text-3xl md:text-5xl font-black text-corporate-navy leading-tight">
              Building the Next Generation of Indigenous Industrial Services
            </h2>
            <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Win-Toju's ambition extends beyond individual contracts.
              </p>
              <p>
                We are building an indigenous industrial services platform capable of supporting increasingly complex requirements across Nigeria's energy, marine, logistics and infrastructure sectors.
              </p>
              <p>
                Our future focus includes strengthening technical capabilities, developing people, expanding strategic partnerships, improving operational systems, investing in appropriate technology and increasing our contribution to Nigerian Content development.
              </p>
              <p>
                We intend to grow responsibly—building a company that clients can depend on, employees can grow with and partners can confidently build alongside.
              </p>
            </div>
          </div>

          <div className="comp-anim bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-8">
            <h3 className="text-sm font-bold text-corporate-navy uppercase tracking-wider border-b border-slate-200 pb-4">Our Corporate Values</h3>
            <div className="space-y-6">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-corporate-red mt-2 shrink-0" />
                  <div>
                    <h4 className="font-black text-corporate-navy text-sm uppercase tracking-wider">{v.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}