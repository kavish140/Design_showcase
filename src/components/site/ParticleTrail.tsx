import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  angle: number;
};

const COLORS = [
  "hsl(270, 100%, 70%)", // Violet
  "hsl(290, 100%, 75%)", // Pinkish
  "hsl(250, 100%, 75%)", // Purple
];

export function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse/Touch tracking
    let isMoving = false;
    let lastX = 0;
    let lastY = 0;

    const addParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 40 + 30,
        size: Math.random() * 3 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
      });
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Add particles based on distance moved to create a smooth trail
      if (dist > 5) {
        const count = Math.min(Math.floor(dist / 10), 3); // Max 3 per frame so it's not too dense
        for (let i = 0; i < count; i++) {
          addParticle(
            clientX + (Math.random() - 0.5) * 15, 
            clientY + (Math.random() - 0.5) * 15
          );
        }
        lastX = clientX;
        lastY = clientY;
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // Initialize last position safely
    window.addEventListener("mouseenter", (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
    }, { once: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw particles
      particles.forEach((p, index) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        
        // Gentle rotation
        p.angle += 0.05;

        // Life cycle calculations (grow then shrink)
        const lifeRatio = p.life / p.maxLife;
        // Parabola mapping 0..1 to 0..1..0
        const scale = Math.max(0, Math.sin(lifeRatio * Math.PI));
        const currentSize = Math.max(0, p.size * scale);
        const opacity = Math.max(0, 1 - lifeRatio);

        if (currentSize > 0.1) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          
          ctx.globalAlpha = opacity * 0.7; // Not too prominent
          ctx.fillStyle = p.color;
          
          // Draw pill shape (dash)
          ctx.beginPath();
          ctx.roundRect(-currentSize * 2, -currentSize / 2, currentSize * 4, currentSize, currentSize / 2);
          ctx.fill();
          
          ctx.restore();
        }

        if (p.life >= p.maxLife) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
