"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const values = [
  { n: "01", title: "Simple over complicated", body: "We don't build systems that need a manual to operate. If it's not simple, we rebuild it until it is." },
  { n: "02", title: "Results over activity", body: "We don't measure success by how much we built. We measure it by what changed in your business." },
  { n: "03", title: "Fast over perfect", body: "A working system launched in a week beats a perfect system launched in three months." },
  { n: "04", title: "Honest over impressive", body: "We tell you what you actually need — not what sounds most impressive or costs the most." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-[68px]">
      {/* Header */}
      <section className="section-sm border-b border-[#E8E8E6] bg-[#F7F7F5]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <div className="o-line mb-5" />
            <p className="label-o mb-3">About</p>
            <h1 className="d1 mb-5">
              We help businesses
              <br />
              <span className="text-[#FF6A00]">stop losing leads.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section border-b border-[#E8E8E6]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...inUp()}>
              <div className="space-y-5 text-[15px] text-[#6B6B6B] leading-[1.85]">
                <p className="text-[#0B0B0C] text-[20px] font-semibold leading-relaxed">
                  Beyond Nine was built to help businesses stop losing leads and wasting time.
                </p>
                <p>
                  We kept seeing the same problem everywhere. Business owners working incredibly hard — but losing customers simply because they couldn't respond fast enough, or didn't have a system to follow up consistently.
                </p>
                <p>
                  A clinic missing WhatsApp inquiries. A coach losing leads because follow-ups were manual and inconsistent. A service business spending hours every day on tasks that should take minutes.
                </p>
                <p className="text-[#0B0B0C] font-semibold">
                  The problem wasn't effort. The problem was the lack of a system.
                </p>
                <p>
                  We focus on simple systems that actually work. No complexity. No unnecessary tools. Just results.
                </p>
              </div>
            </motion.div>

            <motion.div {...inUp(0.1)} className="space-y-4">
              <div className="card p-7">
                <p className="label mb-4">What we focus on</p>
                <ul className="space-y-3">
                  {[
                    "Simple systems that work reliably",
                    "Fast setup — results in days, not months",
                    "Affordable for small and growing businesses",
                    "Support that doesn't disappear after launch",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#FF6A00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5 days", label: "Avg. setup time" },
                  { val: "3x", label: "Avg. lead increase" },
                  { val: "20+ hrs", label: "Saved per week" },
                  { val: "24/7", label: "Automation uptime" },
                ].map((s) => (
                  <div key={s.label} className="card-off p-5 text-center">
                    <p className="text-[1.6rem] font-black text-[#FF6A00] leading-none mb-1">{s.val}</p>
                    <p className="text-[12px] text-[#6B6B6B]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-b border-[#E8E8E6] bg-[#F7F7F5]">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-12">
            <div className="o-line mb-5" />
            <h2 className="d2">How we work.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.n} {...inUp(i * 0.08)} className="card bg-white p-7 flex gap-5 items-start">
                <span className="num flex-shrink-0 mt-0.5">{v.n}</span>
                <div>
                  <h3 className="text-[#0B0B0C] font-bold text-[15px] mb-2">{v.title}</h3>
                  <p className="body-sm">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-[#0B0B0C]">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...inUp()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Want to work with us?
            </h2>
            <p className="text-[14px] text-[#6B6B6B] mb-8">
              Book a free call. No pitch, no pressure — just a conversation about your business.
            </p>
            <Link href="/contact" className="btn-orange">Book Strategy Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
