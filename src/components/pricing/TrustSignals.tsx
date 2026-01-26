"use client";

import { motion } from "motion/react";
import { Shield, Zap, Star, TrendingUp } from "lucide-react";

export function TrustSignals() {
  const signals = [
    {
      icon: <Shield className="w-8 h-8" />,
      text: "30-Day Money Back Guarantee",
    },
    { icon: <Zap className="w-8 h-8" />, text: "Lightning-Fast Delivery" },
    { icon: <Star className="w-8 h-8" />, text: "4.9/5 Client Satisfaction" },
    { icon: <TrendingUp className="w-8 h-8" />, text: "Proven ROI Results" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {signals.map((signal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center p-6"
        >
          <motion.div
            className="mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {signal.icon}
          </motion.div>
          <p className="text-sm opacity-70">{signal.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
