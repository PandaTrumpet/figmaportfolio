// "use client";

// import { useEffect } from "react";

// export function HyperPrecisionCursor() {
//   useEffect(() => {
//     // 👉 проверяем есть ли мышь (desktop)
//     const isDesktop = window.matchMedia("(pointer: fine)").matches;

//     if (!isDesktop) return;

//     const dot = document.createElement("div");
//     const ring = document.createElement("div");

//     dot.id = "cursor-dot";
//     ring.id = "cursor-ring";

//     document.body.appendChild(dot);
//     document.body.appendChild(ring);

//     const style = document.createElement("style");
//     style.innerHTML = `
//       #cursor-dot, #cursor-ring {
//         position: fixed;
//         pointer-events: none;
//         z-index: 999999;
//         transform: translate(-50%, -50%);
//       }

//       #cursor-dot {
//         width: 8px;
//         height: 8px;
//         background: #2EE6FF;
//         border-radius: 50%;
//         box-shadow: 0 0 18px rgba(46,230,255,1);
//       }

//       #cursor-ring {
//         width: 34px;
//         height: 34px;
//         border-radius: 50%;
//         border: 2px solid rgba(46,230,255,0.8);
//         box-shadow: 0 0 26px rgba(46,230,255,0.85);
//         background: radial-gradient(circle, rgba(76,194,255,0.25), transparent 60%);
//         transition: width 0.12s ease, height 0.12s ease;
//       }

//       .cursor-ripple {
//         position: fixed;
//         width: 20px;
//         height: 20px;
//         border-radius: 9999px;
//         border: 3px solid rgba(46,230,255,1);
//         box-shadow: 0 0 45px rgba(46,230,255,1), 0 0 90px rgba(46,230,255,0.8);
//         transform: translate(-50%, -50%);
//         pointer-events: none;
//         z-index: 999998;
//         animation: ripplePulse 0.45s ease-out forwards;
//       }

//       @keyframes ripplePulse {
//         0% {
//           opacity: 0.95;
//           transform: translate(-50%, -50%) scale(1);
//         }
//         100% {
//           opacity: 0;
//           transform: translate(-50%, -50%) scale(4);
//         }
//       }
//     `;

//     document.head.appendChild(style);

//     let mouseX = 0;
//     let mouseY = 0;

//     const move = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       dot.style.left = mouseX + "px";
//       dot.style.top = mouseY + "px";
//       ring.style.left = mouseX + "px";
//       ring.style.top = mouseY + "px";
//     };

//     const down = () => {
//       ring.style.width = "28px";
//       ring.style.height = "28px";

//       const ripple = document.createElement("div");
//       ripple.className = "cursor-ripple";
//       ripple.style.left = mouseX + "px";
//       ripple.style.top = mouseY + "px";

//       document.body.appendChild(ripple);

//       ripple.addEventListener("animationend", () => ripple.remove(), {
//         once: true,
//       });
//     };

//     const up = () => {
//       ring.style.width = "34px";
//       ring.style.height = "34px";
//     };

//     const leave = () => {
//       dot.style.opacity = "0";
//       ring.style.opacity = "0";
//     };

//     const enter = () => {
//       dot.style.opacity = "1";
//       ring.style.opacity = "1";
//     };

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousedown", down);
//     window.addEventListener("mouseup", up);
//     window.addEventListener("mouseleave", leave);
//     window.addEventListener("mouseenter", enter);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousedown", down);
//       window.removeEventListener("mouseup", up);
//       window.removeEventListener("mouseleave", leave);
//       window.removeEventListener("mouseenter", enter);

//       dot.remove();
//       ring.remove();
//       style.remove();
//     };
//   }, []);

//   return null;
// }

"use client";

import { useEffect } from "react";

export function HyperPrecisionCursor() {
  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.id = "cursor-dot";
    ring.id = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    const style = document.createElement("style");
    style.innerHTML = `
      #cursor-dot,
      #cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 999999;
        opacity: 1;
        will-change: transform, opacity, width, height;
      }

      #cursor-dot {
        width: 8px;
        height: 8px;
        border-radius: 9999px;
        background: #2EE6FF;
        box-shadow: 0 0 10px rgba(46,230,255,0.9);
      }

      #cursor-ring {
        width: 34px;
        height: 34px;
        border-radius: 9999px;
        border: 1.5px solid rgba(46,230,255,0.75);
        background: radial-gradient(circle, rgba(76,194,255,0.16), transparent 65%);
        box-shadow: 0 0 14px rgba(46,230,255,0.45);
        transition:
          width 0.12s ease,
          height 0.12s ease,
          opacity 0.18s ease;
      }

      .cursor-ripple {
        position: fixed;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        border: 2px solid rgba(46,230,255,0.95);
        pointer-events: none;
        z-index: 999998;
        will-change: transform, opacity;
        animation: cursorRipple 0.42s ease-out forwards;
      }

      @keyframes cursorRipple {
        0% {
          opacity: 0.9;
          transform: translate3d(var(--x), var(--y), 0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate3d(var(--x), var(--y), 0) scale(2.8);
        }
      }
    `;

    document.head.appendChild(style);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let isVisible = true;
    let animationFrameId = 0;

    const DOT_SIZE = 8;
    const RING_SIZE = 34;

    // Чем меньше lerp, тем плавнее, но больше "догоняние"
    // 0.22–0.3 обычно очень хорошо
    const RING_LERP = 0.24;

    const render = () => {
      // dot всегда строго под мышкой
      dot.style.transform = `translate3d(${mouseX - DOT_SIZE / 2}px, ${mouseY - DOT_SIZE / 2}px, 0)`;

      // ring плавно догоняет
      ringX += (mouseX - ringX) * RING_LERP;
      ringY += (mouseY - ringY) * RING_LERP;

      const currentRingWidth = ring.offsetWidth || RING_SIZE;
      const currentRingHeight = ring.offsetHeight || RING_SIZE;

      ring.style.transform = `translate3d(${ringX - currentRingWidth / 2}px, ${ringY - currentRingHeight / 2}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const down = () => {
      ring.style.width = "26px";
      ring.style.height = "26px";

      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.setProperty("--x", `${mouseX - 9}px`);
      ripple.style.setProperty("--y", `${mouseY - 9}px`);
      document.body.appendChild(ripple);

      ripple.addEventListener(
        "animationend",
        () => {
          ripple.remove();
        },
        { once: true },
      );
    };

    const up = () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
    };

    const leave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const enter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);

      cancelAnimationFrame(animationFrameId);

      dot.remove();
      ring.remove();
      style.remove();
    };
  }, []);

  return null;
}