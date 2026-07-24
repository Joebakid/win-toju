// app/components/layout/Navbar.tsx
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
      gsap.from(".nav-anim", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="nav-anim w-32 md:w-40 flex-shrink-0 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden md:flex space-x-5 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="nav-anim text-corporate-slate hover:text-corporate-red font-semibold transition-colors text-xs lg:text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            
            {/* FIX: Changed `transition` to `transition-colors` so it doesn't fight GSAP */}
            <Link 
              href="/#contact" 
              className="nav-anim bg-corporate-navy hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded transition-colors duration-300 text-sm uppercase tracking-wide whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          <div className="nav-anim md:hidden flex items-center">
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
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
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