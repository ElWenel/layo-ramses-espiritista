"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function CosmicBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      // Generar estrellas doradas para el tema cósmico
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5, // Tamaños más variados
          delay: Math.random() * 4, // Mayor variación en delays
          duration: Math.random() * 2 + 1.5, // Duración variable entre 1.5-3.5s
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="cosmic-bg">
      {/* Nebulosa roja central */}
      <div className="cosmic-nebula"></div>

      {/* Estrellas parpadeantes doradas */}
      <div className="cosmic-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="cosmic-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}