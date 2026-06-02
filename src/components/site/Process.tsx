import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Discover", desc: "We dig into your brand, audience and goals — the blueprint for everything that follows." },
  { n: "02", title: "Design", desc: "High-fidelity, art-directed layouts. Every pixel intentional, every interaction considered." },
  { n: "03", title: "Build", desc: "We engineer it with performance-first code and weave in your automations end-to-end." },
  { n: "04", title: "Launch", desc: "Smooth handover, analytics dialed in, and post-launch iterations to keep climbing." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          
          {/* Sticky Left Column */}
          <div className="relative">
            <div className="sticky top-32 max-w-md">
              <p className="text-sm text-muted-foreground mb-4">/ Framework</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                A calm, four-step process — from concept to launch.
              </h2>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div ref={ref} className="relative pl-10 md:pl-16">
            {/* Track */}
            <div className="absolute left-3 md:left-6 top-2 bottom-2 w-px bg-border" />
            {/* Filled line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-3 md:left-6 top-2 w-px origin-top"
            >
              <div className="h-full w-px bg-gradient-to-b from-accent to-accent-glow" />
            </motion.div>

            <div className="space-y-24 md:space-y-32">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <motion.span 
                    className="absolute -left-[2.4rem] md:-left-[3.6rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-background border border-border"
                    whileInView={{ borderColor: "var(--accent)" }}
                    viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                  >
                    <motion.span 
                      className="h-2 w-2 rounded-full bg-muted"
                      whileInView={{ backgroundColor: "var(--accent-glow)" }}
                      viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                    />
                  </motion.span>
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-xs tracking-widest text-muted-foreground">{s.n}</span>
                    <h3 className="font-display text-3xl md:text-5xl">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
