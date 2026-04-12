"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const philosophy = [
  { title: "Outcome-first", body: "Every system we build is measured by one thing — the result it creates for your business." },
  { title: "Business audit always", body: "We understand your workflows, bottlenecks, and opportunities before writing a single line of code." },
  { title: "ROI tracked", body: "Time saved. Revenue captured. Costs cut. We measure what actually moves your business forward." },
];

const whatWeBuild = [
  { name: "Revenue Capture System", desc: "Instant lead response, qualification, and booking — 24/7." },
  { name: "Operations Efficiency System", desc: "Eliminate 20–40 hours of manual work every week." },
  { name: "Digital Salesman", desc: "Websites that convert, wired to automated pipelines." },
];

const industries = ["Real Estate", "Clinics", "Coaching", "D2C", "Legal", "SaaS", "E-commerce"];

export default function AboutPage() {
  return (
    <div className="bg-bg min-h-screen pt-[66px]">
      {/* Header */}
      <section className="relative py-20 grid-bg overflow-hidden">
        <div className="glow w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-indigo-600/8" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black tracking-[-0.03em] text-white leading-[1.04] mb-6">
              We understand business first.<br />
              <span className="gt">Technology second.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...inUp()}>
              <p className="eyebrow-accent mb-5">The BeyondNine Story</p>
              <div className="space-y-5 text-[14.5px] text-[#8b8fa8] leading-[1.8]">
                <p>
                  BeyondNine started from a simple observation: most agencies sell tools, not outcomes. Businesses end up with a stack of software, monthly subscriptions, and no measurable impact on their bottom line.
                </p>
                <p>
                  We decided to build differently. Every project starts with understanding the business — its goals, its bottlenecks, its specific pain points. Then we engineer systems that eliminate those problems permanently.
                </p>
                <p className="text-[#f0f2ff] font-medium">
                  No fluff. No unnecessary complexity. Just working systems that deliver measurable results.
                </p>
                <p>
                  Have a specific problem in mind? Reach out directly — we respond to every message personally.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-p text-[13px] py-2.5 px-5">Get in Touch</Link>
              </div>
            </motion.div>

            <motion.div {...inUp(0.1)} className="space-y-4">
              <div className="card p-7">
                <p className="eyebrow mb-5">Our Philosophy</p>
                <div className="space-y-5">
                  {philosophy.map((p) => (
                    <div key={p.title}>
                      <h3 className="text-white font-semibold text-[14px] mb-1">{p.title}</h3>
                      <p className="text-[13px] text-[#8b8fa8] leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-7">
                <p className="eyebrow mb-5">What We Build</p>
                <div className="space-y-4">
                  {whatWeBuild.map((w) => (
                    <div key={w.name} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-white font-medium text-[13.5px]">{w.name}</p>
                        <p className="text-[12px] text-[#8b8fa8] mt-0.5">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 border-t border-white/[0.06] bg-surface/30">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-8">
            <p className="eyebrow mb-2">Industries We Work With</p>
          </motion.div>
          <motion.div {...inUp(0.05)} className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="card-flat px-5 py-2.5 text-[13px] text-[#8b8fa8] font-medium">{ind}</span>
            ))}
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
              <Link href="/revenue-systems" className="btn-s">Explore the Solutions →</Link>
            </div>
            <p className="text-[11px] text-[#3d4060] mt-5">No obligation. No pitch. Just clarity.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
