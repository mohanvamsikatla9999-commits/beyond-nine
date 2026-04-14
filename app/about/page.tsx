"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import TiltCard from "@/components/TiltCard";

const iv = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.72, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const values = [
  { n: "01", title: "Simple over complicated", body: "We don't build systems that need a manual to operate. If it's not simple, we rebuild it." },
  { n: "02", title: "Results over activity", body: "We measure success by what changed in your business — not by how much we built." },
  { n: "03", title: "Fast over perfect", body: "A working system launched in a week beats a perfect system launched in three months." },
  { n: "04", title: "Honest over impressive", body: "We tell you what you actually need — not what sounds most impressive." },
];

export default function AboutPage() {
  return (
    <div className="bg-w min-h-screen pt-[68px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E3E3E0] bg-[#F8F8F6] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[rgba(255,106,0,0.07)]" />
        <div className="wrap relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-bar mb-5" />
            <p className="t-eye mb-3">About</p>
            <h1 className="t-hero mb-5">
              We help businesses
              <br />
              <span className="gt">stop losing leads.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="sec border-b border-[#E3E3E0]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...iv()}>
              <div className="space-y-5">
                <p className="t-h3 text-[#0A0A0B] leading-snug">
                  Beyond Nine was created to help businesses stop losing leads and wasting time.
                </p>
                <p className="t-body">We kept seeing the same problem everywhere. Business owners working incredibly hard — but losing customers simply because they couldn't respond fast enough, or didn't have a system to follow up consistently.</p>
                <p className="t-h4 text-[#0A0A0B]">The problem wasn't effort. The problem was the lack of a system.</p>
                <p className="t-body">We focus on simple systems that actually work. No complexity. No unnecessary tools. Just results.</p>
              </div>
              <div className="mt-8">
                <BookButton label="Book Free Call" className="text-[14px] py-3.5 px-7" />
              </div>
            </motion.div>

            <motion.div {...iv(0.1)} className="space-y-4">
              <TiltCard intensity={3} className="card p-7">
                <p className="t-eye-m mb-5">What we focus on</p>
                <ul className="space-y-3.5">
                  {["Simple systems that work reliably", "Fast setup — results in days, not months", "Affordable for small and growing businesses", "Support that doesn't disappear after launch"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="ck mt-0.5">
                        <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="t-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "5 days", l: "Avg. setup time" },
                  { v: "3x", l: "Avg. lead increase" },
                  { v: "20+ hrs", l: "Saved per week" },
                  { v: "24/7", l: "Automation uptime" },
                ].map((s) => (
                  <TiltCard key={s.l} intensity={4} className="card-off p-5 text-center">
                    <p className="text-[1.8rem] font-black text-[#FF6A00] leading-none mb-1">{s.v}</p>
                    <p className="text-[12px] text-[#9A9A9C]">{s.l}</p>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec border-b border-[#E3E3E0] bg-[#F8F8F6]">
        <div className="wrap">
          <motion.div {...iv()} className="mb-12">
            <div className="o-bar mb-5" />
            <h2 className="t-h2">How we work.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.n} {...iv(i * 0.08)}>
                <TiltCard intensity={3} className="card bg-white p-7 flex gap-5 h-full">
                  <div className="sn flex-shrink-0">{v.n}</div>
                  <div>
                    <h3 className="t-h4 mb-2">{v.title}</h3>
                    <p className="t-body">{v.body}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="sec-sm border-b border-[#E3E3E0]">
        <div className="wrap">
          <motion.div {...iv()} className="mb-7">
            <p className="t-eye-m">Industries We Work With</p>
          </motion.div>
          <motion.div {...iv(0.05)} className="flex flex-wrap gap-3">
            {["Real Estate", "Clinics & Healthcare", "Coaching & Consulting", "D2C Brands", "Legal Firms", "E-commerce", "SaaS & Tech", "Agencies"].map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl border border-[#E3E3E0] bg-[#F8F8F6] text-[13px] font-medium text-[#525254]">{ind}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm bg-[#0A0A0B] relative overflow-hidden">
        <div className="orb w-[400px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,106,0,0.1)]" />
        <div className="wrap relative z-10 text-center max-w-2xl">
          <motion.div {...iv()}>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-white tracking-[-0.03em] mb-4">Want to work with us?</h2>
            <p className="text-[14px] text-[rgba(255,255,255,0.4)] mb-8">Book a free call. No pitch, no pressure — just a conversation about your business.</p>
            <BookButton label="Book Strategy Call" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
