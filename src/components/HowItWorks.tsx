
import React from 'react';
import { Sparkles, MessageSquare, Bot, ArrowRight, Check, Lightbulb } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="text-neon-cyan" size={32} />,
      title: "Define Your GPT Vision",
      description: "Tell the AI what type of GPT you'd like to create. Be specific about capabilities, tone, and purpose."
    },
    {
      icon: <Bot className="text-neon-purple" size={32} />,
      title: "AI Crafts Custom Instructions",
      description: "The system creates comprehensive operating instructions tailored specifically to your requirements."
    },
    {
      icon: <Check className="text-neon-pink" size={32} />,
      title: "Confirm and Activate",
      description: "Review the instructions and type 'YES' to activate your custom GPT with all specified capabilities."
    },
    {
      icon: <Sparkles className="text-neon-cyan" size={32} />,
      title: "Use Your Custom GPT",
      description: "Immediately start working with your specialized AI assistant tailored exactly to your needs."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold mb-3">
            PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating your perfect custom GPT is simple and intuitive. Follow these steps to transform AI to match your exact vision.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-neon-cyan z-10">
                    <ArrowRight size={24} />
                  </div>
                )}
                
                <div 
                  className="glass-card rounded-lg p-6 h-full hover:shadow-neon-cyan transition-all duration-300 animate-fade-in relative z-0"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center glass-card border border-neon-cyan/30 shadow-neon-cyan">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button inline-block"
          >
            <span className="flex items-center justify-center gap-2">
              <Bot size={16} className="group-hover:animate-pulse" />
              TRY CUSTOM GPT MAKER
              <Sparkles size={16} className="animate-pulse" />
            </span>
          </a>
          
          <a 
            href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-3 rounded-lg text-neon-purple font-medium transition-all border-2 border-neon-purple hover:shadow-neon-purple hover:bg-neon-purple/10 inline-block"
          >
            <span className="flex items-center justify-center gap-2">
              <Lightbulb size={16} />
              TRY GPT IDEAS ASSISTANT
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
