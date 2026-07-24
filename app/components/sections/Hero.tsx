// app/components/sections/Hero.tsx
"use client";

import { FaEye } from "react-icons/fa";

export default function Hero() {
  // Using the Specialized DPR Permit as the primary trust signal
  const activeDoc = "https://drive.google.com/file/d/1mw7YiTEVxucd648_UQ8HUXdpFhX-xWdm/preview";

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
            
            {/* Replaced Button with a standard <a> tag opening in a new tab */}
            <a 
              href={activeDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-4 px-8 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaEye className="w-5 h-5 flex-shrink-0" />
              View NUPRC Permit
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}