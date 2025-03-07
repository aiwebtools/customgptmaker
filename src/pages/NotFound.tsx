
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bot } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = '404 - Page Not Found | CUSTOM GPT MAKER BOT';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#070B34] to-[#120024] overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="smoke-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 glass-card rounded-lg p-8 max-w-md w-full text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full glass-card border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
          <Bot size={40} className="text-neon-cyan" />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! This page does not exist.</p>
        
        <a 
          href="/" 
          className="neon-button inline-block"
        >
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
