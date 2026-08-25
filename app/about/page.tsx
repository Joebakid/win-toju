// app/about/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Win-Toju System Enterprise Limited',
  description: 'An indigenous Nigerian industrial services company built for reliable execution in marine logistics, specialized transportation, waste management, and workforce solutions.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">

      {/* 5. HERO SECTION */}
      <section className="relative bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-corporate-red bg-corporate-red/10 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto">
            Engineering Industrial Possibilities. Delivering with Precision.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Win-Toju System Enterprise Limited is an indigenous Nigerian industrial services company providing specialized engineering, marine logistics, transportation, contracting, waste management and workforce solutions to the energy, oil & gas and infrastructure sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/operations"
              className="bg-corporate-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Explore Our Capabilities
            </Link>
            <Link
             href="/team/godwin-ogbaro"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl text-xs uppercase tracking-wider border border-white/10 transition-all"
            >
              Meet Win-Toju
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE IDENTITY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-corporate-cream">
              Our Identity
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
              An Indigenous Company Built for Industrial Execution
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Win-Toju System Enterprise Limited is an indigenous Nigerian company established to provide dependable technical, logistics and contracting solutions to industries where operational reliability, regulatory compliance and disciplined execution are critical.
              </p>
              <p>
                Incorporated on 10 December 2020, Win-Toju operates from Warri, Delta State, with a strategic focus on supporting Nigeria's energy, oil & gas and infrastructure sectors.
              </p>
              <p>
                Our capabilities span marine logistics, offshore support, specialized transportation, onshore waste management, general contracting, claims agency and indigenous labour supply.
              </p>
              <p>
                We combine local knowledge, professional expertise, regulatory awareness and strategic partnerships to deliver practical solutions aligned with the requirements of modern industrial operations.
              </p>
            </div>
          </div>

          {/* Company Facts Card */}
          <div className="bg-slate-900 border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden">
             {/* Decorative Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-red/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="text-xl font-bold text-white">Corporate Facts</h3>
            </div>

            <ul className="space-y-5 relative z-10">
              <li className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400 font-medium">Year Established</span>
                <span className="font-black text-corporate-cream text-lg">2020</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400 font-medium">Corporate Registration</span>
                <span className="font-black text-corporate-cream text-lg">RC 1744024</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400 font-medium">Headquarters</span>
                <span className="font-black text-corporate-cream text-lg text-right">Warri, Delta State</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400 font-medium">Primary Market</span>
                <span className="font-black text-corporate-cream text-lg text-right">Nigeria</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="text-slate-400 font-medium mb-1 sm:mb-0">Core Business Focus</span>
                <span className="font-black text-corporate-cream text-lg text-right">Industrial Services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. OUR STORY & TIMELINE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-corporate-cream">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built from Indigenous Capability. Driven by Industrial Purpose.
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Win-Toju was established with a clear understanding of the evolving demands of Nigeria's industrial economy: the need for capable indigenous companies that combine local knowledge, technical competence, responsive logistics and disciplined project execution.
              </p>
              <p>
                From its foundation in Warri, Delta State, the company has focused on developing capabilities that enable it to support demanding operations across the energy, marine, logistics and infrastructure sectors.
              </p>
              <p>
                As Win-Toju grows, our objective remains clear: to build a resilient indigenous organization capable of delivering dependable services while contributing meaningfully to Nigerian Content development and industrial capacity.
              </p>
            </div>
          </div>

          {/* Vertical Corporate Timeline */}
          <div className="max-w-4xl border-l-2 border-corporate-red/30 pl-6 sm:pl-10 space-y-12">

            {/* 2020 */}
            <div className="relative">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-corporate-red rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-white mb-2">2020: Company Established</h3>
              <p className="text-slate-400">Win-Toju System Enterprise Limited incorporated.</p>
            </div>

            {/* 2021 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-slate-300 mb-2">2021</h3>
              <p className="text-slate-400 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded">[MILESTONE TO BE PROVIDED]</p>
            </div>

            {/* 2022 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-slate-300 mb-2">2022</h3>
              <p className="text-slate-400 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded">[MILESTONE TO BE PROVIDED]</p>
            </div>

            {/* 2023 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-slate-300 mb-2">2023</h3>
              <p className="text-slate-400 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded">[MILESTONE TO BE PROVIDED]</p>
            </div>

            {/* 2024 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-slate-300 mb-2">2024</h3>
              <p className="text-slate-400 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded">[MILESTONE TO BE PROVIDED]</p>
            </div>

            {/* 2025 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-950"></div>
              <h3 className="text-2xl font-black text-slate-300 mb-2">2025</h3>
              <p className="text-slate-400 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded">[MILESTONE TO BE PROVIDED]</p>
            </div>

            {/* 2026 */}
            <div className="relative">
              <div className="absolute -left-[35px] sm:-left-[51px] w-5 h-5 bg-corporate-red rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
              <h3 className="text-2xl font-black text-white mb-2">2026: Building the Next Generation of Indigenous Industrial Services</h3>
              <p className="text-slate-400">Current strategic development and expansion.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
