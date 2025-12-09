import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { reviewsData } from '../../data/reviewsData';
import { 
  Star, 
  Quote, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Heart,
  Sparkles
} from 'lucide-react';

export function Reviews() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Star Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2 20 20-2-20 2-2 20-2-20-20 2 20-2z' fill='%23050608' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Floating Badge */}
            <motion.div
              className="inline-block mb-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white flex items-center gap-3">
                <Star className="w-5 h-5 fill-[#050608]" />
                <span>{reviewsData.hero.badge}</span>
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
              {reviewsData.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-4xl mx-auto leading-relaxed mb-16">
              {reviewsData.hero.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {reviewsData.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="border-2 border-[#050608] p-6 md:p-8 bg-white hover:bg-[#F5EFE7] transition-all"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base uppercase tracking-wider opacity-60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Quote Marks */}
        <FloatingQuotes />
      </section>

      {/* Client Stories */}
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
              <Heart className="w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Клиентские истории
              </h2>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              Реальные результаты, реальный рост
            </p>
          </motion.div>

          <div className="space-y-32">
            {reviewsData.clientStories.map((story, index) => (
              <ClientStoryCard key={index} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
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
              <Play className="w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Видео-отзывы
              </h2>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              Послушайте от наших клиентов напрямую
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewsData.videoTestimonials.map((video, index) => (
              <VideoTestimonialCard key={index} video={video} index={index} />
            ))}
          </div>
        </div>

        {/* Holographic Grid */}
        <HolographicGrid />
      </section>

      {/* Reviews Slider */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
              Что говорят клиенты
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
              {reviewsData.reviews.length} отзывов от реальных проектов
            </p>
          </motion.div>

          <ReviewsSlider reviews={reviewsData.reviews} />
        </div>
      </section>

      {/* Platform Ratings */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <div className="flex items-center justify-center gap-4 mb-8">
              <Award className="w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl">
                Наши рейтинги
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {reviewsData.platforms.map((platform, index) => (
              <PlatformCard key={index} platform={platform} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated Icons */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Star className="w-16 h-16 md:w-20 md:h-20 fill-[#F5EFE7]" />
              </motion.div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
              {reviewsData.cta.title}
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
              {reviewsData.cta.subtitle}
            </p>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(245,239,231,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">{reviewsData.cta.button}</span>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* Background Effects */}
        <ParticlesBackground />
        <FloatingShapes />
      </section>

      <Footer />
    </div>
  );
}

// ============= COMPONENTS =============

function ClientStoryCard({ story, index }: { story: typeof reviewsData.clientStories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[1fr,1.3fr] gap-12 lg:gap-16 items-start ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Client Info Card */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className={index % 2 === 1 ? 'lg:col-start-2' : ''}
      >
        <motion.div
          className="border-4 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] sticky top-24"
          whileHover={{ 
            boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)",
            x: -8,
            y: -8,
          }}
        >
          {/* Avatar & Info */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#050608] overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={story.avatar}
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl mb-2">{story.name}</h3>
              <p className="text-lg opacity-60 mb-1">{story.role}</p>
              <p className="text-base opacity-50">{story.company}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#050608]" />
            ))}
          </div>

          {/* Quote */}
          <div className="relative mb-8">
            <Quote className="w-12 h-12 opacity-10 absolute -top-2 -left-2" />
            <p className="text-xl md:text-2xl leading-relaxed relative z-10 pl-8">
              {story.quote}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 border-2 border-[#050608] text-sm">
              {story.projectType}
            </div>
            <div className="px-4 py-2 border-2 border-[#050608] text-sm">
              {story.industry}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Story Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className={`space-y-10 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        {/* Story */}
        <div>
          <h4 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
            <Users className="w-6 h-6" />
            История
          </h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">{story.story}</p>
        </div>

        {/* Challenge */}
        <div className="border-l-4 border-[#050608] pl-6 md:pl-8">
          <h4 className="text-xl md:text-2xl mb-4">Вызов</h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">{story.challenge}</p>
        </div>

        {/* Solution */}
        <div className="border-l-4 border-[#050608] pl-6 md:pl-8">
          <h4 className="text-xl md:text-2xl mb-4">Решение</h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">{story.solution}</p>
        </div>

        {/* Results */}
        <div className="bg-[#F5EFE7] border-2 border-[#050608] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h4 className="text-xl md:text-2xl">Результаты</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {story.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="text-center p-6 bg-white border-2 border-[#050608]"
              >
                <p className="text-4xl md:text-5xl mb-2">{result.value}</p>
                <p className="text-sm uppercase tracking-wider opacity-60">{result.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function VideoTestimonialCard({ video, index }: { video: typeof reviewsData.videoTestimonials[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      {/* Video Thumbnail */}
      <motion.div
        className="relative aspect-video border-2 border-[#F5EFE7] overflow-hidden mb-6"
        whileHover={{ 
          boxShadow: "16px 16px 0px 0px rgba(245,239,231,0.3)",
          x: -6,
          y: -6,
        }}
      >
        <ImageWithFallback
          src={video.thumbnail}
          alt={video.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-transparent" />
        
        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5EFE7] text-[#050608] flex items-center justify-center border-2 border-[#F5EFE7]">
            <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" />
          </div>
        </motion.div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#F5EFE7] text-[#050608] text-sm">
          {video.duration}
        </div>
      </motion.div>

      {/* Info */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 border-2 border-[#F5EFE7] overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={video.avatar}
            alt={video.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-1">{video.name}</h3>
          <p className="text-sm opacity-60 mb-2">{video.role} at {video.company}</p>
          <p className="text-base opacity-70 italic">"{video.quote}"</p>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewsSlider({ reviews }: { reviews: typeof reviewsData.reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleReviews = 3;
  const maxIndex = Math.max(0, reviews.length - visibleReviews);

  const next = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      {/* Reviews Grid */}
      <div className="overflow-hidden mb-12">
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          animate={{ x: `-${currentIndex * (100 / visibleReviews)}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full lg:min-w-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6">
        <motion.button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-14 h-14 border-2 border-[#050608] flex items-center justify-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 border-2 border-[#050608] transition-all ${
                i === currentIndex ? 'bg-[#050608]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          disabled={currentIndex === maxIndex}
          className="w-14 h-14 border-2 border-[#050608] flex items-center justify-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviewsData.reviews[0] }) {
  return (
    <motion.div
      className="border-2 border-[#050608] p-8 md:p-10 bg-white h-full flex flex-col"
      whileHover={{ 
        boxShadow: "12px 12px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 border-2 border-[#050608] overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-1">{review.name}</h3>
          <p className="text-sm opacity-60">{review.role}</p>
          <p className="text-sm opacity-50">{review.company}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#050608]" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6 flex-1">
        {review.text}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t-2 border-[#050608] border-opacity-10">
        <span className="text-sm px-3 py-1 border-2 border-[#050608]">{review.projectType}</span>
        <span className="text-sm opacity-50">{review.date}</span>
      </div>
    </motion.div>
  );
}

function PlatformCard({ platform, index }: { platform: typeof reviewsData.platforms[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] hover:bg-white transition-all group"
    >
      <motion.div
        className="text-6xl mb-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
      >
        {platform.logo}
      </motion.div>
      <h3 className="text-lg md:text-xl mb-2">{platform.name}</h3>
      <div className="flex items-center justify-center gap-2 mb-2">
        <Star className="w-5 h-5 fill-[#050608]" />
        <p className="text-3xl md:text-4xl">{platform.rating}</p>
      </div>
      <p className="text-sm opacity-60">{platform.reviewCount} reviews</p>
    </motion.div>
  );
}

function FloatingQuotes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Quote className="w-24 h-24" />
        </motion.div>
      ))}
    </div>
  );
}

function HolographicGrid() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <motion.div
        className="w-full h-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px)',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
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

function ParticlesBackground() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Star className="w-2 h-2 fill-[#F5EFE7]" />
        </motion.div>
      ))}
    </div>
  );
}

function FloatingShapes() {
  return (
    <>
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
    </>
  );
}
