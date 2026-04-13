"use client";
import { createContext, useContext, useState, useCallback } from "react";
import CalendlyModal from "./CalendlyModal";

interface CalendlyCtx {
  openCalendly: () => void;
}

const Ctx = createContext<CalendlyCtx>({ openCalendly: () => {} });

export function useCalendly() {
  return useContext(Ctx);
}

export default function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openCalendly = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <Ctx.Provider value={{ openCalendly }}>
      {children}
      <CalendlyModal open={open} onClose={close} />
    </Ctx.Provider>
  );
}
