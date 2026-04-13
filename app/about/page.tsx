"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const principles = [
  { n: "01", title: "Systems over effort.", body: "Effort is finite. A business built on individual effort has a ceiling. A business built on systems has no ceiling. We design for the latter." },
  { n: "02", title: "Outcomes over activity.", body: "Most businesses are busy. Very few are effective. We don't measure success by how much is happening — we measure it by what's actually moving forward." },
  { n: "03", title: "Precision over volume.", body: "More leads, more content, more tools — volume is the default answer. But volume without precision is noise. We focus on the exact levers that drive revenue." },
  { n: "04", title: "Simplicity over complexity.", body: "We don't add complexity. We remove it. The best system is the one that works reliably — not the one with the most components." },
];

export default function AboutPage() {
  return (
    <div className="bg-bg min-h-screen pt-[70px]">
      {/* Header */}
      <section className="relative py-24 grid-cinema overflow-hidden">
        <div className="orb w-[700px] h-[500px] top-0 left-1/2 -translate-x-1/2 bg-[#6C5CE7]/8" />
        <div className="wrap relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="aqua-line mb-6" />
            <h1 className="d1 text-white mb-6">
              We understand business first.
              <br />
              <span className="gt-v">Technology second.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Core statement */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...inUp()}>
              <p className="label-v mb-5">Our Foundation</p>
              <div className="space-y-5 text-[15px] text-[#7B7D8E] leading-[1.85]">
                <p>Beyond Nine exists to solve a fundamental problem:</p>
                <p className="text-[#F0F0F8] text-[18px] font-medium leading-relaxed">
                  Businesses are working harder instead of building smarter systems.
                </p>
                <p>
                  We kept seeing the same pattern. Capable founders, strong products, real demand — but no system to capture and convert it consistently. Leads were being lost not because of poor marketing, but because the infrastructure to handle them didn't exist.
                </p>
                <p>
                  The answer was never more effort. It was always a better-designed system.
                </p>
                <p className="text-[#F0F0F8] font-medium">
                  We design systems that remove friction and create consistency. The goal is simple: make growth predictable.
                </p>
              </div>
            </motion.div>

            <motion.div {...inUp(0.1)} className="space-y-4">
              <div className="card-cinema p-7">
                <p className="label mb-5">What we are</p>
                <ul className="space-y-3">
                  {[
                    "A system design company, not a marketing agency",
                    "Focused on infrastructure, not tactics",
                    "Outcome-driven, not activity-driven",
                    "Built for businesses serious about scaling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#6C5CE7] mt-2.5 flex-shrink-0" />
                      <span className="body-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-cinema p-7">
                <p className="label mb-5">What we are not</p>
                <ul className="space-y-3">
                  {[
                    "A vendor that disappears after delivery",
                    "A team that adds complexity to solve complexity",
                    "Focused on vanity metrics or surface-level results",
                    "Interested in clients who aren't ready to commit to change",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#2E3044] mt-2.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#2E3044]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 border-t border-white/[0.05] bg-[#0f1016] relative">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[#6C5CE7]/5" />
        <div className="wrap relative z-10">
          <motion.div {...inUp()} className="mb-14">
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">Principles</p>
            <h2 className="d2 text-white max-w-xl">
              How we think about
              <br />
              <span className="gt-v">building systems.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <motion.div key={p.n} {...inUp(i * 0.08)} className="card-cinema p-8 flex gap-6 items-start">
                <span className="mono flex-shrink-0 mt-0.5">{p.n}</span>
                <div>
                  <h3 className="text-white font-bold text-[16px] mb-3">{p.title}</h3>
                  <p className="body-sm">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="wrap max-w-2xl text-center">
          <motion.div {...inUp()}>
            <h2 className="d3 text-white mb-4">Ready to build a business that runs on systems?</h2>
            <p className="body mb-8">Let's start with a conversation about where you are and where you want to go.</p>
            <Link href="/contact" className="btn-primary">Request Strategy Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
