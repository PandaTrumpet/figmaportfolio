import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { aboutData } from '../../data/aboutData';
import { ArrowRight, Linkedin, Award, TrendingUp, Users, Heart, Sparkles } from 'lucide-react';

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <Navigation />

      {/* Hero - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          <ImageWithFallback
            src={aboutData.hero.image}
            alt="Studio workspace"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE7]/20 via-[#050608]/60 to-[#050608]" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-[#F5EFE7]"
          style={{ opacity }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.div
                className="inline-block mb-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="px-6 py-3 border-2 border-[#F5EFE7] text-sm uppercase tracking-[0.3em] backdrop-blur-sm bg-[#F5EFE7]/10">
                  About Us
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 max-w-5xl mx-auto">
                {aboutData.hero.title}
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                {aboutData.hero.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {aboutData.hero.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center border-2 border-[#F5EFE7] p-6 md:p-8 backdrop-blur-sm bg-[#F5EFE7]/5 hover:bg-[#F5EFE7]/10 transition-all"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl mb-2">{stat.value}</p>
                <p className="text-sm md:text-base uppercase tracking-wider opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 border-2 border-[#F5EFE7] opacity-10"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* Mission Statement */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-24 h-[3px] bg-[#050608] mb-12"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 leading-tight">
                {aboutData.mission.title}
              </h2>
              
              <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed mb-12">
                {aboutData.mission.description}
              </p>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <Heart className="w-8 h-8" />
                <p className="text-lg md:text-xl opacity-60">Сделано с любовью в Тель-Авиве</p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="aspect-[4/5] border-4 border-[#050608] overflow-hidden relative"
                whileHover={{ 
                  boxShadow: "24px 24px 0px 0px rgba(5,6,8,1)",
                  x: -10,
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={aboutData.mission.image}
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/30 to-transparent" />
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#050608] opacity-20 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Наши ценности</h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              Принципы, которые определяют, как мы работаем.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #050608 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
      </section>

      {/* Why We're Different */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
              {aboutData.difference.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl">
              {aboutData.difference.subtitle}
            </p>
          </motion.div>

          <div className="space-y-32">
            {aboutData.difference.points.map((point, index) => (
              <DifferencePoint key={index} point={point} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto">
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
            <div className="flex items-center justify-center gap-4 mb-8">
              <Users className="w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Наша команда</h2>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              Люди, которые создают магию.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.team.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <div className="flex items-center justify-center gap-4 mb-8">
              <Award className="w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {aboutData.achievements.title}
              </h2>
            </div>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {aboutData.achievements.items.map((achievement, index) => (
              <AwardCard key={index} achievement={achievement} index={index} />
            ))}
          </div>

          {/* Recognition Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.recognition.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center border-2 border-[#F5EFE7] p-10 md:p-12 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all group"
              >
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 opacity-50 group-hover:opacity-100" />
                <p className="text-5xl md:text-6xl lg:text-7xl mb-4">{stat.number}</p>
                <p className="text-xl md:text-2xl mb-2">{stat.label}</p>
                <p className="text-base opacity-70 group-hover:opacity-90">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-48 h-48 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* CTA - Book a Consultation */}
      <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-white relative overflow-hidden">
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
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-20 h-20 md:w-24 md:h-24" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
              Готовы начать
              <br />
              ваш проект?
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
              Запишитесь на бесплатную консультацию. 
              Обсудим ваши цели, покажем наш подход и составим план роста.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#050608] text-[#F5EFE7] text-xl md:text-2xl group"
                whileHover={{ scale: 1.05, boxShadow: "16px 16px 0px 0px rgba(5,6,8,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
              </motion.a>

              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-3 text-xl md:text-2xl opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ x: 10 }}
              >
                <span>Посмотреть работы</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px)',
          }} />
        </div>

        {/* Floating Quote Marks */}
        <div className="absolute top-20 left-10 text-[15rem] opacity-[0.02] leading-none select-none">"</div>
        <div className="absolute bottom-20 right-10 text-[15rem] opacity-[0.02] leading-none select-none">"</div>
      </section>

      <Footer />
    </div>
  );
}

// ============= COMPONENTS =============

function ValueCard({ value, index }: { value: typeof aboutData.values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] hover:bg-white transition-all h-full"
        whileHover={{ 
          boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
          x: -5,
          y: -5,
        }}
      >
        {/* Icon */}
        <motion.div
          className="text-6xl md:text-7xl mb-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          {value.icon}
        </motion.div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6">{value.title}</h3>
        <p className="text-lg md:text-xl opacity-70 leading-relaxed">{value.description}</p>
      </motion.div>
    </motion.div>
  );
}

function DifferencePoint({ point, index }: { point: typeof aboutData.difference.points[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={index % 2 === 1 ? 'lg:col-start-2' : ''}
      >
        <motion.div
          className="aspect-[16/10] border-4 border-[#050608] overflow-hidden"
          whileHover={{ 
            boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)",
            x: -8,
            y: -8,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }}>
            <ImageWithFallback
              src={point.image}
              alt={point.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <div className="mb-8">
          <motion.div
            className="inline-block px-4 py-2 border-2 border-[#050608] text-sm uppercase tracking-wider mb-6"
            whileHover={{ x: 5 }}
          >
            0{index + 1}
          </motion.div>
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
          {point.title}
        </h3>
        
        <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed">
          {point.description}
        </p>
      </motion.div>
    </div>
  );
}

function TeamMember({ member, index }: { member: typeof aboutData.team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Avatar */}
        <div className="aspect-[3/4] border-2 border-[#050608] overflow-hidden mb-6 relative">
          <ImageWithFallback
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#050608] flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="w-12 h-12 rounded-full border-2 border-[#F5EFE7] flex items-center justify-center hover:bg-[#F5EFE7] hover:text-[#050608] transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xl md:text-2xl mb-2">{member.name}</h3>
          <p className="text-base md:text-lg opacity-60 mb-4">{member.role}</p>
          <p className="text-sm md:text-base opacity-50 leading-relaxed">{member.bio}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AwardCard({ achievement, index }: { achievement: typeof aboutData.achievements.items[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#F5EFE7] p-8 md:p-10 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all h-full flex flex-col"
        whileHover={{ boxShadow: "12px 12px 0px 0px rgba(245,239,231,0.3)" }}
      >
        {/* Icon & Year */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: index * 0.2 }}
          >
            {achievement.icon}
          </motion.div>
          <span className="text-sm opacity-50 group-hover:opacity-70">{achievement.year}</span>
        </div>

        {/* Award Name */}
        <h3 className="text-xl md:text-2xl mb-3">{achievement.award}</h3>
        
        {/* Category */}
        <p className="text-base opacity-70 group-hover:opacity-90 mt-auto">{achievement.category}</p>
      </motion.div>
    </motion.div>
  );
}
