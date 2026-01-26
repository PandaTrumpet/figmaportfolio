"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function StylizedMap({ office }: { office: any }) {
  return (
    <motion.div
      className="aspect-square border-2 border-[#050608] overflow-hidden relative"
      whileHover={{
        boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      <div className="w-full h-full bg-linear-to-br from-[#050608] via-[#1a1a1a] to-[#050608] relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px)",
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <MapPin className="w-16 h-16 text-[#F5EFE7] mx-auto mb-4" />
            <div className="px-6 py-3 bg-[#F5EFE7] text-[#050608]">
              <p className="text-sm uppercase tracking-wider">Tel Aviv</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="w-32 h-32 rounded-full border-2 border-[#F5EFE7]"
          />
        </div>

        <div className="absolute bottom-4 left-4 text-[#F5EFE7] opacity-30 text-xs font-mono">
          {office.coordinates.lat.toFixed(4)},{" "}
          {office.coordinates.lng.toFixed(4)}
        </div>
      </div>
    </motion.div>
  );
}
