
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import GPTIdeas from '@/components/GPTIdeas';
import ToolsDisclaimer from '@/components/ToolsDisclaimer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show disclaimer after a short delay for better UX
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
    
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Set page title
    document.title = 'Custom GPT Maker Bot - Create AI Tools That Match Your Vision';
  }, []);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070B34] to-[#120024] text-white relative overflow-hidden">
      <SmokeBackground />
      
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <GPTIdeas />
      <ToolsDisclaimer />
      <FAQ />
      <Disclaimer />
      <CTA />
      <Footer />
      
      {showDisclaimer && <DisclaimerPopup onAgree={handleAgreeDisclaimer} />}
    </div>
  );
};

export default Index;
