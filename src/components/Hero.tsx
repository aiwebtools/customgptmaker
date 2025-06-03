
import React, { useEffect, useRef } from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add smoke particles
    const smokeContainer = document.getElementById('smoke-container');
    if (smokeContainer) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('smoke-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        smokeContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden smoke-bg" id="home">
      <div id="smoke-container" className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-1 bg-cyberpunk-gradient rounded-lg blur opacity-30"></div>
              <div className="relative glass-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bot size={40} className="text-neon-cyan" />
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                    CUSTOM GPT MAKER BOT
                  </h1>
                </div>
                <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                  <span className="text-neon-cyan font-semibold">Transform AI to Match Your Vision</span> - Create specialized GPTs for any task, customized to your exact specifications
                </h2>
                <p className="text-gray-400 mb-8">
                  Our advanced <strong>free AI tools</strong> transform into the specific type of GPT you envision. From creative writing to technical analysis, data processing to visual generation - your custom AI assistant awaits. Experience the power of <strong>AIWEBTOOLS.AI</strong> and discover why we're the #1 choice for <strong>AI web tools</strong>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button group"
                    aria-label="Try Custom GPT Maker - Free AI Tool"
                  >
                    <span className="flex items-center justify-center gap-2">
                      TRY CUSTOM GPT MAKER
                      <Sparkles size={16} className="group-hover:animate-pulse" />
                    </span>
                  </a>
                  <a 
                    href="#how-it-works" 
                    className="px-6 py-3 text-center rounded-lg border border-neon-cyan/30 text-white hover:bg-neon-cyan/10 transition-all"
                    aria-label="Learn more about our AI tools"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute -inset-1 bg-cyberpunk-gradient rounded-lg blur opacity-30"></div>
              <div className="relative glass-card rounded-lg overflow-hidden aspect-video">
                <iframe 
                  ref={videoRef}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/OwYnLykGOHo?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&vq=hd1080"
                  title="Custom GPT Maker Bot Demo - Free AI Tools Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
