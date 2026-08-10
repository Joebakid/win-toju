// app/operations/[slug]/page.tsx
"use client";

import { useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";
import { operationsData } from "../../lib/operationsData";

import Navbar from "../../components/layout/Navbar"; 
import Footer from "../../components/layout/Footer"; 

interface OperationProps {
  params: Promise<{ slug: string }>;
}

export default function OperationPage({ params }: OperationProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  
  const resolvedParams = use(params);
  const operation = operationsData.find((op) => op.slug === resolvedParams.slug);

  if (!operation) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", { 
        y: 30, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out" 
      });
      
      gsap.from(".content-anim", { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.4 
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 
        FIX: Removed the CSS wrapper hack. 
        Now we just pass transparent={true} directly to the updated Navbar.
      */}
      <Navbar transparent={true} />

      <main ref={pageRef} className="min-h-screen bg-corporate-cream pb-16 md:pb-24">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[400px] flex flex-col items-center justify-center pt-24">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-corporate-navy">
            <Image
              src={operation.heroImage}
              alt={operation.title}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" /> 
          </div>

          {/* Hero Text Content */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center w-full max-w-5xl mt-8">
            
            <div className="hero-anim bg-black/40 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10 text-gray-300 text-sm md:text-base font-semibold mb-6 flex items-center gap-2 tracking-wide shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Operations</span>
              <span>/</span>
              <span className="text-[#38bdf8]">{operation.title}</span>
            </div>

            <h1 
              className="hero-anim text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl mb-4" 
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              {operation.title}
            </h1>
            
            <h2 className="hero-anim text-lg md:text-2xl font-semibold text-gray-300 drop-shadow-lg tracking-wide max-w-2xl mx-auto">
              {operation.subtitle}
            </h2>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="content-anim max-w-5xl mx-auto px-4 sm:px-6 md:px-12 -mt-16 relative z-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border-t-8 border-corporate-red">
            
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 text-corporate-slate hover:text-corporate-red font-bold mb-8 transition-colors text-sm sm:text-base uppercase tracking-wider"
            >
              <FaArrowLeft /> All Operations
            </Link>
            
            <div className="prose prose-lg max-w-none">
              {operation.content}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}