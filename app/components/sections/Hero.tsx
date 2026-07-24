// app/components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { FaEye, FaTimes } from "react-icons/fa";
import Loader from "../ui/Loader";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  
  // Using the Specialized DPR Permit as the primary trust signal
  const activeDoc = "https://drive.google.com/file/d/1mw7YiTEVxucd648_UQ8HUXdpFhX-xWdm/preview";

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      setIsIframeLoaded(false); // Reset loader state when opened
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section className="relative w-full min-h-[85vh] bg-corporate-navy flex items-center py-20 lg:py-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy to-corporate-navy/80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 lg:mt-0">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          
          <div className="inline-block border-l-4 border-corporate-red pl-3 md:pl-4">
            <h2 className="text-corporate-cream font-semibold tracking-widest uppercase text-xs md:text-sm">
              Marine Logistics & General Contracting
            </h2>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Uncompromising Standards in <span className="text-corporate-red block sm:inline">Industrial Execution.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            As a fully certified indigenous enterprise, we deliver expert marine logistics, special transportation, claims agency, and comprehensive labour supply, alongside certified onshore waste management for the Nigerian energy sector.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 md:pt-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-corporate-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition duration-300 shadow-lg text-center"
            >
              Request a Consultation
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-4 px-8 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaEye className="w-5 h-5 flex-shrink-0" />
              View NUPRC Permit
            </button>
          </div>
          
        </div>
      </div>

      {/* MOBILE-PROOF DOCUMENT VIEWER */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-corporate-navy/95 backdrop-blur-md flex flex-col">
          
          {/* Top Bar - Dedicated safe space for the close button */}
          <div className="flex justify-end items-center p-4 md:p-6 flex-shrink-0 w-full max-w-6xl mx-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
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