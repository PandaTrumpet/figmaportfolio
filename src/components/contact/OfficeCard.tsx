"use client";

import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";

export function OfficeCard({ office }: { office: any }) {
  return (
    <motion.div
      className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7]"
      whileHover={{
        boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      <div className="flex items-start gap-4 mb-6">
        <MapPin className="w-6 h-6 shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl mb-4">{office.title}</h3>
          <p className="text-lg opacity-70 mb-2">{office.address}</p>
          <p className="text-lg opacity-70 mb-4">{office.city}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 pt-6 border-t-2 border-[#050608] border-opacity-10">
        <Clock className="w-6 h-6 shrink-0 mt-1" />
        <div>
          <p className="text-base uppercase tracking-wider opacity-50 mb-2">
            Часы работы
          </p>
          <p className="text-lg opacity-70">{office.hours}</p>
        </div>
      </div>
    </motion.div>
  );
}
