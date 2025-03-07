
import React from 'react';
import { Bot, Mail, Phone, Lightbulb } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/70 glass-card border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Bot size={28} className="text-neon-cyan mr-2" />
              <h3 className="text-xl font-bold text-gradient">CUSTOM GPT MAKER BOT</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Transform AI to match your exact vision. Create specialized GPTs for any task, customized to your specifications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-white transition-colors flex items-center"
              >
                <span className="border-b border-neon-cyan/50">USE CUSTOM GPT MAKER</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-neon-cyan transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-neon-cyan transition-colors">Features</a>
              </li>
              <li>
                <a 
                  href="https://aitoolfinder.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  AI TOOLS FINDER & EXPERT GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  GPT Ideas Assistant
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neon-cyan hover:text-white transition-colors flex items-center"
                >
                  <Bot size={14} className="mr-1" />
                  <span className="border-b border-neon-cyan/50">TRY CUSTOM GPT MAKER</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-cyan transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-neon-cyan transition-colors">Disclaimer</a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="flex items-center text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2 text-white">Legal</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neon-cyan transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full glass-card border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 transition-all flex items-center"
            >
              <Lightbulb size={16} className="mr-2" />
              TRY GPT IDEAS ASSISTANT
            </a>
            
            <a 
              href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full glass-card border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all flex items-center"
            >
              <Bot size={16} className="mr-2" />
              TRY CUSTOM GPT MAKER
            </a>
            
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 rounded-full glass-card border border-white/30 text-white hover:bg-white/10 transition-all flex items-center"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
