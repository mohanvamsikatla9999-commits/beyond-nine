"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/* ── animation helpers ── */
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});
const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── animated counter ── */
function Counter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView || typeof target !== "number") return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  if (typeof target === "string") return <span ref={ref}>{target}</span>;
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── marquee industries ── */
const industries = ["Real Estate", "Clinics & Healthcare", "Coaches & Consultants", "D2C Brands", "Legal Firms", "E-commerce", "SaaS Startups"];

const problems = [
  {
    n: "01",
    title: "Leads Going Cold",
    body: "You pay for ads. Leads come in. Nobody follows up in time. 78% of customers buy from whoever responds first — by the time you respond, the deal's already gone.",
  },
  {
    n: "02",
    title: "Too Much Manual Work",
    body: "Your team spends 20–40 hours a week on repetitive tasks. Data entry, scheduling, generating reports — that's 40 hours every week not spent on growing revenue.",
  },
  {
    n: "03",
    title: "Websites That Don't Convert",
    body: "Traffic lands on your site, looks around, and leaves. Without a clear system to capture and qualify visitors, you're losing potential revenue every single day.",
  },
];

const systems = [
  {
    n: "SYSTEM 1",
    name: "Revenue Capture",
    tagline: "Contact, qualify, and book leads in seconds.",
    features: ["AI Voice Agent (24/7)", "WhatsApp & SMS Bot", "Instant CRM Sync", "Automated Follow-ups", "Live Analytics Dashboard"],
    bestFor: "Real Estate, Clinics, Service Businesses",
    flagship: false,
  },
  {
    n: "SYSTEM 2",
    name: "Ops Efficiency",
    tagline: "Eliminate 20–40 hours of manual tasks weekly.",
    features: ["Workflow Process Mapping", "3–5 Core Automations", "Custom n8n/Make Logic", "Team Onboarding & Training", "30-Day Check-in"],
    bestFor: "Agencies, Legal, B2B Services",
    flagship: true,
  },
  {
    n: "SYSTEM 3",
    name: "Web Capture",
    tagline: "Turn passive website visitors into qualified leads.",
    features: ["High-Converting Landing Pages", "Frictionless Lead Capture", "Automated WhatsApp Triggers", "Instant Auto Follow-ups", "Full CRM Integration"],
    bestFor: "Outdated sites, Low-conversion pages",
    flagship: false,
  },
];

const solutions = [
  { cat: "AI & AUTOMATION", name: "Instant Lead Follow-Up", desc: "When a lead submits a form, they instantly receive personalized WhatsApp and Email engagements." },
  { cat: "AI VOICE", name: "Inbound AI Receptionist", desc: "Human-like AI answers every inbound call immediately, routes requests, and schedules meetings 24/7." },
  { cat: "WEB", name: "High-Converting Landing Pages", desc: "A lightning-fast, single-page funnel precision-built to capture leads and book calls." },
  { cat: "AI & AUTOMATION", name: "Appointment Booking Bot", desc: "Let prospects book themselves automatically across WhatsApp, SMS, or web — zero manual scheduling." },
  { cat: "AUDIT & STRATEGY", name: "Business Process Teardown", desc: "A complete technical audit of your workflows with an exact mapped roadmap for automation." },
];

const steps = [
  { n: "01", title: "We understand your business", body: "30-minute call. We learn your business, find where money is leaking, and decide what to build." },
  { n: "02", title: "We Scope & Price It", body: "You get exact deliverables, timeline, and cost in writing. No surprises before we start or after." },
  { n: "03", title: "We Build It", body: "We handle the entire build and setup. You stay focused on your business." },
  { n: "04", title: "Goes Live. You See Results.", body: "System goes live in 2 weeks. You see hours saved, and revenue retained within 30 days." },
];

const stats = [
  { value: "< 60", suffix: "sec", label: "Lead Response Time" },
  { value: 40, suffix: " hrs", label: "Manual Work Eliminated" },
  { value: 3, suffix: "x", label: "Average Conversion Lift" },
  { value: "Zero", suffix: "", label: "Tech Headache for You" },
];

const whyUs = [
  { title: "Business First, Tech Second", body: "We don't build tech for the sake of it. If an automation won't save you time or make you money, we won't recommend it." },
  { title: "Clear, Measurable ROI", body: "Every system we deploy is measured by the hours it saves and the revenue it generates." },
  { title: "Fast Deployment", body: "We don't drag out projects. We identify your biggest operational bottleneck and launch the solution in weeks, not months." },
  { title: "Zero Technical Headaches", body: "You run your business. We build, integrate, and maintain the infrastructure. You get a working system, not another tool to manage." },
];

