"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import TiltCard from "@/components/TiltCard";

const iv = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    n: "01",
    name: "Lead Capture Setup",
    tagline: "All your leads in one place.",
    what: "A system that collects leads from every channel — website, ads, social media, WhatsApp — and organizes them automatically.",
    problem: "Leads are coming from multiple places but nothing is organized. You're manually copying details and still missing inquiries.",
    includes: ["Website forms connected to your CRM", "Lead capture from ads and social media", "Instant notification on every new lead", "All leads in one organized dashboard"],
    result: "No missed opportunities. Every lead captured automatically.",
  },
  {
    n: "02",
    name: "Automated Response System",
    tagline: "Every lead gets a reply. Instantly.",
    what: "Automation that sends instant replies to every new lead via WhatsApp, email, or SMS — within 60 seconds.",
    problem: "You're manually replying to every inquiry. Leads that don't get a fast reply go cold and buy from whoever responded first.",
    includes: ["WhatsApp auto-reply within 60 seconds", "Email sequences sent automatically", "Smart routing to the right team member", "24/7 availability without staffing"],
    result: "Every lead gets a response instantly — even at 2am.",
  },
  {
    n: "03",
    name: "Follow-Up System",
    tagline: "No lead goes cold.",
    what: "Automated multi-step follow-up sequences that keep every lead warm until they convert.",
    problem: "Most leads don't buy on first contact. Manual follow-up is inconsistent and leads fall through the cracks.",
    includes: ["Automated follow-up over 7–14 days", "Reminder messages at the right time", "Re-engagement for cold leads", "Personalized messages based on behavior"],
    result: "Your pipeline stays warm and active without manual effort.",
  },
  {
    n: "04",
    name: "Conversion System",
    tagline: "More visitors become customers.",
    what: "Landing pages, booking systems, and funnels designed to convert your existing traffic into paying customers.",
    problem: "Traffic is coming but visitors aren't converting. Your booking process is complicated and you're losing customers at the last step.",
    includes: ["High-converting landing page design", "Online booking and appointment system", "Funnel setup to reduce drop-off", "Integration with WhatsApp and CRM"],
    result: "More of your existing traffic turns into paying customers.",
  },
  {
    n: "05",
    name: "CRM & Workflow Setup",
    tagline: "Organized operations. No chaos.",
    what: "A complete CRM and workflow setup that tracks every lead, automates tasks, and keeps your team organized.",
    problem: "No clear system for tracking leads and follow-ups. Things get missed. Deals fall through.",
    includes: ["CRM setup and pipeline configuration", "Automated task creation and assignment", "Lead stage tracking and visibility", "Performance dashboard and reporting"],
    result: "Your entire sales process runs in one organized, automated system.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-[66px]">
      {/* Header */}
      <section className="sec-sm border-b border-[#E4E4E2] bg-[#F9F9F7] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] top-0 right-0 bg-[rgba(255,106,0,0.07)]" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <div className="o-bar mb-5" />
            <p className="eyebrow mb-3">Services</p>
            <h1 className="h1 mb-5 max-w-3xl">
              Five systems that fix
              <br />
              <span className="gt">your lead process.</span>
            </h1>
            <p className="lead max-w-xl">Each service solves one specific problem. Together they create a complete system that captures, follows up, and converts automatically.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14">
        <div className="wrap space-y-5">
          {services.map((s, i) => (
            <motion.div key={s.n} {...iv(i * 0.05)}>
              <TiltCard className="card p-8 md:p-10" intensity={3}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="step-n">{s.n}</div>
                      <div>
                        <h2 className="h3">{s.name}</h2>
                        <p className="text-[13.5px] text-[#FF6A00] font-semibold mt-0.5">{s.tagline}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="eyebrow-m mb-2">What it is</p>
                      <p className="p">{s.what}</p>
                    </div>
                    <div className="mb-5">
                      <p className="eyebrow-m mb-2">The problem it solves</p>
                      <p className="p">{s.problem}</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgba(255,106,0,0.06)] border border-[rgba(255,106,0,0.15)]">
                      <p className="eyebrow mb-1.5">Result</p>
                      <p className="text-[14px] font-semibold text-[#0B0B0C]">{s.result}</p>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow-m mb-4">What's included</p>
                    <ul className="space-y-3">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="chk mt-0.5">
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm border-t border-[#E4E4E2] bg-[#0B0B0C] relative overflow-hidden">
        <div className="orb w-[400px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,106,0,0.1)]" />
        <div className="wrap relative z-10 text-center max-w-2xl">
          <motion.div {...iv()}>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-0.025em] mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-[14px] text-[rgba(255,255,255,0.4)] mb-8">Book a free call. We'll figure out exactly what to fix first.</p>
            <BookButton label="Book Free Call" />
            <p className="text-[12px] text-[rgba(255,255,255,0.2)] mt-4">No pressure. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
