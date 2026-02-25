
"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { GlobalLoader } from "../GlobalLoader";


type Ctx = {
  show: () => void;
  hide: () => void;
  set: (v: boolean) => void;
  isOpen: boolean;
};

const LoaderCtx = createContext<Ctx | null>(null);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  // ✅ ВАЖНО: стартуем с true, чтобы loader был до контента
  const [isOpen, setIsOpen] = useState(true);
  const bootRef = useRef(true);

  // ✅ страховка: если страница без Hero — не зависаем навсегда
  useEffect(() => {
    if (!bootRef.current) return;
    const t = window.setTimeout(() => setIsOpen(false), 4000);
    return () => window.clearTimeout(t);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      isOpen,
      show: () => setIsOpen(true),
      hide: () => {
        bootRef.current = false;
        setIsOpen(false);
      },
      set: (v) => setIsOpen(v),
    }),
    [isOpen],
  );

  return (
    <LoaderCtx.Provider value={value}>
      {children}
      <GlobalLoader open={isOpen} />
    </LoaderCtx.Provider>
  );
}

export function useGlobalLoader() {
  const ctx = useContext(LoaderCtx);
  if (!ctx)
    throw new Error("useGlobalLoader must be used inside LoaderProvider");
  return ctx;
}