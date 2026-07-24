// app/components/ui/PageLoader.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Force the user to the very top of the page instantly
    window.scrollTo(0, 0);

    // 2. Lock scrolling on both the body and the HTML root (fixes mobile/safari bypasses)
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Wait a brief moment to ensure fonts and layout have settled, then fade out
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            setIsLoading(false);
            // 3. Unlock scrolling when the animation finishes
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
          },
        });
      }
    }, 1000); // 1-second delay before fading out

    // Cleanup function: unlock scroll if the component unmounts unexpectedly
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-corporate-navy"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-24 h-24 border-4 border-corporate-slate/30 border-t-corporate-red rounded-full animate-spin"></div>
        {/* Inner pulsing element */}
        <div className="absolute w-12 h-12 bg-corporate-red rounded-full animate-pulse opacity-80"></div>
      </div>
      <h1 className="mt-8 text-white text-2xl md:text-3xl font-black uppercase tracking-[0.3em] font-montserrat">
        Win-Toju
      </h1>
      <p className="text-corporate-slate mt-2 text-sm uppercase tracking-widest">
        System Enterprise Ltd.
      </p>
    </div>
  );
}