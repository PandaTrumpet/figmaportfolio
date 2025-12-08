"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState, useRef } from "react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function BenefitCard({ icon: Icon, title, description, index }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showShine, setShowShine] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth motion
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Light spot position
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  // Parallax layers
  const iconZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);
  const titleZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const titleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-1, 1]), springConfig);
  const descZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [1, -1]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowShine(true);
    setTimeout(() => setShowShine(false), 900);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        className="relative h-full rounded-[20px] overflow-hidden"
        style={{
          background: "#181C25",
          padding: "40px 36px",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35), inset 0 0 18px rgba(58, 123, 255, 0.08)",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Enhanced Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            boxShadow: "0 0 32px rgba(58, 123, 255, 0.45), inset 0 0 22px rgba(75, 180, 255, 0.25)",
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* Moving Light Spot */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(76, 194, 255, 0.25) 0%, transparent 70%)",
            opacity: isHovered ? 1 : 0,
            left: lightX,
            top: lightY,
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
          }}
          transition={{
            opacity: { duration: 0.3 },
          }}
        />

        {/* Glass-Shine Sweep Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0.12) 50%, transparent 100%)",
            transform: "translateX(-100%)",
          }}
          animate={{
            transform: showShine ? "translateX(100%)" : "translateX(-100%)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Card Content with Parallax Layers */}
        <div className="relative z-10 flex flex-col items-start h-full" style={{ transformStyle: "preserve-3d" }}>
          {/* Icon with 3D Lift */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05 + 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              translateZ: iconZ,
              x: iconX,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              animate={{
                filter: isHovered
                  ? "drop-shadow(0 0 18px rgba(76, 194, 255, 0.4))"
                  : "drop-shadow(0 0 0px rgba(76, 194, 255, 0))",
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className="transition-all duration-300"
                style={{
                  width: "40px",
                  height: "40px",
                  stroke: isHovered ? "#4CC2FF" : "#75B8FF",
                  strokeWidth: 1.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Title with Parallax */}
          <motion.h3
            className="mb-3"
            style={{
              color: "#FFFFFF",
              opacity: 0.95,
              fontSize: "clamp(20px, 2.5vw, 24px)",
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
              translateZ: titleZ,
              x: titleX,
              transformStyle: "preserve-3d",
            }}
          >
            {title}
          </motion.h3>

          {/* Description with Parallax */}
          <motion.p
            style={{
              color: "#9CA3B5",
              fontSize: "clamp(15px, 1.8vw, 17px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
              translateZ: descZ,
              transformStyle: "preserve-3d",
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Subtle inner border accent */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            border: "1px solid rgba(58, 123, 255, 0.1)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
