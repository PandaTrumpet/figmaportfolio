// src/components/LocaleHtmlAttrs.tsx
"use client";

import { useEffect } from "react";

export function LocaleHtmlAttrs({ locale }: { locale: string }) {
  useEffect(() => {
    const dir = locale === "he" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}
