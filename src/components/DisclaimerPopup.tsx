
import React, { useState } from 'react';
import { X, WandSparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface DisclaimerPopupProps {
  onAgree: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAgree }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleAgree = () => {
    toast('Welcome aboard!', {
      description: 'Thanks for accepting our terms.',
      position: 'bottom-right',
    });
    onAgree();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div 
        className="relative w-full max-w-md neo-blur rounded-xl overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
        
        <button 
          onClick={onAgree} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-gradient">
            Before You Continue
          </h2>
          
          <div className="space-y-4 font-rajdhani text-gray-300">
            <p>
              By using <span className="font-semibold text-white">CUSTOM GPT MAKER BOT</span>, you acknowledge:
            </p>
            
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>All custom GPTs created are subject to OpenAI's content policies</li>
              <li>We don't store your OpenAI API credentials or sensitive data</li>
              <li>Results may vary based on your prompts and OpenAI's systems</li>
              <li>This tool is intended for educational and creative purposes</li>
            </ul>
            
            <p className="text-sm text-gray-400 italic">
              For complete terms, please see our full <a href="#disclaimer" className="text-neon-cyan hover:underline">Disclaimer</a>.
            </p>
          </div>
        </div>
        
        <div className="p-6 pt-0">
          <motion.button
            onClick={handleAgree}
            className="w-full relative overflow-hidden rounded-lg px-4 py-3 group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-cyberpunk-gradient bg-[length:300%] animate-background-pan opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            
            <motion.div 
              className="relative z-10 flex items-center justify-center gap-2 font-orbitron font-bold tracking-wide text-white"
              animate={{ y: isHovering ? -2 : 0 }}
            >
              <WandSparkles className="w-5 h-5" />
              <span>I AGREE</span>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 -z-10 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-neon-cyan/10 rounded-lg blur-xl"></div>
                </motion.div>
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;
