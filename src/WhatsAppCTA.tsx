import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) / 8;
    const distanceY = (e.clientY - centerY) / 8;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative px-10 py-5 rounded-full overflow-hidden transition-all duration-300"
      onClick={() => window.open("https://wa.me/972501234567", "_blank")}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "#2F5EDB",
        }}
      />
      
      {/* Hover Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #2F5EDB 0%, #4CC2FF 100%)",
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 0 40px rgba(76, 194, 255, 0.6), 0 0 80px rgba(58, 123, 255, 0.4)",
        }}
      />

      {/* Content */}
      <span className="relative flex items-center gap-3 text-white" style={{ fontSize: "18px" }}>
        <MessageCircle className="w-5 h-5" />
        Связаться в WhatsApp
      </span>
    </motion.button>
  );
}
