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
    <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-2xl flex flex-col gap-8 border border-white/10 shadow-2xl mt-12 scroll-mt-24">
      <div className="space-y-3 text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-black text-white">{title}</h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          {description}
        </p>
        <p className="text-xs sm:text-sm text-corporate-cream pt-1 font-semibold">
          Email: {email} &bull; Location: {location}
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-green-900/40 border border-green-500 p-6 rounded-xl text-center space-y-3">
          <h4 className="text-xl font-bold text-green-300">Request Successfully Dispatched!</h4>
          <p className="text-sm text-slate-200">
            Thank you. Your request has been securely submitted. Our operations team will contact you shortly.
          </p>
          <button 
            onClick={() => setStatus("idle")} 
            className="mt-4 text-xs font-bold uppercase tracking-wider bg-corporate-red text-white px-4 py-2 rounded"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-slate-800/60 p-6 sm:p-8 rounded-xl border border-white/5">
          {status === "error" && (
            <div className="p-4 bg-red-900/50 border border-red-500 text-red-200 rounded text-sm font-semibold">
              Failed to dispatch request. Please try again or reach out directly via email.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Inquiry Topic / Objective
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-corporate-red outline-none"
              >
                {topicOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Sender Phone Number
              </label>
              <input
                type="tel"
                name="senderPhone"
                required
                placeholder="+234..."
                value={formData.senderPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-corporate-red outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Sender Email Address
            </label>
            <input
              type="email"
              name="senderEmail"
              required
              placeholder="name@company.com"
              value={formData.senderEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-corporate-red outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Project Details / Message Space
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Specify requirements, scope, timeline, or details..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-corporate-red outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-corporate-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-center text-sm uppercase tracking-wide transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? "Transmitting..." : formData.topic}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}