"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ open, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  /* Load Calendly script once globally */
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly"]');
    if (existing) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, []);

  /* Init widget whenever modal opens and script is ready */
  useEffect(() => {
    if (!open || !scriptReady || !containerRef.current) return;

    // Clear previous render
    containerRef.current.innerHTML = "";

    const win = window as any;
    if (win.Calendly) {
      win.Calendly.initInlineWidget({
        url: "https://calendly.com/mohanvamsikatla9999/30min?hide_gdpr_banner=1&primary_color=ff6a00",
        parentElement: containerRef.current,
        prefill: {},
        utm: {},
      });
    }
  }, [open, scriptReady]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
              style={{ height: "min(90vh, 780px)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 py-4 border-b border-[#E5E5E3] flex-shrink-0">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6A00] mb-0.5">
                    Free · 30 Minutes · No Obligation
                  </p>
                  <h2 className="text-[17px] font-bold text-[#0B0B0C] tracking-tight">
                    Book Your Strategy Call
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-[#F8F8F8] hover:bg-[#EFEFEF] flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4 text-[#5A5A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Calendly container — Calendly.initInlineWidget renders here */}
              <div ref={containerRef} className="flex-1 w-full overflow-hidden" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
