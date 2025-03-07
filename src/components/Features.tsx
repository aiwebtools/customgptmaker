
import React from 'react';
import { Sparkles, Shuffle, Code, Search, BrainCircuit, LineChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shuffle className="text-neon-cyan" size={32} />,
      title: "Adaptable Intelligence",
      description: "Transforms into any GPT role or persona you need, whether creative, technical, or analytical."
    },
    {
      icon: <Code className="text-neon-purple" size={32} />,
      title: "Custom Instructions",
      description: "Creates comprehensive operating instructions tailored precisely to your specific requirements."
    },
    {
      icon: <Search className="text-neon-pink" size={32} />,
      title: "Web-Enhanced Research",
      description: "Conducts thorough web searches for up-to-date data combined with extensive base knowledge."
    },
    {
      icon: <BrainCircuit className="text-neon-cyan" size={32} />,
      title: "Intelligent Guidance",
      description: "Asks clarifying questions to understand your vision and deliver optimal, tailored results."
    },
    {
      icon: <LineChart className="text-neon-purple" size={32} />,
      title: "Data Analysis",
      description: "Specializes in analyzing complex data, including live web data and world statistics."
    },
    {
      icon: <Sparkles className="text-neon-pink" size={32} />,
      title: "Unlimited Potential",
      description: "Access to all capabilities, features, and functions to perform virtually any task you can imagine."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-semibold mb-3">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Unlock Limitless AI Possibilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform ChatGPT into exactly what you need with our CUSTOM GPT MAKER BOT. 
            Create specialized AI assistants tailored to your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-6 hover:shadow-neon-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
