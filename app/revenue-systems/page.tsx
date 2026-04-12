"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const systems = [
  {
    n: "SYSTEM 01",
    name: "Revenue Capture",
    tagline: "Contact, qualify, and book leads in seconds.",
    body: "Every minute matters. This system contacts and follows up with every new inbound lead within 60 seconds, 24/7. It asks the right qualifying questions and books highly interested prospects directly onto your calendar.",
    includes: ["AI Voice Agent (24/7)", "WhatsApp Bot", "Instant CRM Sync", "Automated Follow-ups", "Live Analytics Dashboard"],
    bestFor: "Real Estate, Clinics, Service Businesses",
    flagship: false,
    border: "border-indigo-500/15",
    glow: "rgba(99,102,241,0.05)",
  },
  {
    n: "SYSTEM 02",
    name: "Ops Efficiency",
    tagline: "Eliminate 20–40 hours of manual tasks weekly.",
    body: "We audit your workflows and automate the repetitive tasks — like client onboarding, data entry, and CRM updates — so your team can focus on high-value work.",
    includes: ["Workflow Process Mapping", "3–5 Core Automations", "Custom n8n/Make Logic", "Team Onboarding & Training", "30-Day Check-in"],
    bestFor: "Agencies, Legal, B2B Services",
    flagship: true,
    border: "border-violet-500/20",
    glow: "rgba(124,58,237,0.07)",
  },
  {
    n: "SYSTEM 03",
    name: "Web Capture",
    tagline: "Turn passive website visitors into qualified leads.",
    body: "We replace outdated websites with landing systems built to capture intent. Connect forms directly to WhatsApp and your CRM to drive immediate bookings.",
    includes: ["High-Converting Landing Pages", "Frictionless Lead Capture", "Automated WhatsApp Triggers", "Instant Auto Follow-ups", "Full CRM Integration"],
    bestFor: "Outdated sites, Low-conversion pages",
    flagship: false,
    border: "border-blue-500/15",
    glow: "rgba(59,130,246,0.05)",
  },
];

export default function RevenueSystemsPage() {
  return (
    <div className="bg-bg min-h-screen pt-[66px]">
      {/* Header */}
      <section className="relative py-20 grid-bg overflow-hidden">
        <div className="glow w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-indigo-600/10" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <p className="eyebrow-accent mb-5">Revenue Systems</p>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black tracking-[-0.03em] text-white leading-[1.04] mb-6 max-w-3xl">
              The Big Three.
            </h1>
            <p className="text-[16px] text-[#8b8fa8] max-w-xl leading-relaxed mb-8">
              Three of the most expensive problems in any growing business — each one fixed completely.
            </p>
            <Link href="/contact" className="btn-p">Book Free Audit</Link>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="wrap space-y-6">
          {systems.map((s, i) => (
            <motion.div key={s.n} {...inUp(i * 0.08)}
              className={`card border ${s.border} p-8 md:p-12 relative`}
              style={{ boxShadow: `0 0 80px ${s.glow}` }}>
              {s.flagship && (
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">Flagship</span>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <p className="eyebrow-accent mb-3">{s.n}</p>
                  <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white tracking-[-0.02em] mb-2">{s.name}</h2>
                  <p className="text-[14px] text-indigo-400 font-medium mb-5">{s.tagline}</p>
                  <p className="text-[14px] text-[#8b8fa8] leading-relaxed mb-6">{s.body}</p>
                  <p className="text-[11px] text-[#3d4060]">Best for: {s.bestFor}</p>
                </div>
                <div>
                  <p className="eyebrow mb-5">What's Included</p>
                  <ul className="space-y-3 mb-8">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[13.5px] text-[#8b8fa8]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-p text-[13px] py-2.5 px-5">Get Started →</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Individual solutions upsell */}
      <section className="py-16 border-t border-white/[0.06] bg-surface/30">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...inUp()}>
            <p className="eyebrow mb-4">Individual Solutions</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white tracking-[-0.02em] mb-4">
              Not ready for a full system?
            </h2>
            <p className="text-[14px] text-[#8b8fa8] mb-8 leading-relaxed">
              Don't wait to fix what hurts most. Explore our library of standalone solutions designed to solve specific bottlenecks instantly.
            </p>
            <Link href="/solutions" className="btn-s">Explore Solutions →</Link>
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
              <Link href="/solutions" className="btn-s">Explore the Solutions →</Link>
            </div>
            <p className="text-[11px] text-[#3d4060] mt-5">No obligation. No pitch. Just clarity.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
