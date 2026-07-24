// app/components/sections/Certifications.tsx
"use client";

import { useState, useEffect } from "react";
import { 
  FaBuilding, 
  FaFileInvoiceDollar, 
  FaFileSignature, 
  FaShip, 
  FaAward, 
  FaBriefcaseMedical, 
  FaFileContract, 
  FaIdBadge,
  FaTimes,
  FaExternalLinkAlt
} from "react-icons/fa";
import Loader from "../ui/Loader";

export default function Certifications() {
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = "hidden";
      setIsIframeLoaded(false); 
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDoc]);

  const documents = [
    { 
      name: "CAC Certificate of Incorporation", 
      type: "PDF Document",
      icon: <FaBuilding className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1kC2HkRGQ02N3T8KVWJwFjisT1pcgE0SJ/preview" 
    },
    { 
      name: "Tax Clearance Certificate (TCC)", 
      type: "PDF Document",
      icon: <FaFileInvoiceDollar className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1irixM_NIfXIRtMk74N9DnGUVQeOs5NTQ/preview" 
    },
    { 
      name: "NUPRC Specialized Permit", 
      type: "PDF Document",
      icon: <FaFileSignature className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1mw7YiTEVxucd648_UQ8HUXdpFhX-xWdm/preview" 
    },
    { 
      name: "NIMASA Registration Licence", 
      type: "PDF Document",
      icon: <FaShip className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1vJ2A-49AhGPLgWkrVtk67gU66Ze-SdjV/preview" 
    },
    { 
      name: "NCDMB Registration Certificate", 
      type: "PDF Document",
      icon: <FaAward className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1fxkSGP5O79O5s-HwOieMqcT3bKie_9ic/preview" 
    },
    { 
      name: "Clinic Retainer Agreement", 
      type: "PDF Document",
      icon: <FaBriefcaseMedical className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1Ou0RtFANDBxrC4DSFwUYGjBWDphhbOGq/preview" 
    },
    { 
      name: "Nigerian Content Policy Statement", 
      type: "PDF Document",
      icon: <FaFileContract className="w-6 h-6" />,
      href: "https://drive.google.com/file/d/1L5jdCpy186Atu4Kf8Q42NGIzTE_WjF30/preview" 
    },
    { 
      name: "Key Personnel Credentials", 
      type: "Word Document",
      icon: <FaIdBadge className="w-6 h-6" />,
      href: "https://docs.google.com/document/d/1-cU7fGAqinl6Smokt1Hq5VEC1CWIf8Bc/preview" 
    },
  ];

  const handleClose = () => {
    setActiveDoc(null);
  };

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

      {/* MOBILE-PROOF DOCUMENT VIEWER */}
      {activeDoc && (
        <div className="fixed inset-0 z-[9999] bg-corporate-navy/95 backdrop-blur-md flex flex-col">
          
          {/* Top Bar - Dedicated safe space for the close button */}
          <div className="flex justify-end items-center p-4 md:p-6 flex-shrink-0 w-full max-w-6xl mx-auto">
            <button 
              onClick={handleClose}
              className="bg-corporate-red hover:bg-red-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center cursor-pointer z-[10000]"
              aria-label="Close document"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Document Container - Placed below the button so they never overlap */}
          <div className="flex-grow w-full max-w-6xl mx-auto px-4 pb-6 md:px-6 md:pb-8 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full bg-gray-200 rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              
              {/* Loader */}
              {!isIframeLoaded && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100">
                  <Loader text="Loading Document..." />
                </div>
              )}

              <iframe 
                src={activeDoc} 
                className={`absolute inset-0 w-full h-full border-none transition-opacity duration-500 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`} 
                title="Document Viewer"
                allow="autoplay"
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}