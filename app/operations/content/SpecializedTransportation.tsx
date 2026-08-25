// app/operations/content/SpecializedTransportation.tsx
import OperationInquiryForm from "./OperationInquiryForm";

export default function SpecializedTransportationContent() {
  return (
    <div className="space-y-10 text-corporate-slate text-base sm:text-lg leading-relaxed">
      
      {/* SECTION 1: OVERVIEW & PROWESS STATEMENT */}
      <div className="space-y-4">
        <div className="inline-block border-l-4 border-corporate-red pl-3">
          <h3 className="text-corporate-navy font-bold tracking-wider uppercase text-xs md:text-sm">
            Heavy-Lift Haulage & Route-Engineered Logistics
          </h3>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-corporate-navy">
          Tactical Haulage & Route-Engineered Heavy Transportation
        </h2>
        <p>
          At Win-Toju System Enterprise Limited, we provide high-capacity, specialized land and swamp transportation solutions for the energy and heavy-industrial sectors. Moving critical oilfield assets—from massive drilling rig components and pressure vessels to heavy turbines and structural modules—demands meticulous engineering, specialized haulage assets, and strict safety protocols.
        </p>
        <p>
          Win-Toju eliminates the logistical risks associated with moving oversized, out-of-gauge (OOG), and ultra-heavy cargo across challenging terrain. By integrating route surveying, specialized heavy-haul equipment, regulatory clearance management, and experienced transport crews, we guarantee that high-value industrial cargo reaches its site safely, on schedule, and intact.
        </p>
      </div>

      {/* SECTION 2: CORE TRANSPORTATION SERVICES (2x2 Grid) */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-corporate-navy">Core Specialized Transportation Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">1. Out-of-Gauge (OOG) & Heavy-Lift Haulage</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Specialized transportation of oversized industrial equipment, rig structures, heavy transformers, storage tanks, and structural steel using low-bed, multi-axle, and modular trailers.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">2. Oilfield Rig Moving & Equipment Mobilization</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tactical site-to-site mobilization and demobilization of land drilling rigs, workover units, and swamp barge support equipment with zero downtime.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">3. Hazardous Material (HazMat) Transport</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Secure, fully compliant road transportation of industrial liquids, chemical payloads, and oilfield fluids using certified tankers and trained HazMat transport personnel.
            </p>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-corporate-red shadow-sm">
            <h4 className="font-bold text-corporate-navy text-lg mb-2">4. Route Surveying & Heavy-Haul Feasibility Planning</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprehensive civil route surveys, bridge-load assessments, traffic management planning, and escort clearance protocols to ensure zero-risk haulage along public and industrial corridors.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: OPERATIONAL & COMPLIANCE STRENGTHS */}
      <div className="bg-corporate-navy text-white p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl">
        <h3 className="text-xl font-bold text-corporate-cream">Operational & Compliance Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200">
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Pre-Haulage Audits:</span>
            <p className="text-slate-300">Strict pre-trip safety checks, axle-load verification, and mechanical fitness certs.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Regulatory Permitting:</span>
            <p className="text-slate-300">Complete alignment with FRSC, state transport ministries, and authorities.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ Advanced Cargo Securing:</span>
            <p className="text-slate-300">Strict adherence to international ISO/HSE cargo-securing standards.</p>
          </div>
          <div className="space-y-1">
            <span className="text-corporate-red font-bold">✓ GPS Tracking & Escorts:</span>
            <p className="text-slate-300">Real-time telemetry monitoring and 24/7 central dispatch command.</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: INTEGRATED EXECUTIVE STATEMENT */}
      <blockquote className="border-l-4 border-corporate-red pl-6 italic text-slate-700 bg-slate-50 py-6 pr-6 rounded-r-xl shadow-sm">
        &ldquo;Transporting ultra-heavy oilfield assets across complex infrastructure is not just a matter of movement—it is an exercise in engineering precision and risk management. At Win-Toju System Enterprise Limited, we ensure every heavy haulage mission is route-engineered for safety, reliability, and flawless execution.&rdquo;
        <span className="block mt-3 font-bold text-corporate-navy not-italic">— Deacon Godwin Toju Ogbaro, CEO & Founder</span>
      </blockquote>

      {/* SECTION 5: REUSABLE INQUIRY FORM COMPONENT */}
      <div id="transportation-form">
        <OperationInquiryForm
          title="Need Specialized Heavy-Lift Transportation for Your Assets?"
          description="Partner with Win-Toju System Enterprise Limited for route-engineered heavy haulage, OOG transport solutions, and secure rig mob/demob execution."
          email="info@wintoju.com"
          location="Delta State, Nigeria"
          topicOptions={[
            "Request Heavy Transport",
            "Consult Our Transport Team"
          ]}
          defaultTopic="Request Heavy Transport"
          serviceCategory="Specialized Transportation"
        />
      </div>

    </div>
  );
}