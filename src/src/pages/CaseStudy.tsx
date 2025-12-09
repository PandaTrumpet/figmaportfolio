import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { caseStudyData } from '../../data/caseStudies';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';

export function CaseStudy() {
  const data = caseStudyData;

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Navigation />

      {/* Hero Section with Large Image */}
      <section className="relative min-h-screen flex items-end px-6 md:px-12 lg:px-20 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full text-[#F5EFE7] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-8">
              <span className="px-4 py-2 border-2 border-[#F5EFE7] text-sm uppercase tracking-wider inline-block mb-6">
                Case Study
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 max-w-4xl">
              {data.title}
            </h1>
            
            <p className="text-2xl md:text-3xl opacity-90 max-w-3xl leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-16">
            {/* Overview Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-[2px] bg-[#050608] mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">Overview</h2>
              <p className="text-xl md:text-2xl opacity-70 leading-relaxed">
                {data.overview}
              </p>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-[#050608] p-8 bg-[#F5EFE7] self-start sticky top-24"
            >
              <h3 className="text-xl mb-6 uppercase tracking-wider">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-50 mb-1">Client</p>
                  <p className="text-lg">{data.client}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-50 mb-1">Industry</p>
                  <p className="text-lg">{data.industry}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-50 mb-1">Role</p>
                  <p className="text-lg">{data.role}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-50 mb-1">Year</p>
                  <p className="text-lg">{data.year}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-50 mb-1">Duration</p>
                  <p className="text-lg">{data.duration}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-[#050608] p-10 md:p-12 bg-white"
            >
              <div className="text-6xl mb-6 opacity-10">01</div>
              <h3 className="text-3xl md:text-4xl mb-6">The Challenge</h3>
              <p className="text-lg md:text-xl opacity-70 leading-relaxed">
                {data.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-[#050608] p-10 md:p-12 bg-[#050608] text-[#F5EFE7]"
            >
              <div className="text-6xl mb-6 opacity-20">02</div>
              <h3 className="text-3xl md:text-4xl mb-6">The Solution</h3>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                {data.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="w-16 h-[2px] bg-[#050608] mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">The Process</h2>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
              От исследования до запуска — пошаговый процесс создания продукта.
            </p>
          </motion.div>

          <div className="space-y-8">
            {data.process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Mockups */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#050608] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 text-[#F5EFE7]"
          >
            <div className="w-16 h-[2px] bg-[#F5EFE7] mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Visual Design</h2>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
              Финальный дизайн на различных устройствах.
            </p>
          </motion.div>

          {/* Desktop Mockup with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F5EFE7]/20 via-[#F5EFE7]/40 to-[#F5EFE7]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Frame */}
              <div className="relative border-4 border-[#F5EFE7] p-2 bg-[#F5EFE7]">
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={data.mockups[0].image}
                    alt="Desktop mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {data.mockups[0].caption && (
              <p className="text-center mt-6 text-[#F5EFE7] opacity-60">{data.mockups[0].caption}</p>
            )}
          </motion.div>

          {/* Mobile & Tablet Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {data.mockups.slice(1).map((mockup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  {/* Glowing effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F5EFE7]/10 via-[#F5EFE7]/30 to-[#F5EFE7]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Frame */}
                  <div className="relative border-4 border-[#F5EFE7] p-2 bg-[#F5EFE7]">
                    <div className={`overflow-hidden ${mockup.type === 'mobile' ? 'aspect-[9/16]' : 'aspect-[16/10]'}`}>
                      <ImageWithFallback
                        src={mockup.image}
                        alt={`${mockup.type} mockup`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {mockup.caption && (
                  <p className="text-center mt-6 text-[#F5EFE7] opacity-60">{mockup.caption}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* Key Features */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="w-16 h-[2px] bg-[#050608] mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Key Features</h2>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
              Функциональность, которая решает задачи бизнеса.
            </p>
          </motion.div>

          <div className="space-y-20">
            {data.features.map((feature, index) => (
              <FeatureBlock key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F5EFE7]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="w-16 h-[2px] bg-[#050608] mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Results That Matter</h2>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
              Измеримые результаты, которые влияют на бизнес.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {data.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-[#050608] p-8 bg-white hover:bg-[#050608] hover:text-[#F5EFE7] transition-all group"
              >
                <p className="text-sm uppercase tracking-wider opacity-50 group-hover:opacity-70 mb-2">
                  {result.metric}
                </p>
                <p className="text-4xl md:text-5xl mb-3">{result.value}</p>
                <p className="text-base opacity-70 group-hover:opacity-90">{result.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lighthouse Scores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-2 border-[#050608] p-10 md:p-12 bg-white"
          >
            <h3 className="text-2xl md:text-3xl mb-8">Lighthouse Scores</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(data.lighthouse).map(([key, value]) => (
                <div key={key}>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Circle Progress */}
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="opacity-10"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - value / 100)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl">{value}</span>
                    </div>
                  </div>
                  <p className="text-center text-sm uppercase tracking-wider opacity-60">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl md:text-3xl mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border-2 border-[#050608] bg-white text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-12">
              <div className="w-24 h-24 rounded-full border-2 border-[#050608] overflow-hidden mx-auto mb-6">
                <ImageWithFallback
                  src={data.testimonial.avatar}
                  alt={data.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10">
              «{data.testimonial.quote}»
            </blockquote>

            <div>
              <p className="text-xl mb-1">{data.testimonial.author}</p>
              <p className="text-lg opacity-60">{data.testimonial.position}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-tight">
              Start Your Project
            </h2>
            <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Готовы создать что-то выдающееся? 
              Давайте обсудим ваш проект и найдём лучшее решение.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-12 py-6 bg-[#F5EFE7] text-[#050608] text-xl transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Получить Консультацию
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Animated background */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border-2 border-[#F5EFE7] opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </section>

      <Footer />
    </div>
  );
}

// Process Step Component
function ProcessStep({ step, index }: { step: typeof caseStudyData.process[0]; index: number }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-[1fr,2fr] gap-8 items-center"
    >
      <div className="text-center md:text-left">
        <div className="text-6xl md:text-7xl mb-4">{step.icon}</div>
        <h3 className="text-2xl md:text-3xl">{step.title}</h3>
      </div>
      <div className="border-2 border-[#050608] p-8 bg-[#F5EFE7]">
        <p className="text-lg md:text-xl opacity-70 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

// Feature Block Component
function FeatureBlock({ feature, index }: { feature: typeof caseStudyData.features[0]; index: number }) {
  const blockRef = useRef(null);
  const isInView = useInView(blockRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={blockRef}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={index % 2 === 1 ? 'lg:col-start-2' : ''}
      >
        <div className="aspect-[16/10] border-2 border-[#050608] overflow-hidden">
          <ImageWithFallback
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <div className="flex items-center gap-4 mb-6">
          <Check className="w-8 h-8 flex-shrink-0" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl">{feature.title}</h3>
        </div>
        <p className="text-lg md:text-xl opacity-70 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </div>
  );
}
