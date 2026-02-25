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

// "use client";

// import React, {
//   createContext,
//   useContext,
//   useMemo,
//   useState,
//   useEffect,
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
//   const [isOpen, setIsOpen] = useState(true); // ✅ стартуем с true

//   // страховка (если вдруг не вызвали hide)
//   useEffect(() => {
//     const t = window.setTimeout(() => setIsOpen(false), 5000);
//     return () => window.clearTimeout(t);
//   }, []);

//   const value = useMemo<Ctx>(
//     () => ({
//       isOpen,
//       show: () => setIsOpen(true),
//       hide: () => setIsOpen(false),
//       set: (v) => setIsOpen(v),
//     }),
//     [isOpen],
//   );

//   return (
//     <LoaderCtx.Provider value={value}>
//       <GlobalLoader open={isOpen} />
//       {children}
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

import React, { createContext, useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { GlobalLoader } from "../GlobalLoader";

type Ctx = {
  isOpen: boolean;
  hide: () => void;
  show: () => void;
  set: (v: boolean) => void;
};

const LoaderCtx = createContext<Ctx | null>(null);

function InnerLoaderProvider({ children }: { children: React.ReactNode }) {
  // ✅ стартуем с "фон НЕ готов" => лоадер открыт
  const [bgReady, setBgReady] = useState(false);

  const isOpen = !bgReady;

  const value = useMemo<Ctx>(
    () => ({
      isOpen,
      hide: () => setBgReady(true),
      show: () => setBgReady(false),
      set: (v) => setBgReady(!v ? false : true), // set(true)=готов, set(false)=не готов
    }),
    [isOpen],
  );

  return (
    <LoaderCtx.Provider value={value}>
      <GlobalLoader open={isOpen} />
      {children}
    </LoaderCtx.Provider>
  );
}

export function     LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ ключ меняется => InnerLoaderProvider перемонтируется => bgReady снова false
  return <InnerLoaderProvider key={pathname}>{children}</InnerLoaderProvider>;
}

export function useGlobalLoader() {
  const ctx = useContext(LoaderCtx);
  if (!ctx)
    throw new Error("useGlobalLoader must be used inside LoaderProvider");
  return ctx;
}