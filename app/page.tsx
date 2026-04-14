"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import TiltCard from "@/components/TiltCard";

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
});
const iv = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] },
});

/* Parallax wrapper */
function Parallax({ children, speed = 0.15, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

const services = [
  {
    n: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87V6a1 1 0 00-1-1H4a1 1 0 00-1 1v2.87a1 1 0 00.447.861L8 12m7-2v10M8 10v10m0 0h8" />
      </svg>
    ),
    name: "Lead Capture System",
    problem: "Leads are missed or scattered across channels.",
    solution: "We collect every lead into one organized system — automatically.",
    result: "No missed opportunities",
    accent: "#FF6A00",
  },
  {
    n: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    name: "Automated Response",
    problem: "Slow replies lose customers to faster competitors.",
    solution: "Instant WhatsApp and email automation responds in under 60 seconds.",
    result: "Respond in seconds, 24/7",
    accent: "#FF6A00",
  },
  {
    n: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    name: "Follow-Up System",
    problem: "Leads go cold when follow-up is manual and inconsistent.",
    solution: "Automated multi-step sequences keep every lead warm until they convert.",
    result: "More conversions, less effort",
    accent: "#FF6A00",
  },
  {
    n: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    name: "Conversion System",
    problem: "Traffic and leads exist but visitors don't convert.",
    solution: "Landing pages and booking systems built to turn visitors into customers.",
    result: "More sales from same traffic",
    accent: "#FF6A00",
  },
];

const steps = [
  { n: "01", title: "Understand", body: "We learn your business, your leads, and where you're losing customers." },
  { n: "02", title: "Build", body: "We design and set up your automation system — fast, clean, no complexity." },
  { n: "03", title: "Launch", body: "Live in 5–7 days. You start seeing results in the first week." },
  { n: "04", title: "Optimize", body: "We monitor and improve performance continuously." },
];

const results = [
  { metric: "Faster responses", detail: "Under 60 seconds, every time" },
  { metric: "More conversions", detail: "Systematic follow-up that works" },
  { metric: "Less manual work", detail: "20+ hours saved per week" },
  { metric: "Better experience", detail: "Customers feel valued instantly" },
];

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-[66px] overflow-hidden">
        {/* Background glow */}
        <div className="orb w-[700px] h-[700px] top-[-200px] right-[-100px] bg-[rgba(255,106,0,0.07)]" />
        <div className="orb w-[400px] h-[400px] bottom-0 left-[-100px] bg-[rgba(255,179,71,0.06)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="wrap relative z-10 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div {...up(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,106,0,0.08)] border border-[rgba(255,106,0,0.2)] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="eyebrow">AI-Powered Growth Systems</span>
              </motion.div>

              <motion.h1 {...up(0.07)} className="h1 text-[#0B0B0C] mb-6">
                Turn your leads into
                <br />
                <span className="gt">customers —</span>
                <br />
                automatically.
              </motion.h1>

              <motion.p {...up(0.15)} className="lead max-w-lg mb-10">
                We build AI-powered systems that capture, respond, and convert your leads without manual work.
              </motion.p>

              <motion.div {...up(0.22)} className="flex flex-wrap gap-4">
                <BookButton label="Book Strategy Call" className="text-[15px] py-4 px-8" />
                <Link href="/how-it-works" className="btn-line text-[15px] py-4 px-8">See How It Works</Link>
              </motion.div>

              <motion.p {...up(0.3)} className="text-[12px] text-[#999] mt-5">
                Free 30-minute call. No obligation. Response within 24 hours.
              </motion.p>
            </div>

            {/* Right — 3D visual */}
            <motion.div {...up(0.15)} className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,106,0,0.12),transparent)] rounded-3xl" />

                <TiltCard className="relative z-10" intensity={6}>
                  <div className="bg-white rounded-2xl border border-[#E4E4E2] shadow-[0_20px_80px_rgba(0,0,0,0.1)] p-7">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="eyebrow-m mb-1">Live System Dashboard</p>
                        <p className="text-[15px] font-bold text-[#0B0B0C]">Beyond Nine</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-green-700">Active</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Leads Today", val: "24", up: true },
                        { label: "Response Time", val: "< 60s", up: true },
                        { label: "Conversion", val: "34%", up: true },
                      ].map((m) => (
                        <div key={m.label} className="bg-[#F9F9F7] rounded-xl p-3 text-center">
                          <p className="text-[18px] font-black text-[#FF6A00]">{m.val}</p>
                          <p className="text-[10px] text-[#999] mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Activity feed */}
                    <div className="space-y-2.5">
                      {[
                        { action: "New lead captured", time: "2s ago", color: "#22c55e" },
                        { action: "Auto-reply sent via WhatsApp", time: "2s ago", color: "#FF6A00" },
                        { action: "Follow-up sequence started", time: "5s ago", color: "#3b82f6" },
                        { action: "Booking confirmed", time: "1m ago", color: "#22c55e" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-2.5 border-b border-[#F0F0EE] last:border-0">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
                            <span className="text-[12.5px] font-medium text-[#0B0B0C]">{a.action}</span>
                          </div>
                          <span className="text-[11px] text-[#999]">{a.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-6 bg-white rounded-xl border border-[#E4E4E2] shadow-lg px-4 py-3 flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(255,106,0,0.1)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#999]">This week</p>
                    <p className="text-[13px] font-bold text-[#0B0B0C]">+3x more conversions</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-[#FF6A00] rounded-xl shadow-lg px-4 py-3 z-20"
                >
                  <p className="text-[11px] text-white/70">Response time</p>
                  <p className="text-[15px] font-black text-white">Under 60s</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-[#E4E4E2] bg-[#F9F9F7]">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E4E4E2]">
            {[
              { val: "78%", label: "Buy from first responder" },
              { val: "5x", label: "More conversions automated" },
              { val: "20+", label: "Hours saved per week" },
              { val: "< 60s", label: "Average response time" },
            ].map((s, i) => (
              <motion.div key={s.label} {...iv(i * 0.06)} className="bg-[#F9F9F7] px-6 py-7 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#FF6A00] leading-none mb-1.5">{s.val}</p>
                <p className="text-[12px] text-[#999] leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="sec border-b border-[#E4E4E2] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...iv()}>
              <div className="o-bar mb-5" />
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="h2 mb-6">
                We fix 3 problems
                <br />
                <span className="gt">costing you customers.</span>
              </h2>
              <p className="lead max-w-md">
                Most businesses lose revenue not because of bad products — but because their lead process is broken.
              </p>
            </motion.div>

            <div className="space-y-3">
              {[
                { n: "01", title: "Leads not captured properly", body: "Inquiries come from multiple places and get lost. Every missed lead is lost revenue." },
                { n: "02", title: "Follow-ups are slow or missing", body: "Manual follow-up is inconsistent. Leads go cold before you get back to them." },
                { n: "03", title: "Conversions are low", body: "Traffic and leads exist but they're not turning into paying customers." },
              ].map((p, i) => (
                <motion.div key={p.n} {...iv(i * 0.09)}
                  className="flex gap-4 p-5 rounded-2xl border border-[#E4E4E2] bg-white group hover:border-[rgba(255,106,0,0.3)] hover:shadow-[0_4px_24px_rgba(255,106,0,0.07)] transition-all duration-300">
                  <div className="step-n w-9 h-9 rounded-xl text-[12px]">{p.n}</div>
                  <div>
                    <p className="font-semibold text-[#0B0B0C] text-[14.5px] mb-1">{p.title}</p>
                    <p className="sm">{p.body}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div {...iv(0.3)} className="p-5 rounded-2xl bg-[rgba(255,106,0,0.06)] border border-[rgba(255,106,0,0.15)]">
                <p className="eyebrow mb-1.5">Our Solution</p>
                <p className="font-semibold text-[#0B0B0C] text-[14.5px]">We solve all three using automation systems built specifically for your business.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec border-b border-[#E4E4E2] bg-[#F9F9F7] relative overflow-hidden">
        <div className="orb w-[600px] h-[400px] bottom-0 left-0 bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <motion.div {...iv()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">Core Solutions</p>
            <h2 className="h2">Four systems. One goal:<br /><span className="gt">more customers.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.09)}>
                <TiltCard className="card-glow p-8 h-full bg-white" intensity={5}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(255,106,0,0.08)] flex items-center justify-center text-[#FF6A00] flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="eyebrow-m mb-1">{s.n}</p>
                      <h3 className="h4">{s.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div className="flex gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-red-400 w-16 flex-shrink-0 mt-0.5">Problem</span>
                      <p className="sm">{s.problem}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#FF6A00] w-16 flex-shrink-0 mt-0.5">Fix</span>
                      <p className="sm">{s.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-[#E4E4E2] pt-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-[13px] font-bold text-[#FF6A00]">{s.result}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...iv(0.3)} className="text-center mt-8">
            <Link href="/services" className="btn-line">View Detailed Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sec border-b border-[#E4E4E2]">
        <div className="wrap">
          <motion.div {...iv()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">How We Work</p>
            <h2 className="h2">Live in days,<br /><span className="gt">not months.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[23px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(255,106,0,0.2)] to-transparent" />

            {steps.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.09)}>
                <TiltCard className="card bg-white p-7 h-full" intensity={4}>
                  <div className="step-n mb-5">{s.n}</div>
                  <h3 className="h4 mb-3">{s.title}</h3>
                  <p className="sm">{s.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="sec border-b border-[#E4E4E2] bg-[#F9F9F7] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[rgba(255,106,0,0.06)]" />
        <div className="wrap relative z-10">
          <motion.div {...iv()} className="mb-14">
            <div className="o-bar mb-5" />
            <p className="eyebrow mb-3">What Changes</p>
            <h2 className="h2 max-w-xl">The impact of getting<br /><span className="gt">this right.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <motion.div key={r.metric} {...iv(i * 0.08)}>
                <TiltCard className="card bg-white p-8 flex items-center gap-5" intensity={4}>
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A00] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(255,106,0,0.3)]">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="h4 mb-1">{r.metric}</p>
                    <p className="sm">{r.detail}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sec bg-[#0B0B0C] relative overflow-hidden">
        <div className="orb w-[600px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,106,0,0.12)]" />
        <div className="orb w-[300px] h-[300px] top-0 right-0 bg-[rgba(255,179,71,0.06)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...iv()}>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[rgba(255,255,255,0.3)] mb-7">The Bottom Line</p>
            <h2 className="text-[clamp(2rem,5.5vw,4.5rem)] font-black text-white leading-tight tracking-[-0.035em] mb-7">
              Your business doesn't need
              <br />
              more effort.
              <br />
              <span className="gt">It needs a better system.</span>
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.5)] mb-10 max-w-lg mx-auto leading-relaxed">
              One free call. We'll identify exactly what's holding your growth back and show you what to fix first.
            </p>
            <BookButton label="Book Strategy Call" className="text-[15px] py-4 px-10" />
            <p className="text-[12px] text-[rgba(255,255,255,0.2)] mt-5">Free consultation. No pressure. Response within 24 hours.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
