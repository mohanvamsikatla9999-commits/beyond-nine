"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    n: "01",
    name: "Lead Capture Setup",
    tagline: "All your leads in one place.",
    problem: "Leads are coming from multiple places — your website, Instagram, ads, WhatsApp — but nothing is organized. You're manually copying details into spreadsheets and still missing inquiries.",
    what: ["Website contact forms connected to your CRM", "Landing pages built to capture lead information", "Lead source tracking so you know what's working", "Instant notification when a new lead comes in"],
    outcome: "Every lead captured, organized, and ready to follow up — automatically.",
    accent: "#FF6A00",
  },
  {
    n: "02",
    name: "Automation Setup",
    tagline: "Instant replies without manual work.",
    problem: "You're manually replying to every WhatsApp message, email, and inquiry. It takes hours. Leads that don't get a fast reply go cold — and you lose the sale.",
    what: ["WhatsApp auto-reply setup for common questions", "Email sequences that go out automatically", "Instant response to every new lead within 60 seconds", "Smart routing to the right team member"],
    outcome: "Every lead gets a response instantly — even when you're not available.",
    accent: "#FF6A00",
  },
  {
    n: "03",
    name: "Follow-Up System",
    tagline: "No lead goes cold.",
    problem: "Most leads don't buy on the first contact. But following up manually is time-consuming and inconsistent. Leads fall through the cracks and you lose revenue you already earned.",
    what: ["Automated follow-up sequences over 7–14 days", "Reminder messages sent at the right time", "Re-engagement campaigns for cold leads", "Personalized messages based on lead behavior"],
    outcome: "Your pipeline stays warm and active — without you lifting a finger.",
    accent: "#FF6A00",
  },
  {
    n: "04",
    name: "Conversion Optimization",
    tagline: "More leads turn into customers.",
    problem: "Traffic is coming to your website but visitors aren't converting. Your landing page isn't clear, your booking process is complicated, and you're losing potential customers at the last step.",
    what: ["High-converting landing page design", "Simple booking and appointment system", "Clear call-to-action setup", "Funnel optimization to reduce drop-off"],
    outcome: "More of your existing traffic turns into paying customers.",
    accent: "#FF6A00",
  },
  {
    n: "05",
    name: "CRM & Workflow Setup",
    tagline: "Organized and efficient operations.",
    problem: "Your team doesn't have a clear system for tracking leads, tasks, and follow-ups. Things get missed. Deals fall through. Nobody knows what stage a lead is at.",
    what: ["CRM setup and pipeline configuration", "Automated task creation and assignment", "Team workflow and handoff automation", "Performance dashboard and reporting"],
    outcome: "Your entire sales process runs in one organized, automated system.",
    accent: "#FF6A00",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-[68px]">
      {/* Header */}
      <section className="section-sm border-b border-[#E8E8E6] bg-[#F7F7F5]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-line mb-5" />
            <p className="label-o mb-3">Services</p>
            <h1 className="d1 mb-5 max-w-3xl">
              Everything you need to
              <br />
              <span className="text-[#FF6A00]">stop losing leads.</span>
            </h1>
            <p className="body-lg max-w-xl">
              Five focused services. Each one solves a specific problem in your lead and sales process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="wrap space-y-5">
          {services.map((s, i) => (
            <motion.div key={s.n} {...inUp(i * 0.06)} className="card p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <span className="num block mb-3">{s.n}</span>
                  <h2 className="d3 mb-2">{s.name}</h2>
                  <p className="text-[14px] font-semibold text-[#FF6A00] mb-5">{s.tagline}</p>
                  <div className="mb-5">
                    <p className="label mb-3">The Problem</p>
                    <p className="body">{s.problem}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#FF6A00]/5 border border-[#FF6A00]/15">
                    <p className="label-o mb-2">Outcome</p>
                    <p className="text-[14px] font-medium text-[#0B0B0C] leading-relaxed">{s.outcome}</p>
                  </div>
                </div>
                <div>
                  <p className="label mb-5">What's Included</p>
                  <ul className="space-y-3">
                    {s.what.map((w, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-[#FF6A00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="body">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm border-t border-[#E8E8E6] bg-[#0B0B0C]">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...inUp()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-[14px] text-[#6B6B6B] mb-8">
              Book a free call. We'll figure out exactly what to fix first.
            </p>
            <Link href="/contact" className="btn-orange">Book Strategy Call</Link>
            <p className="text-[12px] text-[#3d3d3d] mt-4">No pressure. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
