"use client";

import { useEffect } from "react";
import { useGlobalLoader } from "./LoaderProvider";

export function useHeroBackgroundLoader(src?: string) {
  const { show, hide } = useGlobalLoader();

  useEffect(() => {
    // ✅ при любом новом src — включаем loader
    show();

    // если фона нет — сразу скрываем
    if (!src) {
      hide();
      return;
    }

    let cancelled = false;
    const img = new Image();
    img.decoding = "async";

    const done = () => {
      if (cancelled) return;
      hide();
    };

    img.onload = done;
    img.onerror = done;

    // ✅ важно: ставим src ПОСЛЕ onload/onerror
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, show, hide]);
}