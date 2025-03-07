
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 bg-cyberpunk-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Create Your Perfect AI Assistant?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform AI to match your exact vision with just a few simple steps. 
            Unlock the full potential of custom GPTs today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-button group"
            >
              <span className="flex items-center justify-center gap-2">
                USE CUSTOM GPT MAKER FREE NOW
                <Sparkles size={16} className="group-hover:animate-pulse" />
              </span>
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-neon-cyan/30 text-white hover:bg-neon-cyan/10 transition-all flex items-center justify-center gap-2"
            >
              Discover More AI Tools
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
