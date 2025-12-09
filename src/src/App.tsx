import { useState } from 'react';
import { Hero } from './components/Hero';
import { FocusSection } from './components/FocusSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CasePreview } from './components/CasePreview';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { CaseStudy } from './pages/CaseStudy';
import { CaseStudyPremium } from './pages/CaseStudyPremium';
import { About } from './pages/About';
import { Process } from './pages/Process';
import { Pricing } from './pages/Pricing';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'portfolio' | 'case-study' | 'case-study-premium' | 'about' | 'process' | 'pricing' | 'reviews' | 'contact'>('home');

  // Simple page routing handler
  const handleNavigate = (page: 'home' | 'services' | 'portfolio' | 'case-study' | 'case-study-premium' | 'about' | 'process' | 'pricing' | 'reviews' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Expose navigation function globally for components
  (window as any).navigateTo = handleNavigate;

  if (currentPage === 'services') {
    return <Services />;
  }

  if (currentPage === 'portfolio') {
    return <Portfolio />;
  }

  if (currentPage === 'case-study') {
    return <CaseStudy />;
  }

  if (currentPage === 'case-study-premium') {
    return <CaseStudyPremium />;
  }

  if (currentPage === 'about') {
    return <About />;
  }

  if (currentPage === 'process') {
    return <Process />;
  }

  if (currentPage === 'pricing') {
    return <Pricing />;
  }

  if (currentPage === 'reviews') {
    return <Reviews />;
  }

  if (currentPage === 'contact') {
    return <Contact />;
  }

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Navigation />
      <Hero />
      <FocusSection />
      <WhyUsSection />
      <CasePreview />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}