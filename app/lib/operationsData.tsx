// app/lib/operationsData.tsx
import React from "react";

export interface Operation {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  content: React.ReactNode;
}

export const operationsData: Operation[] = [
  {
    slug: "marine-logistics",
    title: "Marine Vessel Chartering & Logistics",
    subtitle: "Reliable offshore transportation and marine asset management.",
    heroImage: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop", // Cargo ship / Offshore Vessel
    content: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl font-black text-corporate-navy mb-4">Precision in Offshore Logistics</h2>
        <p>
          At Win-Toju System Enterprise Limited, we understand that marine asset availability is critical to the success of offshore exploration and production. We provide comprehensive vessel chartering services, supplying heavy-duty tugboats, barges, and specialized marine equipment to international and indigenous oil companies operating in the Niger Delta and deepwater regions.
        </p>
        <p>
          Our fleet management adheres to the strictest seaworthiness protocols, ensuring complete compliance with NOGIC JQS, NipeX vendor standards, and international maritime safety regulations.
        </p>
      </div>
    ),
  },
  {
    slug: "oilfield-support",
    title: "Offshore & Oilfield Support Services",
    subtitle: "End-to-end support for exploration and production.",
    heroImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069&auto=format&fit=crop", // Offshore Oil Rig
    content: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl font-black text-corporate-navy mb-4">Sustaining Energy Operations</h2>
        <p>
          Our oilfield support division is designed to mitigate operational risks and guarantee uptime for E&P operators. We handle the complex procurement, tactical deployment, and supply chain logistics required to keep offshore platforms and swamp operations running smoothly 24/7.
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-corporate-red">
          <li>Supply of specialized oilfield equipment and consumables.</li>
          <li>Logistics routing and secure material transport to remote offshore locations.</li>
          <li>Maintenance and facility support services.</li>
        </ul>
      </div>
    ),
  },
  {
    slug: "claims-agency",
    title: "Claims Agency & Community Liaison",
    subtitle: "Bridging the gap between corporate operations and host communities.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop", // Corporate/Community Meeting
    content: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl font-black text-corporate-navy mb-4">Fostering Harmony in Host Communities</h2>
        <p>
          With decades of experience managing sensitive community interface dynamics in the Niger Delta, Win-Toju acts as a trusted intermediary between major oil operators and indigenous host communities. 
        </p>
        <p>
          Our team expertly manages field claims, land rights negotiations, and compensation frameworks during seismic surveys and exploration campaigns. By ensuring transparent communication and stakeholder alignment, we maintain community peace and prevent costly operational disruptions.
        </p>
      </div>
    ),
  },
  {
    slug: "manpower-supply",
    title: "Technical Manpower & Labor Supply",
    subtitle: "Deploying certified indigenous professionals to the field.",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // Engineers / Offshore Workers
    content: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl font-black text-corporate-navy mb-4">The Engine of Industry</h2>
        <p>
          Executing high-stakes technical projects requires highly skilled, safety-conscious personnel. We supply certified technical manpower—ranging from marine engineers and heavy-duty equipment operators to riggers, electricians, and HSE supervisors.
        </p>
        <p>
          In strict compliance with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act, we prioritize the development and utilization of indigenous talent, providing operators with a reliable, highly competent workforce tailored to complex energy sector demands.
        </p>
      </div>
    ),
  },
  {
    slug: "waste-management",
    title: "Onshore Waste Management",
    subtitle: "Certified environmental compliance and industrial waste handling.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop", // Environmental / Industrial site
    content: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl font-black text-corporate-navy mb-4">Protecting Our Environment</h2>
        <p>
          As a socially responsible enterprise, we deliver rigorous onshore waste management solutions that meet federal environmental regulations. We manage municipal and industrial waste streams generated from operational base camps, ensuring proper containment, evacuation, and eco-friendly disposal.
        </p>
        <p>
          Our operations are guided by advanced environmental science and continuous monitoring, effectively minimizing the ecological footprint of industrial activities in our operational regions.
        </p>
      </div>
    ),
  },
];