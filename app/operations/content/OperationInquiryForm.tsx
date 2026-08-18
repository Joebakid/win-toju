// app/operations/content/OperationInquiryForm.tsx
"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface OperationInquiryFormProps {
  title: string;
  description: string;
  email: string;
  location: string;
  topicOptions: string[];
  defaultTopic: string;
  serviceCategory: string;
}

export default function OperationInquiryForm({
  title,
  description,
  email,
  location,
  topicOptions,
  defaultTopic,
  serviceCategory,
}: OperationInquiryFormProps) {
  const [formData, setFormData] = useState({
    topic: defaultTopic,
    senderEmail: "",
    senderPhone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = {
        name: `${serviceCategory} Client / Inquiry`,
        email: formData.senderEmail,
        phone: formData.senderPhone,
        subject: `[${serviceCategory}] ${formData.topic}`,
        message: `Phone: ${formData.senderPhone}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`,
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
        setFormData({
          topic: defaultTopic,
          senderEmail: "",
          senderPhone: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-xl flex flex-col gap-4 border border-white/10 shadow-xl mt-8 max-w-2xl mx-auto scroll-mt-24">
      <div className="space-y-1.5 text-center md:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
        <p className="text-[11px] sm:text-xs text-corporate-cream pt-0.5 font-semibold">
          Email: {email} &bull; Location: {location}
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-green-900/40 border border-green-500 p-4 rounded-lg text-center space-y-2">
          <h4 className="text-base font-bold text-green-300">Request Successfully Dispatched!</h4>
          <p className="text-xs text-slate-200">
            Thank you. Your request has been securely submitted. Our operations team will contact you shortly.
          </p>
          <button 
            onClick={() => setStatus("idle")} 
            className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-corporate-red text-white px-3 py-1.5 rounded"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 bg-slate-800/60 p-4 sm:p-5 rounded-lg border border-white/5">
          {status === "error" && (
            <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 rounded text-xs font-semibold">
              Failed to dispatch request. Please try again or reach out directly via email.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Inquiry Topic / Objective
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white text-xs focus:border-corporate-red outline-none"
              >
                {topicOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Sender Phone Number
              </label>
              <input
                type="tel"
                name="senderPhone"
                required
                placeholder="+234..."
                value={formData.senderPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white text-xs focus:border-corporate-red outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
              Sender Email Address
            </label>
            <input
              type="email"
              name="senderEmail"
              required
              placeholder="name@company.com"
              value={formData.senderEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white text-xs focus:border-corporate-red outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
              Project Details / Message Space
            </label>
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Specify requirements, scope, timeline, or details..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white text-xs focus:border-corporate-red outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-corporate-red hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg text-center text-xs uppercase tracking-wide transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? "Transmitting..." : formData.topic}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}