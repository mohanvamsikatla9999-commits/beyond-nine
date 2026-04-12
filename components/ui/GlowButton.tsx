"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function GlowButton({ href, children, variant = "primary", className = "" }: GlowButtonProps) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all text-sm font-medium ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden group ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-electric-violet via-neon-indigo to-neon-blue" />
      <span className="absolute inset-0 bg-gradient-to-r from-electric-violet via-neon-indigo to-neon-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
