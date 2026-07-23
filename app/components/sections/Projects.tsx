// app/components/sections/Projects.tsx
import { FaIndustry, FaShip, FaRecycle } from "react-icons/fa";

export default function Projects() {
  // Placeholder data - replace with actual Win-Toju projects later
  const projectsList = [
    {
      id: 1,
      title: "Offshore Vessel Supply & Mooring",
      client: "Confidential Energy Partner",
      category: "Marine Logistics",
      icon: <FaShip className="w-5 h-5" />,
      description: "Deployed and managed specialized marine vessels to support deep-water rig operations, including continuous mooring and security escort services.",
    },
    {
      id: 2,
      title: "Site Waste Management & Evacuation",
      client: "Multinational Oil Corporation",
      category: "Waste Management",
      icon: <FaRecycle className="w-5 h-5" />,
      description: "Executed comprehensive onshore waste evacuation and treatment in strict compliance with NCDMB and environmental safety regulations.",
    },
    {
      id: 3,
      title: "Heavy-Duty Equipment Haulage",
      client: "Federal Infrastructure Project",
      category: "Special Transportation",
      icon: <FaIndustry className="w-5 h-5" />,
      description: "Coordinated the secure, cross-state transportation of heavy industrial materials and engineering procurement supplies with zero Lost Time Incidents (LTI).",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block border-l-4 border-corporate-red pl-4">
            <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
              Our Track Record
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
            Featured Projects & Operations.
          </h3>
          <p className="text-corporate-slate text-lg leading-relaxed">
            A glimpse into our operational capacity. We execute complex logistics and contracting requirements for Nigeria's leading energy and infrastructure sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="bg-corporate-cream rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group flex flex-col"
            >
              {/* Image Placeholder (Navy Block) */}
              <div className="w-full h-48 bg-corporate-navy relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <div className="text-white/20 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-corporate-red flex-shrink-0">
                    {project.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-slate">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-corporate-navy mb-2">
                  {project.title}
                </h4>
                
                <p className="text-sm text-gray-500 mb-4 font-medium italic">
                  Client: {project.client}
                </p>
                
                <p className="text-sm text-corporate-slate leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <button className="mt-auto text-left text-sm font-bold text-corporate-red hover:text-red-800 transition-colors uppercase tracking-wide">
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}