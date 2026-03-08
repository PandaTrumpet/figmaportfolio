// "use client";

// import { useEffect } from "react";

// export function HyperPrecisionCursor() {
//   useEffect(() => {
//     const dot = document.createElement("div");
//     const ring = document.createElement("div");

//     dot.id = "cursor-dot";
//     ring.id = "cursor-ring";

//     document.body.appendChild(dot);
//     document.body.appendChild(ring);

//     // ====== STYLES FOR CURSOR + RIPPLE ======
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

//       /* 🔥 R I P P L E — strong neon pulse */
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

//       // ====== CREATE RIPPLE ======
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
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    if (document.getElementById("cursor-dot")) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    const style = document.createElement("style");

    dot.id = "cursor-dot";
    ring.id = "cursor-ring";
    style.id = "cursor-style";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    style.innerHTML = `
      @media (pointer: fine) {
        html, body, a, button, [role="button"], input, textarea, select, label {
          cursor: none !important;
        }
      }

      #cursor-dot,
      #cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 999999;
        border-radius: 9999px;
        opacity: 0;
        transform: translate(-50%, -50%);
        will-change: transform, width, height, opacity;
      }

      #cursor-dot {
        width: 8px;
        height: 8px;
        background: #2EE6FF;
        box-shadow:
          0 0 10px rgba(46,230,255,0.95),
          0 0 18px rgba(46,230,255,0.75),
          0 0 32px rgba(46,230,255,0.45);
      }

      #cursor-ring {
        width: 34px;
        height: 34px;
        border: 1.5px solid rgba(46,230,255,0.78);
        background:
          radial-gradient(circle, rgba(76,194,255,0.20) 0%, rgba(76,194,255,0.08) 38%, transparent 68%);
        box-shadow:
          0 0 18px rgba(46,230,255,0.45),
          0 0 34px rgba(46,230,255,0.20);
        backdrop-filter: blur(1.5px);
        transition:
          width 0.16s ease,
          height 0.16s ease,
          opacity 0.18s ease,
          border-color 0.16s ease,
          box-shadow 0.16s ease;
      }

      .cursor-ripple {
        position: fixed;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        border: 2px solid rgba(46,230,255,0.95);
        box-shadow:
          0 0 24px rgba(46,230,255,0.95),
          0 0 56px rgba(46,230,255,0.55);
        transform: translate(-50%, -50%) scale(1);
        pointer-events: none;
        z-index: 999998;
        animation: cursorRipplePulse 0.55s ease-out forwards;
      }

      @keyframes cursorRipplePulse {
        0% {
          opacity: 0.95;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(4.8);
        }
      }
    `;

    document.head.appendChild(style);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let rafId = 0;
    let isVisible = false;

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      rafId = window.requestAnimationFrame(render);
    };

    const showCursor = () => {
      if (isVisible) return;
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const hideCursor = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();
    };

    const handleDown = () => {
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.borderColor = "rgba(46,230,255,1)";
      ring.style.boxShadow =
        "0 0 24px rgba(46,230,255,0.7), 0 0 42px rgba(46,230,255,0.3)";

      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${mouseX}px`;
      ripple.style.top = `${mouseY}px`;
      document.body.appendChild(ripple);

      ripple.addEventListener(
        "animationend",
        () => {
          ripple.remove();
        },
        { once: true },
      );
    };

    const handleUp = () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
      ring.style.borderColor = "rgba(46,230,255,0.78)";
      ring.style.boxShadow =
        "0 0 18px rgba(46,230,255,0.45), 0 0 34px rgba(46,230,255,0.20)";
    };

    const handleLeave = () => {
      hideCursor();
    };

    const handleEnter = () => {
      showCursor();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);
    document.addEventListener("visibilitychange", handleVisibility);

    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("visibilitychange", handleVisibility);

      dot.remove();
      ring.remove();
      style.remove();
    };
  }, []);

  return null;
}