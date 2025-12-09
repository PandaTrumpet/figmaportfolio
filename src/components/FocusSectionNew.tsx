import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Shield, TrendingUp } from 'lucide-react';

export function FocusSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Zap,
      title: 'Fast & Modern',
      description: 'Lightning-fast websites built with the latest technology. Under 2-second load times guaranteed.',
      features: ['React & Next.js', 'Optimized Images', 'Clean Code'],
      gradient: 'from-[#050608] to-[#1a1a1a]',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security in mind. SSL certificates, secure hosting, and regular backups included.',
      features: ['SSL Certificates', 'Regular Backups', 'Security Updates'],
      gradient: 'from-[#2a2a2a] to-[#050608]',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Every site is designed to convert visitors into customers. SEO-ready and analytics-integrated.',
      features: ['SEO Optimized', 'Analytics Setup', 'Conversion-Focused'],
      gradient: 'from-[#1a1a1a] to-[#2a2a2a]',
    },
  ];

  return (
    <section ref={sectionRef} className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-[2px] bg-[#050608] mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
            We don&apos;t build websites just to build them. Every project is focused on delivering real results for your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <motion.div
                  className="relative h-full bg-[#F5EFE7] border-2 border-[#050608] p-8 md:p-10"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated shadow */}
                  <motion.div
                    className="absolute inset-0 bg-[#050608] -z-10"
                    initial={{ x: 4, y: 4 }}
                    animate={{
                      x: hoveredCard === index ? 12 : 4,
                      y: hoveredCard === index ? 12 : 4,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with background */}
                  <motion.div
                    className="w-16 h-16 mb-6 flex items-center justify-center border-2 border-[#050608] bg-white relative overflow-hidden"
                    animate={{
                      rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 relative z-10" />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="opacity-70 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-[#050608]"
                          animate={{
                            scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                          }}
                        />
                        <span className="text-sm opacity-70">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#050608] opacity-20"
                    animate={{
                      scale: hoveredCard === index ? 1.2 : 1,
                      opacity: hoveredCard === index ? 0.4 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg opacity-70 mb-6">
            Ready to transform your online presence?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#050608] text-[#F5EFE7] transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get a Free Quote</span>
            <motion.div
              className="absolute inset-0 bg-[#1a1a1a]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border-2 border-[#050608] opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
