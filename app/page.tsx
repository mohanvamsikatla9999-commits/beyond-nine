"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

/* ── reveal helpers ── */
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});
const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── parallax section ── */
function ParallaxOrb({ className }: { className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  return <motion.div ref={ref} style={{ y }} className={`orb ${className}`} />;
}

const problems = [
  { n: "01", title: "Delayed Responses", body: "Leads arrive and wait. Every hour of delay reduces conversion probability by 10x.", accent: "#6C5CE7" },
  { n: "02", title: "Lost Opportunities", body: "Prospects move on silently. No follow-up system means no second chance.", accent: "#00F5D4" },
  { n: "03", title: "Fragmented Tools", body: "Software that doesn't communicate creates invisible gaps in your pipeline.", accent: "#6C5CE7" },
  { n: "04", title: "Manual Overload", body: "Teams spend capacity on repetitive tasks instead of high-value decisions.", accent: "#00F5D4" },
];

const systems = [
  {
    n: "01",
    name: "Intake Architecture",
    body: "Captures and qualifies every inbound signal the moment it arrives. No delays. No missed demand.",
    outcome: "Every lead captured. Every inquiry qualified.",
    accent: "#6C5CE7",
  },
  {
    n: "02",
    name: "Conversion Flow",
    body: "A structured sequence that keeps every prospect engaged from first contact to final decision.",
    outcome: "No opportunity left behind.",
    accent: "#00F5D4",
  },
  {
    n: "03",
    name: "Continuity Engine",
    body: "Removes operational friction and keeps every workflow running without manual intervention.",
    outcome: "Consistent output. Predictable delivery.",
    accent: "#F9C74F",
  },
];

const steps = [
  { n: "01", label: "Diagnose", body: "We map where your business is losing momentum — leads, conversions, operations." },
  { n: "02", label: "Design", body: "We architect a system built around your specific workflows and growth objectives." },
  { n: "03", label: "Deploy", body: "We implement with minimal disruption. Most systems are live within two weeks." },
  { n: "04", label: "Refine", body: "We monitor performance and continuously improve every component." },
];

const results = [
  { metric: "Response cycles", shift: "Hours → Seconds" },
  { metric: "Conversion rates", shift: "Inconsistent → Systematic" },
  { metric: "Operational load", shift: "High → Significantly reduced" },
  { metric: "Client experience", shift: "Reactive → Proactive" },
];

export default function HomePage() {
  return (
    <div className="bg-bg overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center grid-cinema pt-[70px]">
        {/* Orbs */}
        <div className="orb w-[900px] h-[700px] top-[-200px] left-1/2 -translate-x-1/2 bg-[#6C5CE7]/10" />
        <div className="orb w-[500px] h-[500px] top-1/2 left-[-10%] bg-[#00F5D4]/5" />
        <div className="orb w-[400px] h-[400px] bottom-0 right-[-5%] bg-[#6C5CE7]/6" />

        <div className="wrap relative z-10 py-28 w-full">
          <motion.div {...up(0)} className="pill mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
            Intelligent Growth Systems
          </motion.div>

          <motion.h1 {...up(0.08)} className="d1 text-white max-w-5xl mb-8">
            Growth doesn't fail from{" "}
            <span className="gt-v">lack of effort.</span>
            <br />
            <span className="text-[#2E3044]">It fails from broken systems.</span>
          </motion.h1>

          <motion.p {...up(0.18)} className="body text-[17px] max-w-xl mb-12 leading-relaxed">
            Beyond Nine designs intelligent systems that capture, respond, and convert —
            without manual effort.
          </motion.p>

          <motion.div {...up(0.26)} className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/systems" className="btn-ghost">Explore Systems</Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div {...up(0.5)} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="label text-[#2E3044]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[#6C5CE7]/40 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-32 border-t border-white/[0.05] relative">
        <div className="orb w-[600px] h-[400px] top-0 right-0 bg-[#6C5CE7]/5" />
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...inUp()}>
              <div className="aqua-line mb-6" />
              <p className="label-v mb-4">The Problem</p>
              <h2 className="d2 text-white mb-6">
                You're doing the work.
                <br />
                <span className="text-[#2E3044]">The system isn't.</span>
              </h2>
              <p className="body max-w-md">
                Most businesses have the demand. What they lack is the infrastructure to capture and convert it consistently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <motion.div key={p.n} {...inUp(i * 0.1)} className="card-cinema p-6">
                  <span className="mono block mb-3">{p.n}</span>
                  <h3 className="text-white font-semibold text-[15px] mb-2" style={{ color: p.accent === "#00F5D4" ? "#00F5D4" : undefined }}>
                    {p.title}
                  </h3>
                  <p className="body-sm">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SHIFT ─── */}
      <section className="py-32 border-t border-white/[0.05] relative overflow-hidden">
        <div className="orb w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6C5CE7]/8" />
        <div className="wrap relative z-10 text-center">
          <motion.div {...inUp()}>
            <p className="label mb-8">The Diagnosis</p>
            <h2 className="d2 text-white max-w-4xl mx-auto leading-tight">
              You don't have a lead problem.
              <br />
              <span className="gt-v">You have a system problem.</span>
            </h2>
            <p className="body text-[17px] max-w-2xl mx-auto mt-8">
              Disconnected workflows, manual processes, and inconsistent follow-up create invisible revenue leaks. The answer is not more effort — it is better-designed infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SYSTEMS ─── */}
      <section className="py-32 border-t border-white/[0.05] relative">
        <div className="orb w-[500px] h-[500px] bottom-0 left-0 bg-[#00F5D4]/4" />
        <div className="wrap relative z-10">
          <motion.div {...inUp()} className="mb-16">
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">System Architecture</p>
            <h2 className="d2 text-white max-w-2xl">
              Three systems.
              <br />
              <span className="text-[#2E3044]">One operating infrastructure.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {systems.map((s, i) => (
              <motion.div key={s.n} {...inUp(i * 0.12)} className="card-cinema p-8 flex flex-col relative overflow-hidden group">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.accent}10 0%, transparent 70%)` }} />

                <span className="mono block mb-5">{s.n}</span>
                <h3 className="text-white font-bold text-[20px] mb-3 tracking-tight">{s.name}</h3>
                <p className="body-sm flex-1 mb-6">{s.body}</p>
                <div className="border-t border-white/[0.05] pt-5">
                  <p className="text-[12px] font-semibold" style={{ color: s.accent }}>{s.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...inUp(0.3)} className="mt-8">
            <Link href="/systems" className="btn-ghost text-[13px]">
              View full system details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-32 border-t border-white/[0.05] bg-[#0f1016] relative">
        <div className="wrap relative z-10">
          <motion.div {...inUp()} className="text-center mb-16">
            <div className="flex justify-center mb-6"><div className="aqua-line" /></div>
            <p className="label-v mb-4">How We Work</p>
            <h2 className="d2 text-white">
              From first interaction to
              <br />
              <span className="gt-v">fully deployed system.</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#6C5CE7]/20 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <motion.div key={s.n} {...inUp(i * 0.1)} className="card-cinema p-7 relative">
                  <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 flex items-center justify-center mb-5">
                    <span className="mono">{s.n}</span>
                  </div>
                  <h3 className="text-white font-bold text-[17px] mb-3">{s.label}</h3>
                  <p className="body-sm">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-32 border-t border-white/[0.05] relative">
        <div className="orb w-[600px] h-[400px] top-0 right-0 bg-[#00F5D4]/4" />
        <div className="wrap relative z-10">
          <motion.div {...inUp()} className="mb-16">
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">What Changes</p>
            <h2 className="d2 text-white max-w-xl">
              Measurable shifts in how your business operates.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
            {results.map((r, i) => (
              <motion.div key={r.metric} {...inUp(i * 0.08)} className="bg-bg p-10 group">
                <p className="label mb-5">{r.metric}</p>
                <p className="d4 text-white group-hover:gt-v transition-all duration-300">{r.shift}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 border-t border-white/[0.05] relative overflow-hidden">
        <div className="orb w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6C5CE7]/10" />
        <div className="orb w-[300px] h-[300px] top-1/2 left-1/4 -translate-y-1/2 bg-[#00F5D4]/5" />

        <div className="wrap relative z-10 text-center max-w-4xl mx-auto">
          <motion.div {...inUp()}>
            <p className="label mb-8">The Decision</p>
            <h2 className="d2 text-white mb-8 leading-tight">
              If your business depends on constant effort,
              <br />
              <span className="gt-v">it's time to redesign the system.</span>
            </h2>
            <p className="body text-[17px] max-w-lg mx-auto mb-12">
              One conversation. We'll identify exactly where your business is losing momentum and what a system-driven solution looks like.
            </p>
            <Link href="/contact" className="btn-primary text-[15px] py-4 px-10">
              Book Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[12px] text-[#2E3044] mt-6">No pressure. Just clarity.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
