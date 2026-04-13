"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});
const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    n: "01",
    name: "Lead Capture System",
    desc: "We help you collect and organize leads from your website, ads, or social media — all in one place.",
    benefit: "Never miss an inquiry again.",
  },
  {
    n: "02",
    name: "Automated Follow-Up",
    desc: "We set up WhatsApp, email, or SMS automation so every lead gets a response — instantly, automatically.",
    benefit: "No lead goes cold.",
  },
  {
    n: "03",
    name: "Conversion System",
    desc: "We create landing pages and booking systems that turn visitors into paying customers.",
    benefit: "More leads become clients.",
  },
];

const whatWeDo = [
  "Capture every lead from every channel",
  "Respond instantly — even at 2am",
  "Follow up automatically until they convert",
  "Convert more customers with less effort",
];

const whyItMatters = [
  { stat: "78%", label: "of customers buy from whoever responds first" },
  { stat: "5x", label: "more conversions with automated follow-up" },
  { stat: "20+", label: "hours saved per week on manual tasks" },
  { stat: "< 60s", label: "average response time with our systems" },
];

const steps = [
  { n: "01", title: "Understand your business", body: "We learn how you currently get and handle leads — and where you're losing them." },
  { n: "02", title: "Build your system", body: "We design and set up the right automation for your business. Fast, clean, no complexity." },
  { n: "03", title: "Launch quickly", body: "Most systems go live within 5–7 days. You start seeing results in the first week." },
  { n: "04", title: "Improve results", body: "We monitor performance and keep improving until your numbers are where they should be." },
];

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-[68px] border-b border-[#E8E8E6]">
        {/* Subtle bg texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,106,0,0.05),transparent)]" />

        <div className="wrap relative z-10 py-24 w-full">
          <div className="max-w-4xl">
            <motion.div {...up(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E8E6] bg-[#F7F7F5] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#6B6B6B] tracking-wide">Growth Systems for Ambitious Businesses</span>
            </motion.div>

            <motion.h1 {...up(0.07)} className="d1 mb-7">
              Stop losing leads.
              <br />
              <span className="text-[#FF6A00]">Start converting</span>
              <br />
              automatically.
            </motion.h1>

            <motion.p {...up(0.15)} className="body-lg max-w-xl mb-10">
              Beyond Nine builds systems that capture, respond, and convert your leads — without manual effort.
            </motion.p>

            <motion.div {...up(0.22)} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-orange">
                Book Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/how-it-works" className="btn-outline">See How It Works</Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div {...up(0.35)} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E8E6] rounded-2xl overflow-hidden border border-[#E8E8E6]">
            {whyItMatters.map((w) => (
              <div key={w.label} className="bg-white px-6 py-6 text-center">
                <p className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#FF6A00] leading-none mb-1">{w.stat}</p>
                <p className="text-[12px] text-[#6B6B6B] leading-snug">{w.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section border-b border-[#E8E8E6]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...inUp()}>
              <div className="o-line mb-6" />
              <p className="label-o mb-3">What We Actually Do</p>
              <h2 className="d2 mb-6">
                Simple systems.
                <br />
                Real results.
              </h2>
              <p className="body-lg max-w-md">
                We design simple systems that help your business run smarter — so you stop losing leads and start converting more customers.
              </p>
            </motion.div>

            <div className="space-y-3">
              {whatWeDo.map((item, i) => (
                <motion.div key={item} {...inUp(i * 0.08)}
                  className="flex items-center gap-4 p-5 rounded-xl border border-[#E8E8E6] bg-[#F7F7F5] group hover:border-[#FF6A00] hover:bg-white transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6A00] transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#FF6A00] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-medium text-[#0B0B0C]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section border-b border-[#E8E8E6] bg-[#F7F7F5]">
        <div className="wrap">
          <motion.div {...inUp()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-line" /></div>
            <p className="label-o mb-3">Our Services</p>
            <h2 className="d2">Three systems that fix your growth.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.n} {...inUp(i * 0.1)} className="card p-8 bg-white flex flex-col">
                <span className="num block mb-4">{s.n}</span>
                <h3 className="d4 mb-3">{s.name}</h3>
                <p className="body flex-1 mb-5">{s.desc}</p>
                <div className="border-t border-[#E8E8E6] pt-4">
                  <p className="text-[13px] font-semibold text-[#FF6A00]">{s.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...inUp(0.3)} className="text-center mt-8">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section border-b border-[#E8E8E6]">
        <div className="wrap">
          <motion.div {...inUp()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-line" /></div>
            <p className="label-o mb-3">How We Work</p>
            <h2 className="d2">Up and running in days, not months.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.n} {...inUp(i * 0.08)} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#FF6A00]/20 to-transparent z-10" />
                )}
                <div className="card-off p-7 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A00] flex items-center justify-center mb-5">
                    <span className="text-white font-black text-[12px]">{s.n}</span>
                  </div>
                  <h3 className="text-[#0B0B0C] font-bold text-[15px] mb-3">{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section bg-[#0B0B0C]">
        <div className="wrap text-center max-w-3xl mx-auto">
          <motion.div {...inUp()}>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3d3d3d] mb-6">The Bottom Line</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-tight tracking-[-0.03em] mb-6">
              Your business doesn't need more effort.
              <br />
              <span className="text-[#FF6A00]">It needs a better system.</span>
            </h2>
            <p className="text-[16px] text-[#6B6B6B] mb-10 max-w-lg mx-auto leading-relaxed">
              One free call. We'll identify exactly what's holding your growth back and show you what to fix first.
            </p>
            <Link href="/contact" className="btn-orange text-[15px] py-4 px-10">
              Book Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[12px] text-[#3d3d3d] mt-5">No pressure. No pitch. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
