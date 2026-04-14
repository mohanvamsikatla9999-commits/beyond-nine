"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import TiltCard from "@/components/TiltCard";

const up = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});
const iv = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
});

function ParallaxEl({ children, speed = 0.12, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 80}px`, `${speed * 80}px`]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const services = [
  {
    n: "01",
    name: "Lead Capture System",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    problem: "Leads are scattered or missed",
    solution: "We collect all leads into one organized system",
    result: "No missed opportunities",
  },
  {
    n: "02",
    name: "Automated Response",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    problem: "Slow or no replies lose customers",
    solution: "Instant WhatsApp and email automation",
    result: "Respond in seconds, 24/7",
  },
  {
    n: "03",
    name: "Follow-Up System",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    problem: "Leads go cold without consistent follow-up",
    solution: "Automated reminders and nurturing sequences",
    result: "More conversions, less effort",
  },
  {
    n: "04",
    name: "Conversion System",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    problem: "Visitors don't convert into customers",
    solution: "Landing pages and booking systems that convert",
    result: "More sales from same traffic",
  },
];

const steps = [
  { n: "01", title: "Understand", body: "We learn your business, your leads, and exactly where you're losing customers." },
  { n: "02", title: "Build", body: "We design and configure your automation system — fast, clean, no complexity." },
  { n: "03", title: "Launch", body: "Live in 5–7 days. Results visible in the first week." },
  { n: "04", title: "Optimize", body: "We monitor performance and continuously improve every component." },
];

const results = [
  { big: "< 60s", label: "Response time", sub: "Every lead, every time" },
  { big: "3x", label: "More conversions", sub: "Systematic follow-up" },
  { big: "20+", label: "Hours saved weekly", sub: "Automation handles it" },
  { big: "24/7", label: "System uptime", sub: "Works while you sleep" },
];

export default function HomePage() {
  return (
    <div className="bg-w overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-[68px] overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(255,106,0,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="orb w-[600px] h-[600px] top-[-150px] right-[-100px] bg-[rgba(255,106,0,0.06)]" />
        <div className="orb w-[350px] h-[350px] bottom-[-50px] left-[-80px] bg-[rgba(255,179,71,0.05)]" />

        <div className="wrap relative z-10 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div {...up(0)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(255,106,0,0.08)] border border-[rgba(255,106,0,0.2)] mb-9">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="t-eye">AI-Powered Growth Systems</span>
              </motion.div>

              <motion.h1 {...up(0.07)} className="t-hero text-[#0A0A0B] mb-7">
                Your leads are
                <br />
                <span className="gt">leaking.</span>
                <br />
                We fix the system.
              </motion.h1>

              <motion.p {...up(0.15)} className="t-lead max-w-[480px] mb-11">
                Beyond Nine builds automation systems that capture, respond, and convert your leads — without manual work.
              </motion.p>

              <motion.div {...up(0.22)} className="flex flex-wrap gap-4">
                <BookButton label="Fix My Lead System" className="text-[15px] py-4 px-9" />
                <Link href="/how-it-works" className="btn-ghost text-[15px] py-4 px-9">See How It Works</Link>
              </motion.div>

              <motion.p {...up(0.3)} className="text-[12px] text-[#9A9A9C] mt-5">
                Free 30-minute call. No obligation. Response within 24 hours.
              </motion.p>
            </div>

            {/* Right — live dashboard visual */}
            <motion.div {...up(0.12)} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-[-20px] bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(255,106,0,0.1),transparent)] rounded-3xl" />

                <TiltCard intensity={5} className="relative z-10">
                  <div className="card shadow-[0_24px_80px_rgba(0,0,0,0.1)] p-7">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="t-eye-m mb-0.5">Live System</p>
                        <p className="text-[15px] font-bold text-[#0A0A0B]">BeyondNine Dashboard</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-green-700">Running</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { v: "24", l: "Leads Today" },
                        { v: "< 60s", l: "Response" },
                        { v: "34%", l: "Conversion" },
                      ].map((m) => (
                        <div key={m.l} className="bg-[#F8F8F6] rounded-xl p-3.5 text-center">
                          <p className="text-[19px] font-black text-[#FF6A00] leading-none">{m.v}</p>
                          <p className="text-[10px] text-[#9A9A9C] mt-1">{m.l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Feed */}
                    <div className="space-y-0">
                      {[
                        { a: "New lead captured from website", t: "2s ago", c: "#22c55e" },
                        { a: "WhatsApp reply sent automatically", t: "2s ago", c: "#FF6A00" },
                        { a: "Follow-up sequence triggered", t: "8s ago", c: "#3b82f6" },
                        { a: "Appointment booked", t: "1m ago", c: "#22c55e" },
                        { a: "CRM updated automatically", t: "2m ago", c: "#8b5cf6" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-[#F0F0EE] last:border-0">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.c }} />
                            <span className="text-[12.5px] font-medium text-[#0A0A0B]">{a.a}</span>
                          </div>
                          <span className="text-[11px] text-[#9A9A9C] ml-3 flex-shrink-0">{a.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                {/* Floating badges */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-8 bg-white rounded-2xl border border-[#E3E3E0] shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(255,106,0,0.1)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9A9A9C]">This week</p>
                    <p className="text-[13px] font-bold text-[#0A0A0B]">+3x more conversions</p>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute -top-5 -right-5 bg-[#FF6A00] rounded-2xl shadow-[0_8px_32px_rgba(255,106,0,0.35)] px-4 py-3 z-20">
                  <p className="text-[10px] text-white/70">Avg response</p>
                  <p className="text-[15px] font-black text-white">Under 60s</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-[#E3E3E0] bg-[#F8F8F6]">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E3E3E0]">
            {[
              { v: "78%", l: "Buy from first responder" },
              { v: "5x", l: "More conversions automated" },
              { v: "20+", l: "Hours saved per week" },
              { v: "< 60s", l: "Average response time" },
            ].map((s, i) => (
              <motion.div key={s.l} {...iv(i * 0.06)} className="bg-[#F8F8F6] px-6 py-8 text-center">
                <p className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-black text-[#FF6A00] leading-none mb-2">{s.v}</p>
                <p className="text-[12px] text-[#9A9A9C] leading-snug">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="sec border-b border-[#E3E3E0] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-[-100px] bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <motion.div {...iv()} className="text-center mb-16">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="t-eye mb-3">The Problem</p>
            <h2 className="t-h2">Where most businesses<br /><span className="gt">lose customers.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "No response", body: "Leads come in but nobody replies in time. The opportunity is gone." },
              { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Inconsistent follow-up", body: "Manual follow-up is forgotten. Leads go cold and buy elsewhere." },
              { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>, title: "Interest fades", body: "Without nurturing, customers lose interest and move on." },
              { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Revenue lost silently", body: "You never know how many customers you've lost. It just happens." },
            ].map((p, i) => (
              <motion.div key={p.title} {...iv(i * 0.09)}>
                <TiltCard intensity={4} className="card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(255,106,0,0.08)] flex items-center justify-center text-[#FF6A00] mb-5">
                    {p.icon}
                  </div>
                  <h3 className="t-h4 mb-2">{p.title}</h3>
                  <p className="t-sm">{p.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLARITY ── */}
      <section className="sec border-b border-[#E3E3E0] bg-[#F8F8F6] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] bottom-0 left-0 bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...iv()}>
              <div className="o-bar mb-5" />
              <p className="t-eye mb-3">What We Do</p>
              <h2 className="t-h2 mb-6">
                Simple systems.
                <br />
                <span className="gt">Real results.</span>
              </h2>
              <p className="t-lead max-w-md mb-8">
                We build automation systems that fix your lead process — so you stop losing customers and start converting more.
              </p>
              <BookButton label="Fix My Lead System" className="text-[14px] py-3.5 px-7" />
            </motion.div>

            <div className="space-y-3">
              {[
                { n: "01", t: "Capture every lead", b: "From website, ads, WhatsApp, social — all in one place." },
                { n: "02", t: "Respond instantly", b: "Automated replies within 60 seconds, 24/7." },
                { n: "03", t: "Follow up automatically", b: "Multi-step sequences that keep leads warm." },
                { n: "04", t: "Convert more customers", b: "Landing pages and booking systems that close." },
              ].map((item, i) => (
                <motion.div key={item.n} {...iv(i * 0.08)}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E3E3E0] group hover:border-[rgba(255,106,0,0.3)] hover:shadow-[0_4px_24px_rgba(255,106,0,0.07)] transition-all duration-300">
                  <div className="sn w-9 h-9 rounded-xl text-[12px]">{item.n}</div>
                  <div>
                    <p className="font-semibold text-[#0A0A0B] text-[14.5px]">{item.t}</p>
                    <p className="t-sm mt-0.5">{item.b}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec border-b border-[#E3E3E0] relative overflow-hidden">
        <div className="orb w-[600px] h-[500px] top-1/2 right-[-150px] -translate-y-1/2 bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <motion.div {...iv()} className="text-center mb-16">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="t-eye mb-3">Core Solutions</p>
            <h2 className="t-h2">Four systems.<br /><span className="gt">One goal: more customers.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.09)}>
                <TiltCard intensity={5} className="card-service p-8 h-full">
                  {/* Card header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(255,106,0,0.08)] flex items-center justify-center text-[#FF6A00] flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="t-eye-m mb-1">{s.n}</p>
                      <h3 className="t-h4">{s.name}</h3>
                    </div>
                  </div>

                  {/* Problem → Solution */}
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3 p-3.5 rounded-xl bg-[#F8F8F6]">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-red-400 w-14 flex-shrink-0 mt-0.5">Problem</span>
                      <p className="t-sm">{s.problem}</p>
                    </div>
                    <div className="flex gap-3 p-3.5 rounded-xl bg-[rgba(255,106,0,0.05)]">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] w-14 flex-shrink-0 mt-0.5">Fix</span>
                      <p className="t-sm">{s.solution}</p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-[#E3E3E0]">
                    <div className="ck">
                      <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[13px] font-bold text-[#FF6A00]">{s.result}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...iv(0.3)} className="text-center mt-8">
            <Link href="/services" className="btn-ghost">View Detailed Services <Arrow /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sec border-b border-[#E3E3E0] bg-[#F8F8F6]">
        <div className="wrap">
          <motion.div {...iv()} className="text-center mb-16">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="t-eye mb-3">How We Work</p>
            <h2 className="t-h2">Live in days,<br /><span className="gt">not months.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-[24px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(255,106,0,0.25)] to-transparent" />
            {steps.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.09)}>
                <TiltCard intensity={4} className="card bg-white p-7 h-full">
                  <div className="sn mb-5">{s.n}</div>
                  <h3 className="t-h4 mb-3">{s.title}</h3>
                  <p className="t-sm">{s.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="sec border-b border-[#E3E3E0] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 left-0 bg-[rgba(255,106,0,0.05)]" />
        <div className="wrap relative z-10">
          <motion.div {...iv()} className="mb-16">
            <div className="o-bar mb-5" />
            <p className="t-eye mb-3">What Changes</p>
            <h2 className="t-h2 max-w-xl">The impact of getting<br /><span className="gt">this right.</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {results.map((r, i) => (
              <motion.div key={r.label} {...iv(i * 0.08)}>
                <TiltCard intensity={4} className="card p-7 text-center h-full">
                  <p className="text-[clamp(2rem,4vw,3rem)] font-black text-[#FF6A00] leading-none mb-2">{r.big}</p>
                  <p className="font-bold text-[#0A0A0B] text-[14px] mb-1">{r.label}</p>
                  <p className="t-sm text-[12px]">{r.sub}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sec bg-[#0A0A0B] relative overflow-hidden">
        <div className="orb w-[700px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,106,0,0.11)]" />
        <div className="orb w-[300px] h-[300px] top-0 right-0 bg-[rgba(255,179,71,0.06)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...iv()}>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.25)] mb-8">The Decision</p>
            <h2 className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-black text-white leading-[1.02] tracking-[-0.04em] mb-8">
              Your business doesn't
              <br />
              need more effort.
              <br />
              <span className="gt-dk">It needs a better system.</span>
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.45)] mb-12 max-w-lg mx-auto leading-relaxed">
              One free call. We'll identify exactly what's holding your growth back and show you what to fix first.
            </p>
            <BookButton label="Fix My Lead System" variant="inverted" className="text-[15px] py-4 px-10" />
            <p className="text-[12px] text-[rgba(255,255,255,0.2)] mt-6">Free consultation. No pressure. Response within 24 hours.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
