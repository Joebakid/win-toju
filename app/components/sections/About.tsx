// app/components/sections/About.tsx
export default function About() {
  const contentPolicies = [
    "Employ and train Nigerian technical and management staff to run daily activities.",
    "Employ competent and qualified Local Contractors for technical support.",
    "Form alliances with Nigerian-registered Companies to execute projects.",
    "Patronize locally manufactured goods that meet industry specified standards.",
    "Work with international firms that imbibe a culture of non-discrimination."
  ];

  const operationalScope = [
    { title: "Marine Logistics", desc: "Specialized transportation, marine vessel supply, and operation." },
    { title: "Offshore Support", desc: "Marine security, escort, mooring services, house boats, and barges." },
    { title: "General Contracting", desc: "Comprehensive engineering, claims agency, and labour supply." },
    { title: "Waste Management", desc: "Certified onshore waste management for the oil & gas industry." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TOP SECTION: Corporate Overview & Accreditations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-corporate-red pl-4">
              <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
                Corporate Identity
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-corporate-navy tracking-tight leading-tight">
              Driving Industrial Growth Through <span className="text-corporate-red">Uncompromising Standards.</span>
            </h3>

            <div className="space-y-4 text-corporate-slate text-lg leading-relaxed">
              <p>
                <strong>WIN-TOJU SYSTEM ENTERPRISE LIMITED (RC: 1744024)</strong> is an indigenous, world-class engineering, marine logistics, and procurement company incorporated on December 10, 2020. Operating from our headquarters at Suite A11, Golden Plaza, Warri, Delta State, we are committed to delivering highly specialized solutions to the energy, oil & gas, and public infrastructure sectors in Nigeria.
              </p>
              <p>
                We maintain the highest levels of statutory and regulatory compliance. Win-Toju is officially licensed by the <strong>Nigerian Upstream Petroleum Regulatory Commission (NUPRC)</strong> for Specialized Transportation and Offshore Support Services, registered with <strong>NIMASA</strong> as a recognized Shipping Company, and certified by the <strong>NCDMB (NOGIC JQS)</strong> as a Service Company. 
              </p>
            </div>
          </div>

          {/* Right Column: Operational Scope Cards */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-corporate-navy translate-x-4 translate-y-4 rounded-lg z-0 hidden sm:block"></div>
            <div className="relative z-10 bg-corporate-cream p-8 md:p-10 rounded-lg border border-gray-200 shadow-xl space-y-6">
              <h4 className="text-2xl font-bold text-corporate-navy border-b border-gray-300 pb-4">
                Core Operational Scope
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {operationalScope.map((scope, index) => (
                  <div key={index} className="bg-white p-5 border-t-4 border-corporate-red rounded shadow-sm">
                    <h5 className="font-bold text-corporate-navy text-sm mb-2">{scope.title}</h5>
                    <p className="text-corporate-slate text-xs leading-relaxed">{scope.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* TIN & Tax Compliance callout */}
              <div className="mt-4 pt-4 border-t border-gray-300 flex items-center justify-between text-xs font-bold text-corporate-slate uppercase tracking-wide">
                <span>Tax Compliant Enterprise</span>
                <span>TIN: 23780029-0001</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Nigerian Content Policy */}
        <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            <div className="lg:col-span-1 space-y-6">
              <div className="inline-block border-b-4 border-corporate-red pb-2">
                <h3 className="text-2xl font-black text-corporate-navy uppercase tracking-tight">
                  Nigerian Content Policy
                </h3>
              </div>
              <p className="text-corporate-slate leading-relaxed">
                As a responsible corporate organization, Win-Toju is committed to maximizing Nigerian Content in the execution of all our projects. Our alliance with foreign technical partners is rooted in the importance of technology and knowledge transfer.
              </p>
              <blockquote className="border-l-4 border-corporate-red pl-4 italic text-sm text-corporate-navy font-semibold">
                "Encouraging Nigerian Contents Development is not only politically sensible but makes good business sense."
              </blockquote>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contentPolicies.map((policy, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded shadow-sm border border-gray-100">
                    <svg className="w-6 h-6 text-corporate-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-sm text-corporate-slate font-medium leading-relaxed">{policy}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}