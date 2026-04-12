"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const bizTypes = ["Real Estate", "Clinic / Healthcare", "Coaching / Consulting", "D2C Brand", "Legal Firm", "E-commerce", "SaaS / Tech", "Agency", "Other"];
const bizSizes = ["Solo / Freelancer", "2–10 employees", "11–50 employees", "51–200 employees", "200+ employees"];
const challenges = [
  "Leads not being followed up fast enough",
  "Too much manual / repetitive work",
  "Website not converting visitors",
  "No system to track leads and pipeline",
  "Scaling without increasing headcount",
  "Disconnected tools that don't talk to each other",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", bizType: "", bizSize: "", challenge: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-bg min-h-screen pt-[66px]">
      {/* Header */}
      <section className="relative py-20 grid-bg overflow-hidden">
        <div className="glow w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-indigo-600/8" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
            <p className="eyebrow-accent mb-5">Contact</p>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black tracking-[-0.03em] text-white leading-[1.04] mb-5">
              Book your free<br /><span className="gt">business audit.</span>
            </h1>
            <p className="text-[15px] text-[#8b8fa8] leading-relaxed">
              Start with a free 30-minute audit. We'll show you exactly where you're losing money and what to build first. No obligation. No pitch. Just clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              {status === "success" ? (
                <div className="card border-indigo-500/20 bg-gradient-to-b from-indigo-600/6 to-transparent p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-[22px] font-black text-white mb-3">Received.</h2>
                  <p className="text-[14px] text-[#8b8fa8] max-w-sm mx-auto leading-relaxed">
                    We'll review your submission and respond within 24 hours with a personalised audit of your business.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="card p-8 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow block mb-2.5">Name *</label>
                      <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2.5">Business Name *</label>
                      <input type="text" name="business" required placeholder="Your company" value={form.business} onChange={set} className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow block mb-2.5">Email *</label>
                      <input type="email" name="email" required placeholder="you@company.com" value={form.email} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2.5">Phone (WhatsApp preferred) *</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set} className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="eyebrow block mb-2.5">Business Type *</label>
                      <select name="bizType" required value={form.bizType} onChange={set} className="field">
                        <option value="" disabled>Select type</option>
                        {bizTypes.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow block mb-2.5">Business Size *</label>
                      <select name="bizSize" required value={form.bizSize} onChange={set} className="field">
                        <option value="" disabled>Select size</option>
                        {bizSizes.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow block mb-2.5">Biggest Challenge *</label>
                    <select name="challenge" required value={form.challenge} onChange={set} className="field">
                      <option value="" disabled>Select your challenge</option>
                      {challenges.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {errMsg && <p className="text-red-400/80 text-[13px]">{errMsg}</p>}

                  <button type="submit" disabled={status === "loading"}
                    className="btn-p w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? "Submitting..." : "Book My Free Audit"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
              <div className="card p-7">
                <p className="eyebrow mb-5">What to expect</p>
                <ul className="space-y-4">
                  {[
                    "We review your current workflows or website",
                    "Identify 2–3 immediate quick wins",
                    "Map out the highest-ROI system for your business",
                    "Give you an estimate of the solution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[13px] text-[#8b8fa8] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-[13px] text-[#8b8fa8]">We respond within 24 hours</p>
                </div>
                <div className="hr" />
                <p className="text-[12px] text-[#3d4060]">hello@beyondnine.in</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
