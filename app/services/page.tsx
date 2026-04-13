"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const iv = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    n: "01",
    name: "Lead Capture System",
    tagline: "All your leads in one place. Nothing missed.",
    what: "A system that collects leads from every channel — your website, ads, social media, WhatsApp — and organizes them automatically in one place.",
    problem: "Right now, leads are coming from multiple places and getting lost. You're manually copying details into spreadsheets and still missing inquiries. Every missed lead is lost revenue.",
    includes: [
      "Website contact forms connected to your CRM",
      "Lead capture from ads and social media",
      "Instant notification when a new lead arrives",
      "All leads organized in one dashboard",
      "Lead source tracking so you know what's working",
    ],
    result: "No missed opportunities. Every lead captured and ready to follow up.",
  },
  {
    n: "02",
    name: "Automated Follow-Up System",
    tagline: "Every lead gets a response. Instantly.",
    what: "An automation system that sends instant replies to every new lead — via WhatsApp, email, or SMS — and follows up automatically until they respond.",
    problem: "You're manually replying to every inquiry. It takes hours. Leads that don't get a fast reply go cold — and you lose the sale to whoever responded first.",
    includes: [
      "WhatsApp auto-reply within 60 seconds of inquiry",
      "Email sequences sent automatically",
      "Multi-step follow-up over 7–14 days",
      "Re-engagement for leads that go quiet",
      "Smart timing — messages sent when they're most likely to respond",
    ],
    result: "Every lead gets a response instantly. No lead goes cold.",
  },
  {
    n: "03",
    name: "Conversion System",
    tagline: "Turn visitors into paying customers.",
    what: "A complete conversion setup — landing pages, booking systems, and funnels — designed to turn your existing traffic and leads into paying customers.",
    problem: "Traffic is coming to your website but visitors aren't converting. Your landing page isn't clear, your booking process is complicated, and you're losing potential customers at the last step.",
    includes: [
      "High-converting landing page design",
      "Online booking and appointment system",
      "Funnel setup that guides leads to buy",
      "Clear call-to-action on every page",
      "Integration with your WhatsApp and CRM",
    ],
    result: "More of your existing traffic turns into paying customers.",
  },
  {
    n: "04",
    name: "CRM & Workflow Setup",
    tagline: "Organized operations. No more chaos.",
    what: "A complete CRM and workflow setup that tracks every lead, automates tasks, and keeps your team organized — so nothing falls through the cracks.",
    problem: "Your team doesn't have a clear system for tracking leads, tasks, and follow-ups. Things get missed. Deals fall through. Nobody knows what stage a lead is at.",
    includes: [
      "CRM setup and pipeline configuration",
      "Automated task creation and assignment",
      "Lead stage tracking and progress visibility",
      "Team workflow and handoff automation",
      "Performance dashboard and reporting",
    ],
    result: "Your entire sales process runs in one organized, automated system.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-[66px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E5E5E3] bg-[#F8F8F8]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-bar mb-5" />
            <p className="eyebrow mb-3">Services</p>
            <h1 className="h1 mb-5 max-w-3xl">
              Four systems that fix
              <br />
              <span className="text-[#FF6A00]">your lead process.</span>
            </h1>
            <p className="lead max-w-xl">
              Each service solves one specific problem. Together, they create a complete system that captures, follows up, and converts automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14">
        <div className="wrap space-y-5">
          {services.map((s, i) => (
            <motion.div key={s.n} {...iv(i * 0.06)} className="card p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="step-num">{s.n}</div>
                    <div>
                      <h2 className="h3">{s.name}</h2>
                      <p className="text-[13.5px] text-[#FF6A00] font-semibold mt-0.5">{s.tagline}</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="eyebrow-muted mb-2">What it is</p>
                    <p className="p">{s.what}</p>
                  </div>
                  <div className="mb-5">
                    <p className="eyebrow-muted mb-2">The problem it solves</p>
                    <p className="p">{s.problem}</p>
                  </div>
                  <div className="card-orange p-5">
                    <p className="eyebrow mb-1.5">Result</p>
                    <p className="text-[14px] font-semibold text-[#0B0B0C]">{s.result}</p>
                  </div>
                </div>
                <div>
                  <p className="eyebrow-muted mb-4">What's included</p>
                  <ul className="space-y-3">
                    {s.includes.map((item) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm border-t border-[#E5E5E3] bg-[#0B0B0C]">
        <div className="wrap text-center max-w-2xl">
          <motion.div {...iv()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-[14px] text-[#5A5A5A] mb-8">
              Book a free call. We'll figure out exactly what to fix first.
            </p>
            <Link href="/contact" className="btn-cta">Book Free Call</Link>
            <p className="text-[12px] text-[#333] mt-4">No pressure. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
