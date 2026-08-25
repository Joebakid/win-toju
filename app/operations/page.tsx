// app/operations/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { operationsData } from "../lib/operationsData";

export const metadata = {
  title: "Our Operations | Win-Toju System Enterprise Limited",
  description: "Explore Win-Toju's integrated industrial capabilities including marine logistics, specialized transportation, contracting, waste management, and labour supply.",
};

export default function OperationsPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 pb-20">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red bg-corporate-red/10 px-3 py-1 rounded-full">
          Our Operations
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto">
          Integrated Capabilities for Demanding Operations
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From marine logistics and specialized transportation to waste management, contracting and indigenous workforce solutions, Win-Toju is positioned to support organizations operating in demanding industrial environments.
        </p>
      </div>

      {/* Operations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {operationsData.map((operation) => (
            <Link
              key={operation.slug}
              href={`/operations/${operation.slug}`}
              className="group flex flex-col bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-corporate-red/50 transition-colors shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                {/* Fallback overlay in case image fails to load quickly */}
                <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors"></div>
                <Image
                  src={operation.heroImage}
                  alt={operation.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                <h2 className="text-xl font-bold text-white group-hover:text-corporate-red transition-colors">
                  {operation.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                  {operation.subtitle}
                </p>

                {/* View Details Link */}
                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-corporate-cream group-hover:text-corporate-red transition-colors">
                  <span>View Details</span>
                  <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>

    

    </div>
  );
}
