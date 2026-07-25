"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import gsap from "gsap";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Added the new Projects and Team sections to the navigation
  const navLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Team", href: "/#team" },
    { name: "HSE & QA/QC", href: "/#hse" },
    { name: "Certifications", href: "/#certifications" },
  ];

  // GSAP Animation Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use fromTo to strictly define the start and end states, preventing flashes
      gsap.fromTo(".nav-anim", 
        { 
          y: -20, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* ADDED: opacity-0 to hide elements before JS loads */}
          <Link href="/" className="nav-anim opacity-0 w-32 md:w-40 flex-shrink-0 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </Link>

          {/* CHANGED: md:flex to lg:flex to wait for a wider screen before showing desktop nav */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                // ADDED: opacity-0
                className="nav-anim opacity-0 text-corporate-slate hover:text-corporate-red font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            
            {/* ADDED: opacity-0 */}
            <Link 
              href="/#contact" 
              className="nav-anim opacity-0 bg-corporate-navy hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded transition-colors duration-300 text-sm uppercase tracking-wide whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          {/* CHANGED: md:hidden to lg:hidden to show the hamburger icon up to 1024px */}
          <div className="nav-anim opacity-0 lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-corporate-navy hover:text-corporate-red focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        // CHANGED: md:hidden to lg:hidden here as well
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-corporate-navy hover:bg-slate-800 text-white font-bold py-3 px-6 rounded transition-colors duration-300 text-sm uppercase tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}