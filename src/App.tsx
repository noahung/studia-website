import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSolution } from './components/ProblemSolution';
import { CoursesSection } from './components/CoursesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { TermsPage } from './components/TermsPage';
import './styles/globals.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'contact') {
    return (
      <div className="relative min-h-screen bg-[#061022]">
        <Header onNavigate={handleNavigate} />
        <ContactPage onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="relative min-h-screen bg-[#061022]">
        <Header onNavigate={handleNavigate} />
        <TermsPage onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#061022]">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {/* Scene 1: Hero */}
        <HeroSection />
        
        {/* Scene 2: Problem → Solution */}
        <ProblemSolution />
        
        {/* Scene 3: Courses */}
        <div id="courses">
          <CoursesSection />
        </div>
        
        {/* Scene 4: Features */}
        <div id="features">
          <FeaturesSection />
        </div>
        
        {/* Scene 5: Pricing */}
        <div id="pricing">
          <PricingSection />
        </div>
        
        {/* Scene 6: How it works */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        {/* Scene 7: Testimonials */}
        <TestimonialsSection />
        
        {/* Scene 8: Download CTA */}
        <DownloadSection />
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
