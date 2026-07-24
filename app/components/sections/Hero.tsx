// app/components/sections/Hero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { FaEye } from "react-icons/fa";
import gsap from "gsap";

// Dynamically import the modal and disable SSR to prevent DOMMatrix errors
const PDFModal = dynamic(() => import("../ui/PDFModal"), { ssr: false });

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  // Using the Specialized DPR Permit from the local public folder
  const activeDoc = "/documents/SPECIALIZED DPR WIN-TOJU.pdf";

  // GSAP Animation Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use fromTo to strictly define the start and end states, preventing flashes
      gsap.fromTo(".hero-anim", 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2 // Slight delay to ensure the page has loaded visually
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section ref={heroRef} className="relative w-full min-h-[85vh] bg-corporate-navy flex items-center py-20 lg:py-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy to-corporate-navy/80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 lg:mt-0">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          
          {/* ADDED: opacity-0 to hide elements before JS loads */}
          <div className="hero-anim opacity-0 inline-block border-l-4 border-corporate-red pl-3 md:pl-4">
            <h2 className="text-corporate-cream font-semibold tracking-widest uppercase text-xs md:text-sm">
              Marine Logistics & General Contracting
            </h2>
          </div>
          
          <h1 className="hero-anim opacity-0 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Uncompromising Standards in <span className="text-corporate-red block sm:inline">Industrial Execution.</span>
          </h1>
          
          <p className="hero-anim opacity-0 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            As a fully certified indigenous enterprise, we deliver expert marine logistics, special transportation, claims agency, and comprehensive labour supply, alongside certified onshore waste management for the Nigerian energy sector.
          </p>
          
          <div className="hero-anim opacity-0 flex flex-col sm:flex-row flex-wrap gap-4 pt-4 md:pt-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-corporate-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition duration-300 shadow-lg text-center"
            >
              Request a Consultation
            </a>
            
            {/* Button that opens the react-pdf Modal */}
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

      {/* Render the modal ONLY on the client when button is clicked */}
      {isModalOpen && (
        <PDFModal 
          activeDoc={activeDoc} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
}