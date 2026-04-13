"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const inUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const capabilities = [
  {
    n: "01",
    name: "Intelligent Lead Handling",
    desc: "Every inbound lead is captured, scored, and routed without manual intervention. The system identifies intent, qualifies the prospect, and initiates the appropriate response — in seconds.",
    accent: "#6C5CE7",
  },
  {
    n: "02",
    name: "Automated Response Systems",
    desc: "Responses go out the moment a lead engages — regardless of time, volume, or team availability. Consistent, on-brand, and contextually relevant every time.",
    accent: "#00F5D4",
  },
  {
    n: "03",
    name: "Multi-Channel Follow-Up",
    desc: "Prospects are followed up across the channels they actually use — with sequences that adapt based on their behavior and engagement patterns.",
    accent: "#6C5CE7",
  },
  {
    n: "04",
    name: "Workflow Orchestration",
    desc: "Complex business processes are mapped, automated, and connected. Tasks move between systems and people without manual handoffs or coordination overhead.",
    accent: "#00F5D4",
  },
  {
    n: "05",
    name: "System Integrations",
    desc: "Your CRM, calendar, communication tools, and data systems are connected into a unified operating layer — updated automatically, without manual data entry.",
    accent: "#F9C74F",
  },
  {
    n: "06",
    name: "Conversion Environments",
    desc: "Landing pages and web experiences designed with one objective: converting visitors into leads. Every element is intentional. Every word earns its place.",
    accent: "#6C5CE7",
  },
  {
    n: "07",
    name: "Data-Driven Optimization",
    desc: "Systems are monitored continuously. Performance data informs ongoing improvements — so conversion rates, response times, and operational efficiency improve over time.",
    accent: "#00F5D4",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="bg-bg min-h-screen pt-[70px]">
      {/* Header */}
      <section className="relative py-24 grid-cinema overflow-hidden">
        <div className="orb w-[700px] h-[500px] top-0 left-1/2 -translate-x-1/2 bg-[#6C5CE7]/8" />
        <div className="wrap relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="aqua-line mb-6" />
            <p className="label-v mb-4">Capabilities</p>
            <h1 className="d1 text-white mb-6 max-w-3xl">
              Modular capabilities.
              <br />
              <span className="gt-v">Compounding results.</span>
            </h1>
            <p className="body text-[17px] max-w-xl">
              Each capability is a precision-built component. Deploy them individually or combine them into a complete growth infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <motion.div key={c.n} {...inUp(i * 0.06)}
                className="card-cinema p-7 flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.accent}08 0%, transparent 70%)` }} />
                <span className="mono block mb-4 relative z-10">{c.n}</span>
                <h3 className="text-white font-bold text-[16px] mb-3 relative z-10">{c.name}</h3>
                <p className="body-sm flex-1 relative z-10">{c.desc}</p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] relative z-10">
                  <div className="w-6 h-px rounded-full" style={{ background: c.accent }} />
                </div>
              </motion.div>
            ))}

            {/* Integration card */}
            <motion.div {...inUp(capabilities.length * 0.06)}
              className="card-cinema p-7 border-[rgba(108,92,231,0.2)] bg-gradient-to-b from-[#6C5CE7]/5 to-transparent flex flex-col justify-between">
              <div>
                <p className="label-v mb-4">Integration-First</p>
                <h3 className="text-white font-bold text-[16px] mb-3">Works with your existing stack.</h3>
                <p className="body-sm mb-5">
                  We build around what you already have. No rip-and-replace. Every capability integrates with your current tools.
                </p>
              </div>
              <Link href="/contact" className="btn-ghost text-[13px] py-2.5 px-5 w-fit">Discuss your stack</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="wrap max-w-2xl text-center">
          <motion.div {...inUp()}>
            <h2 className="d3 text-white mb-4">Ready to see what applies to your business?</h2>
            <p className="body mb-8">We'll identify which capabilities will have the highest impact on your specific situation.</p>
            <Link href="/contact" className="btn-primary">Request Strategy Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
