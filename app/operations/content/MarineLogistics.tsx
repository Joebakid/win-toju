// app/operations/content/MarineLogistics.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function MarineLogisticsContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Offshore Marine Logistics & Fleet Operations
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          Reliable Offshore Transportation & Maritime Execution
        </h2>
        <p>
          At Win-Toju System Enterprise Limited, we provide the operational backbone for mission-critical offshore energy campaigns. We specialize in the end-to-end supply, chartering, and tactical execution of specialized marine logistics solutions engineered for International Oil Companies (IOCs), indigenous E&P operators, and major engineering contractors.
        </p>
        <p>
          Navigating the complexities of Nigeria's deepwater, coastal, and riverine environments requires absolute vessel availability and zero-incident execution. Win-Toju bridges the gap between field demand and operational delivery—managing vessel readiness, crew deployment, seaworthiness protocols, and offshore movement to guarantee maximum project uptime and total regulatory alignment.
        </p>
      </div>

      {/* SECTION 2: CORE MARINE LOGISTICS SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Core Marine Asset & Logistics Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Offshore Support Vessel (OSV) Supply & Chartering</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provision and operational management of Platform Supply Vessels (PSVs), Anchor Handling Tug Supply (AHTS) vessels, and fast crew supply boats tailored for offshore platforms and rig operations.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Heavy-Duty Tugboat & Barge Logistics</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deployment of high-bollard-pull tugboats alongside specialized barges (flat-top, ramp, and deck cargo barges) optimized for shallow-water, swamp, and riverine freight transport.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. Marine Technical Manpower & Crew Governance</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supply of fully certified, sea-going marine officers, vessel captains, engineers, and deckhands strictly compliant with STCW, NIMASA, and global maritime safety standards.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. Offshore Bunkering & Deck Cargo Logistics</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seamless supply chain support covering bulk liquid transportation, fresh water delivery, offshore fuel supply, and heavy equipment transfers to remote offshore facilities.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Compliance Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Rigorous Seaworthiness Audits:</span>
            <p className="text-slate-300">Pre-hire class society inspections and strict preventive maintenance protocols ensure 100% operational readiness.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Full Regulatory Governance:</span>
            <p className="text-slate-300">Complete alignment with NIMASA, IMO, NOGIC JQS, and NipeX compliance standards.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Deep Riverine Navigation Insight:</span>
            <p className="text-slate-300">Strategic mastery of Niger Delta waterways, swamp navigation, and local interface management.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ 24/7 Command & Control:</span>
            <p className="text-slate-300">Integrated marine tracking, real-time offshore communications, and back-office governance.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;In offshore energy production, marine logistics is far more than transportation—it is the lifeline of field continuity. At Win-Toju System Enterprise Limited, we combine technical vessel management with absolute governance to ensure every charter achieves maximum efficiency, safety, and zero operational downtime.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="marine-form">
        <OperationInquiryForm
          title="Ready to Secure Dependable Marine Support for Your Next Charter?"
          description="Partner with Win-Toju System Enterprise Limited for certified marine vessel supply, seamless offshore logistics, and trusted field execution."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Request Vessel Charter",
            "Consult Our Logistics Team"
          ]}
          defaultTopic="Request Vessel Charter"
          serviceCategory="Marine Logistics"
        />
      </div>

    </div>
  );
}