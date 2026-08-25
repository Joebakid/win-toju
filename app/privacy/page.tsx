// app/privacy/page.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100">
          <div className="inline-block border-l-4 border-corporate-red pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-corporate-navy tracking-tight">
              Privacy Policy
            </h1>
          </div>
          
          <div className="space-y-6 text-corporate-slate leading-relaxed">
            <p className="text-sm font-semibold">Last Updated: {new Date().getFullYear()}</p>
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">1. Information Collection</h2>
              <p>Win-Toju System Enterprise Limited respects your privacy. We collect personal and corporate data (such as names, emails, and company details) solely for the purpose of processing inquiries, managing contracts, and facilitating project execution.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">2. Use of Information</h2>
              <p>The information we collect is used to communicate directly with our clients, route departmental inquiries, and ensure compliance with regulatory documentation requirements within the Nigerian oil and gas sector.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">3. Data Security</h2>
              <p>We implement robust, multi-tier security measures to protect your corporate data and personal information against unauthorized access, alteration, or disclosure. All submitted documentation and procurement requests are treated with strict confidentiality.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-corporate-navy">4. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your sensitive information to outside parties, except where required by Nigerian regulatory bodies (e.g., NUPRC, NCDMB) for compliance and auditing purposes.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}