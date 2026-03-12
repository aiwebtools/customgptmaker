import React, { useState, useCallback } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 glass-card bg-black/50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 min-w-0">
          <Bot size={28} className="text-neon-cyan animate-pulse-glow shrink-0 sm:w-8 sm:h-8" />
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold tracking-wider text-gradient truncate">
              CUSTOM GPT MAKER BOT
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-400">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-purple transition-colors">AiWebTools.Ai</a></p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <NavLink href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" isButton={true} buttonColor="cyan">CUSTOM GPT MAKER</NavLink>
          <NavLink href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" isButton={true} buttonColor="purple">GPT IDEAS ASSISTANT</NavLink>
          <NavLink href="#how-it-works">HOW IT WORKS</NavLink>
          <NavLink href="#gpt-ideas">GPT IDEAS</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#disclaimer">DISCLAIMER</NavLink>
          <NavLink href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank">MORE AI TOOLS</NavLink>
        </nav>
        
        <div className="lg:hidden">
          <button 
            className="p-2 text-white active:scale-95 transition-transform touch-manipulation" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-200 ease-out overflow-hidden",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3 py-3">
            <NavLink 
              href="https://chatgpt.com/g/g-XTJkJ0mqv-custom-gpt-maker" 
              isButton={true} 
              buttonColor="cyan"
              onClick={closeMenu}
            >
              CUSTOM GPT MAKER
            </NavLink>
            <NavLink 
              href="https://chatgpt.com/g/g-U8BWKcCkq-gpt-ideas" 
              isButton={true} 
              buttonColor="purple"
              onClick={closeMenu}
            >
              GPT IDEAS ASSISTANT
            </NavLink>
            <NavLink 
              href="https://chatgpt.com/g/g-jE03GzdaZ-ai-tools-finder-expert" 
              isButton={true} 
              buttonColor="cyan"
              onClick={closeMenu}
            >
              AI TOOLS FINDER & EXPERT
            </NavLink>
            <NavLink href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</NavLink>
            <NavLink href="#gpt-ideas" onClick={closeMenu}>GPT IDEAS</NavLink>
            <NavLink href="#faq" onClick={closeMenu}>FAQ</NavLink>
            <NavLink href="#disclaimer" onClick={closeMenu}>DISCLAIMER</NavLink>
            <NavLink href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" onClick={closeMenu}>MORE AI TOOLS</NavLink>
          </nav>
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
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isButton = false, buttonColor = 'cyan', target, onClick }) => {
  return (
    <a 
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "transition-all duration-200 text-sm font-semibold tracking-wide touch-manipulation",
        isButton
          ? cn(
              "relative overflow-hidden px-5 py-3 rounded-lg text-white font-medium transition-all active:scale-95",
              buttonColor === 'purple' ? "before:bg-neon-purple/20 hover:shadow-neon-purple" : "before:bg-cyberpunk-gradient before:animate-background-pan before:bg-[length:300%] before:opacity-80 hover:shadow-neon-cyan"
            )
          : "text-gray-300 hover:text-neon-cyan py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-cyan after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
