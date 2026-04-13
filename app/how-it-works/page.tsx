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

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    sub: "30 minutes. No pitch.",
    body: "We start with a free 30-minute call to understand your business. We ask about how you currently get leads, how you follow up, and where things are breaking down. You don't need to prepare anything — just show up and talk.",
    what: ["We learn your current process", "We identify where leads are being lost", "We understand your tools and team", "You get honest feedback — no sales pressure"],
  },
  {
    n: "02",
    title: "Identify the Problems",
    sub: "Clarity before action.",
    body: "After the call, we map out exactly where your business is losing leads and revenue. We prioritize the highest-impact fixes and give you a clear picture of what needs to be built — and in what order.",
    what: ["Full audit of your lead process", "Identification of 2–3 highest-impact fixes", "Clear roadmap of what to build", "Written summary sent within 24 hours"],
  },
  {
    n: "03",
    title: "Build Your System",
    sub: "Fast setup. No complexity.",
    body: "We build and configure your system — lead capture, automation, follow-up sequences, landing pages, CRM. We handle everything. You stay focused on your business. Most systems are live within 5–7 days.",
    what: ["We handle all technical setup", "No complicated tools for you to learn", "Testing before anything goes live", "You review and approve before launch"],
  },
  {
    n: "04",
    title: "Launch and Support",
    sub: "Results in the first week.",
    body: "Once live, you start seeing results immediately — faster responses, more organized leads, better follow-up. We monitor performance and keep improving the system based on real data.",
    what: ["System goes live within 5–7 days", "We monitor performance for 30 days", "Ongoing improvements based on results", "Support available whenever you need it"],
  },
];

const faqs = [
  { q: "How long does setup take?", a: "Most systems are live within 5–7 business days. More complex setups may take up to 2 weeks. You'll have a clear timeline before we start." },
  { q: "Do I need any technical knowledge?", a: "None at all. We handle everything. You just tell us about your business and we build it for you." },
  { q: "Will this work for my type of business?", a: "We've built systems for real estate, clinics, coaches, e-commerce, agencies, and more. If you have leads and customers, we can help." },
  { q: "What tools do you use?", a: "We use industry-standard tools that integrate with what you already have — WhatsApp Business, email platforms, CRM systems, and booking tools." },
  { q: "What if I'm not happy with the results?", a: "We work with you until the system is working properly. We don't disappear after setup." },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white min-h-screen pt-[66px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-bar mb-5" />
            <p className="eyebrow mb-3">How It Works</p>
            <h1 className="h1 mb-5 max-w-3xl">
              From first call to
              <br />
              <span className="text-[#FF6A00]">live system in days.</span>
            </h1>
            <p className="lead max-w-xl">
              A simple four-step process. No complexity. No long timelines. Just a working system that gets results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14">
        <div className="wrap space-y-5">
          {steps.map((s, i) => (
            <motion.div key={s.n} {...iv(i * 0.07)} className="card p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="step-num">{s.n}</div>
                    <div>
                      <h2 className="h3">{s.title}</h2>
                      <p className="text-[13.5px] text-[#FF6A00] font-semibold mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <p className="p leading-relaxed">{s.body}</p>
                </div>
                <div>
                  <p className="eyebrow-muted mb-4">What happens</p>
                  <ul className="space-y-3">
                    {s.what.map((w) => (
                      <li key={w} className="flex items-start gap-3">
                        <div className="check-icon mt-0.5">
                          <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="p">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-sm border-t border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap max-w-3xl">
          <motion.div {...iv()} className="mb-10">
            <div className="o-bar mb-5" />
            <h2 className="h2">Common questions.</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...iv(i * 0.06)} className="card-off p-6">
                <h3 className="h4 mb-2">{f.q}</h3>
                <p className="p">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm border-t border-[#E5E5E3] bg-[#0B0B0C]">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...iv()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Ready to get started?
            </h2>
            <p className="text-[14px] text-[#5A5A5A] mb-8">
              Book a free 30-minute call. We'll show you exactly what to build first.
            </p>
            <BookButton label="Book Strategy Call" />
            <p className="text-[12px] text-[#333] mt-4">No pressure. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
