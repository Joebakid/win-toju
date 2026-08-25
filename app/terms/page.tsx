// app/terms/page.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100">
          <div className="inline-block border-l-4 border-corporate-red pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-corporate-navy tracking-tight">
              Terms & Conditions
            </h1>
          </div>
          
          <div className="space-y-6 text-corporate-slate leading-relaxed">
            <p className="text-sm font-semibold">Last Updated: {new Date().getFullYear()}</p>
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">1. Introduction</h2>
              <p>Welcome to Win-Toju System Enterprise Limited. by accessing our website or engaging our services, you agree to be bound by these Terms and Conditions. These terms govern your use of our marine logistics, engineering, waste management, and general contracting services.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">2. Service Execution & Compliance</h2>
              <p>All operations, including marine vessel supply, offshore support, and civil/mechanical engineering, are executed in strict accordance with the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) and the Nigerian Maritime Administration and Safety Agency (NIMASA) guidelines.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">3. Limitation of Liability</h2>
              <p>While Win-Toju System Enterprise Limited operates with the highest standard of safety and quality assurance, we shall not be held liable for indirect, incidental, or consequential damages arising from unforeseen operational disruptions outside our direct control.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">4. Governing Law</h2>
              <p>These terms and all operational contracts are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}