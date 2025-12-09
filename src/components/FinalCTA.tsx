import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#050608 1px, transparent 1px), linear-gradient(90deg, #050608 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        {/* Decorative top line */}
        <div className="w-24 h-[2px] bg-[#050608] mx-auto mb-12" />

        {/* Headline */}
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] mb-8 max-w-4xl mx-auto">
          Let&apos;s Build Something That Represents You
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Your business deserves a digital presence as thoughtful as the work you do.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-10 py-5 bg-[#050608] text-[#F5EFE7] transition-all hover:scale-[1.02] hover:shadow-xl flex items-center gap-3 group text-lg">
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-10 py-5 border-2 border-[#050608] text-[#050608] transition-all hover:bg-[#050608] hover:text-[#F5EFE7] text-lg">
            View Pricing
          </button>
        </div>

        {/* Optional line */}
        <p className="text-sm opacity-50 uppercase tracking-wider">
          Typical projects start at ₪15,000 • Response within 24 hours
        </p>

        {/* Decorative bottom element */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="w-32 h-[1px] bg-[#050608] opacity-20" />
          <div className="w-3 h-3 bg-[#050608] opacity-20 rotate-45" />
          <div className="w-32 h-[1px] bg-[#050608] opacity-20" />
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-12 border-t border-[#050608] border-opacity-10">
          <p className="opacity-50 text-sm">
            Based in Tel Aviv, serving businesses across Israel and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}