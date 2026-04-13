"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BookButton from "@/components/BookButton";

const iv = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const values = [
  { n: "01", title: "Simple over complicated", body: "We don't build systems that need a manual to operate. If it's not simple, we rebuild it until it is." },
  { n: "02", title: "Results over activity", body: "We don't measure success by how much we built. We measure it by what changed in your business." },
  { n: "03", title: "Fast over perfect", body: "A working system launched in a week beats a perfect system launched in three months." },
  { n: "04", title: "Honest over impressive", body: "We tell you what you actually need — not what sounds most impressive or costs the most." },
];

const industries = ["Real Estate", "Clinics & Healthcare", "Coaching & Consulting", "D2C Brands", "Legal Firms", "E-commerce", "SaaS & Tech", "Agencies"];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-[66px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <div className="o-bar mb-5" />
            <p className="eyebrow mb-3">About</p>
            <h1 className="h1 mb-5">
              We help businesses
              <br />
              <span className="text-[#FF6A00]">stop losing leads.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="sec border-b border-[#E5E5E3]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...iv()}>
              <div className="space-y-5">
                <p className="h3 text-[#0B0B0C] leading-snug">
                  Beyond Nine was created to help businesses stop losing leads and wasting time.
                </p>
                <p className="p">
                  We kept seeing the same problem everywhere. Business owners working incredibly hard — but losing customers simply because they couldn't respond fast enough, or didn't have a system to follow up consistently.
                </p>
                <p className="p">
                  A clinic missing WhatsApp inquiries. A coach losing leads because follow-ups were manual and inconsistent. A service business spending hours every day on tasks that should take minutes.
                </p>
                <p className="h4 text-[#0B0B0C]">
                  The problem wasn't effort. The problem was the lack of a system.
                </p>
                <p className="p">
                  We focus on simple systems that actually work. No complexity. No unnecessary tools. Just results.
                </p>
              </div>
              <div className="mt-8">
                <BookButton label="Book Free Call" />
              </div>
            </motion.div>

            <motion.div {...iv(0.1)} className="space-y-4">
              <div className="card p-7">
                <p className="eyebrow-muted mb-4">What we focus on</p>
                <ul className="space-y-3">
                  {[
                    "Simple systems that work reliably",
                    "Fast setup — results in days, not months",
                    "Affordable for small and growing businesses",
                    "Support that doesn't disappear after launch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="check-icon mt-0.5">
                        <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="p">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "5 days", label: "Avg. setup time" },
                  { val: "3x", label: "Avg. lead increase" },
                  { val: "20+ hrs", label: "Saved per week" },
                  { val: "24/7", label: "Automation uptime" },
                ].map((s) => (
                  <div key={s.label} className="card-off p-5 text-center">
                    <p className="text-[1.7rem] font-black text-[#FF6A00] leading-none mb-1">{s.val}</p>
                    <p className="text-[12px] text-[#5A5A5A]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div {...iv()} className="mb-12">
            <div className="o-bar mb-5" />
            <h2 className="h2">How we work.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.n} {...iv(i * 0.08)} className="card bg-white p-7 flex gap-5">
                <div className="step-num flex-shrink-0">{v.n}</div>
                <div>
                  <h3 className="h4 mb-2">{v.title}</h3>
                  <p className="p">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="sec-sm border-b border-[#E5E5E3]">
        <div className="wrap">
          <motion.div {...iv()} className="mb-8">
            <p className="eyebrow-muted mb-2">Industries We Work With</p>
          </motion.div>
          <motion.div {...iv(0.05)} className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl border border-[#E5E5E3] bg-[#F8F8F8] text-[13px] font-medium text-[#5A5A5A]">{ind}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm bg-[#0B0B0C]">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...iv()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Want to work with us?
            </h2>
            <p className="text-[14px] text-[#5A5A5A] mb-8">
              Book a free call. No pitch, no pressure — just a conversation about your business.
            </p>
            <BookButton label="Book Strategy Call" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
