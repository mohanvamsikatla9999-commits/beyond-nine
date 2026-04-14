import Link from "next/link";
import BookButton from "./BookButton";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] relative overflow-hidden">
      <div className="orb w-[400px] h-[300px] bottom-0 right-0 bg-[rgba(255,106,0,0.07)]" />
      <div className="wrap relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#FF6A00] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[12px]">B9</span>
              </div>
              <span className="font-bold text-[15px] text-white tracking-tight">
                Beyond<span className="text-[#FF6A00]">Nine</span>
              </span>
            </div>
            <p className="t-sm text-[#525254] max-w-[220px] leading-relaxed">
              AI automation systems that capture, respond, and convert — without manual work.
            </p>
          </div>

          <div>
            <p className="t-eye-m text-[#333] mb-5">Pages</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="t-sm text-[#525254] hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="t-eye-m text-[#333] mb-5">Get Started</p>
            <p className="t-sm text-[#525254] mb-5 leading-relaxed">Book a free call. We'll show you exactly what to fix first.</p>
            <BookButton label="Book Free Call" className="text-[13px] py-2.5 px-5" />
          </div>
        </div>

        <div className="hr-dk mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#333]">&copy; {new Date().getFullYear()} Beyond Nine. All rights reserved.</p>
          <p className="text-[12px] text-[#333]">beyondnine.in</p>
        </div>
      </div>
    </footer>
  );
}
