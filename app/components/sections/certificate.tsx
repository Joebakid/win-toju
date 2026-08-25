// app/components/sections/Certifications.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFilePdf, FaShieldAlt, FaExternalLinkAlt, FaTimes, FaDownload } from "react-icons/fa";

// Dynamically import PDF modal to prevent SSR issues
const PDFModal = dynamic(() => import("../ui/PDFModal"), { ssr: false });

interface Credential {
  id: string;
  code: string;
  title: string;
  issuer: string;
  validity: string;
  pdfPath: string;
  description: string;
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeModalDoc, setActiveModalDoc] = useState<string | null>(null);
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);

  const credentials: Credential[] = [
    {
      id: "cac",
      code: "RC 1744024",
      title: "Certificate of Incorporation",
      issuer: "Corporate Affairs Commission (CAC)",
      validity: "Active / Permanent",
      pdfPath: "/documents/CERTIFICATE OF INCOPORATION.pdf",
      description: "Official statutory incorporation record confirming legal business establishment in Nigeria."
    },
    {
      id: "nuprc",
      code: "NUPRC Permit",
      title: "Specialized Transportation & Offshore Support Services",
      issuer: "Nigerian Upstream Petroleum Regulatory Commission",
      validity: "Current Operational Cycle",
      pdfPath: "/documents/SPECIALIZED DPR WIN-TOJU.pdf",
      description: "Statutory license for specialized transport, marine vessels, and offshore support operations."
    },
    {
      id: "nimasa",
      code: "NIMASA Reg.",
      title: "Registered Shipping Company",
      issuer: "Nigerian Maritime Administration and Safety Agency",
      validity: "Verified & Current",
      pdfPath: "/documents/NIMASA 2025.pdf",
      description: "Official maritime registration recognizing shipping and vessel operational capabilities."
    },
    {
      id: "ncdmb",
      code: "NCDMB / NOGIC JQS",
      title: "Registered Service Company & Onshore Waste Management",
      issuer: "Nigerian Content Development and Monitoring Board",
      validity: "Verified Active Record",
      pdfPath: "/documents/NDCMB CERTIFICATE WINTOJU.pdf",
      description: "Official NOGIC JQS service registration and verified capacity qualification."
    },
    {
      id: "tax",
      code: "TIN / Tax Clearance",
      title: "Tax Clearance Certificate",
      issuer: "Federal Inland Revenue Service (FIRS)",
      validity: "Current Fiscal Year",
      pdfPath: "/documents/TAX CLEARANCE 2026.pdf",
      description: "Statutory tax compliance and identification documentation."
    },
  ];

  // GSAP Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".cert-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cert-grid",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModalDoc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalDoc]);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-corporate-cream text-corporate-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="cert-header-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Credentials
            </h2>
          </div>
          <h3 className="cert-header-anim opacity-0 text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
            Trusted to Operate in Regulated Environments.
          </h3>
          <p className="cert-header-anim opacity-0 text-corporate-slate text-lg leading-relaxed">
            Win-Toju maintains the statutory registrations, certifications and regulatory credentials required to operate within its areas of business in Nigeria.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="cert-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.id}
              onClick={() => setSelectedCredential(cred)}
              className="cert-card-anim opacity-0 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-corporate-red hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="bg-corporate-navy/5 text-corporate-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {cred.code}
                  </span>
                  <FaFilePdf className="w-6 h-6 text-corporate-red group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-bold text-corporate-navy group-hover:text-corporate-red transition-colors">
                  {cred.title}
                </h4>
                <p className="text-corporate-slate text-sm font-semibold">
                  {cred.issuer}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  {cred.validity}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate-navy group-hover:text-corporate-red flex items-center gap-1 transition-colors">
                  View Document <FaExternalLinkAlt className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail / Preview Modal */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">

            <button
              onClick={() => setSelectedCredential(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-corporate-red/10 text-corporate-red text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedCredential.code}
              </span>
              <h3 className="text-2xl font-black text-corporate-navy pt-2">
                {selectedCredential.title}
              </h3>
              <p className="text-corporate-slate font-semibold text-sm">
                Issuing Body: {selectedCredential.issuer}
              </p>
            </div>

            <p className="text-corporate-slate text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
              {selectedCredential.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                Status: {selectedCredential.validity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setActiveModalDoc(selectedCredential.pdfPath);
                  setSelectedCredential(null);
                }}
                className="bg-corporate-navy hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <FaFilePdf /> Preview PDF
              </button>

              <a
                href={selectedCredential.pdfPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-corporate-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <FaDownload /> Download
              </a>
            </div>

          </div>
        </div>
      )}

      {/* PDF Document Viewer Modal */}
      {activeModalDoc && (
        <PDFModal
          activeDoc={activeModalDoc}
          onClose={() => setActiveModalDoc(null)}
        />
      )}

    </section>
  );
}
