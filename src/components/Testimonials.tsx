
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Content Creator",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I created a specialized writing assistant that perfectly matches my tone and style. It's like having a clone of myself to help with content creation. Game changer!",
      stars: 5
    },
    {
      name: "Jason Chen",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Made a custom GPT that specializes in analyzing complex datasets and generating visualizations. The level of customization is incredible, and it adapts perfectly to my workflow.",
      stars: 5
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Created a marketing strategy assistant that understands our brand voice and target audience. It helps us generate campaigns that truly resonate with our customers.",
      stars: 5
    },
    {
      name: "Michael Torres",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "Built a coding assistant that knows our codebase conventions. It helps with debugging and generating boilerplate code exactly to our standards. Saved countless hours!",
      stars: 4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-sm font-semibold mb-3">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What People Are Creating</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how users are leveraging CUSTOM GPT MAKER BOT to build specialized AI assistants for their unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-cyberpunk-gradient animate-pulse-glow"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white/10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < testimonial.stars ? "text-neon-cyan" : "text-gray-600"} 
                        fill={i < testimonial.stars ? "#0ff" : "none"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
