"use client";"use client";



import { useEffect, useRef } from "react";import React, { useEffect, useState } from "react";



interface Star {interface Particle {

  x: number;  id: number;

  y: number;  x: number;

  size: number;  y: number;

  opacity: number;  size: number;

  twinkleSpeed: number;  delay: number;

  twinklePhase: number;  duration: number;

}}



interface ZodiacSign {export default function CosmicBackground() {

  symbol: string;  const [particles, setParticles] = useState<Particle[]>([]);

  x: number;

  y: number;  useEffect(() => {

  opacity: number;    const generateParticles = () => {

  fadeSpeed: number;      const newParticles: Particle[] = [];

  fadePhase: number;      // Generar más estrellas para un mejor efecto

  size: number;      for (let i = 0; i < 80; i++) {

}        newParticles.push({

          id: i,

const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];          x: Math.random() * 100,

          y: Math.random() * 100,

export default function CosmicBackground() {          size: Math.random() * 2 + 0.5, // Tamaños más variados

  const canvasRef = useRef<HTMLCanvasElement>(null);          delay: Math.random() * 4, // Mayor variación en delays

          duration: Math.random() * 2 + 1.5, // Duración variable entre 1.5-3.5s

  useEffect(() => {        });

    const canvas = canvasRef.current;      }

    if (!canvas) return;      setParticles(newParticles);

    };

    const ctx = canvas.getContext("2d");

    if (!ctx) return;    generateParticles();

  }, []);

    const resizeCanvas = () => {

      canvas.width = window.innerWidth;  return (

      canvas.height = window.innerHeight;    <div className="cosmic-bg">

    };      {/* Nebulosa roja central */}

      <div className="cosmic-nebula"></div>

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);      {/* Estrellas parpadeantes */}

      <div className="cosmic-particles">

    // Create stars for constellation        {particles.map((particle) => (

    const stars: Star[] = [];          <div

    const starCount = 120;            key={particle.id}

            className="cosmic-particle"

    for (let i = 0; i < starCount; i++) {            style={{

      stars.push({              left: `${particle.x}%`,

        x: Math.random() * canvas.width,              top: `${particle.y}%`,

        y: Math.random() * canvas.height,              width: `${particle.size}px`,

        size: Math.random() * 2 + 0.5,              height: `${particle.size}px`,

        opacity: Math.random() * 0.9 + 0.1,              animationDelay: `${particle.delay}s`,

        twinkleSpeed: Math.random() * 0.03 + 0.01,              animationDuration: `${particle.duration}s`,

        twinklePhase: Math.random() * Math.PI * 2,            }}

      });          />

    }        ))}

      </div>

    // Create zodiac signs    </div>

    const zodiacSigns: ZodiacSign[] = [];  );

    for (let i = 0; i < 8; i++) {}

      zodiacSigns.push({
        symbol: zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: 0,
        fadeSpeed: Math.random() * 0.02 + 0.008,
        fadePhase: Math.random() * Math.PI * 2,
        size: Math.random() * 20 + 25,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas with deep space gradient (blue and black theme)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(0, 6, 20, 1)");      // Deep space blue
      gradient.addColorStop(0.3, "rgba(0, 15, 40, 1)");   // Darker blue
      gradient.addColorStop(0.7, "rgba(5, 10, 30, 1)");   // Navy
      gradient.addColorStop(1, "rgba(0, 0, 15, 1)");      // Almost black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines (subtle)
      ctx.strokeStyle = "rgba(100, 150, 255, 0.15)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < stars.length - 1; i += 8) {
        const star1 = stars[i];
        const star2 = stars[i + Math.floor(Math.random() * 4) + 1];
        if (star2) {
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
          ctx.stroke();
        }
      }

      // Draw twinkling stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity * (0.4 + 0.6 * twinkle);
        
        // Blue-white star color
        ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add star cross effect for brighter stars
        if (currentOpacity > 0.8) {
          ctx.strokeStyle = `rgba(150, 200, 255, ${currentOpacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 3, star.y);
          ctx.lineTo(star.x + star.size * 3, star.y);
          ctx.moveTo(star.x, star.y - star.size * 3);
          ctx.lineTo(star.x, star.y + star.size * 3);
          ctx.stroke();
        }
      });

      // Draw zodiac signs (appearing and disappearing)
      zodiacSigns.forEach((sign, index) => {
        const fade = Math.sin(time * sign.fadeSpeed + sign.fadePhase);
        sign.opacity = Math.max(0, (fade + 1) / 2);
        
        if (sign.opacity > 0.1) {
          ctx.fillStyle = `rgba(100, 150, 255, ${sign.opacity * 0.6})`;
          ctx.font = `${sign.size}px serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          
          // Add glow effect
          ctx.shadowColor = "rgba(100, 150, 255, 0.8)";
          ctx.shadowBlur = 15;
          ctx.fillText(sign.symbol, sign.x, sign.y);
          ctx.shadowBlur = 0;
        }
        
        // Respawn zodiac sign in new location when it fades out
        if (fade < -0.95 && Math.random() < 0.002) {
          sign.x = Math.random() * canvas.width;
          sign.y = Math.random() * canvas.height;
          sign.symbol = zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)];
        }
      });

      // Add mystical blue nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.7, 0,
        canvas.width * 0.3, canvas.height * 0.7, canvas.width / 2
      );
      nebulaGradient.addColorStop(0, "rgba(50, 100, 200, 0.08)");
      nebulaGradient.addColorStop(0.5, "rgba(30, 80, 180, 0.04)");
      nebulaGradient.addColorStop(1, "rgba(10, 50, 150, 0)");
      
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "transparent" }}
    />
  );
}