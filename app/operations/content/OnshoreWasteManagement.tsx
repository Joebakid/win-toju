// app/operations/content/OnshoreWasteManagement.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function OnshoreWasteManagementContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Sustainable Environmental Stewardship
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          Sustainable Environmental Stewardship & Onshore Waste Governance
        </h2>
        <p>
          At Win-Toju System Enterprise Limited, we deliver end-to-end onshore waste management solutions engineered to protect ecosystems, maintain regulatory compliance, and optimize waste streams for oilfield facilities, industrial complexes, and municipal sites. Managing onshore industrial waste requires absolute technical control—from initial site characterization and safe collection to advanced treatment and eco-friendly disposal.
        </p>
        <p>
          Win-Toju serves as a trusted environmental partner for energy operators, industrial manufacturing facilities, and public sector agencies. Leveraging bioremediation technology, strict containment protocols, and full alignment with state and federal environmental protection agencies, we transform complex waste challenges into seamless, ecologically sound operations.
        </p>
      </div>

      {/* SECTION 2: CORE ONSHORE WASTE SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Core Onshore Waste Services & Treatment Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Hydrocarbon & Crude Contaminated Soil Bioremediation</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Advanced biostimulation and bioaugmentation methodologies designed to reduce Total Petroleum Hydrocarbon (TPH) levels in oil-polluted soils, restoring land vitality post-spill or drilling campaign.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Industrial & Municipal Solid Waste Management</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Systematic collection, segregation, recycling, and sanitary landfill disposal of non-hazardous industrial refuse, operational scrap, and municipal solid waste streams.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. Onshore Sludge Treatment & Oil Recovery</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mechanical separation, thermal desorption, and chemical treatment of tank bottoms, oily sludge, and production pits—maximizing oil recovery while neutralizing hazardous residue.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. Onsite Waste Containment & Environmental Monitoring</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design and deployment of high-density polyethylene (HDPE) lined waste holding pits, continuous soil/groundwater sampling, and environmental impact audits.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Regulatory Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ NESREA & State EPB Compliance:</span>
            <p className="text-slate-300">Full alignment with federal and state environmental regulations.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Advanced TPH Reduction Analytics:</span>
            <p className="text-slate-300">Field-tested bioremediation backed by lab contaminant testing.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Cradle-to-Grave Tracking:</span>
            <p className="text-slate-300">Manifest-driven tracking systems documenting waste to final disposal.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Rapid Response Spill Team:</span>
            <p className="text-slate-300">Mobilization-ready environmental teams for emergency onshore cleanups.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;Effective onshore waste management is not merely a legal obligation—it is a moral imperative to preserve our land and water resources for future generations. At Win-Toju System Enterprise Limited, we integrate cutting-edge biostimulants, strict containment protocols, and regulatory precision to deliver sustainable environmental solutions.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="onshore-waste-form">
        <OperationInquiryForm
          title="Require Compliant Onshore Waste Treatment or Bioremediation?"
          description="Partner with Win-Toju System Enterprise Limited for certified waste handling, soil remediation, and absolute environmental regulatory compliance."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Request Waste Management Services",
            "Consult Our Environmental Team"
          ]}
          defaultTopic="Request Waste Management Services"
          serviceCategory="Onshore Waste Management"
        />
      </div>

    </div>
  );
}