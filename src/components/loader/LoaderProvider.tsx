// "use client";

// import React, {
//   createContext,
//   useContext,
//   useMemo,
//   useRef,
//   useState,
//   useEffect,
//   useLayoutEffect,
// } from "react";
// import { GlobalLoader } from "../GlobalLoader";

// type Ctx = {
//   show: () => void;
//   hide: () => void;
//   set: (v: boolean) => void;
//   isOpen: boolean;
// };

// const LoaderCtx = createContext<Ctx | null>(null);

// export function LoaderProvider({ children }: { children: React.ReactNode }) {
//   // ✅ стартуем с true — чтобы после гидрации красивый loader уже был включён
//   const [isOpen, setIsOpen] = useState(true);
//   const bootRef = useRef(true);

//   // ✅ СРАЗУ на гидрации: скрываем SSR boot-loader (без вспышек)
//   useLayoutEffect(() => {
//     const el = document.getElementById("boot-loader");
//     if (!el) return;

//     // плавно убираем
//     el.style.transition = "opacity 260ms ease";
//     el.style.opacity = "0";
//     el.style.pointerEvents = "none";

//     const t = window.setTimeout(() => {
//       el.remove(); // можно remove, потому что это SSR-статичный DOM
//     }, 300);

//     return () => window.clearTimeout(t);
//   }, []);

//   // ✅ страховка: если ни одна секция не вызовет hide — не зависаем
//   useEffect(() => {
//     if (!bootRef.current) return;
//     const t = window.setTimeout(() => setIsOpen(false), 4500);
//     return () => window.clearTimeout(t);
//   }, []);

//   const value = useMemo<Ctx>(
//     () => ({
//       isOpen,
//       show: () => setIsOpen(true),
//       hide: () => {
//         bootRef.current = false;
//         setIsOpen(false);
//       },
//       set: (v) => setIsOpen(v),
//     }),
//     [isOpen],
//   );

//   return (
//     <LoaderCtx.Provider value={value}>
//       {children}
//       <GlobalLoader open={isOpen} />
//     </LoaderCtx.Provider>
//   );
// }

// export function useGlobalLoader() {
//   const ctx = useContext(LoaderCtx);
//   if (!ctx)
//     throw new Error("useGlobalLoader must be used inside LoaderProvider");
//   return ctx;
// }

"use client";

import React, {
  createContext,
  useContext,
  useMemo,
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
  const [isOpen, setIsOpen] = useState(true); // ✅ стартуем с true

  // страховка (если вдруг не вызвали hide)
  useEffect(() => {
    const t = window.setTimeout(() => setIsOpen(false), 500);
    return () => window.clearTimeout(t);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      isOpen,
      show: () => setIsOpen(true),
      hide: () => setIsOpen(false),
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