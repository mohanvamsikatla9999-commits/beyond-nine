"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const up = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] },
});
const iv = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const problems = [
  { n: "01", title: "Leads not captured properly", body: "Inquiries come from multiple places — website, ads, WhatsApp — but nothing is organized. Leads get missed." },
  { n: "02", title: "Follow-ups are slow or missing", body: "Manual follow-up is inconsistent. Leads go cold because nobody followed up at the right time." },
  { n: "03", title: "Conversions are low", body: "Traffic and leads exist but they're not turning into paying customers. The system isn't built to convert." },
];

const services = [
  {
    n: "01",
    name: "Lead Capture System",
    short: "Collect every lead. Miss nothing.",
    points: ["Website forms connected to your CRM", "Leads from ads and social media organized automatically", "Instant notification when a new lead arrives"],
    result: "No missed opportunities",
  },
  {
    n: "02",
    name: "Automated Follow-Up",
    short: "Every lead gets a reply. Instantly.",
    points: ["WhatsApp auto-reply within 60 seconds", "Email sequences sent automatically", "Follow-up reminders until they respond"],
    result: "Every lead gets a response instantly",
  },
  {
    n: "03",
    name: "Conversion System",
    short: "Turn visitors into paying customers.",
    points: ["High-converting landing pages", "Online booking and appointment system", "Funnel setup that guides leads to buy"],
    result: "More visitors become customers",
  },
  {
    n: "04",
    name: "CRM & Workflow Setup",
    short: "Run your business without the chaos.",
    points: ["All leads tracked in one organized pipeline", "Tasks and reminders automated", "Team workflows that run without manual effort"],
    result: "Your business runs smoothly",
  },
];

const stats = [
  { val: "78%", label: "of customers buy from whoever responds first" },
  { val: "5x", label: "more conversions with automated follow-up" },
  { val: "20+", label: "hours saved per week on manual tasks" },
  { val: "< 60s", label: "average response time with our systems" },
];

const steps = [
  { n: "01", title: "Understand your business", body: "We learn how you get leads, how you follow up, and where things are breaking down." },
  { n: "02", title: "Build your system", body: "We design and set up the right automation for your business. Fast, clean, no complexity." },
  { n: "03", title: "Launch quickly", body: "Most systems go live within 5–7 days. You start seeing results in the first week." },
  { n: "04", title: "Improve performance", body: "We monitor results and keep improving until your numbers are where they should be." },
];

