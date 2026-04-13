"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/systems", label: "Systems" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#0B0C10]/80 backdrop-blur-2xl border-b border-white/[0.05]" : "bg-transparent"
    }`}>
      <div className="wrap">
        <div className="h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-xl bg-[#6C5CE7]" />
              <div className="absolute inset-0 rounded-xl bg-[#6C5CE7] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-black text-[12px] tracking-tight">B9</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-white">
              BEYOND<span className="gt-v">NINE</span>
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[13.5px] transition-colors duration-300 ${
                  pathname === l.href ? "text-white font-medium" : "text-[#7B7D8E] hover:text-white"
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-ghost text-[13px] py-2.5 px-5">Contact</Link>
            <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">Strategy Call</Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-[#7B7D8E] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-[#7B7D8E] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-[#7B7D8E] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0B0C10]/95 backdrop-blur-2xl border-b border-white/[0.05]"
          >
            <div className="wrap py-5 flex flex-col gap-1">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href}
                  className={`py-3 px-4 rounded-xl text-[13.5px] transition-colors ${
                    pathname === l.href ? "text-white bg-white/[0.04] font-medium" : "text-[#7B7D8E] hover:text-white"
                  }`}>
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3 justify-center py-3 text-[13px]">
                Request Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
