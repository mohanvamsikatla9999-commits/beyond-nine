"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const systems = [
  {
    n: "01",
    name: "Intake Architecture",
    tagline: "Every signal captured. Every lead qualified.",
    problem: "Most businesses lose demand not because it doesn't exist — but because their intake process is slow, manual, or inconsistent. By the time a response goes out, the prospect has moved on.",
    how: [
      "Intelligent intake layer captures leads from all channels simultaneously",
      "Automated qualification logic filters and scores each inquiry",
      "Instant response triggered within seconds of first contact",
      "All leads routed to the correct workflow without manual intervention",
    ],
    after: "Your business responds to every lead within seconds. No manual sorting. No missed inquiries. Every prospect enters a structured process from the moment they engage.",
    accent: "#6C5CE7",
    border: "rgba(108,92,231,0.2)",
    glow: "rgba(108,92,231,0.06)",
  },
  {
    n: "02",
    name: "Conversion Flow",
    tagline: "Structured follow-up. Consistent conversion.",
    problem: "Leads that don't convert immediately are rarely followed up with the right message at the right time. The result is a pipeline that leaks silently — prospects who were interested but never heard back.",
    how: [
      "Multi-channel follow-up sequences triggered by prospect behavior",
      "Personalized messaging based on lead source, intent, and stage",
      "Automated re-engagement for leads that go quiet",
      "Clear handoff points for human involvement when needed",
    ],
    after: "Every lead receives a structured, timely sequence of touchpoints. Conversion rates improve because no prospect is left without a follow-up. The pipeline moves forward on its own.",
    accent: "#00F5D4",
    border: "rgba(0,245,212,0.15)",
    glow: "rgba(0,245,212,0.04)",
  },
  {
    n: "03",
    name: "Continuity Engine",
    tagline: "Remove friction. Scale without adding headcount.",
    problem: "As businesses grow, operational complexity grows with them. Teams spend increasing amounts of time on coordination, reporting, and repetitive tasks — time that should be spent on higher-value work.",
    how: [
      "End-to-end workflow automation across delivery and operations",
      "Tool integrations that eliminate manual data transfer",
      "Automated reporting and performance visibility",
      "Smart task routing that removes coordination overhead",
    ],
    after: "Your team operates with significantly less friction. Output scales without proportional increases in headcount or effort. The business runs more predictably.",
    accent: "#F9C74F",
    border: "rgba(249,199,79,0.15)",
    glow: "rgba(249,199,79,0.04)",
  },
];

export default function SystemsPage() {
  return (
    <div className="bg-bg min-h-screen pt-[70px]">
      {/* Header */}
      <section className="relative py-24 grid-cinema overflow-hidden">
        <div className="orb w-[700px] h-[500px] top-0 left-1/2 -translate-x-1/2 bg-[#6C5CE7]/10" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">System Architecture</p>
            <h1 className="d1 text-white mb-6 max-w-3xl">
              Three systems.
              <br />
              <span className="gt-v">One growth infrastructure.</span>
            </h1>
            <p className="body text-[17px] max-w-xl">
              Each system is designed to solve a specific constraint. Together, they create a self-sustaining operating layer for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap space-y-6">
          {systems.map((s, i) => (
            <motion.div key={s.n} {...inUp(i * 0.08)}
              className="card-cinema p-8 md:p-12 relative overflow-hidden group"
              style={{ borderColor: s.border, boxShadow: `0 0 100px ${s.glow}` }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${s.accent}08 0%, transparent 60%)` }} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <span className="mono block mb-4">{s.n}</span>
                  <h2 className="d3 text-white mb-2">{s.name}</h2>
                  <p className="text-[13px] font-semibold mb-6" style={{ color: s.accent }}>{s.tagline}</p>

                  <div className="mb-6">
                    <p className="label mb-3">The Problem</p>
                    <p className="body-sm">{s.problem}</p>
                  </div>

                  <div className="card-cinema p-5" style={{ borderColor: `${s.accent}20` }}>
                    <p className="label mb-2">After Implementation</p>
                    <p className="text-[13.5px] text-[#F0F0F8] leading-relaxed">{s.after}</p>
                  </div>
                </div>

                <div>
                  <p className="label mb-5">How It Works</p>
                  <ul className="space-y-4">
                    {s.how.map((h, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <span className="mono mt-0.5 flex-shrink-0 text-[10px]">{String(j + 1).padStart(2, "0")}</span>
                        <p className="body-sm">{h}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="wrap max-w-2xl text-center">
          <motion.div {...inUp()}>
            <h2 className="d3 text-white mb-4">Not sure which system you need first?</h2>
            <p className="body mb-8">We'll diagnose your exact constraint and recommend the right starting point.</p>
            <Link href="/contact" className="btn-primary">Request Strategy Call</Link>
            <p className="text-[12px] text-[#2E3044] mt-5">No pressure. Just clarity.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
