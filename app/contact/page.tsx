"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BookButton from "@/components/BookButton";

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

function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const init = () => {
      const win = window as any;
      if (!win.Calendly || !ref.current) return;
      ref.current.innerHTML = "";
      win.Calendly.initInlineWidget({
        url: "https://calendly.com/mohanvamsikatla9999/30min?hide_gdpr_banner=1&primary_color=ff6a00",
        parentElement: ref.current,
      });
    };
    const existing = document.querySelector('script[src*="calendly"]');
    if (existing) {
      const win = window as any;
      if (win.Calendly) { init(); } else { existing.addEventListener("load", init); }
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = init;
    document.head.appendChild(script);
  }, []);
  return <div ref={ref} className="w-full" style={{ minHeight: "700px" }} />;
}

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
        body: JSON.stringify({ name: form.name, business: form.business, email: form.email, phone: form.phone, bizType: "N/A", bizSize: "N/A", challenge: form.problem }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-w min-h-screen pt-[68px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E3E3E0] bg-[#F8F8F6] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[rgba(255,106,0,0.07)]" />
        <div className="wrap relative z-10 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-bar mb-5" />
            <p className="t-eye mb-3">Free Strategy Call</p>
            <h1 className="t-hero mb-5">
              Let's fix your
              <br />
              <span className="gt">lead system.</span>
            </h1>
            <p className="t-lead">Fill in the form. We'll review your business and come back with a clear plan — completely free.</p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="sec">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              {status === "success" ? (
                <div className="card p-14 text-center border-[rgba(255,106,0,0.2)] bg-[rgba(255,106,0,0.03)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF6A00] flex items-center justify-center mx-auto mb-6 shadow-[0_6px_24px_rgba(255,106,0,0.35)]">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="t-h3 mb-3">Got it. We'll be in touch.</h2>
                  <p className="t-body max-w-sm mx-auto">We've received your details and will respond within 24 hours with a personalised plan.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="card p-8 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="t-eye-m block mb-2.5">Name *</label>
                      <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="t-eye-m block mb-2.5">Business Name *</label>
                      <input type="text" name="business" required placeholder="Your business" value={form.business} onChange={set} className="field" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="t-eye-m block mb-2.5">Email *</label>
                      <input type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={set} className="field" />
                    </div>
                    <div>
                      <label className="t-eye-m block mb-2.5">Phone *</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set} className="field" />
                    </div>
                  </div>
                  <div>
                    <label className="t-eye-m block mb-2.5">What problem are you facing? *</label>
                    <select name="problem" required value={form.problem} onChange={set} className="field">
                      <option value="" disabled>Select your biggest challenge</option>
                      {problems.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  {errMsg && <p className="text-red-500 text-[13px]">{errMsg}</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="btn-or w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? "Submitting..." : "Book Strategy Call"}
                    {status !== "loading" && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>}
                  </button>
                  <p className="text-center text-[12px] text-[#9A9A9C]">No spam. No pressure. We respond within 24 hours.</p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
              <div className="card p-7 space-y-5">
                {[
                  { t: "Free. No obligation.", b: "The strategy call costs nothing. Honest advice whether you work with us or not." },
                  { t: "Response within 24 hours.", b: "We review every submission personally and get back to you fast." },
                  { t: "No pitch. Just clarity.", b: "We'll tell you exactly what to fix — no sales pressure." },
                ].map((item) => (
                  <div key={item.t} className="flex gap-3">
                    <div className="ck mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0A0A0B] font-semibold text-[13.5px] mb-1">{item.t}</p>
                      <p className="t-sm">{item.b}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-7">
                <p className="t-eye-m mb-5">What happens next</p>
                <ol className="space-y-3.5">
                  {["You fill in the form", "We review your business", "We send you a free audit", "We hop on a quick call"].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="sn w-6 h-6 rounded-lg text-[11px] flex-shrink-0">{i + 1}</div>
                      <span className="t-sm mt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-off p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-[13px] text-[#525254]">We respond within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inline Calendly */}
      <section className="sec border-t border-[#E3E3E0] bg-[#F8F8F6]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-10">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="t-eye mb-3">Or Book Directly</p>
            <h2 className="t-h2 mb-3">Book Your Strategy Call</h2>
            <p className="t-lead max-w-lg mx-auto">Choose a time that works for you. 30 minutes. Free. No obligation.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E3E3E0] shadow-[0_4px_48px_rgba(0,0,0,0.07)] overflow-hidden">
              <CalendlyInline />
            </div>
            <p className="text-center text-[12px] text-[#9A9A9C] mt-4">Powered by Calendly · 30-minute free strategy call · No obligation</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
