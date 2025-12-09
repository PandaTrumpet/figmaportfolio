import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { caseStudyData } from '../data/caseStudies';
import { ArrowRight, ExternalLink, Check, Play, Sparkles, TrendingUp, Zap, Award } from 'lucide-react';

export function CaseStudyPremium() {
  const data = caseStudyData;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7] relative overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <FloatingShapes />

      {/* Hero Section - Full Screen Immersive */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050608]/40 to-[#050608]" />
          
          {/* Animated Overlay Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #F5EFE7 2px, #F5EFE7 4px)',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 0px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Content with Fade on Scroll */}
        <motion.div 
          className="relative z-10 max-w-[1400px] mx-auto w-full text-[#F5EFE7] px-6 md:px-12 lg:px-20"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-center"
          >
            {/* Floating Badge */}
            <motion.div
              className="inline-block mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-6 py-3 border-2 border-[#F5EFE7] text-sm uppercase tracking-[0.3em] backdrop-blur-sm bg-[#F5EFE7]/10">
                Featured Case Study
              </div>
            </motion.div>
            
            {/* Title with Stagger */}
            <div className="overflow-hidden mb-10">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {data.title}
              </motion.h1>
            </div>
            
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl opacity-90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {data.tagline}
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="w-[2px] h-16 bg-[#F5EFE7] mx-auto"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="text-sm uppercase tracking-wider mt-4 opacity-70">Scroll to explore</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Video Play Button (Optional) */}
        {data.heroVideo && (
          <motion.button
            className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-2 border-[#F5EFE7] flex items-center justify-center backdrop-blur-sm bg-[#F5EFE7]/10 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoPlaying(true)}
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.button>
        )}
      </section>

      {/* Stats Bar - Sticky on Scroll */}
      <StatsBar results={data.results.slice(0, 4)} />

      {/* Project Overview with Parallax Cards */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-16 lg:gap-20">
            {/* Overview with Animated Line */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-24 h-[3px] bg-[#050608] mb-12"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 leading-tight">
                Overview
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed">
                {data.overview}
              </p>
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="sticky top-32 border-2 border-[#050608] p-10 bg-white relative overflow-hidden group"
                whileHover={{ boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at center, #050608 0%, transparent 70%)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-6 h-6" />
                    <h3 className="text-xl uppercase tracking-[0.2em]">Details</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <InfoItem label="Client" value={data.client} />
                    <InfoItem label="Industry" value={data.industry} />
                    <InfoItem label="Role" value={data.role} />
                    <InfoItem label="Year" value={data.year} />
                    <InfoItem label="Duration" value={data.duration} />
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-[#050608] opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - 3D Cards */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">The Story</h2>
            <p className="text-xl md:text-2xl opacity-60">From challenge to triumph</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenge Card */}
            <Card3D delay={0}>
              <div className="p-12 md:p-16 h-full bg-white border-2 border-[#050608] relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 opacity-5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-full h-full" />
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-8xl md:text-9xl opacity-10 mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    01
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8">The Challenge</h3>
                  <p className="text-lg md:text-xl lg:text-2xl opacity-70 leading-relaxed">
                    {data.challenge}
                  </p>
                </div>
              </div>
            </Card3D>

            {/* Solution Card */}
            <Card3D delay={0.2}>
              <div className="p-12 md:p-16 h-full bg-[#050608] text-[#F5EFE7] border-2 border-[#050608] relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 opacity-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-full h-full" />
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-8xl md:text-9xl opacity-20 mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    02
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8">The Solution</h3>
                  <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
                    {data.solution}
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#050608] mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">The Process</h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl">
              От идеи до реализации — каждый шаг имеет значение.
            </p>
          </motion.div>

          <ProcessTimeline steps={data.process} />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #050608 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
      </section>

      {/* Visual Mockups - 3D Frames with Glow */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 text-[#F5EFE7]"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#F5EFE7] mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Visual Design</h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl">
              Превращая концепцию в визуальный опыт.
            </p>
          </motion.div>

          {/* Desktop Mockup - Ultra Premium */}
          <PremiumMockup mockup={data.mockups[0]} type="desktop" />

          {/* Mobile & Tablet Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-16 lg:mt-24">
            {data.mockups.slice(1, 3).map((mockup, index) => (
              <PremiumMockup key={index} mockup={mockup} type={mockup.type} delay={index * 0.2} />
            ))}
          </div>
        </div>

        {/* Animated Grid Background */}
        <AnimatedGrid />
      </section>

      {/* Key Features - Interactive */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#050608] mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Key Features</h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl">
              Функциональность с фокусом на результат.
            </p>
          </motion.div>

          <div className="space-y-32">
            {data.features.map((feature, index) => (
              <InteractiveFeature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Results - Animated Metrics */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Impact & Results</h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              Цифры, которые говорят за себя.
            </p>
          </motion.div>

          {/* Metrics Grid with Animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {data.results.map((result, index) => (
              <AnimatedMetric key={index} result={result} index={index} />
            ))}
          </div>

          {/* Lighthouse Scores - Radial Progress */}
          <LighthouseScores scores={data.lighthouse} />

          {/* Tech Stack - Interactive Pills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {data.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 border-2 border-[#050608] bg-white text-lg cursor-pointer hover:bg-[#050608] hover:text-[#F5EFE7] transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-[#050608] opacity-5"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#050608] opacity-5"
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* Testimonial - Cinematic */}
      <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Avatar with Glow */}
            <motion.div
              className="relative inline-block mb-12"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-[#050608] blur-3xl opacity-20" />
              <div className="relative w-32 h-32 rounded-full border-4 border-[#050608] overflow-hidden">
                <ImageWithFallback
                  src={data.testimonial.avatar}
                  alt={data.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#050608] rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-6 h-6 text-[#F5EFE7]" />
              </motion.div>
            </motion.div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed mb-12 max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                «{data.testimonial.quote}»
              </motion.span>
            </blockquote>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl mb-2">{data.testimonial.author}</p>
              <p className="text-xl md:text-2xl opacity-60">{data.testimonial.position}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Quote Marks */}
        <div className="absolute top-20 left-10 text-[20rem] opacity-[0.02] leading-none">"</div>
        <div className="absolute bottom-20 right-10 text-[20rem] opacity-[0.02] leading-none">"</div>
      </section>

      {/* CTA - Epic Finale */}
      <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated Icon */}
            <motion.div
              className="inline-block mb-12"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-20 h-20" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
              Ready to Create
              <br />
              Something Amazing?
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
              Каждый великий проект начинается с разговора. 
              Давайте обсудим, как мы можем помочь вашему бизнесу расти.
            </p>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(245,239,231,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Начать Проект</span>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* Epic Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#F5EFE7]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Rotating Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </section>

      <Footer />
    </div>
  );
}

// ============= PREMIUM COMPONENTS =============

function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-40 border-2 border-[#050608] opacity-[0.02]"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            rotate: 360,
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function StatsBar({ results }: { results: typeof caseStudyData.results }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`sticky top-20 z-30 transition-all duration-500 ${
        isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white border-y-2 border-[#050608] py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl mb-1">{result.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-wider opacity-50">{result.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="border-l-2 border-[#050608] pl-4 transition-all"
    >
      <p className="text-sm uppercase tracking-wider opacity-50 mb-1">{label}</p>
      <p className="text-lg leading-relaxed">{value}</p>
    </motion.div>
  );
}

function Card3D({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 40px 80px rgba(5,6,8,0.2)" }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

function ProcessTimeline({ steps }: { steps: typeof caseStudyData.process }) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-8 md:left-16 top-0 bottom-0 w-[2px] bg-[#050608] opacity-20"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        style={{ originY: 0 }}
      />

      <div className="space-y-16 md:space-y-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-24 md:pl-32"
          >
            {/* Icon Circle */}
            <motion.div
              className="absolute left-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#050608] bg-white flex items-center justify-center text-3xl md:text-4xl"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {step.icon}
            </motion.div>

            {/* Content Card */}
            <motion.div
              className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] hover:bg-white transition-colors group"
              whileHover={{ x: 10, boxShadow: "12px 12px 0px 0px rgba(5,6,8,1)" }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4">{step.title}</h3>
              <p className="text-lg md:text-xl opacity-70 leading-relaxed">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PremiumMockup({ mockup, type, delay = 0 }: { mockup: typeof caseStudyData.mockups[0]; type: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative">
        {/* Ultra Glow Effect */}
        <motion.div
          className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(245,239,231,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* 3D Frame */}
        <motion.div
          className="relative"
          whileHover={{ 
            rotateY: type === 'desktop' ? 2 : 5,
            rotateX: 2,
            scale: 1.02,
          }}
          style={{ perspective: 2000 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer Frame */}
          <div className="border-[6px] border-[#F5EFE7] p-4 bg-[#F5EFE7] shadow-2xl">
            {/* Inner Shadow */}
            <div className="border-2 border-[#F5EFE7]/50">
              <div className={`overflow-hidden ${
                type === 'mobile' ? 'aspect-[9/19]' : type === 'desktop' ? 'aspect-[16/10]' : 'aspect-[16/10]'
              }`}>
                <ImageWithFallback
                  src={mockup.image}
                  alt={mockup.caption || 'Mockup'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {mockup.caption && (
        <motion.p
          className="text-center mt-8 text-[#F5EFE7] text-lg md:text-xl opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: delay + 0.5 }}
          viewport={{ once: true }}
        >
          {mockup.caption}
        </motion.p>
      )}
    </motion.div>
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 opacity-5">
      <motion.div
        className="w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(#F5EFE7 1px, transparent 1px), linear-gradient(90deg, #F5EFE7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

function InteractiveFeature({ feature, index }: { feature: typeof caseStudyData.features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={index % 2 === 1 ? 'lg:col-start-2' : ''}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative aspect-[16/10] border-4 border-[#050608] overflow-hidden"
          animate={{
            boxShadow: isHovered 
              ? "20px 20px 0px 0px rgba(5,6,8,1)" 
              : "0px 0px 0px 0px rgba(5,6,8,1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithFallback
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-[#050608] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="w-16 h-16 text-[#F5EFE7]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <motion.div
          className="flex items-start gap-6 mb-8"
          whileHover={{ x: 10 }}
        >
          <Check className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 mt-2" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">{feature.title}</h3>
        </motion.div>
        <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </div>
  );
}

function AnimatedMetric({ result, index }: { result: typeof caseStudyData.results[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Simple number animation
      const timeout = setTimeout(() => setCount(1), index * 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        className="border-2 border-[#050608] p-10 md:p-12 bg-white relative overflow-hidden"
        whileHover={{
          backgroundColor: '#050608',
          color: '#F5EFE7',
          boxShadow: "16px 16px 0px 0px rgba(5,6,8,0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #050608 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #050608 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #050608 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-wider opacity-50 mb-3">
            {result.metric}
          </p>
          <motion.p
            className="text-5xl md:text-6xl lg:text-7xl mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
          >
            {result.value}
          </motion.p>
          <p className="text-base md:text-lg opacity-70 leading-relaxed">{result.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LighthouseScores({ scores }: { scores: typeof caseStudyData.lighthouse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-2 border-[#050608] p-12 md:p-16 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #050608 0px, #050608 2px, transparent 2px, transparent 10px)',
        }} />
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Lighthouse Performance</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(scores).map(([key, value], index) => (
            <LighthouseScore key={key} label={key} value={value} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LighthouseScore({ label, value, index }: { label: string; value: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative w-40 h-40 mx-auto mb-6">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-40 h-40">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="opacity-10"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 70}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
            animate={isInView ? { 
              strokeDashoffset: 2 * Math.PI * 70 * (1 - value / 100) 
            } : {}}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Value */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        >
          <span className="text-4xl md:text-5xl">{value}</span>
        </motion.div>
      </div>
      
      <p className="text-base md:text-lg uppercase tracking-wider opacity-60">
        {label.replace(/([A-Z])/g, ' $1').trim()}
      </p>
    </motion.div>
  );
}
