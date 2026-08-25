// app/local-content/page.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function LocalContentPage() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-gray-100">
          <div className="inline-block border-l-4 border-corporate-red pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-corporate-navy tracking-tight">
              Nigerian Content Policy Statement
            </h1>
          </div>
          
          <div className="space-y-6 text-corporate-slate leading-relaxed">
            
            <p className="text-lg text-corporate-navy font-semibold">
              WIN-TOJU SYSTEM ENTERPRISE LTD, as a responsible corporate organization, is committed to maximize Nigerian Content in the execution of our projects.
            </p>
            
            <p>
              Our alliance with foreign technical partners is based on the importance of technology and knowledge transfer in our shared aspiration to maximize Nigerian Content participation in all facets of the sector.
            </p>

            <blockquote className="border-l-4 border-corporate-red pl-6 py-2 my-6 bg-slate-50 italic font-medium text-corporate-navy rounded-r">
              "Encouraging Nigerian Contents Development is not only politically sensible but makes good business sense".
            </blockquote>

            <div className="pt-4 space-y-4">
              <h2 className="text-xl font-bold text-corporate-navy">Strategic Implementation</h2>
              <p>WIN-TOJU SYSTEM ENTERPRISE LTD will implement the Nigerian Content policy through the following strategies:</p>
              
              <ul className="list-none space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <span className="text-corporate-red font-bold mt-1">•</span>
                  <span>Work with international firms that imbibe and practice our culture of non-discrimination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-corporate-red font-bold mt-1">•</span>
                  <span>Employ and train Nigerian technical and management staff to run the daily activities of the Company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-corporate-red font-bold mt-1">•</span>
                  <span>Employ competent and qualified Local Contractors to provide technician and non-technical support services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-corporate-red font-bold mt-1">•</span>
                  <span>Form alliances on a case-by-case basis with Nigerian-registered Companies to execute projects in Nigeria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-corporate-red font-bold mt-1">•</span>
                  <span>Patronize Locally manufactured goods that meet industry specified standards.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="font-bold text-corporate-navy">Dave Mogbusiaghan</p>
              <p className="text-sm">Local Content Manager</p>
              <p className="text-sm text-gray-500">April 2023</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}