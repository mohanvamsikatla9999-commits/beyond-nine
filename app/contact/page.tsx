"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const bottlenecks = [
  "Leads not being captured or responded to fast enough",
  "Inconsistent follow-up and low conversion rates",
  "Too much manual work in daily operations",
  "Tools and systems that don't work together",
  "Unable to scale without increasing workload",
  "No visibility into pipeline or performance",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", bottleneck: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, business: form.company, email: form.email, phone: form.phone, bizType: "N/A", bizSize: "N/A", challenge: form.bottleneck }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-bg min-h-screen pt-[70px]">
      {/* Header */}
      <section className="relative py-24 grid-cinema overflow-hidden">
        <div className="orb w-[700px] h-[500px] top-0 left-1/2 -translate-x-1/2 bg-[#6C5CE7]/8" />
        <div className="wrap relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">Strategy Call</p>
            <h1 className="d1 text-white mb-5">
              Let's identify what's holding
              <br />
              <span className="gt-v">your system back.</span>
            </h1>
            <p className="body text-[17px]">
              Fill in the details below. We'll review your situation and respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              {status === "success" ? (
                <div className="card-cinema border-[rgba(108,92,231,0.2)] bg-gradient-to-b from-[#6C5CE7]/6 to-transparent p-14 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 flex items-center justify-center mx-auto mb-7">
                    <svg className="w-6 h-6 text-[#6C5CE7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="d4 text-white mb-3">Received.</h2>
                  <p className="body max-w-sm mx-auto">
                    We'll review your submission and respond within 24 hours with a clear assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="card-cinema p-8 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label block mb-3">Name</label>
                      <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="label block mb-3">Company</label>
                      <input type="text" name="company" required placeholder="Your company" value={form.company} onChange={set} className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label block mb-3">Email</label>
                      <input type="email" name="email" required placeholder="you@company.com" value={form.email} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="label block mb-3">Phone</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set} className="field" />
                    </div>
                  </div>

                  <div>
                    <label className="label block mb-3">Current Bottleneck</label>
                    <select name="bottleneck" required value={form.bottleneck} onChange={set} className="field">
                      <option value="" disabled>Select your primary challenge</option>
                      {bottlenecks.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  {errMsg && <p className="text-red-400/70 text-[13px]">{errMsg}</p>}

                  <button type="submit" disabled={status === "loading"}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? "Submitting..." : "Request Strategy Call"}
                    {status !== "loading" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
              <div className="card-cinema p-7 space-y-6">
                {[
                  { label: "What to expect", text: "A focused 30-minute conversation. We'll identify your exact constraint and show you what a system-driven solution looks like." },
                  { label: "No pitch", text: "This is a diagnostic session, not a sales call. We'll give you clarity whether we work together or not." },
                  { label: "Response time", text: "We review every submission personally and respond within 24 hours." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="label-v mb-2">{item.label}</p>
                    <p className="body-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="card-cinema p-7">
                <p className="label mb-5">What happens next</p>
                <ol className="space-y-4">
                  {["We review your submission", "We prepare a brief assessment", "We schedule a 30-minute call", "You leave with a clear diagnosis"].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mono flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="body-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-cinema p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse flex-shrink-0" />
                <p className="text-[13px] text-[#7B7D8E]">We respond within 24 hours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
