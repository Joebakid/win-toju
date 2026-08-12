// app/operations/content/GeneralContracting.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function GeneralContractingContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Integrated General Contracting & EPC Procurement
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          Multi-Disciplinary Execution & Strategic Asset Procurement
        </h2>
        <p>
          At Win-Toju System Enterprise Limited, we combine civil engineering expertise, mechanical integrity, and global supply chain sourcing to deliver turnkey general contracting services. As a trusted partner to International Oil Companies (IOCs), government agencies, and major industrial developers, we execute complex projects with an unyielding commitment to structural quality, budget control, and schedule adherence.
        </p>
        <p>
          From constructing specialized civil works and managing onshore facility maintenance to executing high-spec oilfield procurement, Win-Toju provides the structural backbone for industrial expansion. We simplify project execution by serving as a single-point contractor—managing engineering design, material sourcing, site safety, and workforce logistics under one integrated governance framework.
        </p>
      </div>

      {/* SECTION 2: CORE CONTRACTING SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Comprehensive Engineering & Project Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Civil & Structural Engineering Works</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design, construction, and structural maintenance of industrial site foundations, concrete paving, drainage channels, site clearing, and access road networks for swamp and onshore oilfields.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Oilfield Procurement & Strategic Supply</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Global sourcing and fast-track delivery of high-spec line pipes, valves, structural steel, electrical instrumentation, and heavy-duty industrial hardware compliant with API and ISO standards.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. Facility Maintenance & Modifications</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Preventive and corrective maintenance of oilfield facilities, office complexes, structural fabrication, blasting/painting, and cathodic protection systems.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. Project Management & Site Support</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              End-to-end EPC project management, sub-contractor supervision, site security fencing, and turnkey temporary site office setup.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Governance Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Single-Point Accountability:</span>
            <p className="text-slate-300">Reduces client administrative overhead and eliminates vendor friction.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Rigorous QA/QC Testing:</span>
            <p className="text-slate-300">Non-destructive testing (NDT), load tests, and material trace audits.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Local Content Synergy:</span>
            <p className="text-slate-300">Seamless host-community engagement and full NOGICD Act compliance.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Uncompromising HSE:</span>
            <p className="text-slate-300">Standardized site safety protocols and daily toolbox meetings.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;Engineering excellence in general contracting requires more than technical capacity—it demands accountability, precise supply chain control, and absolute safety. At Win-Toju System Enterprise Limited, we build infrastructure and supply resources that stand the test of time and drive sustainable industrial growth.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="contracting-form">
        <OperationInquiryForm
          title="Planning a Civil, Maintenance, or Procurement Campaign?"
          description="Partner with Win-Toju System Enterprise Limited for turnkey general contracting, API-spec procurement, and reliable project execution. Select your objective below to send your details directly to our project management team."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Submit Project Tender",
            "Consult Our Project Team",
            "Procurement Inquiry",
            "Civil Engineering Services"
          ]}
          defaultTopic="Submit Project Tender"
          serviceCategory="General Contracting"
        />
      </div>

    </div>
  );
}