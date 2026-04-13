import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A00] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[11px]">B9</span>
              </div>
              <span className="font-bold text-[15px] tracking-tight">
                Beyond<span className="text-[#FF6A00]">Nine</span>
              </span>
            </div>
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed max-w-[240px]">
              Growth systems that capture, respond, and convert — without manual effort.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3d3d3d] mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#6B6B6B] hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3d3d3d] mb-5">Get Started</p>
            <p className="text-[13px] text-[#6B6B6B] mb-5 leading-relaxed">
              Book a free strategy call. We'll show you exactly what to fix first.
            </p>
            <Link href="/contact" className="btn-orange text-[13px] py-2.5 px-5">Book Strategy Call</Link>
          </div>
        </div>

        <div className="h-px bg-[#1A1A1A] mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#3d3d3d]">&copy; {new Date().getFullYear()} Beyond Nine. All rights reserved.</p>
          <p className="text-[12px] text-[#3d3d3d]">beyondnine.in</p>
        </div>
      </div>
    </footer>
  );
}
