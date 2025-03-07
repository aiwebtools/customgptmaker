
import React from 'react';
import { AlertTriangle, Bot, Lightbulb } from 'lucide-react';

const ToolsDisclaimer: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden" id="tools-disclaimer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-semibold mb-3">
            IMPORTANT INFORMATION
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Tools Disclaimer</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom GPT Maker Disclaimer */}
          <div className="glass-card rounded-lg p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-neon-cyan" size={28} />
              <h3 className="text-xl font-semibold text-white">Custom GPT Maker</h3>
            </div>
            
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <strong className="text-neon-cyan">Usage Requirements:</strong> Requires a ChatGPT Plus subscription to access and use.
              </p>
              <p>
                <strong className="text-neon-cyan">Limitations:</strong> Custom GPTs created with this tool are subject to OpenAI's usage policies and capabilities. Not all features may be available depending on your subscription level.
              </p>
              <p>
                <strong className="text-neon-cyan">Ownership:</strong> Custom GPTs you create belong to you, but operate within OpenAI's platform and infrastructure.
              </p>
              <p>
                <strong className="text-neon-cyan">Best Practices:</strong> For optimal results, provide clear, detailed instructions and test your custom GPT thoroughly before sharing.
              </p>
              
              <div className="pt-3">
                <a 
                  href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-cyan hover:underline"
                >
                  Try Custom GPT Maker
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* GPT Ideas Assistant Disclaimer */}
          <div className="glass-card rounded-lg p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-neon-purple" size={28} />
              <h3 className="text-xl font-semibold text-white">GPT Ideas Assistant</h3>
            </div>
            
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <strong className="text-neon-purple">Usage Requirements:</strong> Requires a ChatGPT Plus subscription to access and use.
              </p>
              <p>
                <strong className="text-neon-purple">Purpose:</strong> This tool generates ideas for custom GPT applications across various industries, but implementation feasibility may vary.
              </p>
              <p>
                <strong className="text-neon-purple">Suggestions:</strong> Ideas generated are for inspiration only. Technical implementation details may require additional expertise or resources.
              </p>
              <p>
                <strong className="text-neon-purple">Best Practices:</strong> Be specific about your industry or use case when requesting ideas for more relevant suggestions.
              </p>
              
              <div className="pt-3">
                <a 
                  href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-purple hover:underline"
                >
                  Try GPT Ideas Assistant
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsDisclaimer;
