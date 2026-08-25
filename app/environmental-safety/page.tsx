// app/environmental-safety/page.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function EnvironmentalSafetyPage() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100">
          <div className="inline-block border-l-4 border-corporate-red pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-corporate-navy tracking-tight">
              Environmental Safety Policy
            </h1>
          </div>
          
          <div className="space-y-6 text-corporate-slate leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">1. Our Commitment</h2>
              <p>Win-Toju System Enterprise Limited recognizes that environmental protection is a non-negotiable standard. We are committed to minimizing the ecological impact of our heavy industrial operations, marine logistics, and general contracting services.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">2. Certified Waste Management</h2>
              <p>As a certified provider of Onshore Waste Management services by the Nigerian Content Development and Monitoring Board (NCDMB), we implement stringent waste disposal and recycling protocols to ensure hazardous and non-hazardous materials are handled safely.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">3. Risk Management & LTI</h2>
              <p>Our operations are designed around comprehensive risk management frameworks to achieve and maintain zero Lost Time Incidents (LTI). We enforce mandatory, rigorous safety training programs for all site workers, engineers, and logistics personnel.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}