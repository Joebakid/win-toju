// app/components/sections/Services.tsx
export default function Services() {
  const servicesList = [
    {
      number: "01",
      title: "Marine Logistics & Special Transportation",
      description: "Operating as a registered Shipping Company, we provide Marine Vessels Supply and Operation, alongside Offshore Operation Support Services including Marine Security & Escort, Mooring Services, House Boats, and Barges.",
    },
    {
      number: "02",
      title: "Onshore Waste Management",
      description: "Certified by the Nigerian Content Development and Monitoring Board (NCDMB) to provide comprehensive onshore waste management services for the oil and gas industry.",
    },
    {
      number: "03",
      title: "Claims Agency & General Contracting",
      description: "Providing professional corporate representation as claims agents and executing comprehensive general contracting services across the sector.",
    },
    {
      number: "04",
      title: "Indigenous Labour Supply",
      description: "Employing and supplying competent and qualified local contractors, Nigerian technical, and management staff. We operate in strict adherence to NUPRC regulations, specifically excluding the supply of expatriate manpower.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-corporate-navy text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Core Divisions
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Comprehensive Industrial & Logistics Capabilities.
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Engineered to meet the strict operational demands of high-level corporate and government partners across Nigeria's energy and infrastructure sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.number} 
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-lg relative overflow-hidden group hover:border-corporate-red transition duration-300 space-y-4"
            >
              <div className="text-corporate-red font-black text-4xl">
                {service.number}
              </div>
              <h4 className="text-2xl font-bold text-white group-hover:text-corporate-red transition duration-300">
                {service.title}
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}