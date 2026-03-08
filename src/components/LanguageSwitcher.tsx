"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "ru", label: "RU" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className="
        relative flex items-center gap-1
        rounded-full
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-1
        shadow-[0_0_20px_rgba(76,194,255,0.25)]
      "
    >
      {languages.map((lang) => {
        const isActive = locale === lang.code;

        return (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            disabled={isPending}
            className={`
              cursor-pointer
              relative px-4 py-1.5
              text-[10px] md:text-[11px]
              font-semibold tracking-[0.18em] uppercase
              rounded-full
              transition-all duration-300
              ${
                isActive
                  ? "text-[#050816]"
                  : "text-slate-300/80 hover:text-cyan-200"
              }
            `}
          >
            {/* ACTIVE BACKGROUND */}
            {isActive && (
              <span
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-r
                  from-[#3A7BFF]
                  via-[#4CC2FF]
                  to-[#9B5DFF]
                  shadow-[0_0_25px_rgba(76,194,255,0.6)]
                  animate-pulse
                "
              />
            )}

            <span className="relative z-10">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
