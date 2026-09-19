"use client";

import { useEffect, useRef, useState, ChangeEvent, FormEvent, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FaUserGroup,
  FaBriefcase,
  FaGraduationCap,
  FaShieldHalved,
  FaArrowRight,
  FaCheck,
  FaLock,
  FaPaperPlane,
  FaChevronRight,
  FaLightbulb,
  FaBuildingUser
} from "react-icons/fa6";

// Explicit relative import based on your folder structure
import PageLayout from "../../components/layout/PageLayout-aboutus";

interface Vacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  closingDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

function CareersContent() {
  const cvFormRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // State to simulate CMS dynamic control
  const [vacancies] = useState<Vacancy[]>([]);

  // Form Submission & Status State
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "careers",
    preferredCareerArea: "Engineering & Technical",
    areaOfExpertise: "",
    yearsExperience: "",
    message: "",
    privacyConsent: false
  });

  // Handle URL Query Params (e.g. /careers?job=PROJECT+COORDINATOR or /careers?dept=internship)
  useEffect(() => {
    const jobParam = searchParams.get("job");
    const deptParam = searchParams.get("dept");

    if (deptParam) {
      setFormData((prev) => ({ ...prev, department: deptParam }));
    }
    if (jobParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Application for Position: ${jobParam}\n\n`
      }));
    }
  }, [searchParams]);

  const scrollToCvForm = (jobTitle?: string) => {
    if (jobTitle) {
      setFormData((prev) => ({
        ...prev,
        message: `Application for Position: ${jobTitle}\n\n`
      }));
    }
    cvFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Web3Forms Submit Handler
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) return;

    setStatus("submitting");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        preferred_career_area: formData.preferredCareerArea,
        area_of_expertise: formData.areaOfExpertise,
        years_of_experience: formData.yearsExperience,
        message: formData.message,
        subject: `Career Application / Talent Register - ${formData.name}`,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "f8a8e129-157a-4974-9ad2-414ffc7e6d13"
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        console.error("Web3Forms Career Form Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const careerDisciplines = [
    "Engineering & Technical",
    "Project Coordination",
    "Marine & Logistics",
    "HSE",
    "Administration",
    "Finance",
    "Procurement & Supply Chain",
    "Corporate & Compliance",
    "Business Development",
    "Operations"
  ];

  const workplaceValues = [
    { title: "Professionalism", desc: "Upholding high standards of conduct, technical diligence, and operational competence." },
    { title: "Integrity", desc: "Conducting business transparently, ethically, and with complete accountability." },
    { title: "Teamwork", desc: "Collaborating across disciplines to achieve shared objectives and project goals." },
    { title: "Accountability", desc: "Taking personal and collective ownership of outcomes, safety, and performance." },
    { title: "Continuous Learning", desc: "Encouraging ongoing development, skill enhancement, and practical growth." }
  ];

  return (
    <PageLayout
      hero={{
        prefix: "CAREERS",
        slides: [
          {
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000",
            headline: "People. Opportunity.",
            sub: "Development."
          }
        ],
        description: "At Win-Toju, we recognize that the strength of our business is built around capable people. We seek to attract, develop and retain individuals who are committed to professional excellence, responsible work and continuous learning.",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "About" },
          { label: "Careers" }
        ],
        buttons: [
          { label: "Explore Opportunities", href: "#application-form", variant: "primary" }
        ]
      }}
    >
      {/* WHY WORK WITH WIN-TOJU */}
      <section className="space-y-10 border-t border-slate-200 pt-16">
        <div className="comp-anim max-w-3xl space-y-3">
          <span className="text-sm font-bold uppercase tracking-wider text-corporate-red">Join Our Vision</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Build Your Career With Us</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Win-Toju provides an environment where people can contribute their knowledge, develop practical experience and grow alongside an evolving Nigerian company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "PURPOSE", desc: "Contribute to the growth of an indigenous company serving Nigeria's industrial economy.", icon: <FaBuildingUser className="w-6 h-6 text-corporate-red" /> },
            { title: "EXPERIENCE", desc: "Gain exposure to professional environments, projects and operational activities relevant to our business.", icon: <FaBriefcase className="w-6 h-6 text-corporate-red" /> },
            { title: "DEVELOPMENT", desc: "Build knowledge, technical capability and professional competence through experience and learning.", icon: <FaGraduationCap className="w-6 h-6 text-corporate-red" /> },
            { title: "OPPORTUNITY", desc: "Grow with an organization whose capabilities and opportunities continue to develop.", icon: <FaLightbulb className="w-6 h-6 text-corporate-red" /> }
          ].map((card, idx) => (
            <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:border-corporate-red transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-corporate-navy uppercase tracking-wider">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
        <div className="lg:col-span-7 space-y-4">
          <div className="comp-anim space-y-2">
            <span className="text-sm font-bold uppercase tracking-wider text-corporate-red">Multidisciplinary Team</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">People Make the Difference</h2>
          </div>
          <p className="comp-anim text-slate-600 text-base leading-relaxed">
            Our people bring together different areas of knowledge, experience and professional expertise across technical, administrative and operational fields.
          </p>
          <div className="comp-anim pt-2">
            <Link
              href="/about/our-leadership"
              className="inline-flex items-center gap-2 text-sm font-bold text-corporate-navy hover:text-corporate-red uppercase tracking-wider transition-colors"
            >
              Meet Our Leadership <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 comp-anim bg-white p-8 rounded-xl border border-slate-200 space-y-3">
          <FaUserGroup className="w-8 h-8 text-corporate-red" />
          <h3 className="font-bold text-corporate-navy text-lg">Collaborative Excellence</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            We foster a professional culture centered on mutual respect, high operational ethics, and continuous knowledge-sharing across project teams.
          </p>
        </div>
      </section>

      {/* CAREER DEVELOPMENT JOURNEY */}
      <section className="space-y-12">
        <div className="comp-anim max-w-3xl space-y-3">
          <span className="text-sm font-bold uppercase tracking-wider text-corporate-red">Professional Progression</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Growing Through Experience</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We believe professional development is an ongoing process. Practical experience, mentorship, training and exposure to new responsibilities all contribute to building capable professionals.
          </p>
        </div>

        <div className="comp-anim bg-white p-6 md:p-8 rounded-xl border border-slate-200 text-center space-y-6">
          <span className="text-sm font-bold uppercase tracking-widest text-corporate-red">Development Philosophy</span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-black text-corporate-navy">
            <span className="px-5 py-2.5 bg-slate-100 rounded-lg">JOIN</span>
            <FaChevronRight className="text-corporate-red w-4 h-4" />
            <span className="px-5 py-2.5 bg-slate-100 rounded-lg">LEARN</span>
            <FaChevronRight className="text-corporate-red w-4 h-4" />
            <span className="px-5 py-2.5 bg-slate-100 rounded-lg">CONTRIBUTE</span>
            <FaChevronRight className="text-corporate-red w-4 h-4" />
            <span className="px-5 py-2.5 bg-slate-100 rounded-lg">DEVELOP</span>
            <FaChevronRight className="text-corporate-red w-4 h-4" />
            <span className="px-5 py-2.5 bg-slate-100 rounded-lg text-corporate-red border border-corporate-red/20">GROW</span>
          </div>
        </div>
      </section>

      {/* WEB3FORMS INTEGRATED SUBMISSION FORM */}
      <section id="application-form" ref={cvFormRef} className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
        <div className="comp-anim max-w-2xl space-y-3">
          <span className="text-sm font-bold uppercase tracking-wider text-corporate-red">Talent Register</span>
          <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Submit Application / Career Inquiry</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Fill out the form below to register your profile directly with our corporate team.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl space-y-4 max-w-2xl text-emerald-900">
            <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
              <FaCheck className="text-emerald-600 w-6 h-6" />
              Application Transmitted Successfully
            </div>
            <p className="text-sm md:text-base text-emerald-800 leading-relaxed">
              Thank you for reaching out to Win-Toju System Enterprise Limited. Your details and statement have been routed to our corporate recruitment team.
            </p>
            <button
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  department: "careers",
                  preferredCareerArea: "Engineering & Technical",
                  areaOfExpertise: "",
                  yearsExperience: "",
                  message: "",
                  privacyConsent: false
                });
                setStatus("idle");
              }}
              className="text-sm font-bold uppercase tracking-wider text-corporate-red hover:underline pt-2"
            >
              Send Another Profile / Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="comp-anim max-w-3xl space-y-6">

            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold">
                An error occurred while submitting your information. Please check your network or email us directly at wintojultd@gmail.com.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Omoregie Emmanuel"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. e.omoregie@example.com"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="department" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Application Type / Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                >
                  <option value="careers">Careers & Labour Supply</option>
                  <option value="job_application">Job Application</option>
                  <option value="internship">Internship Application</option>
                  <option value="general">General Candidate Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="preferredCareerArea" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Preferred Career Discipline</label>
                <select
                  id="preferredCareerArea"
                  name="preferredCareerArea"
                  value={formData.preferredCareerArea}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                >
                  {careerDisciplines.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="yearsExperience" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Years of Experience *</label>
                <input
                  type="text"
                  id="yearsExperience"
                  name="yearsExperience"
                  required
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  placeholder="e.g. 3 Years / Entry Level"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="areaOfExpertise" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Area of Expertise / Primary Qualification *</label>
              <input
                type="text"
                id="areaOfExpertise"
                name="areaOfExpertise"
                required
                value={formData.areaOfExpertise}
                onChange={handleChange}
                placeholder="e.g. Mechanical Maintenance, Quality Assurance, B.Sc Mechanical Engineering"
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs md:text-sm font-bold text-corporate-navy uppercase tracking-wider">Cover Summary & CV Link / Qualifications *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide a brief summary of your background, qualifications, key accomplishments, or link to your online CV/LinkedIn profile..."
                className="w-full bg-white border border-slate-200 rounded-lg p-4 text-sm md:text-base text-corporate-navy focus:outline-none focus:border-corporate-red resize-none"
              />
            </div>

            {/* PRIVACY ACKNOWLEDGEMENT */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  required
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  className="mt-1 rounded border-slate-300 text-corporate-red focus:ring-corporate-red w-4 h-4"
                />
                <label htmlFor="privacyConsent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                  By submitting your information, you acknowledge that Win-Toju may use the provided data for recruitment and workforce evaluation in accordance with corporate privacy practices.
                </label>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/50 p-2 rounded w-fit">
                <FaLock className="w-3 h-3 shrink-0" />
                <span>Submissions are encrypted and transmitted directly to official human resource channels.</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || !formData.privacyConsent}
              className="bg-corporate-red text-white hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </>
              ) : (
                <>
                  Submit Application <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* WORKPLACE CULTURE */}
      <section className="space-y-8 border-t border-slate-200 pt-16">
        <div className="comp-anim max-w-3xl space-y-3">
          <span className="text-sm font-bold uppercase tracking-wider text-corporate-red">Ethos & Conduct</span>
          <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">A Culture of Responsibility</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We value professionalism, accountability, respect, teamwork and a commitment to doing work responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workplaceValues.map((val, idx) => (
            <div key={idx} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="w-2.5 h-2.5 rounded-full bg-corporate-red" />
              <h3 className="font-bold text-corporate-navy text-sm uppercase tracking-wider">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HSE CONNECTION */}
      <section className="comp-anim bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-corporate-red text-sm font-bold uppercase tracking-wider">
            <FaShieldHalved className="w-5 h-5" />
            Working Responsibly
          </div>
          <h3 className="text-2xl font-black text-corporate-navy">Safety & Operational Integrity</h3>
          <p className="text-slate-600 text-base leading-relaxed">
            Every person working with Win-Toju has a role to play in maintaining safe and responsible working practices.
          </p>
        </div>
        <Link
          href="/about/hse-quality-environment"
          className="shrink-0 bg-white border border-slate-200 text-corporate-navy hover:bg-slate-100 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
        >
          HSE & Quality Policy <FaArrowRight />
        </Link>
      </section>

    </PageLayout>
  );
}

// Wrap the component with Suspense in the default export
export default function CareersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-white">
        <div className="text-corporate-navy font-bold text-sm uppercase tracking-widest animate-pulse">
          Loading Careers...
        </div>
      </div>
    }>
      <CareersContent />
    </Suspense>
  );
}