const faqs = [
  { q: "What exactly do you build?", a: "We build AI automations, voice agents, and web systems that eliminate manual work and capture more revenue. Every project starts with understanding your specific business bottlenecks." },
  { q: "Will I need to replace my existing software?", a: "No. We integrate with your existing tools — CRMs, calendars, WhatsApp, email platforms. We build around what you have, not on top of it." },
  { q: "How long does implementation take?", a: "Most systems go live within 2 weeks. Complex integrations may take up to 4 weeks. You'll have a clear timeline before we start." },
  { q: "What if the AI gives the wrong information to a customer?", a: "We train every AI system on your specific business data and set clear boundaries. You review and approve all responses before the system goes live." },
  { q: "How do you charge for your services?", a: "We charge a one-time build fee. Optional monthly management is available for ongoing optimization and support. Full pricing is provided after a free audit." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-bg overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center grid-bg pt-[66px]">
        <div className="glow w-[800px] h-[600px] top-[-100px] left-1/2 -translate-x-1/2 bg-indigo-600/10" />
        <div className="glow w-[400px] h-[400px] top-1/2 left-[5%] bg-violet-600/6" />

        <div className="wrap relative z-10 py-24 w-full">
          <motion.p {...up(0)} className="eyebrow mb-5">Systems That Outperform</motion.p>

          <motion.h1 {...up(0.07)} className="text-[clamp(2.8rem,6.5vw,5.8rem)] font-black leading-[1.03] tracking-[-0.03em] text-white mb-6 max-w-4xl">
            Your business is leaking<br />
            <span className="gt">revenue.</span>{" "}
            <span className="text-[#3d4060]">We seal it.</span>
          </motion.h1>

          <motion.p {...up(0.14)} className="text-[17px] text-[#8b8fa8] max-w-xl mb-10 leading-relaxed">
            AI automations, voice agents, and web solutions — engineered around your outcomes, not our deliverables.
          </motion.p>

          <motion.div {...up(0.2)} className="flex flex-wrap gap-4 mb-20">
            <Link href="/contact" className="btn-p">Book a Free Audit</Link>
            <Link href="/revenue-systems" className="btn-s">See Our Systems</Link>
          </motion.div>

          {/* Leaking visual */}
          <motion.div {...up(0.28)} className="card p-6 max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="eyebrow-accent">Your Business</span>
              <span className="text-[11px] font-bold text-red-400/70 uppercase tracking-widest">Leaking Revenue</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Leads", "Follow-up", "Bookings", "24/7 Calls", "WhatsApp", "Conversions"].map((item) => (
                <div key={item} className="card-flat px-3 py-2 text-center">
                  <span className="text-[12px] text-[#8b8fa8]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-white/[0.06] py-4 overflow-hidden bg-surface/40">
        <p className="eyebrow text-center mb-3">Systems Built For</p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="text-[13px] text-[#8b8fa8] px-8 whitespace-nowrap border-r border-white/[0.06] last:border-0">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEMS ── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-14">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white leading-tight">
              You're doing everything right.<br />
              <span className="text-[#3d4060]">But still losing.</span>
            </h2>
            <div className="mt-6">
              <Link href="/revenue-systems" className="btn-s text-[13px] py-2.5 px-5">
                We fix all three. See how →
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <motion.div key={p.n} {...inUp(i * 0.08)} className="card p-7">
                <span className="text-[11px] font-mono text-[#3d4060] block mb-4">{p.n}</span>
                <h3 className="text-white font-bold text-[17px] mb-3 leading-snug">{p.title}</h3>
                <p className="text-[13.5px] text-[#8b8fa8] leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-14">
            <p className="eyebrow mb-4">Revenue Systems</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white leading-tight">
              Three systems.<br />Each solves one expensive problem.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {systems.map((s, i) => (
              <motion.div key={s.n} {...inUp(i * 0.08)}
                className={`card p-7 flex flex-col relative ${s.flagship ? "border-indigo-500/30 bg-gradient-to-b from-indigo-600/8 to-transparent" : ""}`}
                style={s.flagship ? { boxShadow: "0 0 60px rgba(99,102,241,0.08)" } : {}}>
                {s.flagship && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">Flagship</span>
                  </div>
                )}
                <div className="mb-5">
                  <span className="eyebrow-accent block mb-2">{s.n}</span>
                  <h3 className="text-white font-bold text-[20px] mb-1">{s.name}</h3>
                  <p className="text-[13px] text-[#8b8fa8]">{s.tagline}</p>
                </div>
                <div className="mb-5 flex-1">
                  <p className="eyebrow mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[13px] text-[#8b8fa8]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hr mb-4" />
                <p className="text-[11px] text-[#3d4060] mb-4">Best for: {s.bestFor}</p>
                <Link href="/revenue-systems" className="btn-s text-[13px] py-2.5 justify-center">Explore →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 border-b border-white/[0.06] bg-surface/30">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-14 text-center">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white leading-tight">
              From first call to live system.<br />
              <span className="gt">In 2 weeks.</span>
            </h2>
            <p className="text-[14px] text-[#8b8fa8] mt-4">Fixed scope. Fixed price. No surprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {steps.map((s, i) => (
              <motion.div key={s.n} {...inUp(i * 0.07)} className="card p-7 relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-full w-4 h-px bg-gradient-to-r from-indigo-500/25 to-transparent z-10" />
                )}
                <span className="text-[11px] font-mono text-[#3d4060] block mb-4">{s.n}</span>
                <h3 className="text-white font-semibold text-[15px] mb-3 leading-snug">{s.title}</h3>
                <p className="text-[13px] text-[#8b8fa8] leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...inUp(i * 0.07)} className="bg-bg px-6 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black gt leading-none mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="eyebrow">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL SOLUTIONS ── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-14">
            <p className="eyebrow mb-4">Individual Solutions</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white leading-tight">
              Not ready for a full system?<br />
              <span className="text-[#3d4060]">Start with one solution.</span>
            </h2>
            <p className="text-[14px] text-[#8b8fa8] mt-4 max-w-xl">
              Not everything needs a full system. Start with what hurts most. Explore our catalogue of pre-built solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {solutions.map((s, i) => (
              <motion.div key={s.name} {...inUp(i * 0.07)} className="card p-6 flex flex-col">
                <span className="tag mb-4 w-fit">{s.cat}</span>
                <h4 className="text-white font-semibold text-[15px] mb-2">{s.name}</h4>
                <p className="text-[13px] text-[#8b8fa8] leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4">
                  <Link href="/solutions" className="text-[12px] text-indigo-400 hover:text-indigo-300 transition-colors font-medium">View Details →</Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...inUp(0.3)} className="card p-7 border-indigo-500/20 bg-gradient-to-r from-indigo-600/6 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h3 className="text-white font-bold text-[17px] mb-1">Explore All Solutions</h3>
              <p className="text-[13px] text-[#8b8fa8]">View our complete catalogue to find exactly what hurts most.</p>
            </div>
            <Link href="/solutions" className="btn-p flex-shrink-0">View Complete Catalogue</Link>
          </motion.div>

          <p className="text-[11px] text-[#3d4060] mt-4">
            Pricing shown is baseline for build. Custom logic, complex integrations, or high-volume workflows may require custom scoping.
          </p>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 border-b border-white/[0.06] bg-surface/30">
        <div className="wrap">
          <motion.div {...inUp()} className="mb-14">
            <p className="eyebrow mb-4">Why BeyondNine</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white">
              Why work with us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} {...inUp(i * 0.07)} className="card p-7">
                <h3 className="text-white font-bold text-[16px] mb-3">{w.title}</h3>
                <p className="text-[13.5px] text-[#8b8fa8] leading-relaxed">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="wrap max-w-3xl">
          <motion.div {...inUp()} className="mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.025em] text-white">
              Clear answers. No jargon.
            </h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...inUp(i * 0.05)} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[15px] font-semibold text-white pr-4">{f.q}</span>
                  <svg
                    className={`w-4 h-4 text-[#8b8fa8] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[13.5px] text-[#8b8fa8] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24">
        <div className="wrap max-w-3xl text-center">
          <motion.div {...inUp()}>
            <div className="glow w-[500px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/8" />
            <div className="relative z-10">
              <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-black tracking-[-0.03em] text-white leading-tight mb-5">
                Your revenue leak has a fix.<br />
                <span className="gt">Let's find it.</span>
              </h2>
              <p className="text-[15px] text-[#8b8fa8] mb-10 max-w-lg mx-auto leading-relaxed">
                Book a free 30-minute strategy call. We'll show you exactly where you can automate tasks and capture more revenue.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-p">Book Free Audit →</Link>
                <Link href="/revenue-systems" className="btn-s">Explore the Systems →</Link>
              </div>
              <p className="text-[12px] text-[#3d4060] mt-6">No obligation. No pitch. Just clarity.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
