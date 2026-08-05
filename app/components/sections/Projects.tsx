// app/components/sections/Projects.tsx
"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { 
  FaIndustry, 
  FaShip, 
  FaRecycle, 
  FaTimes, 
  FaHardHat, 
  FaTools,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the Project Type
type Project = {
  id: number;
  title: string;
  client: string;
  category: string;
  icon: ReactNode;
  description: string;
  fullDescription: string;
  image: string; // The main thumbnail shown on the card
  images?: string[]; // Optional array of images for the modal carousel
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // State for modal carousel
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Expanded data containing project images and multiple image galleries
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Offshore Vessel Supply & Mooring",
      client: "Confidential Energy Partner",
      category: "Marine Logistics",
      icon: <FaShip className="w-6 h-6" />,
      description: "Deployed and managed specialized marine vessels to support deep-water rig operations, including continuous mooring and security escort services.",
      fullDescription: "This comprehensive marine logistics operation involved the deployment of three Anchor Handling Tug Supply (AHTS) vessels and two fast intervention security vessels. Our team managed end-to-end mooring configurations for a deep-water drilling rig located 80 nautical miles offshore. The project was executed with strict adherence to NIMASA regulations and achieved a 100% uptime record over the 18-month contract, ensuring uninterrupted offshore operations for the client.",
      image: "/win-toju-photos/win-toju (26).jpeg", 
      images: [
        "/win-toju-photos/win-toju (22).jpeg",
        "/win-toju-photos/win-toju (23).jpeg",
        "/win-toju-photos/win-toju (24).jpeg",
        "/win-toju-photos/win-toju (25).jpeg",
        "/win-toju-photos/win-toju (26).jpeg",
        "/win-toju-photos/win-toju (27).jpeg"
      ] 
    },
    {
      id: 2,
      title: "Site Waste Management & Evacuation",
      client: "Multinational Oil Corporation",
      category: "Waste Management",
      icon: <FaRecycle className="w-6 h-6" />,
      description: "Executed comprehensive onshore waste evacuation and treatment in strict compliance with NCDMB and environmental safety regulations.",
      fullDescription: "Win-Toju System Enterprise Limited was contracted to overhaul the waste management protocols for a major onshore flow station. We deployed certified hazardous waste containment units and managed the safe evacuation, segregation, and treatment of over 5,000 metric tons of industrial byproducts. Our proactive approach to environmental safety resulted in zero spillages and full statutory compliance with NUPRC specialized operational permits.",
      image: "/win-toju-photos/win-toju (4).jpeg",
      images: [
        "/win-toju-photos/win-toju (4).jpeg",
        "/win-toju-photos/win-toju (5).jpeg",
        "/win-toju-photos/win-toju (6).jpeg",
        "/win-toju-photos/win-toju (7).jpeg"
      ] 
    },
    {
      id: 3,
      title: "Heavy-Duty Equipment Haulage",
      client: "Federal Infrastructure Project",
      category: "Special Transportation",
      icon: <FaIndustry className="w-6 h-6" />,
      description: "Coordinated the secure, cross-state transportation of heavy industrial materials and engineering procurement supplies with zero Lost Time Incidents (LTI).",
      fullDescription: "This high-stakes procurement and special transportation project required the logistical coordination of 40 flatbed trailers and specialized low-bed modular transporters. We successfully hauled critical engineering components, including gas turbines and massive structural steel, across three states. Through rigorous route planning, community liaison, and HSE oversight, the project was delivered two weeks ahead of schedule with zero Lost Time Incidents (LTI).",
      image: "/win-toju-photos/win-toju (12).jpeg",
      images: [
        "/win-toju-photos/win-toju (8).jpeg",
        "/win-toju-photos/win-toju (9).jpeg",
        "/win-toju-photos/win-toju (10).jpeg",
        "/win-toju-photos/win-toju (11).jpeg",
        "/win-toju-photos/win-toju (12).jpeg",
        "/win-toju-photos/win-toju (13).jpeg",
        "/win-toju-photos/win-toju (14).jpeg"
      ] 
    },
  
  ];

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate Header Text
      gsap.fromTo(".projects-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate Carousel Container
      gsap.fromTo(".carousel-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".carousel-anim",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Main Card Carousel Navigation Functions
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -424 : 424; // 400px card + 24px gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Open Modal and reset image index
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0); // Reset to first photo whenever a project is opened
    document.body.style.overflow = "hidden";
  };

  // Close Modal
  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    // Removed overflow-hidden to allow full bleed scrolling
    <section id="projects" ref={sectionRef} className="py-24 bg-white border-t border-gray-100 relative">
      
      {/* HEADER CONTAINER - Kept inside max-w to align with the rest of the site */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="projects-header-anim opacity-0 inline-block border-l-4 border-corporate-red pl-4">
              <h2 className="text-corporate-red font-bold tracking-widest uppercase text-sm">
                Our Track Record
              </h2>
            </div>
            <h3 className="projects-header-anim opacity-0 text-3xl md:text-5xl font-black text-corporate-navy tracking-tight">
              Featured Projects & Operations.
            </h3>
            <p className="projects-header-anim opacity-0 text-corporate-slate text-lg leading-relaxed">
              A glimpse into our operational capacity. We execute complex logistics and contracting requirements for Nigeria's leading energy and infrastructure sectors.
            </p>
          </div>

          {/* Custom Carousel Controls */}
          <div className="projects-header-anim opacity-0 flex items-center gap-4">
            <button 
              onClick={() => scrollCarousel("left")}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-corporate-navy hover:bg-corporate-navy hover:text-white hover:border-corporate-navy transition-all duration-300 shadow-sm"
              aria-label="Scroll Left"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollCarousel("right")}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-corporate-navy hover:bg-corporate-navy hover:text-white hover:border-corporate-navy transition-all duration-300 shadow-sm"
              aria-label="Scroll Right"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FULL BLEED CAROUSEL WRAPPER */}
      {/* Pl-calc dynamically aligns the start of the carousel with the edge of the max-w-7xl header */}
      <div className="w-full pl-6 md:pl-12 xl:pl-[calc((100vw-80rem)/2+3rem)]">
        <div 
          ref={carouselRef}
          className="carousel-anim opacity-0 flex overflow-x-auto gap-6 pb-12 pr-6 md:pr-12 xl:pr-[calc((100vw-80rem)/2+3rem)] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              // Added a percentage width for mobile so the next card peeks into view naturally
              className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] snap-start bg-corporate-cream rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-corporate-navy relative flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-overlay"
                />
                
                {/* Badge showing if multiple images exist - Whitespace-nowrap added */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-20 whitespace-nowrap border border-white/10">
                    {project.images.length} Photos
                  </div>
                )}
                
                <div className="z-10 text-white/90 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-corporate-red flex-shrink-0">
                    {project.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-slate truncate">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-corporate-navy mb-2 line-clamp-2">
                  {project.title}
                </h4>
                
                <p className="text-xs text-gray-500 mb-4 font-medium italic truncate">
                  Client: {project.client}
                </p>
                
                <p className="text-sm text-corporate-slate leading-relaxed mb-6 flex-grow line-clamp-3">
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
              className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-corporate-red text-white p-3 rounded-full transition-colors backdrop-blur-md shadow-lg"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Image Display / Carousel */}
            <div className="w-full h-64 sm:h-80 md:h-[450px] relative bg-corporate-navy overflow-hidden group/modal-carousel">
              
              {/* Check if project has multiple images for carousel rendering */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <>
                  <img 
                    src={selectedProject.images[activeImageIndex]} 
                    alt={`${selectedProject.title} - Photo ${activeImageIndex + 1}`} 
                    className="w-full h-full object-cover opacity-90 transition-all duration-300"
                  />
                  
                  {/* Left Navigation Arrow */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => prev === 0 ? selectedProject.images!.length - 1 : prev - 1);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-corporate-red text-white p-3 rounded-full opacity-0 group-hover/modal-carousel:opacity-100 transition-all duration-300"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => prev === selectedProject.images!.length - 1 ? 0 : prev + 1);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-corporate-red text-white p-3 rounded-full opacity-0 group-hover/modal-carousel:opacity-100 transition-all duration-300"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Indicator Dots */}
                  <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-auto">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-md ${
                          idx === activeImageIndex ? 'bg-corporate-red scale-125' : 'bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                /* Fallback for single image projects */
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-90"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 pointer-events-none z-10">
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