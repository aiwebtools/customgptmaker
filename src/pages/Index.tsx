
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
import VideoBackground from '@/components/VideoBackground';

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
    
    // Enhanced SEO meta tags
    document.title = 'Custom GPT Maker Bot - Free AI Tools | AIWEBTOOLS.AI';
    
    // Add dynamic meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create custom GPTs with our free AI tools. AIWEBTOOLS.AI offers the best Custom GPT Maker Bot to build specialized AI assistants. Transform AI to match your vision with advanced AI web tools.');
    }
    
    // Add structured data for breadcrumbs
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aiwebtools.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Free AI Tools",
          "item": "https://www.aiwebtools.ai#features"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Custom GPT Maker",
          "item": "https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);
  }, []);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <>
      {/* Hidden SEO content */}
      <div className="sr-only">
        <h1>AIWEBTOOLS.AI - Free AI Tools and Custom GPT Maker Bot</h1>
        <p>Leading provider of free AI tools including Custom GPT Maker Bot, GPT Ideas Assistant, and specialized AI web tools for businesses and individuals.</p>
      </div>
      
      <div className="min-h-screen bg-gradient-to-b from-[#070B34] to-[#120024] text-white relative overflow-hidden">
        <SmokeBackground />
        
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <GPTIdeas />
          <ToolsDisclaimer />
          <FAQ />
          <Disclaimer />
          <CTA />
          <VideoBackground />
        </main>
        <Footer />
        
        {showDisclaimer && <DisclaimerPopup onAgree={handleAgreeDisclaimer} />}
      </div>
    </>
  );
};

export default Index;
