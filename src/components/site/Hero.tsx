import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { MouseEvent } from "react";

const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const lineUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: EASE },
  }),
};

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-32 md:pt-44 md:pb-40">
      {/* Ambient blobs */}
      <div
        className="ambient-blob animate-float -top-20 -left-20 h-[420px] w-[420px]"
        style={{ background: "color-mix(in oklab, var(--accent) 35%, transparent)" }}
      />
      <div
        className="ambient-blob animate-float top-40 right-0 h-[360px] w-[360px]"
        style={{ background: "color-mix(in oklab, var(--accent-glow) 30%, transparent)", animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3 w-3 text-accent" />
          A live showcase of design &amp; animation
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
          {["We build websites", "that move your", "business forward."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                custom={i}
                initial="hidden"
                animate="show"
                variants={lineUp}
              >
                {i === 2 ? (
                  <>
                    business <em className="not-italic accent-gradient-text">forward.</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mx-auto mt-8 max-w-xl text-base md:text-lg text-muted-foreground text-balance"
        >
          This page is a live demo — every section below shows the kind of
          motion, polish and craft we bring to your brand's website.
          <span className="block mt-2 text-sm">Scroll to explore. Hover anything.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="liquid-btn group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
          >
            See the showcase
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground text-background">
              <Play className="h-2.5 w-2.5 fill-current" />
            </span>
            Start a project
          </a>
        </motion.div>

        {/* floating preview card */}
        <div 
          className="relative mx-auto mt-20 max-w-4xl [perspective:2000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 0, rotateY: 0 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass rounded-3xl p-2 shadow-[0_30px_80px_-30px_rgba(15,15,25,0.25)]"
          >
            <div 
              className="rounded-2xl bg-gradient-to-br from-muted to-cream h-[320px] md:h-[440px] flex items-center justify-center relative overflow-hidden"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="ambient-blob -top-10 left-10 h-[200px] w-[200px]" style={{ background: "color-mix(in oklab, var(--accent) 50%, transparent)" }} />
              <div className="ambient-blob bottom-0 right-10 h-[240px] w-[240px]" style={{ background: "color-mix(in oklab, var(--accent-glow) 40%, transparent)" }} />
              <div className="relative text-center" style={{ transform: "translateZ(50px)" }}>
                <div className="font-display text-3xl md:text-5xl">Pixel-perfect.</div>
                <div className="mt-2 text-muted-foreground text-sm">Live preview — your next launch lives here.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
