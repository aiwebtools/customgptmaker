
import React from 'react';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

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
            <div className="flex flex-col items-center">
              <a 
                href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all border-2 border-neon-purple shadow-lg hover:shadow-neon-purple group bg-neon-purple/10 transform hover:scale-105 duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 opacity-70 animate-pulse-glow"></span>
                <span className="flex items-center justify-center gap-3 text-neon-purple text-lg font-bold relative z-10">
                  <Lightbulb size={20} className="animate-pulse" />
                  TRY GPT IDEAS ASSISTANT
                  <Sparkles size={16} className="animate-pulse" />
                </span>
              </a>
              
              <p className="mt-5 text-gray-300 text-base max-w-md mx-auto border-t border-neon-purple/20 pt-4">
                <span className="font-semibold text-neon-purple">Perfect companion to CUSTOM GPT MAKER BOT</span> - get ideas first, then create them!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPTIdeas;
