
import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

const GPTIdeas: React.FC = () => {
  return (
    <section id="gpt-ideas" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cyberpunk-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              You Might Also Like: GPT Ideas Assistant
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate 25 innovative and practical GPT application ideas tailored to your industry needs. Get detailed instructions for creating custom GPTs with all capabilities enabled.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-neon-purple">What GPT Ideas Assistant Does:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-2">
                    <Lightbulb size={20} className="text-neon-cyan shrink-0 mt-1" />
                    <span>Generates 25 innovative GPT application ideas for any industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb size={20} className="text-neon-cyan shrink-0 mt-1" />
                    <span>Provides detailed instructions for implementing each idea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb size={20} className="text-neon-cyan shrink-0 mt-1" />
                    <span>Tailors suggestions to specific industries like technology, healthcare, education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb size={20} className="text-neon-cyan shrink-0 mt-1" />
                    <span>Creates business plans and technical blueprints on request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb size={20} className="text-neon-cyan shrink-0 mt-1" />
                    <span>Includes all necessary Python libraries and coding requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="glow-effect rounded-full w-48 h-48 flex items-center justify-center bg-black/50">
                  <Lightbulb size={80} className="text-neon-purple animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-button group"
            >
              <span className="flex items-center justify-center gap-2">
                TRY GPT IDEAS ASSISTANT NOW
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              Perfect companion to CUSTOM GPT MAKER BOT - get ideas first, then create them!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPTIdeas;
