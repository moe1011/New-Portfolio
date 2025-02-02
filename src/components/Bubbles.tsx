import React, { useEffect, useRef } from 'react';

interface Flare {
  x: number;
  y: number;
  size: number;
  color1: string;
  color2: string;
  speed: number;
  angle: number;
}

interface BubblesProps {
  opacity?: number;
  size?: number;
  count?: number;
}

export default function Bubbles({ 
  opacity = 1.0,    // Slightly lower base opacity
  size = 0.5,
  count = 4
}: BubblesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Color palette that complements pink/rose
    const colors = [
      [255, 20, 147],   // Deep pink
      [255, 0, 128],    // Bright pink
      [255, 0, 255],    // Magenta
      [238, 130, 238],  // Violet
      [199, 21, 133],   // Medium violet red
      [255, 105, 180],  // Hot pink
    ];

    // Add padding to the canvas area
    const PADDING = 200; // Pixels of padding top/bottom

    const flares: Flare[] = Array.from({ length: count }, () => {
      const colorSet = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * canvas.width,
        y: PADDING + (Math.random() * (canvas.height - PADDING * 2)), // Constrain Y position
        size: (Math.random() * 100 + 50) * size, // Smaller size for more defined circles
        color1: `rgba(${colorSet[0]}, ${colorSet[1]}, ${colorSet[2]}, ${opacity * 0.15})`, // Adjust base opacity
        color2: `rgba(${colorSet[0]}, ${colorSet[1]}, ${colorSet[2]}, 0)`,
        speed: Math.random() * 0.1 + 0.02,
        angle: Math.random() * Math.PI * 2,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flares.forEach((flare) => {
        // Move flare
        flare.x += Math.cos(flare.angle) * flare.speed;
        flare.y += Math.sin(flare.angle) * flare.speed;

        // Bounce off edges with padding
        if (flare.x < -flare.size) flare.x = canvas.width + flare.size;
        if (flare.x > canvas.width + flare.size) flare.x = -flare.size;
        if (flare.y < PADDING) {
          flare.y = PADDING;
          flare.angle = -flare.angle; // Reverse vertical direction
        }
        if (flare.y > canvas.height - PADDING) {
          flare.y = canvas.height - PADDING;
          flare.angle = -flare.angle; // Reverse vertical direction
        }

        // Create more defined circular gradient
        const gradient = ctx.createRadialGradient(
          flare.x,
          flare.y,
          0,
          flare.x,
          flare.y,
          flare.size
        );
        gradient.addColorStop(0, flare.color1);
        gradient.addColorStop(0.6, flare.color1); // Maintain solid color longer
        gradient.addColorStop(1, flare.color2);   // Fade to transparent at edge

        // Draw flare
        ctx.beginPath();
        ctx.arc(flare.x, flare.y, flare.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Subtle angle adjustment
        flare.angle += (Math.random() - 0.5) * 0.005;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [opacity, size, count]); // Add dependencies

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
} 