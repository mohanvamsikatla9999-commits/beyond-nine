import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[11px]">B9</span>
              </div>
              <span className="font-bold text-[15px] text-white tracking-tight">BEYOND<span className="gt">NINE</span></span>
            </div>
            <p className="text-[13px] text-[#8b8fa8] leading-relaxed max-w-[240px]">
              AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables.
            </p>
            <p className="text-[12px] text-[#3d4060] mt-4">beyondnine.in</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/revenue-systems", label: "Revenue Systems" },
                { href: "/solutions", label: "Solutions" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#8b8fa8] hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Get Started</p>
            <p className="text-[13px] text-[#8b8fa8] mb-5 leading-relaxed">
              Start with a free 30-minute business audit. We'll show you exactly where you're losing money.
            </p>
            <Link href="/contact" className="btn-p text-[13px] py-2.5 px-5">Book Free Audit</Link>
          </div>
        </div>

        <div className="hr mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#3d4060]">© {new Date().getFullYear()} BeyondNine. All rights reserved.</p>
          <p className="text-[12px] text-[#3d4060]">AI Solutions & Web Development · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
