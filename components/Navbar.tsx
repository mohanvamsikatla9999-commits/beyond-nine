"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/revenue-systems", label: "Revenue Systems" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "bg-bg/85 backdrop-blur-2xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="wrap">
        <div className="h-[66px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-black text-[11px] tracking-tight">B9</span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-white">
              BEYOND<span className="gt">NINE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.slice(0, 3).map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[13.5px] transition-colors duration-200 ${pathname === l.href ? "text-white font-medium" : "text-[#8b8fa8] hover:text-white"}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-s text-[13px] py-2.5 px-5">Contact</Link>
            <Link href="/contact" className="btn-p text-[13px] py-2.5 px-5">Book Free Audit</Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-[#8b8fa8] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-[#8b8fa8] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-[#8b8fa8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-2xl border-b border-white/[0.06]">
            <div className="wrap py-4 flex flex-col gap-1">
              {[{ href: "/", label: "Home" }, ...links].map((l) => (
                <Link key={l.href} href={l.href}
                  className={`py-3 px-3 rounded-xl text-[13.5px] transition-colors ${pathname === l.href ? "text-white bg-white/[0.05] font-medium" : "text-[#8b8fa8] hover:text-white"}`}>
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-p mt-2 justify-center py-3 text-[13px]">Book Free Audit</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
