"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { PortfolioCTA } from "./PortfolioCTA";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const videoParallaxX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const videoParallaxY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const h1Text = "Premium Websites & Fullstack Development";
  const h2Text = "Built for Israel. Made to Perform.";
  const subtitle = "Сайты, которые работают быстрее, выглядят дороже и приносят клиентов.";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0B0E14 0%, #121720 100%)",
      }}
    >
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          x: videoParallaxX,
          y: videoParallaxY,
          scale: 1.1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.7)",
          }}
        >
          <source src="/video/HomeHero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Premium Dark Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        // style={{
        //   background: "rgba(11, 14, 20, 0.65)",
        // }}
      />

      {/* Ambient Glow Spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            left: "15%",
            top: "20%",
            background:
              "radial-gradient(circle, rgba(58, 123, 255, 0.35) 0%, rgba(58, 123, 255, 0) 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            right: "10%",
            top: "40%",
            background:
              "radial-gradient(circle, rgba(76, 194, 255, 0.25) 0%, rgba(76, 194, 255, 0) 70%)",
            filter: "blur(90px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Bottom Reflection Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(58, 123, 255, 0.15) 0%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* H1 with Split Text Animation */}
          <div className="space-y-4">
            <h1 className="overflow-hidden">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {h1Text.split("").map((char, index) => (
                  <motion.span
                    key={`h1-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 0.95, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(48px, 8vw, 86px)",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </h1>

            <h2 className="overflow-hidden">
              <div className="flex flex-wrap justify-center gap-x-3">
                {h2Text.split("").map((char, index) => (
                  <motion.span
                    key={`h2-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 0.95, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: h1Text.length * 0.03 + index * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(42px, 7vw, 76px)",
                      display: "inline-block",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </h2>
          </div>

          {/* Subtitle with Fade-up */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: h1Text.length * 0.03 + h2Text.length * 0.025 + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              color: "#D0D4E0",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              marginTop: "2rem",
              lineHeight: "1.5",
            }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: h1Text.length * 0.03 + h2Text.length * 0.025 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <WhatsAppCTA />
            <PortfolioCTA />
          </motion.div>
        </div>
      </div>

      {/* Subtle Gradient Overlay at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(11, 14, 20, 0.4) 100%)",
        }}
      />
    </section>
  );
}