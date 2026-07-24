// app/components/sections/Projects.tsx
"use client";

import { useState, ReactNode } from "react";
import { FaIndustry, FaShip, FaRecycle, FaTimes } from "react-icons/fa";

// Define the Project Type
type Project = {
  id: number;
  title: string;
  client: string;
  category: string;
  icon: ReactNode; // <-- Updated from JSX.Element to ReactNode to fix Vercel build
  description: string;
  fullDescription: string;
  image: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extended Placeholder data
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Offshore Vessel Supply & Mooring",
      client: "Confidential Energy Partner",
      category: "Marine Logistics",
      icon: <FaShip className="w-6 h-6" />,
      description: "Deployed and managed specialized marine vessels to support deep-water rig operations, including continuous mooring and security escort services.",
      fullDescription: "This comprehensive marine logistics operation involved the deployment of three Anchor Handling Tug Supply (AHTS) vessels and two fast intervention security vessels. Our team managed end-to-end mooring configurations for a deep-water drilling rig located 80 nautical miles offshore. The project was executed with strict adherence to NIMASA regulations and achieved a 100% uptime record over the 18-month contract, ensuring uninterrupted offshore operations for the client.",
      image: "https://media.istockphoto.com/id/1929158995/photo/cargo-container-ship-moored-at-harbor.jpg?s=2048x2048&w=is&k=20&c=OUCpUcwRvGvpFRG1OtY9EPytYBh1M-9Ow1opBOspfnQ=",
    },
    {
      id: 2,
      title: "Site Waste Management & Evacuation",
      client: "Multinational Oil Corporation",
      category: "Waste Management",
      icon: <FaRecycle className="w-6 h-6" />,
      description: "Executed comprehensive onshore waste evacuation and treatment in strict compliance with NCDMB and environmental safety regulations.",
      fullDescription: "Win-Toju System Enterprise Limited was contracted to overhaul the waste management protocols for a major onshore flow station. We deployed certified hazardous waste containment units and managed the safe evacuation, segregation, and treatment of over 5,000 metric tons of industrial byproducts. Our proactive approach to environmental safety resulted in zero spillages and full statutory compliance with NUPRC specialized operational permits.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Heavy-Duty Equipment Haulage",
      client: "Federal Infrastructure Project",
      category: "Special Transportation",
      icon: <FaIndustry className="w-6 h-6" />,
      description: "Coordinated the secure, cross-state transportation of heavy industrial materials and engineering procurement supplies with zero Lost Time Incidents (LTI).",
      fullDescription: "This high-stakes procurement and special transportation project required the logistical coordination of 40 flatbed trailers and specialized low-bed modular transporters. We successfully hauled critical engineering components, including gas turbines and massive structural steel, across three states. Through rigorous route planning, community liaison, and HSE oversight, the project was delivered two weeks ahead of schedule with zero Lost Time Incidents (LTI).",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // Prevent background scrolling when modal is open
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100 relative">
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
              className="bg-corporate-cream rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-corporate-navy relative flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
                />
                <div className="z-10 text-white/80 group-hover:scale-110 group-hover:text-white transition-all duration-500">
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
                
                <button 
                  className="mt-auto text-left text-sm font-bold text-corporate-red hover:text-red-800 transition-colors uppercase tracking-wide flex items-center gap-2"
                >
                  View Details <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL OVERLAY */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-corporate-navy/80 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-corporate-red text-white p-3 rounded-full transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-80 md:h-96 relative bg-corporate-navy overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="bg-corporate-red text-white p-3 rounded-lg shadow-lg">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <p className="text-white text-sm font-medium">
                    {selectedProject.client}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Text Body */}
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-4xl font-black text-corporate-navy mb-6 tracking-tight">
                {selectedProject.title}
              </h3>
              
              <div className="w-16 h-1 bg-corporate-red mb-8"></div>
              
              <div className="prose prose-lg prose-slate max-w-none text-corporate-slate">
                <p className="leading-relaxed whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}