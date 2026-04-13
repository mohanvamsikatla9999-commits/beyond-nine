"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const problems = [
  "Not getting enough leads",
  "Leads not replying or converting",
  "Too much manual follow-up work",
  "No system to track leads",
  "Slow response time to inquiries",
  "Website not converting visitors",
  "Need a landing page or funnel",
  "Something else",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", problem: "" });
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
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          bizType: "N/A",
          bizSize: "N/A",
          challenge: form.problem,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[68px]">
      {/* Header */}
      <section className="section-sm border-b border-[#E8E8E6] bg-[#F7F7F5]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
            <div className="o-line mb-5" />
            <p className="label-o mb-3">Free Strategy Call</p>
            <h1 className="d1 mb-5">
              Let's fix your
              <br />
              <span className="text-[#FF6A00]">lead system.</span>
            </h1>
            <p className="body-lg">
              Fill in the form below. We'll review your business and come back with a clear plan — completely free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              {status === "success" ? (
                <div className="card p-12 text-center border-[#FF6A00]/20 bg-[#FF6A00]/3">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF6A00] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="d4 mb-3">Got it. We'll be in touch.</h2>
                  <p className="body max-w-sm mx-auto">
                    We've received your details and will respond within 24 hours with a personalised plan for your business.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="card p-8 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label block mb-2.5">Name *</label>
                      <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="label block mb-2.5">Business Name *</label>
                      <input type="text" name="business" required placeholder="Your business" value={form.business} onChange={set} className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label block mb-2.5">Email *</label>
                      <input type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="label block mb-2.5">Phone *</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set} className="field" />
                    </div>
                  </div>

                  <div>
                    <label className="label block mb-2.5">What problem are you facing? *</label>
                    <select name="problem" required value={form.problem} onChange={set} className="field">
                      <option value="" disabled>Select your biggest challenge</option>
                      {problems.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  {errMsg && <p className="text-red-500 text-[13px]">{errMsg}</p>}

                  <button type="submit" disabled={status === "loading"}
                    className="btn-orange w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? "Submitting..." : "Book Strategy Call"}
                    {status !== "loading" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>

                  <p className="text-center text-[12px] text-[#D4D4D4]">No spam. No pressure. We respond within 24 hours.</p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
              <div className="card p-7 space-y-5">
                {[
                  { title: "Free. No obligation.", body: "The strategy call costs nothing. We'll give you honest advice whether you work with us or not." },
                  { title: "We respond within 24 hours.", body: "We review every submission personally and get back to you fast." },
                  { title: "No pitch. Just clarity.", body: "We'll look at your business and tell you exactly what to fix — no sales pressure." },
                ].map((t) => (
                  <div key={t.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#FF6A00] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0B0B0C] font-semibold text-[13.5px] mb-1">{t.title}</p>
                      <p className="body-sm">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-7">
                <p className="label mb-4">What happens next</p>
                <ol className="space-y-3">
                  {["You fill in the form", "We review your business", "We send you a free audit", "We hop on a quick call"].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="num flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="body-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-off p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-[13px] text-[#6B6B6B]">We respond within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
