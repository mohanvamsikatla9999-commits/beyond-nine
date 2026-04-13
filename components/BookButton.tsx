"use client";
import { useCalendly } from "./CalendlyProvider";

interface Props {
  label?: string;
  className?: string;
  variant?: "primary" | "dark" | "outline";
}

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BookButton({ label = "Book Strategy Call", className = "", variant = "primary" }: Props) {
  const { openCalendly } = useCalendly();

  const base = "inline-flex items-center gap-2 font-bold rounded-[10px] transition-all duration-200 cursor-pointer";

  const styles = {
    primary: "btn-cta",
    dark: "btn-cta-dark",
    outline: "btn-line",
  };

  return (
    <button onClick={openCalendly} className={`${base} ${styles[variant]} ${className}`}>
      {label}
      {variant !== "outline" && <ArrowIcon />}
    </button>
  );
}
