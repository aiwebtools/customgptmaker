
import React, { useEffect, useRef } from "react";

const SmokeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      life: number;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 5;
        this.color = `rgba(50, 50, 100, ${Math.random() * 0.2})`;
        this.velocity = {
          x: (Math.random() - 0.5) * 1,
          y: Math.random() * -1 - 0.5
        };
        this.life = 100;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life -= 1;
        this.opacity -= 0.005;
        
        if (this.opacity < 0) this.opacity = 0;
        
        // Gradually reduce velocity
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;
        
        // Expand particle size slightly
        this.radius += 0.2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        ctx.fill();
      }
    }
    
    const particles: Particle[] = [];
    
    const createSmoke = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + 20;
      
      particles.push(new Particle(x, y));
      
      if (particles.length > 200) {
        particles.shift();
      }
    };
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles at a certain rate
      if (Math.random() > 0.8) {
        createSmoke();
      }
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles
        if (particle.life <= 0 || particle.opacity <= 0) {
          particles.splice(index, 1);
        }
      });
    };
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default SmokeBackground;
