"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ open, onClose }: Props) {
  const loaded = useRef(false);

  /* Load Calendly widget script once */
  useEffect(() => {
    if (loaded.current) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    loaded.current = true;
  }, []);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
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
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              style={{ maxHeight: "90vh" }}>

              {/* Header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-[#E5E5E3]">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF6A00] mb-0.5">
                    Free Strategy Call
                  </p>
                  <h2 className="text-[18px] font-bold text-[#0B0B0C] tracking-tight">
                    Book Your 30-Minute Call
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-[#F8F8F8] hover:bg-[#F0F0F0] flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4 text-[#5A5A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Calendly embed */}
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/mohanvamsikatla9999/30min?hide_gdpr_banner=1&primary_color=ff6a00"
                style={{ minWidth: "320px", height: "660px" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
