import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function PortfolioCTA() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
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
      onClick={() => console.log("Navigate to portfolio")}
    >
      {/* Border */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid #3A7BFF",
          background: "transparent",
        }}
      />

      {/* Hover Glow Border */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: "1px solid #75B8FF",
          boxShadow:
            "0 0 30px rgba(117, 184, 255, 0.5), inset 0 0 30px rgba(117, 184, 255, 0.1)",
        }}
      />

      {/* Subtle Background on Hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "rgba(58, 123, 255, 0.1)",
        }}
      />

      {/* Content */}
      <span
        className="relative flex items-center gap-3 transition-colors duration-300"
        style={{
          color: "#D0D4E0",
          fontSize: "18px",
        }}
      >
        <Sparkles className="w-5 h-5 group-hover:text-[#75B8FF] transition-colors duration-300" />
        <span className="group-hover:text-[#FFFFFF]">
          Посмотреть портфолио
        </span>
      </span>
    </motion.button>
  );
}