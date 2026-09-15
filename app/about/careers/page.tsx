"use client";

import { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FaUserGroup,
  FaBriefcase,
  FaGraduationCap,
  FaShieldHalved,
  FaArrowRight,
  FaArrowDown,
  FaCheck,
  FaLock,
  FaPaperPlane,
  FaCircleInfo,
  FaChevronRight,
  FaLightbulb,
  FaBuildingUser
} from "react-icons/fa6";
import gsap from "gsap";

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

export default function CareersPage() {
  const pageRef = useRef<HTMLElement>(null);
  const cvFormRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // State to simulate CMS dynamic control: set array to empty [] to test "No-Vacancy" state
  const [vacancies] = useState<Vacancy[]>([
    /* Un-comment to test active vacancy state:
    {
      id: "vac-001",
      title: "PROJECT COORDINATOR",
      department: "Operations / Projects",
      location: "Warri, Delta State",
      employmentType: "Full-time",
      closingDate: "2026-10-30",
      description: "Supporting operational workflows and project execution oversight across industrial assignments.",
      responsibilities: [
        "Coordinate project schedules, documentation, and operational reporting.",
        "Interface with client field representatives and internal technical teams."
      ],
      requirements: [
        "B.Sc / HND in Engineering or related technical field.",
        "3+ years experience in industrial or oilfield project coordination."
      ]
    }
    */
  ]);

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

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".comp-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

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
    <main ref={pageRef} className="min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-corporate-navy relative overflow-hidden">

      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-24 w-full">

        {/* HERO SECTION */}
        <section className="max-w-4xl space-y-6">
          <div className="comp-anim inline-block border-l-4 border-corporate-red pl-4">
            <span className="text-corporate-red font-bold tracking-widest uppercase text-xs md:text-sm">
              CAREERS
            </span>
          </div>

          <h1 className="comp-anim text-4xl md:text-6xl font-black tracking-tight text-corporate-navy leading-[1.15]">
            People. Opportunity. <br />
            <span className="text-slate-600">Development.</span>
          </h1>

          <p className="comp-anim text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
            At Win-Toju, we recognize that the strength of our business is built around capable people. We seek to attract, develop and retain individuals who are committed to professional excellence, responsible work and continuous learning.
          </p>

          <div className="comp-anim pt-4 flex flex-wrap gap-4">
            <a
              href="#vacancies"
              className="bg-corporate-red text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
            >
              Explore Opportunities <FaArrowDown />
            </a>
            {/* <button
              onClick={() => scrollToCvForm()}
              className="bg-slate-100 text-corporate-navy px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              Submit Your Profile <FaArrowRight />
            </button> */}
          </div>
        </section>

        {/* WHY WORK WITH WIN-TOJU */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Join Our Vision</span>
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
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-corporate-navy uppercase tracking-wider">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR PEOPLE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
          <div className="lg:col-span-7 space-y-4">
            <div className="comp-anim space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Multidisciplinary Team</span>
              <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">People Make the Difference</h2>
            </div>
            <p className="comp-anim text-slate-600 text-sm md:text-base leading-relaxed">
              Our people bring together different areas of knowledge, experience and professional expertise across technical, administrative and operational fields.
            </p>
            <div className="comp-anim pt-2">
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 text-xs font-bold text-corporate-navy hover:text-corporate-red uppercase tracking-wider transition-colors"
              >
                Meet Our Leadership <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <FaUserGroup className="w-8 h-8 text-corporate-red" />
            <h3 className="font-bold text-corporate-navy text-base">Collaborative Excellence</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We foster a professional culture centered on mutual respect, high operational ethics, and continuous knowledge-sharing across project teams.
            </p>
          </div>
        </section>

        {/* CAREER DEVELOPMENT JOURNEY */}
        <section className="space-y-12">
          <div className="comp-anim max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Professional Progression</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Growing Through Experience</h2>
            <p className="text-slate-600 leading-relaxed">
              We believe professional development is an ongoing process. Practical experience, mentorship, training and exposure to new responsibilities all contribute to building capable professionals.
            </p>
          </div>

          <div className="comp-anim bg-white p-6 md:p-8 rounded-xl border border-slate-200 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">Development Philosophy</span>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-black text-corporate-navy">
              <span className="px-4 py-2 bg-slate-100 rounded-lg">JOIN</span>
              <FaChevronRight className="text-corporate-red w-3 h-3" />
              <span className="px-4 py-2 bg-slate-100 rounded-lg">LEARN</span>
              <FaChevronRight className="text-corporate-red w-3 h-3" />
              <span className="px-4 py-2 bg-slate-100 rounded-lg">CONTRIBUTE</span>
              <FaChevronRight className="text-corporate-red w-3 h-3" />
              <span className="px-4 py-2 bg-slate-100 rounded-lg">DEVELOP</span>
              <FaChevronRight className="text-corporate-red w-3 h-3" />
              <span className="px-4 py-2 bg-slate-100 rounded-lg text-corporate-red border border-corporate-red/20">GROW</span>
            </div>
          </div>
        </section>

        {/* VACANCIES / NO-VACANCY STATE */}
        {/* <section id="vacancies" className="space-y-8 border-t border-slate-200 pt-16">
          <div className="comp-anim space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Recruitment Status</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">Current Vacancies</h2>
          </div>

          {vacancies.length === 0 ? (
            <div className="comp-anim bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 space-y-6 max-w-3xl">
              <div className="flex items-center gap-3 text-slate-500">
                <FaCircleInfo className="w-5 h-5 text-slate-400 shrink-0" />
                <p className="text-slate-700 text-sm md:text-base font-semibold">
                  There are currently no open positions at Win-Toju.
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We welcome expressions of interest from qualified professionals who would like to be considered for future opportunities.
              </p>
              <button
                onClick={() => scrollToCvForm()}
                className="bg-corporate-red text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-wider shadow-sm"
              >
                Submit Your CV / Express Interest <FaArrowRight />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {vacancies.map((vacancy) => (
                <div key={vacancy.id} className="comp-anim bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-bold text-corporate-red uppercase tracking-wider">{vacancy.department}</span>
                      <h3 className="text-xl font-black text-corporate-navy">{vacancy.title}</h3>
                    </div>
                    <div className="text-xs text-slate-500 text-right space-y-1">
                      <div>Location: <span className="font-bold text-slate-700">{vacancy.location}</span></div>
                      <div>Type: <span className="font-bold text-slate-700">{vacancy.employmentType}</span></div>
                      <div>Closing: <span className="font-bold text-slate-700">{vacancy.closingDate}</span></div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm">{vacancy.description}</p>
                  <button
                    onClick={() => scrollToCvForm(vacancy.title)}
                    className="bg-corporate-navy text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                  >
                    Apply For Position <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section> */}

        {/* WEB3FORMS INTEGRATED SUBMISSION FORM */}
        <section ref={cvFormRef} className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
          <div className="comp-anim max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Talent Register</span>
            <h2 className="text-2xl md:text-3xl font-black text-corporate-navy">Submit Application / Career Inquiry</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fill out the form below to register your profile directly with our corporate team.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl space-y-4 max-w-2xl text-emerald-900">
              <div className="flex items-center gap-3 font-bold text-lg">
                <FaCheck className="text-emerald-600 w-6 h-6" />
                Application Transmitted Successfully
              </div>
              <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
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
                className="text-xs font-bold uppercase tracking-wider text-corporate-red hover:underline"
              >
                Send Another Profile / Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="comp-anim max-w-3xl space-y-6">

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-semibold">
                  An error occurred while submitting your information. Please check your network or email us directly at wintojultd@gmail.com.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Omoregie Emmanuel"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. e.omoregie@example.com"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="department" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Application Type / Department</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  >
                    <option value="careers">Careers & Labour Supply</option>
                    <option value="job_application">Job Application</option>
                    <option value="internship">Internship Application</option>
                    <option value="general">General Candidate Inquiry</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="preferredCareerArea" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Preferred Career Discipline</label>
                  <select
                    id="preferredCareerArea"
                    name="preferredCareerArea"
                    value={formData.preferredCareerArea}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  >
                    {careerDisciplines.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="yearsExperience" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Years of Experience *</label>
                  <input
                    type="text"
                    id="yearsExperience"
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    placeholder="e.g. 3 Years / Entry Level"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="areaOfExpertise" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Area of Expertise / Primary Qualification *</label>
                <input
                  type="text"
                  id="areaOfExpertise"
                  name="areaOfExpertise"
                  required
                  value={formData.areaOfExpertise}
                  onChange={handleChange}
                  placeholder="e.g. Mechanical Maintenance, Quality Assurance, B.Sc Mechanical Engineering"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Cover Summary & CV Link / Qualifications *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide a brief summary of your background, qualifications, key accomplishments, or link to your online CV/LinkedIn profile..."
                  className="w-full bg-white border border-slate-200 rounded-lg p-4 text-xs text-corporate-navy focus:outline-none focus:border-corporate-red resize-none"
                />
              </div>

              {/* PRIVACY ACKNOWLEDGEMENT */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-0.5 rounded border-slate-300 text-corporate-red focus:ring-corporate-red"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-snug">
                    By submitting your information, you acknowledge that Win-Toju may use the provided data for recruitment and workforce evaluation in accordance with corporate privacy practices.
                  </label>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <FaLock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Submissions are encrypted and transmitted directly to official human resource channels.</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || !formData.privacyConsent}
                className="bg-corporate-red text-white hover:bg-red-700 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <span className="text-xs font-bold uppercase tracking-wider text-corporate-red">Ethos & Conduct</span>
            <h2 className="text-3xl md:text-4xl font-black text-corporate-navy">A Culture of Responsibility</h2>
            <p className="text-slate-600 leading-relaxed">
              We value professionalism, accountability, respect, teamwork and a commitment to doing work responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workplaceValues.map((val, idx) => (
              <div key={idx} className="comp-anim bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-2 h-2 rounded-full bg-corporate-red" />
                <h3 className="font-bold text-corporate-navy text-xs uppercase tracking-wider">{val.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HSE CONNECTION */}
        <section className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-corporate-red text-xs font-bold uppercase tracking-wider">
              <FaShieldHalved />
              Working Responsibly
            </div>
            <h3 className="text-xl font-bold text-corporate-navy">Safety & Operational Integrity</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Every person working with Win-Toju has a role to play in maintaining safe and responsible working practices.
            </p>
          </div>
          <Link
            href="/about/hse-quality-environment"
            className="shrink-0 bg-white border border-slate-200 text-corporate-navy hover:bg-slate-100 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            HSE & Quality Policy <FaArrowRight />
          </Link>
        </section>

      </div>
    </main>
  );
}
