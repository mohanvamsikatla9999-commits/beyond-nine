"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";

const iv = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

const projects = [
  {
    id: "kaveri-clinic",
    title: "Kaveri Clinic & Health Services",
    tagline: "Premium clinic website for Dr. Varshith — AIIMS Delhi Gold Medalist",
    category: "Healthcare · Web Design",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description:
      "A world-class digital presence for a neighborhood clinic. Built with a five-star private hospital aesthetic — Playfair Display typography, deep navy + dark gold design system, glassmorphism appointment card, count-up stats, auto-scrolling testimonials carousel, and full appointment booking with form validation.",
    highlights: [
      "Full-viewport hero with grain texture & staggered animations",
      "Glassmorphism appointment booking form with inline validation",
      "Auto-scrolling testimonials carousel",
      "Count-up stat counters on scroll",
      "Embedded Google Maps + WhatsApp floating CTA",
      "Mobile-first, fully responsive across all breakpoints",
    ],
    liveUrl: "https://kaveri-clinic.vercel.app",
    githubUrl: "https://github.com/mohanvamsikatla9999-commits/kaveri-clinic",
    accentColor: "#B8860B",
    bgFrom: "#0A1628",
    bgTo: "#162040",
    icon: "🏥",
    status: "Live",
  },
  {
    id: "kammani-vindhu",
    title: "Kammani Vindhu Restaurant",
    tagline: "Bold, immersive website for an authentic Indian restaurant — a feast for the eyes",
    category: "F&B · Web Design",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description:
      "A world-class restaurant landing page inspired by premium editorial food design. Features a deep spice-dark color system, orbiting food emoji hero, auto-scrolling marquee, full filterable menu with 27 dishes, house specialties showcase, animated gallery grid, testimonials carousel, table reservation form with validation, and a dark-themed map contact section.",
    highlights: [
      "Immersive hero with orbiting dish plates & floating badge cards",
      "Auto-scrolling spice marquee banner",
      "Full filterable menu — 27 dishes across 7 categories",
      "House Specialties section with origin stories",
      "Animated emoji gallery grid with quote strip",
      "Table reservation form with guest selector & time slots",
    ],
    liveUrl: "https://kammani-vindhu.vercel.app",
    githubUrl: "https://github.com/mohanvamsikatla9999-commits/kammani-vindhu",
    accentColor: "#C8410A",
    bgFrom: "#1A0A00",
    bgTo: "#3D1F06",
    icon: "🍛",
    status: "Live",
  },
];

