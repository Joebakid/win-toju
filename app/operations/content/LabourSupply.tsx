// app/operations/content/LabourSupply.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function LabourSupplyContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Human Capital Management
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          Human Capital Built for High-Risk, Mission-Critical Energy Operations
        </h2>
        <p>
          At Win-Toju System Enterprise Limited, we recognize that the success of any upstream, midstream, or marine campaign depends entirely on the caliber, discipline, and technical competence of the personnel on deck. We specialize in sourcing, vetting, and managing highly qualified technical manpower and specialized manpower solutions for International Oil Companies (IOCs), E&P operators, and major EPC contractors across Nigeria.
        </p>
        <p>
          From certified marine vessel captains and offshore rig crews to skilled welding technicians and safety supervisors, Win-Toju provides total human capital management. We eliminate operational bottlenecks by ensuring seamless recruitment, rigorous background verification, STCW/HSE compliance, payroll management, and tactical offshore mobilization—enabling your projects to run safely, on schedule, and without disruption.
        </p>
      </div>

      {/* SECTION 2: CORE MANPOWER SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Core Manpower Services: Comprehensive Personnel Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Offshore & Marine Technical Personnel</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supply of certified vessel captains, chief engineers, deckhands, dynamic positioning (DP) operators, and certified marine crew compliant with international STCW and NIMASA standards.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Oilfield Operations & Technical Field Personnel</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deployment of skilled drillers, rig hands, mechanical maintenance engineers, electrical technicians, pipefitters, and high-spec structural welders for offshore and swamp rigs.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. HSE & Quality Control Officers</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Qualified Health, Safety, and Environment (HSE) officers, site safety supervisors, and QA/QC inspectors trained to maintain zero-incident workplace cultures on active sites.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. Local Content & Skilled Community Personnel</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tactical sourcing and management of skilled and semi-skilled local manpower, ensuring seamless community relations, full NOGICD Act compliance, and harmonious host-community operations.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Compliance Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Rigorous Competency Vetting:</span>
            <p className="text-slate-300">Comprehensive pre-deployment screening, trade testing, and background checks.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Full Regulatory Alignment:</span>
            <p className="text-slate-300">Complete compliance with NOGICD Act and integration with NOGIC JQS portal.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Turnkey Crew Logistics:</span>
            <p className="text-slate-300">End-to-end administration including medical clearances, BOSIET/HUET, and payroll.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Zero-Harm HSE Commitment:</span>
            <p className="text-slate-300">Thorough training in international safety protocols and risk mitigation prior to deployment.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;In the oilfield and marine environment, human capability is the ultimate guarantee of asset safety and operational success. At Win-Toju System Enterprise Limited, we do not merely supply labour—we deploy verified expertise, disciplined safety culture, and reliable workforce management that drives project performance.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="deployment-form">
        <OperationInquiryForm
          title="Need Qualified Technical Personnel for Your Upcoming Project?"
          description="Partner with Win-Toju System Enterprise Limited for certified marine and oilfield manpower, compliant workforce logistics, and flawless field execution."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Request Manpower Deployment",
            "Consult Our HR Logistics Team"
          ]}
          defaultTopic="Request Manpower Deployment"
          serviceCategory="Labour Supply"
        />
      </div>

    </div>
  );
}