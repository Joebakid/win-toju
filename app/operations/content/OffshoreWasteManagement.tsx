// app/operations/content/OffshoreWasteManagement.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function OffshoreWasteManagementContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Marine Environmental Protection
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          High-Spec Marine Environmental Protection & Offshore Waste Containment
        </h2>
        <p>
          In deepwater drilling, swamp operations, and offshore production environments, waste management demands absolute precision, specialized marine equipment, and zero-tolerance environmental safety. At Win-Toju System Enterprise Limited, we provide high-capacity offshore waste management services that safeguard fragile marine ecosystems while maintaining unhindered offshore rig operations.
        </p>
        <p>
          From handling oil-based mud (OBM) cuttings and slop water to deploying certified offshore waste skip containers, Win-Toju executes complex marine waste logistics under strict MARPOL 73/78 and NUPRC guidelines. Our integrated approach guarantees that all hazardous and non-hazardous offshore waste streams are contained at the rig, safely transported marine-side, and treated onshore with zero discharge into the marine environment.
        </p>
      </div>

      {/* SECTION 2: CORE OFFSHORE WASTE SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Core Offshore Waste Services & Marine Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Drilling Cuttings Containment & Transport (OBM/SBM)</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provision of DNV 2.7-1 certified offshore waste skips, vacuum transfer units, and specialized transport logistics for oil-based and synthetic-based mud cuttings from rig deck to shore.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Slop Water Treatment & Bilge Water Filtration</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Advanced offshore oil-water separation, filtration, and processing of contaminated rig wash-down water, bilge water, and slop fluids down to legal discharge thresholds (&lt;15 ppm).
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. Offshore Hazardous & Chemical Waste Logistics</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Safe handling, segregation, chemical neutralization, and secure marine transfer of spent drilling chemicals, laboratory reagents, batteries, and oily rags.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. MARPOL Compliance & Marine Vessel Waste Systems</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complete marine vessel waste management compliance covering Annex I (Oil), Annex IV (Sewage), and Annex V (Garbage) protocols for supply vessels, drillships, and rigs.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Compliance Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ DNV 2.7-1 Structural Standards:</span>
            <p className="text-slate-300">Certified offshore lifting skips, cutting boxes, and frames.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ NUPRC & MARPOL Alignment:</span>
            <p className="text-slate-300">Strict adherence to regulatory upstream environmental frameworks.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Closed-Loop Zero-Discharge:</span>
            <p className="text-slate-300">Total containment preventing accidental spills into marine waters.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ 24/7 Marine Tracking:</span>
            <p className="text-slate-300">Integration between offshore vessels and onshore treatment facilities.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;Operating in offshore waters requires an absolute commitment to marine conservation. At Win-Toju System Enterprise Limited, our offshore waste management operations are built around zero-discharge principles—ensuring that deepwater exploration proceeds safely without compromising our ocean ecosystems.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="offshore-waste-form">
        <OperationInquiryForm
          title="Need Certified Offshore Waste Containment for Your Rig?"
          description="Partner with Win-Toju System Enterprise Limited for MARPOL-compliant offshore waste management, zero-discharge containment, and certified marine logistics. Select your objective below to send your details directly to our environmental team."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Request Offshore Waste Services",
            "Consult Our Environmental Team",
            "Skip Container Rental"
          ]}
          defaultTopic="Request Offshore Waste Services"
          serviceCategory="Offshore Waste Management"
        />
      </div>

    </div>
  );
}