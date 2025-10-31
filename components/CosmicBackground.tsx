"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ZodiacSign {
  imageSrc: string;
  image: HTMLImageElement | null;
  x: number;
  y: number;
  baseX: number; // Posición base para orbitar
  baseY: number; // Posición base para orbitar
  orbitRadius: number; // Radio de órbita
  orbitSpeed: number; // Velocidad de órbita
  orbitPhase: number; // Fase inicial de órbita
  opacity: number;
  fadeSpeed: number;
  fadePhase: number;
  size: number;
  driftSpeed: number; // Velocidad de deriva lenta
  driftPhase: number; // Fase de deriva
}

const zodiacImages = [
  "/images/aries.png",
  "/images/tauro.png",
  "/images/geminis.png",
  "/images/cancer.png",
  "/images/leo.png",
  "/images/virgo.png",
  "/images/libra.png",
  "/images/escorpio.png",
  "/images/sagitario.png",
  "/images/capricornio.png",
  "/images/acuario.png",
  "/images/piscis.png",
];

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars for constellation
    const stars: Star[] = [];
    const starCount = 120;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.9 + 0.1,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create zodiac signs
    const zodiacSigns: ZodiacSign[] = [];
    for (let i = 0; i < 16; i++) {
      const imageSrc =
        zodiacImages[Math.floor(Math.random() * zodiacImages.length)];
      const image = new Image();

      // Agregar evento de carga para confirmar que la imagen se carga
      image.onload = () => {
        console.log(`Imagen cargada: ${imageSrc}`);
      };

      image.onerror = () => {
        console.error(`Error cargando imagen: ${imageSrc}`);
      };

      image.src = imageSrc;

      const baseX = Math.random() * canvas.width;
      const baseY = Math.random() * canvas.height;

      zodiacSigns.push({
        imageSrc,
        image,
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        orbitRadius: Math.random() * 50 + 20, // Radio de órbita pequeño (20-70px)
        orbitSpeed:
          (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1), // Velocidad y dirección aleatoria
        orbitPhase: Math.random() * Math.PI * 2,
        opacity: 0.8,
        fadeSpeed: Math.random() * 0.01 + 0.003, // Más lento el fade
        fadePhase: Math.random() * Math.PI * 2,
        size: Math.random() * 30 + 50, // Tamaño 50-80px
        driftSpeed: Math.random() * 0.001 + 0.0005, // Deriva muy lenta
        driftPhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Clear canvas with deep space gradient (blue and black theme)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(0, 6, 20, 1)"); // Deep space blue
      gradient.addColorStop(0.3, "rgba(0, 15, 40, 1)"); // Darker blue
      gradient.addColorStop(0.7, "rgba(5, 10, 30, 1)"); // Navy
      gradient.addColorStop(1, "rgba(0, 0, 15, 1)"); // Almost black

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines (more subtle and slower)
      if (Math.sin(time * 0.5) > 0.3) {
        // Only show lines sometimes
        ctx.strokeStyle = `rgba(100, 150, 255, ${
          0.05 + Math.sin(time * 0.3) * 0.03
        })`;
        ctx.lineWidth = 0.3;
        for (let i = 0; i < stars.length - 1; i += 15) {
          // Less frequent lines
          const star1 = stars[i];
          const star2 = stars[i + Math.floor(Math.random() * 3) + 1];
          if (star2 && Math.random() > 0.7) {
            // Only draw some lines
            const distance = Math.sqrt(
              (star1.x - star2.x) ** 2 + (star1.y - star2.y) ** 2
            );
            if (distance < 200) {
              // Only connect nearby stars
              ctx.beginPath();
              ctx.moveTo(star1.x, star1.y);
              ctx.lineTo(star2.x, star2.y);
              ctx.stroke();
            }
          }
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

      // Draw zodiac signs con movimiento orbital suave
      zodiacSigns.forEach((sign, index) => {
        // Actualizar fade para opacidad suave
        const fade = Math.sin(time * sign.fadeSpeed + sign.fadePhase);
        sign.opacity = Math.max(0.3, Math.min(0.8, (fade + 1) / 2 + 0.2));

        // Calcular movimiento orbital suave alrededor del punto base
        const orbitX =
          Math.cos(time * sign.orbitSpeed + sign.orbitPhase) * sign.orbitRadius;
        const orbitY =
          Math.sin(time * sign.orbitSpeed + sign.orbitPhase) * sign.orbitRadius;

        // Añadir deriva lenta del punto base
        const driftX = Math.cos(time * sign.driftSpeed + sign.driftPhase) * 30;
        const driftY =
          Math.sin(time * sign.driftSpeed + sign.driftPhase + Math.PI / 3) * 20;

        // Actualizar posición final
        sign.x = sign.baseX + orbitX + driftX;
        sign.y = sign.baseY + orbitY + driftY;

        // Mantener dentro de los límites del canvas
        if (sign.x < 0 || sign.x > canvas.width) {
          sign.baseX = Math.random() * canvas.width;
        }
        if (sign.y < 0 || sign.y > canvas.height) {
          sign.baseY = Math.random() * canvas.height;
        }

        if (sign.image && sign.image.complete) {
          // Set global opacity for the image
          ctx.globalAlpha = sign.opacity;

          // Add subtle glow effect que pulsa suavemente
          const glowIntensity = 0.6 + Math.sin(time * 2 + index) * 0.2;
          ctx.shadowColor = `rgba(150, 200, 255, ${glowIntensity})`;
          ctx.shadowBlur = 15 + Math.sin(time * 1.5 + index) * 8;

          // Draw the zodiac image con rotación muy sutil
          const imageSize = sign.size;
          const rotation = time * 0.1 + index * 0.5; // Rotación muy lenta

          ctx.save();
          ctx.translate(sign.x, sign.y);
          ctx.rotate(rotation);
          ctx.drawImage(
            sign.image,
            -imageSize / 2,
            -imageSize / 2,
            imageSize,
            imageSize
          );
          ctx.restore();

          // Reset shadow and alpha
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        // Cambio ocasional y suave de imagen (sin teletransporte)
        if (Math.random() < 0.0001) {
          // Muy ocasional
          const newImageSrc =
            zodiacImages[Math.floor(Math.random() * zodiacImages.length)];
          if (newImageSrc !== sign.imageSrc) {
            sign.imageSrc = newImageSrc;
            const newImage = new Image();
            newImage.onload = () => {
              sign.image = newImage;
            };
            newImage.src = newImageSrc;
          }
        }
      });

      // Add mystical blue nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.7,
        0,
        canvas.width * 0.3,
        canvas.height * 0.7,
        canvas.width / 2
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
