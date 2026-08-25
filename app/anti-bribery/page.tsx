// app/anti-bribery/page.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AntiBriberyPage() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100">
          <div className="inline-block border-l-4 border-corporate-red pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-corporate-navy tracking-tight">
              Anti-Bribery & Corruption Policy
            </h1>
          </div>
          
          <div className="space-y-6 text-corporate-slate leading-relaxed">
            <p className="text-sm font-semibold">Commitment to Ethical Business Practices</p>
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">1. Policy Statement</h2>
              <p>Win-Toju System Enterprise Limited is committed to conducting all its business in an honest and ethical manner. We take a zero-tolerance approach to bribery and corruption and are committed to acting professionally, fairly, and with integrity in all our business dealings and relationships wherever we operate.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">2. Scope of Application</h2>
              <p>This policy applies to all individuals working at all levels and grades, including senior managers, directors, employees (whether permanent, fixed-term, or temporary), consultants, contractors, trainees, seconded staff, and any other person providing services to us.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">3. Prohibited Actions</h2>
              <p>Personnel and affiliates of Win-Toju are strictly prohibited from offering, promising, giving, requesting, or accepting any financial or other advantage with the intention of inducing or rewarding improper performance of a function or activity related to our engineering, procurement, or logistics operations.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}