const whyMatters = [
  { title: "Faster response = more sales", body: "The first business to respond wins. Our systems respond in under 60 seconds, every time." },
  { title: "Automation saves hours daily", body: "Stop doing repetitive tasks manually. Let the system handle follow-ups, reminders, and data entry." },
  { title: "Better experience for customers", body: "Instant replies and organized communication make your business look professional and reliable." },
  { title: "Higher revenue, less effort", body: "More leads captured, more follow-ups sent, more conversions — without adding more work to your day." },
];

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center pt-[66px] border-b border-[#E5E5E3]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,#FFF4EE,transparent)]" />
        <div className="wrap relative z-10 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...up(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4EE] border border-[rgba(255,106,0,0.2)] mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="eyebrow">AI Automation for Growing Businesses</span>
              </motion.div>

              <motion.h1 {...up(0.07)} className="h1 mb-6">
                Stop losing leads.
                <br />
                <span className="text-[#FF6A00]">Start converting</span>
                <br />
                automatically.
              </motion.h1>

              <motion.p {...up(0.14)} className="lead max-w-lg mb-9">
                We build systems that capture, respond, and convert your leads — without manual work.
              </motion.p>

              <motion.div {...up(0.2)} className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-cta">
                  Book Strategy Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/how-it-works" className="btn-line">See How It Works</Link>
              </motion.div>

              <motion.p {...up(0.28)} className="text-[12px] text-[#9A9A9A] mt-4">
                Free consultation. No pressure. We respond within 24 hours.
              </motion.p>
            </div>

            {/* Visual card */}
            <motion.div {...up(0.18)} className="hidden lg:block">
              <div className="card-off p-8 rounded-2xl space-y-4">
                <p className="eyebrow-muted mb-2">What happens without a system</p>
                {[
                  { label: "Lead submits inquiry", status: "missed", color: "#FF3B30" },
                  { label: "No auto-reply sent", status: "delayed", color: "#FF9500" },
                  { label: "Follow-up forgotten", status: "lost", color: "#FF3B30" },
                  { label: "Lead buys from competitor", status: "gone", color: "#FF3B30" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E5E3]">
                    <span className="text-[13.5px] font-medium text-[#0B0B0C]">{item.label}</span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.status}
                    </span>
                  </div>
                ))}
                <div className="h-px bg-[#E5E5E3] my-2" />
                <p className="eyebrow-muted mb-2">What happens with Beyond Nine</p>
                {[
                  { label: "Lead submits inquiry", status: "captured", color: "#34C759" },
                  { label: "Auto-reply sent in 60s", status: "instant", color: "#34C759" },
                  { label: "Follow-up automated", status: "running", color: "#34C759" },
                  { label: "Lead converts to customer", status: "closed", color: "#FF6A00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E5E3]">
                    <span className="text-[13.5px] font-medium text-[#0B0B0C]">{item.label}</span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E5E3]">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...iv(i * 0.06)} className="bg-[#F8F8F8] px-6 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#FF6A00] leading-none mb-2">{s.val}</p>
                <p className="text-[12px] text-[#5A5A5A] leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="sec border-b border-[#E5E5E3]">
        <div className="wrap">
          <motion.div {...iv()} className="max-w-3xl mx-auto text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="h2 mb-5">We fix 3 problems that are costing you customers.</h2>
            <p className="lead max-w-xl mx-auto">
              Most businesses lose revenue not because of bad products — but because their lead process is broken. We fix that.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <motion.div key={p.n} {...iv(i * 0.09)} className="card p-7">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4EE] flex items-center justify-center mb-5">
                  <span className="text-[#FF6A00] font-black text-[13px]">{p.n}</span>
                </div>
                <h3 className="h4 mb-3">{p.title}</h3>
                <p className="p">{p.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...iv(0.3)} className="mt-8 card-orange p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="eyebrow mb-2">Our Solution</p>
              <p className="h4 text-[#0B0B0C]">We solve all three using automation systems — built specifically for your business.</p>
            </div>
            <Link href="/services" className="btn-cta flex-shrink-0">See Our Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div {...iv()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">Our Core Solutions</p>
            <h2 className="h2">Four systems. One goal: more customers.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.08)} className="card bg-white p-8 flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className="step-num">{s.n}</div>
                  <div>
                    <h3 className="h4 mb-1">{s.name}</h3>
                    <p className="text-[13.5px] text-[#FF6A00] font-semibold">{s.short}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1 mb-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="check-icon mt-0.5">
                        <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="p">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#E5E5E3] pt-4">
                  <p className="text-[12px] font-bold text-[#FF6A00] uppercase tracking-wide">Result: {s.result}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...iv(0.3)} className="text-center mt-8">
            <Link href="/services" className="btn-line">View Detailed Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="sec border-b border-[#E5E5E3]">
        <div className="wrap">
          <motion.div {...iv()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">Why It Matters</p>
            <h2 className="h2">The business impact of getting this right.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyMatters.map((w, i) => (
              <motion.div key={w.title} {...iv(i * 0.08)} className="card-off p-7 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="h4 mb-2">{w.title}</h3>
                  <p className="p">{w.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sec border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div {...iv()} className="text-center mb-14">
            <div className="flex justify-center mb-5"><div className="o-bar" /></div>
            <p className="eyebrow mb-3">How We Work</p>
            <h2 className="h2">From first call to live system in days.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.n} {...iv(i * 0.08)} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-full w-full h-px bg-gradient-to-r from-[#FF6A00]/25 to-transparent z-10" />
                )}
                <div className="card bg-white p-7 h-full">
                  <div className="step-num mb-5">{s.n}</div>
                  <h3 className="h4 mb-3">{s.title}</h3>
                  <p className="sm">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...iv(0.3)} className="text-center mt-8">
            <Link href="/how-it-works" className="btn-line">See Full Process</Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sec bg-[#0B0B0C]">
        <div className="wrap text-center max-w-3xl mx-auto">
          <motion.div {...iv()}>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#333] mb-6">The Bottom Line</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-tight tracking-[-0.03em] mb-6">
              Your business doesn't need
              <br />
              more effort.
              <br />
              <span className="text-[#FF6A00]">It needs a better system.</span>
            </h2>
            <p className="text-[16px] text-[#5A5A5A] mb-10 max-w-lg mx-auto leading-relaxed">
              One free call. We'll identify exactly what's holding your growth back and show you what to fix first.
            </p>
            <Link href="/contact" className="btn-cta text-[15px] py-4 px-10">
              Book Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[12px] text-[#333] mt-5">Free consultation. No pressure. Response within 24 hours.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
