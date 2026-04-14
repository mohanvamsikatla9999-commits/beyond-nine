"use client";
import { useCalendly } from "./CalendlyProvider";

interface Props {
  label?: string;
  className?: string;
  variant?: "primary" | "inverted" | "outline";
}

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BookButton({
  label = "Book Strategy Call",
  className = "",
  variant = "primary",
}: Props) {
  const { openCalendly } = useCalendly();

  const styles: Record<string, string> = {
    primary: "btn-or",
    inverted: "btn-or-inv",
    outline: "btn-ghost",
  };

  return (
    <button
      onClick={openCalendly}
      className={`inline-flex items-center gap-2 font-bold rounded-[12px] transition-all duration-200 cursor-pointer ${styles[variant]} ${className}`}
    >
      {label}
      <ArrowIcon />
    </button>
  );
}
