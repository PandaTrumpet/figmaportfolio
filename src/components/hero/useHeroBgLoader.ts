// "use client";

// import { useEffect } from "react";
// import { useGlobalLoader } from "@/src/components/loader/LoaderProvider";

// export function useHeroBgLoader(src?: string, minMs = 450) {
//   const loader = useGlobalLoader();

//   useEffect(() => {
//     if (!src) return;

//     let alive = true;
//     const startedAt = performance.now();

//     loader.show();

//     const img = new Image();
//     img.decoding = "async";
//     img.fetchPriority = "high" as any; // ок в браузерах, TS может ругаться — см. ниже
//     img.src = src;

//     const finish = () => {
//       const elapsed = performance.now() - startedAt;
//       const wait = Math.max(0, minMs - elapsed);

//       window.setTimeout(() => {
//         if (!alive) return;
//         loader.hide();
//       }, wait);
//     };

//     img.onload = finish;
//     img.onerror = finish;

//     return () => {
//       alive = false;
//     };
//   }, [src, minMs, loader]);
// }

// "use client";

// import { useEffect } from "react";
// import { useGlobalLoader } from "@/src/components/loader/LoaderProvider";

// export function useHeroBgLoader(src?: string, minMs = 450) {
//   const loader = useGlobalLoader();

//   useEffect(() => {
//     if (!src) return;

//     let alive = true;
//     const startedAt = performance.now();

//     const img = new Image();
//     img.decoding = "async";
//     img.src = src;

//     const finish = () => {
//       const elapsed = performance.now() - startedAt;
//       const wait = Math.max(0, minMs - elapsed);

//       window.setTimeout(() => {
//         if (!alive) return;
//         loader.hide();
//       }, wait);
//     };

//     img.onload = finish;
//     img.onerror = finish;

//     return () => {
//       alive = false;
//     };
//   }, [src, minMs, loader]);
// }

"use client";

import { useEffect } from "react";
import { useGlobalLoader } from "@/src/components/loader/LoaderProvider";

export function useHeroBgLoader(src?: string, minMs = 450) {
  const loader = useGlobalLoader();

  useEffect(() => {
    if (!src) return;

    let alive = true;
    const startedAt = performance.now();

    const img = new Image();
    img.decoding = "async";
    img.src = src;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, minMs - elapsed);

      window.setTimeout(() => {
        if (!alive) return;
        loader.hide();
      }, wait);
    };

    img.onload = finish;
    img.onerror = finish;

    return () => {
      alive = false;
    };
  }, [src, minMs, loader]);
}