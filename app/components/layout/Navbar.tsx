// app/components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../ui/Logo"; 
import gsap from "gsap";

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOperationsOpen, setIsOperationsOpen] = useState(false);
  const [isMobileOpsOpen, setIsMobileOpsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const operationsLinks = [
    { name: "Marine Vessel Chartering & Logistics", href: "/operations/marine-logistics" },
    { name: "Offshore & Oilfield Support Services", href: "/operations/oilfield-support" },
    { name: "Claims Agency & Community Liaison", href: "/operations/claims-agency" },
    { name: "Technical Manpower & Labor Supply", href: "/operations/manpower-supply" },
    { name: "Onshore Waste Management", href: "/operations/waste-management" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-anim",
        { y: -20, opacity: 0 },
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

  const headerClasses = transparent 
    ? "absolute top-0 w-full z-50 bg-transparent" 
    : "sticky top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100";
    
  const topLinkClasses = transparent
    ? "text-white hover:text-gray-200"
    : "text-corporate-slate hover:text-corporate-red";
    
  const hamburgerClasses = transparent
    ? "text-white hover:text-gray-200"
    : "text-corporate-navy hover:text-corporate-red";

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          <Link 
            href="/" 
            className="nav-anim opacity-0 w-32 md:w-40 flex-shrink-0 flex items-center" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsOperationsOpen(false);
            }}
          >
            {/* FIX: Removed the brightness-0 invert filter. The logo will now display normally. */}
            <div className="transition-all">
              <Logo />
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            
            <Link href="/" className={`nav-anim opacity-0 font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide ${topLinkClasses}`}>
              Home
            </Link>

            <Link href="/#about" className={`nav-anim opacity-0 font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide ${topLinkClasses}`}>
              About
            </Link>

            <div 
              className="relative nav-anim opacity-0"
              onMouseEnter={() => setIsOperationsOpen(true)}
              onMouseLeave={() => setIsOperationsOpen(false)}
            >
              <button className={`flex items-center gap-1.5 font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide py-2 focus:outline-none ${topLinkClasses}`}>
                Our Operations
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOperationsOpen ? "rotate-180 text-corporate-red" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOperationsOpen && (
                <div className="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50">
                  {operationsLinks.map((op) => (
                    <Link
                      key={op.name}
                      href={op.href}
                      onClick={() => setIsOperationsOpen(false)}
                      className="block px-5 py-2.5 text-xs xl:text-sm font-medium text-corporate-slate hover:bg-slate-50 hover:text-corporate-red transition-colors"
                    >
                      {op.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#news" className={`nav-anim opacity-0 font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide ${topLinkClasses}`}>
              Recent News
            </Link>

            <Link href="/#foundation" className={`nav-anim opacity-0 font-semibold transition-colors text-xs xl:text-sm uppercase tracking-wide ${topLinkClasses}`}>
              Win-Toju Foundation
            </Link>
            
            <Link href="/#contact" className="nav-anim opacity-0 bg-corporate-navy hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded transition-colors duration-300 text-sm uppercase tracking-wide whitespace-nowrap">
              Contact Us
            </Link>
          </nav>

          <div className="nav-anim opacity-0 lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${hamburgerClasses}`}
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
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-4">
            
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide">
              Home
            </Link>

            <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide">
              About
            </Link>

            <div>
              <button
                onClick={() => setIsMobileOpsOpen(!isMobileOpsOpen)}
                className="flex items-center justify-between w-full text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide py-1"
              >
                <span>Our Operations</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileOpsOpen ? "rotate-180 text-corporate-red" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileOpsOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-corporate-red">
                  {operationsLinks.map((op) => (
                    <Link
                      key={op.name}
                      href={op.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileOpsOpen(false);
                      }}
                      className="block text-sm font-medium text-gray-600 hover:text-corporate-red py-1"
                    >
                      {op.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#news" onClick={() => setIsMobileMenuOpen(false)} className="block text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide">
              Recent News
            </Link>

            <Link href="/#foundation" onClick={() => setIsMobileMenuOpen(false)} className="block text-corporate-slate hover:text-corporate-red font-semibold text-base uppercase tracking-wide">
              Win-Toju Foundation
            </Link>

            <div className="pt-2">
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center bg-corporate-navy hover:bg-slate-800 text-white font-bold py-3 px-6 rounded transition-colors duration-300 text-sm uppercase tracking-wide">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}