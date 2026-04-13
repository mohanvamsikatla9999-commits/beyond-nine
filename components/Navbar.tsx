"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/96 backdrop-blur-xl border-b border-[#E5E5E3] shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "bg-white/80 backdrop-blur-md"
    }`}>
      <div className="wrap">
        <div className="h-[66px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6A00] flex items-center justify-center flex-shrink-0 transition-all group-hover:shadow-[0_4px_14px_rgba(255,106,0,0.4)]">
              <span className="text-white font-black text-[11px] tracking-tight">B9</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-[#0B0B0C]">
              Beyond<span className="text-[#FF6A00]">Nine</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[13.5px] font-medium transition-colors ${
                  pathname === l.href ? "text-[#FF6A00]" : "text-[#5A5A5A] hover:text-[#0B0B0C]"
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-line text-[13px] py-2.5 px-5">Contact</Link>
            <Link href="/contact" className="btn-cta text-[13px] py-2.5 px-5">Book Free Call</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-[#0B0B0C] transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[#0B0B0C] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[#0B0B0C] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-white border-b border-[#E5E5E3]">
            <div className="wrap py-4 flex flex-col gap-1">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href}
                  className={`py-3 px-3 rounded-xl text-[13.5px] font-medium transition-colors ${
                    pathname === l.href ? "text-[#FF6A00] bg-[#FFF4EE]" : "text-[#5A5A5A] hover:text-[#0B0B0C] hover:bg-[#F8F8F8]"
                  }`}>
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-cta mt-2 justify-center py-3 text-[13px]">Book Free Call</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
