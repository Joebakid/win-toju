"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSlide {
  image: string;
  headline: string;
  sub: string;
}

interface HeroConfig {
  prefix: string;
  slides: HeroSlide[];
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  buttons?: { label: string; href: string; variant: "primary" | "secondary" }[];
}

interface CTAConfig {
  prefix: string;
  headline: string;
  paragraphs: string[];
  signature?: { company: string; tag: string };
  buttons?: { label: string; href: string; variant: "primary" | "secondary" }[];
}

interface PageLayoutProps {
  hero: HeroConfig;
  cta?: CTAConfig; // CTA is optional in case some pages don't need it
  children: React.ReactNode;
}

export default function PageLayout({ hero, cta, children }: PageLayoutProps) {
  const pageRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance hero slides
  useEffect(() => {
    if (hero.slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [hero.slides.length]);

  // GSAP Animations with ScrollTrigger for long pages
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".comp-anim").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            // clearProps: "all", <-- REMOVED: This was causing the disappearing bug
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Animates as it enters the viewport
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, [hero, cta, children]); // Re-bind if content changes

  return (
    <main ref={pageRef} className="min-h-[100dvh] bg-white text-corporate-navy relative overflow-hidden">

      {/* 1. SLIDING HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center bg-corporate-navy text-white pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
        {hero.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={index === 0}
              className="object-cover object-center opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-corporate-navy/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent z-10" />
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Breadcrumbs */}
          {hero.breadcrumbs && (
            <div className="comp-anim inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 text-base font-bold shadow-sm">
              {hero.breadcrumbs.map((crumb, idx) => {
                const isFirst = idx === 0;
                const textColor = isFirst ? "text-white" : "text-corporate-red";
                
                return (
                  <React.Fragment key={idx}>
                    {crumb.href ? (
                      <Link href={crumb.href} className={`${textColor} hover:opacity-80 transition-opacity drop-shadow-sm`}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={`${textColor} drop-shadow-sm`}>{crumb.label}</span>
                    )}
                    
                    {idx < hero.breadcrumbs!.length - 1 && (
                      <FaChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div className="max-w-4xl space-y-4">
            <span className="comp-anim text-corporate-red font-black tracking-widest uppercase text-sm sm:text-base block drop-shadow-lg">
              {hero.prefix}
            </span>
            <h1 className="comp-anim text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] min-h-[160px] drop-shadow-2xl">
              {hero.slides[currentSlide]?.headline} <br />
              <span className="text-corporate-red">{hero.slides[currentSlide]?.sub}</span>
            </h1>
            <p className="comp-anim text-white text-lg sm:text-2xl font-bold max-w-3xl leading-relaxed pt-2 drop-shadow-lg">
              {hero.description}
            </p>
          </div>

          {hero.buttons && (
            <div className="comp-anim flex flex-wrap gap-4 pt-4">
              {hero.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg ${
                    btn.variant === "primary"
                      ? "bg-corporate-red text-white hover:bg-red-700 shadow-red-900/30"
                      : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {btn.label} <FaArrowRight />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-28 py-20 w-full">
        {/* Background Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[-1] pointer-events-none" />

        {/* INJECTED PAGE SECTIONS */}
        {children}

        {/* 3. REUSABLE BOTTOM CTA */}
        {cta && (
          <section className="comp-anim bg-slate-900 text-white p-10 md:p-20 rounded-[2.5rem] border border-slate-800 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <span className="text-corporate-red font-black text-base uppercase tracking-widest block drop-shadow-md">
                {cta.prefix}
              </span>
              <h2 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
                {cta.headline}
              </h2>
              <div className="text-white text-lg md:text-xl font-bold leading-relaxed space-y-4 max-w-3xl mx-auto drop-shadow-md">
                {cta.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {cta.signature && (
                  <p className="text-lg font-black text-white pt-4">
                    {cta.signature.company}<br/>
                    <span className="text-corporate-red">{cta.signature.tag}</span>
                  </p>
                )}
              </div>

              {cta.buttons && (
                <div className="pt-8 flex flex-wrap justify-center gap-4">
                  {cta.buttons.map((btn, idx) => (
                    <Link
                      key={idx}
                      href={btn.href}
                      className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg ${
                        btn.variant === "primary"
                          ? "bg-corporate-red text-white hover:bg-red-700"
                          : "bg-white text-corporate-navy hover:bg-slate-100"
                      }`}
                    >
                      {btn.label} <FaArrowRight />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}