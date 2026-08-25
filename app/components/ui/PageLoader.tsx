// app/components/ui/PageLoader.tsx
"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Wait for 1 second, then trigger the fade-out animation
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1000);

    // 2. Wait an additional 700ms (matching the Tailwind duration) to completely remove it from the DOM
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Once fully finished, render nothing so it doesn't block the screen
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-corporate-navy transition-all duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-corporate-slate/30 border-t-corporate-red rounded-full animate-spin"></div>
        {/* Inner solid element */}
        <div className="absolute w-8 h-8 bg-corporate-red rounded-full animate-pulse opacity-90"></div>
      </div>
      
      <h1 className="mt-8 text-white text-2xl md:text-3xl font-black uppercase tracking-[0.3em] font-montserrat">
        Win-Toju
      </h1>
      <p className="text-corporate-slate mt-2 text-xs md:text-sm uppercase tracking-widest transition-opacity duration-500">
        System Enterprise Ltd.
      </p>
    </div>
  );
}