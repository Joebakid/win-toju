// app/lib/operationsData.tsx
import React from "react";
import LabourSupplyContent from "../operations/content/LabourSupply";
import MarineLogisticsContent from "../operations/content/MarineLogistics";
import SpecializedTransportationContent from "../operations/content/SpecializedTransportation";
import GeneralContractingContent from "../operations/content/GeneralContracting";
import OnshoreWasteManagementContent from "../operations/content/OnshoreWasteManagement";
import OffshoreWasteManagementContent from "../operations/content/OffshoreWasteManagement";

export interface Operation {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  content: React.ReactNode;
}

export const operationsData: Operation[] = [
  {
    slug: "labour-supply",
    title: "Technical Manpower & Labour Supply",
    subtitle: "Deploying Certified, Highly Skilled Marine & Oilfield Personnel Engineered for Offshore Safety, Field Integrity, and Operational Excellence.",
    heroImage: "https://ik.imagekit.io/luvrld8r9/win-toju-photo/technical%20man%20power.JPG",
    content: <LabourSupplyContent />,
  },
  {
    slug: "marine-logistics",
    title: "Marine Logistics & Vessel Operations",
    subtitle: "Delivering High-Spec Vessel Supply, Deepwater Support, and Flawless Offshore Logistics across Nigeria's Energy Corridors.",
    heroImage: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <MarineLogisticsContent />,
  },
  {
    slug: "specialized-transportation",
    title: "Specialized Heavy-Lift Transportation",
    subtitle: "Precision Haulage, Heavy Equipment Logistics, and Route-Engineered Transport Solutions for Complex Energy Infrastructure.",
    heroImage: "https://ik.imagekit.io/luvrld8r9/win-toju-photo/WhatsApp%20Image%202026-08-18%20at%208.57.06%20PM.jpegnpm",
    content: <SpecializedTransportationContent />,
  },
  {
    slug: "general-contracting",
    title: "General Contracting & Procurement",
    subtitle: "Delivering Turnkey Civil Infrastructure, Industrial Asset Maintenance, and Strategic Oilfield Procurement Across Nigeria's Energy Sector.",
    heroImage: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GeneralContractingContent />,
  },
  {
    slug: "onshore-waste-management",
    title: "Onshore Waste Management",
    subtitle: "Sustainable Waste Characterization, Onsite Containment, Hydrocarbon Remediation, and Municipal & Industrial Stream Compliance Across Onshore Assets.",
    heroImage: "https://ik.imagekit.io/luvrld8r9/win-toju-photo/Onshore%20Waste%20Management.JPG",
    content: <OnshoreWasteManagementContent />,
  },
  {
    slug: "offshore-waste-management",
    title: "Offshore Waste Management",
    subtitle: "Zero-Discharge Handling, Offshore Drilling Cuttings Management, Slop Water Filtration, and Marine Environmental Compliance.",
    heroImage: "https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <OffshoreWasteManagementContent />,
  },
];