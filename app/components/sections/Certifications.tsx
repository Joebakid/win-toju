// app/components/sections/Certifications.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { 
  FaBuilding, 
  FaFileInvoiceDollar, 
  FaFileSignature, 
  FaShip, 
  FaAward, 
  FaBriefcaseMedical, 
  FaFileContract, 
  FaIdBadge,
  FaExternalLinkAlt
} from "react-icons/fa";

// Dynamically import the modal and disable SSR to prevent DOMMatrix errors
const PDFModal = dynamic(() => import("../ui/PDFModal"), { ssr: false });

export default function Certifications() {
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDoc]);

  // Updated to strictly match your local terminal file names
  const documents = [
    { 
      name: "CAC Certificate of Incorporation", 
      type: "PDF Document",
      icon: <FaBuilding className="w-6 h-6" />,
      href: "/documents/CERTIFICATE OF INCOPORATION.pdf" 
    },
    { 
      name: "Tax Clearance Certificate (TCC)", 
      type: "PDF Document",
      icon: <FaFileInvoiceDollar className="w-6 h-6" />,
      href: "/documents/TAX CLEARANCE 2026.pdf" 
    },
    { 
      name: "NUPRC Specialized Permit", 
      type: "PDF Document",
      icon: <FaFileSignature className="w-6 h-6" />,
      href: "/documents/SPECIALIZED DPR WIN-TOJU.pdf" 
    },
    { 
      name: "NIMASA Registration Licence", 
      type: "PDF Document",
      icon: <FaShip className="w-6 h-6" />,
      href: "/documents/NIMASA 2025.pdf" 
    },
    { 
      name: "NCDMB Registration Certificate", 
      type: "PDF Document",
      icon: <FaAward className="w-6 h-6" />,
      href: "/documents/NDCMB CERTIFICATE WINTOJU.pdf" 
    },
    { 
      name: "Clinic Retainer Agreement", 
      type: "PDF Document",
      icon: <FaBriefcaseMedical className="w-6 h-6" />,
      href: "/documents/CLINIC RETAINERSHIP 2026.pdf" 
    },
    { 
      name: "Nigerian Content Policy Statement", 
      type: "PDF Document",
      icon: <FaFileContract className="w-6 h-6" />,
      href: "/documents/WINTOJU NIGERIAN  CONTENT POLICY STSTEMENT.pdf" 
    },
    { 
      name: "Key Personnel Credentials", 
      type: "PDF Document", 
      icon: <FaIdBadge className="w-6 h-6" />,
      // Note: Make sure you converted this file from .rtf to .pdf!
      href: "/documents/COPIES OF CREDENTILAS OF KEY PERSONNELS.pdf" 
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-corporate-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <div className="max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-block border-b-4 border-corporate-red pb-2">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Resource Center
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
            Regulatory Certifications
          </h3>
          <p className="text-corporate-slate text-lg leading-relaxed max-w-2xl">
            Win-Toju System Enterprise Limited operates with full transparency. Below is our verifiable documentation establishing our statutory and operational compliance within Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              
              <div className="flex-shrink-0 bg-red-100 p-3 rounded text-corporate-red">
                {doc.icon}
              </div>
              
              <div className="flex-grow flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-bold text-corporate-navy text-sm mb-1">{doc.name}</h4>
                  <p className="text-xs text-corporate-slate mb-4">{doc.type}</p>
                </div>
                
                <button 
                  onClick={() => setActiveDoc(doc.href)}
                  className="text-corporate-red text-xs font-bold uppercase tracking-wider hover:text-red-800 transition-colors flex items-center gap-1 w-fit cursor-pointer"
                >
                  View Document 
                  <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the modal ONLY on the client */}
      {activeDoc && <PDFModal activeDoc={activeDoc} onClose={() => setActiveDoc(null)} />}

    </section>
  );
}