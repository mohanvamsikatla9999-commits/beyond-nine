import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0B0C10]">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#6C5CE7] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[12px]">B9</span>
              </div>
              <span className="font-bold text-[15px] text-white tracking-tight">BEYOND<span className="gt-v">NINE</span></span>
            </div>
            <p className="body-sm max-w-[240px] leading-relaxed">
              Intelligent systems that capture, respond, and convert — without manual effort.
            </p>
          </div>

          <div>
            <p className="label mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/systems", label: "Systems" },
                { href: "/capabilities", label: "Capabilities" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#7B7D8E] hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-5">Start Here</p>
            <p className="body-sm mb-5 max-w-[220px]">
              One conversation. We'll identify exactly where your business is losing momentum.
            </p>
            <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">Request Strategy Call</Link>
          </div>
        </div>

        <div className="hr mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#2E3044]">&copy; {new Date().getFullYear()} Beyond Nine. All rights reserved.</p>
          <p className="text-[12px] text-[#2E3044]">Systems over effort. Outcomes over activity.</p>
        </div>
      </div>
    </footer>
  );
}
