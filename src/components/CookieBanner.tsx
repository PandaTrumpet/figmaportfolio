// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { Link } from "@/i18n/navigation";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
// const STORAGE_KEY = "savondev-cookie-consent";

// export function CookieBanner() {

// const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   const timer = window.setTimeout(() => {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       if (!saved) {
//         setIsVisible(true);
//       }
//     } catch {
//       setIsVisible(true);
//     }
//   }, 0);

//   return () => window.clearTimeout(timer);
// }, []);

//   const saveConsent = (accepted: boolean) => {
//     try {
//       localStorage.setItem(
//         STORAGE_KEY,
//         JSON.stringify({
//           accepted,
//           essential: true,
//           analytics: accepted,
//           timestamp: new Date().toISOString(),
//         }),
//       );
//     } catch {}

//     setIsVisible(false);
//   };

// //   if (!mounted) return null;

//   return (
//     <AnimatePresence>
//       {isVisible ? (
//         <motion.aside
//           initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           exit={{ opacity: 0, y: 16, filter: "blur(8px)" }}
//           transition={{ duration: 0.55, ease: EASE }}
//           role="dialog"
//           aria-live="polite"
//           aria-label="Cookie consent"
//           className="fixed inset-x-0 bottom-4 z-[120] px-4 sm:bottom-6 sm:px-6"
//         >
//           <div
//             className="
//               relative mx-auto max-w-5xl overflow-hidden rounded-[28px]
//               border border-slate-700/70
//               bg-[rgba(5,8,20,0.94)]
//               shadow-[0_20px_80px_rgba(2,6,23,0.72)]
//               backdrop-blur-2xl
//             "
//           >
//             <div
//               aria-hidden="true"
//               className="
//                 pointer-events-none absolute inset-0
//                 bg-[radial-gradient(circle_at_top_left,rgba(58,123,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_34%)]
//               "
//             />

//             <div
//               aria-hidden="true"
//               className="
//                 pointer-events-none absolute inset-x-0 top-0 h-px
//                 bg-linear-to-r from-transparent via-cyan-300/40 to-transparent
//               "
//             />

//             <div className="relative flex flex-col gap-5 px-5 py-5 sm:px-7 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
//               <div className="max-w-3xl">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
//                   Cookies
//                 </p>

//                 <p className="text-sm leading-6 text-slate-300 sm:text-[15px]">
//                   We use cookies to improve your experience, analyze traffic,
//                   and personalize content. You can accept all cookies or keep
//                   only essential ones. Read more in our{" "}
//                   <Link
//                     href="/privacy"
//                     className="
//                       font-medium text-cyan-200 transition-all duration-300
//                       hover:text-cyan-200
//                       hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.6)]
//                     "
//                   >
//                     Privacy Policy
//                   </Link>
//                   .
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
//                 <button
//                   type="button"
//                   onClick={() => saveConsent(false)}
//                   className="
//                     inline-flex min-h-[46px] items-center justify-center rounded-full
//                     border border-slate-700/80
//                     bg-slate-900/80
//                     px-5 text-sm font-medium text-slate-200
//                     transition-all duration-300
//                     hover:border-cyan-300/40
//                     hover:bg-slate-800/90
//                     hover:text-cyan-200
//                   "
//                 >
//                   Only essential
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => saveConsent(true)}
//                   className="
//                     inline-flex min-h-[46px] items-center justify-center rounded-full
//                     bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                     px-6 text-sm font-semibold text-[#050816]
//                     shadow-[0_0_30px_rgba(76,194,255,0.35)]
//                     transition-all duration-300
//                     hover:scale-[1.02]
//                     hover:shadow-[0_0_42px_rgba(76,194,255,0.5)]
//                   "
//                 >
//                   Accept all
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.aside>
//       ) : null}
//     </AnimatePresence>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const STORAGE_KEY = "savondev-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("cookie");
  const locale = useLocale();
  const isRTL = locale === "he";

//   useEffect(() => {
//     const timer = window.setTimeout(() => {
//       try {
//         const saved = localStorage.getItem(STORAGE_KEY);
//         if (!saved) {
//           setIsVisible(true);
//         }
//       } catch {
//         setIsVisible(true);
//       }
//     }, 0);

//     return () => window.clearTimeout(timer);
//   }, []);
useEffect(() => {
  const timer = window.setTimeout(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, 2000);

  return () => window.clearTimeout(timer);
}, []);
  const saveConsent = (accepted: boolean) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accepted,
          essential: true,
          analytics: accepted,
          timestamp: new Date().toISOString(),
        }),
      );
    } catch {}

    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          initial={{ opacity: 0, x: isRTL ? -80 : 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: isRTL ? -60 : 60, filter: "blur(6px)" }}
          transition={{ duration: 0.65, ease: EASE }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className={`fixed bottom-6 z-[120] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-auto ${
            isRTL ? "left-4 sm:left-6" : "right-4 sm:right-6"
          }`}
        >
          <div
            className="
    relative w-full lg:w-[860px] overflow-hidden rounded-[28px]
    border border-slate-700/70
    bg-[rgba(5,8,20,0.96)]
    shadow-[0_20px_80px_rgba(2,6,23,0.78)]
    backdrop-blur-2xl
  "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(58,123,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_34%)]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-0 top-0 h-px
                bg-linear-to-r from-transparent via-cyan-300/40 to-transparent
              "
            />

            <div
              dir={isRTL ? "rtl" : "ltr"}
              className="
    relative grid gap-6
    px-5 py-5
    sm:px-7 sm:py-6
    lg:grid-cols-[minmax(0,1.2fr)_auto]
    lg:items-center
    lg:gap-8
  "
            >
              <div className="min-w-0 max-w-[460px]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {t("title")}
                </p>

                <p className="text-sm leading-6 text-slate-300 sm:text-[15px]">
                  {t("text")}{" "}
                  <Link
                    href="/privacy"
                    className="
                      font-medium text-cyan-200 transition-all duration-300
                      hover:text-cyan-200
                      hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.6)]
                    "
                  >
                    {t("policy")}
                  </Link>
                  .
                </p>
              </div>

              <div
                className="
    flex flex-wrap items-center gap-3
    lg:max-w-[420px]
    lg:justify-end
  "
              >
                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="
                  cursor-pointer
      inline-flex min-h-[46px] items-center justify-center rounded-full
      border border-slate-700/80
      bg-slate-900/80
      px-4 lg:px-5 text-sm font-medium text-slate-200
      transition-all duration-300
      hover:border-red-400/40
      hover:bg-slate-800/90
      hover:text-red-300
    "
                >
                  {t("reject")}
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className=" cursor-pointer
      inline-flex min-h-[46px] items-center justify-center rounded-full
      border border-slate-700/80
      bg-slate-900/80
      px-4 lg:px-5 text-sm font-medium text-slate-200
      transition-all duration-300
      hover:border-cyan-300/40
      hover:bg-slate-800/90
      hover:text-cyan-200
    "
                >
                  {t("essential")}
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(true)}
                  className=" cursor-pointer
      inline-flex min-h-[46px] items-center justify-center rounded-full
      bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
     px-5 lg:px-6 text-sm font-semibold text-[#050816]
      shadow-[0_0_30px_rgba(76,194,255,0.35)]
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_42px_rgba(76,194,255,0.5)]
    "
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}