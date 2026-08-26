"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";
import Logo from "../ui/Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // GSAP ScrollTrigger Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-anim", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%", 
          }
        }
      );
    }, footerRef);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [pathname]);

  return (
    <footer ref={footerRef} className="bg-corporate-navy pt-20 pb-10 border-t-4 border-corporate-red overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="footer-anim opacity-0 space-y-6">
            <div className="w-48 bg-white p-2 rounded">
              <Logo className="w-full" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium Engineering, Marine Logistics, and General Contracting services tailored for Nigeria's energy sector.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-corporate-red flex-shrink-0 mt-1" />
                <p>Suite A11, Golden Plaza, By Shell Contractor Road, Ogunu, Warri, Delta State, Nigeria.</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-4 h-4 text-corporate-red flex-shrink-0" />
                <p>
                  Direct HR & Operations Line: <br />
                  <a href="tel:+2348057183697" className="hover:text-white transition-colors">08057183697</a> || <a href="tel:+2348067518929" className="hover:text-white transition-colors">08067518929</a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-corporate-red flex-shrink-0" />
                <p>
                  <a href="mailto:info@wintoju.com" className="hover:text-white transition-colors">info@wintoju.com</a><br/>
                  <a href="mailto:wintojultd@gmail.com" className="hover:text-white transition-colors text-slate-400">wintojultd@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-anim opacity-0">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/#about" className="hover:text-corporate-red transition-colors flex items-center gap-2">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-corporate-red transition-colors flex items-center gap-2">Core Divisions</Link></li>
              <li><Link href="/#hse" className="hover:text-corporate-red transition-colors flex items-center gap-2">HSE & QA/QC</Link></li>
              <li><Link href="/#team" className="hover:text-corporate-red transition-colors flex items-center gap-2">Leadership Team</Link></li>
              <li><Link href="/#certifications" className="hover:text-corporate-red transition-colors flex items-center gap-2">Resource Center</Link></li>
              <li><Link href="/contact" className="hover:text-corporate-red transition-colors flex items-center gap-2">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Policies & Legal */}
          <div className="footer-anim opacity-0">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">
              Legal & Policies
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/terms" className="hover:text-corporate-red transition-colors flex items-center gap-2">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-corporate-red transition-colors flex items-center gap-2">Privacy Policy</Link></li>
              <li><Link href="/anti-bribery" className="hover:text-corporate-red transition-colors flex items-center gap-2">Anti-Bribery & Corruption Policy</Link></li>
              <li><Link href="/environmental-safety" className="hover:text-corporate-red transition-colors flex items-center gap-2">Environmental Safety Policy</Link></li>
              <li><Link href="/local-content" className="hover:text-corporate-red transition-colors flex items-center gap-2">Local Content Directive</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="footer-anim opacity-0 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Win-Toju System Enterprise Limited (RC: 1744024). All Rights Reserved.</p>
          <p>Designed for Industrial Excellence.</p>
        </div>

      </div>
    </footer>
  );
}