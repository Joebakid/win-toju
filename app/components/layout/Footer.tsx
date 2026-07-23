// app/components/layout/Footer.tsx
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFilePdf, 
  FaExternalLinkAlt 
} from "react-icons/fa";
import Logo from "../ui/Logo";

export default function Footer() {
  const officialDocuments = [
    { name: "CAC Certificate", href: "https://drive.google.com/file/d/1kC2HkRGQ02N3T8KVWJwFjisT1pcgE0SJ/preview" },
    { name: "Tax Clearance (TCC)", href: "https://drive.google.com/file/d/1irixM_NIfXIRtMk74N9DnGUVQeOs5NTQ/preview" },
    { name: "NUPRC Specialized Permit", href: "https://drive.google.com/file/d/1mw7YiTEVxucd648_UQ8HUXdpFhX-xWdm/preview" },
    { name: "NIMASA Registration", href: "https://drive.google.com/file/d/1vJ2A-49AhGPLgWkrVtk67gU66Ze-SdjV/preview" },
    { name: "NCDMB Certificate", href: "https://drive.google.com/file/d/1fxkSGP5O79O5s-HwOieMqcT3bKie_9ic/preview" },
    { name: "Clinic Retainership", href: "https://drive.google.com/file/d/1Ou0RtFANDBxrC4DSFwUYGjBWDphhbOGq/preview" },
    { name: "Nigerian Content Policy", href: "https://drive.google.com/file/d/1L5jdCpy186Atu4Kf8Q42NGIzTE_WjF30/preview" },
    { name: "Personnel Credentials", href: "https://docs.google.com/document/d/1-cU7fGAqinl6Smokt1Hq5VEC1CWIf8Bc/preview" },
  ];

  return (
    <footer className="bg-corporate-navy pt-20 pb-10 border-t-4 border-corporate-red">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="w-48 bg-white p-2 rounded">
              <Logo className="w-full" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium Engineering, Marine Logistics, and General Contracting services tailored for Nigeria's energy sector.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-corporate-red flex-shrink-0 mt-1" />
                <p>Suite A11, Golden Plaza, By Shell Contractor Road, Ogunu, Warri, Delta State.</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-4 h-4 text-corporate-red flex-shrink-0" />
                <p>
                  <a href="tel:+2348057183697" className="hover:text-white transition-colors">08057183697</a> || <a href="tel:+2348067518929" className="hover:text-white transition-colors">08067518929</a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-corporate-red flex-shrink-0" />
                <p>
                  <a href="mailto:wintojultd@gmail.com" className="hover:text-white transition-colors">wintojultd@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/#about" className="hover:text-corporate-red transition-colors flex items-center gap-2">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-corporate-red transition-colors flex items-center gap-2">Core Divisions</Link></li>
              <li><Link href="/#hse" className="hover:text-corporate-red transition-colors flex items-center gap-2">HSE & QA/QC</Link></li>
              <li><Link href="/#team" className="hover:text-corporate-red transition-colors flex items-center gap-2">Leadership Team</Link></li>
              <li><Link href="/#certifications" className="hover:text-corporate-red transition-colors flex items-center gap-2">Resource Center</Link></li>
              <li><Link href="/#contact" className="hover:text-corporate-red transition-colors flex items-center gap-2">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Policies & Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">
              Legal & Policies
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/terms" className="hover:text-corporate-red transition-colors flex items-center gap-2">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-corporate-red transition-colors flex items-center gap-2">Privacy Policy</Link></li>
              <li><Link href="/anti-bribery" className="hover:text-corporate-red transition-colors flex items-center gap-2">Anti-Bribery & Corruption Policy</Link></li>
              <li><Link href="/environmental-safety" className="hover:text-corporate-red transition-colors flex items-center gap-2">Environmental Safety Policy</Link></li>
              <li><Link href="/local-content" className="hover:text-corporate-red transition-colors flex items-center gap-2">Local Content Directive</Link></li>
            </ul>
          </div>

          {/* Column 4: Official Documents */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-slate-700 pb-2">
              Official Documents
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {officialDocuments.map((doc, index) => (
                <li key={index}>
                  <a 
                    href={doc.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-corporate-red transition-colors flex items-center gap-2 group"
                  >
                    <FaFilePdf className="text-slate-500 group-hover:text-corporate-red transition-colors" />
                    <span className="truncate">{doc.name}</span>
                    <FaExternalLinkAlt className="w-2.5 h-2.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Win-Toju System Enterprise Limited (RC: 1744024). All Rights Reserved.</p>
          <p>Designed for Industrial Excellence.</p>
        </div>

      </div>
    </footer>
  );
}