// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { useLocale } from "next-intl";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "./Layout/PageContainer";
// import { useTranslations } from "next-intl";
// // import { useGlobalLoader } from "./loader/LoaderProvider";

// import { GlobalLoaderInline } from "@/src/components/loader/GlobalLoaderInline";

// export function Hero() {
//   const [scrollY, setScrollY] = useState(0);
//   const reduce = useReducedMotion();
//   const t = useTranslations("hero");
//     // const { hide } = useGlobalLoader();
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const locale = useLocale();
//    const [bgReady, setBgReady] = useState(false);

//   return (
//     <section
//       id="hero"
//       className="
//         relative min-h-[100svh] flex items-center
//         overflow-visible text-slate-100

//         pt-22 pb-10
//         md:pt-28 md:pb-14
//         lg:pt-30 lg:pb-16
//       "
//     >
//       <AnimatePresence>
//         {!bgReady && (
//           <motion.div
//             className="absolute inset-0 z-[50]"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <GlobalLoaderInline open />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1643576780112-d390f5de9241?q=80&w=1178&auto=format&fit=crop"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//             // onLoad={() => hide()} // ✅ когда реально загрузилось
//             // onError={() => hide()}

//             onLoadingComplete={() => setBgReady(true)}
//             onError={() => setBgReady(true)}
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer>
//         <div className="relative z-10 w-full flex flex-col items-center text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               transform: `translateY(${scrollY * 0.15}px)`,
//               willChange: "transform",
//             }}
//             className="flex flex-col items-center"
//           >
//             {/* Accent Line */}

//             {/* Title */}
//             <h1
//               className="
//                 font-semibold leading-[0.98]
//                 mb-6 md:mb-8
//                 text-balance

//                 max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch]

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               Сайты и автоматизация, которые приводят клиентов
//               {/* {t("title")} */}
//             </h1>

//             {/* Subtitle (ярче) */}
//             <p
//               className="
//               leading-relaxed
// mb-10 md:mb-12

// text-white

// max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

// text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               Мы создаём сайты с интеграцией WhatsApp, CRM и AI-инструментов,
//               чтобы ваш бизнес получал заявки, отвечал быстрее и тратил меньше
//               времени на рутину.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link href={`/${locale}/contact#contact-form`} scroll>
//                 <motion.span
//                   className="
//             relative group inline-flex items-center justify-center
//             overflow-hidden rounded-full
//             px-10 py-3.5 md:px-12 md:py-4
//             text-sm md:text-base font-medium
//             text-[#050816]
//             shadow-[0_0_40px_rgba(76,194,255,0.55)]
//             hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//             transition-shadow
//             cursor-pointer
//           "
//                   whileHover={reduce ? undefined : { scale: 1.03 }}
//                   whileTap={reduce ? undefined : { scale: 0.97 }}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//                   <span className="relative z-10">Обсудить задачу </span>
//                   <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </motion.span>
//               </Link>
//               {/* Secondary */}
//               <motion.a
//                 href="#process"
//                 className="
//                   relative group inline-flex items-center justify-center gap-3
//                   px-8 py-5 rounded-full font-medium
//                   text-[#F5EFE7]
//                   backdrop-blur-sm
//                   transition-all
//                 "
//                 whileHover={reduce ? undefined : { scale: 1.03 }}
//                 whileTap={reduce ? undefined : { scale: 0.97 }}
//               >
//                 <span
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full p-[1px]
//                     bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//                   "
//                 >
//                   <span className="block h-full w-full rounded-full bg-[#050608]" />
//                 </span>

//                 <span className="relative z-10">How it works</span>
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { PageContainer } from "./Layout/PageContainer";
import { GlobalLoaderInline } from "@/src/components/loader/GlobalLoaderInline";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [bgReady, setBgReady] = useState(false);

  const reduce = useReducedMotion();
  const t = useTranslations("hero");
  const locale = useLocale();

  const titleId = useId();
  const descId = useId();

  const isRTL = locale === "he";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Локализованный текст для WhatsApp/контакта можно будет использовать позже,
  // но тут мы оставляем просто переход на форму.
  const contactHref = useMemo(
    () => `/${locale}/contact#contact-form`,
    [locale],
  );

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="
        relative min-h-[100svh] flex items-center
        overflow-visible text-slate-100

        pt-22 pb-10
        md:pt-28 md:pb-14
        lg:pt-30 lg:pb-16
      "
    >
      {/* Skip link (a11y/SEO best practice) */}
      <a
        href="#main"
        className="
          sr-only focus:not-sr-only
          focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:rounded-lg focus:bg-black/80 focus:px-4 focus:py-2
          focus:text-white focus:outline-none
        "
      >
        {t("aria.skipToContent")}
      </a>

      <AnimatePresence>
        {!bgReady && (
          <motion.div
            className="absolute inset-0 z-[50]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <GlobalLoaderInline open />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1643576780112-d390f5de9241?q=80&w=1178&auto=format&fit=crop"
            // В hero-bg важнее НЕ описание картинки, а смысл секции.
            // Поэтому alt="" и aria-hidden на контейнере — корректно.
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
            onLoadingComplete={() => setBgReady(true)}
            onError={() => setBgReady(true)}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer>
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={
              reduce
                ? undefined
                : {
                    transform: `translateY(${scrollY * 0.15}px)`,
                    willChange: "transform",
                  }
            }
            className="flex flex-col items-center"
          >
            {/* Title */}
            <h1
              id={titleId}
              className="
                font-semibold leading-[0.98]
                mb-6 md:mb-8
                text-balance

                max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch]

                text-[clamp(2.35rem,5.8vw,4.8rem)]
                md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              {t("title")}
            </h1>

            {/* Subtitle */}
            <p
              id={descId}
              className="
                leading-relaxed
                mb-10 md:mb-12
                text-white
                max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              {t("subtitle")}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              role="group"
              aria-label={t("aria.heroActions")}
            >
              {/* Primary */}
              <Link href={contactHref} scroll aria-label={t("aria.primaryCta")}>
                <motion.span
                  className="
                    relative group inline-flex items-center justify-center
                    overflow-hidden rounded-full
                    px-10 py-3.5 md:px-12 md:py-4
                    text-sm md:text-base font-medium
                    text-[#050816]
                    shadow-[0_0_40px_rgba(76,194,255,0.55)]
                    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                    transition-shadow
                    cursor-pointer
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
                    focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
                  "
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                  <span className="relative z-10">{t("primaryCta")}</span>
                  <ArrowRight
                    className="
                      relative z-10 h-5 w-5 transition-transform
                      group-hover:translate-x-1
                    "
                    aria-hidden="true"
                  />
                </motion.span>
              </Link>

              {/* Secondary */}
              <motion.a
                href="#process"
                aria-label={t("aria.secondaryCta")}
                className="
                  relative group inline-flex items-center justify-center gap-3
                  px-8 py-5 rounded-full font-medium
                  text-[#F5EFE7]
                  backdrop-blur-sm
                  transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
                  focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
                "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-full p-[1px]
                    bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
                  "
                  aria-hidden="true"
                >
                  <span className="block h-full w-full rounded-full bg-[#050608]" />
                </span>

                <span className="relative z-10">{t("secondaryCta")}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}