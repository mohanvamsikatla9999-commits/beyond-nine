"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const cats = ["All", "AI & Automation", "AI Voice", "Web", "Audit & Strategy"] as const;
type Cat = typeof cats[number];

const solutions = [
  { cat: "AI & Automation", name: "WhatsApp Business Automation", desc: "End-to-end automated WhatsApp interactions." },
  { cat: "AI & Automation", name: "AI Lead Qualification", desc: "Automatic scoring and filtering for every lead." },
  { cat: "AI & Automation", name: "Appointment Booking Automation", desc: "Zero-touch scheduling and reminders." },
  { cat: "AI & Automation", name: "Follow-up Sequence Automation", desc: "Multi-channel automated engagement sequences." },
  { cat: "AI & Automation", name: "Cart Abandonment Recovery", desc: "Automated recovery sequences for lost sales." },
  { cat: "AI & Automation", name: "Invoice & Payment Reminder", desc: "Hands-free payment collection systems." },
  { cat: "AI & Automation", name: "Internal Workflow Automation", desc: "Seamless data bridging across your daily tools." },
  { cat: "AI & Automation", name: "Custom AI & Automation", desc: "Bespoke systems engineered perfectly for your specific bottleneck." },
  { cat: "AI Voice", name: "Inbound AI Voice Agent", desc: "24/7 intelligent answering and lead routing." },
  { cat: "AI Voice", name: "Outbound AI Voice Agent", desc: "Scalable proactive calling and engagement." },
  { cat: "AI Voice", name: "Custom Voice Agent", desc: "Complex voice logic and deep system integrations." },
  { cat: "Web", name: "Business Website", desc: "Professional, conversion-focused online presence." },
  { cat: "Web", name: "Landing Page", desc: "High-velocity standalone pages for campaigns." },
  { cat: "Web", name: "Website Redesign", desc: "Total overhaul of speed, structure, and conversion flow." },
  { cat: "Web", name: "Website + Lead Pipeline", desc: "High-converting site fully wired into automated CRM follow-ups." },
  { cat: "Web", name: "E-commerce Store", desc: "Optimized storefront with integrated recovery systems." },
  { cat: "Web", name: "Custom Web Solution", desc: "Tailored portals, dashboards, and booking platforms." },
  { cat: "Audit & Strategy", name: "Business Automation Audit", desc: "Comprehensive mapping of operational leaks and ROI fixes." },
  { cat: "Audit & Strategy", name: "Conversion & Website Audit", desc: "Deep structural analysis of digital friction points." },
];

export default function SolutionsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? solutions : solutions.filter((s) => s.cat === active);

  return (
    <div className="bg-bg min-h-screen pt-[66px]">
      {/* Header */}
      <section className="relative py-20 grid-bg overflow-hidden">
        <div className="glow w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-violet-600/8" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <p className="eyebrow-accent mb-5">Solutions</p>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black tracking-[-0.03em] text-white leading-[1.04] mb-6 max-w-3xl">
              Drop-in solutions for<br /><span className="gt">immediate ROI.</span>
            </h1>
            <p className="text-[16px] text-[#8b8fa8] max-w-xl leading-relaxed mb-8">
              19 standalone solutions. Each one targets one specific problem and fixes it completely.
            </p>
            <Link href="/contact" className="btn-p">Book Free Audit</Link>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="border-b border-white/[0.06] bg-surface/40 sticky top-[66px] z-40">
        <div className="wrap py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 ${
                active === c
                  ? "bg-indigo-600 text-white"
                  : "text-[#8b8fa8] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <motion.div key={s.name} {...inUp(i * 0.04)} className="card p-6 flex flex-col">
                <span className="tag mb-4 w-fit">{s.cat}</span>
                <h3 className="text-white font-semibold text-[15px] mb-2">{s.name}</h3>
                <p className="text-[13px] text-[#8b8fa8] leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5">
                  <Link href="/contact" className="text-[12px] text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Get Started →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[11px] text-[#3d4060] mt-8">
            All fees cover build and management. Platforms (Meta API, hosting, voice infra) billed separately at cost. Full estimate provided before any project starts.
          </p>
        </div>
      </section>

      {/* Revenue systems upsell */}
      <section className="py-16 border-t border-white/[0.06] bg-surface/30">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...inUp()}>
            <p className="eyebrow mb-4">Revenue Systems</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white tracking-[-0.02em] mb-4">
              Need a complete transformation?
            </h2>
            <p className="text-[14px] text-[#8b8fa8] mb-8 leading-relaxed">
              Stop stitching tools together. We offer fully integrated, end-to-end systems that eliminate operational bottlenecks and scale seamlessly.
            </p>
            <Link href="/revenue-systems" className="btn-s">Explore Revenue Systems →</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="wrap max-w-3xl text-center">
          <motion.div {...inUp()}>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.025em] text-white mb-5">
              Your revenue leak has a fix.<br /><span className="gt">Let's find it.</span>
            </h2>
            <p className="text-[14px] text-[#8b8fa8] mb-8 max-w-lg mx-auto">
              Book a free 30-minute strategy call. We'll show you exactly where you can automate tasks and capture more revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-p">Book Free Audit →</Link>
              <Link href="/revenue-systems" className="btn-s">Explore the Systems →</Link>
            </div>
            <p className="text-[11px] text-[#3d4060] mt-5">No obligation. No pitch. Just clarity.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