const stats = [
  { v: "2", l: "Projects Delivered" },
  { v: "100%", l: "Client Satisfaction" },
  { v: "< 7d", l: "Avg. Delivery Time" },
  { v: "∞", l: "Revisions Until Perfect" },
];

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function PortfolioPage() {
  return (
    <div className="bg-w overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-[68px] pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(255,106,0,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="orb w-[500px] h-[400px] top-0 right-[-100px] bg-[rgba(255,106,0,0.06)]" />

        <div className="wrap relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(255,106,0,0.08)] border border-[rgba(255,106,0,0.2)] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="t-eye">Our Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.07, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="t-hero text-[#0A0A0B] mb-6"
          >
            Built for <span className="gt">results.</span>
            <br />
            Designed to <span className="gt">impress.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="t-lead max-w-[520px] mx-auto mb-10"
          >
            Every project we ship is crafted with premium design, clean code,
            and a relentless focus on the end user.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E3E3E0] border border-[#E3E3E0] rounded-2xl overflow-hidden mt-4"
          >
            {stats.map((s) => (
              <div key={s.l} className="bg-white px-8 py-5 text-center">
                <p className="text-[1.6rem] font-black text-[#FF6A00] leading-none mb-1">{s.v}</p>
                <p className="text-[11px] text-[#9A9A9C]">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="h-16 bg-gradient-to-b from-transparent to-[#F8F8F6]" />
      </section>

      {/* ── PROJECTS ── */}
      <section className="bg-[#F8F8F6] pb-24">
        <div className="wrap">

          {projects.map((project, i) => (
            <motion.div key={project.id} {...iv(i * 0.1)} className="mb-10">
              <TiltCard intensity={3} className="card overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0">

                  {/* Left: Visual mockup */}
                  <div
                    className="relative min-h-[360px] lg:min-h-[480px] flex items-center justify-center p-10 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.bgFrom} 0%, ${project.bgTo} 100%)` }}
                  >
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Glow */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                      style={{ background: project.accentColor }}
                    />

                    {/* Mockup card */}
                    <div className="relative z-10 w-full max-w-sm">
                      {/* Browser chrome */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-t-xl border border-white/10 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          {["#ff5f57","#febc2e","#28c840"].map(c => (
                            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                          ))}
                        </div>
                        <div className="flex-1 mx-3 bg-white/10 rounded-md px-3 py-1">
                          <span className="text-white/50 text-[10px]">kavericlinic.in</span>
                        </div>
                      </div>

                      {/* Screen content */}
                      <div className="bg-white/5 backdrop-blur-sm border border-t-0 border-white/10 rounded-b-xl p-5 space-y-3">
                        {/* Nav mockup */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: project.accentColor }}>
                              <span className="text-white text-[8px] font-bold">K</span>
                            </div>
                            <div className="w-16 h-1.5 rounded-full bg-white/20" />
                          </div>
                          <div className="w-16 h-5 rounded-md" style={{ background: project.accentColor + "99" }} />
                        </div>

                        {/* Hero text mockup */}
                        <div className="pt-2">
                          <div className="w-3/4 h-3 rounded-full bg-white/30 mb-2" />
                          <div className="w-1/2 h-3 rounded-full mb-4" style={{ background: project.accentColor + "80" }} />
                          <div className="w-full h-1.5 rounded-full bg-white/15 mb-1.5" />
                          <div className="w-5/6 h-1.5 rounded-full bg-white/15 mb-4" />
                          <div className="flex gap-2">
                            <div className="h-6 w-20 rounded-md" style={{ background: project.accentColor }} />
                            <div className="h-6 w-20 rounded-md bg-white/10 border border-white/20" />
                          </div>
                        </div>

                        {/* Cards mockup */}
                        <div className="grid grid-cols-3 gap-1.5 pt-1">
                          {[...Array(6)].map((_, j) => (
                            <div key={j} className="h-8 rounded-lg bg-white/8 border border-white/10" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-300 text-[10px] font-semibold">{project.status}</span>
                    </div>

                    {/* Big icon */}
                    <div className="absolute bottom-5 left-5 text-4xl opacity-20">{project.icon}</div>
                  </div>

                  {/* Right: Info */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <div className="flex items-center gap-3 mb-5">
                        <span className="t-eye">{project.category}</span>
                      </div>

                      {/* Title */}
                      <h2 className="t-h3 mb-2">{project.title}</h2>
                      <p className="t-sm mb-5 text-[#525254]">{project.tagline}</p>

                      {/* Accent bar */}
                      <div className="o-bar mb-6" />

                      {/* Description */}
                      <p className="t-body mb-7 leading-relaxed">{project.description}</p>

                      {/* Highlights */}
                      <div className="space-y-2.5 mb-8">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-3">
                            <div className="ck mt-0.5 flex-shrink-0">
                              <svg className="w-3 h-3 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="t-sm text-[#525254]">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#F8F8F6] border border-[#E3E3E0] rounded-full text-[11px] font-semibold text-[#525254]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-[#E3E3E0]">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-or text-[13px] py-2.5 px-5 gap-2"
                      >
                        <ExternalIcon /> View Live Site
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-[13px] py-2.5 px-5 gap-2"
                      >
                        <GithubIcon /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* More coming soon */}
          <motion.div {...iv(0.2)}>
            <div className="card-off border-dashed border-2 border-[#E3E3E0] rounded-2xl p-12 text-center">
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,106,0,0.08)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="t-eye mb-2">More Coming Soon</p>
              <h3 className="t-h4 text-[#0A0A0B] mb-2">Your project could be next</h3>
              <p className="t-sm max-w-xs mx-auto mb-7">
                We're always building. If you need a premium digital product, let's talk.
              </p>
              <Link href="/contact" className="btn-or text-[13px] py-2.5 px-6 gap-2">
                Start a Project <Arrow />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden">
        <div className="orb w-[400px] h-[300px] top-0 right-0 bg-[rgba(255,106,0,0.08)]" />
        <div className="wrap relative z-10 py-20 text-center max-w-2xl mx-auto">
          <motion.div {...iv()}>
            <p className="t-eye mb-4">Work With Us</p>
            <h2 className="t-h2 text-white mb-5">
              Need something this<br />
              <span className="gt-dk">good for your business?</span>
            </h2>
            <p className="t-lead text-[#525254] mb-10 max-w-md mx-auto">
              We build premium digital products — fast, clean, and crafted to convert.
            </p>
            <Link href="/contact" className="btn-or text-[15px] py-4 px-10 gap-2">
              Let's Build Together <Arrow />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
