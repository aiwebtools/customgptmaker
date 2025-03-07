
import React from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 glass-card bg-black/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot size={32} className="text-neon-cyan animate-pulse-glow" />
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-gradient">
              CUSTOM GPT MAKER BOT
            </h1>
            <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-purple transition-colors">AiWebTools.Ai</a></p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" isButton={true} buttonColor="cyan">CUSTOM GPT MAKER</NavLink>
          <NavLink href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" isButton={true} buttonColor="purple">GPT IDEAS</NavLink>
          <NavLink href="#how-it-works">HOW IT WORKS</NavLink>
          <NavLink href="#gpt-ideas">GPT IDEAS</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#disclaimer">DISCLAIMER</NavLink>
          <NavLink href="https://www.aiwebtools.ai" target="_blank">MORE AI TOOLS</NavLink>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  buttonColor?: 'cyan' | 'purple';
  target?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isButton = false, buttonColor = 'cyan', target }) => {
  return (
    <a 
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={cn(
        "transition-all duration-300 text-sm font-semibold tracking-wide",
        isButton
          ? cn(
              "relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium transition-all",
              buttonColor === 'purple' ? "before:bg-neon-purple/20 hover:shadow-neon-purple" : "before:bg-cyberpunk-gradient before:animate-background-pan before:bg-[length:300%] before:opacity-80 hover:shadow-neon-cyan"
            )
          : "text-gray-300 hover:text-neon-cyan relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-cyan after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      )}
    >
      {isButton ? (
        <>
          <span className="absolute inset-0 bg-black/50 rounded-lg"></span>
          <span className={cn(
            "relative z-10", 
            buttonColor === 'purple' ? "text-neon-purple" : "text-neon-cyan"
          )}>
            {children}
          </span>
        </>
      ) : children}
    </a>
  );
};

export default Header;
