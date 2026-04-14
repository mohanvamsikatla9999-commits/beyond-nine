"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BookButton from "./BookButton";

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
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled ? "bg-white/95 backdrop-blur-2xl border-b border-[#E3E3E0] shadow-[0_1px_16px_rgba(0,0,0,0.06)]" : "bg-white/70 backdrop-blur-xl"
    }`}>
      <div className="wrap">
        <div className="h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 rounded-xl bg-[#FF6A00]" />
              <div className="absolute inset-0 rounded-xl bg-[#FF6A00] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-400" />
              <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-black text-[12px] tracking-tight">B9</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-[#0A0A0B]">
              Beyond<span className="text-[#FF6A00]">Nine</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[13.5px] font-medium transition-colors duration-200 ${
                  pathname === l.href ? "text-[#FF6A00]" : "text-[#525254] hover:text-[#0A0A0B]"
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-ghost text-[13px] py-2.5 px-5">Contact</Link>
            <BookButton label="Book Free Call" className="text-[13px] py-2.5 px-5" />
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-[#0A0A0B] transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[#0A0A0B] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[#0A0A0B] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-white border-b border-[#E3E3E0]">
            <div className="wrap py-4 flex flex-col gap-1">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href}
                  className={`py-3 px-3 rounded-xl text-[13.5px] font-medium transition-colors ${
                    pathname === l.href ? "text-[#FF6A00] bg-[rgba(255,106,0,0.06)]" : "text-[#525254] hover:text-[#0A0A0B]"
                  }`}>
                  {l.label}
                </Link>
              ))}
              <BookButton label="Book Free Call" className="mt-2 justify-center py-3 text-[13px] w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
